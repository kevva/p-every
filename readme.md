# p-every [![Build Status](https://travis-ci.org/kevva/p-every.svg?branch=master)](https://travis-ci.org/kevva/p-every)

> Test whether all promises passes a testing function

Like [`Array.every`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) for promises.

## Install

```
$ npm install --save p-every
```


## Usage

```js
const pEvery = require('p-every');
const getContinent = require('get-continent'); // not a real module

const places = [
	getCapital('Norway').then(info => info.name),
	'Bangkok, Thailand',
	'Berlin, Germany',
	'Tokyo, Japan'
];

const testingFunction = x => getContinent(x).then(x => x === 'europe');

pEvery(places, testingFunction).then(result => {
	console.log(result);
	//=> false
});
```


## API

### pEvery(input, testingFunction, [options])

Returns a `Promise` that is fulfilled when all promises in `input` and ones returned from `testingFunction` are fulfilled, or rejects if any of the promises reject. The fulfilled value is a `boolean` that is `true` if all Promises passed the test and `false` otherwise.

#### input

Type: `Iterable<Promise|any>`

Iterated over concurrently in the `testingFunction` function.

#### testingFunction(element, index)

Type: `Function`

Expected to return a `Promise<boolean>` or `boolean`.

#### options

Type: `Object`

##### concurrency

Type: `number`<br>
Default: `Infinity`<br>
Minimum: `1`

Number of concurrently pending promises returned by `testingFunction`.


## Related

* [p-filter](https://github.com/sindresorhus/p-filter) - Filter promises concurrently
* [p-locate](https://github.com/sindresorhus/p-locate) - Get the first fulfilled promise that satisfies the provided testing function
* [p-map](https://github.com/sindresorhus/p-map) - Map over promises concurrently
* [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Kevin Martensson](http://github.com/kevva)
