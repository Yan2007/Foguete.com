var foguete,fogueteI,espaço,espaçoI;

function preload(){
    fogueteI = loadImage("1815970.png")
    espaçoI = loadImage("space-kurzgesagt-earth-moon-wallpaper-preview.jpg")
}
function setup(){
    
    createCanvas(700,400)
    espaço = createSprite(350,200,600,10);
    espaço.addImage(espaçoI);
    foguete = createSprite(-50,401,30,70);
    foguete.scale = 0.10;
    foguete.addImage(fogueteI) 
    foguete.rotation = 45;
}  
function draw(){
    background("white") 
    if(keyDown("space") && foguete.y > 160){
        foguete.velocityY = -2;  
        foguete.velocityX = 2;
        
    }
    if(foguete.y==-5){
        foguete.y=401;
        foguete.x=-50;
    }
   //  foguete.velocityY = foguete.velocityY + 0.5; 
    drawSprites();

}
