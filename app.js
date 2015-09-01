(function(){
  angular
    .module('sandbox', ['sandbox.services'])
    .controller('sandboxController', function($scope, $http, test){
      var sandboxCtrl = this;

      $scope.sassInputs = [
        {type: 'input', label: 'Brand Primary', name: 'brand_prime'},
        {type: 'input', label: 'Brand Secondary',name: 'brand_second'},
        {type: 'input', label: 'Text Color',name: 'text_color'},
        {type: 'input', label: 'Background Color',name: 'bg_color'}
      ];

      $scope.outputSass = function(){
        // console.log('addColors');
        // console.log(this.theme);
        // var sheetName = "testing";
        // var dataSass = "/* Ouput some sass stuff */\n$black: #000;\n$white: #fff;"
        // test.exportSass(dataSass, sheetName);
        // console.log(test.toSass("testing"));
        console.log(this.theme);
      };


      $scope.outputSassServerSize = function(){
        var dataSass = "/* Ouput some sass stuff */\n$black: #000;\n$white: #fff;\n$red: #F00;"
        var request = $http({
          method: "post",
          url: window.location.href + "output2.php",
          data: {
            sass: dataSass
          },
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        /* Check whether the HTTP Request is successful or not. */
        request.success(function (data) {
         // document.getElementById("message").textContent = "You have login successfully with email "+data;
         console.log(data);
        });
      };
    });
})();