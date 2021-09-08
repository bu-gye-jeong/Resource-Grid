(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{18:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var a,o,i,r,c,l,s=t(0),m=t.n(s),p=t(8),d=t.n(p),f=(t(18),t(2)),h=t(3),b=t(9),u=t(10),w=function(){function n(e){Object(b.a)(this,n),this.name=e.name,this.description=e.description,this._cost=e.cost,this.craftTime=e.craftTime,this.craftMultiply=e.craftMultiply||1,this._position=e.position,this.randomGrantOnCraft=e.randomGrantOnCraft,this.randomGrantPerSecond=e.randomGrantPerSecond,this._effectMultiply=e.effectMultiply,this.automates=e.automates}return Object(u.a)(n,[{key:"position",get:function(){return{x:this._position[0],y:this._position[1]}}},{key:"effectMultiply",value:function(n){return"function"===typeof this._effectMultiply?this._effectMultiply(n):1}},{key:"cost",value:function(n){var e;for(var t in e="function"===typeof this._cost?this._cost(n):this._cost,e)e[t]=Math.ceil(e[t]),e[t]<=0&&delete e[t];return e}}]),n}(),v=t(1),g=h.b.div(a||(a=Object(f.a)(["\n  --margin: calc(var(--cellSize) / 10);\n  --boxRatio: 1.3;\n  --boxSize: calc(var(--cellSize) - var(--margin));\n\n  margin: calc(var(--margin) / 2);\n\n  width: calc(var(--boxSize) / var(--boxRatio));\n  height: calc(var(--boxSize));\n  \n  background-color: var(--colMain3);\n  border-radius: calc(var(--boxSize) / 15);\n  box-shadow: var(--baseShadow);\n\n  transform: scale(1);\n  cursor: pointer;\n\n  transition: all 0.3s cubic-bezier(0,.79,.32,1);\n\n  &:hover {\n    width: calc(var(--boxSize) / var(--boxRatio) * 2);\n    background-color: var(--colMain4);\n    transform: scale(1.4);\n    z-index: 1;\n  }\n"]))),S=h.b.div(o||(o=Object(f.a)(["\n  display: flex;\n  overflow: hidden;\n  \n  & > span {\n    display: inline-block;\n\n    width: calc(var(--boxSize) / var(--boxRatio));\n    height: calc(var(--boxSize));\n  }\n"]))),y=h.b.div(i||(i=Object(f.a)(["\n  --imageSize: calc(var(--boxSize) / var(--boxRatio) - var(--margin));\n  --resourceGap: calc(var(--imageSize) * 9 / 8);\n  --imageScale: calc(81 / 8);\n\n  box-sizing: content-box;\n  margin: calc(var(--margin) / 2);\n\n  width: var(--imageSize);\n  height: var(--imageSize);\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: calc(100% * var(--imageScale));\n  image-rendering: pixelated;\n  filter: drop-shadow(var(--baseShadow));\n"])),"data:image/png;base64,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"),A=h.b.div(r||(r=Object(f.a)(["\n  padding-right: calc(var(--boxSize) / 20);\n\n  text-align: right;\n  font-weight: bolder;\n  color: var(--colReverse);\n"]))),j=Object(h.c)(c||(c=Object(f.a)(["\n  from {\n    transform: translateX(0%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateX(-100%);\n  }\n  50.0001% {\n    transform: translateX(100%);\n  }\n  to {\n    transform: translateX(0%);\n  }\n"]))),x=h.b.div(l||(l=Object(f.a)(["\n  overflow: hidden;\n\n  &::after {\n    --shadowSize: calc(var(--boxSize) / 10);\n\n    min-width: 100%;\n\n    display: inline-block;\n\n    content: attr(name);\n\n    color: var(--colReverse);\n    animation: "," 3s linear infinite;\n  }\n"])),j);var E,O,T=function(n){var e=n.data;return e?Object(v.jsx)(g,{children:Object(v.jsxs)(S,{children:[Object(v.jsxs)("span",{children:[Object(v.jsx)(y,{style:{backgroundPosition:"calc(var(--resourceGap) * -".concat(e.position.y,") calc(var(--resourceGap) * -").concat(e.position.x,")")}}),Object(v.jsx)(A,{children:"1004"})]}),Object(v.jsx)("span",{children:Object(v.jsx)(x,{name:e.name})})]})}):Object(v.jsx)(g,{style:{opacity:0,pointerEvents:"none"}})},M={Tree:new w({name:"Tree",craftTime:30,position:[0,0]}),Log:new w({name:"Log",cost:{Tree:1},craftTime:10,craftMultiply:5,position:[0,1]}),Plank:new w({name:"Plank",cost:{Log:1},craftTime:5,position:[0,2]}),Charcoal:new w({name:"Charcoal",cost:{Log:3},craftTime:3,craftMultiply:4,position:[0,3]}),Vine:new w({name:"Vine",position:[0,5]}),Mushroom:new w({name:"Mushroom",position:[0,6]}),TreeSeed:new w({name:"Tree Seed",description:"Generate tree",automates:["Tree"],position:[1,0]}),Axe:new w({name:"Axe",description:"Cut tree",cost:function(n){return{Log:Math.pow(n+1,2),Plank:3*Math.pow(n+1,2)}},craftTime:5,automates:["Log"],position:[1,1]}),Stone:new w({name:"Stone",craftTime:10,position:[2,0]}),CopperOre:new w({name:"Copper Ore",position:[2,1]}),IronOre:new w({name:"Iron Ore",position:[2,2]}),GoldOre:new w({name:"Gold Ore",position:[2,3]}),EmeraldStone:new w({name:"Emerald Stone",position:[2,5]}),AmethystStone:new w({name:"Amethyst Stone",position:[2,6]}),RubyStone:new w({name:"Ruby Stone",position:[2,7]}),SapphireStone:new w({name:"Sapphire Stone",position:[2,8]}),Pickaxe:new w({name:"Pickaxe",description:"Generate Stone & Ores randomely per second",cost:function(n){return{Plank:5*Math.pow(n+1,2),Stone:6*Math.pow(n,2),Copper:3*Math.pow(n-4,2),Iron:5*Math.pow(n-9,2),Gold:7*Math.pow(n-14,2),Emerald:4*Math.pow(n-19,1.4),Ruby:5*Math.pow(n-24,1.4)}},randomGrantPerSecond:[[.03,"Copper",3],[.015,"Iron",8],[.0075,"Gold",13],[.001,"Emerald",18],[1e-4,"Ruby",23]],effectMultiply:function(n){return Math.pow(n,1.5)},position:[3,0]}),Copper:new w({name:"Copper",cost:{CopperOre:3,Charcoal:1},craftTime:10,position:[3,1]}),Iron:new w({name:"Iron",cost:{IronOre:4,Charcoal:3},craftTime:15,position:[3,2]}),Gold:new w({name:"Gold",cost:{GoldOre:5,Charcoal:2},position:[3,3]}),Emerald:new w({name:"Emerald",cost:{EmeraldStone:10,Lava:1},craftTime:100,position:[3,5]}),Amethyst:new w({name:"Amethyst",cost:{AmethystStone:10,Lava:2},craftTime:150,position:[3,6]}),Ruby:new w({name:"Ruby",cost:{RubyStone:10,Lava:4},craftTime:200,position:[3,7]}),Sapphire:new w({name:"Sapphire",cost:{SapphireStone:10,Lava:8},craftTime:250,position:[3,8]}),Water:new w({name:"Water",craftTime:100,position:[5,0]}),Lava:new w({name:"Lava",craftTime:500,position:[5,1]}),Steam:new w({name:"Steam",cost:{Water:100,Lava:8},craftTime:300,craftMultiply:100,position:[5,2]}),Loot:new w({name:"Loot",position:[7,0]})},k=new Array(81).fill(null);for(var C in M){var z=M[C],G=z.position.y+9*z.position.x;k[G]=z}var L=h.b.div(E||(E=Object(f.a)(["\n  --cellSize: calc(var(--min) / 9);\n\n  flex: 9;\n\n  display: grid;\n  grid-template-columns: repeat(9, minmax(var(--cellSize), 1fr));\n  grid-auto-rows: var(--cellSize);\n  grid-auto-columns: var(--cellSize);\n  place-items: center;\n"]))),F=h.b.div(O||(O=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  color: var(--colReverseWeak);\n  font-weight: bold;\n  font-size: 2em;\n  opacity: 0.3;\n\n  flex: 7;\n"])));var I,R,Q=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(L,{children:k.map((function(n){return Object(v.jsx)(T,{data:n})}))}),Object(v.jsx)(F,{children:"- Nothing -"})]})},K=Object(h.a)(I||(I=Object(f.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  \n    font-family: 'Azeret Mono', monospace;\n    white-space: nowrap;\n    \n    user-select: none;\n  }\n  \n  body {\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    color: var(--colReverse);\n\n    background-color: var(--colMain1);\n  }\n  body#theme-dark, body:not(#theme-light){\n    --colStrong: #000000;\n    --colMain1: #191919;\n    --colMain2: #2a2a2a;\n    --colMain3: #3a3a3a;\n    --colMain4: #4a4a4a;\n    --colReverse: #ffffff;\n    --colReverseWeak: #efefef;\n    --colAlt1: #13d1f2;\n  }\n  body#theme-light {\n    --colStrong: #ffffff;\n    --colMain1: #ffffff;\n    --colMain2: #efefef;\n    --colMain3: #dedede;\n    --colMain4: #cdcdcd;\n    --colReverse: #191919;\n    --colReverseWeak: #2a2a2a;\n    --colAlt1: #f29913;\n  }\n"]))),P=h.b.div(R||(R=Object(f.a)(["\n  --min: min(var(--w), var(--h));\n\n  --baseShadow: calc(var(--min) / 250) calc(var(--min) / 250) 0 var(--colStrong);\n\n  display: flex;\n\n  width: var(--w);\n  height: var(--h);\n\n  border-radius: calc(var(--min) / 50);\n\n  transition: \n    background-image 0.5s linear,\n    background-color 0.3s ease-out;\n  \n  @media only screen and (orientation: portrait) {\n    & {\n      --w: 100vw;\n      --h: calc(100vw * 9 / 16);\n      font-size: calc(var(--w) / 70);\n    }\n  }\n  @media only screen and (orientation: landscape) {\n    & {\n      --w: 100vh;\n      --h: calc(100vh * 9 / 16);\n      font-size: calc(var(--h) / 70);\n    }\n  }\n  @media only screen and (min-width: 1600px) and (min-height: 900px) {\n    & {\n      --w: 1600px;\n      --h: 900px;\n      font-size: calc(var(--h) / 70);\n    }\n  }\n"])));var B=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(K,{}),Object(v.jsx)(P,{children:Object(v.jsx)(Q,{})})]})},D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,i=e.getLCP,r=e.getTTFB;t(n),a(n),o(n),i(n),r(n)}))};d.a.render(Object(v.jsx)(m.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root")),D()}},[[22,1,2]]]);
//# sourceMappingURL=main.5ca80671.chunk.js.map