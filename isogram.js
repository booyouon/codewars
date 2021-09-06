function isIsogram(str){
    let array = str.toLowerCase().split('');
    for (let i = 0; i < str.length; i++) {
      if (array.filter(x => x == array[i]).length > 1) {
        return false;
      }
    }
    return true;
  }