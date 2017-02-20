var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var helppage = (function (_super) {
    __extends(helppage, _super);
    function helppage() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/assets/skin/Helppage.exml";
        _this.backmenu();
        return _this;
    }
    helppage.prototype.backmenu = function () {
        var backbutton = Main.createBitmapByName("img28_png");
        backbutton.x = 300;
        backbutton.y = 380;
        console.log("1");
        this.addChild(backbutton);
        backbutton.touchEnabled = true;
        backbutton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick_backmenu, this);
    };
    helppage.prototype.onclick_backmenu = function () {
        var ma = new MainP();
        console.log("2");
        this.parent.addChild(ma);
        console.log(ma);
        this.parent.removeChild(this);
        console.log(this);
    };
    return helppage;
}(eui.Component));
__reflect(helppage.prototype, "helppage");
//# sourceMappingURL=Helppage.js.map