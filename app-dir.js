'use strict';

angular.module('sandbox.directives', [])
  .directive('myCustomer', function(){
    return{
      restrict: 'A',
      transclude: true,
      template: 'Name: Someone'
    };
  });