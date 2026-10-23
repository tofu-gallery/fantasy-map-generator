import{C as e,n as t,r as n}from"./index-CuUJKJN8.js";import{B as r,D as i,E as a,dn as o,z as s}from"./utils-394NS37_.js";import{X as c,t as l}from"./layers-CpGI7aJd.js";import{t as u}from"./csv-BZ59UuP0.js";import{t as d}from"./stratify-CGdiYggi.js";import{t as f}from"./pack-CyBKcrr4.js";import{S as p,n as m,p as h,v as g}from"./unitUtils-B91DAWIJ.js";import{i as _}from"./tooltips-7PimaK30.js";import{t as v}from"./state-B2hBYDzv.js";import{t as y}from"./controllers-lOfLnkBO.js";import{i as b,l as x,n as S,r as C}from"./dialog-helpers-kMHr89OS.js";import{t as w}from"./tags-4fjWFj3G.js";import{i as T,r as E}from"./app-C3meBrse.js";import{t as D}from"./highlighting-CMuZl7i6.js";import{a as O,i as k,n as A,r as j}from"./table-CEa9eCSl.js";var M=`burgsOverview`,N=`Id.Burg.Province.Province Full Name.State.State Full Name.Culture.Religion.Group.Type.Population.Market.Product.Wealth.Treasury.X.Y.Latitude.Longitude.Elevation.Temperature.Temperature likeness.Capital.Port.Citadel.Walls.Plaza.Temple.Shanty Town.Emblem.Preview link.Tags`.split(`.`),P={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},F,I=[{key:`locate`,width:`0.8em`,permanent:!0},{key:`name`,label:n(`Burg`),width:`8em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`province`,label:n(`Province`),width:`8em`,hidden:!0,mobileHidden:!0,sortType:`alpha`,sortBy:e=>{let t=pack.cells.province[e.cell];return t&&pack.provinces[t]?.name||``}},{key:`state`,label:n(`State`),width:`8em`,sortBy:e=>pack.states[e.state]?.name||``,sortType:`alpha`},{key:`culture`,label:n(`Culture`),width:`10em`,mobileHidden:!0,sortBy:e=>pack.cultures[e.culture]?.name||``,sortType:`alpha`},{key:`group`,label:n(`Group`),width:`6em`,mobileHidden:!0,sortBy:e=>e.group||``,sortType:`alpha`},{key:`population`,label:n(`Population`),width:`7em`,defaultSort:`desc`,sortBy:e=>e.population*options.map.units.population.scale*options.map.units.population.urbanization.rate},{key:`grossproduct`,label:n(`Product`),width:`6.5em`,hidden:!0,mobileHidden:!0,sortBy:t=>e(t.product||0,2)},{key:`productpercapita`,label:n(`Wealth`),width:`6.5em`,mobileHidden:!0,tip:n(`Click to sort by burg wealth (gross product per capita)`),sortBy:t=>e(t.population>0?(t.product||0)/t.population:0,2)},{key:`treasury`,label:n(`Treasury`),width:`6.5em`,mobileHidden:!0,sortBy:t=>e(t.treasury||0,2)},{key:`features`,label:n(`Features`,{context:`burg`}),width:`6em`,mobileHidden:!0,sortType:`alpha`,sortBy:e=>e.capital&&e.port?`a-capital-port`:e.capital?`c-capital`:e.port?`p-port`:`z-burg`},{key:`tags`,label:n(`Tags`),width:`10em`,hidden:!0,sortBy:e=>w.format(e.tags),sortType:`alpha`},{key:`edit`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}],L=j({getData:()=>T(M,H(),I),onUpdate:U});function ee(e={}){customization||(F=v.get(M,`filters`,()=>({search:``,stateId:-1,cultureId:-1})),S(`#${M}, .stable`),l.show(`burgIcons`,`labels`),e.stateId!=null&&(F.stateId=e.stateId),e.cultureId!=null&&(F.cultureId=e.cultureId),te(),B(),ae(),L.reset(),$(`#${M}`).dialog({title:n(`Burgs Overview`),resizable:!1,close:R,width:`fit-content`,position:P}))}function te(){b(`burgsOverview`);let e=`<div id="burgsOverview" class="dialog stable editorDialog">
      <div id="burgsBody" class="table">${k({dialogId:M,columns:I})}</div>
      <div id="burgsFilters" data-tip="${n(`Apply a filter`)}" class="editorFilters">
        <label for="burgsSearch" data-tip="${n(`Filter by name, province, state, culture, group, or tag`)}"
          >${n(`Search`)}: <input id="burgsSearch" type="search"
        /></label>
        <label for="burgsFilterState"
          >${n(`State`)}:
          <select id="burgsFilterState"></select
        ></label>
        <label for="burgsFilterCulture"
          >${n(`Culture`)}:
          <select id="burgsFilterCulture"></select
        ></label>
      </div>
      <div id="burgsFooter" class="totalLine">
        <div data-tip="${n(`Burgs displayed`)}" style="margin-left: 5px">
          ${n(`Burgs`)}:&nbsp;<span id="burgsFooterBurgs">${n(`{{shown}} of {{total}}`,{shown:0,total:0})}</span>
        </div>
        <div data-tip="${n(`Average population`)}" style="margin-left: 12px" data-col="population">
          ${n(`Avg population`)}:&nbsp;<span id="burgsFooterPopulation">0</span>
        </div>
        <div data-tip="${n(`Average gross product`)}" style="margin-left: 12px" data-col="grossproduct">
          ${n(`Avg product`)}:&nbsp;<span id="burgsFooterGrossProduct">0</span> 🟡
        </div>
        <div data-tip="${n(`Average wealth (product per capita)`)}" style="margin-left: 12px" data-col="productpercapita">
          ${n(`Avg wealth`)}:&nbsp;<span id="burgsFooterProductPerCapita">0</span> 🟡
        </div>
        <div data-tip="${n(`Average treasury`)}" style="margin-left: 12px" data-col="treasury">
          ${n(`Avg treasury`)}:&nbsp;<span id="burgsFooterTreasury">0</span> 🟡
        </div>
      </div>
      <div id="burgsBottom" class="editorToolbar">
        <button id="burgsOverviewRefresh" data-tip="${n(`Refresh`)}" class="icon-cw"></button>
        <button id="burgsGroupsEditorButton" data-tip="${n(`Edit burg groups`)}" class="icon-cog"></button>
        <button id="burgsChart" data-tip="${n(`Burgs bubble chart`)}" class="icon-chart-area"></button>
        <button
          id="regenerateBurgNames"
          data-tip="${n(`Regenerate burg names based on assigned culture`)}"
          class="icon-retweet"
        ></button>
        <button id="addNewBurg" data-tip="${t(n(`Add`),n(`Hold Shift to add multiple`))}" class="icon-plus"></button>
        <button
          id="burgsExport"
          data-tip="${n(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
        <button id="burgsImport" data-tip="${n(`Upload data from a CSV file`)}" class="icon-upload"></button>
        <button id="burgsLockAll" data-tip="${n(`Lock or unlock all burgs`)}" class="icon-lock"></button>
        <button
          id="burgsRemoveAll"
          data-tip="${n(`Remove all unlocked burgs except for capitals. To remove a capital remove its state first`)}"
          class="icon-trash"
        ></button>
      </div>
    </div>`;s(`dialogs`).insertAdjacentHTML(`beforeend`,e),s(`burgsSearch`).value=F.search,E(M,L.reset),D(M,({target:e,cellId:t})=>{let n=pack.cells.burg[t];if(n)return n;let r=e.closest(`#labels [data-label-type='burg'][data-id], #burgIcons [data-id]`);return r?Number(r.dataset.id):void 0}),A({dialogId:M,columns:I,onUpdate:()=>x(M,{width:`fit-content`,position:P})}),s(`burgsOverviewRefresh`).addEventListener(`click`,z),s(`burgsGroupsEditorButton`).addEventListener(`click`,()=>y.BurgGroupEditor.open()),s(`burgsChart`).addEventListener(`click`,Z),s(`burgsFilterState`).addEventListener(`change`,V),s(`burgsFilterCulture`).addEventListener(`change`,V),s(`burgsSearch`).addEventListener(`input`,V),s(`regenerateBurgNames`).addEventListener(`click`,ne),s(`addNewBurg`).addEventListener(`click`,()=>void y.BurgCreator.toggle()),s(`burgsExport`).addEventListener(`click`,Q),s(`burgsImport`).addEventListener(`click`,()=>u.pick(se)),s(`burgsLockAll`).addEventListener(`click`,ie),s(`burgsRemoveAll`).addEventListener(`click`,re)}function R(){r(`addBurgTool`)?.classList.contains(`pressed`)&&y.BurgCreator.stop(),$(`#burgsOverview`).dialog(`destroy`),s(`burgsOverview`).remove()}function z(){B(),L.reset()}function B(){let e=s(`burgsFilterState`);new Set(pack.states.filter(e=>!e.removed).map(e=>e.i)).has(F.stateId)||(F.stateId=-1),e.options.length=0,e.options.add(new Option(n(`All`),`-1`,!1,F.stateId===-1)),e.options.add(new Option(pack.states[0].name,`0`,!1,F.stateId===0)),pack.states.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name>t.name?1:-1).forEach(t=>void e.options.add(new Option(t.name,String(t.i),!1,t.i===F.stateId)));let t=s(`burgsFilterCulture`);new Set(pack.cultures.filter(e=>!e.removed).map(e=>e.i)).has(F.cultureId)||(F.cultureId=-1),t.options.length=0,t.options.add(new Option(n(`All`),`-1`,!1,F.cultureId===-1)),t.options.add(new Option(pack.cultures[0].name,`0`,!1,F.cultureId===0)),pack.cultures.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name>t.name?1:-1).forEach(e=>void t.options.add(new Option(e.name,String(e.i),!1,e.i===F.cultureId))),v.set(M,`filters`,F)}function V(){F.search=s(`burgsSearch`).value,F.stateId=+s(`burgsFilterState`).value,F.cultureId=+s(`burgsFilterCulture`).value,v.set(M,`filters`,F),L.reset()}function H(){let e=F.search.toLowerCase().trim(),t=pack.burgs.filter(e=>e.i&&!e.removed);return e&&(t=t.filter(t=>{let n=pack.states[t.state]?.name||``,r=pack.cells.province[t.cell],i=r&&pack.provinces[r]?.name||``,a=pack.cultures[t.culture]?.name||``;return w.matches(e,t.name,t.tags,[n,i,a,t.group])})),F.stateId!==-1&&(t=t.filter(e=>e.state===F.stateId)),F.cultureId!==-1&&(t=t.filter(e=>e.culture===F.cultureId)),t}function U(t){let r=s(`burgsBody`),i=pack.burgs.filter(e=>e.i&&!e.removed).length;r.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()});let a=``,o=0,c=0,l=0,u=0;for(let n of t.all){let t=n.population*options.map.units.population.scale*options.map.units.population.urbanization.rate,r=e(n.product||0,2),i=e(n.population>0?(n.product||0)/n.population:0,2),a=e(n.treasury||0,2);o+=t,c+=r,l+=i,u+=a}for(let r of t.rows){let t=r.population*options.map.units.population.scale*options.map.units.population.urbanization.rate,i=e(r.product||0,2),o=e(r.population>0?(r.product||0)/r.population:0,2),s=e(r.treasury||0,2),c=r.capital&&r.port?`a-capital-port`:r.capital?`c-capital`:r.port?`p-port`:`z-burg`,l=pack.states[r.state].name,u=pack.cells.province[r.cell],d=u?pack.provinces[u].name:``,f=pack.cultures[r.culture].name;a+=`<div
        class="states"
        data-id=${r.i}
        data-name="${r.name}"
        data-state="${l}"
        data-province="${d}"
        data-culture="${f}"
        data-group="${r.group}"
        data-population=${t}
        data-grossproduct=${i}
        data-productpercapita=${o}
        data-treasury=${s}
        data-features="${c}"
      >
        <span data-tip="${n(`Click to zoom`)}" class="icon-dot-circled pointer" data-col="locate"></span>
        <input data-tip="${n(`Name`)}" class="burgName" value="${r.name}" data-col="name" disabled />
        <input data-tip="${n(`Burg province`)}" value="${d}" data-col="province" disabled />
        <input data-tip="${n(`Burg state`)}" value="${l}" data-col="state" disabled />
        <input data-tip="${n(`Dominant culture`)}" value="${f}" data-col="culture" disabled />
        <input data-tip="${n(`Burg group`)}" value="${r.group}" data-col="group" disabled />
        <div data-col="population">
          <span data-tip="${n(`Burg population`)}" class="icon-male"></span>
          <input data-tip="${n(`Burg population`)}" value=${p(t)} disabled />
        </div>
        <div data-col="grossproduct">
          <span data-tip="${n(`Gross Product: local sale revenue minus purchased ingredient costs during the production.`)}">🟡</span>
          <input data-tip="${n(`Gross Product: local sale revenue minus purchased ingredient costs during the production.`)}" value=${i} disabled />
        </div>
        <div data-col="productpercapita">
          <span data-tip="${n(`Wealth: gross product divided by population`)}">🟡</span>
          <input data-tip="${n(`Wealth: gross product divided by population`)}" value=${o} disabled />
        </div>
        <div data-col="treasury">
          <span data-tip="${n(`Treasury: accumulated cash balance`)}">🟡</span>
          <input data-tip="${n(`Treasury: accumulated cash balance`)}" value=${s} disabled />
        </div>
        <div data-col="features">
          <span
            data-tip="${r.capital?n(`This burg is a state capital`):n(`This burg is NOT a state capital`)}"
            class="icon-star-empty${r.capital?``:` inactive`}" style="padding: 0 1px;"></span>
          <span data-tip="${r.port?n(`This burg is a port`):n(`This burg is NOT a port`)}"
          class="icon-anchor${r.port?``:` inactive`}" style="font-size: .9em; padding: 0 1px;"></span>
        </div>
        <div data-col="tags">
          <input
            data-tip="${n(`Tags (comma-separated)`)}"
            class="burgTags"
            value="${w.format(r.tags)}"
            placeholder="${n(`Tags`)}"
            autocorrect="off"
            spellcheck="false"
          />
        </div>
        <span data-col="edit" data-tip="${n(`Edit Burg`)}" class="icon-pencil"></span>
        <span data-col="lock" class="locks pointer ${r.lock?`icon-lock`:`icon-lock-open inactive`}" onmouseover="showElementLockTip(event)"></span>
        <span data-col="remove" data-tip="${n(`Remove`)}" class="icon-trash-empty"></span>
      </div>`}r.insertAdjacentHTML(`beforeend`,a),s(`burgsFooterBurgs`).innerHTML=n(`{{shown}} of {{total}}`,{shown:t.all.length,total:i}),s(`burgsFooterPopulation`).innerHTML=t.all.length?p(o/t.all.length):`0`,s(`burgsFooterGrossProduct`).innerHTML=t.all.length?String(e(c/t.all.length,2)):`0`,s(`burgsFooterProductPerCapita`).innerHTML=t.all.length?String(e(l/t.all.length,2)):`0`,s(`burgsFooterTreasury`).innerHTML=t.all.length?String(e(u/t.all.length,2)):`0`,O(s(`burgsFooter`),t,L.goto),r.querySelectorAll(`div.states`).forEach(e=>void e.addEventListener(`mouseenter`,e=>G(e))),r.querySelectorAll(`div.states`).forEach(e=>void e.addEventListener(`mouseleave`,()=>K())),r.querySelectorAll(`div > span.icon-dot-circled`).forEach(e=>void e.addEventListener(`click`,q)),r.querySelectorAll(`div > span.locks`).forEach(e=>void e.addEventListener(`click`,J)),r.querySelectorAll(`div > span.icon-pencil`).forEach(e=>void e.addEventListener(`click`,Y)),r.querySelectorAll(`div > input.burgTags`).forEach(e=>void e.addEventListener(`change`,W)),r.querySelectorAll(`div > span.icon-trash-empty`).forEach(e=>void e.addEventListener(`click`,X))}function W(){let e=this.closest(`.states`),t=Number(e.dataset.id),n=pack.burgs[t];n&&(w.set(n,this.value),this.value=w.format(n.tags),F.search&&L.refresh())}function G(e){let t=+e.target.dataset.id,n=o(`#labels`).select(`[data-label-type='burg'][data-id='${t}']`);n.size()&&n.classed(`drag`,!0)}function K(){o(`#labels`).selectAll(`text[data-label-type='burg'].drag`).classed(`drag`,!1)}function q(){let e=+this.closest(`.states`).dataset.id,{x:t,y:n}=pack.burgs[e];zoomTo(t,n,8,2e3)}function J(){let e=+this.closest(`.states`).dataset.id;Burgs.setLocked(e,!pack.burgs[e].lock),this.classList.contains(`icon-lock`)?(this.classList.remove(`icon-lock`),this.classList.add(`icon-lock-open`),this.classList.add(`inactive`)):(this.classList.remove(`icon-lock-open`),this.classList.add(`icon-lock`),this.classList.remove(`inactive`))}function Y(){let e=+this.closest(`.states`).dataset.id;y.BurgEditor.open(e)}function X(){let e=+this.closest(`.states`).dataset.id;pack.burgs[e].capital?_(t(n(`You cannot remove the capital`),n(`You must change the state capital first`)),!1,`error`):pack.markets?.some(t=>t.centerBurgId===e)?_(n(`You cannot remove a market center burg. Please remove the market first`),!1,`error`):C({title:n(`Remove`),message:`${n(`Are you sure you want to remove the burg?`)}<br>${n(`This action cannot be reverted`)}`,confirm:n(`Remove`),onConfirm:()=>{Burgs.remove(e),c(`burg`,e),L.refresh(),l.draw(`burgIcons`,`labels`)}})}function ne(){for(let e of H())e.lock||(e.name=Names.getCulture(e.culture));L.refresh(),l.draw(`labels`)}function Z(){let e=pack.states.map(e=>{let t=e.color?e.color:`#ccc`,n=e.fullName?e.fullName:e.name;return{id:e.i,state:e.i?0:null,color:t,name:n}}),t=pack.burgs.filter(e=>e.i&&!e.removed).map(t=>{let n=t.i+e.length-1,r=t.population,i=t.capital,a=pack.cells.province[t.cell],o=a?a+e.length-1:t.state;return{id:n,i:t.i,state:t.state,culture:t.culture,province:a,parent:o,name:t.name,population:r,capital:i,x:t.x,y:t.y}}),r=e.concat(t);if(r.length<2){_(n(`No burgs to show`),!1,`error`);return}let i=d().parentId(e=>e.state)(r).sum(e=>e.population).sort((e,t)=>t.value-e.value),a=s(`uiSize`).valueAsNumber,c=150+200*a,l=150+200*a,u={top:0,right:-50,bottom:-10,left:-50},m=c-u.left-u.right,h=l-u.top-u.bottom,g=f().size([m,h]).padding(3);alertMessage.innerHTML=`<select id="burgsTreeType" style="display:block; margin-left:13px; font-size:11px">
      <option value="states" selected>${n(`Group by state`)}</option>
      <option value="cultures">${n(`Group by culture`)}</option>
      <option value="parent">${n(`Group by province and state`)}</option>
      <option value="provinces">${n(`Group by province`)}</option>
    </select>`,alertMessage.innerHTML+=`<div id='burgsInfo' class='chartInfo'>&#8205;</div>`;let v=o(`#alertMessage`).insert(`svg`,`#burgsInfo`).attr(`id`,`burgsTree`).attr(`width`,c).attr(`height`,l-10).attr(`stroke-width`,2).append(`g`).attr(`transform`,`translate(-50, -10)`);s(`burgsTreeType`).addEventListener(`change`,S),g(i);let y=v.selectAll(`circle`).data(i.leaves()).join(`circle`).attr(`data-id`,e=>e.data.i).attr(`r`,e=>e.r).attr(`fill`,e=>e.parent.data.color).attr(`cx`,e=>e.x).attr(`cy`,e=>e.y).on(`mouseenter`,(e,t)=>b(e,t)).on(`mouseleave`,e=>x(e)).on(`click`,(e,t)=>zoomTo(t.data.x,t.data.y,8,2e3));function b(e,t){o(e.target).transition().duration(1500).attr(`stroke`,`#c13119`);let r=t.data.name,i=t.parent.data.name,a=p(t.value*options.map.units.population.scale*options.map.units.population.urbanization.rate);s(`burgsInfo`).innerHTML=`${r}. ${i}. ${`${n(`Population`)}: ${a}`}`,G(e),_(n(`Click to zoom`))}function x(e){K(),s(`burgsInfo`)&&(s(`burgsInfo`).innerHTML=`&#8205;`,o(e.target).transition().attr(`stroke`,null),_(``))}function S(){let e=()=>pack.states.map(e=>{let t=e.color?e.color:`#ccc`,n=e.fullName?e.fullName:e.name;return{id:e.i,state:e.i?0:null,color:t,name:n}}),n=()=>pack.cultures.map(e=>{let t=e.color?e.color:`#ccc`;return{id:e.i,culture:e.i?0:null,color:t,name:e.name}}),r=()=>{let e=pack.states.map(e=>{let t=e.color?e.color:`#ccc`,n=e.fullName?e.fullName:e.name;return{id:e.i,parent:e.i?0:null,color:t,name:n}}),t=pack.provinces.filter(e=>e.i&&!e.removed).map(t=>({id:t.i+e.length-1,parent:t.state,color:t.color,name:t.fullName}));return e.concat(t)},i=()=>pack.provinces.map(e=>{let t=e.color?e.color:`#ccc`,n=e.fullName?e.fullName:e.name;return{id:e.i?e.i:0,province:e.i?0:null,color:t,name:n}}),a=e=>{if(this.value===`states`)return e.state;if(this.value===`cultures`)return e.culture;if(this.value===`parent`)return e.parent;if(this.value===`provinces`)return e.province},o={states:e,cultures:n,parent:r,provinces:i}[this.value]();t.forEach(e=>{e.id=e.i+o.length-1});let s=o.concat(t),c=d().parentId(e=>a(e))(s).sum(e=>e.population).sort((e,t)=>t.value-e.value);y.data(g(c).leaves()).transition().duration(2e3).attr(`data-id`,e=>e.data.i).attr(`fill`,e=>e.parent.data.color).attr(`cx`,e=>e.x).attr(`cy`,e=>e.y).attr(`r`,e=>e.r)}$(`#alert`).dialog({title:n(`Burgs bubble chart`),width:`fit-content`,position:{my:`left bottom`,at:`left+10 bottom-10`,of:`svg`},buttons:{},close:()=>alertMessage.innerHTML=``})}function Q(){let{coordinates:t}=options.map.geography,{scale:n,urbanization:r}=options.map.units.population,o=N.map(e=>e===`Elevation`?`Elevation (${options.map.units.height.unit})`:e),s=pack.burgs.filter(e=>e.i&&!e.removed).map(o=>{let s=pack.provinces[pack.cells.province[o.cell]],c=grid.cells.temp[pack.cells.g[o.cell]],l=Markets.get(o.market);return[o.i,o.name,s?.i?s.name:``,s?.i?s.fullName:``,pack.states[o.state].name,pack.states[o.state].fullName,pack.cultures[o.culture].name,pack.religions[pack.cells.religion[o.cell]].name,o.group,o.type,e(o.population*n*r.rate),l?Markets.getName(l):``,e(o.product||0,2),e(o.population>0?(o.product||0)/o.population:0,2),e(o.treasury||0,2),o.x,o.y,a(o.y,t,options.map.graph.height,2),i(o.x,t,options.map.graph.width,2),parseInt(h(pack.cells.h[o.cell]),10),m(c),g(c),o.capital?`capital`:``,o.port?`port`:``,o.citadel?`citadel`:``,o.walls?`walls`:``,o.plaza?`plaza`:``,o.temple?`temple`:``,o.shanty?`shanty town`:``,o.coa?JSON.stringify(o.coa).replace(/"/g,``).replace(/,/g,`;`):``,Burgs.getPreview(o).link,w.format(o.tags)]});u.download(`Burgs`,o,s)}function re(){let e=()=>pack.burgs.filter(e=>e.i&&!e.removed&&!(e.capital||e.lock)&&!pack.markets?.some(t=>t.centerBurgId===e.i));C({title:n(`Remove burgs ({{burgs}})`,{burgs:e().length}),message:`${n(`Are you sure you want to remove all unlocked burgs except for capitals and market centers?`)}<br><i>${n(`To remove a capital you have to remove its state first`)}</i>`,confirm:n(`Remove`),onConfirm:()=>{for(let t of e())Burgs.remove(t.i),c(`burg`,t.i);L.refresh(),l.draw(`burgIcons`,`labels`)}})}function ie(){let e=pack.burgs.filter(e=>e.i&&!e.removed),t=e.every(e=>e.lock);for(let n of e)Burgs.setLocked(n.i,!t);L.refresh(),s(`burgsLockAll`).className=t?`icon-lock`:`icon-lock-open`}function ae(){let e=pack.burgs.every(({lock:e,i:t,removed:n})=>e||!t||n);s(`burgsLockAll`).className=e?`icon-lock-open`:`icon-lock`}var oe=[[`Citadel`,`citadel`],[`Walls`,`walls`],[`Plaza`,`plaza`],[`Temple`,`temple`],[`Shanty Town`,`shanty`]];async function se(t){let{scale:n,urbanization:r}=options.map.units.population,i=e=>e&&pack.burgs[e]&&!pack.burgs[e].removed?pack.burgs[e]:void 0,a=pack.burgs.filter(e=>e?.i&&!e.removed),o=new Set(a.filter(e=>e.capital).map(e=>e.i)),s=new Map(a.map(e=>[e.i,Burgs.getPreview(e).link]));await y.CsvUpload.update(t,N,{find:i,units:[`Elevation`],text:[`Burg`,`Tags`]},(t,a)=>{let c=i(t);a.apply(`Burg`,e=>Burgs.rename(t,e),c.name),a.apply(`Culture`,e=>Burgs.setCulture(t,u.byName(pack.cultures,e).i),pack.cultures[c.culture]?.name),a.apply(`Group`,e=>Burgs.setGroup(t,e),c.group),a.apply(`Type`,e=>Burgs.setType(t,e),c.type),a.apply(`Population`,e=>Burgs.setPopulation(t,+e),e(c.population*n*r.rate)),a.apply(`Treasury`,e=>Burgs.setTreasury(t,+e),e(c.treasury||0,2)),a.apply(`Capital`,()=>Burgs.setCapital(t),o.has(t)?`capital`:``),a.assign(`Port`,e=>Burgs.setPort(t,!!e),c.port?`port`:``);for(let[e,n]of oe)a.assign(e,e=>Burgs.setBuilding(t,n,!!e),c[n]?e.toLowerCase():``);a.apply(`Preview link`,e=>Burgs.setLink(t,e),s.get(t)),a.assign(`Tags`,e=>w.set(c,e),w.format(c.tags))})&&(l.draw(`burgIcons`,`labels`,`emblems`,`population`),z())}var ce={open:ee,showChart:Z,exportCsv:Q};export{ce as BurgsOverview};