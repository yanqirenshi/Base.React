import Neo4j from '../lib/neo4j/index.js';

import {Book} from  '../models/index.js';

function n (name) {
    return [
        '{',
        'labels:',          `labels(${name})`,         ',',
        'id:',              `ID(${name})`,             ',',
        'label:',           `${name}.label`,           ',',
        'name_ja:',         `${name}.name_ja`,         ',',
        'name_en:',         `${name}.name_en`,         ',',
        'name_scientific:', `${name}.name_scientific`, ',',
        'x:',               `${name}.x`,               ',',
        'y:',               `${name}.y`,               ',',
        'move:',            `${name}.move`,            ',',
        'rank:',            `${name}.rank`,
        '}'
    ].join(' ');
}

function r (name) {
    return `{ id: ID(${name}), type: type(${name}) }`;
}

class Neo4jManeger extends Neo4j{
    // constructor (options) {
    //     super(options);
    // }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    updateState (success, error) {
        const url = this.url();

        fetch(url)
            .then(response=> {
                if (response.ok)
                    return response.json();

                console.error('response.ok:', response.ok);
                console.error('esponse.status:', response.status);
                console.error('esponse.statusText:', response.statusText);

                throw new Error(response.statusText);
            })
            .then(data=> {
                this.state(data);
                this.status(true);

                success && success(data);
            })
            .catch(err => {
                this.state(null);
                this.status(false);

                error && error(err);
            });

    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    makeCreateAttrs (d) {
        return [
            `{`,
            `  label: '${d.label}',`,
            `  name_ja: '${d.name_ja}',`,
            `  name_en: '${d.name_en}',`,
            `  name_scientific: '${d.name_scientific}',`,
            `  x: ${d.x},`,
            `  y: ${d.x},`,
            `  move: '${d.move}',`,
            `  rank: ${d.rank ? `'${d.rank}'` : 'null'}`,
            `}`,
        ].join(' ');
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    createRootOrganism (success, error) {
        const attrs = this.makeCreateAttrs({
            label: '生物',
            name_ja: '生物',
            name_en: 'organism',
            name_scientific: '????????',
            x: 0,
            y: 0,
            move: 'freeze',
            rank: null,
        });

        const node = 'n';

        const statement = [
            `CREATE (${node}:ORGANISM ${attrs}) RETURN ${n(node)}`,
        ];

        this.txCommit([ { statement : statement } ], success, error);
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    fildOrganisms (success, error) {

        const parent = 'p';
        const child = 'c';
        const relationships = 'r';

        this.txCommit([
            {
                statement : [
                    ` MATCH (${parent})-[${relationships}]->(${child}:ORGANISM)`,
                    `RETURN ${n(parent)}`,
                    `     , ${r(relationships)}`,
                    `     , ${n(child)}`,
                ]
            },
        ], success, error);
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    getRootOrganism (success, error) {
        const node = 'n';

        this.txCommit([
            {
                statement : [
                    ` MATCH (${node}:ORGANISM)`,
                    ` WHERE ${node}.label = '生物'`,
                    `RETURN ${n(node)}`,
                ]
            },
        ], success, error);
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    fildChildrenOrganism (parent_id, success, error) {
        this.txCommit([
            {
                statement : [
                    ` MATCH (parent)-[r:HAVE_TO]->(child:ORGANISM)`,
                    ` WHERE id(parent)=${parent_id}`,
                    `RETURN parent, r, child`,
                ]
            },
        ], success, error);
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    createRelationshipOrganism (parent_id, child_data, success, error) {
        const attrs = this.makeCreateAttrs({
            rank: child_data.rank,
            name_ja: child_data.name_ja,
            name_en: child_data.name_en,
            name_scientific: child_data.name_scientific,
            label: child_data.label.contents,
            x: child_data.position.x,
            y: child_data.position.y,
            move: child_data.move,
        });

        const parent = 'p';
        const child = 'c';
        const relationship = 'r';

        const stmt = [
            ` MATCH (${parent}:ORGANISM)`,
            ` WHERE id(${parent})=${parent_id}`,
            `CREATE (${parent})-[${relationship}:HAVE_TO]->(${child}:ORGANISM ${attrs})`,
            `RETURN ${n(parent)}`,
            `     , ${r(relationship)}`,
            `     , ${n(child)}`,
        ];

        this.txCommit([
            {
                statement : stmt,
            },
        ], success, error);
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    updateNodeMove (node_id, move, success, error) {
        const node = 'n';

        const stmt = [
            ` MATCH (${node})`,
            ` WHERE ID(${node}) = ${node_id}`,
            `   SET ${node}.move = '${move}'`,
            `RETURN ${n(node)}`,
        ];

        this.txCommit([
            {
                statement : stmt,
            },
        ], success, error);
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    updateNodePosition (node_id, x, y , success, error) {
        const node = 'n';

        const stmt = [
            ` MATCH (${node})`,
            ` WHERE ID(${node}) = ${node_id}`,
            `   SET ${node}.x = '${x}'`,
            `     , ${node}.y = '${y}'`,
            `RETURN ${n(node)}`,
        ];

        this.txCommit([
            {
                statement : stmt,
            },
        ], success, error);
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    createBook (data, success, error) {
        const book = new Book();

        book.importFormData(data);

        const statements = [ book.stmtCreate() ];

        this.txCommit([ { statement : statements } ], success, error);
    }
    /** **************************************************************** *
     *
     ** **************************************************************** */
    findBooks (success, error) {
        const name = 'n' ;
        const attrs = new Book().cypherReturnAttrs(name);

        this.txCommit([
            {
                statement : [
                    `MATCH (${name}:BOOK) RETURN ${attrs}`,
                ]
            },
        ], success, error);
    }
}


const neo4j = new Neo4jManeger({
    scheme: process.env.REACT_APP_NEO4J_SCHEME,
    host: process.env.REACT_APP_NEO4J_HOST,
    port: process.env.REACT_APP_NEO4J_PORT,
    database: process.env.REACT_APP_NEO4J_DATABASE,
    user: process.env.REACT_APP_NEO4J_USER,
    password: process.env.REACT_APP_NEO4J_PASSWORD,
});

export default neo4j;
