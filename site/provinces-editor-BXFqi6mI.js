import{C as e,d as t,n,r}from"./index-CuUJKJN8.js";import{B as i,H as a,L as o,P as s,Qt as c,Wt as l,X as u,dn as d,gt as f,xt as p,yt as m,z as h,zt as g}from"./utils-394NS37_.js";import{$ as _,J as v,X as y,Y as b,a as x,o as S,t as C}from"./layers-CpGI7aJd.js";import{t as ee}from"./sin-DYm9hqTl.js";import{i as te,n as ne}from"./highlight-DOx2q_4P.js";import{t as w}from"./csv-BZ59UuP0.js";import{r as re,t as ie}from"./stratify-CGdiYggi.js";import{n as T,t as E}from"./constant-CUk6ox2a.js";import{t as ae}from"./heightUtils-BfaaFPbS.js";import{S as D,a as O,o as k}from"./unitUtils-B91DAWIJ.js";import{i as A,t as oe}from"./tooltips-7PimaK30.js";import{t as j}from"./state-B2hBYDzv.js";import{t as M}from"./controllers-lOfLnkBO.js";import{i as N,l as P,n as se,r as F,s as ce}from"./dialog-helpers-kMHr89OS.js";import{t as le}from"./viewbox-events-DpWtTLWO.js";import{t as I}from"./tags-4fjWFj3G.js";import{i as ue,r as de}from"./app-C3meBrse.js";import{t as fe}from"./highlighting-CMuZl7i6.js";import{a as pe,i as me,n as he,r as ge}from"./table-CEa9eCSl.js";import{t as _e}from"./annex-mode-DySIQai7.js";function ve(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}function ye(e,t,n,r,i){for(var a=e.children,o,s=-1,c=a.length,l=e.value&&(r-t)/e.value;++s<c;)o=a[s],o.y0=n,o.y1=i,o.x0=t,o.x1=t+=o.value*l}function be(e,t,n,r,i){for(var a=e.children,o,s=-1,c=a.length,l=e.value&&(i-n)/e.value;++s<c;)o=a[s],o.x0=t,o.x1=r,o.y0=n,o.y1=n+=o.value*l}var xe=(1+Math.sqrt(5))/2;function Se(e,t,n,r,i,a){for(var o=[],s=t.children,c,l,u=0,d=0,f=s.length,p,m,h=t.value,g,_,v,y,b,x,S;u<f;){p=i-n,m=a-r;do g=s[d++].value;while(!g&&d<f);for(_=v=g,x=Math.max(m/p,p/m)/(h*e),S=g*g*x,b=Math.max(v/S,S/_);d<f;++d){if(g+=l=s[d].value,l<_&&(_=l),l>v&&(v=l),S=g*g*x,y=Math.max(v/S,S/_),y>b){g-=l;break}b=y}o.push(c={value:g,dice:p<m,children:s.slice(u,d)}),c.dice?ye(c,n,r,i,h?r+=m*g/h:a):be(c,n,r,h?n+=p*g/h:i,a),h-=g,u=d}return o}var Ce=(function e(t){function n(e,n,r,i,a){Se(t,e,n,r,i,a)}return n.ratio=function(t){return e((t=+t)>1?t:1)},n})(xe);function we(){var e=Ce,t=!1,n=1,r=1,i=[0],a=E,o=E,s=E,c=E,l=E;function u(e){return e.x0=e.y0=0,e.x1=n,e.y1=r,e.eachBefore(d),i=[0],t&&e.eachBefore(ve),e}function d(t){var n=i[t.depth],r=t.x0+n,u=t.y0+n,d=t.x1-n,f=t.y1-n;d<r&&(r=d=(r+d)/2),f<u&&(u=f=(u+f)/2),t.x0=r,t.y0=u,t.x1=d,t.y1=f,t.children&&(n=i[t.depth+1]=a(t)/2,r+=l(t)-n,u+=o(t)-n,d-=s(t)-n,f-=c(t)-n,d<r&&(r=d=(r+d)/2),f<u&&(u=f=(u+f)/2),e(t,r,u,d,f))}return u.round=function(e){return arguments.length?(t=!!e,u):t},u.size=function(e){return arguments.length?(n=+e[0],r=+e[1],u):[n,r]},u.tile=function(t){return arguments.length?(e=re(t),u):e},u.padding=function(e){return arguments.length?u.paddingInner(e).paddingOuter(e):u.paddingInner()},u.paddingInner=function(e){return arguments.length?(a=typeof e==`function`?e:T(+e),u):a},u.paddingOuter=function(e){return arguments.length?u.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):u.paddingTop()},u.paddingTop=function(e){return arguments.length?(o=typeof e==`function`?e:T(+e),u):o},u.paddingRight=function(e){return arguments.length?(s=typeof e==`function`?e:T(+e),u):s},u.paddingBottom=function(e){return arguments.length?(c=typeof e==`function`?e:T(+e),u):c},u.paddingLeft=function(e){return arguments.length?(l=typeof e==`function`?e:T(+e),u):l},u}var L=`provincesEditor`,R=[`Id`,`Province`,`Full Name`,`Form`,`State`,`Color`,`Capital`,`Area`,`Total Population`,`Rural Population`,`Urban Population`,`Burgs`,`Tags`],z={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},B,V=e=>O(e.area),H=t=>e(t.rural*options.map.units.population.scale+t.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate),U=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:r(`Province`),width:`7em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`emblem`,width:`1.4em`},{key:`form`,label:r(`Form`),width:`7em`,mobileHidden:!0,sortBy:e=>e.formName||``,sortType:`alpha`},{key:`capital`,label:r(`Capital`),width:`7em`,sortBy:e=>e.burg&&pack.burgs[e.burg]?.name||``,sortType:`alpha`},{key:`state`,label:r(`State`),width:`7em`,permanent:!0,sortBy:e=>pack.states[e.state]?.name||``,sortType:`alpha`},{key:`burgs`,label:r(`Burgs`),width:`5em`,mobileHidden:!0,sortBy:e=>e.burgs?.length||0},{key:`area`,label:r(`Area`),width:`7em`,mobileHidden:!0,defaultSort:`desc`,sortBy:V},{key:`population`,label:r(`Population`),width:`6em`,sortBy:H},{key:`tags`,label:r(`Tags`),width:`10em`,hidden:!0,sortBy:e=>I.format(e.tags),sortType:`alpha`},{key:`note`,width:`1.1em`},{key:`independence`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`focus`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}],W=ge({getData:J,onUpdate:Oe});function G(){customization||(B=j.get(L,`filters`,()=>({stateId:1,search:``})),se(`#provincesEditor, .stable`),C.show(`provinces`,`borders`),C.hide(`states`,`cultures`),Ee(),K(),$(`#provincesEditor`).dialog({title:r(`Provinces Editor`),resizable:!1,width:`fit-content`,close:at,position:z}))}function Te(){B.search=h(`provincesSearch`).value,j.set(L,`filters`,B),W.reset()}function Ee(){N(`provincesEditor`);let e=`<div id="provincesEditor" class="dialog stable editorDialog">
      <div id="provincesBodySection" class="table" data-type="absolute">
        ${me({dialogId:L,columns:U})}
      </div>
      <div id="provincesFilters" data-tip="${r(`Apply a filter`)}" class="editorFilters">
        <label for="provincesSearch" data-tip="${r(`Filter by name, form, capital, state, or tag`)}">
          ${r(`Search`)}: <input id="provincesSearch" type="search" />
        </label>
      </div>
      <div id="provincesFooter" class="totalLine">
        <div data-tip="${r(`Provinces displayed`)}" style="margin-left: 4px">
          ${r(`Provinces`)}:&nbsp;<span id="provincesFooterNumber">0</span>
        </div>
        <div data-tip="${r(`Number of burgs`)}" style="margin-left: 12px" data-col="burgs">
          ${r(`Burgs`)}:&nbsp;<span id="provincesFooterBurgs">0</span>
        </div>
        <div data-tip="${r(`Average area`)}" style="margin-left: 14px" data-col="area">
          ${r(`Mean area`)}:&nbsp;<span id="provincesFooterArea">0</span>
        </div>
        <div data-tip="${r(`Average population`)}" style="margin-left: 14px" data-col="population">
          ${r(`Mean population`)}:&nbsp;<span id="provincesFooterPopulation">0</span>
        </div>
      </div>
      <div id="provincesBottom" class="editorToolbar">
        <button id="provincesEditorRefresh" data-tip="${r(`Refresh`)}" class="icon-cw"></button>
        <button id="provincesEditStyle" data-tip="${r(`Edit style in Style Editor`)}" class="icon-adjust"></button>
        <button
          id="provincesRecolor"
          data-tip="${r(`Recolor listed provinces based on state color`)}"
          class="icon-paint-roller"
        ></button>
        <button
          id="provincesPercentage"
          data-tip="${r(`Toggle percentage / absolute values views`)}"
          class="icon-percent"
        ></button>
        <button id="provincesChart" data-tip="${r(`Provinces chart`)}" class="icon-chart-area"></button>
        <button
          id="provincesExport"
          data-tip="${r(`Save data as a CSV file`)}"
          class="icon-download"
        ></button>
        <button id="provincesImport" data-tip="${r(`Upload data from a CSV file`)}" class="icon-upload"></button>
        <button id="provincesManually" data-tip="${r(`Manually re-assign provinces`)}" class="icon-brush"></button>
        <button
          id="provincesRelease"
          data-tip="${r(`Release all provinces. It will make all provinces with burgs independent`)}"
          class="icon-flag"
        ></button>
        <button
          id="provincesAdd"
          data-tip="${n(r(`Add`),r(`Hold Shift to add multiple`))}"
          class="icon-plus"
        ></button>
        <button id="provincesMerge" data-tip="${r(`Merge several provinces into one`)}" class="icon-layer-group"></button>
        <button
          id="provincesAnnex"
          data-tip="${n(r(`Annex provinces: click the annexing province, then the provinces of the same state it absorbs`),r(`Hold Shift to keep annexing`))}"
          class="icon-crown"
        ></button>
        <button
          id="provincesRemoveAll"
          data-tip="${n(r(`Remove all provinces`),r(`States will remain as they are`))}"
          class="icon-trash"
        ></button>
        <span>${r(`State`)}: </span>
        <select id="provincesFilterState"></select>
      </div>
    </div>`;h(`dialogs`).insertAdjacentHTML(`beforeend`,e);let t=h(`provincesSearch`);t.value=B.search??``,t.addEventListener(`input`,Te),de(L,W.reset),he({dialogId:L,columns:U,onUpdate:()=>P(L,{width:`fit-content`,position:z})}),fe(`provincesEditor`,({cellId:e})=>pack.cells.province[e]),h(`provincesEditorRefresh`).addEventListener(`click`,K),h(`provincesEditStyle`).addEventListener(`click`,()=>void M.StyleEditor.open(`provinces`)),h(`provincesFilterState`).addEventListener(`change`,e=>{B.stateId=+e.target.value,j.set(L,`filters`,B),W.reset()}),h(`provincesPercentage`).addEventListener(`click`,Ye),h(`provincesChart`).addEventListener(`click`,Xe),h(`provincesExport`).addEventListener(`click`,rt),h(`provincesImport`).addEventListener(`click`,()=>w.pick(ft)),h(`provincesRemoveAll`).addEventListener(`click`,it),h(`provincesManually`).addEventListener(`click`,Qe),h(`provincesRelease`).addEventListener(`click`,Ze),h(`provincesAdd`).addEventListener(`click`,et),h(`provincesMerge`).addEventListener(`click`,ot),h(`provincesAnnex`).addEventListener(`click`,Q.toggle),h(`provincesRecolor`).addEventListener(`click`,nt),h(`provincesBodySection`).addEventListener(`click`,e=>{if(customization)return;let t=e.target,n=t.classList,r=t.closest(`.states`);if(!r)return;let i=+r.dataset.id,a=pack.provinces[i].state;t.tagName===`FILL-BOX`?Me(t):n.contains(`name`)?Be(i):n.contains(`coaIcon`)?M.EmblemsEditor.open(`province`,`provinceCOA${i}`,pack.provinces[i]):n.contains(`icon-star-empty`)?Ne(i):n.contains(`icon-flag-empty`)?Pe(i):n.contains(`icon-dot-circled`)?M.BurgsOverview.open({stateId:a}):n.contains(`culturePopulation`)?Le(i):n.contains(`icon-target`)?ne(d(`#provs`).select(`#province${i}`).node(),8):n.contains(`icon-pin`)?Re(i,n):n.contains(`icon-book`)?M.NotesEditor.open({type:`province`,id:i}):n.contains(`icon-trash-empty`)?ze(i):(n.contains(`icon-lock`)||n.contains(`icon-lock-open`))&&dt(i,n)}),h(`provincesBodySection`).addEventListener(`change`,e=>{let t=e.target,n=t.classList,r=t.closest(`.states`);if(!r)return;let i=+r.dataset.id;n.contains(`cultureBase`)&&Je(i,r,t.value)})}function K(){q(),De(),W.reset()}function q(){let{cells:e,provinces:t,burgs:n}=pack;t.forEach(e=>{e.i&&!e.removed&&(e.area=e.rural=e.urban=0,e.burgs=[],(e.burg&&!n[e.burg]||n[e.burg]?.removed)&&(e.burg=0))});for(let r of e.i){let i=e.province[r];i&&(t[i].area+=e.area[r],t[i].rural+=e.pop[r],e.burg[r]&&(t[i].urban+=n[e.burg[r]].population??0,t[i].burgs.push(e.burg[r])))}t.forEach(e=>{e.i&&!e.removed&&!e.burg&&e.burgs.length&&(e.burg=e.burgs[0])})}function De(){let e=h(`provincesFilterState`);B.stateId!==-1&&!pack.states.some(e=>e.i===B.stateId&&!e.removed)&&(B.stateId=-1),e.options.length=0,e.options.add(new Option(r(`All`),`-1`,!1,B.stateId===-1)),pack.states.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name>t.name?1:-1).forEach(t=>{e.options.add(new Option(t.name,String(t.i),!1,t.i===B.stateId))}),j.set(L,`filters`,B)}function J(){let e=pack.provinces.filter(e=>e.i&&!e.removed),t=B.stateId===-1?e:e.filter(e=>e.state===B.stateId),n=B?.search?.toLowerCase().trim();return n&&(t=t.filter(e=>{let t=e.burg?pack.burgs[e.burg]?.name:``,r=pack.states[e.state]?.name;return I.matches(n,e.name,e.tags,[e.formName,t,r])})),ue(L,t,U)}function Oe(t){let i=h(`provincesBodySection`),a=` ${k()}`,o=t.all.reduce((e,t)=>({area:e.area+V(t),population:e.population+H(t),burgs:e.burgs+t.burgs.length}),{area:0,population:0,burgs:0}),s=i.dataset.type===`percentage`,c=t.rows.map(t=>{let i=V(t),c=t.rural*options.map.units.population.scale,l=t.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate,u=H(t),f=n(`${r(`Total population`)}: ${D(u)}`,`${r(`Rural population`)}: ${D(c)}`,`${r(`Urban population`)}: ${D(l)}`),p=pack.states[t.state].name,m=t.burg&&t.burg!==pack.states[t.state].capital,h=d(`#deftemp`).select(`#fog #focusProvince${t.i}`).size();return _.trigger(`provinceCOA${t.i}`,t.coa),`<div class="states" data-id=${t.i}>
      <fill-box data-col="color" fill="${t.color}"></fill-box>
      <input data-col="name" data-tip="${n(r(`Name`),r(`Click to change`))}" class="name pointer" value="${t.name}" readonly />
      <svg data-col="emblem" data-tip="${r(`Edit Emblem`)}" class="coaIcon pointer" viewBox="0 0 200 200"><use href="#provinceCOA${t.i}"></use></svg>
      <input data-col="form" data-tip="${n(r(`Form name`),r(`Click to change`))}" class="name pointer" value="${t.formName}" readonly />
      <div data-col="capital">
        <span data-tip="${n(r(`Province capital`),r(`Click to zoom`))}" class="icon-star-empty pointer ${t.burg?``:`placeholder`}"></span>
        <select data-tip="${n(r(`Province capital`),r(`Click to select from burgs within the state`),r(`No capital means the province is governed from the state capital`))}" class="cultureBase ${t.burgs.length?``:`placeholder`}">${t.burgs.length?Ae(t.burgs,t.burg):``}</select>
      </div>
      <input data-col="state" data-tip="${r(`Province owner`)}" class="provinceOwner" value="${p}" disabled>
      <div data-col="burgs">
        <span data-tip="${r(`Click to overview province burgs`)}" class="icon-dot-circled pointer"></span>
        <span data-tip="${r(`Number of burgs`)}" class="provinceBurgs">${s?`${e(o.burgs?t.burgs.length/o.burgs*100:0)}%`:t.burgs.length}</span>
      </div>
      <div data-col="area">
        <span data-tip="${r(`Province area`)}" class="icon-map-o" style="padding-right: 4px"></span>
        <span data-tip="${r(`Province area`)}" class="biomeArea">${s?`${e(o.area?i/o.area*100:0)}%`:D(i)+a}</span>
      </div>
      <div data-col="population">
        <span data-tip="${f}" class="icon-male"></span>
        <span data-tip="${f}" class="culturePopulation">${s?`${e(o.population?u/o.population*100:0)}%`:D(u)}</span>
      </div>
      <div data-col="tags">
        <input
          data-tip="${r(`Tags (comma-separated)`)}"
          class="provinceTags"
          value="${I.format(t.tags)}"
          placeholder="${r(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
        />
      </div>
      ${ce(r(`Edit free text notes (legend)`))}
      <span data-col="independence" data-tip="${r(`Declare province independence (turn non-capital province with burgs into a new state)`)}" class="icon-flag-empty ${m?``:`placeholder`}"></span>
      <span data-col="locate" data-tip="${r(`Locate on map`)}" class="icon-target"></span>
      <span data-col="focus" data-tip="${r(`Toggle province focus`)}" class="icon-pin ${h?``:` inactive`}"></span>
      <span data-col="lock" data-tip="${r(`Lock`)}" class="icon-lock${t.lock?``:`-open`}"></span>
      <span data-col="remove" data-tip="${r(`Remove`)}" class="icon-trash-empty"></span>
    </div>`}).join(``);i.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),i.insertAdjacentHTML(`beforeend`,c),h(`provincesFooterNumber`).innerHTML=String(t.all.length),h(`provincesFooterBurgs`).innerHTML=String(o.burgs),h(`provincesFooterArea`).innerHTML=t.all.length?D(o.area/t.all.length)+a:`0${a}`,h(`provincesFooterPopulation`).innerHTML=t.all.length?D(o.population/t.all.length):`0`,h(`provincesFooterArea`).dataset.area=String(o.area),h(`provincesFooterPopulation`).dataset.population=String(o.population),pe(h(`provincesFooter`),t,W.goto),i.querySelectorAll(`div.states`).forEach(e=>{e.addEventListener(`mouseenter`,je),e.addEventListener(`mouseleave`,Y)}),i.querySelectorAll(`input.provinceTags`).forEach(e=>{e.addEventListener(`change`,ke)}),P(L,{width:`fit-content`,position:z})}function ke(){let e=this.closest(`.states`),t=Number(e.dataset.id),n=pack.provinces[t];n&&(I.set(n,this.value),this.value=I.format(n.tags),B.search&&W.refresh())}function Ae(e,t){let n=``;return e.forEach(e=>{n+=`<option ${e===t?`selected`:``} value="${e}">${pack.burgs[e].name}</option>`}),n}function je(e){let t=+e.target.dataset.id,n=h(`provincesBodySection`).querySelector(`div[data-id='${t}']`);if(n&&n.classList.add(`active`),!C.isOn(`provinces`)||customization)return;let r=g().duration(2e3).ease(ee);d(`#provs`).select(`#province${t}`).raise().transition(r).attr(`stroke-width`,2.5).attr(`stroke`,`#d0240f`)}function Y(e){let t=e.target?.dataset?.id?+e.target.dataset.id:null;if(t){let e=h(`provincesBodySection`).querySelector(`div[data-id='${t}']`);e&&e.classList.remove(`active`)}!C.isOn(`provinces`)||!t||d(`#provs`).select(`#province${t}`).transition().attr(`stroke-width`,null).attr(`stroke`,null),d(`#debug`).selectAll(`.highlight`).remove()}function Me(e){let t=e.getAttribute(`fill`),n=+e.closest(`.states`).dataset.id;M.ColorPicker.open(t,t=>{e.fill=t,pack.provinces[n].color=t,C.draw(`provinces`)})}function Ne(e){let t=pack.provinces[e].burg,{x:n,y:r}=pack.burgs[t];zoomTo(n,r,8,2e3)}function Pe(e){F({title:r(`Declare independence`),message:`${r(`Are you sure you want to declare province independence?`)}<br>${r(`It will turn province into a new state`)}`,confirm:r(`Declare`),onConfirm:()=>{let t=Fe(e);if(!t)return;let[n,r]=t;Ie([n],[r])}})}function Fe(e){let n=pack.provinces[e].state;try{let t=Provinces.declareIndependence(e);return y(`province`,e),[n,t]}catch(e){A(t(e),!1,`error`)}}function Ie(e,t){let n=p([...e,...t]);C.hide(`provinces`),C.show(`states`,`borders`),C.draw(`burgIcons`,`labels`),b(n.map(e=>[`state`,e])),S(),se(),M.StatesEditor.open()}function Le(n){let i=pack.provinces[n];if(!pack.cells.i.filter(e=>pack.cells.province[e]===n).length){A(r(`No cells, cannot change population`),!1,`error`);return}let a=e(i.rural*options.map.units.population.scale),o=e(i.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate),s=a+o,c=e=>Number(e).toLocaleString();alertMessage.innerHTML=` ${r(`Rural`)}: <input type="number" min="0" step="1" id="ruralPop" value=${a} style="width:6em" /> ${r(`Urban`)}:
    <input type="number" min="0" step="1" id="urbanPop" value=${o} style="width:6em" ${i.burgs.length?``:`disabled`} />
    <p>${r(`Total population`)}: ${c(s)} ⇒ <span id="totalPop">${c(s)}</span> (<span id="totalPopPerc">100</span>%)</p>`;let l=h(`ruralPop`),u=h(`urbanPop`),d=()=>{let t=l.valueAsNumber+u.valueAsNumber;Number.isNaN(t)||(h(`totalPop`).innerHTML=c(t),h(`totalPopPerc`).innerHTML=String(e(t/s*100)))};l.oninput=()=>d(),u.oninput=()=>d(),$(`#alert`).dialog({resizable:!1,title:r(`Change province population`),width:`24em`,buttons:{[r(`Apply`)]:function(){f(),$(this).dialog(`close`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`}});function f(){try{Provinces.setPopulation(n,+l.value||0,+u.value||0)}catch(e){A(t(e),!1,`error`);return}C.draw(`population`),K()}}function Re(e,t){let n=d(`#provs`).select(`#province${e}`).attr(`d`),r=`focusProvince${e}`;t.contains(`inactive`)?x(r,n):S(r),t.toggle(`inactive`)}function ze(e){F({title:r(`Remove`),message:`${r(`Are you sure you want to remove the province?`)}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>{Provinces.remove(e),S(`focusProvince${e}`),y(`province`,e);let t=d(`#provs`).select(`#provincesBody`);t.select(`#province${e}`).remove(),t.select(`#province-gap${e}`).remove(),C.draw(`borders`),C.draw(`labels`),K()}})}function Be(e){Ve();let t=pack.provinces[e];h(`provinceNameEditor`).dataset.province=String(e),h(`provinceNameEditorShort`).value=t.name,o(h(`provinceNameEditorSelectForm`),t.formName),h(`provinceNameEditorFull`).value=t.fullName;let n=pack.cells.culture[t.center];h(`provinceCultureDisplay`).textContent=pack.cultures[n].name,$(`#provinceNameEditor`).dialog({resizable:!1,title:r(`Change province name`),buttons:{[r(`Apply`)]:function(){qe(t),$(this).dialog(`close`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`},close:He})}function Ve(){N(`provinceNameEditor`);let e=`<div id="provinceNameEditor" class="dialog" data-province="0">
      <div>
        <div data-tip="${r(`Short name`)}" class="label">${r(`Short name`)}:</div>
        <input
          id="provinceNameEditorShort"
          data-tip="${r(`Type to change the short name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em"
        />
        <span id="provinceNameEditorShortSpeak" data-tip="${n(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span
          id="provinceNameEditorShortCulture"
          data-tip="${r(`Generate culture-specific name`)}"
          class="icon-book pointer"
        ></span>
        <span id="provinceNameEditorShortRandom" data-tip="${r(`Generate random name`)}" class="icon-globe pointer"></span>
      </div>
      <div data-tip="${r(`Select form name`)}">
        <div data-tip="${r(`Form name`)}" class="label">${r(`Form name`)}:</div>
        <select id="provinceNameEditorSelectForm" style="display: inline-block; width: 11em; height: 1.645em">
          <option value="">${r(`blank`)}</option>
          <option value="Area">${r(`Area`)}</option>
          <option value="Autonomy">${r(`Autonomy`)}</option>
          <option value="Barony">${r(`Barony`)}</option>
          <option value="Canton">${r(`Canton`)}</option>
          <option value="Captaincy">${r(`Captaincy`)}</option>
          <option value="Chiefdom">${r(`Chiefdom`)}</option>
          <option value="Clan">${r(`Clan`)}</option>
          <option value="Colony">${r(`Colony`)}</option>
          <option value="Council">${r(`Council`)}</option>
          <option value="County">${r(`County`)}</option>
          <option value="Deanery">${r(`Deanery`)}</option>
          <option value="Department">${r(`Department`)}</option>
          <option value="Dependency">${r(`Dependency`)}</option>
          <option value="Diaconate">${r(`Diaconate`)}</option>
          <option value="District">${r(`District`)}</option>
          <option value="Earldom">${r(`Earldom`)}</option>
          <option value="Governorate">${r(`Governorate`)}</option>
          <option value="Island">${r(`Island`)}</option>
          <option value="Islands">${r(`Islands`)}</option>
          <option value="Land">${r(`Land`)}</option>
          <option value="Landgrave">${r(`Landgrave`)}</option>
          <option value="Mandate">${r(`Mandate`)}</option>
          <option value="Margrave">${r(`Margrave`)}</option>
          <option value="Municipality">${r(`Municipality`)}</option>
          <option value="Occupation zone">${r(`Occupation zone`)}</option>
          <option value="Parish">${r(`Parish`)}</option>
          <option value="Prefecture">${r(`Prefecture`)}</option>
          <option value="Province">${r(`Province`)}</option>
          <option value="Region">${r(`Region`)}</option>
          <option value="Republic">${r(`Republic`)}</option>
          <option value="Reservation">${r(`Reservation`)}</option>
          <option value="Seneschalty">${r(`Seneschalty`)}</option>
          <option value="Shire">${r(`Shire`)}</option>
          <option value="State">${r(`State`)}</option>
          <option value="Territory">${r(`Territory`)}</option>
          <option value="Tribe">${r(`Tribe`)}</option>
        </select>
        <input
          id="provinceNameEditorCustomForm"
          placeholder="${r(`Enter custom form name`)}"
          data-tip="${r(`Create custom province form name`)}"
          style="display: none; width: 11em"
        />
        <span
          id="provinceNameEditorAddForm"
          data-tip="${r(`Click to add custom province form name to the list`)}"
          class="icon-plus pointer"
        ></span>
      </div>
      <div>
        <div data-tip="${r(`Full name`)}" class="label">${r(`Full name`)}:</div>
        <input
          id="provinceNameEditorFull"
          data-tip="${r(`Type to change the full name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em"
        />
        <span id="provinceNameEditorFullSpeak" data-tip="${n(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span
          id="provinceNameEditorFullRegenerate"
          data-tip="${r(`Click to re-generate full name`)}"
          class="icon-arrows-cw pointer"
        ></span>
      </div>
      <div
        id="provinceCultureName"
        data-tip="${r(`Dominant culture in the province. This defines culture-based naming. Can be changed via the Cultures Editor`)}"
        style="margin-top: 0.2em"
      >
        ${r(`Dominant culture`)}:&nbsp;<span id="provinceCultureDisplay"></span>
      </div>
    </div>`;h(`dialogs`).insertAdjacentHTML(`beforeend`,e),h(`provinceNameEditorShortCulture`).addEventListener(`click`,Ue),h(`provinceNameEditorShortRandom`).addEventListener(`click`,We),h(`provinceNameEditorShortSpeak`).addEventListener(`click`,()=>s(h(`provinceNameEditorShort`).value)),h(`provinceNameEditorAddForm`).addEventListener(`click`,Ge),h(`provinceNameEditorFullRegenerate`).addEventListener(`click`,Ke),h(`provinceNameEditorFullSpeak`).addEventListener(`click`,()=>s(h(`provinceNameEditorFull`).value))}function He(){$(`#provinceNameEditor`).dialog(`destroy`),h(`provinceNameEditor`).remove()}function Ue(){let e=+h(`provinceNameEditor`).dataset.province,t=pack.cells.culture[pack.provinces[e].center],n=Names.getState(Names.getCultureShort(t),t);h(`provinceNameEditorShort`).value=n}function We(){let e=f(Names.nameBases.length-1),t=Names.getState(Names.getBase(e),void 0,e);h(`provinceNameEditorShort`).value=t}function Ge(){let e=h(`provinceNameEditorCustomForm`),t=h(`provinceNameEditorSelectForm`),n=e.value,r=e.style.display===`inline-block`;e.style.display=r?`none`:`inline-block`,t.style.display=r?`inline-block`:`none`,r&&o(t,n)}function Ke(){let e=h(`provinceNameEditorShort`).value,t=h(`provinceNameEditorSelectForm`).value,n=()=>t?!e&&t?`The ${t}`:`${e} ${t}`:e;h(`provinceNameEditorFull`).value=n()}function qe(e){let t=h(`provinceNameEditorShort`).value.trim(),n=h(`provinceNameEditorSelectForm`).value,r=h(`provinceNameEditorFull`).value.trim(),i=e.fullName;t&&t!==e.name&&Provinces.rename(e.i,t),n!==(e.formName??``)&&Provinces.setForm(e.i,n),r&&r!==i&&Provinces.setFullName(e.i,r),C.draw(`provinces`),C.draw(`labels`),K()}function Je(e,t,n){Provinces.setCapital(e,+n),t.dataset.capital=pack.burgs[+n].name}function Ye(){let e=h(`provincesBodySection`);e.dataset.type=e.dataset.type===`absolute`?`percentage`:`absolute`,W.refresh()}function Xe(){q();let t=e=>!e.i||e.removed||e.color[0]!==`#`?`#666`:String(c(e.color).darker()),n=pack.states.map(e=>({id:e.i,state:e.i?0:null,color:t(e)})),a=pack.provinces.filter(e=>e.i&&!e.removed).map(e=>({id:e.i+n.length-1,i:e.i,state:e.state,color:e.color,name:e.name,fullName:e.fullName,area:e.area,urban:e.urban,rural:e.rural})),o=[...n,...a],s=ie().parentId(e=>e.state)(o).sum(e=>e.area),l=+h(`uiSize`).value,u=300+300*l,f=90+90*l,p={top:10,right:10,bottom:0,left:10},m=u-p.left-p.right,g=f-p.top-p.bottom,_=we().size([m,g]).padding(2);alertMessage.innerHTML=`<select id="provincesTreeType" style="display:block; margin-left:13px; font-size:11px">
    <option value="area" selected>${r(`Area`)}</option>
    <option value="population">${r(`Total population`)}</option>
    <option value="rural">${r(`Rural population`)}</option>
    <option value="urban">${r(`Urban population`)}</option>
  </select>`,alertMessage.innerHTML+=`<div id='provinceInfo' class='chartInfo'>&#8205;</div>`;let v=d(`#alertMessage`).insert(`svg`,`#provinceInfo`).attr(`id`,`provincesTree`).attr(`width`,u).attr(`height`,f).attr(`font-size`,`10px`).append(`g`).attr(`transform`,`translate(10, 0)`);h(`provincesTreeType`).addEventListener(`change`,C),_(s);let y=v.selectAll(`g`).data(s.leaves()).enter().append(`g`).attr(`data-id`,e=>e.data.i).on(`mouseenter`,(e,t)=>b(e,t)).on(`mouseleave`,e=>x(e));function b(t,n){d(t.currentTarget).select(`rect`).classed(`selected`,!0);let i=n.data.fullName,a=pack.states[n.data.state].fullName,o=`${O(n.data.area)} ${k()}`,s=e(n.data.rural*options.map.units.population.scale),c=e(n.data.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate),l=h(`provincesTreeType`).value,u=l===`area`?`${r(`Area`)}: ${o}`:l===`rural`?`${r(`Rural population`)}: ${D(s)}`:l===`urban`?`${r(`Urban population`)}: ${D(c)}`:`${r(`Population`)}: ${D(s+c)}`;h(`provinceInfo`).innerHTML=`${i}. ${a}. ${u}`,je(t)}function x(e){Y(e),i(`provinceInfo`)&&(h(`provinceInfo`).innerHTML=`&#8205;`,d(e.currentTarget).select(`rect`).classed(`selected`,!1))}y.append(`rect`).attr(`stroke`,e=>e.parent.data.color).attr(`stroke-width`,1).attr(`fill`,e=>e.data.color).attr(`x`,e=>e.x0).attr(`y`,e=>e.y0).attr(`width`,e=>e.x1-e.x0).attr(`height`,e=>e.y1-e.y0),y.append(`text`).attr(`text-rendering`,`optimizeSpeed`).attr(`dx`,`.2em`).attr(`dy`,`1em`).attr(`x`,e=>e.x0).attr(`y`,e=>e.y0);function S(){y.select(`text`).each(function(e){this.innerHTML=e.data.name;let t=this.getBBox();t.y+t.height>e.y1+1&&(this.innerHTML=``);for(let n=0;n<15&&t.width>0&&t.x+t.width>e.x1;n++){if(this.innerHTML.length<3){this.innerHTML=``;break}this.innerHTML=`${this.innerHTML.slice(0,-2)}…`,t=this.getBBox()}})}function C(){let e=this.value===`area`?e=>e.area:this.value===`rural`?e=>e.rural:this.value===`urban`?e=>e.urban:e=>e.rural+e.urban;s.sum(e),y.data(_(s).leaves()),y.select(`rect`).transition().duration(1500).attr(`x`,e=>e.x0).attr(`y`,e=>e.y0).attr(`width`,e=>e.x1-e.x0).attr(`height`,e=>e.y1-e.y0),y.select(`text`).transition().duration(1500).attr(`x`,e=>e.x0).attr(`y`,e=>e.y0),setTimeout(S,2e3)}$(`#alert`).dialog({title:r(`Provinces chart`),width:`fit-content`,position:{my:`left bottom`,at:`left+10 bottom-10`,of:`svg`},buttons:{},close:()=>{alertMessage.innerHTML=``}}),S()}function Ze(){F({title:r(`Release provinces`),message:`${r(`Are you sure you want to release all provinces?`)}<br>${r(`It will turn all separable provinces into independent states.`)}<br>${r(`Capital province and provinces without any burgs will state as they are`)}`,confirm:r(`Release`),onConfirm:()=>{let e=[],t=[];J().forEach(n=>{if(!n.burg||n.burg===pack.states[n.state].capital||n.burgs.some(e=>pack.burgs[e].capital))return;let r=Fe(n.i);r&&(e.push(r[0]),t.push(r[1]))}),Ie(p(e),t)}})}function Qe(){C.show(`provinces`,`borders`),M.PaintEditor.open({title:r(`Paint Provinces`),parentDialogId:L,onClose:G,items:J().map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`})),getValue:e=>pack.cells.province[e],filterCell:(e,t,n)=>!ae(e,pack)||!pack.cells.state[e]||pack.cells.state[e]!==pack.provinces[n].state?!1:!t||e!==pack.provinces[t].center||(A(r(`Province center cannot be assigned to a different region. Please remove the province first`),!1,`error`),!1),dontOverrideControl:!0,onApply:$e})}function $e(e){for(let[t,n]of m(e))Provinces.setCells(t,n);C.draw(`borders`,`provinces`),C.draw(`labels`),i(L)&&K()}function et(){this.classList.contains(`pressed`)?X():(customization=12,this.classList.add(`pressed`),A(r(`Click on the map to place a new province center`),!0),d(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,tt),h(`provincesBodySection`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`}))}function tt(e){let[n,r]=a(e,this),i;try{i=Provinces.add(n,r)}catch(e){A(t(e),!1,`error`);return}e.shiftKey===!1&&X(),v(`province`,i),C.draw(`borders`,`provinces`,`labels`),q(),B.stateId=pack.provinces[i].state,j.set(L,`filters`,B),h(`provincesFilterState`).value=String(B.stateId),W.reset()}function X(){customization=0,le(),oe(),h(`provincesBodySection`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=h(`provincesAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}function nt(){let e=B.stateId;pack.provinces.forEach(t=>{if(!t||t.removed||e!==-1&&t.state!==e)return;let n=pack.states[t.state].color,r=u();t.color=n[0]===`#`?c(l(n,r)(.2)).hex():r}),C.draw(`provinces`),W.refresh()}function rt(){let e=options.map.units.area.unit===`square`?`${options.map.units.distance.unit}2`:options.map.units.area.unit,{scale:t,urbanization:n}=options.map.units.population,r=R.map(t=>t===`Area`?`Area ${e}`:t),i=J().map(e=>[e.i,e.name,e.fullName,e.formName,pack.states[e.state].name,e.color,e.burg?pack.burgs[e.burg].name:``,V(e),H(e),Math.round(e.rural*t),Math.round(e.urban*t*n.rate),e.burgs.length,I.format(e.tags)]);w.download(`Provinces`,r,i)}function it(){F({title:r(`Remove all provinces`),message:`${r(`Are you sure you want to remove all provinces?`)}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>{pack.provinces.forEach(e=>{e.i&&y(`province`,e.i)}),pack.provinces=[0],pack.cells.province=new Uint16Array(pack.cells.i.length),pack.states.forEach(e=>{e.provinces=[]}),S(),C.draw(`borders`),d(`#provs`).select(`#provincesBody`).remove(),C.hide(`provinces`),C.draw(`labels`),W.reset()}})}function at(){customization===12&&X(),Q.exit(),M.ColorPicker.close();let e=W.view();e.rows=[],e.all=[],$(`#provincesEditor`).dialog(`destroy`),h(`provincesEditor`).remove()}function ot(){let e=B.stateId;if(e===-1){alertMessage.innerHTML=r(`Please select a specific state from the filter to merge provinces within that state.`),$(`#alert`).dialog({title:r(`Merge Provinces`),buttons:{[r(`OK`)]:function(){$(this).dialog(`close`)}}});return}let t=pack.provinces.filter(t=>t.i&&!t.removed&&t.state===e);if(t.length<2){alertMessage.innerHTML=r(`Not enough provinces in the selected state to merge.`),$(`#alert`).dialog({title:r(`Merge Provinces`),buttons:{[r(`OK`)]:function(){$(this).dialog(`close`)}}});return}let n=t.map(e=>`
    <div data-id="${e.i}" data-tip="${e.fullName||e.name}" style="cursor:default">
      <input type="radio" name="rulingProvince" value="${e.i}" />
      <input id="selectProvince${e.i}" class="checkbox" type="checkbox" name="provincesToMerge" value="${e.i}" />
      <label for="selectProvince${e.i}" class="checkbox-label"><fill-box fill="${e.color}" disabled></fill-box>${Z(e.i)}${e.name}</label>
    </div>
  `).join(``);alertMessage.innerHTML=`
    <form id='mergeProvincesForm' style="overflow: hidden; display: flex; flex-direction: column; gap: 1em;">
      <p style="margin:0">
        ${r(`Check the checkbox next to each province you want to merge. Use the radio button to pick the primary province that will absorb all others. Hover over a row to highlight the province on the map.`)}
      </p>
      <main style='display: grid; grid-template-columns: 1fr 1fr; gap: .3em;'>
        ${n}
      </main>
    </form>
  `,h(`mergeProvincesForm`).querySelectorAll(`div[data-id]`).forEach(e=>{e.addEventListener(`mouseenter`,ct),e.addEventListener(`mouseleave`,Y)}),$(`#alert`).dialog({width:600,title:r(`Merge Provinces`),close:Y,buttons:{[r(`Merge`)]:function(){let e=new FormData(h(`mergeProvincesForm`)),t=Number(e.get(`rulingProvince`));if(!t){A(r(`Please select a province to merge into`),!1,`error`);return}let n=e.getAll(`provincesToMerge`).map(Number).filter(e=>e!==t);n.length?st(n,t,()=>$(this).dialog(`close`)):A(r(`Please select several provinces to merge`),!1,`error`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}}})}var Z=e=>`<svg class="coaIcon" viewBox="0 0 200 200"><use href="#provinceCOA${e}"></use></svg>`;function st(e,t,i){F({title:r(`Merge Provinces`),message:`
      <p>${r(`The following provinces will be removed`)}: ${e.map(e=>`${Z(e)}${pack.provinces[e].name}`).join(`, `)}.</p>
      <p>${r(`Removed provinces data (burgs and cells) will be assigned to {{- province}}.`,{province:`${Z(t)}${pack.provinces[t].name}`})}</p>
      <p>${n(r(`Are you sure you want to merge provinces?`),r(`This action cannot be reverted`))}</p>`,confirm:r(`Merge`),onConfirm:()=>{ut(e,t),i?.()}})}var Q=_e({buttonId:`provincesAnnex`,bodySectionId:`provincesBodySection`,tips:{start:n(r(`Click the province that annexes, then the provinces it absorbs`),r(`Hold Shift to keep annexing`)),pickLand:r(`Click on a land cell to pick a province`),nothingHere:r(`There is no province here`),annexing:e=>n(r(`Annexing into {{province}}`,{province:e}),r(`Click the provinces to annex`),r(`Hold Shift to keep annexing`)),isParent:e=>r(`{{province}} is the annexing province`,{province:e})},ownerOf:e=>pack.cells.province[e],colorOf:e=>pack.provinces[e].color,nameOf:e=>pack.provinces[e].name,rejectReason:(e,t)=>pack.provinces[t].state===pack.provinces[e].state?void 0:r(`{{province}} belongs to another state. Merge states first, or pick a province of {{state}}`,{province:pack.provinces[t].name,state:pack.states[pack.provinces[e].state].name}),commit:(e,t)=>st(t,e)});function ct(e){if(!C.isOn(`provinces`))return;let t=+e.currentTarget.dataset.id;if(!t)return;let n=d(`#provs`).select(`#province${t}`).attr(`d`);n&&(Y(e),te(n))}function lt(e){S(`focusProvince${e}`),y(`province`,e)}function ut(e,t){for(let n of e)n!==t&&lt(n);Provinces.merge(t,e),q(),C.draw(`provinces`,`borders`,`labels`),S(),d(`#debug`).selectAll(`.highlight`).remove(),K()}function dt(e,t){Provinces.setLocked(e,!pack.provinces[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}async function ft(e){let{scale:t,urbanization:n}=options.map.units.population,r=e=>{let t=pack.provinces[e];return e&&t&&!t.removed?t:void 0};await M.CsvUpload.update(e,R,{find:r,units:[`Area`],text:[`Province`,`Full Name`,`Form`,`Tags`]},(e,i)=>{let a=r(e),o=a.fullName;i.apply(`Province`,t=>Provinces.rename(e,t),a.name),i.apply(`Form`,t=>Provinces.setForm(e,t),a.formName),i.apply(`Full Name`,t=>Provinces.setFullName(e,t),o),i.apply(`Color`,t=>Provinces.recolor(e,t),a.color),i.apply(`State`,t=>Provinces.setState(e,w.byName(pack.states,t).i),pack.states[a.state].name);let s=t=>pack.cells.province[t.cell]===e;i.apply(`Capital`,t=>Provinces.setCapital(e,w.byName(pack.burgs,t,s).i),pack.burgs[a.burg]?.name),i.assign(`Tags`,e=>I.set(a,e),I.format(a.tags)),i.population([(a.rural??0)*t,(a.urban??0)*t*n.rate],(t,n)=>Provinces.setPopulation(e,t,n))})&&(C.draw(`states`,`provinces`,`borders`,`burgIcons`,`labels`,`emblems`,`population`),K())}var pt={open:G,showChart:Xe};export{pt as ProvincesEditor};