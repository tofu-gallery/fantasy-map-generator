import{C as e,r as t}from"./index-CuUJKJN8.js";import{At as n,B as r,Ft as i,Rt as a,_n as o,dn as s,fn as c,gn as l,jt as u,m as d,p as f,vn as p,z as m}from"./utils-394NS37_.js";import{t as h}from"./extent-V-JVJWfI.js";import{t as g}from"./mean-4Awewi9R.js";import{t as _}from"./sum-BpJJqxFM.js";import{n as v,r as y}from"./axis-ChvWZg1j.js";import{t as b}from"./csv-BZ59UuP0.js";import{n as x}from"./heightUtils-BfaaFPbS.js";import{S,_ as C,a as w,n as T,o as E,p as D,r as O}from"./unitUtils-B91DAWIJ.js";import{i as k}from"./tooltips-7PimaK30.js";import{i as A,l as j,n as M}from"./dialog-helpers-kMHr89OS.js";var N=class extends Map{constructor(e,t=L){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(let[t,n]of e)this.set(t,n)}get(e){return super.get(P(this,e))}has(e){return super.has(P(this,e))}set(e,t){return super.set(F(this,e),t)}delete(e){return super.delete(I(this,e))}};function P({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):n}function F({_intern:e,_key:t},n){let r=t(n);return e.has(r)?e.get(r):(e.set(r,n),n)}function I({_intern:e,_key:t},n){let r=t(n);return e.has(r)&&(n=e.get(r),e.delete(r)),n}function L(e){return typeof e==`object`&&e?e.valueOf():e}function ee(e,t,...n){return R(e,Array.from,t,n)}function R(e,t,n,r){return(function e(i,a){if(a>=r.length)return n(i);let o=new N,s=r[a++],c=-1;for(let e of i){let t=s(e,++c,i),n=o.get(t);n?n.push(e):o.set(t,[e])}for(let[t,n]of o)o.set(t,e(n,a));return t(o)})(e,0)}function te(e){return s(c(e).call(document.documentElement))}var z=Symbol(`implicit`);function B(){var e=new N,t=[],n=[],r=z;function i(i){let a=e.get(i);if(a===void 0){if(r!==z)return r;e.set(i,a=t.push(i)-1)}return n[a%n.length]}return i.domain=function(n){if(!arguments.length)return t.slice();t=[],e=new N;for(let r of n)e.has(r)||e.set(r,t.push(r)-1);return i},i.range=function(e){return arguments.length?(n=Array.from(e),i):n.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return B(t,n).unknown(r)},a.apply(i,arguments),i}function ne(){var e=B().unknown(void 0),t=e.domain,n=e.range,r=0,i=1,o,s,c=!1,u=0,d=0,f=.5;delete e.unknown;function p(){var e=t().length,a=i<r,p=a?i:r,m=a?r:i;o=(m-p)/Math.max(1,e-u+d*2),c&&(o=Math.floor(o)),p+=(m-p-o*(e-u))*f,s=o*(1-u),c&&(p=Math.round(p),s=Math.round(s));var h=l(e).map(function(e){return p+o*e});return n(a?h.reverse():h)}return e.domain=function(e){return arguments.length?(t(e),p()):t()},e.range=function(e){return arguments.length?([r,i]=e,r=+r,i=+i,p()):[r,i]},e.rangeRound=function(e){return[r,i]=e,r=+r,i=+i,c=!0,p()},e.bandwidth=function(){return s},e.step=function(){return o},e.round=function(e){return arguments.length?(c=!!e,p()):c},e.padding=function(e){return arguments.length?(u=Math.min(1,d=+e),p()):u},e.paddingInner=function(e){return arguments.length?(u=Math.min(1,e),p()):u},e.paddingOuter=function(e){return arguments.length?(d=+e,p()):d},e.align=function(e){return arguments.length?(f=Math.max(0,Math.min(1,e)),p()):f},e.copy=function(){return ne(t(),[r,i]).round(c).paddingInner(u).paddingOuter(d).align(f)},a.apply(p(),arguments)}function V(e,t){if((o=e.length)>1)for(var n=1,r,i,a=e[t[0]],o,s=a.length;n<o;++n)for(i=a,a=e[t[n]],r=0;r<s;++r)a[r][1]+=a[r][0]=isNaN(i[r][1])?i[r][0]:i[r][1]}function H(e){for(var t=e.length,n=Array(t);--t>=0;)n[t]=t;return n}function re(e,t){return e[t]}function U(e){let t=[];return t.key=e,t}function ie(){var e=u([]),t=H,r=V,i=re;function a(a){var o=Array.from(e.apply(this,arguments),U),s,c=o.length,l=-1,u;for(let e of a)for(s=0,++l;s<c;++s)(o[s][l]=[0,+i(e,o[s].key,l,a)]).data=e;for(s=0,u=n(t(o));s<c;++s)o[u[s]].index=s;return r(o,u),o}return a.keys=function(t){return arguments.length?(e=typeof t==`function`?t:u(Array.from(t)),a):e},a.value=function(e){return arguments.length?(i=typeof e==`function`?e:u(+e),a):i},a.order=function(e){return arguments.length?(t=e==null?H:typeof e==`function`?e:u(Array.from(e)),a):t},a.offset=function(e){return arguments.length?(r=e??V,a):r},a}function ae(e,t){if((r=e.length)>0){for(var n,r,i=0,a=e[0].length,o;i<a;++i){for(o=n=0;n<r;++n)o+=e[n][i][1]||0;if(o)for(n=0;n<r;++n)e[n][i][1]/=o}V(e,t)}}function oe(e,t){if((c=e.length)>0)for(var n,r=0,i,a,o,s,c,l=e[t[0]].length;r<l;++r)for(o=s=0,n=0;n<c;++n)(a=(i=e[t[n]][r])[1]-i[0])>0?(i[0]=o,i[1]=o+=a):a<0?(i[1]=s,i[0]=s+=a):(i[0]=0,i[1]=a)}var W={states:{label:t(`State`),getId:e=>pack.cells.state[e],getName:Z(`states`),getColors:Q(`states`),landOnly:!0},cultures:{label:t(`Culture`),getId:e=>pack.cells.culture[e],getName:Z(`cultures`),getColors:Q(`cultures`),landOnly:!0},religions:{label:t(`Religion`),getId:e=>pack.cells.religion[e],getName:Z(`religions`),getColors:Q(`religions`),landOnly:!0},provinces:{label:t(`Province`),getId:e=>pack.cells.province[e],getName:Z(`provinces`),getColors:Q(`provinces`),landOnly:!0},biomes:{label:t(`Biome`),getId:e=>pack.cells.biome[e],getName:Ce,getColors:we,landOnly:!1},markets:{label:t(`Market`),getId:e=>pack.cells.market[e],getName:Te,getColors:Ee,landOnly:!1},goods:{label:t(`Good`),requires:`good`,getId:(e,t)=>t.good,getName:De,getColors:Oe,landOnly:!1}},G={total_population:{label:t(`Total population`),quantize:e=>Ae(e)+je(e),aggregate:t=>e(_(t)),formatTicks:e=>S(e),stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},urban_population:{label:t(`Urban population`),quantize:Ae,aggregate:t=>e(_(t)),formatTicks:e=>S(e),stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},rural_population:{label:t(`Rural population`),quantize:je,aggregate:t=>e(_(t)),formatTicks:e=>S(e),stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},area:{label:t(`Land area`),quantize:e=>w(pack.cells.area[e]),aggregate:t=>e(_(t)),formatTicks:e=>`${S(e)} ${E()}`,stringify:e=>`${e.toLocaleString()} ${E()}`,stackable:!0,landOnly:!0},cells:{label:t(`Cells`),hint:t(`Number of land cells`),quantize:()=>1,aggregate:e=>_(e),formatTicks:e=>e,stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},burgs_number:{label:t(`Burgs`),hint:t(`Number of burgs`),quantize:e=>+!!pack.cells.burg[e],aggregate:e=>_(e),formatTicks:e=>e,stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},average_elevation:{label:t(`Average elevation`),quantize:e=>pack.cells.h[e],aggregate:e=>g(e),formatTicks:e=>D(e),stringify:e=>D(e),stackable:!1,landOnly:!1},max_elevation:{label:t(`Maximum mean elevation`),quantize:e=>pack.cells.h[e],aggregate:e=>p(e),formatTicks:e=>D(e),stringify:e=>D(e),stackable:!1,landOnly:!1},min_elevation:{label:t(`Minimum mean elevation`),quantize:e=>pack.cells.h[e],aggregate:e=>o(e),formatTicks:e=>D(e),stringify:e=>D(e),stackable:!1,landOnly:!1},average_temperature:{label:t(`Annual mean temperature`),quantize:e=>grid.cells.temp[pack.cells.g[e]],aggregate:e=>g(e),formatTicks:e=>T(e),stringify:e=>T(e),stackable:!1,landOnly:!1},max_temperature:{label:t(`Annual max temperature`),hint:t(`Highest mean temperature of the year`),quantize:e=>grid.cells.temp[pack.cells.g[e]],aggregate:e=>p(e),formatTicks:e=>T(e),stringify:e=>T(e),stackable:!1,landOnly:!1},min_temperature:{label:t(`Annual min temperature`),hint:t(`Lowest mean temperature of the year`),quantize:e=>grid.cells.temp[pack.cells.g[e]],aggregate:e=>o(e),formatTicks:e=>T(e),stringify:e=>T(e),stackable:!1,landOnly:!1},average_precipitation:{label:t(`Annual mean precipitation`),quantize:e=>grid.cells.prec[pack.cells.g[e]],aggregate:t=>e(g(t)),formatTicks:t=>C(e(t)),stringify:t=>C(e(t)),stackable:!1,landOnly:!0},max_precipitation:{label:t(`Annual max precipitation`),hint:t(`Highest mean precipitation of the year`),quantize:e=>grid.cells.prec[pack.cells.g[e]],aggregate:t=>e(p(t)),formatTicks:t=>C(e(t)),stringify:t=>C(e(t)),stackable:!1,landOnly:!0},min_precipitation:{label:t(`Annual min precipitation`),hint:t(`Lowest mean precipitation of the year`),quantize:e=>grid.cells.prec[pack.cells.g[e]],aggregate:t=>e(o(t)),formatTicks:t=>C(e(t)),stringify:t=>C(e(t)),stackable:!1,landOnly:!0},coastal_cells:{label:t(`Number of coastal cells`),quantize:e=>+(pack.cells.t[e]===1),aggregate:e=>_(e),formatTicks:e=>e,stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},river_cells:{label:t(`Number of river cells`),quantize:e=>+!!pack.cells.r[e],aggregate:e=>_(e),formatTicks:e=>e,stringify:e=>e.toLocaleString(),stackable:!0,landOnly:!0},production_value:{label:t(`Production value`),hint:t(`Worth of produced goods`),provides:[`good`],prepare:()=>({biomeProduction:Goods.getBiomesProduction()}),getContributions:(e,{biomeProduction:t})=>{let n=ke(e,t),r=[];for(let[e,t]of Object.entries(n)){let n=Goods.get(+e);n&&r.push({good:+e,value:t*n.value})}return r},aggregate:t=>e(_(t)),formatTicks:e=>S(e),stringify:e=>O(e),stackable:!0,landOnly:!0},production_units:{label:t(`Production volume`),hint:t(`Units of goods produced`),provides:[`good`],prepare:()=>({biomeProduction:Goods.getBiomesProduction()}),getContributions:(e,{biomeProduction:t})=>{let n=ke(e,t),r=[];for(let[e,t]of Object.entries(n))r.push({good:+e,value:t});return r},aggregate:t=>e(_(t)),formatTicks:e=>S(e),stringify:e=>`${e.toLocaleString()} units`,stackable:!0,landOnly:!0},burgs_profit:{label:t(`Burgs profit`),hint:t(`Burgs profit from trade and manufacturing`),quantize:e=>{let t=pack.cells.burg[e];return t&&pack.burgs[t].product||0},aggregate:t=>e(_(t)),formatTicks:e=>S(e),stringify:e=>O(e),stackable:!0,landOnly:!0}},se={stackedBar:{offset:oe},normalizedStackedBar:{offset:ae,formatX:t=>`${e(t*100)}%`}},K=[],ce;function le(){ue(),ge(),de(),M(`#chartsOverview, .stable`);let e=mapHistory.at(-1)?.created;if(ce!==e&&(K=[],ce=e),!K.length)fe();else for(let e of K)pe(e);$(`#chartsOverview`).dialog({title:t(`Data Charts`),width:`60vw`,height:`auto`,position:{my:`center`,at:`center`,of:`svg`},close:_e})}function ue(){A(`chartsOverview`);let e=Object.entries(W).map(([e,{label:t}])=>[e,t]),n=Object.entries(G).map(([e,{label:t}])=>[e,t]),i=([e,t])=>`<option value="${e}">${t}</option>`,a=e=>e.map(i).join(``),o=`<div id="chartsOverview" class="dialog stable">
    <form id="chartsOverview__form">
      <div>
        <button data-tip="${t(`Add`)}" type="submit">${t(`Plot`)}</button>

        <select data-tip="${t(`Select entity (y axis)`)}" id="chartsOverview__entitiesSelect">
          ${a(e)}
        </select>

        <label for="chartsOverview__plotBySelect" data-tip="${t(`Select metric to plot (x axis)`)}">
          <span>${t(`by`)}</span>
          <select id="chartsOverview__plotBySelect">
            ${a(n)}
          </select>
          <i id="chartsOverview__plotByInfo" class="icon-info-circled" style="display: none"></i>
        </label>

        <label for="chartsOverview__groupBySelect" data-tip="${t(`Select entity to group by. If you don't need grouping, set it the same as the entity`)}">
          <span>${t(`grouped by`)}</span>
          <select id="chartsOverview__groupBySelect">
            ${a(e)}
          </select>
        </label>

        <label data-tip="${t(`Sorting type`)}" for="chartsOverview__sortingSelect">
          <span>${t(`sorted`)}</span>
          <select id="chartsOverview__sortingSelect">
            <option value="value">${t(`by value`)}</option>
            <option value="name">${t(`by name`)}</option>
            <option value="natural">${t(`naturally`)}</option>
          </select>
        </label>
      </div>

      <div>
        <label data-tip="${t(`Select chart type`)}" for="chartsOverview__chartType">
          <span>${t(`Type`)}</span>
          <select id="chartsOverview__chartType">
            <option value="stackedBar" selected>${t(`Stacked Bar`)}</option>
            <option value="normalizedStackedBar">${t(`Normalized Bar`)}</option>
          </select>
        </label>

        <label data-tip="${t(`Show the charts in 1, 2, 3 or 4 columns`)}" for="chartsOverview__viewColumns">
          <span>${t(`Columns`)}</span>
          <select id="chartsOverview__viewColumns">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </label>

        <label data-tip="${t(`Exclude zero element from the results (id 0, e.g. the neutral state)`)}" for="chartsOverview__excludeNeutral">
          <input id="chartsOverview__excludeNeutral" type="checkbox" class="native" />
          <span>${t(`Exclude neutral`)}</span>
        </label>
      </div>
    </form>

    <section id="chartsOverview__charts"></section>
  </div>`;m(`dialogs`).insertAdjacentHTML(`beforeend`,o),m(`chartsOverview__entitiesSelect`).value=`states`,m(`chartsOverview__plotBySelect`).value=`total_population`,m(`chartsOverview__groupBySelect`).value=`cultures`,m(`chartsOverview__form`).addEventListener(`submit`,fe),m(`chartsOverview__viewColumns`).addEventListener(`change`,ge),m(`chartsOverview__plotBySelect`).addEventListener(`change`,de),r(`chartsOverviewStyle`)?.remove();let s=document.createElement(`style`);s.id=`chartsOverviewStyle`,s.textContent=`
    #chartsOverview {
      max-width: 90vw !important;
      max-height: 90vh !important;
      overflow: hidden;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    #chartsOverview__form {
      display: grid;
      font-size: 1.1em;
      margin: 0.3em 0;
    }

    #chartsOverview__form > div:first-child {
      display: flex;
      align-items: center;
      gap: 0.2em;
    }

    #chartsOverview__form > div:nth-child(2) {
      display: flex;
      align-items: center;
      gap: 1em;
    }

    #chartsOverview__form label {
      display: inline-flex;
      align-items: center;
    }

    #chartsOverview__charts {
      overflow: auto;
      scroll-behavior: smooth;
      display: grid;
    }

    #chartsOverview__charts figure {
      margin: 0;
      padding: 0.6em 0 1em;
      border-top: 1px solid rgba(128, 128, 128, 0.4);
    }

    #chartsOverview__charts figcaption {
      font-size: 1.2em;
      margin: 0 1% 0.4em 4%;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr auto;
    }

    #chartsOverview__plotByInfo {
      margin-left: 0.3em;
      cursor: help;
      opacity: 0.6;
    }
  `,document.head.appendChild(s)}function de(){let e=m(`chartsOverview__plotBySelect`).value,t=m(`chartsOverview__plotByInfo`),{hint:n}=G[e];n?(t.dataset.tip=n,t.style.display=``):t.style.display=`none`}function fe(e){e&&e.preventDefault();let n=m(`chartsOverview__entitiesSelect`).value,r=m(`chartsOverview__plotBySelect`).value,i=m(`chartsOverview__groupBySelect`).value,a=m(`chartsOverview__sortingSelect`).value,o=m(`chartsOverview__chartType`).value,s=m(`chartsOverview__excludeNeutral`).checked,{label:c,stackable:l,provides:u=[]}=G[r],d=[n,i].find(e=>{let t=W[e].requires;return t?!u.includes(t):!1});if(d){k(t(`{{plot}} cannot be broken down by {{group}}`,{plot:c,group:W[d].label.toLowerCase()}),!1,`error`,4e3);return}!l&&i!==n&&(k(t(`Grouping is not supported for {{plot}}`,{plot:r}),!1,`warn`,4e3),i=n);let f={id:Date.now(),entity:n,plotBy:r,groupBy:i,sorting:a,type:o,excludeNeutral:s};K.push(f),pe(f),q()}function pe({id:n,entity:r,plotBy:i,groupBy:a,sorting:o,type:s,excludeNeutral:c}){let{label:l,stringify:u,quantize:d,getContributions:f,prepare:p,aggregate:h,formatTicks:g,landOnly:_}=G[i],v=a===r,{label:y,getName:b,getId:S,landOnly:C}=W[r],{label:w,getName:T,getId:E,getColors:D}=W[a],O=p?p():void 0,k=f?e=>f(e,O):e=>[{value:d(e)}],A=v?t(`{{- metric}} by {{- entity}}`,{metric:l,entity:y}):t(`{{- metric}} by {{- entity}}, grouped by {{- group}}`,{metric:l,entity:y,group:w}),j=(t,n,r,i)=>{let a=`${y}: ${t}`,o=v?``:`${w}: ${n}`,s=`${l}: ${u(r)}`;return v||(s+=` (${e(i*100)}%)`),[a,o,s].filter(Boolean)},M={},N=new Set;for(let e of pack.cells.i)if(!((C||_)&&x(e,pack)))for(let t of k(e)){let n=S(e,t),r=E(e,t);if(c&&(n===0||r===0))continue;let{value:i}=t;M[n]?M[n][r]?M[n][r].push(i):M[n][r]=[i]:M[n]={[r]:[i]},N.add(r)}let P=Me(Object.entries(M).flatMap(([e,t])=>{let n=b(e);return Object.entries(t).map(([e,t])=>{let r=T(e),i=h(t);return{name:n,group:r,value:i}})}),o),F=D(),{offset:I,formatX:L=g}=se[s];he(n,P,me(P,{colors:F,tooltip:j,offset:I,formatX:L}),A),m(`chartsOverview__charts`).lastElementChild?.scrollIntoView()}function me(e,{colors:t,tooltip:n,offset:r,formatX:a}){let o=e.map(e=>e.value),s=e.map(e=>e.name),c=e.map(e=>e.group),u=new Set(s),d=new Set(c),f=l(o.length).filter(e=>u.has(s[e])&&d.has(c[e])),p=Array.from(u),m=Array.from(d),g=xe(p),b=Se(m,X-g-15),x={top:30,right:15,bottom:b*20+10,left:g},S=[x.left,X-x.right],C=u.size*25+x.top+x.bottom,w=[C-x.bottom,x.top],T=ee(f,([e])=>e,e=>s[e],e=>c[e]),E=ie().keys(m).value(([,e],t)=>o[new Map(e).get(t)]).order(H).offset(r)(T).map(e=>{let t=e.filter(e=>!Number.isNaN(e[1])).map(t=>Object.assign(t,{i:new Map(t.data[1]).get(e.key)}));return{key:e.key,data:t}}),D=E.flatMap(e=>e.data.flatMap(e=>[e[0],e[1]])),O=h(D),A=i(O,S),j=ne(p,w).paddingInner(ve),M=y(A).ticks(X/80,null),N=v(j).tickSizeOuter(0),P=te(`svg`).attr(`version`,`1.1`).attr(`xmlns`,`http://www.w3.org/2000/svg`).attr(`viewBox`,`0 0 ${X} ${C}`).attr(`style`,`max-width: 100%; height: auto; height: intrinsic;`);P.append(`g`).attr(`transform`,`translate(0,${x.top})`).call(M).call(e=>e.select(`.domain`).remove()).call(e=>e.selectAll(`text`).text(e=>a(e))).call(e=>e.selectAll(`.tick line`).clone().attr(`y2`,C-x.top-x.bottom).attr(`stroke-opacity`,.1));let F=P.append(`g`).attr(`stroke`,`#666`).attr(`stroke-width`,.5).selectAll(`g`).data(E).join(`g`).attr(`fill`,e=>t[e.key]).selectAll(`rect`).data(e=>e.data.filter(([e,t])=>e!==t)).join(`rect`).attr(`x`,([e,t])=>Math.min(A(e),A(t))).attr(`y`,({i:e})=>j(s[e])).attr(`width`,([e,t])=>Math.abs(A(e)-A(t))).attr(`height`,j.bandwidth()),I=Object.fromEntries(ee(f,e=>_(e,e=>o[e]),e=>s[e])),L=({i:e})=>n(s[e],c[e],o[e],o[e]/I[s[e]]);F.append(`title`).text(e=>L(e).join(`\r
