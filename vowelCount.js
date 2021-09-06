function getCount(str) {
    var vowelsCount = 0;
    
    vowelsCount = str.split('').filter(x => x.match(/[aeiou]/g)).length; 
    
    return vowelsCount;
  }