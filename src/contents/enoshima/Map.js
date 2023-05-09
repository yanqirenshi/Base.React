import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';

// https://freedom-tech.hatenablog.com/entry/2020/12/06/214824
// https://www.gsi.go.jp/GIS/jpgis-jpgidx.html

const template = {
    title: "Earthquake Info",
    content: "Magnitude {mag} {type} hit {place} on {time}",
    fieldInfos: [
        {
            fieldName: "time",
            format: {
                dateFormat: "short-date-short-time"
            }
        }
    ]
};

const renderer = {
    type: "simple",
    field: "mag",
    symbol: {
        type: "simple-marker",
        color: "orange",
        outline: {
            color: "white"
        }
    },
    visualVariables: [
        {
            type: "size",
            field: "mag",
            stops: [
                {
                    value: 2.5,
                    size: "4px"
                },
                {
                    value: 8,
                    size: "40px"
                }
            ]
        }
    ]
};

function makeArcGISMap (ArcGISMap) {
    return new ArcGISMap({
        basemap: 'topo-vector'
    });
}

function makeGeoJSONLayer (url, GeoJSONLayer) {
    return new GeoJSONLayer({
        url: url,
        copyright: "USGS Earthquakes",
        popupTemplate: template,
        renderer: renderer //optional
    });
}

function makeMapView (mapRef, map, MapView) {
    return new MapView({
        container: mapRef.current,
        map: map,
        center: [139.481, 35.302],
        zoom: 17.005,
    });
}

const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

const libs = ["esri/layers/GeoJSONLayer", 'esri/Map', 'esri/views/MapView',  ];

export default function Map () {
    const mapRef = useRef();

    useEffect(() => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        const fn = ([GeoJSONLayer, ArcGISMap, MapView,]) => {

            const geojsonLayer = makeGeoJSONLayer(url, GeoJSONLayer);

            const map = makeArcGISMap(ArcGISMap);

            map.add(geojsonLayer);

            const view = makeMapView(mapRef, map, MapView);

            return () => {
                if (view) {
                    // destroy the map view
                    view.destroy();
                }
            };
        };

        loadModules(libs, { css: true }).then(fn);
    });

    return <div ref={mapRef} style={{height: '100%'}}/>;
}
