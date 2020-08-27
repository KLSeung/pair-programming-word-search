const transpose = function(matrix) {
  let newMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i][j] = matrix[j][i];
    }
  }
  return newMatrix;
};

const wordSearch = (letters, word) => {
  if (Array.isArray(letters) && letters.length > 0) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let l of horizontalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    const verticalArray = transpose(letters);
    const verticalJoin = verticalArray.map(ls => ls.join(''));
    for (let l of verticalJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
    const backwardsArray = transpose(letters);
    const backwardsJoin = backwardsArray.map(ls => ls.reverse().join(''));
    for (let l of backwardsJoin) {
      if (l.includes(word)) {
        return true;
      }
    }
  }
  return false;
};


module.exports = wordSearch;

// function queenThreat(generatedBoard) {
//   let array = (generateBoard(whiteQueen,blackQueen));
//   for (let y = 0; y < 8; y++){
//     let column = 0;
//     let row = 0;
//     for (let x = 0; x < 8; x++){
//       column += array[x][y];
//       row += array[y][x];
//       if (row === 2 || column === 2){
//         return true + "   " + y + " , " + x;
//       }
//     }
//   }
//   for (let k = 0; k < 8; ++k){
//     let diag = 0;
//     for (let z = 7; z >= 0; --z){
//       let u = k - z;
//       if (u >= 0 && u < 8){
//         diag += (array[z][u]);
//         if (diag === 2){
//           return true;
//         }
//       }
//     }
//   }
//   for (let k = 0; k < 8; ++k){
//     let revDiag = 0;
//     for (let z = 7; z >= 0; --z){
//       let v = k - (7-z);
//       if (v >= 0 && v < 8){
//         revDiag += (array[z][v]);
//         if (revDiag === 2){
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }