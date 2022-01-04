import { Game } from "./game.js";

interface CanvasOpts {
	width: number;
	height: number;
}

class Canvas {
	id: string;
	opts: CanvasOpts;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	constructor(id: string, opts: CanvasOpts) {
		this.id=id;
		this.opts=opts;
		this.canvas=(document.getElementById(this.id) as HTMLCanvasElement);
		this.ctx=this.canvas.getContext('2d');
		this.canvas.width=this.opts.width;
		this.canvas.height=this.opts.height;
	}
	render(game: Game) {
		this.ctx.putImageData(game.getRenderData,0,0);
	}
}

export { Canvas, CanvasOpts };