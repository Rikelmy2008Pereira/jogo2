

var fuund,fu;
var birdside_1,birdside_2;
var birdside_1Img,birdside_2Img;
var coin_1,coin_2, coin_3;
var coin1,coin2,coin3,coin4,coin5,coin6;
var player, playerImg,playerImg2;
var groundImg;
var score = 3;
var ponto = 0;
var gr_1, gr_2, gr_3, gr_4, gr_5;
var gr_Img;
var linkImg, link;
var medalImg, medal;
var fases;
var beeImg,beeImg2, flyImg,flyImg2, bunnyImg,bunnyImg2, bgImg , startImg,start;


var inicial;
var play = 1;
var end = 0;

var estad;


function preload(){

  groundImg = loadImage('./assets/background.png');
  playerImg = loadImage('./assets/bunny1_10.png');
  playerImg2 = loadImage('./assets/bunny1_11.png');
  coin1 = loadImage('./assets/bronze_10.png');
  coin2 = loadImage('./assets/bronze_11.png');
  coin3 = loadImage('./assets/bronze_12.png');
  coin4 = loadImage('./assets/bronze_13.png');
  coin5 = loadImage('./assets/bronze_14.png');
  coin6 = loadImage('./assets/bronze_15.png');
  birdside_1Img = loadImage("./assets/birdside.png");
  birdside_2Img = loadImage('./assets/birdside_1.png');
  gr_Img = loadImage('./assets/ground.png');
  linkImg = loadImage('./assets/goldui28.png');
  medalImg = loadImage('./assets/flat_medal1_10.png');
  beeImg = loadImage("./assets/bee0.png");
  beeImg2 = loadImage("./assets/bee1.png");
  flyImg = loadImage("./assets/fly0.png");
  flyImg2 = loadImage("./assets/fly1.png");
  bunnyImg = loadImage("./assets/bunny1.png");
  bunnyImg2 = loadImage("./assets/bunny2.png");
  bgImg = loadImage("./assets/background00.png");
  startImg = loadImage("./assets/start0.png");
  fu = loadImage('Sem título.png');
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  fuund = createSprite(683,150);
  fuund.addAnimation('f',fu);

  player = createSprite(100,600);
  player.addAnimation('bunny', playerImg2);
  player.addAnimation('bunnys',playerImg , playerImg2);
  player.scale = 0.05;
  
  coin_1 = createSprite(1000,469);
  coin_1.addAnimation('coin',coin1, coin2, coin3 ,coin4, coin5, coin6);
  coin_1.scale = 0.5;

  coin_2 = createSprite(1000,250);
  coin_2.addAnimation('coin',coin1, coin2, coin3 ,coin4, coin5, coin6);
  coin_2.scale = 0.5;

  coin_3 = createSprite(400,250);
  coin_3.addAnimation('coin',coin1, coin2, coin3 ,coin4, coin5, coin6);
  coin_3.scale = 0.5;

  gr_1 = createSprite(1000,520);
  gr_1.addAnimation('gr',gr_Img);
  gr_1.scale = 0.5

  gr_2 = createSprite(700,400);
  gr_2.addAnimation('gr',gr_Img);
  gr_2.scale = 0.5

  gr_3 = createSprite(400,520);
  gr_3.addAnimation('gr',gr_Img);
  gr_3.scale = 0.5

  gr_4 = createSprite(1000,300);
  gr_4.addAnimation('gr',gr_Img);
  gr_4.scale = 0.5

  gr_5 = createSprite(400,300);
  gr_5.addAnimation('gr',gr_Img);
  gr_5.scale = 0.5

  birdside_1 = createSprite(50,220);
  birdside_1.addAnimation('ave',birdside_1Img);
  birdside_1.velocityX = 5;
  birdside_1.scale = 0.5

  birdside_2 = createSprite(683,460);
  birdside_2.addAnimation('eve',birdside_2Img);
  birdside_2.velocityX = 4;
  birdside_2.scale = 0.5;

  link = createSprite(683,308);
  link.addAnimation('link',linkImg);
  link.scale = 0.5

  medal = createSprite(683,150);
  medal.addAnimation('md',medalImg);
  medal.scale = 0.5;

  start = createSprite(683,380);
  start.addAnimation('st',startImg);
  start.scale = 0.5

  invisibleGround = createSprite(700,600,1500,10);
  invisibleGround.visible = false;

  gr_1.visible = false;
  gr_2.visible = false;
  gr_3.visible = false;
  gr_4.visible = false;
  gr_5.visible = false;
  player.visible = false;
  coin_1.visible = false;
  coin_2.visible = false;
  coin_3.visible = false;
  birdside_1.visible = false;
  birdside_2.visible = false;
  link.visible = true;
  medal.visible = false;
  start.visible = false;

}


