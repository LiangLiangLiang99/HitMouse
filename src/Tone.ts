class Tone extends egret.Sprite {
    public holes: Array<egret.Sprite>;//定义一个数组
    public constructor() {
        super();
        this.makeHoles();
    }

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
//做一个洞的模型
    private makeHoles(): void {
        this.holes = new Array();
        for (var a: number = 0; a < this.place.length; a++) {
            var container = new egret.Sprite();
            container.x = this.place[a][0];
            container.y = this.place[a][1];
            this.addChild(container);
            this.holes.push(container);
        }

    }
    public getHole(_index: number): egret.Sprite {
        return this.holes[_index];
    }
}
