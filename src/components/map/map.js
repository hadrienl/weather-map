import angular from 'angular';
import {appName} from '../../config/constants';
import './map-service';
import './map-directive';
import './marker-directive';
import './marker-info-directive';

let MapComponent = angular.module(`${appName}.map`, []);

export default MapComponent;
