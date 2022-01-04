class Vec2 {
	constructor(x: number, y: number) {
		this.x=x;
		this.y=y;
	}
	x: number;
	y: number;
	add(vec: Vec2) {
		return new Vec2(this.x+vec.x,this.y+vec.y);
	}
	sub(vec: Vec2) {
		return new Vec2(this.x-vec.x,this.y-vec.y);
	}
	mult(vec: Vec2) {
		return new Vec2(this.x*vec.x,this.y*vec.y);
	}
	div(vec: Vec2) {
		return new Vec2(this.x/vec.x,this.y/vec.y);
	}
}
class Rect {
	pos: Vec2;
	size: Vec2;
	constructor(pos: Vec2, size: Vec2) {
		this.pos=pos;
		this.size=size;
	}
}
class Circ {
	pos: Vec2;
	radius: number;
	constructor(pos: Vec2, radius: number) {
		this.pos=pos;
		this.radius=radius;
	}
}

function dist(a: Vec2, b: Vec2): number {
	return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
}

export {Vec2,dist,Rect,Circ};