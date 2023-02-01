const formBtnElement = document.querySelector('input[type="button"]')

// const boxElement = document.querySelector('#example-2 .box')
const sale = document.querySelector('#sale')
const price = document.querySelector('#price')
console.log(sale, price)
// const inputWidthElement = document.querySelector(
// 	'#example-2 input[name="distance"]'
// )
const inputKmElement = document.querySelector(
	'#example-2 input[name="distance"]'
)
const selectAgeElement = document.querySelector(
	'#example-2 select[name="age"]'
)

console.log(formBtnElement, inputKmElement, selectAgeElement)

formBtnElement.addEventListener('click', function () {
	console.log('Il bottone funziona')

	console.log(inputKmElement.value, selectAgeElement.value)
    
})
