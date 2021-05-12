class Quiz{
    constructor(){}
    getState()
    { var gameStateref=database.ref('gameState');
      gameStateref.on("value",function(data){
      gameState=data.val();
        })}
     update(state){
     database.ref('/').update({
     gameState:state
     });}

     play(){
     if(gameState === 0){
     form.hide();
     textSize(49);
     text("GAME START",200,200);
     Contestant.getContestantInfo();
     if(allContestants != undefined){
     var display_position= 130;
    }
    for (var plr in allContestants){
      var correctAns= "2";
      if(correctAns === allContestants[plr].answer){
          fill("yellow");
      } else{
          fill("green");
          display_position= display_position+20;
            textSize(15);
            text(allPlayers[ptr].name + ":" + allPlayers[ptr].distance,120, display_position);
      }
    }
     
     }
    


     }

     async start(){
     if(gameState===0){
     contestant=new Contestant();
     var contestantCountRef=await database.ref('contestantCount').once("value");
     if(contestantCountRef.exists()){
     contestantCount=contestantCountRef.val();
     contestant.getCount();
     }
     question= new Question();
     question.display();
     }}
   
    
    
    
    
    
    
    
    
    }