function isValidWalk(walk) {
    if(walk.length == 10) {
      if (walk.filter(x => x == "n").length == walk.filter(x => x == "s").length && walk.filter(x => x == "w").length == walk.filter(x => x == "e").length) {
        return true;
      }
    } else {
      return false;
    }
  }