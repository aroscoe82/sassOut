(function(){
  angular
    .module('sandbox', ['sandbox.services', 'sandbox.directives', 'angularSpectrumColorpicker'])
    .controller('sandboxController', function($scope, $http, test){
      var sandboxCtrl = this;

      // var sassInputs = [
      //   {type: 'text', label: 'Brand Primary', name: 'brand_prime', value: '#1b4cab'},
      //   {type: 'text', label: 'Brand Secondary',name: 'brand_second', value: '#'+lightenColor('1b4cab', 25.5)}, //#628fe6
      //   {type: 'text', label: 'Body Background Color',name: 'bg_color', value: '#d8d8d8'},
      //   {type: 'text', label: 'Body Text Color',name: 'text_color', value: '#000'},
      //   {type: 'text', label: 'Panel Background Color',name: 'dropdownpanel_bg_color', value: '#eee'},
      //   {type: 'text', label: 'Panel Text Color',name: 'dropdownpanel_text_color', value: '#000'},
      //   {type: 'text', label: 'Link Color',name: 'link_color', value: '#ff0000'},
      //   {type: 'text', label: 'Link Hover Color',name: 'link_hover_color', value: '#'+darkenColor('ff0000', 25.5)},
      // ];

      var sassInputs = {
        brand_prime: {
          name: 'brand_prime',
          type: 'colorPallet', 
          label: 'Brand Primary',
          value: '#1b4cab'
        },
        brand_secondary: {
          name: 'brand_secondary',
          type: 'colorPallet', 
          label: 'Brand Secondary',
          value: '#'+lightenColor('1b4cab', 25.5)
        },
        bg_color: {
          name: 'bg_color',
          type: 'colorPallet', 
          label: 'Body Background Color',
          value: '#d8d8d8'
        },
        text_color: {
          name: 'text_color',
          type: 'colorPallet', 
          label: 'Body Text Color',
          value: '#000'
        },
        dropdownpanel_bg_color: {
          name: 'dropdownpanel_bg_color',
          type: 'colorPallet', 
          label: 'Panel Background Color',
          value: '#eee'
        },
        dropdownpanel_text_color: {
          name: 'dropdownpanel_text_color',
          type: 'colorPallet', 
          label: 'Panel Text Color',
          value: '#000'
        },
        link_color: {
          name: 'link_color',
          type: 'colorPallet', 
          label: 'Link Color',
          value: '#ff0000'
        },
        link_hover_color: {
          name: 'link_hover_color',
          type: 'colorPallet', 
          label: 'Link Hover Color',
          value: '#'+darkenColor('ff0000', 25.5)
        },
        link_decoration: {
          name: 'link_decoration',
          type: 'checkbox', 
          label: 'Link Text Decoration',
          value: 'underline'
        },
      };

      $scope.formData = {};
      $scope.formData.sassInputs = sassInputs;

      $scope.outputSass = function(){
        var sheetName = "testing";
        var dataSass = test.toSass($scope.formData.sassInputs);
        test.exportSass(dataSass, sheetName);
      };
    });
})();

function lightenColor(color, percent) {  
  var num = parseInt(color,16),
  amt = Math.round(2.55 * percent),
  R = (num >> 16) + amt,
  G = (num >> 8 & 0x00FF) + amt,
  B = (num & 0x0000FF) + amt;
  return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}

function darkenColor(color, percent) {  
  var num = parseInt(color,16),
  amt = Math.round(2.55 * percent),
  R = (num >> 16) - amt,
  G = (num >> 8 & 0x00FF) - amt,
  B = (num & 0x0000FF) - amt;
  return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}