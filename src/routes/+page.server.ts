export async function load({ locals: { db } }) {
	return {
		routes: await db.route.findMany(),
	}
}
