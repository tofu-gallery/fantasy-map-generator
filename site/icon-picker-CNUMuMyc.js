import{f as e,n as t,r as n,u as r}from"./index-CuUJKJN8.js";import{B as i,f as a,m as o,p as s,z as c}from"./utils-394NS37_.js";import{a as l,i as u,n as d}from"./emblems-generator-B3pPl-l-.js";import{i as f}from"./tooltips-7PimaK30.js";import{n as p}from"./icons-list-BiXau1Li.js";import{i as m,r as h}from"./dialog-helpers-kMHr89OS.js";import{o as g}from"./id-labels-Bh86rU1j.js";import{t as _}from"./icons-archive-BP8RzLBi.js";import{t as v}from"./pictures-C6C6r3PL.js";var y=`iconPositioner`,b=.25,[x,S]=[25,400],C=`
  #${y} > div { width: auto; }
  #${y} .stage { width: 16em; height: 16em; margin: 0 auto; background: repeating-conic-gradient(#e8e8e8 0 25%, #fff 0 50%) 0 0 / 1em 1em; cursor: grab; touch-action: none; }
  #${y} .stage:active { cursor: grabbing; }
  #${y} .stage svg { display: block; width: 100%; height: 100%; }
  #${y} .controls { display: flex; align-items: center; gap: .4em; margin-top: .5em; }
  #${y} .controls slider-input { flex: 1; min-width: 0; }
  #${y} .controls input[type=range] { flex: 1; min-width: 0; }
  #${y} .previews { display: flex; justify-content: center; align-items: center; gap: 1em; margin-top: .5em; }
  #${y} .previews svg { width: 2em; height: 2em; }
  #${y} .previews .circle svg { border-radius: 50%; background: #d4c7a1; }
  #${y} .previews .small svg { width: 1em; height: 1em; }
`;function w(e){let t=i(y);t&&(!e||t.dataset.icon===e)&&$(t).dialog(`close`)}function T(t){let r=d.get(t);if(!r||!i(t))return;let a=e=>i(t)?.setAttribute(`viewBox`,e),o=r.viewBox,s=E(o),l={...s};w(),c(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${y}" class="dialog" data-icon="${e(t)}">
      <style>${C}</style>
      <div class="stage" data-tip="${n(`Drag to pan, scroll to zoom`)}">
        <svg><g class="art"${u.paintAttributes(t)}>${c(t).innerHTML}</g><path class="shade" fill="#000" fill-opacity=".45" fill-rule="evenodd"/><rect class="edge" fill="none" stroke="#d0240f" vector-effect="non-scaling-stroke" stroke-dasharray="4 3"/></svg>
      </div>
      <div class="controls">
        <span>${n(`Zoom`)}</span>
        <slider-input min="${x}" max="${S}" value="100"></slider-input>
        <button type="button" class="fit" data-tip="${n(`Fit the frame to the picture's visible content`)}">${n(`Fit`)}</button>
      </div>
      <div class="previews" data-tip="${n(`The icon at map sizes`)}">
        <span class="small">${u.html(t)}</span>
        <span>${u.html(t)}</span>
        <span class="circle">${u.html(t)}</span>
      </div>
    </div>`);let p=c(y),h=p.querySelector(`.stage svg`),g=p.querySelector(`slider-input`),_=(e,t=!1)=>{l=e;let{x:n,y:r,side:i}=l,o=i*b,[c,u,d]=[n-i/2-o,r-i/2-o,i+2*o];h.setAttribute(`viewBox`,`${c} ${u} ${d} ${d}`);let[f,p]=[n-i/2,r-i/2];h.querySelector(`.shade`).setAttribute(`d`,`M${c},${u}h${d}v${d}h${-d}z M${f},${p}v${i}h${i}v${-i}z`);let m=h.querySelector(`.edge`);for(let[e,t]of Object.entries({x:f,y:p,width:i,height:i}))m.setAttribute(e,String(t));t||(g.value=String(Math.round(s.side/i*100))),a(D(l))};_(l);let T=(e,t=!1)=>{let[n,r]=[s.side*100/S,s.side*100/x];_({...l,side:Math.min(r,Math.max(n,e))},t)};g.addEventListener(`input`,e=>{e.target===g&&T(s.side*100/g.valueAsNumber,!0)}),g.addEventListener(`change`,e=>{e.target===g&&_(l)}),h.addEventListener(`wheel`,e=>{e.preventDefault(),T(l.side*1.1**Math.sign(e.deltaY))}),h.addEventListener(`pointerdown`,e=>{h.setPointerCapture(e.pointerId);let t={x:e.clientX,y:e.clientY},n=e=>{let n=l.side*1.5/h.getBoundingClientRect().width;_({...l,x:l.x-(e.clientX-t.x)*n,y:l.y-(e.clientY-t.y)*n}),t={x:e.clientX,y:e.clientY}},r=()=>{h.removeEventListener(`pointermove`,n),h.removeEventListener(`pointerup`,r),h.removeEventListener(`pointercancel`,r)};h.addEventListener(`pointermove`,n),h.addEventListener(`pointerup`,r),h.addEventListener(`pointercancel`,r)}),p.querySelector(`.fit`).addEventListener(`click`,async()=>{let e=await v.fit(r);p.isConnected&&(_(E(e)),f(n(`The frame is fitted to the picture`),!1,`success`,2e3))});let O=!1;$(p).dialog({title:n(`Position icon`),width:`20em`,position:{my:`center`,at:`center`,of:`svg`},close:()=>{O||a(o),m(y)},buttons:{[n(`Apply`)]:function(){O=!0,d.update(t,{viewBox:D(l)}),$(this).dialog(`close`)},[n(`Cancel`)]:function(){$(this).dialog(`close`)}}})}function E(e){let[t,n,r,i]=u.parseFrame(e)??[0,0,100,100];return{x:t+r/2,y:n+i/2,side:Math.max(r,i)}}function D({x:e,y:t,side:n}){return u.formatFrame([e-n/2,t-n/2,n,n])}var O=`iconPicker`,ee=`
  #${O} { padding: .4em .6em; }
  #${O} > div { width: auto; }
  #${O} .head { display: flex; align-items: center; gap: .6em; padding-bottom: .5em; border-bottom: 1px solid #0000001a; }
  #${O} .current { display: flex; align-items: center; gap: .5em; flex: 1; min-width: 0; }
  #${O} .current .preview { flex: none; display: grid; place-items: center; width: 2.2em; height: 2.2em; border-radius: 4px; background: #0000000d; }
  #${O} .current .preview svg { width: 1.7em; height: 1.7em; overflow: visible; }
  #${O} .current .about { display: flex; align-items: baseline; gap: .5em; min-width: 0; white-space: nowrap; }
  #${O} .current .name { font-weight: bold; overflow: hidden; text-overflow: ellipsis; }
  #${O} .current .from { font-size: .85em; opacity: .65; overflow: hidden; text-overflow: ellipsis; }
  #${O} .currentActions { display: flex; gap: .2em; margin-left: auto; }
  #${O} .currentActions button { margin: 0; padding: .2em .4em; white-space: nowrap; }
  #${O} .search { width: 11em; }
  #${O} .body { display: grid; grid-template-columns: 11.5em 1fr; height: min(32em, 64vh); }
  #${O} nav { overflow-y: auto; padding: .4em .4em .4em 0; border-right: 1px solid #0000001a; }
  #${O} nav button { display: flex; justify-content: space-between; width: 100%; margin: 0; padding: .25em .4em; border: 0; border-radius: 4px; background: none; box-shadow: none; text-align: left; white-space: nowrap; }
  #${O} nav button:hover { background: #0000000d; }
  #${O} nav button.active { background: #0000001a; color: inherit; font-weight: bold; }
  #${O} nav button small { margin-left: .4em; opacity: .6; font-weight: normal; }
  #${O} nav .section { margin-top: .5em; font-weight: bold; }
  #${O} nav div.section { padding: .25em .4em; white-space: nowrap; }
  #${O} nav .entry { padding-left: 1.2em; }
  #${O} .panel { position: relative; overflow-y: auto; padding: .4em 0 .4em .6em; }
  #${O} .panel h4 { margin: .6em 0 .3em; font-size: .85em; opacity: .7; }
  #${O} .panel h4:first-child { margin-top: 0; }
  #${O} .choices { display: grid; grid-template-columns: repeat(auto-fill, minmax(5.4em, 1fr)); gap: .4em; }
  #${O} .choices button { display: grid; place-items: center; aspect-ratio: 1; margin: 0; padding: 0; border: 1px solid transparent; border-radius: 4px; background: #0000000a; box-shadow: none; font-size: 2.6em; }
  #${O} .choices button:hover { background: #00000017; }
  #${O} .choices button.pressed { border-color: var(--dark-solid); background: #0000001f; }
  #${O} .choices button svg { width: 80%; height: 80%; overflow: visible; pointer-events: none; }
  #${O} .glyphText { display: flex; align-items: center; gap: .4em; margin-bottom: .5em; }
  #${O} .glyphText input { width: 6em; }
  #${O} .customAdd { display: flex; gap: .3em; margin-bottom: .5em; }
  #${O} .customAdd input { flex: 1; min-width: 0; }
  #${O} .customAdd button { margin: 0; white-space: nowrap; }
  #${O} .customArchive { display: flex; gap: .3em; margin-top: .5em; }
  #${O} .customArchive button { margin: 0; }
  #${O} .replacing { margin: -.2em 0 .5em; padding: .3em .5em; border-radius: 4px; background: #ffd70033; }
  #${O} .replacing a { cursor: pointer; text-decoration: underline; }
  #${O} .note { margin: .6em 0 0; font-size: .85em; opacity: .7; }
  #${O} .empty { margin: 1em 0; font-style: italic; opacity: .7; }
  #${O}.busy { cursor: progress; }
  #${O}.busy :is(.customAdd, .customArchive) { pointer-events: none; opacity: .5; }
  @media (max-width: 600px) {
    #${O} .head { flex-wrap: wrap; }
    #${O} .search { width: 100%; }
    #${O} .body { grid-template-columns: 1fr; grid-template-rows: auto 1fr; }
    #${O} nav { display: flex; gap: .2em; overflow-x: auto; padding: .4em 0; border: 0; border-bottom: 1px solid #0000001a; }
    #${O} nav button { width: auto; white-space: nowrap; }
    #${O} nav .section, #${O} nav .entry { margin: 0; padding-left: .4em; }
    #${O} .choices { grid-template-columns: repeat(auto-fill, minmax(4.4em, 1fr)); }
    #${O} .panel { padding-left: 0; }
  }
`,k=null;function A({current:e,onPick:r,live:i=!1,preferCustom:l,profile:p=`icon`}){let g=e,y=!1,b=M(),x=F(e,b,l),S=``,C=null;m(O),c(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${O}" class="dialog">
      <style>${ee}</style>
      <div class="head">
        <div class="current"></div>
        <input type="search" class="search" placeholder="${n(`Search built-in icons`)}" data-tip="${n(`Find a built-in icon or emoji by name`)}" />
      </div>
      <div class="body">
        <nav></nav>
        <div class="panel"></div>
      </div>
    </div>`);let E=c(O),D=E.querySelector(`nav`),A=E.querySelector(`.panel`),N=E.querySelector(`.search`),P=options.map,I=()=>E.isConnected&&options.map===P,L=()=>{E.querySelector(`.current`).innerHTML=R(e,C,b)},H=()=>{D.innerHTML=z(b,S?null:x)},U=()=>{if(S)A.innerHTML=te(b,S,e);else if(x===`custom`)A.innerHTML=re(e,C,p);else{let t=b.filter(({key:e})=>e===x);A.innerHTML=(x.startsWith(`glyph`)?ne(e):``)+B(t,e),V(t)}W()},W=()=>{let e=A.querySelector(`.pressed`);A.scrollTop=e?e.offsetTop-A.clientHeight/2:0},G=e=>{x=e,S=``,N.value=``,H(),U()},K=t=>{e=t;for(let e of A.querySelectorAll(`.choices [data-icon]`))e.classList.toggle(`pressed`,e.dataset.icon===t);L(),i&&r(t)},q=()=>{y=!0,i||r(e),$(E).dialog(`close`)},J=e=>{C=e,L(),e?G(`custom`):x===`custom`&&!S&&U()},Y=()=>{H(),L(),x===`custom`&&!S&&U()},X=async e=>{if(!I()||E.classList.contains(`busy`))return;let t=C,n=t??d.newId();E.classList.add(`busy`);try{let r=await e(n);if(!I()||C!==t)return;t?(w(n),d.update(n,r),C=null,Y()):(d.add({id:n,...r}),Y(),K(n))}catch(e){I()&&f(e.message,!1,`error`,6e3)}finally{E.classList.remove(`busy`)}},ie=()=>A.querySelector(`.customAdd input`)?.value??``,Z=(e,t)=>{k??=a(e),k.accept=e,k.onchange=()=>{let e=k.files?.[0];k.value=``,e&&t(e)},k.click()},ae=()=>Z(`image/*,.svg`,e=>void X(t=>v.fromFile(e,t,p))),oe=async()=>{let e=await _.pack();s(e,`${o(`Custom icons`)}.zip`,`application/zip`)},se=r=>{I()&&!E.classList.contains(`busy`)&&(E.classList.add(`busy`),w(e),_.unpack(r).then(({added:e,unchanged:r,conflicts:i,invalid:a})=>{if(!I())return;Y();let o=[`${n(`Added`)}: ${e}`,r&&n(`Already here: {{unchanged}}`,{unchanged:r}),a&&n(`Invalid, skipped: {{invalid}}`,{invalid:a})];f(t(n(`Custom icons imported`),o.filter(Boolean).join(`, `)),!1,`success`,5e3),i.length&&ce(i)}).catch(e=>I()&&f(e.message,!1,`error`,6e3)).finally(()=>E.classList.remove(`busy`)))},ce=e=>{h({title:n(`Import custom icons`),message:t(n(`Archived icons with the id of a different icon on this map: {{icons}}`,{icons:e.length}),n(`Replace the map's pictures with the archived ones?`),n(`Everything using them will change`)),confirm:n(`Replace`),cancel:n(`Keep the map's`),onConfirm:()=>{for(let{id:t}of e)w(t);_.replace(e),I()&&Y(),f(n(`Custom icons replaced: {{icons}}`,{icons:e.length}),!1,`success`,4e3)}})},Q={link:()=>void X(()=>v.fromLink(ie())),upload:ae,exportAll:()=>void oe().catch(e=>f(e.message,!1,`error`,6e3)),importArchive:()=>Z(`.zip,application/zip`,se),stopReplacing:()=>J(null),position:()=>T(e),replace:()=>J(C===e?null:e),remove:()=>{let t=e,r=u.uses(t),i=Object.values(r).reduce((e,t)=>e+t,0);h({title:n(`Remove`),message:i?`${n(`The icon is used by {{uses}}. They will show no icon.`,{uses:u.describeUses(r)})}<br>${n(`Remove it anyway?`)}`:n(`The icon is not used on the map. Remove it?`),confirm:n(`Remove`),onConfirm:()=>{C===t&&(C=null),w(t),d.remove(t),Y()}})}};E.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`nav [data-source]`)?.dataset.source;if(n)return G(n);let r=t.closest(`[data-action]`)?.dataset.action;if(r)return Q[r]?.();let i=t.closest(`.choices [data-icon]`)?.dataset.icon;if(i===void 0)return;let a=A.querySelector(`.glyphText input`);a&&(a.value=u.glyphText(i)??``),K(i)}),A.addEventListener(`dblclick`,e=>{e.target.closest(`.choices [data-icon]`)&&q()}),A.addEventListener(`input`,e=>{let t=e.target;t.closest(`.glyphText`)&&K(u.glyph(t.value))}),A.addEventListener(`keydown`,e=>{e.key===`Enter`&&e.target.closest(`.customAdd`)&&Q.link()}),N.addEventListener(`input`,()=>{S=N.value.trim().toLowerCase(),H(),U()}),L(),H(),U(),$(E).dialog({title:n(`Select icon`),width:j(),position:{my:`center`,at:`center`,of:`svg`},close:()=>{i&&!y&&e!==g&&r(g),m(O)},buttons:{[n(`Apply`)]:q,[n(`Cancel`)]:()=>$(E).dialog(`close`)}}),W()}function j(){let e=Number.parseFloat(getComputedStyle(document.body).fontSize)||10;return Math.min(52*e,(window.visualViewport?.width??window.innerWidth)-16)}function M(){return[...Object.entries(p).map(([e,t])=>({key:`glyph/${e}`,group:n(`Emoji`),label:g[e]??e,icons:Object.keys(t).map(e=>u.glyph(e))})),...l.sets().flatMap(N)]}function N({id:e,group:t}){let n=e,i=new Map;for(let e of l.files(n)){let t=e.slice(0,Math.max(0,e.lastIndexOf(`/`)));i.set(t,[...i.get(t)??[],l.symbolId(n,e)])}let a=e.slice(e.indexOf(`-`)+1);return[...i].map(([e,i])=>({key:e?`${n}/${e}`:n,group:t,label:r((e||a).replaceAll(/[-/]/g,` `).replace(/([a-z0-9])([A-Z])/g,`$1 $2`)),icons:i,set:n}))}function P(e,t){let n=l.setForId(t);return e.find(e=>e.icons.includes(t))??(n&&e.find(e=>e.set===n))}function F(e,t,n){let r=u.kind(e);return r===`custom`||!e&&n?`custom`:(P(t,e)??t.find(({set:e})=>r===`glyph`?!e:e))?.key??`custom`}function I(e){return e.label===e.group?L(e.group):`${L(e.group)} · ${e.label}`}var L=e=>g[e]??e;function R(t,i,a){let o=u.kind(t),s=o===`set`?P(a,t):void 0,c=t?o===`glyph`?n(`Emoji`):o===`custom`?n(`Carried by this map`):s?I(s):n(`Built-in`):n(`No icon selected`),l=o===`custom`&&d.get(t)?`<div class="currentActions">
          <button type="button" data-action="position" data-tip="${n(`Zoom and pan the picture in its frame`)}"><span class="icon-resize-full"></span> ${n(`Position`)}</button>
          <button type="button" data-action="replace" class="${i===t?`pressed`:``}" data-tip="${n(`Give the icon a new picture: every use follows`)}"><span class="icon-upload"></span> ${n(`Replace`)}</button>
          <button type="button" data-action="remove" data-tip="${n(`Remove`)}"><span class="icon-trash-empty"></span></button>
        </div>`:``;return`<span class="preview">${u.html(t)}</span>
    <div class="about"><span class="name">${e(t?r(u.name(t)):n(`None`))}</span><span class="from">${c}</span></div>
    ${l}`}function z(t,r){let i=(t,n,i,a=``)=>`<button type="button" data-source="${e(t)}" class="${a} ${t===r?`active`:``}">${n}${i?` <small>${i}</small>`:``}</button>`,a=``,o=t.map(e=>{if(e.label===e.group)return i(e.key,L(e.group),e.icons.length,`section`);let t=e.group===a?``:`<div class="section">${L(e.group)}</div>`;return a=e.group,t+i(e.key,e.label,e.icons.length,`entry`)});return i(`custom`,n(`Custom`),d.all.length)+o.join(``)}function B(e,t,n=!1){return e.map(e=>{let r=e.icons.map(e=>H(e,t)).join(``);return`${n?`<h4>${e.label}</h4>`:``}<div class="choices">${r}</div>`}).join(``)}function V(e){for(let t of new Set(e.map(e=>e.set)))t&&u.retry(t)}function te(e,t,r){let i=e.map(e=>({...e,label:I(e),icons:e.icons.filter(e=>u.name(e).toLowerCase().includes(t))})).filter(e=>e.icons.length);return V(i),i.length?B(i,r,!0):`<p class="empty">${n(`No built-in icon is called “{{query}}”.`,{query:t})}</p>`}function ne(t){return`<label class="glyphText">${n(`Type any short text`)}
      <input value="${e(u.glyphText(t)??``)}" placeholder="XIV" />
    </label>`}function re(e,t,r){let i=d.all.map(({id:t})=>H(t,e));return`<div class="customAdd">
      <input type="url" placeholder="${n(`Paste a link to an image`)}" data-tip="${n(`A linked image keeps the map small; it shows while its site serves it`)}" />
      <button type="button" data-action="link">${n(`Add link`)}</button>
      <button type="button" data-action="upload" data-tip="${n(r===`emblem`?`Upload an SVG file (up to 1 MB) or a PNG, JPEG or WebP image (up to 10 MB, shrunk to 1024 px)`:`Upload an SVG file (up to 200 kB) or a PNG, JPEG or WebP image (up to 2 MB, shrunk to 256 px)`)}">${n(`Upload`)}</button>
    </div>
    <div class="replacing" ${t?``:`hidden`}>${n(`Link or upload the new picture of the selected icon.`)} <a data-action="stopReplacing">${n(`Cancel`)}</a></div>
    ${i.length?`<div class="choices">${i.join(``)}</div>`:`<p class="empty">${n(`This map carries no custom icons yet.`)}</p>`}
    <div class="customArchive">
      ${i.length?`<button type="button" data-action="exportAll" data-tip="${n(`Download all custom icons as a zip archive, to import them into another map`)}">${n(`Download all`)}</button>`:``}
      <button type="button" data-action="importArchive" data-tip="${n(`Import custom icons from a downloaded zip archive. An icon whose id the map uses for another picture is replaced only on confirmation`)}">${n(`Import zip`)}</button>
    </div>
    <p class="note">${n(`Free icons`)}: <a href="https://game-icons.net" target="_blank" rel="noopener">game-icons.net</a>, <a href="https://thenounproject.com" target="_blank" rel="noopener">The Noun Project</a>, <a href="https://openmoji.org" target="_blank" rel="noopener">OpenMoji</a>, <a href="https://commons.wikimedia.org" target="_blank" rel="noopener">Wikimedia Commons</a>.</p>`}function H(t,n){let i=t===n?`pressed`:``,a=u.glyphText(t),o=a===null?u.html(t):e(a);return`<button type="button" class="${i}" data-icon="${e(t)}" data-tip="${e(r(u.name(t)))}">${o}</button>`}var U={open:A};export{U as IconPicker};