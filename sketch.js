var database;
var gameState = 0 ;
var playerCount=0;
var form,player,game ;
var allPlayers;
var distance = 0 ;
//now run it
//mam  ?

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    //console.log(database)
   game = new Game()
   game.getState()
   game.start()
}

function draw(){
    //background("white");
    if(playerCount === 4){
        game.update(1)
    }
   if(gameState === 1){
       clear()
       game.play()
   }
}
