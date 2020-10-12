class Form{
    constructor(){
        this.input = createInput("Name")
        this.button = createButton('Play')
        this.gretting = createElement('h3')
    }
    hide(){
        this.gretting.hide()
        this.button.hide()
        this.input.hide()

    }
    display(){
        var title = createElement('h2')
        title.html("Multiplayer Car Racing Game")
        title.position(420,100)
        
        this.input.position(400,160)
        
        this.button.position(450,200)
       
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount+1
            player.index = playerCount
            //var name = input.value()
            player.update()
            player.updateCount(playerCount)
            this.gretting.html("Hello "+player.name)
            this.gretting.position(410,160)
        })
    }
}