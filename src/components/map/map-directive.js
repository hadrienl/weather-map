import {directive, inject} from '../../config/decorators';
import {baseURL} from '../../config/constants';

@directive({
  restrict: 'E',
  scope: {
    centerLat: '=',
    centerLong: '=',
    centerZoom: '='
  },
  templateUrl: `${baseURL}components/map/map-directive.html`
})
@inject('$element', 'Map')
export class Map {
  constructor($element, MapService) {
    this.$element = $element;
    this.MapService = MapService;
  }

  link() {
    this.map = this.MapService.createMap(this.$element[0].querySelector('.map'), {
      lat: this.centerLat,
      long: this.centerLong,
      zoom: this.centerZoom
    });
  }
}
