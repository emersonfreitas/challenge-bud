function verifySequence(num) {
  let result = ''
  let aux = []

  // regex para capturar somente digito numericos e mostrar o maior número de sequencia
  let regex = /(?:(?=01|12|23|34|45|56|67|78|89|90)\d)+\d/g
  // retorna o array com todas as possíveis sequencias combinadas
  aux = num.match(regex)

  // array reduce utilizado para pegar a maior sequencia
  result = aux.reduce(function(a, b) {
    return Math.max(a, b);
  })  

  return result
}

// tests
console.log('resultado => ', verifySequence('53590')) // 90
console.log('resultado => ', verifySequence('674030098567819')) // 5678
console.log('resultado => ', verifySequence('90123464509789')) // 901234
