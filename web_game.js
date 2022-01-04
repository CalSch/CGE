import { Game, Canvas, CircleSpr, Vec2 } from './dst/lib.js';

const width=400;
const height=300;

let canvas=new Canvas("screen",{width,height});
let game=new Game({width,height,fps:60}, ()=>{
	canvas.render(game);
});

let dtEl=document.getElementById("dt");

game.addSprite(new CircleSpr(new Vec2(width/2,0), 20, "blue"), "circ2");
game.addSprite(new CircleSpr(new Vec2(width/2,height/2), 60, "red"), "circ");
game.getSprite("circ").setUpdate((self)=>{
	self.pos.x+=2;
	dtEl.innerText=game.deltaTime;
});


game.start();