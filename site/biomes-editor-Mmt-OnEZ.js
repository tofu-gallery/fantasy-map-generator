import{C as e,n as t,r as n}from"./index-CuUJKJN8.js";import{B as r,M as i,X as a,dn as o,yt as s,z as c,zt as l}from"./utils-394NS37_.js";import{ft as u,mt as d,t as f,ut as p}from"./layers-CpGI7aJd.js";import{t as m}from"./sum-BpJJqxFM.js";import{t as h}from"./sin-DYm9hqTl.js";import{t as g}from"./csv-BZ59UuP0.js";import{t as _}from"./heightUtils-BfaaFPbS.js";import{S as v,a as y,o as b}from"./unitUtils-B91DAWIJ.js";import{i as x}from"./tooltips-7PimaK30.js";import{t as S}from"./controllers-lOfLnkBO.js";import{i as C,l as w,n as ee,s as te}from"./dialog-helpers-kMHr89OS.js";import{t as ne}from"./population-generator-C23gWLdN.js";import{i as T,r as E}from"./app-C3meBrse.js";import{t as D}from"./highlighting-CMuZl7i6.js";import{a as O,i as k,n as A,r as j}from"./table-CEa9eCSl.js";import{i as M,t as re}from"./relief-previews-9w_Tsy0M.js";import{t as ie}from"./relief-pool-editor-DyxWu2Zi.js";var N=`biomesEditor`,P=[`Id`,`Biome`,`Color`,`Habitability`,`Cells`,`Area`,`Population`],F=`Biomes`,I={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},L=[],R=[{key:`name`,label:n(`Biome`),width:`15em`,permanent:!0,sortBy:e=>e.name,sortType:`alpha`},{key:`habitability`,label:n(`Habitability`),width:`6.5em`,sortBy:e=>e.habitability},{key:`relief`,label:n(`Relief`),width:`6.5em`,sortBy:e=>e.iconsDensity},{key:`cells`,label:n(`Cells`),width:`5em`,sortBy:e=>L[e.i]?.cells??0,defaultSort:`desc`},{key:`area`,label:n(`Area`),width:`7em`,mobileHidden:!0,sortBy:e=>L[e.i]?.area??0},{key:`population`,label:n(`Population`),width:`6.2em`,mobileHidden:!0,sortBy:e=>{let t=L[e.i];return t?t.rural+t.urban:0}},{key:`note`,width:`1.1em`},{key:`wiki`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}],z=j({getData:()=>T(N,pack.biomes.filter(e=>e.i&&!e.removed),R),onUpdate:e=>G(e,L)});function B(){customization||(ee(`#${N}, .stable`),f.show(`biomes`),f.hide(`states`,`cultures`),f.hide(`religions`,`provinces`),V(),L=W(),z.reset(),$(`#${N}`).dialog({title:n(`Biomes Editor`),resizable:!1,close:ge,position:I}))}function V(){C(N);let e=`<div id="${N}" class="dialog stable editorDialog">
      ${k({dialogId:N,columns:R})}
      <div id="biomesBody" class="table" data-type="absolute"></div>
      <div id="biomesFooter" class="totalLine">
        <div data-tip="${n(`Number of land biomes`)}" style="margin-left: 12px">
          ${n(`Biomes`)}:&nbsp;<span id="biomesFooterBiomes">0</span>
        </div>
        <div data-col="cells" data-tip="${n(`Number of land cells`)}" style="margin-left: 12px">
          ${n(`Cells`)}:&nbsp;<span id="biomesFooterCells">0</span>
        </div>
        <div data-col="area" data-tip="${n(`Total land area`)}" style="margin-left: 12px">
          ${n(`Land area`)}:&nbsp;<span id="biomesFooterArea">0</span>
        </div>
        <div data-col="population" data-tip="${n(`Total population`)}" style="margin-left: 12px">
          ${n(`Population`)}:&nbsp;<span id="biomesFooterPopulation">0</span>
        </div>
      </div>
      <div id="biomesBottom">
        <button id="biomesEditorRefresh" data-tip="${n(`Refresh`)}" class="icon-cw"></button>
        <button id="biomesEditStyle" data-tip="${n(`Edit style in Style Editor`)}" class="icon-adjust"></button>
        <button id="biomesLegend" data-tip="${n(`Toggle Legend box`)}" class="icon-list-bullet"></button>
        <button
          id="biomesPercentage"
          data-tip="${n(`Toggle percentage / absolute values views`)}"
          class="icon-percent"
        ></button>
        <button
          id="biomesManually"
          data-tip="${n(`Manually re-assign biomes to not follow the default moisture/temperature pattern`)}"
          class="icon-brush"
        ></button>
        <button id="biomesReliefRules" data-tip="${n(`Edit the relief rules: hills, mountains and other relief placed by elevation`)}" class="icon-mountain"></button>
        <button id="biomesAdd" data-tip="${n(`Add`)}" class="icon-plus"></button>
        <button
          id="biomesRestore"
          data-tip="${n(`Restore the defaults and re-define biomes based on current moisture and temperature`)}"
          class="icon-history"
        ></button>
        <button
          id="biomesExport"
          data-tip="${n(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
        <button id="biomesImport" data-tip="${n(`Upload data from a CSV file`)}" class="icon-upload"></button>
      </div>
    </div>`;c(`dialogs`).insertAdjacentHTML(`beforeend`,e),A({dialogId:N,columns:R,onUpdate:()=>w(N,{width:`fit-content`,position:I})}),c(`biomesEditorRefresh`).addEventListener(`click`,H),c(`biomesEditStyle`).addEventListener(`click`,()=>void S.StyleEditor.open(`biomes`)),c(`biomesLegend`).addEventListener(`click`,Y),c(`biomesPercentage`).addEventListener(`click`,X),c(`biomesManually`).addEventListener(`click`,pe),c(`biomesRestore`).addEventListener(`click`,he),c(`biomesReliefRules`).addEventListener(`click`,()=>void S.ReliefRulesEditor.open()),c(`biomesAdd`).addEventListener(`click`,de),c(`biomesExport`).addEventListener(`click`,Z),c(`biomesImport`).addEventListener(`click`,()=>g.pick(_e)),E(N,z.reset),D(N,({cellId:e})=>e&&pack.cells.biome[e]),c(`biomesBody`).addEventListener(`click`,e=>{let t=e.target,n=t.classList;t.tagName===`FILL-BOX`?oe(t):n.contains(`icon-book`)?le(t):n.contains(`icon-info-circled`)?ue(t):n.contains(`icon-trash-empty`)?fe(t):t.closest(`.biomeRelief`)&&q(t)}),c(`biomesBody`).addEventListener(`change`,e=>{let t=e.target,n=t.classList;n.contains(`biomeName`)?se(t):n.contains(`biomeHabitability`)&&ce(t)})}function H(){L=W(),z.refresh()}function U(e=pack){let{cells:t}=e,n=e.biomes.map(()=>({cells:0,area:0,rural:0,urban:0}));for(let r of t.i){if(t.h[r]<20)continue;let i=n[t.biome[r]];i.cells++,i.area+=t.area[r],i.rural+=t.pop[r];let a=t.burg[r]?e.burgs[t.burg[r]]:null;a&&(i.urban+=a.population??0)}return n}function W(){return U(pack)}function G(r,i){let a=` ${b()}`,o=``,s=0,l=0;for(let s of r.rows){let{i:r,name:c,color:l,habitability:u}=s,{cells:d,area:f,rural:p,urban:m}=i[r],h=y(f),g=p*options.map.units.population.scale,_=m*options.map.units.population.scale*options.map.units.population.urbanization.rate,b=e(g+_),x=t(`${n(`Total population`)}: ${v(b)}`,`${n(`Rural population`)}: ${v(g)}`,`${n(`Urban population`)}: ${v(_)}`);o+=`
      <div
        class="states biomes"
        data-id="${r}"
        data-name="${c}"
        data-habitability="${u}"
        data-cells=${d}
        data-area=${h}
        data-population=${b}
        data-color=${l}
      >
        <div data-col="name">
          <fill-box fill="${l}"></fill-box>
          <input data-tip="${t(n(`Name`),n(`Click and type to change`))}" class="biomeName" value="${c}" autocorrect="off" spellcheck="false" />
        </div>
        <div data-col="habitability" class="hide">
          <span data-tip="${n(`Biome habitability percent`)}">%</span>
          <input data-tip="${t(n(`Biome habitability percent`),n(`Click and type to change`))}" type="number" min="0" max="9999" class="biomeHabitability" value=${u} />
        </div>
        <div data-col="relief" class="hide">${K(s)}</div>
        <div data-col="cells" class="hide"><span data-tip="${n(`Number of cells`)}" class="icon-check-empty"></span><span data-tip="${n(`Number of cells`)}" class="biomeCells">${d}</span></div>
        <div data-col="area" class="hide"><span data-tip="${n(`Biome area`)}" class="icon-map-o" style="padding-right: 2px"></span><span data-tip="${n(`Biome area`)}" class="biomeArea">${v(h)+a}</span></div>
        <div data-col="population" class="hide"><span data-tip="${x}" class="icon-male"></span><span data-tip="${x}" class="biomePopulation">${v(b)}</span></div>
        ${te(n(`Edit free text notes (legend)`))}
        <span data-col="wiki" data-tip="${n(`Open Wikipedia article about the biome`)}" class="icon-info-circled pointer"></span>
        <span data-col="remove" ${r>12&&!d?`data-tip="${n(`Remove`)}" class="icon-trash-empty"`:``}></span>
      </div>
    `}let u=c(`biomesBody`);u.innerHTML=o,re(u,styles.relief.options.set);for(let t of r.all){let n=i[t.i];s+=y(n.area),l+=e(n.rural*options.map.units.population.scale+n.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate)}let d=y(m(pack.cells.area));c(`biomesFooterBiomes`).innerHTML=String(r.all.length),c(`biomesFooterCells`).innerHTML=String(pack.cells.h.filter(e=>e>=20).length);let f=c(`biomesFooterArea`);f.innerHTML=v(s)+a,c(`biomesFooterPopulation`).innerHTML=v(l),f.dataset.area=String(s),f.dataset.mapArea=String(d),c(`biomesFooterPopulation`).dataset.population=String(l),O(c(`biomesFooter`),r,z.goto),u.querySelectorAll(`div.biomes`).forEach(e=>{e.addEventListener(`mouseenter`,J)}),u.querySelectorAll(`div.biomes`).forEach(e=>{e.addEventListener(`mouseleave`,ae)}),u.dataset.type===`percentage`&&(u.dataset.type=`absolute`,X()),w(N,{width:`fit-content`,position:I})}function K({icons:e,iconsDensity:t}){return M(e,t,`biomeRelief`)}function q(e){let t=Number(e.closest(`.biomes`).dataset.id);ie.open({biome:t,onApply:H})}function J(e){if(customization===6)return;let t=+e.target.dataset.id,n=l().duration(2e3).ease(h);o(`#biomes > #biome${t}`).raise().transition(n).attr(`stroke-width`,2).attr(`stroke`,`#cd4c11`)}function ae(e){if(customization===6)return;let t=+e.target.dataset.id,n=pack.biomes[t].color;o(`#biomes > #biome${t}`).transition().attr(`stroke-width`,.7).attr(`stroke`,n)}function oe(e){let t=e.getAttribute(`fill`),n=+e.closest(`.biomes`).dataset.id;S.ColorPicker.open(t,t=>{e.fill=t,pack.biomes[n].color=t,f.draw(`biomes`)})}function se(e){let t=e.closest(`.biomes`),n=+t.dataset.id;e.value.trim()?(Biomes.rename(n,e.value),t.dataset.name=pack.biomes[n].name):e.value=pack.biomes[n].name}function ce(e){let t=e.closest(`.biomes`),r=+t.dataset.id;Number.isNaN(+e.value)||+e.value<0||+e.value>9999?(e.value=String(pack.biomes[r].habitability),x(n(`Please provide a valid number in range 0-9999`),!1,`error`)):(Biomes.setHabitability(r,+e.value),t.dataset.habitability=e.value,Q(),H())}function le(e){let t=+(e.closest(`.biomes`)?.dataset.id||0);S.NotesEditor.open({type:`biome`,id:t})}function ue(e){let t=e.closest(`.biomes`)?.dataset.name;if(t===`Custom`||!t){x(n(`Please fill in the biome name`),!1,`error`);return}let r={"Hot desert":`Desert_climate#Hot_desert_climates`,"Cold desert":`Desert_climate#Cold_desert_climates`,Savanna:`Tropical_and_subtropical_grasslands,_savannas,_and_shrublands`,Grassland:`Temperate_grasslands,_savannas,_and_shrublands`,"Tropical seasonal forest":`Seasonal_tropical_forest`,"Temperate deciduous forest":`Temperate_deciduous_forest`,"Tropical rainforest":`Tropical_rainforest`,"Temperate rainforest":`Temperate_rainforest`,Taiga:`Taiga`,Tundra:`Tundra`,Glacier:`Glacier`,Wetland:`Wetland`},a=`https://en.wikipedia.org/w/index.php?search=${t}`,o=r[t]?`https://en.wikipedia.org/wiki/`+r[t]:a;i(o)}function Y(){if(d(F)){p(F);return}let e=W(),t=pack.biomes.filter(({i:t})=>e[t].cells).sort((t,n)=>e[n.i].area-e[t.i].area).map(({i:e,color:t,name:n})=>[e,t,n]);if(!t.length)return void x(n(`No biomes to show`),!1,`error`);u(F,t)}function X(){let t=c(`biomesBody`);if(t.dataset.type===`absolute`){t.dataset.type=`percentage`;let n=+c(`biomesFooterCells`).innerHTML,r=c(`biomesFooterArea`),i=+r.dataset.area,a=+r.dataset.mapArea,o=+c(`biomesFooterPopulation`).dataset.population;t.querySelectorAll(`:scope > div`).forEach(t=>{t.querySelector(`.biomeCells`).innerHTML=`${e(+t.dataset.cells/n*100)}%`,t.querySelector(`.biomeArea`).innerHTML=`${e(+t.dataset.area/i*100)}%`,t.querySelector(`.biomePopulation`).innerHTML=`${e(+t.dataset.population/o*100)}%`}),r.innerHTML=`${e(i/a*100)}%`}else t.dataset.type=`absolute`,z.refresh()}function de(){try{Biomes.add(`Custom`,a(),50)}catch{x(n(`Maximum number of biomes reached (255), data cleansing is required`),!1,`error`);return}L=W(),z.refresh()}function fe(e){let t=+e.closest(`.biomes`).dataset.id;try{Biomes.remove(t)}catch{return}L=W(),z.refresh()}function Z(){let t=options.map.units.area.unit===`square`?`${options.map.units.distance.unit}2`:options.map.units.area.unit,{scale:n,urbanization:r}=options.map.units.population,i=W(),a=pack.biomes.filter(e=>e.i&&!e.removed).map(t=>{let{cells:a,area:o,rural:s,urban:c}=i[t.i],l=e(s*n+c*n*r.rate);return[t.i,t.name,t.color,`${t.habitability}%`,a,y(o),l]});g.download(`Biomes`,P.map(e=>e===`Area`?`Area ${t}`:e),a)}function pe(){f.show(`biomes`),S.PaintEditor.open({title:n(`Paint Biomes`),parentDialogId:N,onClose:B,items:pack.biomes.filter(e=>e.i&&!e.removed).map(e=>({id:e.i,name:e.name,color:e.color})),getValue:e=>pack.cells.biome[e],filterCell:e=>_(e,pack),onApply:me})}function me(e){for(let[t,n]of s(e))Biomes.setCells(t,n);e.size&&(f.draw(`biomes`),r(N)&&H())}function he(){Biomes.restore(),f.draw(`biomes`),Q(),H()}function ge(){$(`#biomesEditor`).dialog(`destroy`),c(`biomesEditor`).remove()}function Q(){ne.regenerate(),f.draw(`population`,`goods`)}async function _e(e){let t=e=>e&&pack.biomes[e]&&!pack.biomes[e].removed?pack.biomes[e]:void 0;await S.CsvUpload.update(e,P,{find:t,units:[`Area`],text:[`Biome`]},(e,n)=>{let r=t(e);n.apply(`Biome`,e=>Biomes.rename(r.i,e),r.name),n.apply(`Color`,e=>Biomes.recolor(r.i,e),r.color),n.apply(`Habitability`,e=>Biomes.setHabitability(r.i,Number.parseFloat(e)),`${r.habitability}%`)})&&(f.draw(`biomes`),H())}var ve={open:B,exportCsv:Z};export{ve as BiomesEditor};