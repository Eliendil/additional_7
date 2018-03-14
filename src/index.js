module.exports = function solveSudoku(matrix) {

var row = [];
var zero = 0;	
var result = [];

for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    row.push(matrix[i][j]);
  }
}

function prove(value , a, b){
  for (var j = 0; j <9 ; j++) {
    if (row[b*9 + j] == value || row[j*9 + a] == value){
      return false;
    }
  }

  var qA	= Math.floor(Math.floor(a/3)*3);
  var qB	= Math.floor(Math.floor(b/3)*3);
  for (var i = qB; i < qB+3; i++) {
    for (var n = qA; n < qA+3; n++) {
      if (row[i*9+n] == value){
        return false;
      }
    }
  }
  return true;
}

 function verify(z){
   if(z == 81 ){
     return true;
   }
   if(row[z]!=zero){
     return verify(z+1);
   }
   for (var i = 1; i <= 9; i++) {
    if (prove(i, z % 9, Math.floor(z/9))){
       row[z] = i;
    if (verify(z + 1)) {
    return true;
    }
      else {
        row[z] = 0;
      }
     }
   }
 }

 

 verify (0);

 for (var i = 0; i < row.length; i += 9) {
         result.push(row.slice(i, i + 9));
     }

 return result;
}