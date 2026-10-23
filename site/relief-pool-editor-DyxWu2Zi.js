import{C as e,f as t,n,r,x as i}from"./index-CuUJKJN8.js";import{z as a}from"./utils-394NS37_.js";import{k as o,t as s}from"./layers-CpGI7aJd.js";import{p as c}from"./unitUtils-B91DAWIJ.js";import{i as l}from"./tooltips-7PimaK30.js";import{t as u}from"./controllers-lOfLnkBO.js";import{i as d,r as f}from"./dialog-helpers-kMHr89OS.js";import{E as p}from"./app-C3meBrse.js";import{n as m,o as h,r as g,t as _}from"./relief-previews-9w_Tsy0M.js";var v=`reliefPoolEditor`,y=250,b=5,x=`#d8d2bb`,S=`
  #${v} { padding: .4em .6em; }
  #${v} > div { width: auto; }
  #${v} .patch { position: relative; height: 7em; margin-bottom: .3em; border-radius: 4px; overflow: hidden; }
  #${v} .patch .art, #${v} .patch svg { display: block; width: 100%; height: 100%; }
  #${v} .patch .empty { display: grid; place-items: center; height: 100%; margin: 0; }
  #${v} .patch .shuffle { position: absolute; top: .3em; right: .3em; margin: 0; padding: .1em .3em; border: 0; border-radius: 3px; background: #ffffffb0; box-shadow: none; cursor: pointer; }
  #${v} .heights { display: flex; justify-content: space-between; font-size: .85em; opacity: .7; }
  #${v} .setting { display: flex; align-items: center; gap: .5em; margin: .3em 0; }
  #${v} .setting > span:first-child { width: 3.6em; }
  #${v} .setting slider-input { flex: 1; }
  #${v} .setting input[type=range] { flex: 1; min-width: 0; }
  #${v} .setting input[type=number] { width: 4em; }
  #${v} .entries { display: grid; gap: .2em; max-height: 16em; overflow-y: auto; margin: .5em 0 .6em; }
  #${v} .entry, #${v} .head { display: grid; grid-template-columns: 2em 1fr 3.8em 3.8em 3em 1.6em; align-items: center; gap: 1em; }
  #${v} .head { opacity: .7; }
  #${v} .head span:nth-child(n+3) { text-align: center; }
  #${v} .entry .preview { display: grid; place-items: center; font-size: 1.8em; }
  #${v} .entry .preview svg { width: 1em; height: 1em; overflow: visible; }
  #${v} .entry .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  #${v} .entry .share { text-align: right; opacity: .7; }
  #${v} .entry button { margin: 0; padding: 0; border: 0; background: none; box-shadow: none; cursor: pointer; }
  #${v} .empty { margin: .4em 0; font-style: italic; opacity: .7; }
  #${v} .caption { margin: .4em 0 .3em; font-size: .85em; opacity: .7; }
  #${v} .types { display: grid; grid-template-columns: repeat(7, 1fr); gap: .3em; }
  #${v} .types button { display: grid; place-items: center; aspect-ratio: 1; margin: 0; padding: 0; border: 1px solid transparent; border-radius: 4px; background: #0000000a; box-shadow: none; font-size: 1.9em; cursor: pointer; }
  #${v} .types button:hover { background: #00000017; }
  #${v} .types button svg { width: 1em; height: 1em; overflow: visible; pointer-events: none; }
  #${v} .actions { display: flex; gap: .3em; margin: .5em 0 0; }
  #${v} .actions button { margin: 0; }
  #${v} .any { flex: 1; }
`,C=e=>structuredClone(e);function w(e){if(`rule`in e){let{rule:t}=e,n=t.biomes?.length===1?pack.biomes[t.biomes[0]]:void 0,i=Relief.getDefaultRules().find(({name:e})=>e===t.name);return{title:r(`Relief rule: {{- rule}}`,{rule:t.name}),place:r(`the cells the {{- rule}} rule claims`,{rule:t.name}),draft:{icons:C(t.icons),density:t.density,size:{...t.size}},rule:t,color:n?.color??x,write:e=>{Object.assign(t,e),Options.save()},defaults:i&&(()=>({icons:i.icons,density:i.density,size:i.size})),covers:e=>Relief.claim(e)===t,exists:()=>options.map.relief.rules.includes(t)}}let t=pack.biomes[e.biome];return{title:r(`Relief pool: {{- biome}}`,{biome:t.name}),place:r(`{{- biome}} lowland`,{biome:t.name}),draft:{icons:C(t.icons),density:t.iconsDensity},color:t.color??x,write:({icons:e,density:n})=>Object.assign(t,{icons:e,iconsDensity:n}),defaults:()=>{let t=p.getDefault()[e.biome];return{icons:t?.icons??{},density:t?.iconsDensity??0}},covers:t=>Relief.isPoolCell(t,e.biome),exists:()=>pack.biomes[e.biome]===t&&!t.removed}}function T(o){let s=w(o),{set:f}=styles.relief.options,p=s.draft,{rule:x}=s,T=1,D=p.size?`<div class="setting ruleSize" data-tip="${r(`Icon size at the rule's lowest height, growing with height up to the second value. Each entry's size scales it`)}">
        <span>${r(`Size`)}</span>
        <input type="number" data-bound="min" min="0.1" step="0.1" value="${p.size.min}" />–<input type="number" data-bound="max" min="0.1" step="0.1" value="${p.size.max}" />
      </div>`:``,O=x?`<div class="heights"><span>${c(x.height.min)}</span><span>${r(`Height`)}</span><span>${c(x.height.max)}</span></div>`:``;d(v),a(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${v}" class="dialog">
      <style>${S}</style>
      <div class="patch" style="background: color-mix(in srgb, ${t(s.color)} 55%, white)" data-tip="${r(`A sample of the relief the pool places, at the map's sizes and spacing`)}">
        <div class="art"></div>
        <button type="button" class="shuffle icon-shuffle" data-tip="${r(`Draw another sample`)}"></button>
      </div>
      ${O}
      <div class="setting density" data-tip="${r(`How packed the relief is. 0 places none`)}">
        <span>${r(`Density`)}</span>
        <slider-input min="0" max="${y}" step="1" value="${p.density}"></slider-input>
      </div>
      ${D}
      <div class="entries"></div>
      <div class="caption">${r(`Add a relief type, drawn in the style's relief set`)}</div>
      <div class="types">${Relief.types.map(({type:e,label:t})=>`<button type="button" data-entry="${e}" data-tip="${r(`Add {{icon}}`,{icon:t})}">${m(e,f)}</button>`).join(``)}</div>
      <div class="actions">
        <button type="button" class="any" data-tip="${r(`Add your own icon, an emoji or another set's art`)}">${r(`Add any icon…`)}</button>
        ${s.defaults?`<button type="button" class="restore icon-ccw" data-tip="${p.size?n(r(`Restore the default pool, density and size`),r(`Apply to keep it`)):n(r(`Restore the default pool and density`),r(`Apply to keep it`))}"></button>`:``}
      </div>
    </div>`);let k=a(v),A=k.querySelector(`.patch .art`),j=k.querySelector(`.entries`),M=k.querySelector(`slider-input`),N=()=>{let e=x&&p.size?{...x,size:p.size}:void 0;A.innerHTML=h(p.icons,p.density,e,T)||`<p class="empty">${r(`No relief: {{place}} stays bare`,{place:s.place})}</p>`},P=()=>Object.values(p.icons).reduce((e,{weight:t})=>e+t,0),F=t=>`${e(t/P()*100)}%`,I=()=>{j.innerHTML=P()?`<div class="head"><span></span><span></span><span>${r(`Weight`)}</span><span>${r(`Size`)}</span><span>${r(`Share`,{context:`portion`})}</span><span></span></div>`+Object.entries(p.icons).map(([e,{weight:n,size:i=1}])=>`<div class="entry" data-entry="${t(e)}">
              <span class="preview">${m(e,f)}</span>
              <span class="name">${t(g(e))}</span>
              <input type="number" class="weight" min="1" step="1" value="${n}" data-tip="${r(`Weight: how often the entry is picked, relative to the others`)}" />
              <input type="number" class="size" min="0.1" max="${b}" step="0.1" value="${i}" data-tip="${r(`Size: the entry's icons as a multiple of the pool's size`)}" />
              <span class="share" data-tip="${r(`Share of the pool's relief`)}">${F(n)}</span>
              <button type="button" class="icon-trash-empty" data-tip="${r(`Remove`)}"></button>
            </div>`).join(``):`<p class="empty">${r(`The pool is empty: {{place}} gets no relief`,{place:s.place})}</p>`,_(k,f),N()},L=e=>{let t=p.icons[e];p.icons[e]={...t,weight:(t?.weight??0)+1},I()},R=e=>e.closest(`.entry`)?.dataset.entry??null,z=(t,n)=>{let r=R(t);if(r===null||!p.icons[r])return!1;let a=Number(t.value);if(!n&&!(a>0))return!1;let o=p.icons[r];if(t.classList.contains(`weight`))o.weight=Math.max(1,Math.round(a)||1);else if(t.classList.contains(`size`)){let t=i(e(a||1,2),.1,b);t===1?delete o.size:o.size=t}return!0};k.querySelector(`.types`).addEventListener(`click`,e=>{let t=e.target.closest(`button[data-entry]`)?.dataset.entry;t&&L(t)}),k.querySelector(`.any`).addEventListener(`click`,()=>{u.IconPicker.open({current:``,onPick:e=>e&&L(e)})}),k.querySelector(`.shuffle`).addEventListener(`click`,()=>{T++,N()}),M.addEventListener(`input`,e=>{e.target===M&&(p.density=i(Math.round(M.valueAsNumber)||0,0,y),N())}),k.querySelector(`.ruleSize`)?.addEventListener(`change`,e=>{let t=e.target,n=t.dataset.bound,r=p.size;r[n]=Math.max(.1,Number(t.value)||r[n]),r.min>r.max&&(r[n===`min`?`max`:`min`]=r[n]),B(),N()});let B=()=>{for(let e of k.querySelectorAll(`.ruleSize input`))e.value=String(p.size[e.dataset.bound])};k.querySelector(`.restore`)?.addEventListener(`click`,()=>{let{icons:e,density:t,size:n}=s.defaults();Object.assign(p,{icons:C(e),density:t},n&&{size:{...n}}),M.value=String(t),n&&B(),I()}),j.addEventListener(`input`,e=>{let t=e.target;if(z(t,!1)){for(let e of j.querySelectorAll(`.entry`))e.querySelector(`.share`).textContent=F(p.icons[e.dataset.entry].weight);N()}}),j.addEventListener(`change`,e=>{z(e.target,!0)&&I()}),j.addEventListener(`click`,e=>{let t=R(e.target);t!==null&&e.target.classList.contains(`icon-trash-empty`)&&(delete p.icons[t],I())}),I();let V=()=>{p.density=i(Math.round(M.valueAsNumber)||0,0,y),s.write(p),o.onApply?.()},H=()=>$(k).dialog(`close`),U=()=>l(r(`{{target}} no longer exists: nothing is applied`,{target:s.title}),!1,`error`);$(k).dialog({title:s.title,width:`28em`,resizable:!1,position:{my:`center`,at:`center`,of:`svg`},close:()=>d(v),buttons:{[r(`Apply`)]:()=>{s.exists()?V():U(),H()},[r(`Apply and re-place`)]:()=>{s.exists()?E(s.place,s.covers,()=>{V(),H()}):(U(),H())},[r(`Cancel`)]:H}})}function E(e,t,i){let a=pack.relief?.length?Relief.iconsOn(t).length:0;f({title:r(`Re-place relief`),message:n(r(`Replace relief icons on {{place}} with new ones ({{icons}})?`,{place:e,icons:a}),r(`Relief elsewhere is kept`)),confirm:r(`Re-place`),onConfirm:()=>{i?.(),pack.relief?.length&&Relief.regenerate(t),s.isOn(`relief`)?o():s.show(`relief`)}})}var D={open:T};export{E as n,D as t};