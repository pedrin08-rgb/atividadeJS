function isPalindrome(s) {
  return s === s.split('').reverse().join(''); // função para checar palíndromo //
}

function isDoublePalindrome(n) {
  const dec = String(n);
  if (!isPalindrome(dec)) return false;     // falha rápido na base 10 //
  const bin = n.toString(2);               // sem zeros à esquerda por padrão //
  return isPalindrome(bin);
}

function solve(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (isDoublePalindrome(i)) sum += i;
  }
  return sum;
}

// Testando o código //
console.log(solve(1000));     
