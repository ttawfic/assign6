angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://serene-everglades-86457.herokuapp.com/api/listings');
      },

      create: function(listing) {
        return $http.post('http://serene-everglades-86457.herokuapp.com/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('http://http://serene-everglades-86457.herokuapp.com/api/listings' + id);
      }, 

      update: function(id, listing) {
        return $http.put('http://serene-everglades-86457.herokuapp.com/api/listings' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('http://serene-everglades-86457.herokuapp.com/api/listings' + id);
      }
    };

    return methods;
  }
]);