const amunt = 5
const aaloo = 1


console.log('hey my first node app')

const compare = (amount)=>{
    if (amount < 10){
        console.log('small number');
    }
    else{
        console.log('large number')
    }
    
}

module.exports.compare= compare
exports.numbers= {aaloo, amunt}