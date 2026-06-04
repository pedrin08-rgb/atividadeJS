// Função que certifica se um número é primo //
function isPrime(num) {

    // Números menores que 2 não são primos //
    if (num < 2) {
      return false;
    }
  
    // analisa divisores de 2 até a raiz quadrada do número //
    for (let i = 2; i <= Math.sqrt(num); i++) {
  
      // Se for divisível por algum número, não é primo // 
      if (num % i === 0) {
        return false;
      }
    }
  
    // Se não encontrou nenhum divisor, é primo //
    return true;
  }
  
  // Função que encontra o n-ésimo número primo //
  function nthPrime(n) {
   
    // Contador de primos encontrados //
    let count = 0;
  
    // Número atual que será avaliado //
    let number = 1;
  
    // Continua até encontrar n primos //
    while (count < n) {
  
      // Passa para o próximo número //
      number++;
  
      // Verifica se o número atual é primo //
      if (isPrime(number)) {
  
        // Se for primo, aumenta a contagem //
        count++;
      }
    }
  
    // Retorna o número primo encontrado //
    return number;
  }
  
  // Testando o código //
  console.log(nthPrime(6));  
  