function draw() {

  
  background(groundImg);

  player.debug = true
  birdside_1.debug = true
  birdside_2.debug = true

  player.collide(invisibleGround);
  player.collide(gr_1);
  player.collide(gr_2);
  player.collide(gr_3);
  player.collide(gr_4);
  player.collide(gr_5);

  gameOne();

  drawSprites();
    
    
  }

 function gameOne(){

  if(estad === inicial){
    if(mousePressedOver(link)){
      estad = play
      link.visible = false;
      gr_1.visible = true;
      gr_2.visible = true;
      gr_3.visible = true;
      gr_4.visible = true;
      gr_5.visible = true;
      player.visible = true;
      coin_1.visible = true;
      coin_2.visible = true;
      coin_3.visible = true;
      birdside_1.visible = true;
      birdside_2.visible = true;

    }
  }

  if(estad === play){

    push();
    textSize(30);
    fill('black');
    text("Vidas: " + score ,50,50);
    text('Pontos: ' + ponto,50,100);
    pop();
  
    if(keyDown('right_arrow')){
      player.x += 5;
      player.changeAnimation("bunnys", playerImg , playerImg2);
    }
    if(keyDown('left_arrow')){
      player.x -= 5;
      player.changeAnimation("bunnys", playerImg , playerImg2);
    }
  
    if(keyDown("space")&& player.y >=100) {
      player.velocityY = -10;
  }
  
  player.velocityY = player.velocityY + 0.8

  
    if(birdside_1.x > 1366){
      birdside_1.x = 0;
    }
  
     if(birdside_2.x > 1366){
      birdside_2.x = 0;
    }

    if(player.isTouching(coin_1)){
      ponto += 15
      coin_1.destroy();
      birdside_1.velocityX += 0.5;
      birdside_2.velocityX += 0.5;
      
    }

    if(player.isTouching(coin_2)){
      ponto += 15
      coin_2.destroy();
      birdside_1.velocityX += 0.5;
      birdside_2.velocityX += 0.5;
      
    }

    if(player.isTouching(coin_3)){
      ponto += 15
      coin_3.destroy();
      birdside_1.velocityX += 0.5;
      birdside_2.velocityX += 0.5;
      
    }

    if(player.isTouching(birdside_1)|| player.isTouching(birdside_2)){
    
      score -= 1;
      player.x = 100;
      player.y = 550;
    }



  }

  if(score === 0||ponto === 45){
    estad = end
    gr_1.destroy();
    gr_2.destroy();
    gr_3.destroy();
    gr_4.destroy();
    gr_5.destroy();
    player.destroy();
    coin_1.destroy();
    coin_2.destroy();
    coin_3.destroy();
    birdside_1.destroy();
    birdside_2.destroy();
    medal.visible = true;
    start.visible = true;
    

    push();
    textSize(30);
    fill('black');
    text('MUITO OBRIGADO POR JOGAR NOSSO JOGO, DESEJA CONTINUAR' , 225,308);
    pop();
    
    if(mousePressedOver(start)){
      gameTwu();
    }


  }



 }

function gameTwu(){
  createCanvas(windowWidth,windowHeight);
  image(beeImg,windowWidth,windowHeight)

  

}
  


