function smallestMult(n) {
    // Função para calcular o MDC // 
    function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
    }
  
    // Função para calcular o MMC //
    function lcm(a, b) {
      return (a * b) / gcd(a, b);
    }
  
    let result = 1;
    
    // Calcula o MMC acumulado de 1 até n //
    for (let i = 2; i <= n; i++) {
      result = lcm(result, i);
    }
  
    return result;
  }
  
  // testando o código //
  console.log(smallestMult(20));
  
  