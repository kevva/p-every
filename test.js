import test from 'ava';
import m from '.';

test('true', async t => {
	t.true(await m([Promise.resolve(1), 3], x => x % 2));
	t.true(await m([1, 3], x => Promise.resolve(x % 2)));
});

test('false', async t => {
	t.false(await m([Promise.resolve(1), 2, 3, 4], x => x % 2));
	t.false(await m([1, 2, 3, 4], x => Promise.resolve(x % 2)));
});

test('fail fast', async t => {
	const concurrency = 1;
	let count = 0;

	await m([Promise.resolve(1), 2, 3, 4], x => {
		count++;
		return x % 2;
	}, {concurrency});

	t.is(count, 2);
});

test('handles empty iterable', async t => {
	t.deepEqual(await m([]), true);
});
