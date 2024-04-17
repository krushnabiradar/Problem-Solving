function bubbleSort(arr) {
    let swapped
    do{
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
              let swap = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = swap;
              swapped = true
            }
        
          }
    }while(swapped)
  
}
let arr = [-6, 20, 8, -2, 4]
bubbleSort(arr)
console.log(arr)