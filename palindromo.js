function largestPalindromeProduct(n) {
    // define o valor máximo e o mínimo para ‘n’ dígitos //
      const max =  10 ** n - 1;
      const min = 10 ** (n - 1);
      let maxPalindrome = 0;
    
      for (let i = max; i >= min; i--) {
        for (let j = i; j >= min; j--) {
          let product = i * j;
    
          if (product <= maxPalindrome) break;
    
          if (isPalindrome(product)) {
            maxPalindrome = product;
          }
        }
      }
      return maxPalindrome;
    }
    //função para saber se o número é palíndromo ou não //
    function isPalindrome(num) {
      const str = num.toString();
      const reversedStr = str.split('').reverse().join('');
      return str === reversedStr;
    }
    
    //testando pra ver se funciona //
    console.log(largestPalindromeProduct(2));
    
    