//Substituir arrays pares
function substituiPares(array) {
    if(!array) return -1;
    if(!array.length) return -1
    
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] !== 'number'){
            console.log(`O elemento "${array[i]}" na posição ${i} não é um número.`)
        }

        else if(array[i] === 0) {
            console.log("Você já é zero!!!")
        } else if(array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }
    return array;
}

let arr = [1, 9, 4, 2, 70, 67, 23, 50, 'banana'];
console.log(substituiPares(arr));


