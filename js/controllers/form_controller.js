let FormController = function($scope) {

$scope.test = 'test';

$scope.changeText = function() {
  $scope.name= 'Mr. Jesse says nice to meet you';
};

};

FormController.$inject = ['$scope'];

export default FormController;

