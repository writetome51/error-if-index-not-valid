# errorIfIndexNotValid(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayLength<br>): void

Triggers error if `index` cannot exist in `arrayLength`.  
`index` is allowed to be negative.

## Examples
```
errorIfIndexNotValid(1, 2); // No error.

errorIfIndexNotValid(2, 2);
// "Error:  The entered index is not valid.  Whether positive or negative,
// it exceeds the index range of the array."

errorIfIndexNotValid(-2, 2); // No error.

errorIfIndexNotValid(-3, 2);
// "Error:  The entered index is not valid.  Whether positive or negative,
// it exceeds the index range of the array."

errorIfIndexNotValid(1, 1);
// "Error:  The entered index is not valid.  Whether positive or negative,
// it exceeds the index range of the array."
```

## Installation
`npm i  error-if-index-not-valid`

## Loading
```js
import { errorIfIndexNotValid } from 'error-if-index-not-valid';
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
