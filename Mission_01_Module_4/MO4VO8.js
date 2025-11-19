const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log("state of Array:  ", arr);
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }

    console.log(`After Pass ${i + 1}`, arr);
  }
};

selectionSort([5, 3, 8, 4, 2]);
