
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { Tile, Vector as VectorLayer } from 'ol/layer';
import OSM from 'ol/source/OSM.js';
import * as olProj from 'ol/proj';
import Layer from 'ol/layer/Layer';
import Overlay from 'ol/Overlay';


window.onload = init;

function init() {
    var map = new Map({
        target: 'map',
        layers: [
            new Tile({
                source: new OSM()
            })
        ],
        view: new View({
            center: olProj.transform([80.6350, 7.2964], 'EPSG:4326', 'EPSG:3857'),
            zoom: 4
        })
    });

    var popup = new Overlay({
        element: document.getElementById('popup')
    });
    popup.setPosition(coordinate);
    map.addOverlay(popup);

}
