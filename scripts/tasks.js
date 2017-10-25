// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов,
// а возвращать – массив значений одного из полей (отсортированных в порядке возрастания):
// ------------------------

function getFieldValues(usersData, field){
	var arr = [];
	for (var i in usersData) {
		arr.push(usersData[i][field]);

	}
	return arr.sort();
}

let usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// ------------------------


// 2) Написать функцию, фильтрующую массив с использованием предиката:
// ------------------------

let numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {
	return (x % 2 == 0) ? true : false;
}

function filter(numbers, isEven){
	let arr = [];
	for (i = 0; i < numbers.length; i += 1) {
		if (isEven(numbers[i])){
			arr.push(numbers[i]);
		}
	}
	return arr;
}

console.log(filter(numbers, isEven)); // --> [2, 8, 34]

// ------------------------


// 3) Даны 2 строки со словами (без знаков препинания),
// вывести те слова (по одному разу), которые встречаются в обоих строках
// ------------------------

function findSimilarWords(str1, str2){
	let arr1 = str1.split(' ');
	let arr2 = str2.split(' ');
	let similar = [];
	for (i = 0; i < arr1.length; i += 1) {
		if (arr2.includes(arr1[i])){
			if (similar.includes(arr1[i]) == false){
				similar.push(arr1[i]);
			}
		}
	}
	return similar;
}

var firstLongString = 'Load up on guns and bring your friends it is fun to lose and to pretend';
var secondLongString = 'She is over bored and self assured oh no I know a dirty word';
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and', 'is'];


// ------------------------



// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:
// ------------------------

function cidrToNetMask(num){
	let maskBinArr = [];
	let maskArr = [];
	let chunk = 8;
	let inverse = [];
	let maskInv = [];

	for (i = 0; i < 32; i += 1){
		if (num > 0){
			maskBinArr.push(1);
		}
		else{
			maskBinArr.push(0);
		}
		num -= 1;
	}

//inverse mask

	for (i = 0; i < 32; i += 1) {
		inverse[i] = (maskBinArr[i] == 0) ? 1 : 0;
	}

	for (i=0; i<32; i+=chunk) {
    	maskArr.push(parseInt(maskBinArr.slice(i,i+chunk).join(''), 2));
		maskInv.push(parseInt(inverse.slice(i,i+chunk).join(''), 2));
	}

	return [maskArr, maskInv];
}

function generateBroadcastAndNetworsAddresses(ip, mask){
	let ipArr = ip.split('.');
	let NetAddress = [];
	var inv = cidrToNetMask(mask)[1];
	var mask = cidrToNetMask(mask)[0];
	let broadcast = [];

//calculate NetAddress

	for (i = 0; i < 4; i += 1){
		NetAddress[i] = parseInt(ipArr[i]) & mask[i];
	}

//calculate Broadcast

	for (i = 0; i < 4; i += 1){
		broadcast[i] = NetAddress[i] | inv[i];
	}

//output

	var broadcastOut = broadcast.join('.');
	var netAddressOut = NetAddress.join('.');

	return "Broadcast - " + broadcastOut + ", Network - " + netAddressOut;
}

var IpAddress = '10.223.98.2';
var subnetMask = 28;
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// ------------------------


// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// ------------------------

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function makeItClean(arr){
	let out = [];
	for (i = 0; i < arr.length; i += 1){
		if (out.includes(arr[i]) == false){
			out = out.concat(arr[i]);
		}
	}
	return out.filter(onlyUnique);
}

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, '1', undefined, true];

// ------------------------
