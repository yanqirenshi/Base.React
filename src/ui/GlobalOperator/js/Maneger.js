export default class Maneger {
    makeState () {
        return {
            w: 0,
            h: 0,
            opened_operator: null,
            operators: [
                {
                    code: 'github',
                    label: 'G',
                    w: 50,
                    h: 50,
                    x: 0,
                    y: 0,
                },
                {
                    code: 'h',
                    label: 'H',
                    w: 50,
                    h: 50,
                    x: 0,
                    y: 0,
                },
                {
                    code: 'i',
                    label: 'I',
                    w: 50,
                    h: 50,
                    x: 0,
                    y: 0,
                },
            ],
        };
    }
    changePositionRoots (w, h, state) {
        const padding = 10;

        state.w = w;
        state.h = h;

        const operators = state.operators;

        // y を設定しつつ、全体の w を算出する。
        let operators_w = 0;
        for (const operator of operators) {
            operator.y = h - (operator.h + (padding * 2));

            operators_w += operator.w + (padding * 2);
        }

        // x を設定する。
        let pos_x = Math.floor(w/2 - operators_w/2);
        for (const operator of operators) {
            operator.x = pos_x + padding;
            pos_x += operator.w + (padding * 2);
        }
    }
    switchOpenedOperator (code, state) {
        if (state.opened_operator===code)
            state.opened_operator = null;
        else
            state.opened_operator = code;
    }
}
