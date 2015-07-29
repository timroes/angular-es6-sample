/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import HomeController from './controllers/HomeController';
import NameService from './services/PersonService';
import {UpperFilter, LowerFilter} from './filters/textFilters';

angular.module('myApp', [])
	.controller('HomeController', HomeController)
	.service('PersonService', NameService)
	.filter('upper', UpperFilter)
	.filter('lower', LowerFilter);