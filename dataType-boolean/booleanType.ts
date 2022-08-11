let isPig:boolean = true;

function checkPig(animal:string){
    if(animal === 'pig'){
        isPig = true;
    } else{
        isPig=false;
    }
}

checkPig('dog');

console.log(isPig);

checkPig('pig');

console.log(isPig);