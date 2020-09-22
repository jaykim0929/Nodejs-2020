function sort(Array) {
    for (let i=Array.length-1; i>0; i--) {
        for (let k=0; k<i; k++) {
            if (Array[k] > Array[k+1]) {
                let tmp = Array[k];
                Array[k] = Array[k+1];
                Array[k+1] =tmp;
            }
        }
    }
}

let samples = [9, 5, 13, 6, 2];
sort(samples)
console.log(samples);