import {service} from '../../config/decorators';

@service
export class Map {
  constructor() {
    this._lib = window.google.maps;
  }

  get lib () {
    return this._lib;
  }

  createMap(el, { lat, long, zoom = 4 }) {
    console.log(lat, long, zoom);
    return new this._lib.Map(el, {
      zoom: zoom,
      center: {lat, lng: long}
    });
  }

  addMarker(map, { lat, long, title }) {
    return new this._lib.Marker({
      position: {
        lat: lat,
        lng: long
      },
      map: map,
      title: title
    });
  }

  createInfoWindow(content) {
    return new this._lib.InfoWindow({
      content: content
    });
  }
}
