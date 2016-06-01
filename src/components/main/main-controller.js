import {controller} from '../../config/decorators';

@controller
export class MainCtrl {
  constructor() {
    this.lat = 1.154;
    this.long = 46.974;
    this.zoom = 6;
  }
}
