import{C as e,_ as t,f as n,n as r,r as i,u as a}from"./index-CuUJKJN8.js";import{Gt as o,I as s,dn as c,z as l}from"./utils-394NS37_.js";import{j as u,t as d}from"./layers-CpGI7aJd.js";import{t as f}from"./sum-BpJJqxFM.js";import{t as p}from"./csv-BZ59UuP0.js";import{i as m}from"./emblems-generator-B3pPl-l-.js";import{S as h}from"./unitUtils-B91DAWIJ.js";import{i as g}from"./tooltips-7PimaK30.js";import{t as _}from"./controllers-lOfLnkBO.js";import{i as v,l as y,n as b,r as x}from"./dialog-helpers-kMHr89OS.js";import{i as S,r as C}from"./app-C3meBrse.js";import{t as w}from"./highlighting-CMuZl7i6.js";import{a as ee,i as T,n as E,r as D}from"./table-CEa9eCSl.js";import{n as O,t as k}from"./limitation-picker-DxKnNDnC.js";var A=`militaryOverview`,j={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},M=[],N=D({getData:V,onUpdate:U});function P(){customization||(b(`#militaryOverview, .stable`),d.show(`states`,`borders`,`military`),F(),N.reset(),$(`#militaryOverview`).dialog({title:i(`Military Overview`),resizable:!1,width:`fit-content`,close:I,position:j}))}function F(){M=R(),v(`militaryOverview`);let e=`<div id="${A}" class="dialog stable editorDialog">
      <div id="militaryBody" class="table" data-type="absolute">
        ${T({dialogId:A,columns:M})}
      </div>
      <div id="militaryFooter" class="totalLine">
        <div data-tip="${i(`States number`)}" style="margin-left: 4px">
          ${i(`States`)}:&nbsp;<span id="militaryFooterStates">0</span>
        </div>
        <div data-tip="${i(`Total military forces`)}" style="margin-left: 14px" data-col="total">
          ${i(`Total forces`)}:&nbsp;<span id="militaryFooterForcesTotal">0</span>
        </div>
        <div data-tip="${i(`Average military forces per state`)}" style="margin-left: 14px" data-col="total">
          ${i(`Average forces`)}:&nbsp;<span id="militaryFooterForces">0</span>
        </div>
        <div data-tip="${i(`Average forces rate per state`)}" style="margin-left: 14px" data-col="rate">
          ${i(`Average rate`)}:&nbsp;<span id="militaryFooterRate">0%</span>
        </div>
        <div data-tip="${i(`Average War Alert`)}" style="margin-left: 14px" data-col="alert">
          ${i(`Average alert`)}:&nbsp;<span id="militaryFooterAlert">0</span>
        </div>
      </div>
      <div id="militaryBottom" class="editorToolbar">
        <button id="militaryOverviewRefresh" data-tip="${i(`Refresh`)}" class="icon-cw"></button>
        <button id="militaryOptionsButton" data-tip="${i(`Edit Military Units`)}" class="icon-cog"></button>
        <button id="militaryRegimentsList" data-tip="${i(`Show regiments list`)}" class="icon-list-bullet"></button>
        <button
          id="militaryPercentage"
          data-tip="${i(`Toggle percentage / absolute values views`)}"
          class="icon-percent"
        ></button>
        <button
          id="militaryOverviewRecalculate"
          data-tip="${i(`Recalculate military forces based on current options`)}"
          class="icon-retweet"
        ></button>
        <button
          id="militaryExport"
          data-tip="${i(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
        <button id="militaryWiki" data-tip="${i(`Open Military Forces Tutorial`)}" class="icon-info"></button>
      </div>
    </div>`;l(`dialogs`).insertAdjacentHTML(`beforeend`,e),z(),w(`militaryOverview`,({cellId:e})=>pack.cells.state[e]);let t=l(`militaryBody`);l(`militaryOverviewRefresh`).addEventListener(`click`,H),l(`militaryPercentage`).addEventListener(`click`,J),l(`militaryOptionsButton`).addEventListener(`click`,Y),l(`militaryRegimentsList`).addEventListener(`click`,()=>L(-1)),l(`militaryOverviewRecalculate`).addEventListener(`click`,te),l(`militaryExport`).addEventListener(`click`,Q),l(`militaryWiki`).addEventListener(`click`,()=>s(`Military-Forces`)),t.addEventListener(`change`,e=>{let t=e.target,n=t.closest(`.states`);n&&W(+n.dataset.id,+t.value)}),t.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`.states`);if(!n)return;let r=+n.dataset.id;t.tagName===`SPAN`&&L(r)})}function I(){$(`#militaryOverview`).dialog(`destroy`),l(`militaryOverview`).remove()}async function L(e){_.RegimentsOverview.open(e)}function R(){let e=options.map.military.units.map(e=>({key:`unit:${e.name}`,label:a(e.name.replace(/_/g,` `)),width:`5em`,mobileHidden:!0,tip:r(i(`{{unit}} units number`,{unit:e.name}),i(`Click to sort`)),sortBy:t=>t.forces[e.name]||0}));return[{key:`color`,width:`1.2em`,permanent:!0},{key:`state`,label:i(`State`),width:`7em`,permanent:!0,sortBy:e=>e.state.name||``,sortType:`alpha`},...e,{key:`total`,label:i(`Total`),width:`5em`,defaultSort:`desc`,sortBy:e=>e.total,tip:r(i(`Total military personnel (considering crew)`),i(`Click to sort`))},{key:`population`,label:i(`Population`),width:`6.5em`,mobileHidden:!0,sortBy:e=>e.population},{key:`rate`,label:i(`Rate`),width:`5em`,sortBy:e=>e.rate,tip:r(i(`Military personnel rate (% of state population)`),i(`Depends on war alert`),i(`Click to sort`))},{key:`alert`,label:i(`War Alert`),width:`5.5em`,sortBy:e=>e.alert,tip:r(i(`War Alert`),i(`Modifier to military forces number, depends on political situation`),i(`Click to sort`))},{key:`regiments`,width:`1.4em`,permanent:!0}]}function z(){C(A,N.reset),E({dialogId:A,columns:M,onUpdate:()=>y(A,{width:`fit-content`,position:j})})}function B(){M=R(),l(`${A}Header`).outerHTML=T({dialogId:A,columns:M}),z(),N.reset()}function V(){let t=pack.states.filter(e=>e.i&&!e.removed).map(t=>{let n=Object.fromEntries(options.map.military.units.map(e=>[e.name,(t.military||[]).reduce((t,n)=>t+(n.u[e.name]||0),0)])),r=e(((t.rural||0)+(t.urban||0)*options.map.units.population.urbanization.rate)*options.map.units.population.scale),i=options.map.military.units.reduce((e,t)=>e+(n[t.name]||0)*t.crew,0);return{state:t,forces:n,total:i,population:r,rate:r?i/r*100:0,alert:t.alert??0}});return S(A,t,M)}function H(){N.refresh()}function U(t){let n=l(`militaryBody`),a=n.dataset.type===`percentage`,o=t.all.reduce((e,t)=>{e.total+=t.total,e.population+=t.population;for(let n of options.map.military.units)e.units[n.name]=(e.units[n.name]||0)+t.forces[n.name];return e},{total:0,population:0,units:{}}),s=(t,n)=>`${e(n?t/n*100:0)}%`,c=t.rows.map(t=>{let n=options.map.military.units.map(e=>{let n=t.forces[e.name]||0;return`<div data-col="${`unit:${e.name}`}" data-tip="${i(`{{unit}} units number`,{unit:e.name})}">${a?s(n,o.units[e.name]||0):n}</div>`}).join(``);return`<div class="states" data-id="${t.state.i}">
        <fill-box data-col="color" data-tip="${t.state.fullName}" fill="${t.state.color}" disabled></fill-box>
        <input data-col="state" data-tip="${t.state.fullName}" value="${t.state.name}" readonly />
        ${n}
        <div data-col="total" data-tip="${i(`Total military personnel (considering crew)`)}" style="font-weight:bold">${a?s(t.total,o.total):h(t.total)}</div>
        <div data-col="population" data-tip="${i(`State population`)}">${a?s(t.population,o.population):h(t.population)}</div>
        <div data-col="rate" data-tip="${r(i(`Military personnel rate (% of state population)`),i(`Depends on war alert`))}">${e(t.rate,2)}%</div>
        <input data-col="alert" data-tip="${r(i(`War Alert`),i(`Modifier to military forces number, depends on political situation`))}" type="number" min="0" step=".01" value="${e(t.alert,2)}" />
        <span data-col="regiments" data-tip="${i(`Show regiments list`)}" class="icon-list-bullet pointer"></span>
      </div>`}).join(``);n.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),n.insertAdjacentHTML(`beforeend`,c),G(t),ee(l(`militaryFooter`),t,N.goto),n.querySelectorAll(`:scope > .states`).forEach(e=>{e.addEventListener(`mouseenter`,K),e.addEventListener(`mouseleave`,q)}),y(A,{width:`fit-content`,position:j})}function W(e,t){t>=0&&Military.setAlert(e,t);for(let t of pack.states[e].military??[])u(t,e);N.refresh()}function G(t){let n=t.all.length,r=f(t.all.map(e=>e.total));l(`militaryFooterStates`).innerHTML=String(n),l(`militaryFooterForcesTotal`).innerHTML=h(r),l(`militaryFooterForces`).innerHTML=h(n?r/n:0),l(`militaryFooterRate`).innerHTML=`${e(n?f(t.all.map(e=>e.rate))/n:0,2)}%`,l(`militaryFooterAlert`).innerHTML=String(e(n?f(t.all.map(e=>e.alert))/n:0,2))}function K(e){let t=+e.target.dataset.id;if(customization||!t||(c(`#armies > g > g#army${t}`).transition().duration(2e3).style(`fill`,`#ff0000`),!d.isOn(`states`)))return;let n=c(`#regions`).select(`#state${t}`).attr(`d`),r=c(`#debug`).append(`path`).attr(`class`,`highlight`).attr(`d`,n).attr(`fill`,`none`).attr(`stroke`,`red`).attr(`stroke-width`,1).attr(`opacity`,1).attr(`filter`,`url(#blur1)`),i=r.node().getTotalLength(),a=(i+5e3)/2,s=o(`0,${i}`,`${i},${i}`);r.transition().duration(a).attrTween(`stroke-dasharray`,()=>e=>s(e))}function q(e){c(`#debug`).selectAll(`.highlight`).each(function(){c(this).transition().duration(1e3).attr(`opacity`,0).remove()});let t=+e.target.dataset.id;c(`#armies > g > g#army${t}`).transition().duration(1e3).style(`fill`,null)}function J(){let e=l(`militaryBody`);e.dataset.type=e.dataset.type===`absolute`?`percentage`:`absolute`,N.refresh()}function Y(){X();let e=[`melee`,`ranged`,`mounted`,`machinery`,`naval`,`armored`,`aviation`,`magical`],a=l(`militaryOptions`).querySelector(`tbody`);o(),options.map.military.units.map(e=>p(e)),$(`#militaryOptions`).dialog({title:i(`Edit Military Units`),resizable:!1,width:`fit-content`,position:{my:`center`,at:`center`,of:`svg`},close:Z,buttons:{[i(`Apply`)]:b,[i(`Add`)]:()=>p({icon:m.glyph(`🛡️`),name:`custom${l(`militaryOptionsTable`).rows.length}`,rural:.2,urban:.5,crew:1,power:1,type:`melee`,separate:0}),[i(`Restore`)]:v,[i(`Cancel`)]:function(){$(this).dialog(`close`)}},open:function(){let e=$(this).dialog(`widget`).find(`.ui-dialog-buttonset > button`);e[0].addEventListener(`mousemove`,()=>g(`${i(`Apply military units settings.`)} <span style="color:#cb5858">${i(`All forces will be recalculated!`)}</span>`)),e[1].addEventListener(`mousemove`,()=>g(i(`Add`))),e[2].addEventListener(`mousemove`,()=>g(i(`Restore default military units and settings`))),e[3].addEventListener(`mousemove`,()=>g(i(`Close the window without saving the changes`)))}}),a.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t)return;let n=t.dataset.type;if(n===`icon`)_.IconPicker.open({current:t.dataset.icon||``,onPick:e=>h(t,e)});else if(n===`biomes`)y(t,pack.biomes.filter(e=>!e.removed).map(({i:e,name:t,color:n})=>({i:e,name:t,color:n})));else{if(n===`states`)return y(t,pack.states);if(n===`cultures`)return y(t,pack.cultures);if(n===`religions`)return y(t,pack.religions)}});function o(){a.querySelectorAll(`tr`).forEach(e=>{e.remove()})}function s(e){return e?.join(`,`)||``}function c(e){return e?.length?`some`:`all`}function u(e,t){return e?.length?k(e,t):``}let f={biomes:i(`Select allowed biomes`),states:i(`Select allowed states`),cultures:i(`Select allowed cultures`),religions:i(`Select allowed religions`)};function p(t){let{type:o,icon:l,name:d,rural:p,urban:m,power:g,crew:_,separate:v}=t,y=document.createElement(`tr`),b=e.map(e=>`<option ${o===e?`selected`:``} value="${e}">${e}</option>`).join(` `),x=e=>{let r=pack[e];return`<button
          data-tip="${f[e]}"
          data-type="${e}"
          title="${n(u(t[e],r))}"
          data-value="${s(t[e])}">
          ${c(t[e])}
        </button>`};y.innerHTML=`<td>
          <button data-type="icon" data-tip="${i(`Click to select unit icon`)}" translate="no"></button>
        </td>
        <td><input data-tip="${r(i(`Name`),i(`If name is changed for existing unit, old unit will be replaced`))}" value="${d}" /></td>
        <td>${x(`biomes`)}</td>
        <td>${x(`states`)}</td>
        <td>${x(`cultures`)}</td>
        <td>${x(`religions`)}</td>
        <td><input data-tip="${i(`Conscription percentage for rural population`)}" type="number" min="0" max="100" step=".01" value="${p}" /></td>
        <td><input data-tip="${i(`Conscription percentage for urban population`)}" type="number" min="0" max="100" step=".01" value="${m}" /></td>
        <td><input data-tip="${i(`Average number of people in crew (used for total personnel calculation)`)}" type="number" min="1" step="1" value="${_}" /></td>
        <td><input data-tip="${i(`Unit military power (used for battle simulation)`)}" type="number" min="0" step=".1" value="${g}" /></td>
        <td>
          <select data-tip="${i(`Unit type to apply special rules on forces recalculation`)}">
            ${b}
          </select>
        </td>
        <td data-tip="${i(`Check if unit is separate and can be stacked only with units of the same type`)}">
          <input id="${d}Separate" type="checkbox" class="checkbox" ${v?`checked`:``} />
          <label for="${d}Separate" class="checkbox-label"></label>
        </td>
        <td data-tip="${i(`Remove`)}">
          <span data-tip="${i(`Remove`)}" class="icon-trash-empty pointer" onclick="this.parentElement.parentElement.remove();"></span>
        </td>`,h(y.querySelector(`button[data-type='icon']`),l||``),a.appendChild(y)}function h(e,t){e.dataset.icon=t,e.innerHTML=m.html(t)}function v(){o(),Military.getDefaultOptions().map(e=>p(e))}function y(e,t){let n=e.dataset.type;O({title:i(`Limit unit`),heading:i(`Limit unit by {{type}}`,{type:n}),items:t,allowed:e.dataset.value?e.dataset.value.split(`,`).map(Number):[],onApply:n=>{e.dataset.value=n.join(`,`),e.innerHTML=c(n),e.setAttribute(`title`,u(n,t))}})}function b(){let e=Array.from(a.querySelectorAll(`tr`)),n=e.map(e=>t(e.querySelector(`input`).value));if(new Set(n).size!==n.length){g(i(`All units should have unique names`),!1,`error`);return}$(`#militaryOptions`).dialog(`close`);let r=e.map((e,t)=>{let[r,,i,a,o,s,c,l,u,d,f,p]=Array.from(e.querySelectorAll(`input, button, select`)).map(e=>{let{type:t,value:n}=e.dataset||{};return t===`icon`?e.dataset.icon??``:t?n?n.split(`,`).map(e=>parseInt(e,10)):null:e.type===`number`?+e.value||0:e.type===`checkbox`?+e.checked||0:e.value}),m={icon:r,name:n[t],rural:c,urban:l,crew:u,power:d,type:f,separate:p};return i&&(m.biomes=i),a&&(m.states=a),o&&(m.cultures=o),s&&(m.religions=s),m});options.map.military.units=r,Options.save(),B(),x({title:i(`Recalculate military`),message:`${i(`Units are saved. Recalculate military forces for all states?`)}<br>${i(`Regiments for all states will be regenerated, so manual changes to them will be lost`)}`,confirm:i(`Recalculate`),cancel:i(`Keep regiments`),onConfirm:()=>{Military.generate(),d.draw(`military`),H()}})}}function X(){v(`militaryOptions`);let e=`<div id="militaryOptions" class="dialog stable">
      <div class="table">
        <table id="militaryOptionsTable">
          <thead>
            <tr>
              <th data-tip="${i(`Unit icon`)}">${i(`Icon`)}</th>
              <th data-tip="${r(i(`Name`),i(`If name is changed for existing unit, old unit will be replaced`))}">${i(`Name`)}</th>
              <th style="width: 5em" data-tip="${i(`Select allowed biomes`)}">${i(`Biomes`)}</th>
              <th style="width: 5em" data-tip="${i(`Select allowed states`)}">${i(`States`)}</th>
              <th style="width: 5em" data-tip="${i(`Select allowed cultures`)}">${i(`Cultures`)}</th>
              <th style="width: 5em" data-tip="${i(`Select allowed religions`)}">${i(`Religions`)}</th>
              <th data-tip="${i(`Conscription percentage for rural population`)}">${i(`Rural`)}</th>
              <th data-tip="${i(`Conscription percentage for urban population`)}">${i(`Urban`)}</th>
              <th data-tip="${i(`Average number of people in crew (used for total personnel calculation)`)}">${i(`Crew`)}</th>
              <th data-tip="${i(`Unit military power (used for battle simulation)`)}">${i(`Power`)}</th>
              <th data-tip="${i(`Unit type to apply special rules on forces recalculation`)}">${i(`Type`)}</th>
              <th data-tip="${i(`Check if unit is separate and can be stacked only with units of the same type`)}">
                ${i(`Separate`)}
              </th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>`;l(`dialogs`).insertAdjacentHTML(`beforeend`,e)}function Z(){$(`#militaryOptions`).dialog(`destroy`),l(`militaryOptions`).remove()}function te(){x({title:i(`Recalculate military`),message:`${i(`Are you sure you want to recalculate military forces for all states?`)}<br>${i(`Regiments for all states will be regenerated`)}`,confirm:i(`Recalculate`),onConfirm:()=>{Military.generate(),d.draw(`military`),H()}})}function Q(){let t=options.map.military.units.map(e=>e.name),n=[`Id`,`State`,...t.map(e=>a(e)),`Total`,`Population`,`Rate`,`War Alert`],r=V().map(n=>[n.state.i,n.state.name,...t.map(e=>n.forces[e]||0),n.total,n.population,`${e(n.rate,2)}%`,n.alert]);p.download(`Military`,n,r)}var ne={open:P,exportCsv:Q};export{ne as MilitaryOverview};