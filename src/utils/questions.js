function solution(A) {

  if(Math.min(...A) < 1){
    return 1
  }else{
    //Ordenando o array
    const ordenarNum = A.sort()
    
    //Tirando as Duplicatas do array
    const tirarDuplicata = [...new Set(ordenarNum)]

    //Pegando o menor valor
    var menorNumero = Math.min(...A)

    tirarDuplicata.forEach(numero => {
      if(numero != menorNumero){
        return menorNumero;
      }
      menorNumero++;
    })
    return menorNumero
  }
  
}

function fibonacci(n) {
  
  if(n <  3) return 1;

  let anterior = 1;
  let atual = 1;
  const arrayFibo = [`${1}, `]
  let somaPares = 0;
  

  for(let i = 2; i < n+1 && 4000000 >= atual; i++){
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    arrayFibo.push(proximo+', ')
    if(atual % 2 === 0) somaPares+=atual;
  }

  return [arrayFibo, [`Soma de todos os Numero pares: ${somaPares}`]]
}

function getWinner(A, B) {
  let pontosA = 0;
  let pontosB = 0;

  //console.log(jogada(A[2]));
  //console.log(jogada(B[2]));

  for(let i = 0; A.length > i; i++){

    if(jogada(A[i]) > jogada(B[i])){
      pontosA = pontosA + 10;
    }else if(jogada(B[i]) > jogada(A[i])){
      pontosB = pontosB + 10;
    } else if(jogada(A[i]) == jogada(B[i])){
      pontosA+=5;
      pontosB+=5;
    }
  }

  if(pontosA == pontosB) return 0

  return pontosA > pontosB ? 1 : -1;
}

function jogada(carta) {
  const cartasHerarquia = [2, 3, 4, 5, 6, 7, 8, 9, 0, 'J', 'Q', 'K', 'A'];
  return cartasHerarquia.indexOf(carta)
}

export { solution, fibonacci, getWinner };
