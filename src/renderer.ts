class ImageManager {
	imageData: ImageData;
	width: number;
	height: number;

	constructor(w: number, h: number) {
		this.width=w;
		this.height=h;
	}

	setPixel(x: number, y: number, r: number, g: number, b:number) {
		let pixNum = (y*this.width)+x;
		let i=pixNum*4;
		this.imageData[i]=r;
		this.imageData[i+1]=g;
		this.imageData[i+2]=b;
		this.imageData[i+3]=255;
	}
}