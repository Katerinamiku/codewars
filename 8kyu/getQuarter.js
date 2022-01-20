// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
    // let month = 7;
    let quarter;
      
      if (month >0 && month <=3) {
        quarter = 1
      } 
     else if (month >3 && month <=6) {
        quarter = 2
      }
     else if (month >6 && month <=9) {
        quarter = 3
      }
     else if (month >9 && month <=12) {
        quarter = 4
      } else {
        quarter = 'not applicable'
      }
      return quarter
      
    }