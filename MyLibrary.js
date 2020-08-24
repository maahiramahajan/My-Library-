function bounceOff(o1,o2){
    if (o1.x - o2.x < o2.width/2 + o1.width/2
      && o2.x - o1.x < o2.width/2 + o1.width/2) {
    o1.velocityX = o1.velocityX * (-1);
    o2.velocityX = o2.velocityX * (-1);
  }
  if (o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2){
    o1.velocityY = o1.velocityY * (-1);
    o2.velocityY = o2.velocityY * (-1);
  
  }
  
  
  }
  function isTouching(mr,fr){

    if (mr.x-fr.x<mr.width/2+fr.width/2
      &&  fr.x-mr.x<mr.width/2+fr.width/2 
      && mr.y-fr.y<mr.height/2+fr.height/2
      && fr.y-mr.y<fr.height/2+mr.height/2){
    return true;
      } else 
      { 
    
    return false;
    
      }
    
    
    
      }
    

   