function mergeSort(arr) {
    if (arr.length <= 1) {
    return arr;
    }
    
    const middle = Math.floor(arr.length / 2); // находим середину массива
    const left = arr.slice(0, middle); // разделяем массив на две половины
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right)); // рекурсивно сортируем и объединяем половины
    }
    
    function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
    
    while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
    resultArray.push(left[leftIndex]);
    leftIndex++; // перемещаемся на следующий элемент в левом массиве
    } else {
    resultArray.push(right[rightIndex]);
    rightIndex++; // перемещаемся на следующий элемент в правом массиве
    }
    }
    
    return resultArray
    .concat(left.slice(leftIndex)) // добавляем оставшиеся элементы из левого массива
    .concat(right.slice(rightIndex)); // добавляем оставшиеся элементы из правого массива
    }
    
    // Пример использования:
    const array = [8, 2, 5, 1, 9, 3];
    const sortedArray = mergeSort(array);
    console.log(sortedArray);
    