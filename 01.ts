function wrapping(gifts: String[]): String[] {
	return gifts.map(e => {
		const tapa:String = "*".repeat(e.length + 2);
		return `${tapa}\n*${e}*\n${tapa}`;
	})
}
