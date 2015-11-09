import angular from 'angular';
import MyController from './controllers/my_controller.js';
import FormController from './controllers/form_controller.js';



angular.module('app', [])

.controller("MyController", MyController)
.controller("FormController", FormController);