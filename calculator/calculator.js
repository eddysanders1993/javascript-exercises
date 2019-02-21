function add (x,y) {
return x + y;
}

function subtract (x,y) {
return x - y;
}



function sum (array) {
	return array.reduce((accumulator,nextItem) => accumulator + nextItem,0);

	}


function multiply (array) {
	return array.length
	? array.reduce((accumulator,nextItem) => accumulator * nextItem)
	: 0;
	}


function power(a,b) {
return a**b;
}

function factorial(a) {
if(a==0){
	return 1;
}
let product = 1;
for(var i = 1;i<=a;i++){
	product = product * i;
}
return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
