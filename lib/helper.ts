export const runtimeFormatter = (runtime: number): string => {
	let res = '';
	res += `${Math.floor(runtime / 60)}h`;
	res += `${runtime % 60}m`;

	return res;
};
