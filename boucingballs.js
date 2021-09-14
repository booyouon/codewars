function bouncingBall(h,  bounce,  window) {
    //check if h is greater than the window
      if (h > window && h > 0 && bounce < 1 && bounce > 0) {
        let ball = 1;
        let height = h;
      //repeat until the height of the ball is less than the height of the window
        do {
        //the ball height is then multiplied by bounce
          height = height * bounce;
        //check again if the ball height is greater than the window height
          if (height > window) {
        //if greater than the mom will see the ball twice (once coming up and once coming down)
            ball += 2;
          }
        } while (height > window);
        return ball;
        
        //if h is less than the window then the mother will see the ball 0 times. Return -1
      } else {
        return -1;
      }
    }