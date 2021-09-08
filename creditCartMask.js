function maskify(cc) {
  let array = cc.split('');
  const counter = array.length - 4;
  for (let i = 0; i < counter; i++){
    array[i] = "#";
  }
  return array.join('');
}