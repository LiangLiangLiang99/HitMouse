var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Harmmer = (function (_super) {
    __extends(Harmmer, _super);
    function Harmmer() {
        var _this = _super.call(this) || this;
        _this.touchEnabled = true;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Harmmer.prototype.onAddToStage = function (event) {
        var _this = this;
        var harmmer = Main.createBitmapByName("hammer_png");
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            _this.addChild(harmmer);
            //  harmmer.touchEnabled = false;
            harmmer.anchorOffsetX = harmmer.x - harmmer.width * 0.5;
            harmmer.anchorOffsetY = harmmer.y - harmmer.height * 0.5;
            harmmer.x = evt.localX + harmmer.width * 0.5;
            harmmer.y = evt.localY - harmmer.height * 0.005;
            harmmer.anchorOffsetX = harmmer.width * 0.8;
            harmmer.anchorOffsetY = harmmer.height * 0.8;
            egret.Tween.get(harmmer).to({ rotation: -30 }, 900, egret.Ease.backInOut).call(function () {
                harmmer.rotation = 30;
                if (harmmer.parent) {
                    harmmer.parent.removeChild(harmmer);
                }
            }, _this);
        }, this);
    };
    return Harmmer;
}(egret.Sprite));
__reflect(Harmmer.prototype, "Harmmer");
//# sourceMappingURL=Harmmer.js.map