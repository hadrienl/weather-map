import {controller} from '../../config/decorators';

@controller
export class MainCtrl {
  constructor() {
    this.searchTag = 'AngularJS';
  }
}
