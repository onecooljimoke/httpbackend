(function(){
  'use strict';
  
  angular.module('myapp')
  .factory('myfactory', ['$http', myfactory]);
  
  function myfactory($http){
    return {
      getThoughts: getThoughts
    };
    
    function getThoughts() {
      return $http.get('/thoughts');
    }
  }
  
})();