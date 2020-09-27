export const breakpoints = {
	XS: 23.4375,
	SM: 26.5625,
	MD: 48,
	LG: 64,
	XL: 90,
};

export const mediaQuery = key => {
	return style => `@media(min-width: ${breakpoints[key]}rem) {${style}}`;
};
