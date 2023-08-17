function buildFrequencyDict(str) {
    const frequency = new Map();
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (/[а-яa-z]/.test(char)) {
        if (frequency.has(char)) {
          frequency.set(char, frequency.get(char) + 1);
        } else {
          frequency.set(char, 1);
        }
      }
    }
  
    return frequency;
  }
  
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const freqDict = buildFrequencyDict(text);
  
  console.log(freqDict);