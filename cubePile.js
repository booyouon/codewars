function findNb(m) {
    // your code
  let num = m;
  let n = 0;
  
  while (num > 0) {
    n++;
    num = num - n ** 3;
  };
  
  if (num == 0) {
    return n;
  } else {
    return (-1);
  }
}