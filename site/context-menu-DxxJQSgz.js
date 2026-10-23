import{C as e,f as t,r as n}from"./index-CuUJKJN8.js";import{B as r,H as i}from"./utils-394NS37_.js";import{t as a}from"./layers-CpGI7aJd.js";import{t as o}from"./controllers-lOfLnkBO.js";import{n as s}from"./map-entities-NpzkL-1b.js";import{n as c}from"./viewbox-events-DpWtTLWO.js";import{r as l}from"./connection-pvGflJND.js";import{i as u}from"./reveal-Bif-TDKz.js";var d=[`Escape`,`ArrowDown`,`ArrowUp`,`Enter`,` `],f=new class{root;events;rows=[];cell=0;point=[0,0];open(t){this.close();let n=r(`viewbox`);if(!n||!pack.cells?.p)return;let[a,o]=i(t,n),s=Pack.findCell(a,o);s!==void 0&&(this.cell=s,this.point=[e(a,2),e(o,2)],this.rows=this.collect(t.clientX,t.clientY,s),this.render(t.clientX,t.clientY),this.listen())}close(){this.root?.remove(),this.root=void 0,this.rows=[],this.events?.abort(),this.events=void 0}collect(e,t,n){let r=new Map,i=(e,t)=>{let n=s.key(e);!r.has(n)&&s.get(e)&&r.set(n,{ref:e,element:t})};for(let n of document.elementsFromPoint(e,t)){let e=s.resolveTarget(n);e&&i(e,n)}let a=r.values().next().value;for(let e of s.at(n))i(e,this.element(e));let o=({ref:e})=>s.getDisplay(e).scale,c=[...r.values()].filter(e=>e!==a).sort((e,t)=>o(t)-o(e));return a?[a,...c]:c}render(e,r){let i=document.createElement(`div`);i.id=`contextMenu`,i.setAttribute(`role`,`menu`);let a=this.rows.map(({ref:e,element:r},i)=>{let{kind:a,icon:o}=s.getDisplay(e),c=!r&&this.hidden(e),l=s.getName(e);return`<button type="button" role="menuitem" data-index="${i}" ${c?`class="dim" data-tip="${n(`The layer is hidden`)}"`:``}>
        <span class="${o}"></span><span class="name">${t(l||a)}</span>${l?`<span class="kind">${t(a)}</span>`:``}
      </button>`});l()&&a.push(`<button type="button" role="menuitem" data-action="ask">
        <span class="icon-help"></span><span class="name">${n(`What's there?`)}</span>
      </button>`),i.innerHTML=`
      <style>
        #contextMenu {
          position: fixed;
          z-index: 100000;
          box-sizing: border-box;
          min-width: 14em;
          max-width: min(24em, calc(100vw - 8px));
          max-height: calc(100vh - 8px);
          overflow-y: auto;
          padding: 0.25em;
          background: var(--bg-dialogs, rgb(250 250 250 / 97%));
          color: #30343b;
          box-shadow: 0 0.5em 1.5em #00000030;
          font: 1.1em/1.3 var(--sans-serif);
        }

        #contextMenu button {
          display: flex;
          align-items: center;
          gap: 0.6em;
          width: 100%;
          padding: 0.3em 0.6em;
          border: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          text-align: left;
          cursor: pointer;
        }

        #contextMenu button:hover,
        #contextMenu button:focus-visible {
          outline: none;
          background: color-mix(in srgb, var(--dark-solid) 12%, transparent);
        }

        #contextMenu button.dim {
          opacity: 0.55;
        }

        #contextMenu button[data-action="ask"] {
          margin-top: 0.25em;
          border-top: 1px solid color-mix(in srgb, var(--bg-main) 22%, transparent);
        }

        #contextMenu button > [class^="icon-"] {
          flex: 0 0 1.3em;
          color: var(--dark-solid);
          text-align: center;
        }

        #contextMenu .name {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        #contextMenu .kind {
          color: color-mix(in srgb, currentColor 55%, transparent);
          font-size: 0.85em;
          white-space: nowrap;
        }
      </style>
      ${a.join(``)}`,document.body.append(i);let{width:o,height:c}=i.getBoundingClientRect();i.style.left=`${Math.max(4,Math.min(e,window.innerWidth-o-4))}px`,i.style.top=`${Math.max(4,Math.min(r,window.innerHeight-c-4))}px`,this.root=i}listen(){let e=this.root;if(!e)return;this.events=new AbortController;let t=this.events.signal,n={capture:!0,signal:t};e.addEventListener(`click`,e=>this.activate(e.target),{signal:t}),e.addEventListener(`contextmenu`,e=>e.preventDefault(),{signal:t});let r=e=>d.includes(e.key);window.addEventListener(`keydown`,e=>{r(e)?((e.key===`ArrowDown`||e.key===`ArrowUp`)&&this.move(e.key===`ArrowDown`?1:-1),e.key!==`Enter`&&e.key!==` `&&e.preventDefault(),e.stopImmediatePropagation()):this.close()},n),window.addEventListener(`keyup`,e=>{r(e)&&(e.stopImmediatePropagation(),e.key===`Escape`&&this.close())},n);let i=t=>{e.contains(t.target)||this.close()};window.addEventListener(`pointerdown`,i,n),window.addEventListener(`wheel`,i,n);for(let e of[`blur`,`resize`,`map:generated`])window.addEventListener(e,()=>this.close(),{signal:t})}move(e){let t=Array.from(this.root?.querySelectorAll(`button`)??[]),n=t.indexOf(document.activeElement);t[n===-1?e>0?0:t.length-1:(n+e+t.length)%t.length]?.focus()}activate(e){let t=e.closest(`button`);if(!t)return;if(t.dataset.action===`ask`){this.ask();return}let n=this.rowOf(t);this.close(),!(!n||n.element&&c(n.element))&&(s.open(n.ref)||u(n.ref))}ask(){let[e,t]=this.point,r=`${n(`What's there?`)} cell:${this.cell}, x:${e}, y:${t}`;this.close(),o.Assistant.ask(r)}element(e){let t=this.hidden(e)?null:r(s.getElementId(e)??``);return t&&!t.closest(`#labels`)?t:void 0}hidden(e){let{layers:t}=s.getDisplay(e);return t.length>0&&!t.some(e=>a.isOn(e))}rowOf(e){let t=e?.closest(`button[data-index]`)?.dataset.index;return t===void 0?void 0:this.rows[Number(t)]}};export{f as ContextMenu};