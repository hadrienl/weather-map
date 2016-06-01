import angular from 'angular';
import {appName} from '../../config/constants';
import MapDirective from './map-directive';
import MapService from './map-service';

let MapComponent = angular.module(`${appName}.map`, []);

export default MapComponent;
