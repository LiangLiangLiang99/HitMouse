var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var background = (function (_super) {
    __extends(background, _super);
    function background() {
        var _this = _super.call(this) || this;
        _this.mouse = new Mouse();
        _this.ham = new Harmmer();
        _this.skinName = "resource/assets/skin/back.exml";
        _this.mouse.touchEnabled = true;
        _this.ham.touchEnabled = true;
        _this.addChild(_this.ham);
        _this.reDo();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    //入口函数,触摸事件
    background.prototype.onAddToStage = function (event) {
        this.mouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    };
    background.prototype.touchHandler = function (evt) {
        this.hitMouse(evt.stageX, evt.stageY);
    };
    background.prototype.hitMouse = function (hamX, hamY) {
        var bResult = this.mouse.hitTestPoint(hamX, hamY, this._bShapeTest);
        // console.log(this.mouse.x);
        if (bResult) {
            //   console.log(true);
            this.mouse.beHit();
            this.addChild(this.mouse);
        }
        else {
            console.log(false);
        }
    };
    background.prototype.reDo = function () {
        var _this = this;
        var timerIn = new egret.Timer(3000, 0);
        timerIn.addEventListener(egret.TimerEvent.TIMER, function () {
            console.log("fdsfsd");
            _this.mouse.show();
            _this.addChild(_this.mouse);
        }, this);
        timerIn.start();
    };
    return background;
}(eui.Component));
__reflect(background.prototype, "background");
//# sourceMappingURL=background.js.map