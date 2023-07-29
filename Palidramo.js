
//Verificação de Palidromo
//solução1
function verificaPalidromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//solução2
//Está comparando o primeiro caractere com o último, o segundo com o penultimo e assim por diante.
//Indice 0 - a length - 1 -i para que continue a comparação corretamento no looping.
function verificaPalidromo2(string) {
    if(!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length -1 -i]){
        return console.log(false);
        }
    }   
return console.log(true);
}

(verificaPalidromo2("banana"))