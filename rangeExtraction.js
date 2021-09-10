function solution(list){
    // TODO: complete solution
     const results = []
     let tracker = false;
     let start = '';
     //iterate through the list through a for loop
     for (let i = 0; i < list.length; i++) {
       //if i+1 == [i+1] and tracker is false then set var tracker to true and var start to i
       if (list[i] + 2 == list[i+2] && tracker === false) {
         tracker = true;
         start = list[i];
       } 
       //else if tracker is true and i + 1 !== [i+1] set tracker to false and push start + '-' + i to results 
       else if (list[i] + 1 !== list[i+1] && tracker === true) {
         tracker = false;
         results.push(start + '-' + list[i]);
       } 
       //else if tracker is false then push i to the results
       else if (tracker === false) {
         results.push(list[i]);
       }
     }
     return results.join(',');