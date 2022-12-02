function countHours(year, holidays):number {
	return holidays.reduce((acc, cur):number => {
		return ([1, 2, 4, 5, 3].includes((new Date(cur + "/" + year)).getDay())) ? acc += 2 : acc
	}, 0)
}

function countHours3(year, holidays):number {

	return holidays.reduce((acc, cur):number => {
		const day:number = (new Date(cur + "/" + year)).getDay() || 0
		return (day !== 0 && day !== 6) ? acc += 2 : acc


	}, 0)
}