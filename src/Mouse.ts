class Mouse extends egret.Sprite {
    public mouse: egret.Bitmap;
    private der:number;
    private place: number[][] = [
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
    public constructor() {
        super();
        this.show();
    }
    public show() {
        var rec: number[] = this.radIdx();
        //  加载老鼠图片
        console.log("rewqrewqrweq");
        this.mouse = Main.createBitmapByName("mouse_01_png");
        this.mouse.x = rec[0];
        this.mouse.y = rec[1];
        egret.Tween.get(this.mouse).to({ y: this.mouse.y - 80 }, 1000, egret.Ease.cubicInOut).wait(1000).to({ y: this.mouse.y }, 1000, egret.Ease.cubicInOut).wait(1000).call(
            function (mymouse: egret.Bitmap): void {
                if (mymouse && mymouse.parent) {
                    mymouse.parent.removeChild(mymouse);
                    mymouse = null;
                }
            }, this.mouse, [this.mouse]);
        // 将老鼠添加到父容器中
        this.addChild(this.mouse);
        var mask0: egret.Shape = new egret.Shape();
        mask0.graphics.beginFill(0xffffff, 1);//全透明
        mask0.graphics.drawCircle(this.mouse.x + 85, this.mouse.y - 70, 80);//hole
        mask0.graphics.endFill();
        this.addChild(mask0);
        this.mouse.mask = mask0;
    }

    public beHit(): void {
        if (this.mouse && this.mouse.parent) {
            this.mouse.parent.removeChild(this.mouse);
            this.mouse = null;
        }
        this.mouse = Main.createBitmapByName("mouse_04_png");
        this.mouse.x = this.place[this.der][0];
        this.mouse.y = this.place[this.der][1]-100;
        
        this.addChild(this.mouse);
        egret.Tween.get(this.mouse)
            .wait(1000).to({y:this.mouse.y+100},1000,egret.Ease.cubicInOut)
            .call(
            function (mymouse: egret.Bitmap): void {
                if (mymouse && mymouse.parent) {
                    mymouse.parent.removeChild(mymouse);
                    mymouse = null;
                }
            }, this.mouse, [this]);

        var mask1: egret.Shape = new egret.Shape();
        mask1.graphics.beginFill(0xffffff, 1);
        mask1.graphics.drawCircle(this.mouse.x + 85,this.mouse.y +40, 80);
        mask1.graphics.endFill();
        this.addChild(mask1);
        this.mouse.mask = mask1;
    }

    public radIdx(): number[] {
        
        var index1: number = Math.floor(Math.random() * 9);
        var temp: number[] = this.place[index1];
        this.der = index1;
        return temp;
    }
}
