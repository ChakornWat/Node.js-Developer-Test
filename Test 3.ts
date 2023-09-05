function quickestPath(board:{ladders:[number,number][];snakes:[number,number][];}):number[]{
  let rolls:Array<number> = new Array();
  let i=1;
  while(i!=100){
      if(i==100)break;
      for(let j = 1 ;j<=6 && j+i<=100;j++ ){
          if(i+j==100){
              rolls.push(j);
              return rolls;
          }
          for(let k=0;k<board.ladders.length;k++){
              if(i+j==board.ladders[k][0]){
                  rolls.push(j);
                  i = board.ladders[k][1];
                  break;
              }
          }
          if(i>i+j)break;
          else if(j==6){
              rolls.push(j);
              i = i+j;
          }
      }
  }
  return rolls;
}