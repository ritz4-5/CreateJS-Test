$(function(){
  // canvasの幅をwrapperに合わせる
  $("canvas").attr({height: $("#wrapper").height()});
  $("canvas").attr({width: $("#wrapper").width()});
  
  
  var stage = createStage("canvas"); // stageを作成

  
  createjs.Ticker.setFPS(30); //FPSを設定
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
  //preload.addEventListener("complete",showBitmap);

    var Circle = function(){
        this.x = 0;
        this.y = 0;
        this.radius = 0;
        this.shape = createShape();
        this.graphics = createGraphics();
    };

    Circle.prototype = {
        pos : function(x,y){
            this.x  = x;
            this.y = y;
            return this;
        },
        color : function(color){
            this.graphics.beginFill(color);
            return this;
        },
        scale : function(radius){
            this.radius = radius;
            return this;
        },
        setStage : function(){
            this.graphics.drawCircle(this.x,this.y,this.radius);
            this.shape.graphics = this.graphics;
            stage.addChild(this.shape);
            return this;
        }

    };

  
  //poly();
  //circle();
  //こういう風に呼び出したい circle().pos(10,10).color("#000000").animation("tween");
  //text();
  //rect();


    createjs.Graphics.prototype.setStage =function(stage, shape){
        stage.addChild(shape);
    };

  //円
  var circle = createShape();
  circle.graphics.f("#FF0000").dc(500,500,100).setStage(stage,circle);

  //多角形
  var poly = createShape();
  poly.graphics.f("#00FF00").dp(100,200,50,5,0,0).setStage(stage,poly);




  //描画
  stage.update();


  function tick(){
    stage.update();
  }


/*
  var tick = function(){
      stage.update();
  };
*/

  //Bitmapを表示する
  function showBitmap(){
    var b = new createjs.Bitmap(preload.getResult("test1"));

    stage.addChild(b);
    // stage.update();
  };


/*
  var showBitmap = function(){
    var b = new createjs.Bitmap(preload.getResult("test1"));

    stage.addChild(b);
  };
*/



  //Stageオブジェクト生成
  function createStage(canvasElementId){
    return new createjs.Stage(canvasElementId);
  }

/*
  var createStage = function(canvasElementId){
    return new createjs.Stage(canvasElementId);
  };
*/


  //Graphicsオブジェクト生成
  function createGraphics(){
    return new createjs.Graphics();
  }

/*
  var createGraphics = function(){
    return new createjs.Graphics();
  };
*/

  //Shapeオブジェクト生成
  function createShape(g){
    return new createjs.Shape(g);
  }

  /*
  var createShape = function(g){
    return new createjs.Shape(g);
  };
  */

  //Textオブジェクト生成
  function createText(text,font,color){
    return new createjs.Text(text,font,color);
  }
  /*
  var createText = function(text, font, color){
    return new createjs.Text(text, font, color);
  };
  */

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

/*
  var rect = function(){
    var g = createGraphics();
    g.beginFill("#888");
    g.drawRect(0,0,100,100);

    var s = createShape(g);
    s.x = $(window).width()/2;
    s.y = $(window).height()/2;

    stage.addChild(s);

  };
 */


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

/*
  var poly = function(){
    var g = createGraphics();
    g.beginFill("#888");
    //g.drawPolyStar(x座標,y座標,サイズ,頂点の数,絞り,回転角);
    g.drawPolyStar(0,0,10,5,0,0);

    var s = createShape(g);
    s.x = $(window).width()/2;
    s.y = $(window).height()/2;

    stage.addChild(s);
  };
*/

  //テキスト
  function text(){
  　//Text("表示させる文字列","文字サイズとフォント指定","文字の色")
    var text = createText("Hello World!","50px Impact","#000000");

    text.x = $(window).width() /2;
    text.y = $(window).height() /2;

    stage.addChild(text);
  }
  /*
  var text = function(){
    var text = createText("Hello World!","50px Impact","#000000");

    text.x = $(window).width() /2;
    text.y = $(window).height() /2;

    stage.addChild(text);
  };
  */

  //円
  function circle(){
    //Graphicオブジェクト

    var width = $(window).width() / 2;
    var height = $(window).height() / 2;

    var g = createGraphics();
    g.beginFill("#888");
    g.drawCircle(width,height,100);

    //Shapeオブジェクト
    var s = createShape(g);
    //s.x = $(window).width() /2;
    //s.y = $(window).height() /2;

    //ステージにシェイプをセット
    stage.addChild(s);

  }





  //

/*
    //こういう風び出したい circle().pos(10,10).color("#000000").animation("tween");
  function circle(){
    var s = createShape();
    s.x = $(window).width() / 2;
    s.y = $(window).height() / 2;


    var g = createGraphics().beginFill("#888").drawCircle(0,0,100);
    s.graphics = g;

    stage.addChild(s);

  }
 */

 /*
  function circle(){
    new createjs.Shape()
  }

  */



})

