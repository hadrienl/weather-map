import {directive, inject} from '../../config/decorators';

@directive({
  restrict: 'E',
  scope: {
    lat: '=',
    long: '=',
    title: '='
  },
  require: '^map'
})
export class Marker {
  @inject Map;
  link(scope, el, attrs, map) {
    this.marker = this.Map.addMarker(map.map, {
      lat: this.lat,
      long: this.long,
      title: this.title
    });
  }
}
