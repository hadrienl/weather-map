import {directive, inject} from '../../config/decorators';

const windows = [];

@directive({
  restrict: 'E',
  scope: {
    onClick: '&'
  },
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
    windows.push(this.info);
  }

  attach(map, marker) {
    marker.addListener('click', () => {
      if (!marker) {
        return;
      }

      for (let w of windows) {
        w.close();
      }

      this.info.open(map, marker);
      if (this.onClick) {
        this.onClick();
      }
    });
  }
}
