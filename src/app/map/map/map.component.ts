import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {fromLonLat} from 'ol/proj';
import {Icon, Style} from 'ol/style';
import Overlay from 'ol/Overlay';
import RenderFeature from 'ol/render/Feature';
import Control from 'ol/control/Control';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Coordonnées géographiques de la France
    const franceCoords = fromLonLat([1.8538446, 50.9524769]);

    // Création de la carte
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: franceCoords,
        zoom: 14
      })
    });

    // Ajout d'une couche vectorielle pour afficher les points des fastfoods
    const fastfoodLayer = new VectorLayer({
      source: new VectorSource({
        features: [
          // Ici, vous pouvez ajouter des points pour chaque fastfood avec leur coordonnées géographiques et leur nom
          new Feature({
            geometry: new Point(fromLonLat([1.8900331, 50.952682])),
            name: "McDonald's Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.8348239660263062, 50.95263671875])),
            name: "McDonald's - Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.8981820344924927, 50.946144104003906])),
            name: "Burger King Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.8368301, 50.9407528])),
            name: "KFC Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.8375502, 50.9422548])),
            name: "Courtepaille Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.897433, 50.946508])),
            name: "Taco'Snack Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.8903633, 50.9490658])),
            name: "Taco'Snack Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.8624113, 50.9496655])),
            name: "Friterie Chez Steffi Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.8775148, 50.9403289])),
            name: "TacoShake Calais"
          }),new Feature({
            geometry: new Point(fromLonLat([1.8374043703079224, 50.94156265258789])),
            name: "Burger King Calais"
          }),new Feature({
            geometry: new Point(fromLonLat([1.854292, 50.9488753])),
            name: "BAGELSTEIN Calais"
          }),
          new Feature({
            geometry: new Point(fromLonLat([1.867074966430664, 50.94525909423828])),
            name: "Restaurant Istanbul Calais"
          }),
          
          
          
          
          
          
        ]
      }),
      style: new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'https://openlayers.org/en/latest/examples/data/icon.png'
        })
      })
    });

    // Ajout de la couche fastfood à la carte
    map.addLayer(fastfoodLayer);

    // Définition de la fonction pour afficher la popup
    const displayPopup = (evt: any) => {
      const feature = map.forEachFeatureAtPixel(evt.pixel, (feature) => {
        return feature;
      });
      if (feature) {
        const geometry = feature.getGeometry() as Point;
        const coordinates = geometry.getCoordinates();

        const name = feature.get('name');
        new Overlay({
          position: coordinates,
          element: document.getElementById('popup')!,
          offset: [0, -15]
        }).setMap(map);
        document.getElementById('popup-content')!.innerHTML = name;
      }
    };
    
    const customControl = new Control({
      element: document.getElementById('custom-control')
    });
    map.addControl(customControl);
    

    // Ajout d'un événement de clic sur la carte pour afficher la popup
    map.on('click', displayPopup);
  }

}
