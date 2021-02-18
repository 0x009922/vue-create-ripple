import{o as e,c as n,r as t,a as l,b as a,d as i,F as r,e as s,w as o,t as c,f as u,g as d,i as p,h as f,j as v,k as g,p as m,l as h,m as b,n as w,q as y,s as _,u as x,v as D,x as R,y as k,z as C,A as $,B as S,C as E,D as A,E as N,G as I,H as j,I as z,R as L}from"./vendor.29bcafb2.js";!function(e=".",n="__import__"){try{self[n]=new Function("u","return import(u)")}catch(t){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[n]=e=>new Promise(((t,i)=>{const r=new URL(e,l);if(self[n].moduleMap[r])return t(self[n].moduleMap[r]);const s=new Blob([`import * as m from '${r}';`,`${n}.moduleMap['${r}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),a(o)},onload(){t(self[n].moduleMap[r]),a(o)}});document.head.appendChild(o)})),self[n].moduleMap={}}}("/vue-create-ripple/assets/");const M={},T={class:"space-y-8"};M.render=function(l,a){return e(),n("section",T,[t(l.$slots,"default")])};const B=["red","yellow","green","blue","purple"];var V={setup:()=>({colors:B,codeHTML:'\n<div\n  v-ripple="{ class: \'red--ripple\' }"\n  class="red"\n>\n  red\n</div>\n',codeCSS:"\n.red {\n  background: rgba(255, 0, 0, 40);\n  color: red;\n}\n\n.red--ripple {\n  background: red;\n  opacity: 0.25;\n}\n"})};const O={class:"space-y-4"},P={class:"grid gap-4 sm:grid-cols-5"};V.render=function(t,p,f,v,g,m){const h=l("v-code"),b=a("ripple");return e(),n("div",O,[i("div",P,[(e(!0),n(r,null,s(v.colors,(t=>o((e(),n("div",{class:`bg-${t}-200 text-${t}-600 text-center p-3 cursor-pointer select-none rounded`},c(t),3)),[[b,{class:`bg-${t}-500 opacity-50`}]]))),256))]),i(h,{lang:"html"},{default:u((()=>[d(c(v.codeHTML),1)])),_:1}),i(h,{lang:"css"},{default:u((()=>[d(c(v.codeCSS),1)])),_:1})])};const H=Symbol("i18n");function U(e){return`/ ALERT / ${e}`}const q=(e,{slots:n})=>{const t=p(H);return t?t.lang?t.lang in n?n[t.lang]():U(`Lang is "${t.lang}", slot for it not found`):U("Language not specified"):U("I18n injection not found. Are you use <i18n> inside <i18n-container> ?")};var F=f({props:{lang:{type:String,default:null}},setup(e,{slots:n}){const t=v({lang:g((()=>e.lang))});return m(H,h(t)),()=>n.default&&n.default()}});const G=e=>{const n=p(H);if(!n)throw new Error("i18n not provided. Make sure that you use it inside <i18n-container>");return{current:g((()=>n.lang&&e[n.lang]||{})),t:e=>g((()=>n.lang?e[n.lang]:null))}};var W={setup(){const{current:e}=G({ru:{click:"Жмякни"},en:{click:"Click"}});return{code:g((()=>`\n<div\n  v-ripple="{\n    circleStyle: {\n      border: '10px dotted blue'\n    },\n    radius: 50\n  }"\n>\n  ${e.value.click}\n</div>\n    `)),currentLang:e}}};const Y={class:"grid md:grid-cols-2 gap-4"};W.render=function(t,r,s,p,f,v){const g=l("v-code"),m=a("ripple");return e(),n("div",Y,[o(i("div",{class:"bg-blue-200 p-16 text-blue-600 flex items-center justify-center cursor-pointer select-none rounded"},c(p.currentLang.click),513),[[m,{circleStyle:{border:"10px dotted blue"},radius:50}]]),i(g,{lang:"html"},{default:u((()=>[d(c(p.code),1)])),_:1})])};var J=f({directives:{Ripple:b({class:"bg-indigo-600 opacity-25"})},components:{Block:(e,{slots:n,attrs:t})=>w("div",y(t,{class:"p-8 text-center flex items-center justify-center cursor-pointer select-none rounded bg-indigo-200 text-indigo-600"}),n)},setup(){const{current:e}=G({ru:{slow:"Ме-е-ед-ле-н-но-о-о-о..",fast:"Быстр-р-ро!",epileptic:"Будто бы глючно",elastic:"Эластично"},en:{slow:"Slo-o-o-o-ow...",fast:"Blazing fast!",epileptic:"Glitch-like",elastic:"Elastic"}});return{lang:e,code:g((()=>({slow:`\n<div\n  v-ripple="{\n    appearDuration: '10s',\n    disappearDuration: '5s',\n  }"\n>\n  ${e.value.slow}\n</div>\n          `,fast:`\n<div\n  v-ripple="{\n    appearDuration: '.3s',\n    disappearDuration: '.2s',\n  }"\n>\n  ${e.value.fast}\n</div>\n          `,epileptic:`\n<div\n  v-ripple="{\n    appearEasing: 'steps(7)',\n    disappearDuration: '1.5s',\n  }"\n>\n  ${e.value.epileptic}\n</div>\n          `,elastic:`\n<div\n  v-ripple="{\n    appearEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',\n    appearDuration: '.3s',\n    disappearEasing: 'cubic-bezier(0, 0.55, 0.45, 1)',\n    disappearDuration: '.8s',\n    radius: 56,\n  }"\n>\n  ${e.value.elastic}\n</div>\n          `})))}}});const K={class:"space-y-4"},Q={class:"grid gap-4 md:grid-cols-2"},X={class:"grid gap-4 md:grid-cols-2"},Z={class:"grid gap-4 md:grid-cols-2"},ee={class:"grid gap-4 md:grid-cols-3"};J.render=function(t,r,s,p,f,v){const g=l("block"),m=l("v-code"),h=a("ripple");return e(),n("div",K,[i("div",Q,[o(i(g,null,{default:u((()=>[d(c(t.lang.slow),1)])),_:1},512),[[h,{appearDuration:"10s",disappearDuration:"5s"}]]),i(m,{lang:"html",class:"min-w-0"},{default:u((()=>[d(c(t.code.slow),1)])),_:1})]),i("div",X,[o(i(g,null,{default:u((()=>[d(c(t.lang.fast),1)])),_:1},512),[[h,{appearDuration:".4s",disappearDuration:".2s"}]]),i(m,{lang:"html",class:"min-w-0"},{default:u((()=>[d(c(t.code.fast),1)])),_:1})]),i("div",Z,[o(i(g,null,{default:u((()=>[d(c(t.lang.epileptic),1)])),_:1},512),[[h,{appearEasing:"steps(7)",disappearDuration:"1.5s"}]]),i(m,{lang:"html",class:"min-w-0"},{default:u((()=>[d(c(t.code.epileptic),1)])),_:1})]),i("div",ee,[o(i(g,null,{default:u((()=>[d(c(t.lang.elastic),1)])),_:1},512),[[h,{appearEasing:"cubic-bezier(0.34, 1.56, 0.64, 1)",appearDuration:".3s",disappearEasing:"cubic-bezier(0, 0.55, 0.45, 1)",disappearDuration:".8s",radius:56}]]),i(m,{lang:"html",class:"md:col-span-2 max-w-full min-w-0"},{default:u((()=>[d(c(t.code.elastic),1)])),_:1})])])};var ne=f({directives:{LocalRipple:b({class:"bg-yellow-600 opacity-50"})},components:{But:(e,{slots:n,attrs:t})=>w("div",y(t,{class:"rounded bg-yellow-200 text-yellow-600 cursor-pointer select-none p-3 text-center"}),n)},setup(){const{current:e}=G({ru:{without:"Кнопка без центрирования",flag:"Центрирование через флаг",modifier:"Или через модификатор"},en:{without:"No centering",flag:"Via flag",modifier:"Via modifier"}});return{lang:e,code:g((()=>`\n<div v-ripple>\n  ${e.value.without}\n</div>\n\n<div v-ripple="{ center: true }">\n  ${e.value.flag}\n</div>\n\n<div v-ripple.center>\n  ${e.value.modifier}\n</div>\n      `))}}});const te={class:"space-y-4"},le={class:"grid md:grid-cols-3 gap-4"};ne.render=function(t,r,s,p,f,v){const g=l("but"),m=l("v-code"),h=a("local-ripple");return e(),n("div",te,[i("div",le,[o(i(g,null,{default:u((()=>[d(c(t.lang.without),1)])),_:1},512),[[h]]),o(i(g,null,{default:u((()=>[d(c(t.lang.flag),1)])),_:1},512),[[h,{center:!0}]]),o(i(g,null,{default:u((()=>[d(c(t.lang.modifier),1)])),_:1},512),[[h,void 0,void 0,{center:!0}]])]),i(m,{lang:"html"},{default:u((()=>[d(c(t.code),1)])),_:1})])};var ae=f({setup:()=>({classes:"bg-indigo-600 text-white p-2 w-24 text-center rounded cursor-pointer select-none"})});const ie={class:"flex space-x-4 items-center justify-center"};ae.render=function(t,l,r,s,c,u){const d=a("ripple");return e(),n("div",ie,[o(i("div",{class:[t.classes]}," Ripple ",2),[[d,{class:"bg-white opacity-25"}]]),i("div",{class:[t.classes,"active:opacity-75 transition-opacity duration-150 ease-in-out"]}," Default ",2)])};const re=["purple","indigo","blue","green","yellow","orange","red"].reduce(((e,n,t)=>(e[`ripple-${n}`]=b({appearDuration:.8+.3*t+"s",disappearDuration:.3+.1*t+"s",class:`bg-${n}-500`}),e)),{}),se=f({directives:re,setup(){const{current:e}=G({ru:{wannaRainbow:"Хочу радугу!"},en:{wannaRainbow:"I wanna rainbow!"}});return{lang:e,code:g((()=>{return{js:"\nconst colors = [\n  'purple',\n  'indigo',\n  'blue',\n  'green',\n  'yellow',\n  'orange',\n  'red'\n];\n\nconst directives = colors.reduce(\n  (prev, color, i) => {\n    prev[`ripple-${color}`] = createRippleDirective({\n      appearDuration: `${0.8 + i * 0.3}s`,\n      disappearDuration: `${0.3 + i * 0.1}s`,\n      class: `bg-${color}-500`\n    });\n\n    return prev;\n  },\n  {}\n);\n\nexport default defineComponent({\n  directives\n});\n",html:(n=e.value.wannaRainbow,`\n<div\n  v-ripple-purple\n  v-ripple-indigo\n  v-ripple-blue\n  v-ripple-green\n  v-ripple-yellow\n  v-ripple-orange\n  v-ripple-red\n>\n  ${n}\n</div>\n`)};var n}))}}}),oe={class:"space-y-4"},ce={class:"grid md:grid-cols-5 gap-4"};se.render=function(t,r,s,p,f,v){const g=l("v-code"),m=a("ripple-purple"),h=a("ripple-indigo"),b=a("ripple-blue"),w=a("ripple-green"),y=a("ripple-yellow"),_=a("ripple-orange"),x=a("ripple-red");return e(),n("div",oe,[o(i("div",{class:"elevation-2 rounded flex items-center justify-center p-8 select-none cursor-pointer"},c(t.lang.wannaRainbow),513),[[m],[h],[b],[w],[y],[_],[x]]),i("div",ce,[i(g,{lang:"js",class:"md:col-span-3 min-w-0"},{default:u((()=>[d(c(t.code.js),1)])),_:1}),i(g,{lang:"html",class:"md:col-span-2 min-w-0"},{default:u((()=>[d(c(t.code.html),1)])),_:1})])])};var ue=f({props:{noNested:{type:Boolean,default:!1}}});const de={class:"border border-green-300 rounded p-4 space-y-4 cursor-pointer select-none"},pe={class:"text-xl text-green-600"},fe={class:"flex space-x-4"};ue.render=function(l,u,d,p,f,v){const g=a("ripple");return o((e(),n("div",de,[i("div",pe,[t(l.$slots,"default")]),i("div",fe,[(e(),n(r,null,s(3,(e=>o(i("div",{class:"rounded-full bg-green-200 text-green-700 p-2 w-10 h-10 flex items-center justify-center cursor-pointer select-none"},c(e),513),[[g,{class:"bg-green-500 opacity-50"}]]))),64))])],512)),[[g,{class:"bg-green-500 opacity-25",appearDuration:"1.5s",noNested:l.noNested}]])};var ve=f({setup(){const{t:e}=G({});return()=>w(ue,{noNested:!1},{default:()=>e({ru:"Попробуйте кликнуть на кнопки ниже и на саму карточку",en:"Try clicking on the buttons below and on the card itself"}).value})}}),ge=f({setup(){const{t:e}=G({});return()=>w(ue,{noNested:!0},{default:()=>e({ru:"Здесь проблем с вложенностью нет",en:"There are no problems with nesting here"}).value})}}),me=f({setup:()=>({code:'\n<div v-ripple.self>\n  <div v-for="i in 3" v-ripple>\n    child\n  </div>\n</div>\n    '})});const he={class:"grid md:grid-cols-2 gap-4"},be={class:"border rounded cursor-pointer select-none border-green-300 p-8 grid sm:grid-cols-3 gap-8"},we={class:"bg-green-200 text-green-700 p-4 rounded flex items-center justify-center"};me.render=function(t,p,f,v,g,m){const h=l("v-code"),b=a("ripple");return e(),n("div",he,[o(i("div",be,[(e(),n(r,null,s(3,(e=>o(i("div",we," child ",512),[[b,{class:"bg-green-500 opacity-50"}]]))),64))],512),[[b,{class:"bg-green-500 opacity-25",appearDuration:"2s"},void 0,{self:!0}]]),i(h,{lang:"html",class:"min-w-0"},{default:u((()=>[d(c(t.code),1)])),_:1})])};const ye={};ye.render=function(l,i){const r=a("ripple");return o((e(),n("div",{class:"border border-green-300 p-4 rounded-full h-full relative cursor-pointer",onMousedown:i[1]||(i[1]=_((()=>{}),["stop"]))},[t(l.$slots,"default")],544)),[[r,{class:"bg-green-500 opacity-25"}]])};var _e=f({components:{Block:ye},setup:()=>({code:"\n<div v-ripple>\n  <div v-ripple @mousedown.stop>\n    <div v-ripple @mousedown.stop>\n      ...\n    </div>\n  </div>\n</div>\n    "})});const xe={class:"grid md:grid-cols-2 gap-4"};_e.render=function(t,a,r,s,o,p){const f=l("block"),v=l("v-code");return e(),n("div",xe,[i(f,null,{default:u((()=>[i(f,null,{default:u((()=>[i(f,null,{default:u((()=>[i(f,null,{default:u((()=>[i(f)])),_:1})])),_:1})])),_:1})])),_:1}),i(v,{lang:"html",class:"min-w-0"},{default:u((()=>[d(c(t.code),1)])),_:1})])};const De=Symbol("contents");var Re=f({props:{id:{type:String,default:null},level2:{type:Boolean,default:!1},ignore:{type:Boolean,default:!1}},setup(e,{slots:n}){const t=p(De),l=x(e.id);D((()=>{e.ignore||(l.value=t.register(e.id,e.level2,n.default))}));return{textClass:g((()=>e.level2?"text-xl  md:text-2xl":"text-2xl md:text-3xl")),actualId:l}}});Re.render=function(l,a,r,s,o,c){return e(),n("h2",{class:l.textClass},[i("a",{id:l.actualId},null,8,["id"]),t(l.$slots,"default")],2)};const ke=(e,{slots:n})=>w("li",{},[w(l("v-a"),{href:`#${e.id}`},n)]);ke.props={id:{type:String,required:!0}};var Ce=f({components:{ContentsLink:ke},setup:()=>({contents:p(De)})});const $e={class:"list-disc list-inside space-y-2"},Se={key:0,class:"list-circle list-inside ml-6 space-y-2"};Ce.render=function(t,a,o,c,d,p){const f=l("contents-link");return e(),n("ul",$e,[(e(!0),n(r,null,s(t.contents.registered,(t=>(e(),n(r,null,[i(f,{id:t.id},{default:u((()=>[(e(),n(R(t.render)))])),_:2},1032,["id"]),t.children?(e(),n("ul",Se,[(e(!0),n(r,null,s(t.children,(t=>(e(),n(f,{id:t.id},{default:u((()=>[(e(),n(R(t.render)))])),_:2},1032,["id"])))),256))])):k("",!0)],64)))),256))])};var Ee=f({setup(e,{slots:n}){const t=function(){const e=v([]);return h({registered:e,register:function(n,t,l){if(t){const t=e[e.length-1],a=`${t.id}-${n}`;return t.children.push({id:a,render:l}),a}return e.push({id:n,render:l,children:[]}),n}})}();return m(De,t),()=>n.default&&n.default()}}),Ae=f({props:{value:{type:String,default:null},options:{type:Array,required:!0}},emits:["update:value"],setup:(e,{emit:n})=>({model:g({get:()=>e.value,set:e=>n("update:value",e)})})});const Ne={class:"fixed right-0 top-0 p-4 select-none z-10"},Ie={class:"flex items-center space-x-1 bg-white elevation-4 p-1 rounded"},je=i("div",{class:"text-xl "},[i("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24"},[i("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z",fill:"currentColor"})])],-1);Ae.render=function(t,l,a,u,d,p){return e(),n("div",Ne,[i("div",Ie,[je,o(i("select",{"onUpdate:modelValue":l[1]||(l[1]=e=>t.model=e),class:"uppercase bg-transparent cursor-pointer"},[(e(!0),n(r,null,s(t.options,(t=>(e(),n("option",{value:t},c(t),9,["value"])))),256))],512),[[C,t.model]])])])};const ze=f({setup(){const{t:e}=G();return{codeApp:g((()=>`\n// main\nimport { createApp } from 'vue';\nimport { createRippleDirective } from 'vue-create-ripple';\n\nconst app = createApp();\n\n// ${e({ru:"Можно указать все необходимые опции по умолчанию, см. API",en:"All necessary options can be specified by default, see API"}).value}\nconst opts = { class: 'my-ripple-class' };\napp.directive('AppRipple', createRippleDirective(opts));\n      `)),codeComponent:"\n// component\nimport { defineComponent } from 'vue';\nimport { Ripple } from 'vue-create-ripple';\n\nexport default defineComponent({\n  directives: {\n    LocalDefaultRipple: Ripple\n  }\n});\n      ",codeTemplate:"\n<div>\n  <button v-local-default-ripple>\n    Local\n  </button>\n  <button v-app-ripple>\n    App\n  </button>\n</div>\n      "}}}),Le=d(" Сперва надо установить сам пакет: "),Me=d(" First you need to install the package itself: "),Te={class:"space-y-2"},Be=i("span",null,"npm",-1),Ve=d(" npm install vue-create-ripple "),Oe=d(" Затем использовать утилиту "),Pe=i("code",null,"createRippleDirective",-1),He=d(": "),Ue=d(" Then use the "),qe=i("code",null,"createRippleDirective",-1),Fe=d(" utility: "),Ge=d(" Или использовать готовую директиву с параметрами по умолчанию: "),We=d(" Or use a ready-made directive with default parameters: "),Ye=d(" Чтобы затем использовать в шаблоне: "),Je=d(" To then use in a template: ");ze.render=function(t,a,s,o,p,f){const v=l("i18n"),g=l("v-code");return e(),n(r,null,[i("p",null,[i(v,null,{ru:u((()=>[Le])),en:u((()=>[Me])),_:1})]),i("div",Te,[Be,i(g,null,{default:u((()=>[Ve])),_:1})]),i("p",null,[i(v,null,{ru:u((()=>[Oe,Pe,He])),en:u((()=>[Ue,qe,Fe])),_:1})]),i(g,{lang:"js"},{default:u((()=>[d(c(t.codeApp),1)])),_:1}),i("p",null,[i(v,null,{ru:u((()=>[Ge])),en:u((()=>[We])),_:1})]),i(g,{lang:"js"},{default:u((()=>[d(c(t.codeComponent),1)])),_:1}),i("p",null,[i(v,null,{ru:u((()=>[Ye])),en:u((()=>[Je])),_:1})]),i(g,{lang:"html"},{default:u((()=>[d(c(t.codeTemplate),1)])),_:1})],64)};const Ke=e=>{const n=e.word.split(""),t=n.map(((t,l)=>{return w("span",{class:"floating-chars__item",style:{animationDelay:(a=l,i=n.length,r=+e.delay,-i*r+a*r+"s"),animationDuration:`${e.duration}s`}},t);var a,i,r}));return w("div",{class:"floating-chars"},t)};Ke.props={word:{type:String,required:!0},delay:{type:[Number,String],default:.25},duration:{type:[Number,String],default:2.5}};var Qe=f({setup(){const{current:e}=G({ru:{app:"Можно установить глобально в приложении",comp:"Можно установить локально в компоненте",ps:"Подробнее об объекте опций см. ниже"},en:{app:"Can be installed globally in the application",comp:"Can be installed locally in a component",ps:"See below for more on the options object"}});return{code:g((()=>{return n=e.value.app,t=e.value.comp,l=e.value.ps,`\nimport { createApp, defineComponent } from 'vue';\nimport { createRippleDirective } from 'vue-create-ripple';\n\n// ${n}\ncreateApp()\n  .directive('ripple', createRippleDirective({\n    class: 'black-ripple'\n  }));\n\n// ${t}\nconst Component = defineComponent({\n  directives: {\n    CenterRipple: createRippleDirective({\n      center: true\n    })\n  }\n})\n\n// ${l}`;var n,t,l}))}}});const Xe=d(" Основной инструмент пакета, который создаёт Ripple-директиву с какими-то параметрами по умолчанию. Эти параметры можно потом будет перезаписать при самом использовании созданной директиве. "),Ze=d(" The main tool of the package that creates a Ripple directive with some default parameters. These parameters can then be overwritten when using the created directive. ");Qe.render=function(t,a,s,o,p,f){const v=l("i18n"),g=l("v-code");return e(),n(r,null,[i("p",null,[i(v,null,{ru:u((()=>[Xe])),en:u((()=>[Ze])),_:1})]),i(g,{lang:"js"},{default:u((()=>[d(c(t.code),1)])),_:1})],64)};var en=f({setup(){const{current:e}=G({ru:{comment:"По параметрам по умолчанию это две одинаковые директивы"},en:{comment:"In terms of default options, these are two identical directives"}});return{code:g((()=>`\nimport { defineComponent } from 'vue';\nimport { Ripple, createRippleDirective } from 'vue-create-ripple';\n\nconst Component = defineComponent({\n  directives: {\n    // ${e.value.comment}\n    Ripple,\n    AnotherRipple: createRippleDirective()\n  }\n});\n`))}}});const nn=d(" Также в пакете доступна уже готовая директива со значениями по умолчанию. Это просто short-hand для "),tn=i("code",null,"createRippleDirective()",-1),ln=d(": "),an=d(" A ready-made directive with default values is also available in the package. It's just a short-hand for "),rn=i("code",null,"createRippleDirective()",-1),sn=d(": ");en.render=function(t,a,s,o,p,f){const v=l("i18n"),g=l("v-code");return e(),n(r,null,[i("p",null,[i(v,null,{ru:u((()=>[nn,tn,ln])),en:u((()=>[an,rn,sn])),_:1})]),i(g,{lang:"js"},{default:u((()=>[d(c(t.code),1)])),_:1})],64)};var on=f({setup:()=>({mdiOpenInNew:$,OPTS:"export interface RippleOptions {\n    /**\n     * The class to be assigned to the circle. Can be used\n     * for quick and easy styling.\n     *\n     * ! If not specified, then nothing will be visible\n     */\n    class?: string | null;\n\n    /**\n     * Effect disappearence timing function\n     *\n     * @default 'cubic-bezier(0.4, 0, 0.2, 1)'\n     */\n    disappearEasing?: string;\n\n    /**\n     * Effect disappearence duration\n     *\n     * @default '.7s'\n     */\n    disappearDuration?: string;\n\n    /**\n     * Effect appearence timing function\n     *\n     * @default 'cubic-bezier(0.16, 1, 0.3, 1)'\n     */\n    appearEasing?: string;\n\n    /**\n     * Effect appearence duration\n     *\n     * @default '.8s'\n     */\n    appearDuration?: string;\n\n    /**\n     * Flag to disable effect triggering\n     */\n    disabled?: boolean;\n\n    /**\n     * If `true`, the effect will always come from the center of the element.\n     *\n     * @default false\n     */\n    center?: boolean;\n\n    /**\n     * If `true`, then the effect will work only on event\n     * `mousedown` on the element itself, not its descendants\n     *\n     * @default false\n     */\n    self?: boolean;\n\n    /**\n     * If `true`, then the effect when clicking on the child element will not work,\n     * if in the tree of its parents there is an element bound to it\n     * directive and this element is a child of the current one. Default\n     * `true`, so you need to explicitly specify `false` to disable this option\n     *\n     * @default true\n     */\n    noNested?: boolean;\n\n    /**\n     * Additional css styles for the container\n     */\n    containerStyle?: Partial<CSSStyleDeclaration>;\n\n    /**\n     * Additional css styles for the ripple\n     */\n    circleStyle?: Partial<CSSStyleDeclaration>;\n\n    /**\n     * The absolute value of the maximum radius of the circle (in pixels).\n     * By default, the circle is stretched enough to completely cover the entire\n     * element.\n     *\n     * `null` means to stretch\n     */\n    radius?: number | null;\n}"})});on.render=function(e,n,t,a,r,s){const o=l("v-code");return n[1]||(S(-1),n[1]=i(o,{lang:"ts"},{default:u((()=>[d(c(e.OPTS),1)])),_:1}),S(1),n[1])};var cn=f({setup(){const{t:e}=G({});return{code:g((()=>`\n<div v-ripple.self />\n<div v-ripple.center />\n<div v-ripple.self.center />\n\n\x3c!-- ${e({ru:"Эти варианты идентичны",en:"These cases are identical"}).value} --\x3e\n<div v-ripple="{ self: true }" />\n<div v-ripple.self />\n\n\x3c!-- ${e({ru:"noNested преобразуется в kebab-case",en:"noNested converts to kebab-case"}).value} --\x3e\n<div v-ripple="{ noNested: true }" />\n<div v-ripple.no-nested />\n      `))}}});const un=d(" Булевые опции "),dn=i("code",null,"center",-1),pn=d(", "),fn=i("code",null,"self",-1),vn=d(" и "),gn=i("code",null,"noNested",-1),mn=d(" можно указывать через модификаторы: "),hn=d(" Boolean options "),bn=i("code",null,"center",-1),wn=d(", "),yn=i("code",null,"self",-1),_n=d(" and "),xn=i("code",null,"noNested",-1),Dn=d(" can be specified via modifiers: ");cn.render=function(t,a,s,o,p,f){const v=l("i18n"),g=l("v-code");return e(),n(r,null,[i("p",null,[i(v,null,{ru:u((()=>[un,dn,pn,fn,vn,gn,mn])),en:u((()=>[hn,bn,wn,yn,_n,xn,Dn])),_:1})]),i(g,{lang:"html"},{default:u((()=>[d(c(t.code),1)])),_:1})],64)};var Rn=f({inheritAttrs:!1,props:{to:{type:String,default:null}}});Rn.render=function(l,r,s,c,u,d){const p=a("ripple");return e(),n("a",{class:"block",href:l.to,target:"_blank"},[o(i("div",y(l.$attrs,{class:"elevation-2 active:elevation-8 rounded cursor-pointer select-none transition-all duration-200 ease-md-standard"}),[t(l.$slots,"default")],16),[[p,{class:"bg-black opacity-25"}]])],8,["href"])};var kn=f({components:{Card:Rn},setup:()=>({mdiGithub:E,mdiNpm:A,mdiPencil:N})});const Cn={class:"grid gap-4 md:grid-cols-2"},$n=i("div",{class:"text-lg"}," GitHub ",-1),Sn=i("div",{class:"text-lg"}," NPM ",-1);kn.render=function(t,a,r,s,o,c){const d=l("v-icon"),p=l("card");return e(),n("div",Cn,[i(p,{to:"https://github.com/0x009922/vue-create-ripple",class:"flex items-center p-4 space-x-2"},{default:u((()=>[i(d,{path:t.mdiGithub},null,8,["path"]),$n])),_:1}),i(p,{to:"https://www.npmjs.com/package/vue-create-ripple",class:"flex items-center p-4 space-x-2"},{default:u((()=>[i(d,{path:t.mdiNpm,class:"text-red-600",fill:"currentColor"},null,8,["path"]),Sn])),_:1})])};var En=f({components:{ExampleViaClasses:V,ExampleViaInlineStyle:W,ExampleEasingsDurations:J,ExampleCenter:ne,ExampleMouseReenter:ae,ExampleRainbowRipple:se,VSection:M,ExampleNestedOff:ve,ExampleNestedOn:ge,ExampleNestedSelf:me,ExampleNestedMousedown:_e,ContentsContainer:Ee,ContentsRenderer:Ce,ContentsHeader:Re,I18n:q,I18nContainer:F,LanguagePicker:Ae,Installation:ze,FloatingChars:Ke,ApiCreateDirective:Qe,ApiRipple:en,ApiOpts:on,ApiModifiers:cn,Links:kn},setup(){const e=["ru","en"],{lang:n}=function(e){const n="locale",t=localStorage.getItem(n),l=navigator.language.slice(0,2),a=x(null!=t?t:l);return I((()=>{e.available.includes(a.value)||(a.value=e.default),localStorage.setItem(n,a.value)})),{lang:a}}({available:e,default:"en"});return{languages:e,lang:n}}});const An={class:"max-w-screen-md overflow-hidden mx-auto p-4 py-16 pb-24"},Nn={class:"space-y-6"},In=i("h1",{class:"text-2xl md:text-5xl font-mono"}," vue-create-ripple ",-1),jn={class:"text-gray-700"},zn=d(" Гибкая "),Ln=d("-директива для Vue 3. "),Mn=d(" Flexible "),Tn=d(" Directive for Vue 3. "),Bn=i("hr",null,null,-1),Vn=d(" Содержание "),On=d(" Contents "),Pn=i("hr",null,null,-1),Hn=d(" Установка "),Un=d(" Installation "),qn=i("hr",null,null,-1),Fn=d(" Примеры "),Gn=d(" Examples "),Wn=d(" Базовое применение "),Yn=d(" Basic usage "),Jn=d(" Можно задать стиль через классы: "),Kn=d(" You can set the style through classes: "),Qn=d(" А можно прямо указывать стиль, к тому же уменьшив максимальный радиус: "),Xn=d(" Or you can directly specify the style, besides reducing the maximum radius: "),Zn=d(" Изменение длительности и функции плавности "),et=d(" Changing the duration and timing function "),nt=d(" Иногда хочется помедленнее... иногда побыстрее, а иногда "),tt=d(". "),lt=d(" Sometimes you want to slow down... sometimes faster, and sometimes "),at=d(". "),it=d(" Центрирование "),rt=d(" Centering "),st=d(" Если нужно, чтобы круг всегда исходил из центра элемента, вне зависимости от место нажатия, нужно указать флаг "),ot=i("code",null,"center",-1),ct=d(": "),ut=d(" If you want the circle to always originate from the center of the element, regardless of where you clicked, you need to specify the "),dt=i("code",null,"center",-1),pt=d(" flag: "),ft=d(" События "),vt=i("code",null,"mouseenter",-1),gt=d(" и "),mt=i("code",null,"mouseleave",-1),ht=i("code",null,"mouseenter",-1),bt=d(" & "),wt=i("code",null,"mouseleave",-1),yt=d(" events "),_t=d(" Эффект будет возникать вновь, если пользователь уведёт и наведёт мышь обратно, не отпуская при этом кнопку. Это говорит пользователю о том, что кнопка по-прежнему активна и клик произойдёт, если он отпустит кнопку на элементе: "),xt=d(" The effect will occur again if the user moves away and hovers the mouse back without releasing the button. This tells the user that the button is still active and the click will happen if he releases the button on the element: "),Dt=d(" Вложенные рипплы "),Rt=d(" Nested ripples "),kt=d(" Иногда возникает ситуация, что внутри элемента, к которому привязана ripple-директива, находятся другие элементы, к которым также привязана директива. Происходит так, что при нажатии на вложенном, эффект срабатывает и на его родителе, что может дезориентировать: "),Ct=d(" Sometimes a situation arises that inside the element to which the ripple directive is attached, there are other elements to which the directive is also attached. What happens is that when you click on a nested one, the effect is triggered on its parent, which can be disorienting: "),$t=d(" Для того, чтобы так не происходило, в опциях доступен флаг "),St=i("code",null,"noNested",-1),Et=d(" (по умолчанию "),At=i("code",null,"true",-1),Nt=d("), который предотвращает срабатывание эффекта на родительских элементах: "),It=d(" To prevent this from happening, the "),jt=i("code",null,"noNested",-1),zt=d(" flag (by default "),Lt=i("code",null,"true",-1),Mt=d(") is available in the options, which prevents the effect from triggering on parent elements: "),Tt=d(" Также доступен флаг "),Bt=i("code",null,"self",-1),Vt=d(", который говорит директиве срабатывать только при клике точно на тот элемент, к которому она привязана: "),Ot=d(" The "),Pt=i("code",null,"self",-1),Ht=d(" flag is also available, which tells the directive to fire only when you click on the exact element to which it is attached: "),Ut=d(" Стоит также упомянуть о небольшом лайфхаке, с которым не нужно использовать ни "),qt=i("code",null,"noNested",-1),Ft=d(", ни "),Gt=i("code",null,"self",-1),Wt=d(" — это остановка всплытия события "),Yt=i("code",null,"mousedown",-1),Jt=d(" на дочерних элементах изящными средствами Vue: "),Kt=d(" It is also worth mentioning a small life hack with which you do not need to use either "),Qt=i("code",null,"noNested",-1),Xt=d(" or "),Zt=i("code",null,"self",-1),el=d(" — this is to stop the "),nl=i("code",null,"mousedown",-1),tl=d(" event from bubbling up on child elements by graceful Vue means: "),ll=d(" Двойные, тройные, etc рипплы "),al=d(" Double-ripple, tripple, quadripple, etc "),il=d(" К одному элементу можно привязать одновременно несколько директив с разными параметрами: "),rl=d(" Several directives with different parameters can be attached to one element simultaneously: "),sl=i("hr",null,null,-1),ol=d(" API "),cl=i("code",null,"createRippleDirective",-1),ul=i("code",null,"Ripple",-1),dl=d(" Объект параметров, значения по умолчанию "),pl=d(" Options object, default values "),fl=d(" Модификаторы "),vl=d(" Modifiers "),gl=i("hr",null,null,-1),ml=d(" Ссылки "),hl=d(" Links ");En.render=function(t,a,r,s,o,c){const d=l("language-picker"),p=l("floating-chars"),f=l("i18n"),v=l("contents-header"),g=l("contents-renderer"),m=l("v-section"),h=l("installation"),b=l("example-via-classes"),w=l("example-via-inline-style"),y=l("example-easings-durations"),_=l("example-center"),x=l("example-mouse-reenter"),D=l("example-nested-off"),R=l("example-nested-on"),k=l("example-nested-self"),C=l("example-nested-mousedown"),$=l("example-rainbow-ripple"),S=l("api-create-directive"),E=l("api-ripple"),A=l("api-opts"),N=l("api-modifiers"),I=l("links"),j=l("contents-container"),z=l("i18n-container");return e(),n(z,{lang:t.lang},{default:u((()=>[i(j,null,{default:u((()=>[i("main",An,[i(d,{value:t.lang,"onUpdate:value":a[1]||(a[1]=e=>t.lang=e),options:t.languages},null,8,["value","options"]),i("article",Nn,[In,i("div",jn,[i(f,null,{ru:u((()=>[zn,i(p,{delay:"0.12",word:"Ripple"}),Ln])),en:u((()=>[Mn,i(p,{delay:"0.12",word:"Ripple"}),Tn])),_:1})]),Bn,i(m,null,{default:u((()=>[i(v,{ignore:""},{default:u((()=>[i(f,null,{ru:u((()=>[Vn])),en:u((()=>[On])),_:1})])),_:1}),i(g)])),_:1}),Pn,i(m,null,{default:u((()=>[i(v,{id:"install"},{default:u((()=>[i(f,null,{ru:u((()=>[Hn])),en:u((()=>[Un])),_:1})])),_:1}),i(h)])),_:1}),qn,i(m,null,{default:u((()=>[i(v,{id:"examples"},{default:u((()=>[i(f,null,{ru:u((()=>[Fn])),en:u((()=>[Gn])),_:1})])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"basic",level2:""},{default:u((()=>[i(f,null,{ru:u((()=>[Wn])),en:u((()=>[Yn])),_:1})])),_:1}),i("p",null,[i(f,null,{ru:u((()=>[Jn])),en:u((()=>[Kn])),_:1})]),i(b),i("p",null,[i(f,null,{ru:u((()=>[Qn])),en:u((()=>[Xn])),_:1})]),i(w)])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"easings-durations",level2:""},{default:u((()=>[i(f,null,{ru:u((()=>[Zn])),en:u((()=>[et])),_:1})])),_:1}),i("p",null,[i(f,null,{ru:u((()=>[nt,i(p,{word:"странно",duration:"1.5",delay:"0.15"}),tt])),en:u((()=>[lt,i(p,{word:"weird",duration:"1.5",delay:"0.15"}),at])),_:1})]),i(y)])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"center",level2:""},{default:u((()=>[i(f,null,{ru:u((()=>[it])),en:u((()=>[rt])),_:1})])),_:1}),i("p",null,[i(f,null,{ru:u((()=>[st,ot,ct])),en:u((()=>[ut,dt,pt])),_:1})]),i(_)])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"mouseenter-mouseleave",level2:""},{default:u((()=>[i(f,null,{ru:u((()=>[ft,vt,gt,mt])),en:u((()=>[ht,bt,wt,yt])),_:1})])),_:1}),i("p",null,[i(f,null,{ru:u((()=>[_t])),en:u((()=>[xt])),_:1})]),i(x)])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"nested-ripples",level2:""},{default:u((()=>[i(f,null,{ru:u((()=>[Dt])),en:u((()=>[Rt])),_:1})])),_:1}),i("p",null,[i(f,null,{ru:u((()=>[kt])),en:u((()=>[Ct])),_:1})]),i(D),i("p",null,[i(f,null,{ru:u((()=>[$t,St,Et,At,Nt])),en:u((()=>[It,jt,zt,Lt,Mt])),_:1})]),i(R),i("p",null,[i(f,null,{ru:u((()=>[Tt,Bt,Vt])),en:u((()=>[Ot,Pt,Ht])),_:1})]),i(k),i("p",null,[i(f,null,{ru:u((()=>[Ut,qt,Ft,Gt,Wt,Yt,Jt])),en:u((()=>[Kt,Qt,Xt,Zt,el,nl,tl])),_:1})]),i(C)])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"multi-ripples",level2:""},{default:u((()=>[i(f,null,{ru:u((()=>[ll])),en:u((()=>[al])),_:1})])),_:1}),i("p",null,[i(f,null,{ru:u((()=>[il])),en:u((()=>[rl])),_:1})]),i($)])),_:1})])),_:1}),sl,i(m,null,{default:u((()=>[i(v,{id:"api"},{default:u((()=>[ol])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"create-directive",level2:""},{default:u((()=>[cl])),_:1}),i(S)])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"default-ripple",level2:""},{default:u((()=>[ul])),_:1}),i(E)])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"options",level2:""},{default:u((()=>[i(f,null,{ru:u((()=>[dl])),en:u((()=>[pl])),_:1})])),_:1}),i(A)])),_:1}),i(m,null,{default:u((()=>[i(v,{id:"modifiers",level2:""},{default:u((()=>[i(f,null,{ru:u((()=>[fl])),en:u((()=>[vl])),_:1})])),_:1}),i(N)])),_:1})])),_:1}),gl,i(m,null,{default:u((()=>[i(v,{id:"links"},{default:u((()=>[i(f,null,{ru:u((()=>[ml])),en:u((()=>[hl])),_:1})])),_:1}),i(I)])),_:1})])])])),_:1})])),_:1},8,["lang"])};function bl(...e){console.warn("[VCode]",...e)}const wl=(e,{slots:n})=>{if(!n.default)return bl("Default slot undefined"),null;const[t]=n.default();if("string"!=typeof t.children)return bl("Content is not a string"),null;const l=t.children.trim(),a=e.lang?w("div",{innerHTML:j.highlight(l,j.languages[e.lang],e.lang)}):l,i=e.lang?w("span",{class:"absolute top-0 right-0 p-2 font-sans"},[e.lang]):null;return w("div",{class:"v-code"},[w("pre",{class:"h-full p-4 shadow-inner overflow-auto relative rounded language-"},[a,i])])};wl.props={lang:{type:String,default:null}};const yl=(e,{attrs:n})=>w("svg",y(n,{viewBox:"0 0 24 24",class:"inline-block",width:e.size,height:e.size}),[w("path",{d:e.path})]);yl.props={path:{type:String,required:!0},size:{type:[Number,String],default:24}};z(En).component("VCode",wl).component("VA",((e,{slots:n,attrs:t})=>w("a",y(t,{class:"text-blue-600 visited:text-purple-600"}),n))).component("VIcon",yl).component("I18n",q).directive("ripple",L).mount("#app");