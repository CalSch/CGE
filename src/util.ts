import { Vec2, Rect, Circ, dist } from "./math.js"
import { CircleSpr, Shape } from "./sprites.js"

function getBoundingBoxCirc(circ: Circ): Rect {
	return new Rect(new Vec2(
		circ.pos.x-circ.radius,
		circ.pos.y-circ.radius),
	new Vec2(
		circ.radius*2,
		circ.radius*2
	));
}

function shapeFromSpr(spr: Shape) {
	if (spr instanceof CircleSpr) {
		return new Circ(spr.pos,spr.radius);
	}
}

function pointInCirc(p: Vec2, c: Circ): boolean {
	return dist(p,c.pos)<c.radius;
}

function clamp(i: number,min: number,max: number): number {
	return Math.min(Math.max(i,min),max);
}

function getRectAABB(r1: Rect, r2: Rect): Rect {
	let x=Math.max(r1.pos.x,r2.pos.x);
	let y=Math.max(r1.pos.y,r2.pos.y);
	let w=Math.min(Math.abs(r2.pos.x-r1.pos.x),r2.size.x);
	let h=Math.min(Math.abs(r2.pos.y-r1.pos.y),r2.size.y);
	return new Rect(new Vec2(x,y), new Vec2(w,h));
}

export { getBoundingBoxCirc, shapeFromSpr, pointInCirc, clamp, getRectAABB };