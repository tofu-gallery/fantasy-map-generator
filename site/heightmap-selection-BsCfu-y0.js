import{n as e,r as t}from"./index-CuUJKJN8.js";import{h as n,r}from"./options-tab-DhjqEPSL.js";import{b as i,pt as a,z as o}from"./utils-394NS37_.js";import{gt as s}from"./layers-CpGI7aJd.js";import{n as c,r as l}from"./dialog-helpers-kMHr89OS.js";import{d as u}from"./options-schema-B_ig2znS.js";import{t as d}from"./pins-BgZ3A9ES.js";import{a as f}from"./generation-pipeline-DKnB7nUC.js";import{a as p}from"./id-labels-Bh86rU1j.js";var m=a(),h=T(),g=E();y(),b(),x();function _(){c(`.stable`),C(options.generation.template),h=T(),g=E(),o(`heightmapSelection`).style.setProperty(`--preview-aspect-ratio`,`${h.width}/${h.height}`),A(),$(`#heightmapSelection`).dialog({title:t(`Select Heightmap`),resizable:!1,position:{my:`center`,at:`center`,of:`svg`},close:v,buttons:{[t(`Cancel`)]:function(){$(this).dialog(`close`)},[t(`Select`)]:function(){let e=S();e&&(Options.set(t=>t.generation.template=e),r(),d.set(`template`,options.generation.template),$(this).dialog(`close`))},[t(`New Map`)]:function(){let e=S();if(!e)return;Options.set(t=>t.generation.template=e),r(),d.set(`template`,options.generation.template);let t=w(),n=g,i=h;n&&i&&regeneratePrompt({seed:t,graph:n,...i}),$(this).dialog(`close`)}}})}function v(){g=null,h=null,HeightmapGenerator.clearData()}function y(){let e=document.createElement(`style`);e.textContent=`
    div.dialog > div.heightmap-selection {
      width: 70vw;
      height: 70vh;
    }

    .heightmap-selection_container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      grid-gap: 6px;
    }

    @media (max-width: 600px) {
      .heightmap-selection_container {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        grid-gap: 4px;
      }
    }

    @media (min-width: 2000px) {
      .heightmap-selection_container {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 8px;
      }
    }

    .heightmap-selection_options {
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    .heightmap-selection_options > div:first-child {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
      justify-self: start;
      justify-items: start;
    }

    @media (max-width: 600px) {
      .heightmap-selection_options {
        grid-template-columns: 3fr 1fr;
      }

      .heightmap-selection_options > div:first-child {
        display: block;
      }
    }

    .heightmap-selection_options > div:last-child {
      justify-self: end;
    }

    .heightmap-selection article {
      padding: 4px;
      border-radius: 8px;
      transition: all 0.1s ease-in-out;
      filter: drop-shadow(1px 1px 4px #999);
    }

    .heightmap-selection article:hover {
      background-color: #ddd;
      filter: drop-shadow(1px 1px 8px #999);
      cursor: pointer;
    }

    .heightmap-selection article.selected {
      background-color: #ccc;
      outline: 1px solid var(--dark-solid);
      filter: drop-shadow(1px 1px 8px #999);
    }

    .heightmap-selection article > div {
      display: flex;
      justify-content: space-between;
      padding: 2px 1px;
    }

    .heightmap-selection article > img {
      width: 100%;
      aspect-ratio: var(--preview-aspect-ratio);
      border-radius: 8px;
      object-fit: fill;
    }

    .heightmap-selection article .regeneratePreview {
      outline: 1px solid #bbb;
      padding: 1px 3px;
      border-radius: 4px;
      transition: all 0.1s ease-in-out;
    }

    .heightmap-selection article .regeneratePreview:hover {
      outline: 1px solid #666;
    }

    .heightmap-selection article .regeneratePreview:active {
      outline: 1px solid #333;
      color: #000;
      transform: rotate(45deg);
    }
  `,document.head.appendChild(e)}function b(){let e=g,r=h;if(!e||!r)return;let a=i.names().map(e=>`<option value="${e}">${p[e]??e}</option>`).join(``),s=`<div id="heightmapSelection" class="dialog stable">
    <div class="heightmap-selection">
      <section data-tip="${t(`Select heightmap template – template provides unique, but similar-looking maps on generation`)}">
        <header><h1>${t(`Heightmap templates`)}</h1></header>
        <div class="heightmap-selection_container"></div>
      </section>
      <section data-tip="${t(`Select precreated heightmap – it will be the same for each map`)}">
        <header><h1>${t(`Precreated heightmaps`)}</h1></header>
        <div class="heightmap-selection_container"></div>
      </section>
      <section>
        <header><h1>${t(`Options`)}</h1></header>
        <div class="heightmap-selection_options">
          <div>
            <label data-tip="${t(`Rerender all preview images`)}" class="checkbox-label" id="heightmapSelectionRedrawPreview">
              <i class="icon-cw"></i>
              ${t(`Redraw preview`)}
            </label>
            <div>
              <input id="heightmapSelectionRenderOcean" class="checkbox" type="checkbox" />
              <label data-tip="${t(`Draw heights of water cells`)}" for="heightmapSelectionRenderOcean" class="checkbox-label">${t(`Render ocean heights`)}</label>
            </div>
            <div data-tip="${t(`Color scheme used for heightmap preview`)}">
              ${t(`Color scheme`)}
              <select id="heightmapSelectionColorScheme">${a}</select>
            </div>
          </div>
          <div>
            <button data-tip="${t(`Template Editor`)}" data-tool="templateEditor" id="heightmapSelectionEditTemplates">${t(`Edit Templates`)}</button>
            <button data-tip="${t(`Image Converter`)}" data-tool="imageConverter" id="heightmapSelectionImportHeightmap">${t(`Import Heightmap`)}</button>
          </div>
        </div>
      </section>
    </div>
  </div>`;o(`dialogs`).insertAdjacentHTML(`beforeend`,s);let c=document.getElementsByClassName(`heightmap-selection_container`);c[0].innerHTML=Object.keys(f).map(n=>{let i=f[n].name;return Math.random=aleaPRNG(m),`<article data-id="${n}" data-seed="${m}">
        <img src="${M(HeightmapGenerator.fromTemplate(e,n,r))}" alt="${i}" />
        <div>
          ${i}
          <span data-tip="${t(`Regenerate preview`)}" class="icon-cw regeneratePreview"></span>
        </div>
      </article>`}).join(``),c[1].innerHTML=Object.keys(n).map(e=>{let t=n[e].name;return O(e),`<article data-id="${e}" data-seed="${m}">
        <img alt="${t}" />
        <div>${t}</div>
      </article>`}).join(``)}function x(){o(`heightmapSelection`).addEventListener(`click`,e=>{let t=e.target,n=t.closest(`#heightmapSelection article`);if(!n)return;let r=n.dataset.id;r&&(t.matches(`span.icon-cw`)&&k(n,r),C(r))}),o(`heightmapSelectionRenderOcean`).addEventListener(`change`,A),o(`heightmapSelectionColorScheme`).addEventListener(`change`,A),o(`heightmapSelectionRedrawPreview`).addEventListener(`click`,A),o(`heightmapSelectionEditTemplates`).addEventListener(`click`,e=>j(e.currentTarget)),o(`heightmapSelectionImportHeightmap`).addEventListener(`click`,e=>j(e.currentTarget))}function S(){return o(`heightmapSelection`).querySelector(`.selected`)?.dataset?.id}function C(e){let t=o(`heightmapSelection`);t.querySelector(`.selected`)?.classList?.remove(`selected`),t.querySelector(`[data-id="${e}"]`)?.classList?.add(`selected`)}function w(){return o(`heightmapSelection`).querySelector(`.selected`)?.dataset?.seed}function T(){let{width:e,height:t,density:n,sampling:r,jitter:i}=options.generation.graph;return{width:e,height:t,points:u(n),sampling:r,jitter:i}}function E(){let e=h??T(),t=options.map.graph;if([`width`,`height`,`points`,`sampling`,`jitter`].some(n=>t[n]!==e[n]))return Grid.generate(m,e);let n=structuredClone(grid);return Grid.resetHeights(n),n}function D(e){let t=g,n=h;if(!t||!n)return;let r=M(HeightmapGenerator.fromTemplate(t,e,n));o(`heightmapSelection`).querySelector(`[data-id="${e}"]`)?.querySelector(`img`)?.setAttribute(`src`,r)}async function O(e){let t=g,n=h;if(!t||!n)return;let r=await HeightmapGenerator.fromPrecreated(t,e,n);if(t!==g)return;let i=M(r);o(`heightmapSelection`).querySelector(`[data-id="${e}"]`)?.querySelector(`img`)?.setAttribute(`src`,i)}function k(e,t){if(!g)return;Grid.resetHeights(g);let n=a();e.dataset.seed=n,Math.random=aleaPRNG(n),D(t)}function A(){if(!g)return;Grid.resetHeights(g);let e=o(`heightmapSelection`).querySelectorAll(`article`);for(let t of e){let{id:e,seed:n}=t.dataset;e&&n&&(Math.random=aleaPRNG(n),e in f?D(e):O(e))}}function j(n){let r=n.dataset.tool;r&&l({title:n.dataset.tip??``,message:e(t(`Opening the tool will erase the current map`),t(`Are you sure you want to proceed?`)),confirm:t(`Continue`),onConfirm:()=>window.Controllers.HeightmapEditor.open({mode:`erase`,tool:r})})}function M(e){if(!g||!h||!e?.length)return``;let t=i.get(o(`heightmapSelectionColorScheme`).value),n=o(`heightmapSelectionRenderOcean`).checked;return s({heights:e,raster:Grid.getRaster(g,h.width,h.height),scheme:t,renderOcean:n})}var N={open:_};export{N as HeightmapSelection};