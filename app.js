(function(){
  angular
    .module('sandbox', ['sandbox.services', 'sandbox.directives', 'angularSpectrumColorpicker'])
    .controller('sandboxController', function($scope, $http, test){
      var sandboxCtrl = this;
      
      var sassInputs = [
        {type: 'text', label: 'Brand Primary', name: 'brand_prime', value: '#1b4cab'},
        {type: 'text', label: 'Brand Secondary',name: 'brand_second', value: '#'+shadeColor1('1b4cab', 25.5)}, //#628fe6
        {type: 'text', label: 'Body Background Color',name: 'bg_color', value: '#d8d8d8'},
        {type: 'text', label: 'Body Text Color',name: 'text_color', value: '#000'},
        {type: 'text', label: 'Panel Background Color',name: 'dropdownpanel_bg_color', value: '#eee'},
        {type: 'text', label: 'Panel Text Color',name: 'dropdownpanel_text_color', value: '#000'},
        {type: 'text', label: 'Link Color',name: 'link_color', value: '#000'},
        {type: 'text', label: 'Link Hover Color',name: 'link_hover_color', value: ''},
      ];

      $scope.formData = {};
      $scope.formData.sassInputs = sassInputs;

      $scope.outputSass = function(){
        console.log($scope.formData.sassInputs);
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

function shadeColor1(color, percent) {  
  var num = parseInt(color,16),
  amt = Math.round(2.55 * percent),
  R = (num >> 16) + amt,
  G = (num >> 8 & 0x00FF) + amt,
  B = (num & 0x0000FF) + amt;
  return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}