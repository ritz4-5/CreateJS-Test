$(function(){
  // canvasの幅をwrapperに合わせる
  $("canvas").attr({height: $("#wrapper").height()});
  $("canvas").attr({width: $("#wrapper").width()});
  
  var stage = createStage("canvas"); // stageを作成

  createjs.Ticker.setFPS(30); //FPSを設定
  //stageの更新
  createjs.Ticker.addEventListener("tick", function(){
    stage.update();
  });

  // 先に読み込む画像の指定
　var manifest = [
    {src:"test1.jpg", id: "test1"}
    //{src:"test2.png", id: "test2"}
  ];
   
  var preload = new createjs.LoadQueue(false);
  preload.loadManifest(manifest); // 配列manifestを先読みする
  preload.addEventListener("complete",showBitmap);

  //円
  var circle = createShape();
  circle.graphics.f("#FF0000").dc(0,0,100);
  circle.addToStage(stage);

  createjs.Tween.get(circle).to({x:800,y:800},1500);

  //多角形
  var poly = createShape();
  poly.graphics.f("#00FF00").dp(100,200,50,5,0,0);
  poly.addToStage(stage);

  var rect = createShape();
  rect.graphics.f("#0000FF").dr(600,600,100,100);
  rect.addToStage(stage);

  //文字
  var text = createText("Hello World!","50px Impact","#FFFF00");
  text.pos(500,500).addToStage(stage);

  createjs.Tween.get(text).to({x:800,y:800},1500);

  //spritesheet
  var spriteSheet = new createjs.SpriteSheet({
      images : ["./runningGrant.png"],
      frames :{
          width : 165,
          height : 292
      },
      animations:{
          run : [0,25],
          jump : [26, 63]
      }
  });

  var animation = new createjs.Sprite(spriteSheet, "run").set({x:800,y:400});
  animation.addToStage(stage);



  //Bitmapを表示する
  function showBitmap(){
      var bitmap = createBitmap(preload.getResult("test1"));
      bitmap.addToStage(stage);

      createjs.Tween.get(bitmap).to({x:800,y:800},1500);

  };

})

