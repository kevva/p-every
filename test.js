import test from 'ava';
import pEvery from '.';

test('true', async t => {
	t.true(await pEvery([Promise.resolve(1), 3], x => x % 2));
	t.true(await pEvery([1, 3], async value => value % 2));
});

test('false', async t => {
	t.false(await pEvery([Promise.resolve(1), 2, 3, 4], x => x % 2));
	t.false(await pEvery([1, 2, 3, 4], async value => value % 2));
});

test('fail fast', async t => {
	const concurrency = 1;
	let count = 0;

	await pEvery([Promise.resolve(1), 2, 3, 4], value => {
		count++;
		return value % 2;
	}, {concurrency});

	t.is(count, 2);
});

test('handles empty iterable', async t => {
	t.deepEqual(await pEvery([]), true);
});
