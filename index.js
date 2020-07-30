import {indexIsValid} from '@writetome51/index-is-valid';


// index can be negative or positive.

export function errorIfIndexNotValid(index, arrayLength) {
	if (!(indexIsValid(index, arrayLength))) {
		throw new Error(
			`The entered index is not valid.  Whether positive or negative, it exceeds 
			the index range of the array.`
		);
	}
}
