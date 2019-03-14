import {expectType} from 'tsd-check';
import pEvery from '.';

const places = [
	Promise.resolve('Norway'),
	'Bangkok, Thailand',
	'Berlin, Germany',
	'Tokyo, Japan'
];

expectType<Promise<boolean>>(
	pEvery(places, x => {
		expectType<string>(x);
		return true;
	})
);
expectType<Promise<boolean>>(
	pEvery(places, async x => {
		expectType<string>(x);
		return true;
	})
);
expectType<Promise<boolean>>(
	pEvery(
		places,
		async x => {
			expectType<string>(x);
			return true;
		},
		{concurrency: 1}
	)
);

const places2 = [
	Promise.resolve('Norway'),
	'Bangkok, Thailand',
	'Berlin, Germany',
	5
];

expectType<Promise<boolean>>(
	pEvery<string | number>(
		places2,
		async x => {
			expectType<string | number>(x);
			return true;
		},
		{concurrency: 1}
	)
);
