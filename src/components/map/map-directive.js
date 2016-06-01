import {directive, inject} from '../../config/decorators';
import {baseURL} from '../../config/constants';

@directive({
  restrict: 'E',
  scope: {

  },
  templateUrl: `${baseURL}components/map/map-directive.html`
})
@inject('$element', 'Map')
export class Map {
  constructor($element, MapService) {
    this.map = MapService.createMap($element[0].querySelector('.map'), {
      lat: 37.41,
      long: 8.82
    });
  }
}
