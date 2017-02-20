class Harmmer extends egret.Sprite {

    public constructor() {
        super();
        this.touchEnabled = true;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        var harmmer: egret.Bitmap = Main.createBitmapByName("hammer_png");
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, (evt: egret.TouchEvent) => {
             this.addChild(harmmer);
          //  harmmer.touchEnabled = false;
            harmmer.anchorOffsetX = harmmer.x - harmmer.width * 0.5;
            harmmer.anchorOffsetY = harmmer.y - harmmer.height * 0.5;
            harmmer.x = evt.localX + harmmer.width * 0.5;
            harmmer.y = evt.localY - harmmer.height * 0.005;
            harmmer.anchorOffsetX = harmmer.width * 0.8;
            harmmer.anchorOffsetY = harmmer.height * 0.8;
            egret.Tween.get(harmmer).to({ rotation: -30 }, 900, egret.Ease.backInOut).call(() => {
                harmmer.rotation = 30;
                if (harmmer.parent) {
                    harmmer.parent.removeChild(harmmer);
                }
            }, this);
        }, this);
    }
}
