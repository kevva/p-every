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

test('handles empty iterable', async t => {
	t.deepEqual(await m([]), true);
});
