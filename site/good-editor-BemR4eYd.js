import{C as e,f as t,n,r,u as i}from"./index-CuUJKJN8.js";import{B as a,X as o,z as s}from"./utils-394NS37_.js";import{q as c,t as l}from"./layers-CpGI7aJd.js";import{i as u}from"./emblems-generator-B3pPl-l-.js";import{i as d}from"./tooltips-7PimaK30.js";import{t as f}from"./controllers-lOfLnkBO.js";import{c as p,i as m}from"./dialog-helpers-kMHr89OS.js";import{n as h}from"./cultures-generator-D2mn7qkG.js";import{n as g,t as _}from"./id-labels-Bh86rU1j.js";import{t as v}from"./tags-4fjWFj3G.js";import{n as y,t as b}from"./goods-generator-BJ5zKjkt.js";function x(o,h){let _={...o?.demandCoverage||{}},x={...o?.biomeOutput||{}},O=()=>{let e=y.map(e=>[e,_[e]??0]).filter(([,e])=>e>0);return e.length?e.map(([e,t])=>`${b[e]} ${i(g[e])}: ${t}`).join(`, `):r(`None`)},k=()=>{let e=Object.entries(x).filter(([,e])=>(e??0)>0);return e.length?e.map(([e,t])=>`${pack.biomes[Number(e)].name}: ${t}`).join(`, `):r(`None`)},A={cultureType:{...o?.multipliers?.cultureType??{}},culture:{...o?.multipliers?.culture??{}},state:{...o?.multipliers?.state??{}},religion:{...o?.multipliers?.religion??{}},biome:{...o?.multipliers?.biome??{}},zone:{...o?.multipliers?.zone??{}}},j=t=>{let n=A[t]??{},i=Object.entries(n).filter(([,e])=>e!==1);return i.length?i.map(([n,r])=>`${w(t,n)} ×${e(r,2)}`).join(`, `):r(`None`)},M=(e,t)=>`
      <label data-tip="${n(r(`Production multiplier by {{dimension}}`,{dimension:t.toLowerCase()}),S)}">${t}</label>
      <div class="ge-edit-row">
        <span id="mSummary_${e}">${j(e)}</span>
        <button class="mEdit icon-pencil ge-edit" data-dim="${e}" data-tip="${r(`Edit {{dimension}} multipliers`,{dimension:t})}"></button>
      </div>`,N=o?.recipes||[],P=o?.icon||`goods-unknown`,F;I(),u.retry(Goods.iconSet.id),$(F).dialog({width:`30em`,resizable:!1,title:r(o?`Edit good`:`Add`),open:function(){o&&(this.parentElement?.querySelector(`.ui-dialog-buttonpane`))?.insertAdjacentHTML(`afterbegin`,`<div class="dontAsk" data-tip="${r(`Re-place this good and recompute production, trade and taxes. Uncheck to update the good only, without disturbing the current economy.`)}">
          <input id="goodRegenerateEconomy" class="checkbox" type="checkbox" checked />
          <label for="goodRegenerateEconomy" class="checkbox-label"><i>${r(`regenerate economy on apply`)}</i></label>
        </div>`)},close:()=>{m(`goodEditor`)},buttons:{[r(`Cancel`)]:function(){$(this).dialog(`close`)},[r(o?`Apply`:`Add`)]:()=>{let e=[],t=s(`newGoodName`).value.trim(),n=s(`newGoodTags`).value.trim(),i=v.parse(n),a=+s(`newGoodValue`).value,c=+s(`newGoodChance`).value,u=s(`newGoodUnit`).value.trim(),f=s(`newGoodColor`).value,m=s(`newGoodDistribution`).textContent?.trim()??``;if(t||e.push(r(`Name is required`)),(!Number.isFinite(a)||a<0)&&e.push(r(`Value must be a valid non-negative number`)),(!Number.isFinite(c)||c<0||c>100)&&e.push(r(`Chance must be between 0 and 100`)),m)try{let e=Goods.getMethods(),t=`{${Object.keys(e).join(`, `)}}`;Function(t,`return ${m}`)(e)}catch(t){e.push(r(`Distribution function is invalid: {{- error}}`,{error:t.message||String(t)}))}for(let t of N){for(let[n,i]of Object.entries(t)){let t=Number(n),a=Goods.get(t);a||e.push(r(`Recipe references unknown good id: {{- id}}`,{id:t}));let o=Number(i);(Number.isNaN(o)||!Number.isFinite(o)||o<=0)&&e.push(r(`Invalid recipe amount for good {{- good}}`,{good:a?.name}))}Object.keys(t).length||e.push(r(`Each recipe must have at least one ingredient`))}if(s(`newGoodError`).textContent=e.join(`. `),e.length)return;function g(){let e={};for(let[t,n]of Object.entries(A)){let r=Object.fromEntries(Object.entries(n??{}).filter(([,e])=>e!==void 0&&e!==1));Object.keys(r).length&&(e[t]=r)}return Object.keys(e).length?e:void 0}if(o){let e=o.i;Goods.rename(e,t),Goods.setTags(e,i),Goods.setIcon(e,P),Goods.recolor(e,f),Goods.setPrice(e,a),Goods.setUnit(e,u),Goods.setProduction(e,{chance:c,demandCoverage:_,multipliers:g()??null,biomeOutput:Object.keys(x).length?x:null,recipes:N.length?N:null}),o.distribution=m||void 0,s(`goodRegenerateEconomy`).checked?(Goods.regeneratePlacement(o.i),Production.regenerateEconomy(),l.draw(`markets`,`goods`),l.draw(`trade`),p()):Goods.sync()}else pack.goods.push({i:(()=>{let e=pack.goods?.at(-1)?.i??1;for(;Goods.get(e);)e++;return e})(),name:t,tags:i,icon:P,color:f,value:a,chance:c,unit:u,demandCoverage:_,multipliers:g(),distribution:m||void 0,biomeOutput:Object.keys(x).length?x:void 0,recipes:N.length?N:void 0}),Goods.sync();d(r(o?`Good is updated`:`Good is added`),!1,`success`,5e3),h?.(),$(F).dialog(`close`)}}});function I(){m(`goodEditor`),s(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="goodEditor" class="dialog">
    <style>
      .ge                 { display:flex; width: auto !important; flex-direction:column; gap:9px; max-height:72vh; overflow-y:auto; padding-right:2px; }
      .ge-section-title   { display:flex; align-items:center; justify-content:space-between; font-weight:bold; text-transform:uppercase; font-size:.8em; letter-spacing:.06em; margin-bottom:7px; padding-bottom:4px; border-bottom:1px solid #666; }
      .ge-grid            { display:grid; grid-template-columns:9em minmax(0, 1fr); gap:.2em; align-items:center; }
      .ge-grid--top       { align-items:start; }
      .ge-grid > *        { min-width:0; }
      .ge-grid > label    { color:#555; }
      .ge-field           { width:100%; }
      input.ge-num        { width:6em; }
      .ge-inline          { display:flex; align-items:center; gap:.4em; }
      .ge-icon-select     { flex:1; min-width:0; display:flex; align-items:center; gap:.4em; margin:0; }
      .ge-icon-preview    { flex-shrink:0; }
      .ge-color           { width:2.4em; height:1.4em; padding:0; border:none; flex-shrink:0; }
      .ge-edit-row        { display:flex; align-items:flex-start; justify-content:space-between; gap:6px; }
      .ge-edit-row > span { flex:1; min-width:0; }
      .ge-edit            { flex-shrink:0; }
      .ge-dist            { flex:1; min-width:0; color:#555; font-size:.9em; font-family:var(--monospace); word-break:break-all; }
      .ge-note            { color:#777; font-style:italic; font-size:.9em; }
      .ge-error           { color:#b20000; min-height:1.2em; }
      .ge-recipe-list     { display:flex; flex-direction:column; gap:.45em; }
      .ge-recipe          { border:1px solid #ccc; border-radius:3px; }
      .ge-recipe-head     { display:flex; align-items:center; justify-content:space-between; padding:.2em .3em; }
      .ge-recipe-actions  { display:flex; gap:.3em; }
      .ge-recipe-ings     { display:flex; flex-direction:column; gap:.2em; padding:.3em .4em; }
      .ge-recipe-ing      { display:grid; grid-template-columns:1fr 5em 1.5em; gap:.25em; align-items:center; }
    </style>

    <div class="ge">
      <div>
        <div class="ge-section-title">${r(`General`)}</div>
        <div class="ge-grid">
          <label for="newGoodName">${r(`Name`)}*</label>
          <input id="newGoodName" class="ge-field" value="${o?.name||``}" />

          <label for="newGoodTags">${r(`Tags`)}</label>
          <input id="newGoodTags" class="ge-field" value="${v.format(o?.tags)}" placeholder="${r(`comma separated`)}" />

          <label for="newGoodValue">${r(`Base Price`)}*</label>
          <span class="ge-inline"><input id="newGoodValue" class="ge-num" type="number" min="0" step="1" value="${o?.value??1}" /> 🟡</span>

          <label for="newGoodChance">${r(`Chance`)}</label>
          <input id="newGoodChance" class="ge-num" type="number" min="0" max="100" step="0.1" value="${o?.chance??1}" />

          <label for="newGoodUnit">${r(`Unit`)}</label>
          <input id="newGoodUnit" class="ge-field" placeholder="${r(`e.g. wagon, barrel`)}" value="${o?.unit||``}" />

          <label for="newGoodIcon">${r(`Icon`)}*</label>
          <div class="ge-inline">
            <button id="newGoodIcon" type="button" class="ge-icon-select" data-tip="${r(`Select the good's icon`)}">
              <svg class="ge-icon-preview" width="2em" height="2em">
                <circle id="newGoodIconCircle" cx="50%" cy="50%" r="42%" fill="${o?.color||`#ff5959`}" stroke="${Goods.getStroke(o?.color||`#ff5959`)}"/>
                <use id="newGoodIconPreview" href="${t(u.href(P))}" x="10%" y="10%" width="80%" height="80%"${c()}/>
              </svg>
              <span id="newGoodIconName">${t(u.name(P))}</span>
            </button>
            <input id="newGoodColor" class="ge-color" type="color" data-tip="${r(`Set stroke color`)}" value="${o?.color||`#ff5959`}" />
          </div>

          <label data-tip="${r(`How much of each demand category this good satisfies. Click the pencil icon to edit.`)}">${r(`Demand Coverage`)}</label>
          <div class="ge-edit-row">
            <span id="demandCoverageSummary" >${O()}</span>
            <button class="dcEdit icon-pencil ge-edit" data-tip="${r(`Edit demand coverage`)}"></button>
          </div>
        </div>
      </div>

      <div>
        <div class="ge-section-title">${r(`Raw Production`)}</div>
        <div class="ge-grid ge-grid--top">
          <label data-tip="${r(`For raw resources: sets the baseline production per biome`)}">${r(`Rural production`)}</label>
          <div class="ge-edit-row">
            <span id="biomeProductionSummary">${k()}</span>
            <button class="bpEdit icon-pencil ge-edit" data-tip="${r(`Edit biome baseline production`)}"></button>
          </div>

          <label data-tip="${r(`For raw resources: controls where and how this good is produced directly from the environment (e.g. biome, elevation, temperature)`)}">${r(`Bonus distribution`)}</label>
          <div class="ge-edit-row">
            <div id="newGoodDistribution" class="ge-dist">${o?.distribution||``}</div>
            <button id="newGoodDistributionEditor" class="icon-pencil ge-edit" data-tip="${r(`Open the Distribution visual editor`)}"></button>
          </div>
        </div>
        <div id="newGoodRawNote" class="ge-note"></div>
      </div>

      <div>
        <div class="ge-section-title">
          <span data-tip="${r(`For manufactured goods: recipes define which other goods are required to produce this good`)}">${r(`Recipes`)}</span>
          <button id="newGoodAddRecipe" class="icon-plus" data-tip="${r(`Add`)}"></button>
        </div>
        <div id="newGoodRecipeList" class="ge-recipe-list"></div>
        <div id="newGoodRecipeNote" class="ge-note"></div>
      </div>

      <div>
        <div class="ge-section-title">
          <span data-tip="${n(r(`Per-dimension production multipliers`),S)}">${r(`Multipliers`)}</span>
        </div>
        <div class="ge-grid ge-grid--top">
          ${M(`cultureType`,C.cultureType)}
          ${M(`culture`,C.culture)}
          ${M(`state`,C.state)}
          ${M(`religion`,C.religion)}
          ${M(`biome`,C.biome)}
          ${M(`zone`,C.zone)}
        </div>
      </div>

      <div id="newGoodError" class="ge-error"></div>
    </div>
  </div>`),F=s(`goodEditor`);let e=s(`newGoodRecipeList`),i=pack.goods[0]?.i??0,l=[...pack.goods].sort((e,t)=>e.name.localeCompare(t.name)),d=()=>!Object.values(x).some(e=>(e??0)>0)&&!a(`newGoodDistribution`)?.textContent?.trim(),p=()=>{let e=d(),t=N.length===0,n=s(`newGoodRecipeNote`);n.textContent=r(`This good is raw-only: gathered from the environment.`),n.style.display=t&&!e?``:`none`;let i=s(`newGoodRawNote`);i.textContent=r(`This good is manufactured-only: made from recipes in burgs.`),i.style.display=e&&!t?``:`none`},h=()=>{e.innerHTML=N.map((e,t)=>`
          <div class="recipeOption ge-recipe" data-recipe-index="${t}" >
            <div class="ge-recipe-head">
              <span>${r(`Recipe {{number}}`,{number:t+1})}</span>
              <div class="ge-recipe-actions">
                <span class="recipeAddIngredient icon-plus pointer" data-recipe-index="${t}" data-tip="${r(`Add`)}"></span>
                <span class="recipeRemoveOption icon-trash-empty pointer" data-recipe-index="${t}" data-tip="${r(`Remove`)}"></span>
              </div>
            </div>
            <div class="recipeIngredients ge-recipe-ings">
              ${Object.entries(e).map(([e,n],i)=>`
                    <div class="ge-recipe-ing" data-recipe-index="${t}" data-ingredient-index="${i}">
                      <select class="recipeGoodSelect" data-recipe-index="${t}" data-ingredient-index="${i}">${l.map(t=>`<option value="${t.i}" ${t.i===Number(e)?`selected`:``}>${t.name}</option>`).join(``)}</select>
                      <input class="recipeAmountInput" data-recipe-index="${t}" data-ingredient-index="${i}" type="number" min="1" step="1" value="${n}" />
                      <span class="recipeRemoveIngredient icon-trash-empty pointer" data-recipe-index="${t}" data-ingredient-index="${i}" data-tip="${r(`Remove`)}" />
                    </div>`).join(``)}
            </div>
          </div>
        `).join(``),e.querySelectorAll(`.recipeGoodSelect`).forEach(e=>{e.onchange=()=>{let t=+e.value,n=+e.dataset.recipeIndex,r=+e.dataset.ingredientIndex,i=N[n],a=i[r]||0;delete i[r],i[t]=a,h()}}),e.querySelectorAll(`.recipeAmountInput`).forEach(e=>{e.onchange=()=>{let t=+e.dataset.recipeIndex,n=+e.dataset.ingredientIndex,r=N[t],i=Number(Object.keys(r)[n]);r[i]=+e.value}}),e.querySelectorAll(`.recipeAddIngredient`).forEach(e=>{e.onclick=t=>{t.preventDefault();let n=+e.dataset.recipeIndex,r=N[n],a=Object.keys(r).length?Math.max(...Object.keys(r).map(e=>+e))+1:i;r[a]=1,h()}}),e.querySelectorAll(`.recipeRemoveIngredient`).forEach(e=>{e.onclick=t=>{t.preventDefault();let n=+e.dataset.recipeIndex,r=+e.dataset.ingredientIndex,i=N[n];if(Object.keys(i).length>1){let e=Number(Object.keys(i)[r]);delete i[e],h()}}}),e.querySelectorAll(`.recipeRemoveOption`).forEach(e=>{e.onclick=t=>{t.preventDefault();let n=+e.dataset.recipeIndex;N.splice(n,1),h()}}),p()};h(),F.querySelectorAll(`.mEdit`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.dim;T(t,A[t]??{},e=>{A[t]=e;let n=a(`mSummary_${t}`);n&&(n.textContent=j(t))})})}),F.querySelector(`.dcEdit`).addEventListener(`click`,()=>{E({..._},e=>{Object.keys(_).forEach(e=>void delete _[e]),Object.assign(_,e);let t=a(`demandCoverageSummary`);t&&(t.textContent=O())})}),F.querySelector(`.bpEdit`).addEventListener(`click`,()=>{D({...x},e=>{Object.keys(x).forEach(e=>void delete x[+e]),Object.assign(x,e);let t=a(`biomeProductionSummary`);t&&(t.textContent=k()),p()})}),s(`newGoodAddRecipe`).addEventListener(`click`,e=>{e.preventDefault(),N.push({[i]:1}),h()}),s(`newGoodDistributionEditor`).addEventListener(`click`,()=>{let e=s(`newGoodDistribution`);f.DistributionEditor.open(t=>{e.textContent=t,p()},e.textContent?.trim()??``)});let g=e=>{P=e,s(`newGoodIconPreview`).setAttribute(`href`,u.href(e)),s(`newGoodIconName`).textContent=u.name(e)};s(`newGoodIcon`).onclick=()=>f.IconPicker.open({current:P,onPick:g});let y=s(`newGoodColor`);y.oninput=()=>{let e=s(`newGoodIconCircle`);e.setAttribute(`fill`,y.value),e.setAttribute(`stroke`,Goods.getStroke(y.value))}}}var S=`1 = ${r(`no effect`)}, 0 = ${r(`fully suppressed`)}`,C={cultureType:r(`Culture type`),culture:r(`Culture`),state:r(`State`),religion:r(`Religion`),biome:r(`Biome`),zone:r(`Zone`)};function w(e,t){return e===`cultureType`?_[t]??t:e===`culture`?pack.cultures[+t]?.name??`Culture ${t}`:e===`state`?pack.states[+t]?.name??`State ${t}`:e===`religion`?pack.religions[+t]?.name??`Religion ${t}`:e===`zone`?pack.zones.find(e=>e.i===+t)?.name??`Zone ${t}`:pack.biomes[+t]?.name??`Biome ${t}`}function T(e,t,n){let i,a;switch(e){case`cultureType`:i=h.map(e=>({id:e,name:_[e]??e})),a=C.cultureType;break;case`culture`:i=pack.cultures.filter(e=>e.i&&!e.removed).map(e=>({id:String(e.i),name:e.name,color:e.color})),a=C.culture;break;case`state`:i=pack.states.filter(e=>e.i&&!e.removed).map(e=>({id:String(e.i),name:e.fullName||e.name,color:e.color})),a=C.state;break;case`religion`:i=pack.religions.filter(e=>e.i&&!e.removed).map(e=>({id:String(e.i),name:e.name,color:e.color})),a=C.religion;break;case`biome`:i=pack.biomes.filter(e=>!e.removed).map(({i:e,name:t,color:n})=>({id:String(e),name:t,color:n})),a=C.biome;break;case`zone`:i=pack.zones.map(e=>({id:String(e.i),name:e.name,color:e.color})),a=C.zone}let s=i.map(e=>{let n=t[e.id]??1;return`${`<fill-box fill="${e.color||o()}" size="1em" disabled data-tip="${e.name}"></fill-box>`}<span>${e.name}</span><input type="number" class="mPopupInput" data-id="${e.id}" min="0" step="0.1" style="width:5em;" value="${n}" />`}),c=document.createElement(`div`);document.body.appendChild(c),c.innerHTML=`<div style="max-height:320px; overflow-y:auto; padding:.2em;">${s.length?`<div style="display:grid; grid-template-columns:auto 1fr 5em; gap:.3em .5em; align-items:center;">${s.join(``)}</div>`:`<div style="color:#777; font-style:italic;">${r(`No options available`)}</div>`}</div>`,$(c).dialog({title:r(`{{- dimension}} multipliers`,{dimension:a}),width:`22em`,resizable:!1,buttons:{[r(`Cancel`)]:function(){$(this).dialog(`close`)},[r(`Apply`)]:function(){let e=Array.from(c.querySelectorAll(`.mPopupInput`)),t={};for(let n of e){let e=n.dataset.id,r=Number(n.value);Number.isFinite(r)&&r>=0&&r!==1&&(t[e]=r)}n(t),$(this).dialog(`close`)}},close:()=>{$(c).dialog(`destroy`),c.remove()}})}function E(e,t){let n=y.map(t=>{let n=e[t]??0;return`<span>${b[t]} ${i(g[t])}</span><input type="number" class="dcPopupInput" data-cat="${t}" min="0" step="0.05" style="width:5em;" value="${n}" />`}).join(``),a=document.createElement(`div`);document.body.appendChild(a),a.innerHTML=`<div style="display:grid;grid-template-columns:1fr 5em;gap:.3em .5em;align-items:center;padding:.2em;">${n}</div>`,$(a).dialog({title:r(`Demand Coverage`),width:`18em`,resizable:!1,buttons:{[r(`Cancel`)]:function(){$(this).dialog(`close`)},[r(`Apply`)]:function(){let e={};a.querySelectorAll(`.dcPopupInput`).forEach(t=>{let n=t.dataset.cat,r=Number(t.value);Number.isFinite(r)&&r>0&&(e[n]=r)}),t(e),$(this).dialog(`close`)}},close:()=>{$(a).dialog(`destroy`),a.remove()}})}function D(e,t){let n=pack.biomes.filter(e=>!e.removed).map(({i:t,name:n})=>`<span>${n}</span><input type="number" class="bpPopupInput" data-id="${t}" min="0" step="0.01" style="width:5em;" value="${e[t]??0}" />`).join(``),i=document.createElement(`div`);document.body.appendChild(i),i.innerHTML=`<div style="max-height:320px;overflow-y:auto;padding:.2em;"><div style="display:grid;grid-template-columns:1fr 5em;gap:.3em .5em;align-items:center;">${n}</div></div>`,$(i).dialog({title:r(`Biome Baseline Production`),width:`22em`,resizable:!1,buttons:{[r(`Cancel`)]:function(){$(this).dialog(`close`)},[r(`Apply`)]:function(){let e={};i.querySelectorAll(`.bpPopupInput`).forEach(t=>{let n=Number(t.dataset.id),r=Number(t.value);Number.isFinite(r)&&r>0&&(e[n]=r)}),t(e),$(this).dialog(`close`)}},close:()=>{$(i).dialog(`destroy`),i.remove()}})}var O={open:x};export{O as GoodEditor};