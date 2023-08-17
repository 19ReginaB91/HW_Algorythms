function quickSort(arr) {
    // Проверяем, что массив содержит более одного элемента
    if (arr.length <= 1) {
      return arr;
    }
  
    // Выбираем опорный элемент
    const pivot = arr[arr.length - 1];
  
    // Создаем массивы для элементов меньше и больше опорного
    const leftArr = [];
    const rightArr = [];
  
    // Проходимся по всем элементам массива, кроме опорного
    for (let i = 0; i < arr.length - 1; i++) {
      // Распределяем элементы по соответствующим массивам
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    // Рекурсивно вызываем quickSort для массивов, большего и меньшего опорного
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  }
  
  // Пример использования:
  const arr = [5, 2, 7, 1, 9, 3];
  const sortedArr = quickSort(arr);
  console.log(sortedArr);