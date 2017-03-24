app.controller('loginController', ['$scope', '$location', 'userFactory', function($scope, $location, userFactory){

  $scope.login = function(user){
    userFactory.FindUserByName(user, function(result){
      if (result == null){
        userFactory.Create(user, function(result1){
          $location.url('/dashboard')
        })
      } else {
        $location.url('/dashboard')
      }
    })
  }
}]);

app.controller('dashboardController', ['$scope', 'listFactory', 'userFactory', function($scope, listFactory, userFactory) {
    var list_index = function() {
        listFactory.index(function(returned_data) {
            $scope.lists = returned_data;
        });
    };
    var user_index = function() {
        userFactory.index(function(returned_data) {
            $scope.users = returned_data;
        });
    };
    list_index();
    user_index();
    $scope.current_user = userFactory.GetUser();

    $scope.addList = function(list) {
        list._creator = $scope.current_user._id
        listFactory.addList(list, function(result) {
            if (list.error) {
                $scope.errors = list.error
                console.log(error, "list error dashboardController");
            } else {
                console.log(result);
                $scope.list = result;
                list_index();
            }
        })
    };
    $scope.checkItem = function(list) {
        if (list.status == "0") {
            listFactory.checkItem(list);
        } else {
            listFactory.uncheckItem(list);
        }
    };

}]);

app.controller('showController', ['$routeParams', '$scope', '$location', 'userFactory', 'listFactory', function($routeParams, $scope, $location, userFactory, listFactory){
  var id = $routeParams.id
  var user = {};
  user.id = id;
  userFactory.FindUserByID(user, function(returned_data){
    $scope.userfound = returned_data;
  });
  listFactory.index(function(returned_data){
    $scope.lists = returned_data;
  });
}]);
