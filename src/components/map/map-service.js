import {service} from '../../config/decorators';

@service
export class Map {
  constructor() {
    this.ol = window.ol;
  }

  get lib () {
    return this.ol;
  }

  createMap(el, { lat, long }) {
    const ol = this.ol;
    return new ol.Map({
      target: el,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.MapQuest({layer: 'sat'})
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([lat, long]),
        zoom: 4
      })
    });
  }
}
