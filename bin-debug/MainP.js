var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainP = (function (_super) {
    __extends(MainP, _super);
    function MainP() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/assets/skin/mainpage.exml";
        _this.showbutton1();
        _this.showbutton2();
        _this.showbutton3();
        return _this;
    }
    //显示按钮
    //开始游戏按钮
    MainP.prototype.showbutton1 = function () {
        var button1 = Main.createBitmapByName("img22_png");
        button1.x = 493;
        button1.y = 230;
        this.addChild(button1);
        button1.touchEnabled = true;
        button1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_begin, this);
    };
    MainP.prototype.onclick_begin = function () {
        var bg = new background();
        this.parent.addChild(bg);
        this.parent.removeChild(this);
    };
    //游戏帮助按钮
    MainP.prototype.showbutton2 = function () {
        var button2 = Main.createBitmapByName("img20_png");
        button2.x = 493;
        button2.y = 320;
        this.addChild(button2);
        button2.touchEnabled = true;
        button2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_help, this);
    };
    MainP.prototype.onclick_help = function () {
        var help = new helppage();
        this.parent.addChild(help);
        this.parent.removeChild(this);
    };
    //退出按钮
    MainP.prototype.showbutton3 = function () {
        // var button3:egret.Bitmap = new egret.Bitmap(RES.getRes("img26"));
        var button3 = Main.createBitmapByName("img26_png");
        button3.x = 493;
        button3.y = 410;
        this.addChild(button3);
    };
    return MainP;
}(eui.Component));
__reflect(MainP.prototype, "MainP");
//# sourceMappingURL=MainP.js.map