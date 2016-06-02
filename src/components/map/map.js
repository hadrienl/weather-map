import angular from 'angular';
import {appName} from '../../config/constants';
import MapService from './map-service';
import MapDirective from './map-directive';
import MarkerDirective from './marker-directive';
import MarkerInfoDirective from './marker-info-directive';

let MapComponent = angular.module(`${appName}.map`, []);

export default MapComponent;
