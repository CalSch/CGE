import { CircleSpr, Shape, Sprite } from "./sprites"; 

interface GameOpts {
	fps: number;
	width: number;
	height: number;
}

class Game {
	sprites: Sprite[]=[];
	spriteNames: string[]=[];
	opts: GameOpts={fps:60,width:100,height:100};
	private interval: number;
	private img: ImageData;
	private onRender: Function;
	ctx: CanvasRenderingContext2D;
	canvas: HTMLCanvasElement;

	deltaTime: number;
	private oldTime;
	
	constructor(opts: GameOpts, onRender: Function) {
		this.opts=opts;
		this.onRender=onRender;
		this.canvas=(document.createElement('canvas') as HTMLCanvasElement);
		this.canvas.width=this.opts.width;
		this.canvas.height=this.opts.height;
		this.ctx=this.canvas.getContext('2d');
	}

	addSprite(spr: Sprite, name: string) {
		this.sprites.push(spr);
		this.spriteNames.push(name);
	}
	getSprite(name: string) {
		let index=this.spriteNames.indexOf(name);
		return this.sprites[index]
	}
	removeSprite(name: string) {
		let index=this.spriteNames.indexOf(name);
		this.sprites.splice(index,1)
		this.sprites.splice(index,1);
	}

	draw() {
		this.ctx.clearRect(0,0,this.opts.width,this.opts.height);
		for (const i in this.sprites) {
			if (Object.prototype.hasOwnProperty.call(this.sprites, i)) {
				const spr = this.sprites[i];
				
				spr.draw(this.ctx);
			}
		}
	}

	update() {
		for (const i in this.sprites) {
			if (Object.prototype.hasOwnProperty.call(this.sprites, i)) {
				const spr = this.sprites[i];
				
				spr.update(spr);
			}
		}
	}

	loop() {
		// let start=Date.now();
		// Update sprites
		this.update();
		// Draw stuff
		this.draw();
		// Set image data
		this.img=this.ctx.getImageData(0,0,this.opts.width,this.opts.height);
		let end=Date.now();
		this.deltaTime=end-this.oldTime;
		this.oldTime=end;
		this.onRender();
	}
	start() {
		this.interval=setInterval(()=>{this.loop()},this.opts.fps);
		console.log("Started!");
	}
	stop() {
		clearInterval(this.interval);
		console.log("Stopped!");
	}
	get getRenderData() {
		return this.img;
	}
}

export { GameOpts, Game };