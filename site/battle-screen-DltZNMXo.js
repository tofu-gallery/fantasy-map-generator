import{C as e,f as t,n,r,u as i,x as a}from"./index-CuUJKJN8.js";import{B as o,I as s,bt as c,ct as l,dn as u,gt as d,it as f,lt as p,nt as ee,z as m}from"./utils-394NS37_.js";import{N as h,t as g}from"./layers-CpGI7aJd.js";import{t as _}from"./mean-4Awewi9R.js";import{t as v}from"./sum-BpJJqxFM.js";import{i as y}from"./emblems-generator-B3pPl-l-.js";import{i as b}from"./tooltips-7PimaK30.js";import{n as x}from"./dialog-helpers-kMHr89OS.js";import{n as S,t as C}from"./app-C3meBrse.js";var w=null;function T(e,t){if(customization)return;x(`.stable`),customization=13,E();let n=t.x,r=t.y;w={iteration:0,x:n,y:r,cell:Pack.findCell(n,r)??0,attackers:{regiments:[],distances:[],morale:100,casualties:0,power:0},defenders:{regiments:[],distances:[],morale:100,casualties:0,power:0},phasesRecord:[],place:null,type:`field`,name:``},M(),N(`attackers`,e),N(`defenders`,t),w.place=k(),D(),w.name=A(),B(),L(`attackers`),L(`defenders`),R(),$(`#battleScreen`).dialog({title:w.name,resizable:!1,width:`fit-content`,position:{my:`center`,at:`center`,of:`#map`},close:X})}function E(){o(`battleScreen`)?.remove(),o(`regimentSelectorScreen`)?.remove();let e=`<div id="battleScreen" class="dialog stable">
      <div id="battleBody">
        <template id="battlePhases_field">
          <button
            data-tip="${r(`Skirmish phase. Ranged units excel`)}"
            data-phase="skirmish"
            class="icon-button-skirmish"
          ></button>
          <button data-tip="${n(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${n(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${n(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_naval">
          <button
            data-tip="${r(`Shelling phase. Naval artillery bombardment of enemy fleet`)}"
            data-phase="shelling"
            class="icon-button-shelling"
          ></button>
          <button
            data-tip="${r(`Boarding phase. Melee units go aboard`)}"
            data-phase="boarding"
            class="icon-button-boarding"
          ></button>
          <button
            data-tip="${r(`Сhase phase. Naval units pursue and rarely shell enemy fleet`)}"
            data-phase="chase"
            class="icon-button-chase"
          ></button>
          <button
            data-tip="${r(`Withdrawal phase. Naval units try to escape enemy fleet`)}"
            data-phase="withdrawal"
            class="icon-button-withdrawal"
          ></button>
        </template>
        <template id="battlePhases_siege_attackers">
          <button
            data-tip="${r(`Blockade phase. Prepare or hold the blockade`)}"
            data-phase="blockade"
            class="icon-button-blockade"
          ></button>
          <button
            data-tip="${r(`Bombardment phase. Attack enemy with machinery units`)}"
            data-phase="bombardment"
            class="icon-button-bombardment"
          ></button>
          <button
            data-tip="${n(r(`Storming phase`),r(`Storm enemy town`),r(`Melee units excel`))}"
            data-phase="storming"
            class="icon-button-storming"
          ></button>
          <button
            data-tip="${n(r(`Looting phase`),r(`Plunder the town`),r(`Units strength increased`))}"
            data-phase="looting"
            class="icon-button-looting"
          ></button>
          <button
            data-tip="${n(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_siege_defenders">
          <button
            data-tip="${r(`Sheltering phase. Hide behind the walls and wait`)}"
            data-phase="sheltering"
            class="icon-button-sheltering"
          ></button>
          <button
            data-tip="${n(r(`Sortie phase`),r(`Make a sortie from besieged town`),r(`Melee units excel`))}"
            data-phase="sortie"
            class="icon-button-sortie"
          ></button>
          <button
            data-tip="${r(`Bombardment phase. Attack enemy with machinery units`)}"
            data-phase="bombardment"
            class="icon-button-bombardment"
          ></button>
          <button
            data-tip="${n(r(`Defense phase`),r(`Ranged and melee units excel`))}"
            data-phase="defense"
            class="icon-button-defense"
          ></button>
          <button
            data-tip="${n(r(`Surrendering phase`),r(`Give up the defense`),r(`Units strength reduced`))}"
            data-phase="surrendering"
            class="icon-button-surrendering"
          ></button>
          <button
            data-tip="${n(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
        </template>
        <template id="battlePhases_ambush_attackers">
          <button
            data-tip="${n(r(`Shock phase`),r(`Units strength reduced`))}"
            data-phase="shock"
            class="icon-button-shock"
          ></button>
          <button data-tip="${n(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${n(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${n(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_ambush_defenders">
          <button
            data-tip="${r(`Surprice attack phase. Units strength increased, ranged units excel`)}"
            data-phase="surprise"
            class="icon-button-surprise"
          ></button>
          <button data-tip="${n(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${n(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${n(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_landing_attackers">
          <button
            data-tip="${r(`Landing phase. Amphibious attack. Units are vulnerable against prepared defense`)}"
            data-phase="landing"
            class="icon-button-landing"
          ></button>
          <button data-tip="${n(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${n(r(`Pursue phase`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button data-tip="${n(r(`Flee phase`),r(`Units strength reduced`))}" data-phase="flee" class="icon-button-flee"></button>
        </template>
        <template id="battlePhases_landing_defenders">
          <button
            data-tip="${n(r(`Shock phase`),r(`Units are not prepared for a defense`))}"
            data-phase="shock"
            class="icon-button-shock"
          ></button>
          <button
            data-tip="${n(r(`Defense phase`),r(`Prepared defense`),r(`Units strength increased`))}"
            data-phase="defense"
            class="icon-button-defense"
          ></button>
          <button data-tip="${n(r(`Melee phase`),r(`Melee units excel`))}" data-phase="melee" class="icon-button-melee"></button>
          <button
            data-tip="${r(`Waiting phase. Cannot pursue fleeing naval`)}"
            data-phase="waiting"
            class="icon-button-waiting"
          ></button>
          <button
            data-tip="${n(r(`Pursue phase`),r(`Try to intercept fleeing attackers`),r(`Mounted units excel`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${n(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <template id="battlePhases_air">
          <button
            data-tip="${n(r(`Maneuvering phase`),r(`Units strength reduced`))}"
            data-phase="maneuvering"
            class="icon-button-maneuvering"
          ></button>
          <button
            data-tip="${n(r(`Dogfight phase`),r(`Units strength increased`))}"
            data-phase="dogfight"
            class="icon-button-dogfight"
          ></button>
          <button
            data-tip="${n(r(`Pursue phase`),r(`Units strength increased`))}"
            data-phase="pursue"
            class="icon-button-pursue"
          ></button>
          <button
            data-tip="${n(r(`Retreat phase`),r(`Units strength reduced`))}"
            data-phase="retreat"
            class="icon-button-retreat"
          ></button>
        </template>
        <div style="font-size: 1.2em; font-weight: bold; width: unset">
          <span>${r(`Attackers`)}</span>
          <div style="float: right; font-size: 0.7em">
            <meter
              id="battleMorale_attackers"
              data-tip="${r(`Attackers morale`)}: "
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
            ></meter>
            <div
              id="battlePower_attackers"
              data-tip="${n(r(`Attackers strength during this phase`),r(`Strength defines dealt damage`))}"
              style="display: inline-block; text-align: center"
              class="icon-button-power"
            ></div>
            <div style="display: inline-block">
              <button id="battlePhase_attackers" style="width: 3.2em"></button>
              <div class="battlePhases" style="display: none"></div>
            </div>
            <button
              id="battleDie_attackers"
              data-tip="${n(r(`Random factor for attackers`),r(`Click to re-roll`))}"
              style="padding: 0.1em 0.2em; width: 3.2em"
              class="icon-button-die"
            ></button>
          </div>
        </div>
        <table id="battleAttackers"></table>
        <div style="font-size: 1.2em; font-weight: bold; width: unset">
          <span>${r(`Defenders`)}</span>
          <div style="float: right; font-size: 0.7em">
            <meter
              id="battleMorale_defenders"
              data-tip="${r(`Defenders morale`)}: "
              min="0"
              max="100"
              low="33"
              high="66"
              optimum="80"
            ></meter>
            <div
              id="battlePower_defenders"
              data-tip="${n(r(`Defenders strength during this phase`),r(`Strength defines dealt damage`))}"
              style="display: inline-block; text-align: center"
              class="icon-button-power"
            ></div>
            <div style="display: inline-block">
              <button id="battlePhase_defenders" style="width: 3.2em"></button>
              <div class="battlePhases" style="display: none"></div>
            </div>
            <button
              id="battleDie_defenders"
              data-tip="${n(r(`Random factor for defenders`),r(`Click to re-roll`))}"
              style="padding: 0.1em 0.2em; width: 3.2em"
              class="icon-button-die"
            ></button>
          </div>
        </div>
        <table id="battleDefenders"></table>
      </div>
      <div id="battleBottom">
        <button id="battleType" data-tip="${n(r(`Battle type`),r(`Click to change`))}"></button>
        <div class="battleTypes" style="display: none">
          <button
            data-tip="${r(`Field Battle: a standard type of combat`)}"
            data-type="field"
            class="icon-button-field"
          ></button>
          <button data-tip="${r(`Naval Battle: naval units combat`)}" data-type="naval" class="icon-button-naval"></button>
          <button data-tip="${r(`Siege: burg blockade and storming`)}" data-type="siege" class="icon-button-siege"></button>
          <button data-tip="${r(`Ambush: surprise attack`)}" data-type="ambush" class="icon-button-ambush"></button>
          <button data-tip="${r(`Landing: amphibious attack`)}" data-type="landing" class="icon-button-landing"></button>
          <button
            data-tip="${r(`Air Battle: maneuring fight of avia units`)}"
            data-type="air"
            class="icon-button-air"
          ></button>
        </div>
        <button id="battleNameShow" data-tip="${r(`Set battle name`)}" class="icon-font"></button>
        <div id="battleNameSection" style="display: none">
          <button id="battleNameHide" data-tip="${r(`Hide`)}" class="icon-font"></button>
          <input id="battleNamePlace" data-tip="${r(`Type place name`)}" style="width: 30%" />
          <input id="battleNameFull" data-tip="${r(`Type full battle name`)}" style="width: 46%" />
          <button
            id="battleNameCulture"
            data-tip="${r(`Generate culture-specific name`)}"
            class="icon-book"
          ></button>
          <button
            id="battleNameRandom"
            data-tip="${r(`Generate random name`)}"
            class="icon-globe"
          ></button>
        </div>
        <button id="battleAddRegiment" data-tip="${r(`Add regiment to the battle`)}" class="icon-user-plus"></button>
        <button id="battleRoll" data-tip="${r(`Roll dice to update random factor`)}" class="icon-die"></button>
        <button id="battleRun" data-tip="${r(`Iterate battle`)}" class="icon-play"></button>
        <button
          id="battleApply"
          data-tip="${r(`End battle: apply current results and close the screen`)}"
          class="icon-check"
        ></button>
        <button
          id="battleCancel"
          data-tip="${r(`Cancel battle: roll back results and close the screen`)}"
          class="icon-cancel"
        ></button>
        <button id="battleWiki" data-tip="${r(`Open Battle Simulation Tutorial`)}" class="icon-info"></button>
      </div>
    </div>
    <div id="regimentSelectorScreen" class="dialog">
      <div id="regimentSelectorHeader" class="header" style="grid-template-columns: 9em 13em 4em 6em">
        <div data-tip="${r(`Click to sort`)}" class="sortable alphabetically" data-sortby="state">
          ${r(`State`)}&nbsp;
        </div>
        <div data-tip="${r(`Click to sort`)}" class="sortable alphabetically" data-sortby="regiment">
          ${r(`Regiment`)}&nbsp;
        </div>
        <div data-tip="${r(`Click to sort`)}" class="sortable" data-sortby="total">${r(`Total`)}&nbsp;</div>
        <div
          data-tip="${r(`Click to sort`)}"
          class="sortable icon-sort-number-up"
          data-sortby="distance"
        >
          ${r(`Distance`)}&nbsp;
        </div>
      </div>
      <div id="regimentSelectorBody" class="table"></div>
    </div>`;m(`dialogs`).insertAdjacentHTML(`beforeend`,e),S(`battleScreen`,`regimentSelectorHeader`),m(`battleType`).addEventListener(`click`,e=>K(e)),m(`battleType`).nextElementSibling.addEventListener(`click`,e=>q(e)),m(`battleNameShow`).addEventListener(`click`,()=>ne()),m(`battleNamePlace`).addEventListener(`change`,e=>{w&&(w.place=e.target.value)}),m(`battleNameFull`).addEventListener(`change`,e=>P(e)),m(`battleNameCulture`).addEventListener(`click`,()=>F(`culture`)),m(`battleNameRandom`).addEventListener(`click`,()=>F(`random`)),m(`battleNameHide`).addEventListener(`click`,()=>re()),m(`battleAddRegiment`).addEventListener(`click`,()=>te()),m(`battleRoll`).addEventListener(`click`,()=>B()),m(`battleRun`).addEventListener(`click`,()=>U()),m(`battleApply`).addEventListener(`click`,()=>Y()),m(`battleCancel`).addEventListener(`click`,()=>X()),m(`battleWiki`).addEventListener(`click`,()=>s(`Battle-Simulator`)),m(`battlePhase_attackers`).addEventListener(`click`,e=>K(e)),m(`battlePhase_attackers`).nextElementSibling.addEventListener(`click`,e=>J(e,`attackers`)),m(`battlePhase_defenders`).addEventListener(`click`,e=>K(e)),m(`battlePhase_defenders`).nextElementSibling.addEventListener(`click`,e=>J(e,`defenders`)),m(`battleDie_attackers`).addEventListener(`click`,()=>V(`attackers`)),m(`battleDie_defenders`).addEventListener(`click`,()=>V(`defenders`))}function D(){let e=w,t=e.attackers.regiments[0],n=e.defenders.regiments[0];e.type=(()=>{let r=Object.keys(t.u).map(e=>options.map.military.units.find(t=>t.name===e).type),i=Object.keys(n.u).map(e=>options.map.military.units.find(t=>t.name===e).type);return t.n&&n.n?`naval`:r.every(e=>e===`aviation`)&&i.every(e=>e===`aviation`)?`air`:t.n&&!n.n&&r.some(e=>e!==`naval`)?`landing`:!n.n&&(pack.burgs[pack.cells.burg[e.cell]].walls||pack.burgs[pack.cells.burg[e.cell]].citadel)?`siege`:l(.1)&&[5,6,7,8,9,12].includes(pack.cells.biome[e.cell])?`ambush`:`field`})(),O()}function O(){let e=w;m(`battleType`).className=`icon-button-${e.type}`;let t=o(`battlePhases_${e.type}_attackers`),n=t?t.content:m(`battlePhases_${e.type}`).content,r=t?m(`battlePhases_${e.type}_defenders`).content:n,i=m(`battlePhase_attackers`).nextElementSibling,a=m(`battlePhase_defenders`).nextElementSibling;i.innerHTML=``,a.innerHTML=``,i.append(n.cloneNode(!0)),a.append(r.cloneNode(!0))}function k(){let e=pack.cells,t=w.cell,n=e.burg[t]?pack.burgs[e.burg[t]].name:null,r=!n&&e.r[t]?(e=>{let t=pack.rivers.find(t=>t.i===e);return`${t.name} ${t.type}`})(e.r[t]):null,i=n||r?null:Names.getCulture(e.culture[t]);return n||r||i}function A(){let e=w;return e.type===`field`?`Battle of ${e.place}`:e.type===`naval`?`Naval Battle of ${e.place}`:e.type===`siege`?`Siege of ${e.place}`:e.type===`ambush`?`${e.place} Ambush`:e.type===`landing`?`${e.place} Landing`:`${e.place} ${l(.8)?`Air Battle`:`Dogfight`}`}function j(){let e=w;return e.type===`field`?`field battle`:e.type===`naval`?`naval battle`:e.type===`siege`?`siege`:e.type===`ambush`?`ambush`:e.type===`landing`?`landing`:`battle`}function M(){let e=`<thead><tr><th></th><th></th>`;for(let t of options.map.military.units){let n=i(t.name.replace(/_/g,` `));e+=`<th data-tip="${n}">${y.html(t.icon)}</th>`}e+=`<th data-tip="${r(`Total military forces`)}">${r(`Total`)}</th></tr></thead>`,m(`battleAttackers`).innerHTML=e,m(`battleDefenders`).innerHTML=e}function N(e,n){let i=w;n.casualties=Object.keys(n.u).reduce((e,t)=>(e[t]=0,e),{}),n.survivors={...n.u};let a=pack.states[n.state],o=Math.hypot(i.y-n.by,i.x-n.bx)*options.map.units.distance.scale|0,s=`<svg width="1.4em" height="1.4em" style="margin-bottom: -.6em; stroke: #333">
      <rect x="0" y="0" width="100%" height="100%" fill="${a.color?.[0]===`#`?a.color:`#999`}"></rect>
      <use href="${t(y.href(n.icon??``))}" x="10%" y="10%" width="80%" height="80%" stroke="none"></use></svg>`,c=`<tbody id="battle${a.i}-${n.i}">`,l=`<tr class="battleInitial"><td>${s}</td><td class="regiment" data-tip="${n.name}">${n.name.slice(0,24)}</td>`,u=`<tr class="battleCasualties"><td></td><td data-tip="${a.fullName}">${a.fullName.slice(0,26)}</td>`,d=`<tr class="battleSurvivors"><td></td><td data-tip="${r(`Supply line length, affects morale`)}">${r(`Distance to base`)}: ${o} ${options.map.units.distance.unit}</td>`;for(let e of options.map.military.units)l+=`<td data-tip="${r(`Initial forces`)}" style="width: 2.5em; text-align: center">${n.u[e.name]||0}</td>`,u+=`<td data-tip="${r(`Casualties`)}" style="width: 2.5em; text-align: center; color: red">0</td>`,d+=`<td data-tip="${r(`Survivors`)}" style="width: 2.5em; text-align: center; color: green">${n.u[e.name]||0}</td>`;l+=`<td data-tip="${r(`Initial forces`)}" style="width: 2.5em; text-align: center">${n.a||0}</td></tr>`,u+=`<td data-tip="${r(`Casualties`)}"  style="width: 2.5em; text-align: center; color: red">0</td></tr>`,d+=`<td data-tip="${r(`Survivors`)}" style="width: 2.5em; text-align: center; color: green">${n.a||0}</td></tr>`;let f=m(e===`attackers`?`battleAttackers`:`battleDefenders`);f.innerHTML+=`${c+l+u+d}</tbody>`,i[e].regiments.push(n),i[e].distances.push(o)}function te(){let t=w,n=m(`regimentSelectorBody`),i=pack.states.filter(e=>e.military&&!e.removed).flatMap(e=>e.military),a=n=>e(Math.hypot(t.y-n.y,t.x-n.x)*options.map.units.distance.scale),o=e=>t.defenders.regiments.some(t=>t===e)||t.attackers.regiments.some(t=>t===e);n.innerHTML=i.map(e=>{let t=pack.states[e.state],n=o(e),i=n?0:a(e),s=`${i} ${options.map.units.distance.unit}`;return`<div ${n?`class='inactive'`:``} data-s=${t.i} data-i=${e.i} data-state=${t.name} data-regiment=${e.name}
        data-total=${e.a} data-distance="${i}" data-tip="${r(`Click to select regiment`)}">
        <svg width=".9em" height=".9em" style="margin-bottom:-1px; stroke: #333"><rect x="0" y="0" width="100%" height="100%" fill="${t.color}" ></svg>
        <div style="width:6em">${t.name.slice(0,11)}</div>
        <div style="width:1.2em; display:flex">${y.html(e.icon??``)}</div>
        <div style="width:13em">${e.name.slice(0,24)}</div>
        <div style="width:4em">${e.a}</div>
        <div style="width:4em">${s}</div>
      </div>`}).join(``),$(`#regimentSelectorScreen`).dialog({resizable:!1,width:`fit-content`,title:r(`Add regiment to the battle`),position:{my:`left center`,at:`right+10 center`,of:`#battleScreen`},close:l,buttons:{[r(`Add to attackers`)]:()=>c(`attackers`),[r(`Add to defenders`)]:()=>c(`defenders`),[r(`Cancel`)]:()=>$(`#regimentSelectorScreen`).dialog(`close`)}}),C(m(`regimentSelectorHeader`)),n.addEventListener(`click`,s);function s(e){let t=e.target;t.className===`inactive`?b(r(`Regiment is already in the battle`),!1,`error`):t.classList.toggle(`selected`)}function c(e){let i=n.querySelectorAll(`.selected`);i.length?($(`#regimentSelectorScreen`).dialog(`close`),i.forEach(n=>{let r=pack.states[+n.dataset.s].military.find(e=>e.i===+n.dataset.i);N(e,r),L(e),R();let i=t.defenders.regiments,a=t.attackers.regiments,o=e===`attackers`?a.length*-8:(i.length-1)*8;r.px=r.x,r.py=r.y,h(r,i[0].x,i[0].y+o)})):b(r(`Please select a regiment first`),!1,`error`)}function l(){n.innerHTML=``,n.removeEventListener(`click`,s)}}function ne(){document.querySelectorAll(`#battleBottom > button`).forEach(e=>{e.style.display=`none`}),m(`battleNameSection`).style.display=`inline-block`,m(`battleNamePlace`).value=w.place??``,m(`battleNameFull`).value=w.name}function re(){document.querySelectorAll(`#battleBottom > button`).forEach(e=>{e.style.display=`inline-block`}),m(`battleNameSection`).style.display=`none`}function P(e){let t=e.target.value;w.name=t,$(`#battleScreen`).dialog({title:t})}function F(e){let t=w,n=e===`culture`?Names.getCulture(pack.cells.culture[t.cell],void 0,void 0,``):Names.getBase(d(Names.nameBases.length-1));t.place=n,m(`battleNamePlace`).value=n,t.name=A(),m(`battleNameFull`).value=t.name,$(`#battleScreen`).dialog({title:t.name})}function I(e){return e.reduce((e,t)=>{for(let n in t.survivors)Object.hasOwn(t.survivors,n)&&(e[n]=(e[n]||0)+t.survivors[n]);return e},{})}function L(e){let t=w,n={skirmish:{melee:.2,ranged:2.4,mounted:.1,machinery:3,naval:1,armored:.2,aviation:1.8,magical:1.8},melee:{melee:2,ranged:1.2,mounted:1.5,machinery:.5,naval:.2,armored:2,aviation:.8,magical:.8},pursue:{melee:1,ranged:1,mounted:4,machinery:.05,naval:1,armored:1,aviation:1.5,magical:.6},retreat:{melee:.1,ranged:.01,mounted:.5,machinery:.01,naval:.2,armored:.1,aviation:.8,magical:.05},shelling:{melee:0,ranged:.2,mounted:0,machinery:2,naval:2,armored:0,aviation:.1,magical:.5},boarding:{melee:1,ranged:.5,mounted:.5,machinery:0,naval:.5,armored:.4,aviation:0,magical:.2},chase:{melee:0,ranged:.15,mounted:0,machinery:1,naval:1,armored:0,aviation:.15,magical:.5},withdrawal:{melee:0,ranged:.02,mounted:0,machinery:.5,naval:.1,armored:0,aviation:.1,magical:.3},blockade:{melee:.25,ranged:.25,mounted:.2,machinery:.5,naval:.2,armored:.1,aviation:.25,magical:.25},sheltering:{melee:.3,ranged:.5,mounted:.2,machinery:.5,naval:.2,armored:.1,aviation:.25,magical:.25},sortie:{melee:2,ranged:.5,mounted:1.2,machinery:.2,naval:.1,armored:.5,aviation:1,magical:1},bombardment:{melee:.2,ranged:.5,mounted:.2,machinery:3,naval:1,armored:.5,aviation:1,magical:1},storming:{melee:1,ranged:.6,mounted:.5,machinery:1,naval:.1,armored:.1,aviation:.5,magical:.5},defense:{melee:2,ranged:3,mounted:1,machinery:1,naval:.1,armored:1,aviation:.5,magical:1},looting:{melee:1.6,ranged:1.6,mounted:.5,machinery:.2,naval:.02,armored:.2,aviation:.1,magical:.3},surrendering:{melee:.1,ranged:.1,mounted:.05,machinery:.01,naval:.01,armored:.02,aviation:.01,magical:.03},surprise:{melee:2,ranged:2.4,mounted:1,machinery:1,naval:1,armored:1,aviation:.8,magical:1.2},shock:{melee:.5,ranged:.5,mounted:.5,machinery:.4,naval:.3,armored:.1,aviation:.4,magical:.5},landing:{melee:.8,ranged:.6,mounted:.6,machinery:.5,naval:.5,armored:.5,aviation:.5,magical:.6},flee:{melee:.1,ranged:.01,mounted:.5,machinery:.01,naval:.5,armored:.1,aviation:.2,magical:.05},waiting:{melee:.05,ranged:.5,mounted:.05,machinery:.5,naval:2,armored:.05,aviation:.5,magical:.5},maneuvering:{melee:0,ranged:.1,mounted:0,machinery:.2,naval:0,armored:0,aviation:1,magical:.2},dogfight:{melee:0,ranged:.1,mounted:0,machinery:.1,naval:0,armored:0,aviation:2,magical:.1}},r=I(t[e].regiments),i=t[e].phase,a=Math.max(options.map.units.population.scale/10,10);t[e].power=v(options.map.military.units.map(e=>(r[e.name]||0)*e.power*n[i][e.type]))/a;let o=t[e].power?Math.max(t[e].power|0,1):0;m(`battlePower_${e}`).innerHTML=String(o)}function R(){let e=w,t=e=>a(100-e**1.5*10+10,50,100),n=e=>Math.min((_(e)??0)/50,15),r=e.defenders.power/e.attackers.power;e.attackers.morale=t(r)-n(e.attackers.distances),e.defenders.morale=t(1/r)-n(e.defenders.distances),z(`attackers`),z(`defenders`)}function z(e){let t=w,n=m(`battleMorale_${e}`);n.dataset.tip=(n.dataset.tip||``).replace(n.value,``),n.value=String(t[e].morale|0),n.dataset.tip+=n.value}function B(){V(`attackers`),V(`defenders`),H(),L(`attackers`),L(`defenders`)}function V(e){let t=w,n=m(`battleDie_${e}`),r=+n.innerHTML,i;do i=d(1,6),n.innerHTML=String(i);while(i===r);t[e].die=i}function H(){let e=w,t=e.iteration,n=[e.attackers.morale,e.defenders.morale],r=e.attackers.power/e.defenders.power,i=()=>{let r=[e.attackers.phase||`skirmish`,e.defenders.phase||`skirmish`];if(l(1-n[0]/25))return[`retreat`,`pursue`];if(l(1-n[1]/25))return[`pursue`,`retreat`];if(r[0]===`skirmish`&&r[1]===`skirmish`){let n=I(e.attackers.regiments.concat(e.defenders.regiments)),r=v(Object.values(n)),i=v(options.map.military.units.filter(e=>e.type===`ranged`).map(e=>e.name).map(e=>n[e]))/r;if(l(i)||l(.8-t/10))return[`skirmish`,`skirmish`]}return[`melee`,`melee`]},a=()=>{let n=[e.attackers.phase||`shelling`,e.defenders.phase||`shelling`];if(n[0]===`withdrawal`)return[`withdrawal`,`chase`];if(n[0]===`chase`)return[`chase`,`withdrawal`];if(n[0]!==`boarding`){if(r<.5||l(e.attackers.casualties)&&r<1)return[`withdrawal`,`chase`];if(r>2||l(e.defenders.casualties)&&r>1)return[`chase`,`withdrawal`]}return n[0]===`boarding`||l(t/10-.1)?[`boarding`,`boarding`]:[`shelling`,`shelling`]},o=()=>{let i=[e.attackers.phase||`blockade`,e.defenders.phase||`sheltering`],a=[`blockade`,`sheltering`];if(i[0]===`retreat`||i[0]===`looting`)return i;if(l(1-n[0]/30)&&r<1)return[`retreat`,`pursue`];if(l(1-n[1]/15))return[`looting`,`surrendering`];if(l((r-1)/2))return[`storming`,`defense`];if(i[0]!==`storming`){let r=options.map.military.units.filter(e=>e.type===`machinery`).map(e=>e.name),o=I(e.attackers.regiments),s=v(r.map(e=>o[e]));t&&s&&l(.9)&&(a[0]=`bombardment`);let c=I(e.defenders.regiments),u=v(r.map(e=>c[e]));u&&l(.9)&&(a[1]=`bombardment`),t&&i[1]!==`sortie`&&u<s&&l(.25)&&l(n[1]/70)&&(a[1]=`sortie`)}return a},s=()=>[e.attackers.phase||`shock`,e.defenders.phase||`surprise`][1]===`surprise`&&l(1-r*t/5)?[`shock`,`surprise`]:l(1-n[0]/25)?[`retreat`,`pursue`]:l(1-n[1]/25)?[`pursue`,`retreat`]:[`melee`,`melee`],c=()=>{let r=[e.attackers.phase||`landing`,e.defenders.phase||`defense`];return r[1]===`waiting`?[`flee`,`waiting`]:r[1]===`pursue`?[`flee`,l(.3)?`pursue`:`waiting`]:r[1]===`retreat`?[`pursue`,`retreat`]:r[0]===`landing`?[l(t/2)?`melee`:`landing`,t?r[1]:l(.5)?`defense`:`shock`]:l(1-n[0]/40)?[`flee`,`pursue`]:l(1-n[1]/25)?[`pursue`,`retreat`]:[`melee`,`melee`]},u=()=>{let r=[e.attackers.phase||`maneuvering`,e.defenders.phase||`maneuvering`];return l(1-n[0]/25)?[`retreat`,`pursue`]:l(1-n[1]/25)?[`pursue`,`retreat`]:r[0]===`maneuvering`&&l(1-t/10)?[`maneuvering`,`maneuvering`]:[`dogfight`,`dogfight`]},d=(()=>{switch(e.type){case`field`:return i();case`naval`:return a();case`siege`:return o();case`ambush`:return s();case`landing`:return c();case`air`:return u();default:return i()}})();e.attackers.phase=d[0],e.defenders.phase=d[1];let f=m(`battlePhase_attackers`);f.className=`icon-button-${e.attackers.phase}`,f.dataset.tip=f.nextElementSibling.querySelector(`[data-phase='${d[0]}']`).dataset.tip;let p=m(`battlePhase_defenders`);p.className=`icon-button-${e.defenders.phase}`,p.dataset.tip=p.nextElementSibling.querySelector(`[data-phase='${d[1]}']`).dataset.tip}function U(){let e=w;if(!e.attackers.power){b(r(`Attackers army destroyed`),!1,`warn`);return}if(!e.defenders.power){b(r(`Defenders army destroyed`),!1,`warn`);return}let t=`Attackers: ${e.attackers.phase}, defenders: ${e.defenders.phase}`,n=e.phasesRecord.at(-1);n?.phase===t?n.count+=1:e.phasesRecord.push({phase:t,count:1});let i=e.attackers.power*(e.attackers.die/10+.4),a=e.defenders.power*(e.defenders.die/10+.4),o={skirmish:.1,melee:.2,pursue:.3,retreat:.3,boarding:.2,shelling:.1,chase:.03,withdrawal:.03,blockade:0,sheltering:0,sortie:.1,bombardment:.05,storming:.2,defense:.2,looting:.5,surrendering:.5,surprise:.3,shock:.3,landing:.3,flee:0,waiting:0,maneuvering:.1,dogfight:.2},s=Math.random()*Math.max(o[e.attackers.phase],o[e.defenders.phase]),c=s*a/(i+a),l=s*i/(i+a);W(`attackers`,c),W(`defenders`,l),e.attackers.casualties+=c,e.defenders.casualties+=l,e.attackers.morale=Math.max(e.attackers.morale-c*100-1,0),e.defenders.morale=Math.max(e.defenders.morale-l*100-1,0),G(`attackers`),G(`defenders`),e.iteration+=1,H(),L(`attackers`),L(`defenders`)}function W(e,t){let n=w;for(let r of n[e].regiments)for(let e in r.u){let n=.8+Math.random()*.4,i=Math.min(p(r.u[e]*t*n),r.survivors[e]);r.casualties[e]-=i,r.survivors[e]-=i}}function G(e){let t=w;for(let n of t[e].regiments){let e=m(`battle${n.state}-${n.i}`),t=e.querySelector(`.battleCasualties`),r=e.querySelector(`.battleSurvivors`),i=3;for(let e of options.map.military.units)t.querySelector(`td:nth-child(${i})`).innerHTML=String(n.casualties[e.name]||0),r.querySelector(`td:nth-child(${i})`).innerHTML=String(n.survivors[e.name]||0),i++;t.querySelector(`td:nth-child(${i})`).innerHTML=String(v(Object.values(n.casualties))),r.querySelector(`td:nth-child(${i})`).innerHTML=String(v(Object.values(n.survivors)))}z(e)}function K(e){e.stopPropagation();let t=e.target,n=t.nextElementSibling,r=()=>{t.style.opacity=`1`,n.style.display=`none`};n.style.display===`block`?r():(t.style.opacity=`0.5`,n.style.display=`block`,document.getElementsByTagName(`body`)[0].addEventListener(`click`,r,{once:!0}))}function q(e){let t=e.target;if(t.tagName!==`BUTTON`)return;let n=w;n.type=t.dataset.type,O(),H(),L(`attackers`),L(`defenders`),n.name=A(),$(`#battleScreen`).dialog({title:n.name})}function J(e,t){let n=e.target;if(n.tagName!==`BUTTON`)return;let r=w,i=n.dataset.phase;r[t].phase=i;let a=m(`battlePhase_${t}`);a.className=`icon-button-${i}`,a.dataset.tip=n.dataset.tip,L(t)}function ie(e){return e===1?`was annihilated`:e>.9?`was virtually wiped out`:e>.75?`was nearly destroyed`:e>.6?`was devastated`:e>.45?`sustained catastrophic losses`:e>.3?`sustained severe losses`:e>.2?`sustained heavy losses`:e>.1?`took considerable losses`:e>.05?`took noticeable losses`:e>0?`took minor losses`:`emerged unscathed`}function Y(){let t=w,n=t.name,i=Math.max(t.attackers.casualties,t.defenders.casualties),a=t.attackers.casualties+t.defenders.casualties,o=s(a?t.defenders.casualties/a:NaN,i);function s(e,t){return Number.isNaN(e)?[`standoff`,`standoff`]:t<.05?[`minor skirmishes`,`minor skirmishes`]:e>.95?[`attackers flawless victory`,`disorderly retreat of defenders`]:e>.7?[`attackers decisive victory`,`defenders disastrous defeat`]:e>.6?[`attackers victory`,`defenders defeat`]:e>.4?[`stalemate`,`stalemate`]:e>.3?[`attackers defeat`,`defenders victory`]:e>=0?[`attackers disorderly retreat`,`flawless victory of defenders`]:[`stalemate`,`stalemate`]}t.attackers.regiments.forEach(e=>{d(e,`attackers`)}),t.defenders.regiments.forEach(e=>{d(e,`defenders`)});function d(e,t){let r=`regiment${e.state}-${e.i}`;if(e.note){let r=t===`attackers`?o[0]:o[1],i=ie(e.a?Math.abs(v(Object.values(e.casualties)))/e.a:1),a=Object.keys(e.u).map(t=>e.u[t]?`${e.u[t]} ${t}`:null).filter(e=>!!e),s=a.length?` Initial forces: ${f(a)}.`:``,c=Object.keys(e.casualties).map(t=>e.casualties[t]?`${Math.abs(e.casualties[t])} ${t}`:null).filter(e=>!!e),l=c.length?` Casualties: ${f(c)}.`:``;e.note+=`<br><br>${n} (${options.map.lore.calendar.year} ${options.map.lore.calendar.eraShort}): ${r}. The regiment ${i}.${s}${l}`}e.u={...e.survivors},e.a=v(Object.values(e.u)),u(`#armies`).select(`g#${r} > text`).text(Military.getTotal(e)),h(e,e.px,e.py)}let p={i:(c(pack.markers)?.i??-1)+1,x:t.x,y:t.y,cell:t.cell,icon:y.glyph(`⚔️`),type:`battlefields`,dy:52,name:t.name,tags:[]};pack.markers.push(p),g.draw(`markers`);let m=(e,t)=>e.length>1?`${t?`regiments`:`forces`} of ${f([...new Set(e.map(e=>pack.states[e.state].name))])}`:`${ee(pack.states[e[0].state].name)} ${e[0].name}`,_=t=>Math.min(e(t*100),100),x=(e,t)=>e.reduce((e,n)=>{for(let r in n.casualties)e[r]=(e[r]||0)+t(n,r);return e},{}),S=e=>{let t=Object.keys(e).map(t=>e[t]?`${e[t]} ${t}`:null).filter(e=>!!e);return t.length?f(t):``},C=(e,t)=>{let n=S(x(t.regiments,(e,t)=>(e.survivors[t]||0)+Math.abs(e.casualties[t]))),r=S(x(t.regiments,(e,t)=>Math.abs(e.casualties[t]))),i=n?`<br>${e} initial forces: ${n}.`:``;return r&&(i+=` Casualties: ${r}.`),i},T=o[+l(.7)],E=`The ${j()} ended in ${T}`,D=`${t.name} took place in ${options.map.lore.calendar.year} ${options.map.lore.calendar.eraShort}. It was fought between ${m(t.attackers.regiments,1)} and ${m(t.defenders.regiments,0)}. ${E}.
      <br>Attackers losses: ${_(t.attackers.casualties)}%, defenders losses: ${_(t.defenders.casualties)}%.`;if(D+=C(`Attackers`,t.attackers),D+=C(`Defenders`,t.defenders),t.phasesRecord.length){let e=t.phasesRecord.map(e=>e.count>1?`${e.phase} (x${e.count})`:e.phase).join(`<br>`);D+=`<br><br>${r(`Engagement progression`)}:<br>${e}`}p.note=D,b(r(`{{battle}} is over. {{result}}`,{battle:t.name,result:E}),!0,`success`,4e3),Z(),Q()}function X(){let e=w;e.attackers.regiments.forEach(e=>{h(e,e.px,e.py)}),e.defenders.regiments.forEach(e=>{h(e,e.px,e.py)}),Z(),Q()}function Z(){$(`#battleScreen`).dialog(`destroy`),m(`battleScreen`).remove();let e=o(`regimentSelectorScreen`);e?.classList.contains(`ui-dialog-content`)&&$(`#regimentSelectorScreen`).dialog(`destroy`),e?.remove()}function Q(){customization=0,w&&w.attackers.regiments.concat(w.defenders.regiments).forEach(e=>{delete e.px,delete e.py,delete e.casualties,delete e.survivors}),w=null}var ae={open:T};export{ae as BattleScreen};