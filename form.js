class form{
    constructor(){
        this.resetButton = createButton("reset");

    }
    reset(){
        this.resetButton.position(50,50)
        this.resetButton.mousePressed(()=>{
            database.ref('ball/position').update({ 
                'y1': 500 ,
                'y2': 500
              })                       
        })
    }
}