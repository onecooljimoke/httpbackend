(function() {
  'use strict';
  
  angular.module('myapp')
  .controller('myctrl', ['myfactory', myctrl]);
  
  function myctrl(myfactory){
    var vm = this;
    vm.thoughts = [];
    
    vm.getThoughts = getThoughts;
    
    function getThoughts(){
      myfactory.getThoughts().then(function(res){
        vm.thoughts = res.data;
      })
    }
  }
})();