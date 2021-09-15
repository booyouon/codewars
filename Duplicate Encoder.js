function duplicateEncode(word){
    //Convert string to array
    const arr = word.toUpperCase().split('');
    const duplicates = []
    //Check if any elements have duplicates
    for (let i = 0; i < arr.length; i++) {
      const comp = arr.filter(el => el == arr[i]);
      if (comp.length > 1) duplicates.push(arr[i]);
    }
    //duplicates are all replaced with ')'
     for (let i = 0; i < arr.length; i++) {
      duplicates.includes(arr[i]) ? arr[i] = ')' : arr[i] = '(';
    }
    //else replace with '('
    //return the array as a string
    return arr.join('')
  }