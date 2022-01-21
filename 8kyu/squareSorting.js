/* //https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

const flip=(d, a)=>{
    if (d == 'L'){
      a.sort((a, b) => b - a);
    }else{
      a.sort((a, b) => a- b);
    }
    return a
  } */

const flip = (d, a) => {

    if (d == 'L') {
        for (let i = 0; i <= a.length - 2; i++) {
            let minValue = a[i];

            for (let j = i + 1; j <= a.length - 1; j++) {
                if (a[j] > minValue) {
                    minValue = a[j];
                    let swap = a[i];
                    a[i] = minValue;
                    a[j] = swap;
                }
            }
        }
    } else {
        for (let i = 0; i <= a.length - 2; i++) {
            let maxValue = a[i];

            for (let j = i + 1; j <= a.length - 1; j++) {
                if (a[j] < maxValue) {
                    maxValue = a[j];
                    let swap = a[i];
                    a[i] = maxValue;
                    a[j] = swap;
                }
            }
        }
    }
    return a
