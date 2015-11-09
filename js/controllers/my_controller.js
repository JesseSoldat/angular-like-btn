let MyController = function($scope) {

$scope.hello = "Hello from Angular";
//----------------------------

//----------------------------
$scope.count1 = 0;
$scope.message1 = 'likes';

$scope.like = function() {
 // console.log('clicked');
 $scope.count1++
 $scope.message1 = ($scope.count1 === 1) ? 'like' : 'likes';
};
//----------------------------
$scope.count2 = 0;
$scope.message2 = 'dislikes';

$scope.dislike = function() {
  $scope.count2++
  $scope.message2 = ($scope.count2 === 1) ? 'dislike' : 'dislikes';

};
//----------------------------

};


MyController.$inject = ['$scope'];

export default MyController;