import { expect, test } from 'vitest';
import { example } from './example';

test('adds 1 + 2 to equal 3', () => {
	expect(example(1, 2)).toBe(3);
});
