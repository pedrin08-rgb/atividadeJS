function contarCaminhos(n) {
    const grade = Array.from(
      { length: n + 1 },
      () => Array(n + 1).fill(0)
    );
  
    // Primeira linha e primeira coluna
    for (let i = 0; i <= n; i++) {
      grade[0][i] = 1;
      grade[i][0] = 1;
    }
  
    // Programação prática //
    for (let row = 1; row <= n; row++) {
      for (let col = 1; col <= n; col++) {
        grade[row][col] =
          grade[row - 1][col] +
          grade[row][col - 1];
      }
    }
  
    return grade[n][n];
  }
  
  console.log(contarCaminhos(4));   // testando o código //
  
  