`)),F.on(`mouseover`,(e,t)=>k(L(t).join(`. `))),P.append(`g`).attr(`transform`,`translate(${A(0)},0)`).call(N);let R=Math.ceil(m.length/b),z=X/(R+.5),B=(e,t)=>t%R*z,V=(e,t)=>B(e,t)+be,re=(e,t)=>Math.floor(t/R)*20,U=P.append(`g`).attr(`stroke`,`#666`).attr(`stroke-width`,.5).attr(`dominant-baseline`,`central`).attr(`transform`,`translate(${x.left},${C-x.bottom+15})`);return U.selectAll(`circle`).data(m).join(`rect`).attr(`x`,B).attr(`y`,re).attr(`width`,10).attr(`height`,10).attr(`transform`,`translate(-5, -5)`).attr(`fill`,e=>t[e]),U.selectAll(`text`).data(m).join(`text`).attr(`x`,V).attr(`y`,re).text(e=>e),P.node()}function he(e,n,r,i){let a=m(`chartsOverview__charts`),o=document.createElement(`figure`),s=document.createElement(`figcaption`),c=a.childElementCount+1;s.innerHTML=`
    <div>
      <strong>${t(`Figure {{number}}`,{number:c})}</strong>. ${i}
    </div>
    <div>
      <button data-tip="${t(`Download the chart data as a CSV file`)}" class="icon-download"></button>
      <button data-tip="${t(`Download the chart as a PNG image`)}" class="icon-export"></button>
      <button data-tip="${t(`Download the chart in SVG format (vector, opens in a browser or Inkscape)`)}" class="icon-chart-bar"></button>
      <button data-tip="${t(`Remove`)}" class="icon-trash"></button>
    </div>
  `,o.appendChild(s),o.appendChild(r),a.appendChild(o),o.querySelector(`button.icon-download`)?.addEventListener(`click`,()=>{let e=n.map(({name:e,group:t,value:n})=>[e,t,n]);b.download(i,[`Name`,`Group`,`Value`],e)}),o.querySelector(`button.icon-export`)?.addEventListener(`click`,()=>{let{width:e,height:t}=r.viewBox.baseVal,n=r.cloneNode(!0);n.setAttribute(`width`,String(e)),n.setAttribute(`height`,String(t));let a=new XMLSerializer().serializeToString(n),o=URL.createObjectURL(new Blob([a],{type:`image/svg+xml;charset=utf-8`})),s=new Image;s.onload=()=>{let n=document.createElement(`canvas`);n.width=e*2,n.height=t*2;let r=n.getContext(`2d`);r&&(r.fillStyle=`#fff`,r.fillRect(0,0,n.width,n.height),r.drawImage(s,0,0,n.width,n.height),n.toBlob(e=>e&&f(e,`${d(i)}.png`,`image/png`))),URL.revokeObjectURL(o)},s.src=o}),o.querySelector(`button.icon-chart-bar`)?.addEventListener(`click`,()=>{let e=`${d(i)}.svg`;f(r.outerHTML,e)}),o.querySelector(`button.icon-trash`)?.addEventListener(`click`,()=>{o.remove(),K=K.filter(t=>t.id!==e),q()})}function ge(){let e=m(`chartsOverview__viewColumns`).value,t=m(`chartsOverview__charts`);t.style.gridTemplateColumns=`repeat(${e}, 1fr)`,q()}function q(){j(`chartsOverview`,{position:{my:`center`,at:`center`,of:`svg`,collision:`fit`}})}function _e(){$(`#chartsOverview`).dialog(`destroy`),m(`chartsOverview`).remove(),r(`chartsOverviewStyle`)?.remove()}var J=`#ccc`,Y=`no`,X=800,ve=.2,ye=7,be=10;function xe(e){return p(e.map(e=>e.length))*ye}function Se(e,t){if(!e.length)return 0;let n=be+xe(e),r=Math.max(1,Math.floor(t/n));return Math.ceil(e.length/r)}function Z(e){return t=>pack[e][+t]?.name||Y}function Q(e){return()=>Object.fromEntries(pack[e].map(e=>[e.name||Y,e.color||J]))}function Ce(e){return pack.biomes[+e]?.name||Y}function we(){return Object.fromEntries(pack.biomes.map(({name:e,color:t})=>[e,t]))}function Te(e){let t=Markets.get(+e);return t?t.name||pack.burgs[t.centerBurgId]?.name||`Market ${t.i}`:Y}function Ee(){return Object.fromEntries((pack.markets||[]).map(e=>[Te(e.i),e.color||J]))}function De(e){return Goods.get(+e)?.name||Y}function Oe(){return Object.fromEntries((pack.goods||[]).map(e=>[e.name||Y,e.color||J]))}function ke(e,t){let n=Production.getCellProduction(e,t),r=pack.cells.burg[e];if(r){let e=Production.getBurgProduction(pack.burgs[r]);for(let[t,r]of Object.entries(e))n[+t]=(n[+t]||0)+r}return n}function Ae(e){let t=pack.cells.burg[e];return t?(pack.burgs[t].population||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate:0}function je(e){return pack.cells.pop[e]*options.map.units.population.scale}function Me(e,t){if(t===`natural`)return e;if(t===`name`)return e.sort((e,t)=>e.name===t.name?e.group.localeCompare(t.group):t.name.localeCompare(e.name));if(t===`value`){let t={},n={};for(let{name:r,group:i,value:a}of e)t[r]=(t[r]||0)+a,n[i]=(n[i]||0)+a;return e.sort((e,r)=>e.name===r.name?n[r.group]-n[e.group]:t[e.name]-t[r.name])}return e}var Ne={open:le};export{Ne as ChartsOverview};