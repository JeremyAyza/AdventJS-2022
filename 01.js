//UNA SOLA LINEA
wrapping = (gifts) => [...gifts.map(e => `${"*".repeat(e.length + 2)}\n*${e}*\n${"*".repeat(e.length + 2)}`)]



function wrapping(gifts) {
	return gifts.map(e => {
		const tapa = "*".repeat(e.length + 2)
		return `${tapa}\n*${e}*\n${tapa}`
	})

}


function wrapping(gifts) {
	return [...gifts.map(e => {
		const tapa = "*".repeat(e.length + 2)
		return `${tapa}\n*${e}*\n${tapa}`
	})]

}

wrapping = (gifts) => [...gifts.map(e => `${"*".repeat(e.length + 2)}\n*${e}*\n${"*".repeat(e.length + 2)}`)]