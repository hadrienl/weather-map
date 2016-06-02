import {directive, inject} from '../../config/decorators';

@directive({
  restrict: 'E',
  require: ['^map', '^marker']
})
@inject('$element')
export class MarkerInfo {
  @inject Map;

  constructor($element) {
    this.$element = $element;
  }

  link(scope, el, attrs, ctrls) {
    const [map, marker] = ctrls;
    scope.$watch(() => marker.marker, newVal => this.attach(map.map, newVal));
    this.info = this.Map.createInfoWindow(this.$element[0]);
  }

  attach(map, marker) {
    marker.addListener('click', () => {
      if (!marker) {
        return;
      }
      this.info.open(map, marker);
    });
  }
}
