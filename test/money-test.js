import {formateCurrency} from '../script/ulils/money.js';
console.log('test suite: formateCurrency');

console.log('convert cent into dollars');

if (formateCurrency(2095) === '20.95'){

    console.log('passed'); 
}else {
    console.log('failed');
}

console.log('works with 0');

if (formateCurrency(0) === '0.00'){
console.log('passed');
}else {
    console.log('failed');
}

console.log('round up to the nearest cent');

if (formateCurrency(2000.5) === '20.01'){
    console.log('passed');
}else {
    console.log('failed');
}