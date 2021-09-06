function findShort(s){ 
    return s.split(' ').map(x => x = x.length).sort((a,b) => a - b)[0];
  }