function formatDuration(seconds) {
  if (seconds == 0) {
    return 'now'
  } else {
    const conversions = {
      years: 31536000,
      days: 86400,
      hours: 3600,
      minutes: 60,
      seconds: 1,
    };

    const results = {};

    const keys = Object.keys(conversions);

    let temp = seconds;
    
    let outPut = '';

    for (let i = 0; i < keys.length; i++) {
      if (temp >= conversions[keys[i]]) {
        const word = String(keys[i]);
        const quotient = Math.floor(temp / conversions[keys[i]]);
        results[quotient === 1 ? word.slice(0, -1) : word] = quotient;
        temp %= conversions[keys[i]];
      }
    }
    const resultsLength = Object.keys(results).length;
    for (let i = 0; i < resultsLength; i++) {
      outPut += Object.values(results)[i] + ' ' + Object.keys(results)[i];
      if (resultsLength > 2 && i < resultsLength - 2) {
          outPut += ', '
      } 
      if (i == resultsLength - 2) {
          outPut += ' and '
      }
    }
    return outPut;
  }
}
