app.factory('userFactory',['$http', function($http){
    var factory = {};
    factory.Create = function(user, callback){
      $http.post('/user', user).then(function(returned_data){
        var user = returned_data.data;
        factory.user = user
        callback(user)
      })
    };

    factory.GetUser = function(){
      return (factory.user);
    };

    factory.FindUserByName = function(user, callback){
      $http.post('/finduser', user).then(function(returned_data){
        factory.user = returned_data.data
        callback(returned_data.data)
      })
    };
    factory.FindUserByID = function(user, callback){
      $http.post('/FindUserByID',user).then(function(returned_data){
        factory.userfound = returned_data.data
        callback(returned_data.data)
      })
    };
    factory.index = function(callback){
        $http.get('/users').then(function(returned_data){
          users = returned_data.data;
          callback(users);
        });
    }
    return factory;
}]);


app.factory('listFactory',['$http', function($http){
  function listFactory(){
    var _this = this;
    this.addList = function(list, callback){
      $http.post('/list', list).then(function(returned_data){
        console.log("after add http request",returned_data.data);
        callback(returned_data.data);
      })
    }

    this.index = function(callback){
      $http.get('/lists').then(function(returned_data){
        lists = returned_data.data;
        callback(lists);
      });
    };
    this.checkItem = function(list){
      $http.get(`/list/check/${list._id}`).then(function(returned_data){
        console.log(returned_data)
      })
    }
    this.uncheckItem = function(list){
      $http.get(`/list/uncheck/${list._id}`).then(function(returned_data){
        console.log(returned_data)
      })
    }
  }
  return new listFactory();
}])
