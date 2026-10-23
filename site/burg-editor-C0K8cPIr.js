import{C as e,d as t,n,r,x as i}from"./index-CuUJKJN8.js";import{H as a,M as o,P as s,dn as c,gt as l,z as u}from"./utils-394NS37_.js";import{$ as ee,X as te,q as ne,t as d}from"./layers-CpGI7aJd.js";import{i as re}from"./emblems-generator-B3pPl-l-.js";import{n as ie,p as ae,v as f}from"./unitUtils-B91DAWIJ.js";import{i as p,t as oe}from"./tooltips-7PimaK30.js";import{t as m}from"./controllers-lOfLnkBO.js";import{i as se,n as h,o as ce,r as g}from"./dialog-helpers-kMHr89OS.js";import{t as le}from"./viewbox-events-DpWtTLWO.js";import{t as _}from"./tags-4fjWFj3G.js";var v={k:1,x:0,y:0};function y({k:e,x:t,y:n},r){return{k:e,x:i(t,r.width*(1-e),0),y:i(n,r.height*(1-e),0)}}function b(e,t,n,r,a=32){let o=i(e.k*n,1,Math.max(1,a)),s=o/e.k;return y({k:o,x:t.x-(t.x-e.x)*s,y:t.y-(t.y-e.y)*s},r)}function ue(e,t,n,r){return y({k:e.k,x:e.x+t,y:e.y+n},r)}var x=null,S=null,C={...v},w=32,T=1,E=0,D=!1;function de(e){customization||(h(`.stable`),d.show(`burgIcons`,`labels`),S=+e,x=c(`#labels`).select(`[data-label-type='burg'][data-id='${e}']`),x.size()||(x=c(`#burgIcons`).select(`[data-id='${e}']`)),fe(),u(`burgEditor`).dataset.entity=`burg:${S}`,pe(),$(`#burgEditor`).dialog({autoOpen:!1,title:r(`Edit Burg`),resizable:!1,close:Ie,position:{my:`left top`,at:`left+10 top+10`,of:`svg`,collision:`fit`}}),k(),$(`#burgEditor`).dialog(`open`))}function fe(){se(`burgEditor`);let e=`<div id="burgEditor" class="dialog" data-burg-id="${O()}">
      <div id="burgBody" style="padding-bottom: 0.3em">
        <div style="display: flex; align-items: center">
          <svg data-tip="${n(r(`Burg emblem`),r(`Click to edit`))}" class="pointer" viewBox="0 0 200 200" width="13em" height="13em">
            <use id="burgEmblem"></use>
          </svg>
          <div style="display: grid; grid-auto-rows: minmax(1.6em, auto)">
            <div id="burgProvinceAndState" style="font-weight: bold; max-width: 16em"></div>
            <div>
              <div class="label">${r(`Name`)}:</div>
              <input
                id="burgName"
                data-tip="${r(`Type to rename`)}"
                autocorrect="off"
                spellcheck="false"
                style="width: 9em"
              />
              <span id="burgNameSpeak" data-tip="${n(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
              <span
                id="burgNameReRandom"
                data-tip="${r(`Generate random name`)}"
                class="icon-globe pointer"
              ></span>
            </div>
            <div data-tip="${r(`Select burg group. Groups defines burg icon, label size and style`)}">
              <div class="label">${r(`Group`)}:</div>
              <select id="burgGroup" style="width: 9em"></select>
              <span id="burgGroupConfigure" data-tip="${r(`Configure burg groups`)}" class="icon-cog pointer"></span>
            </div>
            <div data-tip="${r(`Select burg type. Type slightly affects emblem generation`)}">
              <div class="label">${r(`Type`)}:</div>
              <select id="burgType" style="width: 9em">
                <option value="Generic">${r(`Generic`)}</option>
                <option value="River">${r(`River`)}</option>
                <option value="Lake">${r(`Lake`)}</option>
                <option value="Naval">${r(`Naval`)}</option>
                <option value="Nomadic">${r(`Nomadic`)}</option>
                <option value="Hunting">${r(`Hunting`)}</option>
                <option value="Highland">${r(`Highland`)}</option>
              </select>
            </div>
            <div data-tip="${r(`Select dominant culture`)}">
              <div class="label">${r(`Culture`)}:</div>
              <select id="burgCulture" style="width: 9em"></select>
              <span
                id="burgNameReCulture"
                data-tip="${r(`Generate culture-specific name`)}"
                class="icon-book pointer"
              ></span>
            </div>
            <div data-tip="${r(`Set burg population`)}">
              <div class="label">${r(`Population`)}:</div>
              <input id="burgPopulation" type="number" min="0" step="1" style="width: 9em" />
            </div>
            <div data-tip="${r(`Burg average yearly temperature`)}" style="display: flex; justify-content: space-between">
              <div>
                <div class="label">${r(`Temperature`)}:</div>
                <span id="burgTemperature"></span>
              </div>
              <div style="display: flex; gap: 0.5em">
                <i class="icon-info-circled" id="burgTemperatureLikeIn"></i>
                <i
                  id="burgTemperatureGraph"
                  data-tip="${r(`Show temperature graph for the burg`)}"
                  class="icon-chart-area pointer"
                ></i>
              </div>
            </div>
            <div data-tip="${r(`Burg height above mean sea level`)}">
              <div class="label">${r(`Elevation`)}:</div>
              <span id="burgElevation"></span> ${r(`above sea level`)}
            </div>
            <div>
              <div class="label">${r(`Features`,{context:`burg`})}:</div>
              <span
                id="burgCapital"
                data-tip="${n(r(`Shows whether the burg is a state capital`),r(`Click to toggle`))}"
                data-feature="capital"
                class="burgFeature icon-star"
              ></span>
              <span
                id="burgPort"
                data-tip="${n(r(`Shows whether the burg is a port`),r(`Click to toggle`))}"
                data-feature="port"
                class="burgFeature icon-anchor"
              ></span>
              <span
                id="burgCitadel"
                data-tip="${n(r(`Shows whether the burg has a citadel (castle)`),r(`Click to toggle`))}"
                data-feature="citadel"
                class="burgFeature icon-chess-rook"
                style="font-size: 1.1em"
              ></span>
              <span
                id="burgWalls"
                data-tip="${n(r(`Shows whether the burg is walled`),r(`Click to toggle`))}"
                data-feature="walls"
                class="burgFeature icon-fort-awesome"
              ></span>
              <span
                id="burgPlaza"
                data-tip="${n(r(`Shows whether the burg is a trade center (market center)`),r(`Click to toggle`))}"
                data-feature="plaza"
                class="burgFeature icon-store"
                style="font-size: 1em"
              ></span>
              <span
                id="burgTemple"
                data-tip="${n(r(`Shows whether the burg is a religious center`),r(`Click to toggle`))}"
                data-feature="temple"
                class="burgFeature icon-chess-bishop"
                style="font-size: 1.1em; margin-left: 3px"
              ></span>
              <span
                id="burgShanty"
                data-tip="${n(r(`Shows whether the burg has a shanty town`),r(`Click to toggle`))}"
                data-feature="shanty"
                class="burgFeature icon-campground"
                style="font-size: 1em"
              ></span>
            </div>
            <div data-tip="${r(`Burg average daily production`)}">
              <div class="label">${r(`Production`)}:</div>
              <span id="burgProduction" style="display: inline-flex; flex-wrap: wrap; column-gap: 0.3em; max-width: 110px;"></span>
            </div>
            <div data-tip="${r(`Gross product per population point, daily average`)}">
              <div class="label">${r(`Wealth`)}</div>
              <span id="burgWealth"></span>
            </div>
            <div data-tip="${r(`Set treasury balance. Production won't be changed automatically`)}">
              <div class="label"><label for="burgTreasury">${r(`Treasury`)}:</label></div>
              <input id="burgTreasury" type="number" step="0.01" style="width: 9em" /> 🟡
            </div>
            <div data-tip="${r(`Burg tags (comma-separated)`)}">
              <div class="label"><label for="burgTags">${r(`Tags`)}:</label></div>
              <input
                id="burgTags"
                placeholder="${r(`Tags`)}"
                autocorrect="off"
                spellcheck="false"
                style="width: 9em"
              />
            </div>
          </div>
        </div>
        <div id="burgPreviewSection" data-tip="${r(`Burg map preview: scroll to zoom, drag to pan`)}" style="display: flex; flex-direction: column">
          <div style="display: flex; justify-content: space-between">
            <span>${r(`Burg preview`)}:</span>
            <div style="display: flex; gap: 0.5em">
              <i id="burgPreviewReset" data-tip="${r(`Reset preview zoom`)}" class="icon-ccw pointer"></i>
              <i id="burgLinkOpen" data-tip="${r(`Open burg map in a new tab`)}" class="icon-link-ext pointer"></i>
            </div>
          </div>
          <div
            id="burgPreviewObject"
            style="overflow: hidden; position: relative; touch-action: none; height: 320px; max-width: 60vw; max-height: 60vh"
          ></div>
        </div>
      </div>
      <div id="burgBottom">
        <button id="burgStyleShow" data-tip="${r(`Show`)}" class="icon-brush"></button>
        <div id="burgStyleSection" style="display: none">
          <button id="burgStyleHide" data-tip="${r(`Hide`)}" class="icon-brush"></button>
          <button
            id="burgEditLabelStyle"
            data-tip="${r(`Edit label style for burg group in Style Editor`)}"
            class="icon-font"
          ></button>
          <button
            id="burgEditGroupStyle"
            data-tip="${r(`Edit icon and anchor style for the burg group in Style Editor`)}"
            class="icon-dot-circled"
          ></button>
        </div>
        <button id="burgEditLabel" data-tip="${r(`Edit this burg label`)}" class="icon-font"></button>
        <button id="burgEditEmblem" data-tip="${r(`Edit Emblem`)}" class="icon-shield-alt"></button>
        <button id="burgSetPreviewLink" data-tip="${r(`Set custom burg map URL`)}" class="icon-map-o"></button>
        <button id="burgLocate" data-tip="${r(`Zoom map and center view in the burg`)}" class="icon-target"></button>
        <button
          id="burgProductionOverview"
          data-tip="${r(`Show production overview for this burg`)}"
          class="icon-chart-bar"
        ></button>
        <button
          id="burgRelocate"
          data-tip="${r(`Relocate burg. Click on map to move the burg`)}"
          class="icon-map-pin"
        ></button>
        ${ce(`burglLegend`,r(`Edit free text notes (legend)`))}
        <button id="burgLock" class="icon-lock-open" onmouseover="showElementLockTip(event)"></button>
        <button
          id="burgRemove"
          data-tip="${r(`Remove`)}"
          data-shortcut="Delete"
          class="icon-trash fastDelete"
        ></button>
      </div>
    </div>`;u(`dialogs`).insertAdjacentHTML(`beforeend`,e),u(`burgName`).addEventListener(`input`,A),u(`burgNameSpeak`).addEventListener(`click`,()=>s(u(`burgName`).value)),u(`burgNameReRandom`).addEventListener(`click`,j),u(`burgGroup`).addEventListener(`change`,M),u(`burgGroupConfigure`).addEventListener(`click`,Fe),u(`burgType`).addEventListener(`change`,N),u(`burgCulture`).addEventListener(`change`,P),u(`burgNameReCulture`).addEventListener(`click`,F),u(`burgPopulation`).addEventListener(`change`,I),u(`burgTreasury`).addEventListener(`change`,L),u(`burgTags`).addEventListener(`change`,R),u(`burgBody`).querySelectorAll(`.burgFeature`).forEach(e=>void e.addEventListener(`click`,z)),u(`burgLinkOpen`).addEventListener(`click`,Oe),u(`burgPreviewReset`).addEventListener(`click`,G),u(`burgPreviewObject`).addEventListener(`wheel`,Ce,{passive:!1}),u(`burgPreviewObject`).addEventListener(`dblclick`,we),u(`burgPreviewObject`).addEventListener(`pointerdown`,Te),u(`burgStyleShow`).addEventListener(`click`,ve),u(`burgStyleHide`).addEventListener(`click`,ye),u(`burgEditLabelStyle`).addEventListener(`click`,be),u(`burgEditGroupStyle`).addEventListener(`click`,Se),u(`burgEmblem`).addEventListener(`click`,Y),u(`burgSetPreviewLink`).addEventListener(`click`,ke),u(`burgEditEmblem`).addEventListener(`click`,Y),u(`burgLocate`).addEventListener(`click`,Ae),u(`burgEditLabel`).addEventListener(`click`,xe),u(`burgRelocate`).addEventListener(`click`,Z),u(`burglLegend`).addEventListener(`click`,Q),u(`burgLock`).addEventListener(`click`,_e),u(`burgRemove`).addEventListener(`click`,Pe),u(`burgTemperatureGraph`).addEventListener(`click`,Me),u(`burgProductionOverview`).addEventListener(`click`,Ne)}function O(){return S??+x.attr(`data-id`)}function pe(){let e=u(`burgGroup`);e.options.length=0;for(let{name:t}of options.map.burgs.groups)e.options.add(new Option(t,t))}function k(){let t=O(),n=pack.burgs[t],i=pack.cells.province[n.cell],a=i?`${pack.provinces[i].fullName}, `:``,o=pack.states[n.state].fullName||pack.states[n.state].name;u(`burgProvinceAndState`).innerHTML=a+o,u(`burgName`).value=n.name,u(`burgGroup`).value=n.group,u(`burgType`).value=n.type||`Generic`,u(`burgPopulation`).value=String(e(n.population*options.map.units.population.scale*options.map.units.population.urbanization.rate)),u(`burgWealth`).innerHTML=`🟡 ${e(n.population>0?(n.product||0)/n.population:0,2)}`,u(`burgTreasury`).value=String(e(n.treasury||0,2)),u(`burgTags`).value=_.format(n.tags);let s=u(`burgCulture`);s.options.length=0,pack.cultures.filter(e=>!e.removed).forEach(e=>void s.options.add(new Option(e.name,String(e.i),!1,e.i===n.culture)));let c=grid.cells.temp[pack.cells.g[n.cell]];u(`burgTemperature`).innerHTML=ie(c),u(`burgTemperatureLikeIn`).dataset.tip=r(`Average yearly temperature is like in {{place}}`,{place:f(c)}),u(`burgElevation`).innerHTML=ae(pack.cells.h[n.cell]),u(`burgCapital`).classList.toggle(`inactive`,!n.capital),u(`burgPort`).classList.toggle(`inactive`,!n.port),u(`burgCitadel`).classList.toggle(`inactive`,!n.citadel),u(`burgWalls`).classList.toggle(`inactive`,!n.walls),u(`burgPlaza`).classList.toggle(`inactive`,!n.plaza),u(`burgTemple`).classList.toggle(`inactive`,!n.temple),u(`burgShanty`).classList.toggle(`inactive`,!n.shanty),u(`burgProduction`).innerHTML=Le(Production.getBurgProduction(n)),V();let l=`burgCOA${t}`;ee.trigger(l,n.coa),u(`burgEmblem`).setAttribute(`href`,`#${l}`),J(n)}function A(){let e=u(`burgName`).value;e.trim()&&(Burgs.rename(O(),e),d.draw(`labels`))}function j(){let e=l(Names.nameBases.length-1);u(`burgName`).value=Names.getBase(e),A()}function M(){let e=O(),t=pack.burgs[e];Burgs.changeGroup(t,this.value),d.draw(`burgIcons`,`labels`)}function N(){let e=O();Burgs.setType(e,this.value)}function P(){Burgs.setCulture(O(),+this.value)}function F(){let e=O(),t=pack.burgs[e].culture;u(`burgName`).value=Names.getCulture(t),A()}function I(){let e=O(),t=pack.burgs[e],n=u(`burgPopulation`).valueAsNumber;Number.isFinite(n)&&n>=0&&Burgs.setPopulation(e,n),J(t)}function L(){let t=pack.burgs[O()];try{Burgs.setTreasury(t.i,this.valueAsNumber)}catch{p(r(`Enter a valid treasury amount`),!1,`error`)}this.value=String(e(t.treasury||0,2))}function R(){let e=pack.burgs[O()];if(!e)return;let t=u(`burgTags`);_.set(e,t.value),t.value=_.format(e.tags)}function z(){let e=O(),t=pack.burgs[e],n=this.dataset.feature,r=Number(this.classList.contains(`inactive`));if(n===`plaza`&&!r){let t=pack.markets?.find(t=>t.centerBurgId===e);if(t){me(t);return}}n===`port`?he(e):n===`capital`?ge(e):Burgs.setBuilding(e,n,!!r),this.classList.toggle(`inactive`,!t[n]),J(t)}function me(e){g({title:r(`Remove`),message:`${r(`This burg is the center of the market “{{market}}”. Remove the market?`,{market:Markets.getName(e)})}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>{Markets.removeMarket(e.i),d.draw(`markets`),k()}})}function he(e){B(()=>Burgs.setPort(e,!pack.burgs[e].port))&&d.draw(`burgIcons`)}function ge(e){pack.burgs[e].capital?p(r(`To change capital please assign a capital status to another burg of this state`),!1,`error`):B(()=>Burgs.setCapital(e))&&d.draw(`burgIcons`,`labels`)}function B(e){try{return e(),!0}catch(e){return p(t(e),!1,`error`),!1}}function _e(){let e=O();Burgs.setLocked(e,!pack.burgs[e].lock),V()}function V(){let e=O();pack.burgs[e].lock?(u(`burgLock`).classList.remove(`icon-lock-open`),u(`burgLock`).classList.add(`icon-lock`)):(u(`burgLock`).classList.remove(`icon-lock`),u(`burgLock`).classList.add(`icon-lock-open`))}function ve(){document.querySelectorAll(`#burgBottom > button`).forEach(e=>{e.style.display=`none`}),u(`burgStyleSection`).style.display=`inline-block`}function ye(){document.querySelectorAll(`#burgBottom > button`).forEach(e=>{e.style.display=`inline-block`}),u(`burgStyleSection`).style.display=`none`}function be(){let e=pack.burgs[O()];h(`.stable`),m.StyleEditor.open(`labels`,e.label?.group||e.group)}function xe(){let e=O();$(`#burgEditor`).dialog(`close`),m.LabelsEditor.open(`burg`,e)}function Se(){let e=pack.burgs[O()];h(`.stable`),m.StyleEditor.open(`burgIcons`,e.group)}function H(){let e=u(`burgPreviewObject`);return{width:e.clientWidth,height:e.clientHeight}}function U(){let e=u(`burgPreviewObject`),t=e.querySelector(`iframe`);if(!t)return;let{k:n,x:r,y:i}=C;t.style.transformOrigin=`0 0`,t.style.transform=`translate(${r}px, ${i}px) scale(${n/T})`,t.style.left=`0`,t.style.top=`0`,e.style.cursor=n>1?`grab`:`default`,clearTimeout(E),D||(E=window.setTimeout(W,200))}function W(){if(D)return;let e=u(`burgPreviewObject`).querySelector(`iframe`);if(!e)return;let{k:t,x:n,y:r}=C;T=t,e.style.width=`${t*100}%`,e.style.height=`${t*100}%`,e.style.transform=`none`,e.style.left=`${n}px`,e.style.top=`${r}px`}function G(){C={...v},clearTimeout(E),D?U():W(),u(`burgPreviewObject`).style.cursor=`default`}function K(e){let t=u(`burgPreviewObject`).getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}function Ce(e){e.preventDefault();let t=Math.exp(-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002));C=b(C,K(e),t,H(),w),U()}function we(e){C=b(C,K(e),2,H(),w),U()}function Te(e){if(C.k<=1)return;e.preventDefault();let t=u(`burgPreviewObject`);t.setPointerCapture(e.pointerId),t.style.cursor=`grabbing`;let n={x:e.clientX,y:e.clientY},r=e=>{let t=e;C=ue(C,t.clientX-n.x,t.clientY-n.y,H()),n={x:t.clientX,y:t.clientY},U()},i=()=>{t.removeEventListener(`pointermove`,r),t.removeEventListener(`pointerup`,i),t.removeEventListener(`pointercancel`,i),t.style.cursor=`grab`};t.addEventListener(`pointermove`,r),t.addEventListener(`pointerup`,i),t.addEventListener(`pointercancel`,i)}var q=0;function Ee(){if(!q){let e=document.createElement(`canvas`).getContext(`webgl`);q=e?e.getParameter(e.MAX_TEXTURE_SIZE):4096}return q}function De(){let{width:e,height:t}=H(),n=Math.max(e,t,1);return Ee()/2/(devicePixelRatio*n)}function J(e){let t=Burgs.getPreview(e).preview;if(!t){u(`burgPreviewSection`).style.display=`none`;return}u(`burgPreviewSection`).style.display=`block`;let n=u(`burgPreviewObject`);n.innerHTML=``;let r=document.createElement(`iframe`);if(r.style.position=`absolute`,r.style.border=`none`,r.style.pointerEvents=`none`,r.setAttribute(`sandbox`,`allow-scripts allow-same-origin`),r.src=t,n.insertBefore(r,null),D=t.includes(`watabou.github.io`),D){let e=Math.max(1,Math.min(4,De()));T=e,r.style.width=`${e*100}%`,r.style.height=`${e*100}%`,w=Math.min(32,e*2.5)}else T=1,w=32;G()}function Oe(){let e=O(),t=pack.burgs[e],n=Burgs.getPreview(t).link;n&&o(n)}function ke(){let e=O(),t=pack.burgs[e];prompt(r(`Provide custom URL to the burg map. It can be a link to a generator or just an image. Leave empty to use the default map preview`),{default:Burgs.getPreview(t).link||``,required:!1},n=>{try{Burgs.setLink(e,String(n??``))}catch(e){p(e.message,!1,`error`)}J(t)})}function Y(){let e=O(),t=pack.burgs[e];m.EmblemsEditor.open(`burg`,`burgCOA${e}`,t)}function Ae(){let e=O(),t=pack.burgs[e];zoomTo(t.x,t.y,8,2e3)}var X=!1;function Z(){u(`burgRelocate`).classList.toggle(`pressed`),u(`burgRelocate`).classList.contains(`pressed`)?(c(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,je),p(r(`Click on map to relocate burg. Hold Shift for continuous move`),!0),d.isOn(`cells`)||(d.show(`cells`),X=!0)):(oe(),le(),X&&=(d.hide(`cells`),!1))}function je(e){let[t,n]=a(e,this);B(()=>Burgs.move(O(),t,n))&&(d.draw(`burgIcons`,`labels`),e.shiftKey===!1&&Z())}function Q(){m.NotesEditor.open({type:`burg`,id:O()})}function Me(){let e=O();m.TemperatureGraph.open(e)}function Ne(){let e=O();m.ProductionOverview.open(e)}function Pe(){let e=O();pack.burgs[e].capital?(alertMessage.innerHTML=`${n(r(`You cannot remove the capital`),r(`You must change the state capital first`))}`,$(`#alert`).dialog({resizable:!1,title:r(`Remove`),buttons:{[r(`OK`)]:function(){$(this).dialog(`close`)}}})):pack.markets?.some(t=>t.centerBurgId===e)?(alertMessage.innerHTML=`${r(`You cannot remove a market center burg. Please remove the market first`)}`,$(`#alert`).dialog({resizable:!1,title:r(`Remove`),buttons:{[r(`OK`)]:function(){$(this).dialog(`close`)}}})):g({title:r(`Remove`),message:`${r(`Are you sure you want to remove the burg?`)}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>{Burgs.remove(e),te(`burg`,e),d.draw(`burgIcons`,`labels`),$(`#burgEditor`).dialog(`close`)}})}function Fe(){m.BurgGroupEditor.open()}function Ie(){clearTimeout(E),u(`burgRelocate`).classList.contains(`pressed`)&&Z(),x=null,u(`burgPreviewObject`).replaceChildren(),$(`#burgEditor`).dialog(`destroy`),u(`burgEditor`).remove()}function Le(e){if(!e)return``;let t=``,n=Object.entries(e).sort(([,e],[,t])=>t-e);for(let[e,i]of n){let n=Goods.get(+e);if(!n)continue;let{name:a,unit:o,icon:s}=n,c=i===1?o:`${o}s`;t+=`<span data-tip="${r(`{{good}}: {{amount}} {{unit}} per day`,{good:a,amount:i,unit:c})}">
      <svg class="resIcon" width="1em" height="1em"><use href="${re.href(s)}"${ne()}></use></svg>
      <span style="margin: 0 0.2em 0 -0.2em">${i}</span>
    </span>`}return t}var Re={open:de};export{Re as BurgEditor};