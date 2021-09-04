function high(x){
    // split x into an array by words
    const wordsArr = x.split(' ');
    // each element in the new array is split into an array by letter
    for (let i = 0; i < wordsArr.length; i++) {
      wordsArr[i] = wordsArr[i].split('')
        // each letter is designated a value then added up
        .map(el => el = el.charCodeAt(0) - 96).reduce((a,b) => a + b);
    }
    // the element with the greatest value is returned
    return x.split(' ')[wordsArr.indexOf(Math.max(...wordsArr))]
  }