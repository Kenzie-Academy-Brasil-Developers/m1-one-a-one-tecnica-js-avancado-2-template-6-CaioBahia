/*
Sua função deve contar quantas vezes o número passado por parâmetro aparece dentro da lista passada por parâmetro.(for)

Caso a quantidade de vezes que o número aparece dentro da lista seja múltiplo de três, deve retornar a seguinte string:(if)

*/
const lista = [1, 1, 2, 1, 1];


function verificaMultiplosDeTres(arr,number){
   
   let arrcont = []

    for(i = 0 ;i < arr.length ;i++){
        if([i] === number){

            arrcont.push[i]
        }
    }

    
    if(arrcont.length%3 === 0){
        console.log("A quantidade de vezes que o valor aparece é múltiplo de três")
    }
    else{
        
        console.log("A quantidade de vezes que o valor aparece não é múltiplo de três")
    }
    return arrcont
}


verificaMultiplosDeTres(lista,1)

