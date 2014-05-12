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
        {src: "http://images.china.cn/attachement/jpg/site1004/20090927/001372acd73d0c2957f90d.jpg", id: "test1"}
    //{src:"makaron.jpg", id: "test1"}
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

  createjs.Tween.get(text).to({y:200},1500, createjs.Ease.linear);

  //スプライトシート
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

  //コンテナー
  var rect1 = createShape();
  rect1.graphics.f("#FF0000").dr(250,250,250,250);
  rect1.addToStage(stage);

  var circle2 = createShape();
  circle2.graphics.f("#00FF00").dc(300,300,250);
  circle2.addToStage(stage);

  var container = new createjs.Container();
  container.addChild(circle2);
  container.addChild(rect1);
  container.addToStage(stage);
  createjs.Tween.get(container,{loop:true}).to({rotation: 1440},10000,createjs.Ease.cubicOut);


  //Bitmapを表示する
  function showBitmap(){
      var bitmap = createBitmap(preload.getResult("test1"));
      bitmap.addToStage(stage);

      createjs.Tween.get(bitmap).to({x:200},1500, createjs.Ease.cubicin).wait(1000).set({visible:false});

  };

})

