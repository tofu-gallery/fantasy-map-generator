import{C as e,n as t,r as n}from"./index-CuUJKJN8.js";import{H as r,dn as i,z as a}from"./utils-394NS37_.js";import{$ as o,K as s,t as c}from"./layers-CpGI7aJd.js";import{t as l}from"./csv-BZ59UuP0.js";import{i as u}from"./emblems-generator-B3pPl-l-.js";import{r as d}from"./unitUtils-B91DAWIJ.js";import{i as f,t as p}from"./tooltips-7PimaK30.js";import{t as m}from"./controllers-lOfLnkBO.js";import{i as h,l as g,n as _,o as v}from"./dialog-helpers-kMHr89OS.js";import{t as y}from"./viewbox-events-DpWtTLWO.js";import{i as b,r as x}from"./app-C3meBrse.js";import{a as S,i as C,n as w,r as T}from"./table-CEa9eCSl.js";var E=0,D=`marketOverview`,O={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},k=[{key:`icon`,width:`2.5em`,permanent:!0},{key:`good`,label:n(`Good`),width:`8em`,permanent:!0,sortBy:e=>e.good,sortType:`alpha`},{key:`stock`,label:n(`Stock`),width:`5em`,sortBy:e=>e.stock,defaultSort:`desc`},{key:`price`,label:n(`Price`),width:`5em`,permanent:!0,sortBy:e=>e.price}],A=T({getData:L,onUpdate:R});function j(e){if(u.retry(`goods`),customization)return;let r=Markets.get(e);r?(E=e,_(`#${D}, .stable`),M(),A.reset(),N(r),$(`#${D}`).dialog({title:n(`Market Stock: {{- market}}`,{market:Markets.getName(r)}),width:`auto`,close:H,position:O})):f(t(n(`Invalid market`),n(`The selected market does not exist`)),!0,`error`,5e3)}function M(){h(D);let e=`<div id="${D}" class="dialog stable editorDialog">
      ${C({dialogId:D,columns:k})}
      <div id="marketOverviewGoodsBody" class="table" style="max-height:40em"></div>
      <div id="marketOverviewSummary" class="totalLine"></div>
      <div id="marketOverviewNameLine" style="display: flex; align-items: center; margin-bottom: 0.4em">
        <div class="label">${n(`Name`)}:</div>
        <input
          id="marketOverviewName"
          data-tip="${n(`Type to rename the market. Clear the field to reset to the default name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em; margin-left: 0.3em;"
        />
        <span
          id="marketOverviewNameReset"
          data-tip="${n(`Reset to the default name (center burg name)`)}"
          class="icon-ccw pointer"
          style="margin-left: 0.3em"
        ></span>
      </div>
      <div id="marketOverviewInfo" style="margin-bottom: 0.3em"></div>
      <div id="marketOverviewBottom">
        <button id="marketOverviewRefresh" data-tip="${n(`Refresh`)}" class="icon-cw"></button>
        <button id="marketOverviewOpenDeals" data-tip="${n(`View market deals`)}" class="icon-list-bullet"></button>
        ${v(`marketOverviewLegend`,n(`Edit free text notes (legend)`))}
        <button
          id="marketOverviewRelocate"
          data-tip="${n(`Relocate market. Click on a burg on the map to move the market center`)}"
          class="icon-map-pin"
        ></button>
        <button id="marketOverviewExport" data-tip="${n(`Save data as a CSV file`)}" class="icon-download"></button>
      </div>
  </div>`;a(`dialogs`).insertAdjacentHTML(`beforeend`,e),x(D,A.reset),w({dialogId:D,columns:k,onUpdate:()=>g(D,{width:`fit-content`,position:O})}),a(`marketOverviewRefresh`).addEventListener(`click`,A.refresh),a(`marketOverviewExport`).addEventListener(`click`,V),a(`marketOverviewOpenDeals`).addEventListener(`click`,()=>m.MarketDealsOverview.open(E)),a(`marketOverviewRelocate`).addEventListener(`click`,z),a(`marketOverviewLegend`).addEventListener(`click`,P),a(`marketOverviewName`).addEventListener(`input`,F),a(`marketOverviewNameReset`).addEventListener(`click`,I)}function N(e){let t=a(`marketOverviewName`);t.value=e.name||``,t.placeholder=pack.burgs[e.centerBurgId]?.name||`Market ${e.i}`}function P(){m.NotesEditor.open({type:`market`,id:E})}function F(){let e=Markets.get(E);e&&(Markets.rename(e.i,this.value),$(`#marketOverview`).dialog(`option`,`title`,n(`Market Stock: {{- market}}`,{market:Markets.getName(e)})))}function I(){let e=Markets.get(E);e&&(Markets.rename(e.i,``),a(`marketOverviewName`).value=``,$(`#marketOverview`).dialog(`option`,`title`,n(`Market Stock: {{- market}}`,{market:Markets.getName(e)})))}function L(){let e=Markets.get(E);if(!e)return f(t(n(`Invalid market`),n(`The selected market does not exist`)),!0,`error`,5e3),[];let r=pack.burgs[e.centerBurgId];if(!r||r.removed)return f(t(n(`Invalid market`),n(`The selected market has no center burg`)),!0,`error`,5e3),[];let i=Object.entries(e.goods).flatMap(([e,t])=>{let n=Goods.get(+e);return n?[{goodId:+e,good:n.name,stock:t.stock,price:t.price}]:[]});return b(D,i,k)}function R(t){let r=Markets.get(E);if(!r)return;let i=t.rows.map(t=>{let r=Goods.get(t.goodId);return`<div class="states marketGood"
      data-good="${r.name}"
      data-stock="${e(t.stock,2)}"
      data-price="${e(t.price,2)}">
      <svg data-col="icon" data-tip="${n(`Good icon`)}" width="2em" height="2em" class="goodIcon">
        ${s(r)}
      </svg>
      <div data-col="good" data-tip="${n(`Name`)}" class="goodName">${r.name}</div>
      <div data-col="stock" data-tip="${n(`Good stock`)}" class="marketGoodStock">${e(t.stock,2)}</div>
      <div data-col="price" data-tip="${n(`Good price`)}" class="marketGoodPrice">${d(t.price)}</div>
    </div>`});a(`marketOverviewGoodsBody`).innerHTML=i.join(``)||n(`No goods available`);let c=pack.burgs[r.centerBurgId],l=pack.states[c?.state||0],u=`stateCOA${l.i}`;l&&o.trigger(u,l.coa),a(`marketOverviewInfo`).innerHTML=`<svg class="coaIcon" viewBox="0 0 200 200"><use href="#${u}"></use></svg><b>${n(`Owner`)}:</b> ${l.fullName||l.name}`;let f=pack.burgs.filter(e=>!e.removed&&e.market===r.i),p=t.all.reduce((e,t)=>e+t.stock,0);a(`marketOverviewSummary`).innerHTML=`
    <div style="margin-left:5px">${n(`Cells`)}: ${pack.cells.market.reduce((e,t)=>e+ +(t===r.i),0)}</div>
    <div style="margin-left:12px">${n(`Burgs`)}: ${f.length}</div>
    <div data-col="stock" style="margin-left:12px">${n(`Stock`)}: ${e(p,2)}</div>`,S(a(`marketOverviewSummary`),t,A.goto),g(D,{width:`fit-content`,position:O})}function z(){let e=a(`marketOverviewRelocate`);e.classList.toggle(`pressed`),e.classList.contains(`pressed`)?(i(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,B),f(n(`Click on a burg on the map to relocate the market center`),!0)):(p(),y())}function B(e){let t=Markets.get(E);if(!t)return;let[i,a]=r(e,this),o=Pack.findCell(i,a);if(o===void 0)return;let s=pack.cells.burg[o],l=pack.burgs[s];!s||!l||l.removed?f(n(`No valid burg in this cell. Click on a cell with a burg`),!1,`error`):s===t.centerBurgId?f(n(`This burg is already a market center`),!1,`error`):pack.markets.some(e=>e.centerBurgId===s)?f(n(`This burg is already a center of another market`),!1,`error`):Markets.relocateMarket(E,s)&&(z(),c.draw(`markets`),N(t),$(`#marketOverview`).dialog(`option`,`title`,n(`Market Stock: {{- market}}`,{market:Markets.getName(t)})),A.refresh())}function V(){let t=Markets.get(E);if(!t)return;let n=Object.entries(t.goods).flatMap(([t,n])=>{let r=Goods.get(Number(t));if(!r)return[];let i=e(Markets.customerBuyPrice(n.price),2),a=e(Markets.customerSellPrice(n.price),2);return[[r.name,e(n.stock,2),i,a]]});l.download(`Market`,[`Good`,`Stock`,`Buy Price`,`Sell Price`],n)}function H(){a(`marketOverviewRelocate`).classList.contains(`pressed`)&&z(),$(`#${D}`).dialog(`destroy`),a(D).remove()}var U={open:j};export{U as MarketOverview};