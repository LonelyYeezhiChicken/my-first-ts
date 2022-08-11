var isPig = true;
function checkPig(animal) {
    if (animal === 'pig') {
        isPig = true;
    }
    else {
        isPig = false;
    }
}
checkPig('dog');
console.log(isPig);
checkPig('pig');
console.log(isPig);
