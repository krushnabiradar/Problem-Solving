function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i];
      let j = i;
      while (j > 0 && arr[j-1] > numberToInsert) {
        arr[j] = arr[j-1];
        j--
      }
      arr[j] = numberToInsert;
    }
  }
  
  let arr = [8, 20, -2, 4, -6];
  insertionSort(arr);
  console.log(arr);
  