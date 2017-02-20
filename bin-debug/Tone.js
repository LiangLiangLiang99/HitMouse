var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Tone = (function (_super) {
    __extends(Tone, _super);
    function Tone() {
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
        _this.makeHoles();
        return _this;
    }
    //做一个洞的模型
    Tone.prototype.makeHoles = function () {
        this.holes = new Array();
        for (var a = 0; a < this.place.length; a++) {
            var container = new egret.Sprite();
            container.x = this.place[a][0];
            container.y = this.place[a][1];
            this.addChild(container);
            this.holes.push(container);
        }
    };
    Tone.prototype.getHole = function (_index) {
        return this.holes[_index];
    };
    return Tone;
}(egret.Sprite));
__reflect(Tone.prototype, "Tone");
//# sourceMappingURL=Tone.js.map