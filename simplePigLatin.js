function pigIt(str){
    //Code here
    // turn str to an array split by whitespace
    let array = str.split(' ');
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    // map a new array that moves the first character of an element to the end and then add ay
    // make conditional so above only applies to words and not punctuations
    let results = array.map(x => !regex.test(x)? x.replace(x[0], '') + x[0] + 'ay' : x)
    return results.join(' ');
  }