(this["webpackJsonpequips-frontend"]=this["webpackJsonpequips-frontend"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/MetalHelmetIcon.1da46725.svg"},function(e,t,a){e.exports=a.p+"static/media/MetalArmsIcon.c946d1a6.svg"},function(e,t,a){e.exports=a.p+"static/media/MetalChestIcon.e80254a5.svg"},function(e,t,a){e.exports=a.p+"static/media/MetalShoulderIcon.ed0188e5.svg"},function(e,t,a){e.exports=a.p+"static/media/MetalShoesIcon.bee49b44.svg"},function(e,t,a){e.exports=a.p+"static/media/LeatherArm.6a2ce7e2.svg"},function(e,t,a){e.exports=a.p+"static/media/LeatherHelmet.b8dc0507.svg"},function(e,t,a){e.exports=a.p+"static/media/LeatherShoes.fb5383d5.svg"},function(e,t,a){e.exports=a.p+"static/media/LeatherShoulder.b8a22ec1.svg"},function(e,t,a){e.exports=a.p+"static/media/LeatherVest.95fccc05.svg"},,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/AxeIcon.c9d4a99d.svg"},function(e,t,a){e.exports=a.p+"static/media/DaggerIcon.9fa42cf5.svg"},function(e,t,a){e.exports=a.p+"static/media/SwordIcon.4e0ae922.svg"},function(e,t,a){e.exports=a.p+"static/media/BowIcon.e774f97a.svg"},function(e,t,a){e.exports=a.p+"static/media/SpearIcon.eed1d6a9.svg"},function(e,t,a){e.exports=a.p+"static/media/EmptyMetalHelmetIcon.565fc243.svg"},function(e,t,a){e.exports=a.p+"static/media/EmptyShoulderIcon.915becb1.svg"},function(e,t,a){e.exports=a.p+"static/media/EmptyArmsIcon.1fc77a33.svg"},function(e,t,a){e.exports=a.p+"static/media/EmptyChestIcon.0d5f7ab1.svg"},function(e,t,a){e.exports=a.p+"static/media/EmptyShoesIcon.89b1707b.svg"},function(e,t,a){e.exports=a.p+"static/media/EmptySwordIcon.ad062c20.svg"},,,function(e,t,a){e.exports=a(60)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(14),i=a.n(o),c=(a(54),a(55),a(7)),p="EQUIP",m="UNEQUIP";var l=a(2),u=a(64),s={WEAPON:"weapon",HELMET:"helmet",SHOULDER:"shoulder",ARMS:"arms",CHEST:"chest",SHOES:"shoes"},g=a(63),d=a(15),h=a.n(d),y=a(16),k=a.n(y),f=a(17),b=a.n(f),E=a(18),w=a.n(E),v=a(19),x=a.n(v),q=a(36),S=a.n(q),T=a(37),C=a.n(T),O=a(38),I=a.n(O),j=a(39),R=a.n(j),H=a(40),A=a.n(H),D=a(20),M=a.n(D),L=a(21),N=a.n(L),W=a(22),P=a.n(W),U=a(23),B=a.n(U),G=a(24),z=a.n(G),F=function(e){var t,a,r=e.backgroundColor,o=e.name,i=e.index,c=e.atk,p=e.range,m=e.armor,u=e.weight;e.equipTypes;switch(o){case"axe":t=S.a,a=s.WEAPON;break;case"sword":t=I.a,a=s.WEAPON;break;case"spear":t=A.a,a=s.WEAPON;break;case"bow":t=R.a,a=s.WEAPON;break;case"dagger":t=C.a,a=s.WEAPON;break;case"metalHelmet":t=h.a,a=s.HELMET;break;case"metalShoulder":t=w.a,a=s.SHOULDER;break;case"metalChest":t=b.a,a=s.CHEST;break;case"metalArms":t=k.a,a=s.ARMS;break;case"metalShoes":t=x.a,a=s.SHOES;break;case"leatherHelmet":t=N.a,a=s.HELMET;break;case"leatherShoulder":t=B.a,a=s.SHOULDER;break;case"leatherVest":t=z.a,a=s.CHEST;break;case"leatherArms":t=M.a,a=s.ARMS;break;case"leatherShoes":t=P.a,a=s.SHOES}var d=Object(g.a)({item:{type:a},collect:function(e){return{isDragging:e.isDragging(),itemType:e.getItemType(),dragItem:e.getItem()}},begin:function(){return console.log(a),{name:o,index:i,atk:c,range:p,armor:m,weight:u,backgroundColor:r,equipType:a}}}),y=Object(l.a)(d,2)[1];return n.a.createElement("div",{ref:y,style:{width:"100px",height:"100px",justifySelf:"center"}},n.a.createElement("img",{alt:"Icon for weapon",src:t}))},V=function(e){var t,a=e.backgroundColor,r=e.name,o=e.index,i=e.atk,c=e.range,p=e.armor,m=e.weight,u=e.equipTypes;switch(r){case"metalHelmet":t=h.a;break;case"leatherHelmet":t=N.a}var d=Object(g.a)({item:{type:s.HELMET},collect:function(e){return{isDragging:e.isDragging(),itemType:e.getItemType(),dragItem:e.getItem()}},begin:function(){return{name:r,index:o,atk:i,range:c,armor:p,weight:m,backgroundColor:a,equipType:u}}}),y=Object(l.a)(d,2)[1];return n.a.createElement("div",{ref:y,style:{width:"100px",height:"100px",justifySelf:"center"}},n.a.createElement("img",{alt:"Icon for helmet",src:t}))},Q=function(e){var t,a=e.backgroundColor,r=e.name,o=e.index,i=e.atk,c=e.range,p=e.armor,m=e.weight,u=e.equipTypes;switch(r){case"metalShoulder":t=w.a;break;case"leatherShoulder":t=B.a}var d=Object(g.a)({item:{type:s.SHOULDER},collect:function(e){return{isDragging:e.isDragging(),itemType:e.getItemType(),dragItem:e.getItem()}},begin:function(){return{name:r,index:o,atk:i,range:c,armor:p,weight:m,backgroundColor:a,equipType:u}}}),h=Object(l.a)(d,2)[1];return n.a.createElement("div",{ref:h,style:{width:"100px",height:"100px",justifySelf:"center"}},n.a.createElement("img",{alt:"Icon for shoulder",src:t}))},J=function(e){var t,a=e.backgroundColor,r=e.name,o=e.index,i=e.atk,c=e.range,p=e.armor,m=e.weight,u=e.equipTypes;switch(r){case"metalChest":t=b.a;break;case"leatherVest":t=z.a}var d=Object(g.a)({item:{type:s.CHEST},collect:function(e){return{isDragging:e.isDragging(),itemType:e.getItemType(),dragItem:e.getItem()}},begin:function(){return{name:r,index:o,atk:i,range:c,armor:p,weight:m,backgroundColor:a,equipType:u}}}),h=Object(l.a)(d,2)[1];return n.a.createElement("div",{ref:h,style:{width:"100px",height:"100px",justifySelf:"center"}},n.a.createElement("img",{alt:"Icon for chest",src:t}))},K=function(e){var t,a=e.backgroundColor,r=e.name,o=e.index,i=e.atk,c=e.range,p=e.armor,m=e.weight,u=e.equipTypes;switch(r){case"metalArms":t=k.a;break;case"leatherArms":t=M.a}var d=Object(g.a)({item:{type:s.ARMS},collect:function(e){return{isDragging:e.isDragging(),itemType:e.getItemType(),dragItem:e.getItem()}},begin:function(){return{name:r,index:o,atk:i,range:c,armor:p,weight:m,backgroundColor:a,equipType:u}}}),h=Object(l.a)(d,2)[1];return n.a.createElement("div",{ref:h,style:{width:"100px",height:"100px",justifySelf:"center"}},n.a.createElement("img",{alt:"Icon for Arms",src:t}))},Y=function(e){var t,a=e.backgroundColor,r=e.name,o=e.index,i=e.atk,c=e.range,p=e.armor,m=e.weight,u=e.equipTypes;switch(r){case"metalShoes":t=x.a;break;case"leatherShoes":t=P.a}var d=Object(g.a)({item:{type:s.SHOES},collect:function(e){return{isDragging:e.isDragging(),itemType:e.getItemType(),dragItem:e.getItem()}},begin:function(){return{name:r,index:o,atk:i,range:c,armor:p,weight:m,backgroundColor:a,equipType:u}}}),h=Object(l.a)(d,2)[1];return n.a.createElement("div",{ref:h,style:{width:"100px",height:"100px",justifySelf:"center"}},n.a.createElement("img",{alt:"Icon for shoes",src:t}))},$=function(e){var t,a=e.inventory,r=e.unequip,o=Object(u.a)({accept:[s.WEAPON,s.ARMS,s.CHEST,s.HELMET,s.SHOES,s.SHOULDER],drop:function(e,t){console.log(t.getItem());var a=t.getItem();console.log("This is the equipType: "+a.equipType);var n,o={name:a.name,backgroundColor:a.backgroundColor,atk:a.atk,range:a.range,armor:a.armor,weight:a.weight,type:a.equipType};switch(a.equipType){case"helmet":n=0;break;case"shoulder":n=1;break;case"arms":n=2;break;case"chest":n=3;break;case"shoes":n=4;break;default:n=5}r(a.index,o,n)}}),i=Object(l.a)(o,2)[1];return n.a.createElement("div",{ref:i,style:{width:"100%",height:"100%",backgroundColor:"beige",fontFamily:"triplex-cond-serif,serif",fontWeight:"400",fontStyle:"normal",gridColumnStart:"2",gridRowStart:"3",gridColumnEnd:"span 6"}},n.a.createElement("div",{style:{fontFamily:"mono45-headline,monospace",fontWeight:"500",fontStyle:"normal",marginTop:"10px",marginBottom:"10px",color:"black",opacity:"0.2",fontSize:"50px"}},"INVENTORY"),n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gridColumnGap:"15px",gridRowGap:"15px"}},a.map((function(e,a){switch(e.type){case"helmet":t=n.a.createElement(V,{key:a,backgroundColor:e.backgroundColor,name:e.name,atk:e.atk,range:e.range,armor:e.armor,weight:e.weight,index:a,equipTypes:e.type});break;case"shoulder":t=n.a.createElement(Q,{key:a,backgroundColor:e.backgroundColor,name:e.name,atk:e.atk,range:e.range,armor:e.armor,weight:e.weight,index:a,equipTypes:e.type});break;case"arms":t=n.a.createElement(K,{key:a,backgroundColor:e.backgroundColor,name:e.name,atk:e.atk,range:e.range,armor:e.armor,weight:e.weight,index:a,equipTypes:e.type});break;case"chest":t=n.a.createElement(J,{key:a,backgroundColor:e.backgroundColor,name:e.name,atk:e.atk,range:e.range,armor:e.armor,weight:e.weight,index:a,equipTypes:e.type});break;case"shoes":t=n.a.createElement(Y,{key:a,backgroundColor:e.backgroundColor,name:e.name,atk:e.atk,range:e.range,armor:e.armor,weight:e.weight,index:a,equipTypes:e.type});break;default:t=n.a.createElement(F,{key:a,backgroundColor:e.backgroundColor,name:e.name,atk:e.atk,range:e.range,armor:e.armor,weight:e.weight,index:a,equipTypes:e.type})}return t}))))},X=Object(c.b)((function(e){return{inventory:e.inventory}}),(function(e){return{unequip:function(t,a,r){e(function(e,t,a){return{type:m,index:e,item:t,equipType:a}}(t,a,r))}}}))($),Z=a(41),_=a.n(Z),ee=a(42),te=a.n(ee),ae=a(43),re=a.n(ae),ne=a(44),oe=a.n(ne),ie=a(45),ce=a.n(ie),pe=a(46),me=a.n(pe),le=function(e){var t,a,r,o,i,c=e.equipType,p=e.equip,m=e.equipped;switch(c){case"helmet":t=_.a,a=1,r=2,o=0,i=s.HELMET;break;case"shoulder":t=te.a,a=1,r=1,o=1,i=s.SHOULDER;break;case"arms":t=re.a,a=2,r=1,o=2,i=s.ARMS;break;case"chest":t=oe.a,a=2,r=2,o=3,i=s.CHEST;break;case"shoes":t=ce.a,a=3,r=2,o=4,i=s.SHOES;break;case"weapon":t=me.a,a=3,r=1,o=5,i=s.WEAPON}var g={gridRowStart:a,gridColumnStart:r,justifySelf:"center",position:"relative",width:"100px",height:"100px"},d=Object(u.a)({accept:i,drop:function(e,t){var a=t.getItem();console.log(a),console.log(a.equipType);var r={name:a.name,backgroundColor:a.backgroundColor,atk:a.atk,range:a.range,armor:a.armor,weight:a.weight,equippedIndex:o,type:a.equipType};console.log(t.getItem()),p(a.index,r,o)},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),h=Object(l.a)(d,2),y=h[0].isOver,k=h[1],f=m[o];return n.a.createElement("div",{style:g,ref:k},"empty"===f?n.a.createElement("div",null,n.a.createElement("img",{alt:"equip area to drop equips",src:t})):n.a.createElement(F,{backgroundColor:f.backgroundColor,name:f.name,atk:f.atk,range:f.range,armor:f.armor,weight:f.weight,equipTypes:o,index:f.index}),y&&n.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:200,opacity:.5,backgroundColor:"yellow"}}))},ue=function(e){var t=e.equip,a=e.equipped;return n.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"lightGrey",gridRowStart:"2",gridColumnStart:"5",gridColumnEnd:"span 3"}},n.a.createElement("div",{style:{fontFamily:"mono45-headline,monospace",fontWeight:"500",fontStyle:"normal",marginTop:"10px",fontSize:"50px",color:"white",opacity:"0.5",marginBottom:"10px"}},"EQUIPPED"),n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gridTemplateRows:"repeat(3, 1fr)",gridRowGap:"15px",marginBottom:"15px"}},n.a.createElement(le,{equipType:"helmet",equip:t,equipped:a}),n.a.createElement(le,{equipType:"shoulder",equip:t,equipped:a}),n.a.createElement(le,{equipType:"arms",equip:t,equipped:a}),n.a.createElement(le,{equipType:"chest",equip:t,equipped:a}),n.a.createElement(le,{equipType:"shoes",equip:t,equipped:a}),n.a.createElement(le,{equipType:"weapon",equip:t,equipped:a})))},se=Object(c.b)((function(e){return{equipped:e.equipped}}),(function(e){return{equip:function(t,a,r){e(function(e,t,a){return{type:p,index:e,item:t,equipType:a}}(t,a,r))}}}))(ue),ge=function(e){var t,a,r,o,i=e.equipped;return t=i.reduce((function(e,t){return"empty"!==t?e+Number(t.atk):e+0}),0),a=i.reduce((function(e,t){return"empty"!==t?e+Number(t.range):e+0}),0),r=i.reduce((function(e,t){return"empty"!==t?e+Number(t.armor):e+0}),0),o=i.reduce((function(e,t){return"empty"!==t?e+Number(t.weight):e+0}),0),n.a.createElement("div",{style:{width:"100%",height:"60%",backgroundColor:"orange",gridColumnStart:"2",gridColumnEnd:"span 3",gridRowStart:"2",display:"flex",flexDirection:"column",alignSelf:"center"}},n.a.createElement("div",{style:{fontFamily:"mono45-headline,monospace",fontWeight:"500",fontStyle:"normal",fontSize:"50px",marginTop:"10px",marginBottom:"10px",color:"white",opacity:"0.5"}},"STATS"),n.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",flexDirection:"column",fontFamily:"mono45-headline,monospace",fontWeight:"500",fontStyle:"normal",fontSize:"25px",opacity:"0.7",marginBottom:"10px"}},n.a.createElement("div",null,"ATK: ",t),n.a.createElement("div",null,"RANGE: ",a),n.a.createElement("div",null,"ARMOR: ",r),n.a.createElement("div",null,"WEIGHT: ",o)))},de=Object(c.b)((function(e){return{equipped:e.equipped}}))(ge),he=a(62),ye=a(47),ke=function(){return n.a.createElement("div",{style:{width:"100%",display:"flex",height:"100px",gridColumnEnd:"span 8",backgroundColor:"brown",justifyContent:"center",alignItems:"center"}},n.a.createElement("h1",{style:{fontFamily:"mono45-headline,monospace",margin:0,fontSize:"100px",fontWeight:"400",fontStyle:"normal",color:"white",opacity:"0.5"}},"EQUIPS"))};var fe=function(){return n.a.createElement("div",{className:"App",style:{display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gridTemplateRows:"auto auto auto",gridRowGap:"15px",gridColumnGap:"20px"}},n.a.createElement(he.a,{backend:ye.a},n.a.createElement(ke,null),n.a.createElement(X,null),n.a.createElement(se,null),n.a.createElement(de,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var be=a(10),Ee=a(28),we=a(4),ve={inventory:[{name:"sword",backgroundColor:"red",atk:3,range:2,armor:0,weight:10,type:"weapon"},{name:"spear",backgroundColor:"pink",atk:2,range:3,armor:0,weight:5,type:"weapon"},{name:"dagger",backgroundColor:"darkRed",atk:1,range:1,armor:0,weight:3,type:"weapon"},{name:"axe",backgroundColor:"darkRed",atk:1,range:1,armor:0,weight:15,type:"weapon"},{name:"bow",backgroundColor:"darkRed",atk:1,range:1,armor:0,weight:5,type:"weapon"},{name:"metalHelmet",backgroundColor:"darkRed",atk:1,range:1,armor:5,weight:10,type:"helmet"},{name:"metalShoulder",backgroundColor:"darkRed",atk:1,range:1,armor:3,weight:10,type:"shoulder"},{name:"metalChest",backgroundColor:"darkRed",atk:1,range:1,armor:7,weight:15,type:"chest"},{name:"metalArms",backgroundColor:"darkRed",atk:1,range:1,armor:3,weight:7,type:"arms"},{name:"metalShoes",backgroundColor:"darkRed",atk:1,range:1,type:"shoes",armor:5,weight:7},{name:"leatherHelmet",backgroundColor:"darkRed",atk:1,range:1,armor:3,weight:5,type:"helmet"},{name:"leatherShoulder",backgroundColor:"darkRed",atk:1,range:1,armor:3,weight:5,type:"shoulder"},{name:"leatherVest",backgroundColor:"darkRed",atk:1,range:1,armor:5,weight:5,type:"chest"},{name:"leatherArms",backgroundColor:"darkRed",atk:1,range:1,armor:3,weight:3,type:"arms"},{name:"leatherShoes",backgroundColor:"darkRed",atk:1,range:1,armor:3,weight:3,type:"shoes"}],equipped:["empty","empty","empty","empty","empty","empty"]},xe=function(e,t){var a=t.item.name;return 0!==e.inventory.filter((function(e){return e.name===a})).length?e.inventory:[].concat(Object(we.a)(e.inventory),[t.item])},qe=function(e,t){var a=t.item.name;return 0!==e.inventory.filter((function(e){return e.name===a})).length?e.equipped:e.equipped.map((function(e,a){return a!==t.equipType?e:"empty"}))},Se=function(e,t){return"empty"!==e.equipped[t.equipType]?Object(Ee.a)({},e,{inventory:[].concat(Object(we.a)(e.inventory.slice(0,t.index)),Object(we.a)(e.inventory.slice(t.index+1)),[e.equipped[t.equipType]]),equipped:[].concat(Object(we.a)(e.equipped.slice(0,t.equipType)),[t.item],Object(we.a)(e.equipped.slice(t.equipType+1)))}):Object(Ee.a)({},e,{inventory:[].concat(Object(we.a)(e.inventory.slice(0,t.index)),Object(we.a)(e.inventory.slice(t.index+1))),equipped:[].concat(Object(we.a)(e.equipped.slice(0,t.equipType)),[t.item],Object(we.a)(e.equipped.slice(t.equipType+1)))})};var Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object.assign({},e,Se(e,t));case m:return Object.assign({},e,Object(Ee.a)({},e,{inventory:xe(e,t),equipped:qe(e,t)}));default:return e}},Ce=Object(be.b)(Te);i.a.render(n.a.createElement(c.a,{store:Ce},n.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[49,1,2]]]);
//# sourceMappingURL=main.0b284c70.chunk.js.map