function hanoiTower(n, from, to, aux) {
    if (n === 1) {
      console.log("Переместить диск 1 с " + from + " на " + to);
      return;
    }
    
    hanoiTower(n - 1, from, aux, to);
    console.log("Переместить диск " + n + " с " + from + " на " + to);
    hanoiTower(n - 1, aux, to, from);
  }
  
  // Пример использования
  var n = 3; // Количество дисков
  var from = 'left';
  var to = 'right';
  var aux = 'middle';
  
  hanoiTower(n, from, to, aux);