import Person from '../model/Person';

export default class PersonService {

	/*
	  The below annotation will be processes by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($q) {
		this._$q = $q;
	}

	getPerson() {
		return this._$q.when(new Person());
	}
}