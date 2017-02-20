var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        var _this = _super.call(this) || this;
        _this.place = [
            [195, 385],
            [438, 380],
            [710, 385],
            [160, 515],
            [440, 514],
            [708, 515],
            [140, 650],
            [448, 652],
            [739, 655]
        ];
        _this.show();
        return _this;
    }
    Mouse.prototype.show = function () {
        var rec = this.radIdx();
        //  加载老鼠图片
        console.log("rewqrewqrweq");
        this.mouse = Main.createBitmapByName("mouse_01_png");
        this.mouse.x = rec[0];
        this.mouse.y = rec[1];
        egret.Tween.get(this.mouse).to({ y: this.mouse.y - 80 }, 1000, egret.Ease.cubicInOut).wait(1000).to({ y: this.mouse.y }, 1000, egret.Ease.cubicInOut).wait(1000).call(function (mymouse) {
            if (mymouse && mymouse.parent) {
                mymouse.parent.removeChild(mymouse);
                mymouse = null;
            }
        }, this.mouse, [this.mouse]);
        // 将老鼠添加到父容器中
        this.addChild(this.mouse);
        var mask0 = new egret.Shape();
        mask0.graphics.beginFill(0xffffff, 1); //全透明
        mask0.graphics.drawCircle(this.mouse.x + 85, this.mouse.y - 70, 80); //hole
        mask0.graphics.endFill();
        this.addChild(mask0);
        this.mouse.mask = mask0;
    };
    Mouse.prototype.beHit = function () {
        if (this.mouse && this.mouse.parent) {
            this.mouse.parent.removeChild(this.mouse);
            this.mouse = null;
        }
        this.mouse = Main.createBitmapByName("mouse_04_png");
        this.mouse.x = this.place[this.der][0];
        this.mouse.y = this.place[this.der][1] - 100;
        this.addChild(this.mouse);
        egret.Tween.get(this.mouse)
            .wait(1000).to({ y: this.mouse.y + 100 }, 1000, egret.Ease.cubicInOut)
            .call(function (mymouse) {
            if (mymouse && mymouse.parent) {
                mymouse.parent.removeChild(mymouse);
                mymouse = null;
            }
        }, this.mouse, [this]);
        var mask1 = new egret.Shape();
        mask1.graphics.beginFill(0xffffff, 1);
        mask1.graphics.drawCircle(this.mouse.x + 85, this.mouse.y + 40, 80);
        mask1.graphics.endFill();
        this.addChild(mask1);
        this.mouse.mask = mask1;
    };
    Mouse.prototype.radIdx = function () {
        var index1 = Math.floor(Math.random() * 9);
        var temp = this.place[index1];
        this.der = index1;
        return temp;
    };
    return Mouse;
}(egret.Sprite));
__reflect(Mouse.prototype, "Mouse");
//# sourceMappingURL=Mouse.js.map