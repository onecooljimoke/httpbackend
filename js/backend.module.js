(function(angular) {
  'use strict';
  
  angular.module('fakeresponse', ['myapp', 'ngMockE2E'])
  .run(function($httpBackend) {
    var thoughts = {
        dinosaur_thoughts: "Dinosaurs are the coolest",
        unicorn_thoughts: "Unicorns are kind of meh"
    };

  // returns thoughts
  $httpBackend.whenGET('/thoughts').respond(thoughts);

  });
})(window.angular);