export const randomNumber = (min, max) => {
	const min_ceiled = Math.ceil(min);
	const max_floored = Math.floor(max);
	return Math.floor(Math.random() * (max_floored - min_ceiled + 1)) + min_ceiled;
};
