function narcissistic(value) {
    let array = String(value).split('').map(x => x ** String(value).length);
    if (array.reduce((a,b) => a + b) == value) {
      return true;
    } else {
      return false;
    }
  }