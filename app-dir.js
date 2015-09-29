'use strict';

angular.module('sandbox.directives', [])
  .directive('sass-text', function() {
    var baseUrl = 'partials/';

    return {
      restrict: 'C',
      replace: false,
      transclude: true,
      templateUrl: baseUrl + 'colorPallet.html'
    } 
  })
  .directive('sassType', ['$compile', '$http', '$templateCache', function($compile, $http, $templateCache) {
    // https://coderwall.com/p/mgtrkg/variable-templates-for-an-angularjs-directive
        var getTemplate = function(contentType) {
            var templateLoader,
            baseUrl = 'partials/',
            templateMap = {
                text: 'empty.html',
                colorPallet: 'colorPallet.html',
                checkbox: 'checkbox.html',
            };

            var templateUrl = baseUrl + templateMap[contentType];
            templateLoader = $http.get(templateUrl, {cache: $templateCache});

            return templateLoader;

        }

        var linker = function(scope, element, attrs) {

            var loader = getTemplate(scope.post.type);

            var promise = loader.success(function(html) {
                element.html(html);
            }).then(function (response) {
                element.replaceWith($compile(element.html())(scope));
            });
        }

        return {
            restrict: 'A',
            replace: false,
            transclude: true,
            scope: {
                post:'='
            },
            link: linker
        };
    }]);