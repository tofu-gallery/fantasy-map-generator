import{n as e,r as t,x as n}from"./index-CuUJKJN8.js";import{$t as r,B as i,Qt as a,X as o,en as s,z as c}from"./utils-394NS37_.js";import{i as l}from"./dialog-helpers-kMHr89OS.js";import{t as u}from"./hatches-rNzhowW1.js";var d=`colorPicker`,f=Array.from({length:12},(e,t)=>r(t*30,.7,.7).formatHex()),p=[0,1,2,3,4,5,6,8,9,10,11].map(e=>`hatch${e}`),m=[`hex`,`rgb`,`hsl`],h=`hex`,g=window.EyeDropper,_=`
  #${d} { padding: .6em; }
  #${d} > div { width: auto; }
  #${d} button { margin: 0; }
  #${d} svg { pointer-events: none; }
  #${d} .area { position: relative; height: 12em; border: 1px solid #9b9b9b; cursor: crosshair; touch-action: none;
    background: linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, var(--hue)); }
  #${d} .handle { position: absolute; width: .7em; height: .7em; margin: -.45em; border: 1px solid #fff; outline: 1px solid #000; pointer-events: none; }
  #${d} .controls, #${d} .fields { display: flex; align-items: center; gap: .4em; margin-top: .6em; }
  #${d} .controls button svg { display: block; width: 1em; height: 1em; fill: currentColor; }
  #${d} .preview { flex: none; width: 1.75em; height: 1.75em; box-sizing: border-box; border: 1px solid #9b9b9b; }
  #${d} .hue { flex: 1; min-width: 0; height: .8em; border: 1px solid #9b9b9b;
    background: linear-gradient(to right, #f00, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00); }
  #${d} .inputs { display: flex; flex: 1; gap: .4em; }
  #${d} .inputs label { display: grid; flex: 1; min-width: 0; }
  #${d} .inputs label > * { grid-area: 1 / 1; }
  #${d} .inputs input { width: 100%; padding: .2em 2.2em .2em .4em; -moz-appearance: textfield; }
  #${d} .inputs input::-webkit-inner-spin-button, #${d} .inputs input::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
  #${d} .inputs span { align-self: center; justify-self: end; padding-right: .5em; font-size: .9em; opacity: .6; pointer-events: none; }
  #${d} .swatches { display: grid; grid-template-columns: repeat(12, 1fr); gap: .3em; margin-top: .6em; padding-top: .6em; border-top: 1px solid #0000001a; }
  #${d} .swatch { aspect-ratio: 1; padding: 0; border: 1px solid #9b9b9b; background: none; }
  #${d} .swatch:hover { border-color: #000; }
  #${d} .swatch.selected { outline: 2px solid var(--dark-solid); outline-offset: 1px; }
  #${d} .swatches:not(.expanded) .extra { display: none; }
  #${d} .expand { padding: 0; }
  #${d} .swatches svg, #${d} .preview svg { display: block; width: 100%; height: 100%; }
  #${d} .patterns { position: absolute; }
`,v=`<svg viewBox="0 0 16 16"><path d="M13.4 2.6a2 2 0 0 0-2.8 0L8.9 4.3 8.2 3.6 7.1 4.7l.7.7L2.5 10.7V13.5h2.8l5.3-5.3.7.7 1.1-1.1-.7-.7 1.7-1.7a2 2 0 0 0 0-2.8ZM4.7 12H4v-.7l5-5 .7.7Z"/></svg>`;function y(){let e=i(d);e&&$(e).dialog(`close`)}function b(e,r){y();let i=u.parse(e),a=i?.hatch??``,{h:s,s:_,v}=D(i?.color||T(e)||f[0]);Number.isNaN(s)&&(s=0),c(`dialogs`).insertAdjacentHTML(`beforeend`,x());let b=c(d),O=e=>b.querySelector(e),[k,A,j,M,N,P]=[O(`.area`),O(`.handle`),O(`.hue`),O(`.preview rect`),O(`.inputs`),O(`.patterns`)],F=(e=!0)=>{let t=E(s,_,v);if(k.style.setProperty(`--hue`,E(s,1,1)),Object.assign(A.style,{left:`${_*100}%`,top:`${(1-v)*100}%`,background:t}),j.value=String(Math.round(s)),P.style.color=t,M.setAttribute(`fill`,a?`url(#picker-${a})`:t),e){let e=N.querySelectorAll(`input`);S(t,s).forEach((t,n)=>{e[n].value=String(t.value)})}for(let e of b.querySelectorAll(`[data-color]`))e.classList.toggle(`selected`,e.dataset.color===t);for(let e of b.querySelectorAll(`[data-hatch]`))e.classList.toggle(`selected`,e.dataset.hatch===a)},I=(e=!0)=>{let t=E(s,_,v),n=a?u.fill(a,t):t;F(e),u.ensure(n),r(n)},L=(e,t=!0)=>{let n=D(e);Number.isNaN(n.h)||(s=n.h),[_,v]=[n.s,n.v],I(t)},R=e=>{let{left:t,top:r,width:i,height:a}=k.getBoundingClientRect();_=n((e.clientX-t)/i,0,1),v=1-n((e.clientY-r)/a,0,1),I()};k.addEventListener(`pointerdown`,e=>{k.setPointerCapture(e.pointerId),R(e)}),k.addEventListener(`pointermove`,e=>{k.hasPointerCapture(e.pointerId)&&R(e)}),j.addEventListener(`input`,()=>{s=j.valueAsNumber,I()}),N.addEventListener(`input`,()=>{let e=Array.from(N.querySelectorAll(`input`),e=>e.value.trim()),t=w(e);t&&(L(t,!1),h===`hsl`&&(s=Number(e[0])%360,F(!1)))}),N.addEventListener(`change`,()=>F());let z=()=>{N.innerHTML=S(E(s,_,v),s).map(C).join(``)};O(`.format`).addEventListener(`click`,()=>{h=m[(m.indexOf(h)+1)%m.length],z()}),O(`.random`).addEventListener(`click`,()=>L(o()));let B=O(`.eyedropper`);g?B.addEventListener(`click`,async()=>{let e=await new g().open().then(e=>T(e.sRGBHex)).catch(()=>``);e&&b.isConnected&&L(e)}):B.remove(),b.addEventListener(`click`,e=>{let t=e.target.closest(`.swatch`);t?.dataset.color?L(t.dataset.color):t?.dataset.hatch&&(a=a===t.dataset.hatch?``:t.dataset.hatch,I())});let V=O(`.hatches`),H=O(`.expand`),U=e=>{V.classList.toggle(`expanded`,e),H.className=`expand ${e?`icon-up-open`:`icon-down-open`}`,H.dataset.tip=t(e?`Show only the basic hatchings`:`Show all hatchings`)};H.addEventListener(`click`,()=>U(!V.classList.contains(`expanded`))),U(!!a&&!p.includes(a)),z(),F(),$(b).dialog({title:t(`Color Picker`),resizable:!1,width:`26em`,position:{my:`center`,at:`center`,of:`svg`},close:()=>l(d)})}function x(){let n=u.bases(),r=n.map(e=>u.recolor(e,`picker-${e.id}`,`currentColor`).outerHTML).join(``),i=(e,t,n,r=!1)=>`<button class="swatch${r?` extra`:``}" ${e} data-tip="${n}"><svg><rect width="100%" height="100%" fill="${t}" /></svg></button>`,a=f.map(e=>i(`data-color="${e}"`,e,t(`Click to fill with the color`))),o=n=>i(`data-hatch="${n}"`,`url(#picker-${n})`,e(t(`Click to fill with the hatching {{hatching}}`,{hatching:n}),t(`Click again to remove it`)),!p.includes(n)),s=n.map(({id:e})=>e).filter(e=>!p.includes(e));return`<div id="${d}" class="dialog">
    <style>${_}</style>
    <svg class="patterns" width="0" height="0"><defs>${r}</defs></svg>
    <div class="area" data-tip="${t(`Drag to set saturation and brightness`)}"><div class="handle"></div></div>
    <div class="controls">
      <button class="eyedropper" data-tip="${t(`Pick a color from the screen`)}">${v}</button>
      <span class="preview" data-tip="${t(`Current fill`)}"><svg><rect width="100%" height="100%" /></svg></span>
      <input class="hue" type="range" min="0" max="360" step="1" data-tip="${t(`Set hue`)}" />
      <button class="random icon-shuffle" data-tip="${t(`Pick a random color`)}"></button>
    </div>
    <div class="fields">
      <div class="inputs"></div>
      <button class="format icon-resize-vertical" data-tip="${t(`Switch color format`)}"></button>
    </div>
    <div class="swatches">${a.join(``)}</div>
    <div class="swatches hatches">
      ${p.map(o).join(``)}
      <button class="expand"></button>${s.map(o).join(``)}
    </div>
  </div>`}function S(e,t){if(h===`hex`)return[{label:`HEX`,value:e}];if(h===`rgb`){let{r:t,g:n,b:r}=s(e);return[{label:`R`,value:t,max:255},{label:`G`,value:n,max:255},{label:`B`,value:r,max:255}]}let{s:n,l:i}=r(e);return[{label:`H`,value:Math.round(t),max:360},{label:`S`,value:Math.round((n||0)*100),max:100},{label:`L`,value:Math.round(i*100),max:100}]}function C({label:e,value:t,max:n}){return`<label><input ${n?`type="number" min="0" max="${n}"`:`type="text" maxlength="7"`} value="${t}" spellcheck="false" autocomplete="off" /><span>${e}</span></label>`}function w(e){if(h===`hex`)return/^#?([\da-f]{3}|[\da-f]{6})$/i.test(e[0])?T(`#${e[0].replace(`#`,``)}`):``;let t=e.map(Number),n=h===`rgb`?[255,255,255]:[360,100,100];if(e.some(e=>e===``)||t.some((e,t)=>!(e>=0&&e<=n[t])))return``;let[i,a,o]=t;return h===`rgb`?s(i,a,o).formatHex():r(i,a/100,o/100).formatHex()}function T(e){return a(e)?.formatHex()||``}function E(e,t,n){let r=r=>{let i=(r+e/60)%6;return(n-n*t*Math.max(0,Math.min(i,4-i,1)))*255};return s(r(5),r(3),r(1)).formatHex()}function D(e){let{r:t,g:n,b:r}=s(e),[i,a,o]=[t/255,n/255,r/255],c=Math.max(i,a,o),l=c-Math.min(i,a,o);return{h:(l?c===i?((a-o)/l+6)%6:c===a?(o-i)/l+2:(i-a)/l+4:NaN)*60,s:c?l/c:0,v:c}}var O={open:b,close:y};export{O as ColorPicker};