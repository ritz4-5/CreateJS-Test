/**
 * Created with JetBrains PhpStorm.
 * User: ritz
 * Date: 2014/04/14
 * Time: 15:32
 * To change this template use File | Settings | File Templates.
 */



createjs.Text.prototype.pos = function(x, y){
    this.x = x;
    this.y = y;
    return this;
}

createjs.DisplayObject.prototype.addToStage = function(stage){
    stage.addChild(this);
    return this;
}

var createText = function(text, font, color){
    return new createjs.Text(text, font, color);
};

var createShape = function(g){
    return new createjs.Shape(g);
};

var createGraphics = function(){
    return new createjs.Graphics();
};

var createStage = function(canvasElementId){
    return new createjs.Stage(canvasElementId);
};

var createBitmap = function(imageOrUrl){
    return new createjs.Bitmap(imageOrUrl);
};

