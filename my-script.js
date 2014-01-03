$(function(){
  // canvasの幅をwrapperに合わせる
  $("canvas").attr({height: $("#wrapper").height()});
  $("canvas").attr({width: $("#wrapper").width()});
  
  
  var stage = createStage("canvas"); // stageを作成
  
  /*
  // 先に読み込む画像の指定
　var manifest = [
    {src:"test1.jpg", id: "test1"},
    {src:"test2.png", id: "test2"}
  ];
   
  preload = new createjs.LoadQueue(false);
  preload.loadManifest(manifest); // 配列manifestを先読みする
  preload.addEventListener("complete",showBitmap);
  */

  //poly();
  //circle();
  //text();
  //rect();
  

  //描画
  stage.update();

  function tick(){
    stage.update();
  }

  //Bitmapを表示する
  function showBitmap(){
    var b = new createjs.Bitmap(preload.getResult("test1"));
    
    stage.addChild(b);
    stage.update();
  }  

  //Stageオブジェクト生成
  function createStage(canvasElementId){
    return new createjs.Stage(canvasElementId);
  }

  //Graphicsオブジェクト生成
  function createGraphics(){
    return new createjs.Graphics();
  }

  //Shapeオブジェクト生成
  function createShape(g){
    return new createjs.Shape(g);
  }

  //Textオブジェクト生成
  function createText(text,font,color){
    return new createjs.Text(text,font,color);
  }

  //短形
  function rect(){
    var g = createGraphics();
    g.beginFill("#888");
    g.drawRect(0,0,100,100);
    
    var s = createShape(g);
    s.x = $(window).width()/2;
    s.y = $(window).height()/2;

    stage.addChild(s);
  }
  //多角形
  function poly(){
    var g = createGraphics();
    g.beginFill("#888");
    //g.drawPolyStar(x座標,y座標,サイズ,頂点の数,絞り,回転角);
    g.drawPolyStar(0,0,10,5,0,0);

    var s = createShape(g);
    s.x = $(window).width()/2;
    s.y = $(window).height()/2;
  
    stage.addChild(s);
  };
　　
  //テキスト
  function text(){
　　//Text("表示させる文字列","文字サイズとフォント指定","文字の色")
    var text = createText("Hello World!","3px Impact","#CCC");
    
    text.x = $(window).width() /2;
    text.y = $(window).height() /2;

    stage.addChild(text);
  }
   
  //円
  function circle(){
    //Graphicオブジェクト
    var g = createGraphics();
    g.beginFill("#888");
    g.drawCircle(0,0,100);

    //Shapeオブジェクト
    var s = createShape(g);
    s.x = $(window).width() /2;
    s.y = $(window).height() /2;
  
    //ステージにシェイプをセット
    stage.addChild(s); 
  }
})

