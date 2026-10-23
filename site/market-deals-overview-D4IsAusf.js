import{C as e,n as t,r as n}from"./index-CuUJKJN8.js";import{z as r}from"./utils-394NS37_.js";import{K as i}from"./layers-CpGI7aJd.js";import{t as a}from"./csv-BZ59UuP0.js";import{i as o}from"./emblems-generator-B3pPl-l-.js";import{r as s}from"./unitUtils-B91DAWIJ.js";import{i as c}from"./tooltips-7PimaK30.js";import{t as l}from"./state-B2hBYDzv.js";import{i as u,l as d}from"./dialog-helpers-kMHr89OS.js";import{i as f,r as p}from"./app-C3meBrse.js";import{a as m,i as h,n as g,r as _}from"./table-CEa9eCSl.js";var v=0,y,b=`marketDeals`,x={my:`right top`,at:`right bottom+10`,of:`#marketOverview`,collision:`fit`},S=[{key:`icon`,width:`2em`,permanent:!0},{key:`good`,label:n(`Good`),width:`6.8em`,permanent:!0,sortBy:e=>Goods.get(e.good)?.name??``,sortType:`alpha`},{key:`direction`,label:n(`Type`),width:`5em`,sortBy:e=>j(e,v),sortType:`alpha`},{key:`counterparty`,label:n(`Counterparty`),width:`8em`,sortBy:e=>P(e)?.name??``,sortType:`alpha`},{key:`units`,label:n(`Units`),width:`5em`,sortBy:e=>e.units},{key:`income`,label:n(`Income`),width:`5em`,permanent:!0,sortBy:e=>F(e,v)}],C=_({getData:D,onUpdate:O});function w(e){o.retry(`goods`);let i=Markets.get(e);i?(y=l.get(b,`filters`,()=>({scope:`all`})),[`all`,`local`,`global`].includes(y.scope)||(y.scope=`all`),l.set(b,`filters`,y),v=e,T(),r(`marketDealsFilter`).value=y.scope,C.reset(),$(`#${b}`).dialog({title:n(`{{- market}} Market Deals`,{market:Markets.getName(i)}),position:x,close:E})):c(t(n(`Invalid market`),n(`The selected market does not exist`)),!0,`error`,5e3)}function T(){u(b);let e=`<div id="${b}" class="dialog stable editorDialog">
      <div>
        ${h({dialogId:b,columns:S})}
        <div id="marketDealsBody" class="table" style="max-height:30em"></div>

        <div id="marketDealsFooter" class="totalLine">
          <div style="margin-left: 5px" data-tip="${n(`Deals count`)}">${n(`Deals`)}: <span id="marketDealsFooterDeals">0</span></div>
          <div data-col="income" style="margin-left: 12px" data-tip="${n(`Net flow for this market`)}">${n(`Net Flow`)}: <span id="marketDealsFooterNet">🟡 0</span></div>
        </div>

        <div id="marketDealsBottom">
          <button id="marketDealsRefresh" data-tip="${n(`Refresh`)}" class="icon-cw"></button>
          <button id="marketDealsExport" data-tip="${n(`Save data as a CSV file`)}" class="icon-download"></button>
          <select id="marketDealsFilter" data-tip="${n(`Filter deals by scope`)}" style="margin-left: 8px">
            <option value="all">${n(`All`)}</option>
            <option value="local">${n(`Local`)}</option>
            <option value="global">${n(`Global`)}</option>
          </select>
        </div>
      </div>
  </div>`;r(`dialogs`).insertAdjacentHTML(`beforeend`,e),p(b,C.reset),g({dialogId:b,columns:S,onUpdate:()=>d(b,{width:`fit-content`,position:x})}),r(`marketDealsRefresh`).addEventListener(`click`,C.refresh),r(`marketDealsExport`).addEventListener(`click`,I),r(`marketDealsBody`).addEventListener(`click`,e=>{let t=e.target.closest(`.marketDealParty`)?.closest(`.marketDeal`)?.dataset.id,n=pack.deals.find(e=>e.i===Number(t));if(!n)return;let r=P(n);r&&zoomTo(r.x,r.y,8,2e3)}),r(`marketDealsFilter`).addEventListener(`change`,e=>{y.scope=e.target.value,l.set(b,`filters`,y),C.reset()})}function E(){$(`#${b}`).dialog(`destroy`),r(b).remove()}function D(){if(!Markets.get(v))return c(t(n(`Invalid market`),n(`The selected market does not exist`)),!0,`error`,5e3),[];let e=k(pack.deals,v).filter(e=>{if(y.scope===`all`)return!0;let t=M(e,v);return y.scope===`local`?t.type===`burg`:t.type===`market`});return f(b,e,S)}function O(e){let t=e.rows.map(N).join(``),i=e.all.reduce((e,t)=>e+F(t,v),0);r(`marketDealsBody`).innerHTML=t||n(`No market deals recorded`),r(`marketDealsFooterDeals`).innerHTML=String(e.all.length),r(`marketDealsFooterNet`).innerHTML=s(i),m(r(`marketDealsFooter`),e,C.goto),d(b,{width:`fit-content`,position:x})}function k(e,t){return e.filter(e=>e.sellerType===`market`&&e.seller===t||e.buyerType===`market`&&e.buyer===t)}function A(e,t){return e.sellerType===`market`&&e.seller===t}function j(e,t){return A(e,t)?`out`:`in`}function M(e,t){return A(e,t)?{id:e.buyer,type:e.buyerType}:{id:e.seller,type:e.sellerType}}function N(t){let r=Goods.get(t.good);if(!r)return``;let a=F(t,v),o=P(t),c=M(t,v),l=j(t,v),u=a>=0?`#2a6`:`#c44`,d=a>=0?`#dff0d8`:`#f2dede`;return`<div class="states marketDeal" data-id="${t.i}" data-good="${r.name}" data-direction="${l}" data-units="${e(t.units,2)}" data-counterparty="${c.type}_${o?.name}" data-income="${a}">
      <svg data-col="icon" data-tip="${n(`Good icon`)}" width="1.3em" height="1.3em" class="goodIcon">
        ${i(r)}
      </svg>
      <div data-col="good" data-tip="${n(`Name`)}" class="goodName">${r.name}</div>
      <div data-col="direction"><span class="marketBadge" style="background:${d}; color:${u}">${l.toUpperCase()}</span></div>
      <div data-col="counterparty" class="marketDealParty pointer" data-tip="${n(`Click to zoom`)}">
        <div class="${c.type===`burg`?`icon-dot-circled`:`icon-store`}" style="display:inline-block; width: 0.8em; ${c.type===`market`?`font-size: 0.85em;`:``}"></div>
        <div style="display:inline-block; width: 6.8em;">${o?.name}</div>
      </div>
      <div data-col="units" class="marketDealUnits">${e(t.units,2)}</div>
      <div data-col="income" class="marketDealIncome" style="color:${u}">${s(a)}</div>
    </div>`}function P(e){let t=M(e,v),n=t.type===`burg`?t.id:Markets.get(t.id)?.centerBurgId;return n&&pack.burgs[n]||null}function F(t,n){let r=e(t.units*t.price,2);return A(t,n)?r:-r}function I(){if(!Markets.get(v))return;let t=k(pack.deals,v).flatMap(t=>{let n=Goods.get(t.good);return n?[[t.i,n.name,j(t,v),P(t)?.name??``,e(t.units,2),e(t.price,2),e(F(t,v),2)]]:[]});a.download(`Market_${v}_Deals`,[`Id`,`Good`,`Type`,`Client`,`Units`,`Price`,`Net`],t)}var L={open:w};export{L as MarketDealsOverview};