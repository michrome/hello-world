export async function get() {
	const build = { date: Date.now() };
	return {
		body: { build }
	};
}
