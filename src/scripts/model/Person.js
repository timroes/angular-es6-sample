/*
  Model classes can be exported and imported directly (not using AngularJS' dependency injection).
*/

export default class Person {

	constructor() {
	}

	get name() {
		return "World";
	}

}