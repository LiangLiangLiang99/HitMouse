class background extends eui.Component {
    mouse: Mouse = new Mouse();
    ham: Harmmer = new Harmmer();
   
    public constructor() {
        super();
        this.skinName = "resource/assets/skin/back.exml";
        this.mouse.touchEnabled=true;
        this.ham.touchEnabled=true;
        this.addChild(this.ham);
        this.reDo();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    //入口函数,触摸事件
    private onAddToStage(event: egret.Event) {
        this.mouse.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchHandler, this);
    }
   
    private touchHandler(evt: egret.TouchEvent) {
        this.hitMouse(evt.stageX, evt.stageY);
    }
    //碰撞检测
    private _bShapeTest: boolean;
    private hitMouse(hamX: number, hamY: number): void {
        var bResult: boolean = this.mouse.hitTestPoint(hamX, hamY, this._bShapeTest);
        // console.log(this.mouse.x);
        if (bResult) {
        //   console.log(true);
          this.mouse.beHit();
          this.addChild(this.mouse);
        } else {
            console.log(false);
           
        }
    }
    private reDo():void{
		var timerIn = new egret.Timer(3000, 0);
		timerIn.addEventListener(egret.TimerEvent.TIMER, ()=>{
            console.log("fdsfsd");
            this.mouse.show();
            this.addChild(this.mouse);

        }, this);
        timerIn.start();
	}
   
}
