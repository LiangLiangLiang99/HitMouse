class helppage extends eui.Component{
	public constructor() {
		super();
		this.skinName = "resource/assets/skin/Helppage.exml";
		this.backmenu();
	}
	private backmenu():void{
		var backbutton: egret.Bitmap = Main.createBitmapByName("img28_png");
		backbutton.x=300;
		backbutton.y=380;
		console.log("1");
		this.addChild(backbutton);
		backbutton.touchEnabled=true;
		backbutton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_backmenu,this);
	}
	private onclick_backmenu(){
		var ma:MainP = new MainP();
		console.log("2");
		this.parent.addChild(ma);
		console.log(ma);
		this.parent.removeChild(this);
		console.log(this);
	}

}