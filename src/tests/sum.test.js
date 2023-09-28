import { expect, test } from 'vitest';
import { randomNumber } from '@/utils/functions';

for (let iteration = 0; iteration < 1000; iteration++) {
	test('Generates random number', () => {
		expect(randomNumber(0, iteration)).lte(iteration);
	});
}
