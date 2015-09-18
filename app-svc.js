'use strict';

angular.module('sandbox.services', []).
  factory('test',['$http', function($http) {

    var box = {};

    box.exportSass = function(data, sheetName){
       var $form = $('<form>').attr('method', 'POST').attr('action', 'http://sandbox.aroscoe.com/testing/output.php')
                   .append(
                    $('<input>')
                    .attr('type', 'hidden')
                    .attr('name', 'data')
                    .attr('value', data)
                    )
                   .append(
                    $('<input>')
                    .attr('type', 'hidden')
                    .attr('name', 'sheetName')
                    .attr('value', sheetName)
                    )
                   .append(
                    $('<input>')
                    .attr('type', 'hidden')
                    .attr('name', 'type')
                    .attr('value', 'less')
                    );
        $('body').append($form);
        $form.submit();
    };

    // box.toSass = function(styles){
    box.toSass = function(){

      var val = "/* Ouput some sass stuff */\n";

      // angular.forEach(styles, function(item){
      //   val += '$' + item.name + ':' + item.value + ';\n';
      // });

      return val;
    };

     return box;
  }]);