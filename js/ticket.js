const formBtnElement = document.querySelector('input[type="button"]')
const price = document.getElementById('price')
// console.log(sale, price)
const priceSingleKm=0.21

const inputKmElement = document.querySelector(
	'#example-2 input[name="distance"]'
)
const inputName = document.querySelector(
	'#example-2 input[name="passenger"]'
)
console.log(inputName)
const selectAgeElement = document.querySelector(
	'#example-2 select[name="age"]'
)
const name = document.getElementById('name')
// console.log(formBtnElement, inputKmElement, selectAgeElement)


formBtnElement.addEventListener('click', function () {
	// console.log('Il bottone funziona')
	console.log(inputKmElement.value, selectAgeElement.value,inputName.value )
	name.innerHTML=( 'Benvenuto a bordo: ' +inputName.value  )
    let distance = inputKmElement.value
	const lenght =document.getElementById('tripLenght')
	lenght.innerHTML= (distance  + ' Km')
    //console.log(distance)
	let discountSelection = selectAgeElement.value
	const planeSelected = document.getElementById("sale")
	const selectedOption = document.querySelector("option:checked");
	planeSelected.innerText = 'Hai scelto la tariffa: ' + selectedOption.text;
	

	switch (discountSelection) {
		case 'youngh':
            const youngPrice=priceSingleKm* distance * 0.8
            //console.log(youngPrice)
            price.innerHTML= (youngPrice.toFixed(2) + '&euro;')
			break
		case 'senior':
			const senioPrice=priceSingleKm*distance*0.6
			price.innerHTML=(senioPrice.toFixed(2)  + '&euro;')
			break
		default:
			const normalPrice= priceSingleKm*distance
			price.innerHTML=(normalPrice.toFixed(2)  + '&euro;')
	}
})
