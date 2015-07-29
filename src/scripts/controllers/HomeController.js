/*
  You could also use a class for a controller, but if you work
  with $scope and not the controller-as syntax a function makes
  more sense, because most of the code would anyway go to the
  constructor if you would use a class.
*/

export default function($scope, PersonService) {
	'ngInject';
	// ngAnnotate understand this string literal and annotates this method.
	// Due to babels transformation you cannot use /*@ngInject*/ (what you can with classes)
	// to annotate functions.

	PersonService.getPerson().then(function(person) {
		$scope.person = person;
	});

}