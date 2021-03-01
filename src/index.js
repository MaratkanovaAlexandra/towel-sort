
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if((matrix === undefined)||(matrix.length === 0)){return []}
  for (let i =1 ;i<matrix.length;i+=2){
    matrix[i].reverse();
  }
  let a = [];
  for(let i=0;i<matrix.length;i++){
    a = a.concat(matrix[i]);
  }
  return a;
}
