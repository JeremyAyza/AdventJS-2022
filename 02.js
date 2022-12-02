function countHours(year, holidays) {
	return holidays.reduce((acc, cur) => {
		return ([1, 2, 4, 5, 3].includes((new Date(cur + "/" + year)).getDay())) ? acc += 2 : acc
	}, 0)
}

function countHours3(year, holidays) {

	return holidays.reduce((acc, cur) => {
		const day = (new Date(cur + "/" + year)).getDay() || 0
		return (day !== 0 && day !== 6) ? acc += 2 : acc


	}, 0)
}