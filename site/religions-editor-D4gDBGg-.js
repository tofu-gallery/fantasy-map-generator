import{C as e,d as t,m as n,n as r,r as i}from"./index-CuUJKJN8.js";import{B as a,H as o,S as s,dn as c,yt as l,z as u,zt as d}from"./utils-394NS37_.js";import{ft as f,mt as p,t as m,ut as h}from"./layers-CpGI7aJd.js";import{t as g}from"./drag-C_reJWZK.js";import{t as _}from"./sin-DYm9hqTl.js";import{n as ee}from"./highlight-DOx2q_4P.js";import{t as v}from"./csv-BZ59UuP0.js";import{t as te}from"./heightUtils-BfaaFPbS.js";import{S as y,a as b,o as x}from"./unitUtils-B91DAWIJ.js";import{i as S,t as C}from"./tooltips-7PimaK30.js";import{t as w}from"./state-B2hBYDzv.js";import{t as T}from"./controllers-lOfLnkBO.js";import{i as ne,l as E,n as re,r as ie,s as ae}from"./dialog-helpers-kMHr89OS.js";import{l as oe,u as D}from"./id-labels-Bh86rU1j.js";import{t as se}from"./viewbox-events-DpWtTLWO.js";import{t as O}from"./tags-4fjWFj3G.js";import{i as k,r as ce}from"./app-C3meBrse.js";import{t as le}from"./highlighting-CMuZl7i6.js";import{a as ue,i as de,n as fe,r as pe}from"./table-CEa9eCSl.js";var A=`religionsEditor`,j=[`Id`,`Name`,`Color`,`Type`,`Form`,`Supreme Deity`,`Culture`,`Area`,`Cells`,`Believers`,`Origins`,`Potential`,`Expansionism`,`Tags`],M=`Religions`,N={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},P,F=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:i(`Religion`),width:`14em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`type`,label:i(`Type`),width:`7.5em`,defaultSort:`asc`,sortBy:e=>e.type||``,sortType:`alpha`},{key:`form`,label:i(`Form`),width:`7em`,mobileHidden:!0,sortBy:e=>e.form||``,sortType:`alpha`},{key:`deity`,label:i(`Deity`),width:`14em`,mobileHidden:!0,sortBy:e=>e.deity||``,sortType:`alpha`},{key:`area`,label:i(`Area`),width:`7em`,mobileHidden:!0,sortBy:e=>e.area||0},{key:`population`,label:i(`Population`),width:`6em`,sortBy:e=>(e.rural||0)*options.map.units.population.scale+(e.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate},{key:`expansion`,label:i(`Expansion`),width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.expansion||``,sortType:`alpha`},{key:`expansionism`,label:i(`Expansionism`),width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.expansionism||0},{key:`tags`,label:i(`Tags`),width:`10em`,hidden:!0,sortBy:e=>O.format(e.tags),sortType:`alpha`},{key:`note`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}];function me(){let e=P?.search?.toLowerCase().trim(),t=pack.religions.filter(e=>!e.removed&&!(e.i&&!e.cells&&!P.showExtinct));return e?t.filter(t=>O.matches(e,t.name,t.tags,[t.deity,t.form,t.type])):t}var I=pe({getData:()=>k(A,me(),F),onUpdate:ge});function L(){customization||(P=w.get(A,`filters`,()=>({showExtinct:!1,search:``})),re(`#${A}, .stable`),m.show(`religions`),m.hide(`states`,`biomes`),m.hide(`cultures`,`provinces`),he(),B(),W(),I.reset(),$(`#${A}`).dialog({title:i(`Religions Editor`),resizable:!1,width:`fit-content`,close:Be,position:N}))}function R(){P.search=u(`religionsSearch`).value,w.set(A,`filters`,P),I.reset()}function he(){ne(`religionsEditor`);let e=`<div id="religionsEditor" class="dialog stable editorDialog">
    <div id="religionsBody" class="table" data-type="absolute">${de({dialogId:A,columns:F})}</div>
    <div id="religionsFilters" data-tip="${i(`Apply a filter`)}" class="editorFilters">
      <label for="religionsSearch" data-tip="${i(`Filter by name, deity, form, type, or tag`)}">
        ${i(`Search`)}: <input id="religionsSearch" type="search" />
      </label>
    </div>

    <div id="religionsFooter" class="totalLine">
      <div data-tip="${i(`Total number of organized religions`)}" style="margin-left: 12px">
        ${i(`Organized`,{context:`count`})}:&nbsp;<span id="religionsOrganized">0</span>
      </div>
      <div data-tip="${i(`Total number of heresies`)}" style="margin-left: 12px">
        ${i(`Heresies`)}:&nbsp;<span id="religionsHeresies">0</span>
      </div>
      <div data-tip="${i(`Total number of cults`)}" style="margin-left: 12px">
        ${i(`Cults`)}:&nbsp;<span id="religionsCults">0</span>
      </div>
      <div data-tip="${i(`Total number of folk religions`)}" style="margin-left: 12px">
        ${i(`Folk`,{context:`count`})}:&nbsp;<span id="religionsFolk">0</span>
      </div>
      <div data-tip="${i(`Total land area`)}" style="margin-left: 12px" data-col="area">
        ${i(`Land area`)}:&nbsp;<span id="religionsFooterArea">0</span>
      </div>
      <div data-tip="${i(`Total number of believers (population)`)}" style="margin-left: 12px" data-col="population">
        ${i(`Believers`)}:&nbsp;<span id="religionsFooterPopulation">0</span>
      </div>
    </div>

    <div id="religionsBottom" class="editorToolbar">
      <button id="religionsEditorRefresh" data-tip="${i(`Refresh`)}" class="icon-cw"></button>
      <button id="religionsEditStyle" data-tip="${i(`Edit style in Style Editor`)}" class="icon-adjust"></button>
      <button id="religionsLegend" data-tip="${i(`Toggle Legend box`)}" class="icon-list-bullet"></button>
      <button id="religionsPercentage" data-tip="${i(`Toggle percentage / absolute values views`)}" class="icon-percent"></button>
      <button id="religionsHeirarchy" data-tip="${i(`Religions tree`)}" class="icon-sitemap"></button>
      <button id="religionsExtinct" data-tip="${i(`Show/hide extinct religions (religions without cells)`)}" class="icon-eye-off"></button>

      <button id="religionsManually" data-tip="${i(`Manually re-assign religions`)}" class="icon-brush"></button>
      <button id="religionsAdd" data-tip="${r(i(`Add`),i(`Hold Shift to add multiple`))}" class="icon-plus"></button>
      <button id="religionsExport" data-tip="${i(`Save data as a CSV file`)}" class="icon-download"></button>
      <button id="religionsImport" data-tip="${i(`Upload data from a CSV file`)}" class="icon-upload"></button>
      <button id="religionsRecalculate" data-tip="${i(`Recalculate religions based on current values of growth-related attributes`)}" class="icon-retweet"></button>
      <span
        data-tip="${i(`Allow religion center, extent, and expansionism changes to take an immediate effect`)}"
        class="editorToolbarPanel"
      >
        <input id="religionsAutoChange" class="checkbox" type="checkbox" />
        <label for="religionsAutoChange" class="checkbox-label"><i>${i(`auto-apply changes`)}</i></label>
      </span>
    </div>
  </div>`;u(`dialogs`).insertAdjacentHTML(`beforeend`,e),q();let t=u(`religionsSearch`);t.value=P.search??``,t.addEventListener(`input`,R),ce(A,I.reset),le(A,({cellId:e})=>pack.cells.religion[e]),u(`religionsEditorRefresh`).addEventListener(`click`,z),fe({dialogId:A,columns:F,onUpdate:()=>E(A,{width:`fit-content`,position:N})}),u(`religionsEditStyle`).addEventListener(`click`,()=>void T.StyleEditor.open(`religions`)),u(`religionsLegend`).addEventListener(`click`,Me),u(`religionsPercentage`).addEventListener(`click`,G),u(`religionsHeirarchy`).addEventListener(`click`,K),u(`religionsExtinct`).addEventListener(`click`,Ne),u(`religionsManually`).addEventListener(`click`,Pe),u(`religionsAdd`).addEventListener(`click`,Ie),u(`religionsExport`).addEventListener(`click`,Le),u(`religionsImport`).addEventListener(`click`,()=>v.pick(He)),u(`religionsRecalculate`).addEventListener(`click`,()=>Z(!0))}function z(){B(),I.refresh()}function B(){let{cells:e,religions:t,burgs:n}=pack;t.forEach(e=>{e.cells=e.area=e.rural=e.urban=0});for(let r of e.i){if(e.h[r]<20)continue;let i=e.religion[r];t[i].cells+=1,t[i].area+=e.area[r],t[i].rural+=e.pop[r];let a=e.burg[r];a&&(t[i].urban+=n[a].population)}}function ge(t){let n=` ${x()}`,a=``,o=0,s=0;for(let n of t.all)o+=b(n.area??0),s+=e((n.rural??0)*options.map.units.population.scale+(n.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate);for(let o of t.rows){let t=b(o.area??0),s=(o.rural??0)*options.map.units.population.scale,c=(o.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,l=e(s+c),u=r(i(`Believers: {{total}}; Rural areas: {{rural}}; Urban areas: {{urban}}`,{total:y(l),rural:y(s),urban:y(c)}),i(`Click to change`));o.i?a+=`<div
      class="states"
      data-id=${o.i}
      data-name="${o.name}"
      data-color="${o.color}"
      data-area=${t}
      data-population=${l}
      data-type="${o.type}"
      data-form="${o.form}"
      data-deity="${o.deity||``}"
      data-expansion="${o.expansion}"
      data-expansionism="${o.expansionism}"
    >
      <fill-box fill="${o.color}" data-col="color"></fill-box>
      <input data-tip="${r(i(`Name`),i(`Click and type to change`))}" class="religionName"
        value="${o.name}" autocorrect="off" spellcheck="false" data-col="name" />
      <select data-tip="${i(`Religion type`)}" class="religionType" data-col="type">
        ${V(o.type)}
      </select>
      <input data-tip="${i(`Religion form`)}" class="religionForm"
        value="${o.form}" autocorrect="off" spellcheck="false" data-col="form" />
      <div data-col="deity">
        <span data-tip="${i(`Click to re-generate supreme deity`)}" class="icon-arrows-cw pointer"></span>
        <input data-tip="${i(`Religion supreme deity`)}" class="religionDeity"
          value="${o.deity||``}" autocorrect="off" spellcheck="false" />
      </div>
      <div data-col="area">
        <span data-tip="${i(`Religion area`)}" style="padding-right: 4px" class="icon-map-o"></span>
        <div data-tip="${i(`Religion area`)}" class="religionArea">${y(t)+n}</div>
      </div>
      <div data-col="population">
        <span data-tip="${u}" class="icon-male"></span>
        <div data-tip="${u}" class="religionPopulation pointer">${y(l)}</div>
      </div>
      ${_e(o)}
      <div data-col="tags">
        <input
          data-tip="${i(`Tags (comma-separated)`)}"
          class="religionTags"
          value="${O.format(o.tags)}"
          placeholder="${i(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
        />
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
        data-area="${t}"
        data-population="${l}"
        data-type=""
        data-form=""
        data-deity=""
        data-expansion=""
        data-expansionism=""
      >
        <svg width="9" height="9" class="placeholder" data-col="color"></svg>
        <input data-tip="${r(i(`Name`),i(`Click and type to change`))}" class="religionName italic"
          value="${o.name}" autocorrect="off" spellcheck="false" data-col="name" />
        <select data-tip="${i(`Religion type`)}" class="religionType placeholder" data-col="type">
          ${V(o.type)}
        </select>
        <input data-tip="${i(`Religion form`)}" class="religionForm placeholder" value="" autocorrect="off" spellcheck="false" data-col="form" />
        <div data-col="deity">
          <span class="icon-arrows-cw placeholder"></span>
          <input class="religionDeity placeholder" value="" autocorrect="off" spellcheck="false" />
        </div>
        <div data-col="area">
          <span data-tip="${i(`Religion area`)}" style="padding-right: 4px" class="icon-map-o"></span>
          <div data-tip="${i(`Religion area`)}" class="religionArea">${y(t)+n}</div>
        </div>
        <div data-col="population">
          <span data-tip="${u}" class="icon-male"></span>
          <div data-tip="${u}" class="religionPopulation pointer">${y(l)}</div>
        </div>
        <div data-col="expansion">
          <span class="icon-resize-full-alt placeholder" style="padding-right: 2px"></span>
          <span class="religionExtent placeholder">n/a</span>
        </div>
        <div data-col="expansionism">
          <span class="icon-resize-full placeholder"></span>
          <input class="religionExpantion placeholder" disabled type="number" value="0" />
        </div>
        <div data-col="tags"></div>
        <div data-col="note"></div>
        <div data-col="locate"></div>
        <div data-col="lock"></div>
        <div data-col="remove"></div>
      </div>`}let c=u(`religionsBody`);c.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),c.insertAdjacentHTML(`beforeend`,a);let l=pack.religions.filter(e=>e.i&&!e.removed);u(`religionsOrganized`).innerHTML=String(l.filter(e=>e.type===`Organized`).length),u(`religionsHeresies`).innerHTML=String(l.filter(e=>e.type===`Heresy`).length),u(`religionsCults`).innerHTML=String(l.filter(e=>e.type===`Cult`).length),u(`religionsFolk`).innerHTML=String(l.filter(e=>e.type===`Folk`).length),u(`religionsFooterArea`).innerHTML=y(o)+n,u(`religionsFooterPopulation`).innerHTML=y(s),u(`religionsFooterArea`).dataset.area=String(o),u(`religionsFooterPopulation`).dataset.population=String(s),ue(u(`religionsFooter`),t,I.goto),u(`religionsBody`).querySelectorAll(`:scope > .states`).forEach(e=>{e.addEventListener(`mouseenter`,H),e.addEventListener(`mouseleave`,U)}),u(`religionsBody`).querySelectorAll(`fill-box`).forEach(e=>void e.addEventListener(`click`,ye)),u(`religionsBody`).querySelectorAll(`div > input.religionName`).forEach(e=>void e.addEventListener(`input`,be)),u(`religionsBody`).querySelectorAll(`div > select.religionType`).forEach(e=>void e.addEventListener(`change`,xe)),u(`religionsBody`).querySelectorAll(`div > input.religionForm`).forEach(e=>void e.addEventListener(`input`,Se)),u(`religionsBody`).querySelectorAll(`div > input.religionDeity`).forEach(e=>void e.addEventListener(`input`,Ce)),u(`religionsBody`).querySelectorAll(`div > span.icon-arrows-cw`).forEach(e=>void e.addEventListener(`click`,Te)),u(`religionsBody`).querySelectorAll(`div > div.religionPopulation`).forEach(e=>void e.addEventListener(`click`,Ee)),u(`religionsBody`).querySelectorAll(`div > select.religionExtent`).forEach(e=>void e.addEventListener(`change`,De)),u(`religionsBody`).querySelectorAll(`div > input.religionExpantion`).forEach(e=>void e.addEventListener(`change`,Oe)),u(`religionsBody`).querySelectorAll(`div > input.religionTags`).forEach(e=>void e.addEventListener(`change`,we)),u(`religionsBody`).querySelectorAll(`div > span.icon-trash-empty`).forEach(e=>void e.addEventListener(`click`,ke)),u(`religionsBody`).querySelectorAll(`div > span.icon-book`).forEach(e=>void e.addEventListener(`click`,Re)),u(`religionsBody`).querySelectorAll(`div > span.icon-target`).forEach(e=>void e.addEventListener(`click`,ze)),u(`religionsBody`).querySelectorAll(`div > span.icon-lock`).forEach(e=>void e.addEventListener(`click`,X)),u(`religionsBody`).querySelectorAll(`div > span.icon-lock-open`).forEach(e=>void e.addEventListener(`click`,X)),u(`religionsBody`).dataset.type===`percentage`&&(u(`religionsBody`).dataset.type=`absolute`,G()),E(A,{width:`fit-content`,position:N})}function V(e){let t=``;return[`Folk`,`Organized`,`Cult`,`Heresy`].forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${D[n]??n}</option>`}),t}function _e(e){if(e.type===`Folk`){let e=i(`Folk religions are not competitive and do not expand. Initially they cover all cells of their parent culture, but get ousted by organized religions when they expand`);return`
      <div data-col="expansion">
        <span data-tip="${e}" class="icon-resize-full-alt" style="padding-right: 2px"></span>
        <span data-tip="${e}" class="religionExtent">${i(`culture`)}</span>
      </div>
      <div data-col="expansionism">
        <span data-tip="${e}" class="icon-resize-full"></span>
        <input data-tip="${e}" class="religionExpantion" disabled type="number" value='0' />
      </div>`}return`
    <div data-col="expansion">
      <span data-tip="${i(`Potential religion extent`)}" class="icon-resize-full-alt" style="padding-right: 2px"></span>
      <select data-tip="${i(`Potential religion extent`)}" class="religionExtent">
        ${ve(e.expansion)}
      </select>
    </div>
    <div data-col="expansionism">
      <span data-tip="${r(i(`Religion expansionism`),i(`Defines competitive size`))}" class="icon-resize-full"></span>
      <input
        data-tip="${r(i(`Religion expansionism`),i(`Defines competitive size`),i(`Click to change, then click Recalculate to apply`))}"
        class="religionExpantion"
        type="number"
        min="0"
        max="99"
        step=".1"
        value=${e.expansionism}
      />
    </div>`}function ve(e){let t=``;return[`global`,`state`,`culture`].forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${oe[n]??n}</option>`}),t}var H=s(e=>{let t=Number(e.id||e.target.dataset.id),n=u(`religionsBody`).querySelector(`div[data-id='${t}']`);if(n&&n.classList.add(`active`),!m.isOn(`religions`)||customization)return;let r=d().duration(2e3).ease(_);c(`#relig`).select(`#religion${t}`).raise().transition(r).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`),c(`#debug`).select(`#religionsCenter${t}`).raise().transition(r).attr(`r`,3).attr(`stroke`,`#d0240f`)},200);function U(e){let t=Number(e.id||e.target.dataset.id),n=u(`religionsBody`).querySelector(`div[data-id='${t}']`);n&&n.classList.remove(`active`),c(`#relig`).select(`#religion${t}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),c(`#debug`).select(`#religionsCenter${t}`).transition().attr(`r`,2).attr(`stroke`,null)}function ye(){let e=this.getAttribute(`fill`)||`#ffffff`,t=+this.parentNode.dataset.id;T.ColorPicker.open(e,e=>{this.fill=e,pack.religions[t].color=e,c(`#relig`).select(`#religion${t}`).attr(`fill`,e),c(`#debug`).select(`#religionsCenter${t}`).attr(`fill`,e)})}function be(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.name=this.value,this.value.trim()&&Religions.rename(e,this.value)}function xe(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.type=this.value,Religions.setType(e,this.value)}function Se(){let e=+this.parentNode.dataset.id;this.parentNode.dataset.form=this.value,this.value.trim()&&Religions.setForm(e,this.value)}function Ce(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.deity=this.value,Religions.setDeity(t,this.value)}function we(){let e=this.closest(`.states`),t=Number(e.dataset.id),n=pack.religions[t];n&&(O.set(n,this.value),this.value=O.format(n.tags),P.search&&I.refresh())}function Te(){let e=this.closest(`.states`),t=+e.dataset.id,n=pack.religions[t].culture,r=Religions.getDeityName(n)??``;e.dataset.deity=r,pack.religions[t].deity=r,this.nextElementSibling.value=r}function Ee(){let n=+this.closest(`.states`).dataset.id,r=pack.religions[n];if(!r.cells){S(i(`No cells, cannot change population`),!1,`error`);return}let a=e((r.rural??0)*options.map.units.population.scale),o=e((r.urban??0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),s=a+o,c=e=>Number(e).toLocaleString(),l=pack.burgs.filter(e=>!e.removed&&pack.cells.religion[e.cell]===n);alertMessage.innerHTML=`<div>
    <i>${i(`All population of religion territory is considered believers of this religion. It means believers number change will directly affect population`)}</i>
    <div style="margin: 0.5em 0">
      ${i(`Rural`)}: <input type="number" min="0" step="1" id="ruralPop" value=${a} style="width:6em" />
      ${i(`Urban`)}: <input type="number" min="0" step="1" id="urbanPop" value=${o} style="width:6em"
        ${l.length?``:`disabled`} />
    </div>
    <div>${i(`Total population`)}: ${c(s)} ⇒ <span id="totalPop">${c(s)}</span>
      (<span id="totalPopPerc">100</span>%)
    </div>
  </div>`;let d=u(`ruralPop`),f=u(`urbanPop`),p=u(`totalPop`),h=u(`totalPopPerc`),g=()=>{let t=d.valueAsNumber+f.valueAsNumber;Number.isNaN(t)||(p.innerHTML=c(t),h.innerHTML=String(e(t/s*100)))};d.oninput=()=>g(),f.oninput=()=>g(),$(`#alert`).dialog({resizable:!1,title:i(`Change believers number`),width:`24em`,buttons:{[i(`Apply`)]:function(){_(),$(this).dialog(`close`)},[i(`Cancel`)]:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`}});function _(){try{Religions.setPopulation(n,+d.value||0,+f.value||0)}catch(e){S(t(e),!1,`error`);return}m.draw(`population`),z()}}function De(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.expansion=this.value,Religions.setExpansion(t,this.value),Z()}function Oe(){let e=this.closest(`.states`),t=+e.dataset.id;e.dataset.expansionism=this.value,+this.value>=0&&+this.value<=99&&(Religions.setExpansionism(t,+this.value),Z())}function ke(){if(customization)return;let e=+this.closest(`.states`).dataset.id;ie({title:i(`Remove`),message:`${i(`Are you sure you want to remove the religion?`)}<br>${i(`This action cannot be reverted`)}`,confirm:i(`Remove`),onConfirm:()=>Ae(e)})}function Ae(e){c(`#relig`).select(`#religion${e}`).remove(),c(`#relig`).select(`#religion-gap${e}`).remove(),c(`#debug`).select(`#religionsCenter${e}`).remove(),Religions.remove(e),z()}function W(){let e=c(`#debug`);e.select(`#religionCenters`).remove();let t=e.append(`g`).attr(`id`,`religionCenters`).attr(`stroke-width`,.8).attr(`stroke`,`#444444`).style(`cursor`,`move`),n=pack.religions.filter(e=>e.i&&e.center&&!e.removed);P.showExtinct||(n=n.filter(e=>(e.cells??0)>0)),t.selectAll(`circle`).data(n).enter().append(`circle`).attr(`id`,e=>`religionsCenter${e.i}`).attr(`data-id`,e=>e.i).attr(`r`,2).attr(`fill`,e=>e.color).attr(`cx`,e=>pack.cells.p[e.center][0]).attr(`cy`,e=>pack.cells.p[e.center][1]).on(`mouseenter`,(e,t)=>{S(i(`{{religion}}. Drag to move the religion center`,{religion:t.name}),!0),H(e)}).on(`mouseleave`,e=>{S(``,!0),U(e)}).call(g().on(`start`,je))}function je(e){let t=+this.dataset.id,r=n(this.getAttribute(`transform`)),i=+r[0]-e.x,a=+r[1]-e.y;function o(e){let{x:n,y:r}=e;this.setAttribute(`transform`,`translate(${i+n},${a+r})`);let o=Pack.findCell(n,r);if(!(o==null||pack.cells.h[o]<20)){try{Religions.moveCenter(t,n,r)}catch(e){S(e instanceof Error?e.message:String(e),!1,`error`,2e3);return}Z()}}let c=s(o,50);e.on(`drag`,c)}function Me(){if(p(M)){h(M);return}let e=pack.religions.filter(e=>e.i&&!e.removed&&e.area).sort((e,t)=>(t.area??0)-(e.area??0)).map(e=>[e.i,e.color,e.name]);if(!e.length)return void S(i(`No religions to show`),!1,`error`);f(M,e)}function G(){if(u(`religionsBody`).dataset.type===`absolute`){u(`religionsBody`).dataset.type=`percentage`;let t=+u(`religionsFooterArea`).dataset.area,n=+u(`religionsFooterPopulation`).dataset.population;u(`religionsBody`).querySelectorAll(`:scope > .states`).forEach(r=>{let{area:i,population:a}=r.dataset;r.querySelector(`.religionArea`).textContent=`${e(+i/t*100)}%`,r.querySelector(`.religionPopulation`).textContent=`${e(+a/n*100)}%`})}else u(`religionsBody`).dataset.type=`absolute`,I.refresh()}async function K(){customization||T.HierarchyTree.open({type:`religions`,data:pack.religions,onNodeEnter:H,onNodeLeave:U,getDescription:t=>{let{name:n,type:a,form:o,rural:s,urban:c}=t,l=()=>n.includes(a)||o.includes(a)?``:a===`Folk`?i(`Folk religion`):a===`Organized`?i(`Organized religion`):D[a]??a,u=s*options.map.units.population.scale+c*options.map.units.population.scale*options.map.units.population.urbanization.rate,d=u>0?i(`{{- population}} people`,{population:y(e(u))}):i(`Extinct`);return r(...[n,l(),o===a?``:o,d].filter(Boolean))},getShape:({type:e})=>{if(e===`Folk`)return`circle`;if(e===`Organized`)return`square`;if(e===`Cult`)return`hexagon`;if(e===`Heresy`)return`diamond`}})}function Ne(){P.showExtinct=!P.showExtinct,w.set(A,`filters`,P),q(),I.reset(),W()}function q(){u(`religionsBody`).dataset.extinct=P.showExtinct?`show`:`hide`,u(`religionsExtinct`).classList.toggle(`active`,P.showExtinct)}function Pe(){m.show(`religions`),T.PaintEditor.open({title:i(`Paint Religions`),parentDialogId:A,onClose:L,items:pack.religions.filter(e=>!e.removed).map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`})),dontOverrideControl:!0,getValue:e=>pack.cells.religion[e],filterCell:e=>te(e,pack),onApply:Fe})}function Fe(e){for(let[t,n]of l(e))Religions.setCells(t,n);e.size&&(m.draw(`religions`),a(A)&&z(),W())}function Ie(){this.classList.contains(`pressed`)?J():(customization=8,this.classList.add(`pressed`),S(i(`Click on the map to add a new religion`),!0),c(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Y),u(`religionsBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`}))}function J(){customization=0,se(),C(),u(`religionsBody`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=u(`religionsAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}function Y(e){let[n,r]=o(e,this);try{Religions.add(n,r)}catch(e){S(t(e),!1,`error`);return}e.shiftKey===!1&&J(),m.draw(`religions`),z(),W()}function Le(){let{scale:t,urbanization:n}=options.map.units.population,r=j.map(e=>e===`Area`?`Area ${x(`2`)}`:e),i=I.view().all.map(r=>[r.i,r.name,r.color,r.type,r.form,r.deity,r.i?pack.cultures[r.culture]?.name:``,b(r.area??0),r.cells,e((r.rural??0)*t+(r.urban??0)*t*n.rate),Q(r),r.expansion,r.i?r.expansionism:``,O.format(r.tags)]);v.download(`Religions`,r,i)}function Re(){let e=+this.closest(`.states`).dataset.id;T.NotesEditor.open({type:`religion`,id:e})}function ze(){let e=+this.closest(`.states`).dataset.id,t=c(`#relig`).select(`#religion${e}`).node();t&&ee(t,4)}function X(){if(customization)return;let e=+this.closest(`.states`).dataset.id,t=this.classList;Religions.setLocked(e,!pack.religions[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}function Z(e){(e||u(`religionsAutoChange`).checked)&&(Religions.recalculate(),m.draw(`religions`),z(),W())}function Be(){c(`#debug`).select(`#religionCenters`).remove(),customization===8&&J(),T.ColorPicker.close();let e=I.view();e.rows=[],e.all=[],$(`#religionsEditor`).dialog(`destroy`),u(`religionsEditor`).remove()}var Q=e=>(e.origins??[]).filter(e=>!!e).map(e=>pack.religions[e].name).join(`, `),Ve=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean);async function He(e){let{scale:t,urbanization:n}=options.map.units.population,r=e=>pack.religions[e]?.removed?void 0:pack.religions[e],i=[`Name`,`Type`,`Form`,`Supreme Deity`,`Potential`,`Tags`],a=pack.religions.filter(e=>!e.removed),o=new Map(a.map(e=>[e.i,Q(e)])),s=new Map(a.map(e=>[e.name,e.i])),c=e=>s.get(e)??v.byName(pack.religions,e).i;await T.CsvUpload.update(e,j,{find:r,units:[`Area`],text:i},(e,i)=>{let a=r(e);i.apply(`Name`,t=>Religions.rename(e,t),a.name),i.apply(`Color`,t=>Religions.recolor(e,t),a.color),i.apply(`Type`,t=>Religions.setType(e,t),a.type),i.apply(`Form`,t=>Religions.setForm(e,t),a.form),i.apply(`Supreme Deity`,t=>Religions.setDeity(e,t),a.deity),i.apply(`Potential`,t=>Religions.setExpansion(e,t),a.expansion),i.apply(`Expansionism`,t=>Religions.setExpansionism(e,+t),a.expansionism),i.assign(`Origins`,t=>Religions.setOrigins(e,t?Ve(t).map(c):[0]),o.get(e)),i.assign(`Tags`,e=>O.set(a,e),O.format(a.tags)),i.population([(a.rural??0)*t,(a.urban??0)*t*n.rate],(t,n)=>Religions.setPopulation(e,t,n),[`Believers`])})&&(m.draw(`religions`),z())}var Ue={open:L,showHierarchy:K};export{Ue as ReligionsEditor};