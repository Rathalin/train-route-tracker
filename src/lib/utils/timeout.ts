export function timeout(milliseconds: number = 0) {
	return new Promise<void>((resolve) => setTimeout(resolve, milliseconds))
}
