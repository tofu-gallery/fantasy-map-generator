import{C as e,d as t,m as n,n as r,r as i}from"./index-CuUJKJN8.js";import{B as a,H as o,S as s,dn as c,yt as l,z as u,zt as d}from"./utils-394NS37_.js";import{$ as f,ft as p,mt as m,t as h,ut as g}from"./layers-CpGI7aJd.js";import{t as ee}from"./drag-C_reJWZK.js";import{t as _}from"./sin-DYm9hqTl.js";import{n as te}from"./highlight-DOx2q_4P.js";import{t as v}from"./csv-BZ59UuP0.js";import{t as y}from"./emblems-generator-B3pPl-l-.js";import{t as ne}from"./heightUtils-BfaaFPbS.js";import{S as b,a as x,o as S}from"./unitUtils-B91DAWIJ.js";import{i as C,t as re}from"./tooltips-7PimaK30.js";import{t as w}from"./state-B2hBYDzv.js";import{t as T}from"./controllers-lOfLnkBO.js";import{i as ie,l as E,n as D,r as O,s as ae}from"./dialog-helpers-kMHr89OS.js";import{n as oe}from"./cultures-generator-D2mn7qkG.js";import{f as se,t as k}from"./id-labels-Bh86rU1j.js";import{t as ce}from"./viewbox-events-DpWtTLWO.js";import{t as A}from"./tags-4fjWFj3G.js";import{i as le,r as ue}from"./app-C3meBrse.js";import{t as de}from"./highlighting-CMuZl7i6.js";import{a as fe,i as pe,n as me,o as he,r as ge}from"./table-CEa9eCSl.js";var j=`culturesEditor`,M=`Cultures`,N={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},P,F=[`Id`,`Name`,`Ancestry`,`Color`,`Cells`,`Expansionism`,`Type`,`Area`,`Population`,`Namesbase`,`Emblems Shape`,`Origins`,`Tags`],I=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:i(`Culture`),width:`10em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`ancestry`,label:i(`Ancestry`),width:`7.5em`,mobileHidden:!0,sortBy:e=>e.ancestry||``,sortType:`alpha`},{key:`type`,label:i(`Type`),width:`7.5em`,mobileHidden:!0,sortBy:e=>e.type||``,sortType:`alpha`},{key:`base`,label:i(`Namesbase`),width:`9em`,mobileHidden:!0,sortBy:e=>e.base},{key:`cells`,label:i(`Cells`),width:`5em`,hidden:!0,sortBy:e=>e.cells||0},{key:`expansionism`,label:i(`Expansion`),width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.expansionism||0},{key:`area`,label:i(`Area`),width:`7em`,mobileHidden:!0,sortBy:e=>e.area||0},{key:`population`,label:i(`Population`),width:`6em`,defaultSort:`desc`,sortBy:e=>(e.rural||0)*options.map.units.population.scale+(e.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate},{key:`emblems`,label:i(`Emblems`),width:`7em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.shield||``,sortType:`alpha`},{key:`tags`,label:i(`Tags`),width:`9em`,hidden:!0,sortBy:e=>A.format(e.tags),sortType:`alpha`},{key:`note`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}];function _e(){let e=P?.search?.toLowerCase().trim(),t=pack.cultures.filter(e=>!e.removed);return e?t.filter(t=>A.matches(e,t.name,t.tags,[t.ancestry,t.type])):t}var L=ge({getData:()=>le(j,_e(),I),onUpdate:be});function R(){customization||(P=w.get(j,`filters`,()=>({search:``})),D(`#${j}, .stable`),h.show(`cultures`),h.hide(`states`,`biomes`),h.hide(`religions`,`provinces`),ye(),B(),K(),L.reset(),$(`#${j}`).dialog({title:i(`Cultures Editor`),resizable:!1,width:`fit-content`,close:He,position:N}))}function ve(){P.search=u(`culturesSearch`).value,w.set(j,`filters`,P),L.reset()}function ye(){let e=pack.cultures.some(e=>e.i&&!e.removed&&!!e.ancestry?.trim()),t=I.find(e=>e.key===`ancestry`);t&&(t.hidden=!e),ie(`culturesEditor`);let n=`<div id="culturesEditor" class="dialog stable editorDialog">
    <div id="culturesBody" class="table" data-type="absolute">${pe({dialogId:j,columns:I})}</div>
    <div id="culturesFilters" data-tip="${i(`Apply a filter`)}" class="editorFilters">
      <label for="culturesSearch" data-tip="${i(`Filter by name, ancestry, type, or tag`)}">
        ${i(`Search`)}: <input id="culturesSearch" type="search" />
      </label>
    </div>

    <div id="culturesFooter" class="totalLine">
      <div data-tip="${i(`Cultures number`)}" style="margin-left: 12px">${i(`Cultures`)}:&nbsp;<span id="culturesFooterCultures">0</span></div>
      <div data-tip="${i(`Number of land cells`)}" style="margin-left: 12px" data-col="cells">${i(`Cells`)}:&nbsp;<span id="culturesFooterCells">0</span></div>
      <div data-tip="${i(`Total land area`)}" style="margin-left: 12px" data-col="area">${i(`Land area`)}:&nbsp;<span id="culturesFooterArea">0</span></div>
      <div data-tip="${i(`Total population`)}" style="margin-left: 12px" data-col="population">${i(`Population`)}:&nbsp;<span id="culturesFooterPopulation">0</span></div>
    </div>

    <div id="culturesBottom" class="editorToolbar">
      <button id="culturesEditorRefresh" data-tip="${i(`Refresh`)}" class="icon-cw"></button>
      <button id="culturesEditStyle" data-tip="${i(`Edit style in Style Editor`)}" class="icon-adjust"></button>
      <button id="culturesLegend" data-tip="${i(`Toggle Legend box`)}" class="icon-list-bullet"></button>
      <button id="culturesPercentage" data-tip="${i(`Toggle percentage / absolute values views`)}" class="icon-percent"></button>
      <button id="culturesHeirarchy" data-tip="${i(`Cultures tree`)}" class="icon-sitemap"></button>
      <button id="culturesManually" data-tip="${i(`Manually re-assign cultures`)}" class="icon-brush"></button>
      <button id="culturesEditNamesBase" data-tip="${i(`Edit a database used for names generation`)}" class="icon-font"></button>
      <button id="culturesAdd" data-tip="${r(i(`Add`),i(`Hold Shift to add multiple`))}" class="icon-plus"></button>
      <button id="culturesExport" data-tip="${i(`Save data as a CSV file`)}" class="icon-download"></button>
      <button id="culturesImport" data-tip="${i(`Upload data from a CSV file`)}" class="icon-upload"></button>
      <button id="culturesRecalculate" data-tip="${i(`Recalculate cultures based on current values of growth-related attributes`)}" class="icon-retweet"></button>
      <span
        data-tip="${i(`Allow culture centers, expansion and type changes to take an immediate effect`)}"
        class="editorToolbarPanel"
        style="display: inline-flex"
      >
        <input id="culturesAutoChange" class="checkbox" type="checkbox" />
        <label for="culturesAutoChange" class="checkbox-label"><i>${i(`auto-apply changes`)}</i></label>
      </span>
    </div>
  </div>`;u(`dialogs`).insertAdjacentHTML(`beforeend`,n),u(`culturesSearch`).value=P.search,u(`culturesSearch`).addEventListener(`input`,ve),ue(j,L.reset),de(j,({cellId:e})=>pack.cells.culture[e]),u(`culturesEditorRefresh`).addEventListener(`click`,z),me({dialogId:j,columns:I,onUpdate:()=>E(j,{width:`fit-content`,position:N})}),u(`culturesEditStyle`).addEventListener(`click`,()=>void T.StyleEditor.open(`cultures`)),u(`culturesLegend`).addEventListener(`click`,Le),u(`culturesPercentage`).addEventListener(`click`,q),u(`culturesHeirarchy`).addEventListener(`click`,J),u(`culturesRecalculate`).addEventListener(`click`,()=>Y(!0)),u(`culturesManually`).addEventListener(`click`,Re),u(`culturesEditNamesBase`).addEventListener(`click`,()=>T.NamesbaseEditor.open()),u(`culturesAdd`).addEventListener(`click`,Be),u(`culturesExport`).addEventListener(`click`,Ve),u(`culturesImport`).addEventListener(`click`,()=>v.pick(We))}function z(){B(),L.refresh(),K()}function B(){let{cells:e,cultures:t,burgs:n}=pack;t.forEach(e=>{e.cells=e.area=e.rural=e.urban=0});for(let r of e.i){if(e.h[r]<20)continue;let i=e.culture[r];t[i].cells+=1,t[i].area+=e.area[r],t[i].rural+=e.pop[r];let a=e.burg[r];a&&(t[i].urban+=n[a].population)}}function be(t){let n=S(),a=``,o=0,s=0;for(let n of t.all)o+=x(n.area??0),s+=e((n.rural??0)*options.map.units.population.scale+(n.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate);for(let o of t.rows){let t=x(o.area??0),s=(o.rural??0)*options.map.units.population.scale,c=(o.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,l=e(s+c),u=r(`${i(`Total population`)}: ${b(l)}`,`${i(`Rural population`)}: ${b(s)}`,`${i(`Urban population`)}: ${b(c)}`,i(`Click to edit`));o.i?a+=`<div
        class="states"
        data-id="${o.i}"
        data-name="${o.name}"
        data-ancestry="${o.ancestry||``}"
        data-color="${o.color}"
        data-cells="${o.cells}"
        data-area="${t}"
        data-population="${l}"
        data-base="${o.base}"
        data-type="${o.type}"
        data-expansionism="${o.expansionism}"
        data-emblems="${o.shield}"
      >
        <fill-box fill="${o.color}" data-col="color"></fill-box>
        <div data-col="name">
          <input data-tip="${r(i(`Name`),i(`Click and type to change`))}" class="cultureName"
            value="${o.name}" autocorrect="off" spellcheck="false" />
          <span data-tip="${i(`Regenerate culture name`)}" class="icon-cw hiddenIcon" style="visibility: hidden"></span>
        </div>
        <div data-col="ancestry">
          <input data-tip="${r(i(`Ancestry`),i(`Culture ancestry or race`),i(`Click and type to change`))}" class="cultureAncestry"
            value="${o.ancestry||``}" autocorrect="off" spellcheck="false" />
        </div>
        <select data-tip="${r(i(`Culture type`),i(`Defines growth model`),i(`Click to change`))}"
          class="cultureType" data-col="type">${V(o.type)}</select>
        <div data-col="base">
          <span data-tip="${i(`Click to re-generate names for burgs with this culture assigned`)}" class="icon-arrows-cw"></span>
          <select data-tip="${r(i(`Culture namesbase`),i(`Click to change`),i(`Click on arrows to re-generate names`))}"
            class="cultureBase">${H(o.base)}</select>
        </div>
        <div data-col="cells">
          <span data-tip="${i(`Number of cells`)}" class="icon-check-empty"></span>
          <div data-tip="${i(`Number of cells`)}" class="cultureCells">${o.cells}</div>
        </div>
        <div data-col="expansionism">
          <span data-tip="${r(i(`Culture expansionism`),i(`Defines competitive size`))}" class="icon-resize-full"></span>
          <input
            data-tip="${r(i(`Culture expansionism`),i(`Defines competitive size`),i(`Click to change, then click Recalculate to apply`))}"
            class="cultureExpan"
            type="number"
            min="0"
            max="99"
            step=".1"
            value=${o.expansionism}
          />
        </div>
        <div data-col="area">
          <span data-tip="${i(`Culture area`)}" class="icon-map-o"></span>
          <div data-tip="${i(`Culture area`)}" class="cultureArea">${b(t)} ${n}</div>
        </div>
        <div data-col="population">
          <span data-tip="${u}" class="icon-male"></span>
          <div data-tip="${u}" class="culturePopulation pointer">${b(l)}</div>
        </div>
        <div data-col="emblems">${U(y.isDiversiform,o.shield)}</div>
        <div data-col="tags">
          <input data-tip="${r(i(`Culture tags`),i(`Click and type to change`))}" class="cultureTags"
            value="${A.format(o.tags)}" autocorrect="off" spellcheck="false" />
        </div>
        ${ae(i(`Edit free text notes (legend)`))}
        <span data-col="locate" data-tip="${i(`Locate on map`)}" class="icon-target"></span>
        <span data-col="lock" data-tip="${i(`Lock`)}" class="icon-lock${o.lock?``:`-open`}"></span>
        <span data-col="remove" data-tip="${i(`Remove`)}" class="icon-trash-empty"></span>
      </div>`:a+=`<div
          class="states"
          data-id="${o.i}"
          data-name="${o.name}"
          data-color=""
          data-cells="${o.cells}"
          data-area="${t}"
          data-population="${l}"
          data-base="${o.base}"
          data-type=""
          data-expansionism=""
          data-emblems="${o.shield}"
        >
          <svg width="11" height="11" class="placeholder" data-col="color"></svg>
          <div data-col="name">
            <input data-tip="${r(i(`Neutral culture name`),i(`Click and type to change`))}" class="cultureName italic"
              value="${o.name}" autocorrect="off" spellcheck="false" />
            <span class="icon-cw placeholder"></span>
          </div>
          <div data-col="ancestry"></div>
          <select class="cultureType placeholder" data-col="type">${V(o.type)}</select>
          <div data-col="base">
            <span data-tip="${i(`Click to re-generate names for burgs with this culture assigned`)}" class="icon-arrows-cw"></span>
            <select data-tip="${r(i(`Culture namesbase`),i(`Click to change`),i(`Click on arrows to re-generate names`))}"
              class="cultureBase">${H(o.base)}</select>
          </div>
          <div data-col="cells">
            <span data-tip="${i(`Number of cells`)}" class="icon-check-empty"></span>
            <div data-tip="${i(`Number of cells`)}" class="cultureCells">${o.cells}</div>
          </div>
          <div data-col="expansionism">
            <span class="icon-resize-full placeholder"></span>
            <input class="cultureExpan placeholder" type="number" />
          </div>
          <div data-col="area">
            <span data-tip="${i(`Culture area`)}" class="icon-map-o"></span>
            <div data-tip="${i(`Culture area`)}" class="cultureArea">${b(t)} ${n}</div>
          </div>
          <div data-col="population">
            <span data-tip="${u}" class="icon-male"></span>
            <div data-tip="${u}" class="culturePopulation pointer">${b(l)}</div>
          </div>
          <div data-col="emblems">${U(y.isDiversiform,o.shield)}</div>
          <div data-col="tags"></div>
          <div data-col="note"></div>
          <div data-col="locate"></div>
          <div data-col="lock"></div>
          <div data-col="remove"></div>
        </div>`}let c=u(`culturesBody`);c.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),c.insertAdjacentHTML(`beforeend`,a),u(`culturesFooterCultures`).innerHTML=String(pack.cultures.filter(e=>e.i&&!e.removed).length),u(`culturesFooterCells`).innerHTML=String(pack.cells.h.filter(e=>e>=20).length),u(`culturesFooterArea`).innerHTML=`${b(o)} ${n}`,u(`culturesFooterPopulation`).innerHTML=b(s),u(`culturesFooterArea`).dataset.area=String(o),u(`culturesFooterPopulation`).dataset.population=String(s),fe(u(`culturesFooter`),t,L.goto),u(`culturesBody`).querySelectorAll(`:scope > div.states`).forEach(e=>{e.addEventListener(`mouseenter`,W),e.addEventListener(`mouseleave`,G)}),u(`culturesBody`).querySelectorAll(`fill-box`).forEach(e=>void e.addEventListener(`click`,xe)),u(`culturesBody`).querySelectorAll(`div > input.cultureName`).forEach(e=>void e.addEventListener(`input`,Se)),u(`culturesBody`).querySelectorAll(`div > input.cultureAncestry`).forEach(e=>void e.addEventListener(`input`,Ce)),u(`culturesBody`).querySelectorAll(`div > input.cultureTags`).forEach(e=>void e.addEventListener(`change`,we)),u(`culturesBody`).querySelectorAll(`div > span.icon-cw`).forEach(e=>void e.addEventListener(`click`,Te)),u(`culturesBody`).querySelectorAll(`div > input.cultureExpan`).forEach(e=>void e.addEventListener(`change`,Ee)),u(`culturesBody`).querySelectorAll(`div > select.cultureType`).forEach(e=>void e.addEventListener(`change`,De)),u(`culturesBody`).querySelectorAll(`div > select.cultureBase`).forEach(e=>void e.addEventListener(`change`,Oe)),u(`culturesBody`).querySelectorAll(`div > select.cultureEmblems`).forEach(e=>void e.addEventListener(`change`,ke)),u(`culturesBody`).querySelectorAll(`div > div.culturePopulation`).forEach(e=>void e.addEventListener(`click`,Ae)),u(`culturesBody`).querySelectorAll(`div > span.icon-arrows-cw`).forEach(e=>void e.addEventListener(`click`,je)),u(`culturesBody`).querySelectorAll(`div > span.icon-book`).forEach(e=>void e.addEventListener(`click`,Ne)),u(`culturesBody`).querySelectorAll(`div > span.icon-target`).forEach(e=>void e.addEventListener(`click`,Pe)),u(`culturesBody`).querySelectorAll(`div > span.icon-trash-empty`).forEach(e=>void e.addEventListener(`click`,Fe)),u(`culturesBody`).querySelectorAll(`div > span.icon-lock`).forEach(e=>void e.addEventListener(`click`,Q)),u(`culturesBody`).querySelectorAll(`div > span.icon-lock-open`).forEach(e=>void e.addEventListener(`click`,Q)),he(j,y.isDiversiform?[]:[`emblems`]),u(`culturesBody`).dataset.type===`percentage`&&(u(`culturesBody`).dataset.type=`absolute`,q()),E(j,{width:`fit-content`,position:N})}function V(e){let t=``;return oe.forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${k[n]??n}</option>`}),t}function H(e){let t=``;return Names.nameBases.forEach((n,r)=>{t+=`<option ${e===r?`selected`:``} value="${r}">${n.name}</option>`}),Names.nameBases[e]||(t+=`<option selected value="${e}">${i(`removed`)}</option>`),t}function U(e,t){if(!e)return``;let n=Object.keys(y.shields.types).flatMap(e=>Object.keys(y.shields[e])).map(e=>`<option ${e===t?`selected`:``} value="${e}">${se[e]??e}</option>`);return`<select data-tip="${r(i(`Emblem shape associated with culture`),i(`Click to change`))}" class="cultureEmblems">${n}</select>`}var W=s(e=>{if(!h.isOn(`cultures`)||customization)return;let t=d().duration(2e3).ease(_);if(e.data?.shadow){let n=e.data.name,r=pack.cultures.filter(e=>e.i&&!e.removed&&e.ancestry?.trim()===n);for(let e of r)c(`#cults`).select(`#culture${e.i}`).raise().transition(t).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`),c(`#debug`).select(`#cultureCenter${e.i}`).raise().transition(t).attr(`r`,3).attr(`stroke`,`#d0240f`);return}let n=Number(e.id||e.target?.dataset?.id);c(`#cults`).select(`#culture${n}`).raise().transition(t).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`),c(`#debug`).select(`#cultureCenter${n}`).raise().transition(t).attr(`r`,3).attr(`stroke`,`#d0240f`)},200);function G(e){if(!h.isOn(`cultures`))return;if(e.data?.shadow){let t=e.data.name,n=pack.cultures.filter(e=>e.i&&!e.removed&&e.ancestry?.trim()===t);for(let e of n)c(`#cults`).select(`#culture${e.i}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),c(`#debug`).select(`#cultureCenter${e.i}`).transition().attr(`r`,2).attr(`stroke`,null);return}let t=Number(e.id||e.target?.dataset?.id);c(`#cults`).select(`#culture${t}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),c(`#debug`).select(`#cultureCenter${t}`).transition().attr(`r`,2).attr(`stroke`,null)}function xe(){let e=this.getAttribute(`fill`)||`#ffffff`,t=+this.parentNode.dataset.id;T.ColorPicker.open(e,e=>{this.fill=e,pack.cultures[t].color=e,c(`#cults`).select(`#culture${t}`).attr(`fill`,e),c(`#debug`).select(`#cultureCenter${t}`).attr(`fill`,e)})}function Se(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.name=this.value,this.value.trim()&&Cultures.rename(t,this.value)}function Ce(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.ancestry=this.value.trim(),Cultures.setAncestry(t,this.value)}function we(){let e=+this.closest(`.states`).dataset.id;A.set(pack.cultures[e],this.value),this.value=A.format(pack.cultures[e].tags),P.search&&L.refresh()}function Te(){let e=+this.closest(`.states`).dataset.id,t=pack.cultures[e].base;if(!Names.nameBases[t]){C(i(`Namesbase is not defined, please select a valid namesbase`),!1,`error`,5e3);return}let n=Names.getCultureShort(e);this.parentNode.querySelector(`input.cultureName`).value=n,Cultures.rename(e,n)}function Ee(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.expansionism=this.value,+this.value>=0&&+this.value<=99&&(Cultures.setExpansionism(t,+this.value),Y())}function De(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.type=this.value;let t=this.value;pack.cultures[e].type=t,Y()}function Oe(){let e=this.closest(`.states`),t=+e.dataset.id,n=+this.value;Cultures.setBase(t,n),e.dataset.base=String(n)}function ke(){let e=this.closest(`.states`),t=+e.dataset.id;Cultures.setEmblemShape(t,this.value),e.dataset.emblems=pack.cultures[t].shield;let n=(e,t)=>{let n=a(e);n&&t&&(n.remove(),f.trigger(e,t))};for(let e of pack.states)e.i&&e.culture===t&&n(`stateCOA${e.i}`,e.coa);for(let e of pack.provinces)e.i&&pack.cells.culture[e.center]===t&&n(`provinceCOA${e.i}`,e.coa);for(let e of pack.burgs)e?.i&&e.culture===t&&n(`burgCOA${e.i}`,e.coa)}function Ae(){let n=+this.closest(`.states`).dataset.id,r=pack.cultures[n];if(!r.cells){C(i(`No cells, cannot change population`),!1,`error`);return}let a=e((r.rural??0)*options.map.units.population.scale),o=e((r.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),s=a+o,c=e=>Number(e).toLocaleString(),l=pack.burgs.filter(e=>!e.removed&&e.culture===n);alertMessage.innerHTML=`<div>
    <i>${i(`Change population of all cells assigned to the culture`)}</i>
    <div style="margin: 0.5em 0">
      ${i(`Rural`)}: <input type="number" min="0" step="1" id="ruralPop" value=${a} style="width:6em" />
      ${i(`Urban`)}: <input type="number" min="0" step="1" id="urbanPop" value=${o} style="width:6em"
        ${l.length?``:`disabled`} />
    </div>
    <div>${i(`Total population`)}: ${c(s)} ⇒ <span id="totalPop">${c(s)}</span>
      (<span id="totalPopPerc">100</span>%)
    </div>
  </div>`;let d=u(`ruralPop`),f=u(`urbanPop`),p=u(`totalPop`),m=u(`totalPopPerc`),g=()=>{let t=d.valueAsNumber+f.valueAsNumber;Number.isNaN(t)||(p.innerHTML=c(t),m.innerHTML=String(e(t/s*100)))};d.oninput=()=>g(),f.oninput=()=>g(),$(`#alert`).dialog({resizable:!1,title:i(`Change culture population`),width:`24em`,buttons:{[i(`Apply`)]:function(){try{Cultures.setPopulation(n,+d.value||0,+f.value||0)}catch(e){C(t(e),!1,`error`);return}h.draw(`population`),z(),$(this).dialog(`close`)},[i(`Cancel`)]:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`}})}function je(){if(customization===4)return;let e=+this.closest(`.states`).dataset.id,t=pack.cultures[e].base;if(!Names.nameBases[t]){C(i(`Namesbase is not defined, please select a valid namesbase`),!1,`error`,5e3);return}let n=pack.burgs.filter(t=>t.culture===e&&!t.removed&&!t.lock);for(let t of n)Burgs.rename(t.i,Names.getCulture(e));h.draw(`labels`),C(i(`Burg names regenerated: {{burgs}}`,{burgs:n.length}),!1,`success`)}function Me(e){c(`#cults`).select(`#culture${e}`).remove(),c(`#debug`).select(`#cultureCenter${e}`).remove(),Cultures.remove(e),z()}function Ne(){let e=+this.closest(`.states`).dataset.id;T.NotesEditor.open({type:`culture`,id:e})}function Pe(){let e=+this.closest(`.states`).dataset.id;te(c(`#cults`).select(`#culture${e}`).node(),4)}function Fe(){if(customization)return;let e=+this.closest(`.states`).dataset.id;O({title:i(`Remove`),message:`${i(`Are you sure you want to remove the culture?`)}<br>${i(`This action cannot be reverted`)}`,confirm:i(`Remove`),onConfirm:()=>Me(e)})}function K(){let e=i(`Drag to move the culture center (ancestral home)`),t=c(`#debug`);t.select(`#cultureCenters`).remove();let n=t.append(`g`).attr(`id`,`cultureCenters`).attr(`stroke-width`,.8).attr(`stroke`,`#444444`).style(`cursor`,`move`),r=pack.cultures.filter(e=>e.i&&!e.removed);n.selectAll(`circle`).data(r).enter().append(`circle`).attr(`id`,e=>`cultureCenter${e.i}`).attr(`data-id`,e=>e.i).attr(`r`,2).attr(`fill`,e=>e.color).attr(`cx`,e=>pack.cells.p[e.center][0]).attr(`cy`,e=>pack.cells.p[e.center][1]).on(`mouseenter`,(t,n)=>{C(e,!0),u(`culturesBody`).querySelector(`div[data-id='${n.i}']`)?.classList.add(`selected`),W(t)}).on(`mouseleave`,(e,t)=>{C(``,!0),u(`culturesBody`).querySelector(`div[data-id='${t.i}']`)?.classList.remove(`selected`),G(e)}).call(ee().on(`start`,Ie))}function Ie(e){let t=+this.id.slice(13),r=n(this.getAttribute(`transform`)),i=+r[0]-e.x,a=+r[1]-e.y;function o(e){let{x:n,y:r}=e;this.setAttribute(`transform`,`translate(${i+n},${a+r})`);let o=Pack.findCell(n,r);if(!(o==null||pack.cells.h[o]<20)){try{Cultures.moveCenter(t,n,r)}catch(e){C(e instanceof Error?e.message:String(e),!1,`error`,2e3);return}Y()}}let c=s(o,50);e.on(`drag`,c)}function Le(){if(m(M)){g(M);return}let e=pack.cultures.filter(e=>e.i&&!e.removed&&e.cells).sort((e,t)=>(t.area??0)-(e.area??0)).map(e=>[e.i,e.color,e.name]);if(!e.length)return void C(i(`No cultures to show`),!1,`error`);p(M,e)}function q(){if(u(`culturesBody`).dataset.type===`absolute`){u(`culturesBody`).dataset.type=`percentage`;let t=+u(`culturesFooterCells`).textContent,n=+u(`culturesFooterArea`).dataset.area,r=+u(`culturesFooterPopulation`).dataset.population;u(`culturesBody`).querySelectorAll(`:scope > div.states`).forEach(i=>{let{cells:a,area:o,population:s}=i.dataset;i.querySelector(`.cultureCells`).textContent=`${e(+a/t*100)}%`,i.querySelector(`.cultureArea`).textContent=`${e(+o/n*100)}%`,i.querySelector(`.culturePopulation`).textContent=`${e(+s/r*100)}%`})}else u(`culturesBody`).dataset.type=`absolute`,L.refresh()}async function J(){customization||T.HierarchyTree.open({type:`cultures`,data:pack.cultures,onNodeEnter:W,onNodeLeave:G,getDescription:t=>{if(t.shadow)return i(`{{- ancestry}} ancestry`,{ancestry:t.name});let{name:n,type:a,rural:o,urban:s}=t,c=o*options.map.units.population.scale+s*options.map.units.population.scale*options.map.units.population.urbanization.rate,l=c>0?i(`{{- population}} people`,{population:b(e(c))}):i(`Extinct`);return r(i(`{{- culture}} culture`,{culture:n}),k[a]??a,l)},getShape:({type:e,shadow:t})=>{if(t||e===`Generic`)return`circle`;if(e===`River`)return`diamond`;if(e===`Lake`)return`hexagon`;if(e===`Naval`)return`square`;if(e===`Highland`)return`concave`;if(e===`Nomadic`)return`octagon`;if(e===`Hunting`)return`pentagon`}})}function Y(e){(e||u(`culturesAutoChange`).checked)&&(Cultures.recalculate(),h.draw(`cultures`),z())}function Re(){h.show(`cultures`),T.PaintEditor.open({title:i(`Paint Cultures`),parentDialogId:j,onClose:R,items:pack.cultures.filter(e=>!e.removed).map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`,lock:!!e.lock})),dontOverrideControl:!0,getValue:e=>pack.cells.culture[e],filterCell:e=>ne(e,pack),onApply:ze})}function ze(e){for(let[t,n]of l(e))Cultures.setCells(t,n);e.size&&(h.draw(`cultures`),a(j)&&z())}function Be(){this.classList.contains(`pressed`)?X():(customization=9,this.classList.add(`pressed`),C(i(`Click on the map to add a new culture`),!0),c(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Z),u(`culturesBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`}))}function X(){customization=0,ce(),re(),u(`culturesBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=u(`culturesAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}function Z(e){let[n,r]=o(e,this);try{Cultures.add(n,r)}catch(e){C(t(e),!1,`error`);return}e.shiftKey===!1&&X(),K(),L.refresh()}function Ve(){let t=S(`2`),n=F.map(e=>e===`Area`?`Area ${t}`:e),r=L.view().all.map(t=>{let n=x(t.area??0),r=e((t.rural??0)*options.map.units.population.scale+(t.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),i=Names.nameBases[t.base].name,a=(t.origins??[]).filter(e=>!!e).map(e=>pack.cultures[e].name);return[t.i,t.name,t.i&&t.ancestry||``,t.i&&t.color||``,t.cells||0,t.i?t.expansionism||0:``,t.i?t.type:``,n,r,i,t.shield,a.join(`, `),A.format(t.tags)]});v.download(`Cultures`,n,r)}function He(){c(`#debug #cultureCenters`).remove(),customization===9&&X(),$(`#culturesEditor`).dialog(`destroy`),u(`culturesEditor`).remove()}var Ue=e=>(e.origins??[]).filter(e=>!!e).map(e=>pack.cultures[e].name).join(`, `);async function We(e){let{scale:t,urbanization:n}=options.map.units.population,r=e=>pack.cultures[e]?.removed?void 0:pack.cultures[e],i=pack.cultures.filter(e=>!e.removed),a=new Map(i.map(e=>[e.i,Ue(e)])),o=new Map(i.map(e=>[e.name,e.i])),s=e=>o.get(e)??v.byName(pack.cultures,e).i;await T.CsvUpload.update(e,F,{find:r,units:[`Area`],text:[`Name`,`Ancestry`,`Tags`]},(e,i)=>{let o=r(e);i.apply(`Name`,t=>Cultures.rename(e,t),o.name),i.apply(`Ancestry`,t=>Cultures.setAncestry(e,t),o.ancestry),i.apply(`Color`,t=>Cultures.recolor(e,t),o.color),i.apply(`Expansionism`,t=>Cultures.setExpansionism(e,+t),o.expansionism),i.apply(`Type`,t=>Cultures.setType(e,t),o.type),i.apply(`Namesbase`,t=>Cultures.setBase(e,Names.nameBases.indexOf(v.byName(Names.nameBases,t))),Names.nameBases[o.base]?.name),i.apply(`Emblems Shape`,t=>Cultures.setEmblemShape(e,t),o.shield),i.assign(`Origins`,t=>Cultures.setOrigins(e,t?t.split(`,`).map(e=>s(e.trim())):[0]),a.get(e)),i.assign(`Tags`,e=>A.set(o,e),A.format(o.tags)),i.population([(o.rural??0)*t,(o.urban??0)*t*n.rate],(t,n)=>Cultures.setPopulation(e,t,n),[`Population`])})&&(h.draw(`cultures`,`emblems`),z())}function Q(){if(customization)return;let e=+this.closest(`.states`).dataset.id,t=this.classList;Cultures.setLocked(e,!pack.cultures[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}var Ge={open:R,showHierarchy:J};export{Ge as CulturesEditor};