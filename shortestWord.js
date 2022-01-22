// 

function findShort(s){
    let arraySplit = s.split(' ');
    let answer;
    arraySplit.reduce(function(prev, cur) {
     if (prev.length > cur.length) {
       answer = cur.length
     } else {
       answer = prev.length
     }});
    return answer
 }

//  Alternative solution

function findShort(s){

let arraySplit = s.split(' ');
let shortestWord = ;

For (let i = 0; i < arraySplit.length; i++) {
    if (arraySplit[i].length <  )
}

}

// alternative solution

function findShort(s){
    let arraySplit = s.split(' ');
    let size = Object.keys(arraySplit).length;
    let minValue = arraySplit[0];

  for (let i =0; i < size; i++){
    if(arraySplit[i].length < minValue.length) {
      minValue = arraySplit[i]
    }
  }
  return minValue.length
}