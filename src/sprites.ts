import { Vec2 } from "./math.js"
import { getBoundingBoxCirc, pointInCirc, shapeFromSpr, clamp } from "./util.js"

class Sprite {
	draw(ctx: CanvasRenderingContext2D) {};
	update(self: Sprite) {};

	setUpdate(func: (self: Sprite)=>void) {
		this.update=func;
	}
}

class CircleSpr extends Sprite {
	pos: Vec2;
	radius: number;
	color: string;
	constructor(pos: Vec2, radius: number, color: string) {
		super();
		this.pos=pos;
		this.radius=radius;
		this.color=color;
	}

	draw(ctx: CanvasRenderingContext2D) {
		let circ=shapeFromSpr(this);
		let rect=getBoundingBoxCirc(circ);
		// rect.pos.x=clamp(rect.pos.x,0,ctx.canvas.width-rect.size.x);
		// rect.pos.y=clamp(rect.pos.y,0,ctx.canvas.height-rect.size.y);
		rect.size.x=Math.max(0,Math.min(rect.size.x,(ctx.canvas.width-rect.pos.x)));
		rect.size.y=Math.max(0,Math.min(rect.size.y,(ctx.canvas.height-rect.pos.y)));
		// console.log(rect.size.y)
		// rect.pos.x=Math.max(rect.pos.x,0);
		// rect.pos.y=Math.max(rect.pos.y,0);
		for (let y=rect.pos.y; y < (rect.pos.y+rect.size.y); y++) {
			for (let x=rect.pos.x; x < (rect.pos.x+rect.size.x); x++) {
				if (x==rect.pos.x || y==rect.pos.y || x==(rect.pos.x+rect.size.x-1) || y==(rect.pos.y+rect.size.y-1)) {
					ctx.fillStyle="rgb(0,255,0)";
					ctx.fillRect(Math.round(x),Math.round(y),1,1);
				}
				if (pointInCirc(new Vec2(x,y),circ)) {
					ctx.fillStyle=this.color;
					ctx.fillRect(Math.round(x),Math.round(y),1,1);
				}
			}
		}
	}
}

type Shape = CircleSpr;

export {Sprite, CircleSpr, Shape};