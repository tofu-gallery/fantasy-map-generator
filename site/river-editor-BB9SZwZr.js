import{C as e,n as t,r as n}from"./index-CuUJKJN8.js";import{B as r,H as i,O as a,P as o,dn as s,gt as c,z as l}from"./utils-394NS37_.js";import{E as u,T as d,t as f}from"./layers-CpGI7aJd.js";import{t as p}from"./drag-C_reJWZK.js";import{i as m,t as h}from"./tooltips-7PimaK30.js";import{t as g}from"./controllers-lOfLnkBO.js";import{i as _,n as v,o as y,r as b}from"./dialog-helpers-kMHr89OS.js";import{t as x}from"./tags-4fjWFj3G.js";var S,C=!1;function w(e){if(customization||r(`riverEditor`)&&e===S.attr(`id`))return;v(`.stable`),f.show(`rivers`),C=!f.isOn(`cells`),f.show(`cells`),u(Number(e.slice(5))),S=s(`#${e}`).on(`click`,R),m(t(n(`Drag control points to change the river course`),n(`Click on point to remove it`),n(`Click on river to add additional control point`),n(`For major changes please create a new river instead`)),!0),s(`#debug`).append(`g`).attr(`id`,`controlCells`),s(`#debug`).append(`g`).attr(`id`,`controlPoints`),T(),l(`riverEditor`).dataset.entity=`river:${Number(e.slice(5))}`,k();let{cells:i,points:a}=O();P(Rivers.getRiverPoints(i,a??null)),F(i),$(`#riverEditor`).dialog({title:n(`Edit River`),resizable:!1,position:{my:`left top`,at:`left+10 top+10`,of:`#map`},close:Z})}function T(){_(`riverEditor`);let e=`<div id="riverEditor" class="dialog">
    <div id="riverBody" style="padding-bottom: 0.3em">
      <div>
        <div class="label" style="width: 4.8em">${n(`Name`)}:</div>
        <span id="riverNameCulture" data-tip="${n(`Generate culture-specific name`)}" class="icon-book pointer"></span>
        <span id="riverNameRandom" data-tip="${n(`Generate random name`)}" class="icon-globe pointer"></span>
        <input id="riverName" data-tip="${n(`Type to rename`)}" autocorrect="off" spellcheck="false" />
        <span id="riverNameSpeak" data-tip="${t(n(`Speak the name`),n(`You can change voice and language in options`))}" class="speaker">🔊</span>
      </div>
      <div data-tip="${n(`Type to change river type (e.g. fork, creek, river, brook, stream)`)}">
        <div class="label">${n(`Type`)}:</div>
        <input id="riverType" autocorrect="off" spellcheck="false" />
      </div>
      <div data-tip="${n(`River tags (comma-separated)`)}">
        <div class="label">${n(`Tags`)}:</div>
        <input
          id="riverTags"
          placeholder="${n(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
        />
      </div>
      <div data-tip="${n(`Select parent river`)}">
        <div class="label">${n(`Mainstem`)}:</div>
        <select id="riverMainstem"></select>
      </div>
      <div data-tip="${n(`River drainage basin (watershed)`)}">
        <div class="label">${n(`Basin`)}:</div>
        <input id="riverBasin" disabled />
      </div>
      <div data-tip="${n(`River discharge (flux power)`)}">
        <div class="label">${n(`Discharge`)}:</div>
        <input id="riverDischarge" disabled />
      </div>
      <div data-tip="${n(`River length in selected units`)}">
        <div class="label">${n(`Length`)}:</div>
        <input id="riverLength" disabled />
      </div>
      <div data-tip="${n(`River mouth width in selected units`)}">
        <div class="label">${n(`Mouth width`)}:</div>
        <input id="riverWidth" disabled />
      </div>
      <div data-tip="${n(`River source additional width. Default value is 0`)}">
        <div class="label">${n(`Source width`)}:</div>
        <input id="riverSourceWidth" type="number" min="0" max="3" step=".01" />
      </div>
      <div data-tip="${n(`River width multiplier. Default value is 1`)}">
        <div class="label">${n(`Width modifier`)}:</div>
        <input id="riverWidthFactor" type="number" min=".1" max="4" step=".1" />
      </div>
    </div>
    <div id="riverBottom">
      <button id="riverCreateSelectingCells" data-tip="${n(`Create a new river selecting river cells`)}" class="icon-map-pin"></button>
      <button id="riverEditStyle" data-tip="${n(`Edit style in Style Editor`)}" class="icon-brush"></button>
      <button id="riverElevationProfile" data-tip="${n(`Elevation profile`)}" class="icon-chart-area"></button>
      ${y(`riverLegend`,n(`Edit free text notes (legend)`))}
      <button id="riverLock" class="icon-lock-open" onmouseover="showElementLockTip(event)"></button>
      <button id="riverRemove" data-tip="${n(`Remove`)}" data-shortcut="Delete" class="icon-trash fastDelete"></button>
    </div>
  </div>`;l(`dialogs`).insertAdjacentHTML(`beforeend`,e),l(`riverCreateSelectingCells`).addEventListener(`click`,E),l(`riverEditStyle`).addEventListener(`click`,D),l(`riverElevationProfile`).addEventListener(`click`,J),l(`riverLegend`).addEventListener(`click`,Y),l(`riverLock`).addEventListener(`click`,A),l(`riverRemove`).addEventListener(`click`,X),l(`riverName`).addEventListener(`input`,B),l(`riverNameSpeak`).addEventListener(`click`,()=>o(l(`riverName`).value)),l(`riverType`).addEventListener(`input`,V),l(`riverTags`).addEventListener(`change`,H),l(`riverNameCulture`).addEventListener(`click`,U),l(`riverNameRandom`).addEventListener(`click`,W),l(`riverMainstem`).addEventListener(`change`,G),l(`riverSourceWidth`).addEventListener(`input`,K),l(`riverWidthFactor`).addEventListener(`input`,q)}function E(){g.RiverCreator.open()}function D(){g.StyleEditor.open(`rivers`)}function O(){let e=+S.attr(`id`).slice(5);return pack.rivers.find(t=>t.i===e)}function k(){let e=O();l(`riverName`).value=e.name,l(`riverType`).value=e.type,l(`riverTags`).value=x.format(e.tags),j(e);let t=l(`riverMainstem`);t.options.length=0;let n=e.parent||e.i;pack.rivers.slice().sort((e,t)=>e.name>t.name?1:-1).forEach(e=>{let r=new Option(e.name,String(e.i),!1,e.i===n);t.options.add(r)}),l(`riverBasin`).value=pack.rivers.find(t=>t.i===e.basin).name,l(`riverDischarge`).value=`${e.discharge} m³/s`,l(`riverSourceWidth`).value=String(e.sourceWidth),l(`riverWidthFactor`).value=String(e.widthFactor),M(e),Rivers.updateWidth(e),N(e)}function A(){let e=O();Rivers.setLocked(e.i,!e.lock),j(e)}function j(e){l(`riverLock`).className=e.lock?`icon-lock`:`icon-lock-open`}function M(t){t.length=e(S.node().getTotalLength()/2,2);let n=`${e(t.length*options.map.units.distance.scale)} ${options.map.units.distance.unit}`;l(`riverLength`).value=n}function N(t){let n=`${e(t.width*options.map.units.distance.scale,3)} ${options.map.units.distance.unit}`;l(`riverWidth`).value=n}function P(e){s(`#controlPoints`).selectAll(`circle`).data(e).join(`circle`).attr(`cx`,e=>e[0]).attr(`cy`,e=>e[1]).attr(`r`,.6).call(p().on(`start`,I)).on(`click`,z)}function F(e){let t=[...new Set(e)].filter(e=>pack.cells.i[e]);s(`#controlCells`).selectAll(`polygon`).data(t).join(`polygon`).attr(`points`,e=>String(Pack.getPolygon(e)))}function I(t){let{r:n,fl:r}=pack.cells,i=O(),{x:a,y:o}=t,s=Pack.findCell(a,o),c=null;t.on(`drag`,function(t){let{x:n,y:r}=t,a=Pack.findCell(n,r);c=s===a?null:a,this.setAttribute(`cx`,n),this.setAttribute(`cy`,r),this.__data__=[e(n,1),e(r,1)],L(),F(i.cells)}),t.on(`end`,()=>{if(c&&!n[c]){n[s]=0,n[c]=i.i;let e=r[s];r[s]=r[c],r[c]=e,L()}})}function L(){let e=O();e.points=s(`#controlPoints`).selectAll(`*`).data(),e.cells=e.points.map(([e,t])=>Pack.findCell(e,t)),d(e),M(e),f.draw(`labels`),r(`elevationProfile`)&&J()}function R(t){let[n,r]=i(t,this),o=[e(n,1),e(r,1)],c=O();c.points||=s(`#controlPoints`).selectAll(`*`).data();let l=a(c.points,o,2);c.points.splice(l,0,o),P(c.points),L()}function z(){this.remove(),L();let{cells:e}=O();F(e)}function B(){this.value.trim()&&(Rivers.rename(O().i,this.value),f.draw(`labels`))}function V(){this.value.trim()&&(Rivers.setType(O().i,this.value),f.draw(`labels`))}function H(){let e=O();e&&(x.set(e,this.value),this.value=x.format(e.tags))}function U(){let e=O(),t=Rivers.getName(e.mouth);l(`riverName`).value=t,Rivers.rename(e.i,t),f.draw(`labels`)}function W(){let e=Names.getBase(c(Names.nameBases.length-1));l(`riverName`).value=e,Rivers.rename(O().i,e),f.draw(`labels`)}function G(){let e=O();try{Rivers.setParent(e.i,+this.value)}catch(t){m(t.message,!1,`error`),this.value=String(e.parent||e.i);return}l(`riverBasin`).value=pack.rivers.find(t=>t.i===e.basin).name}function K(){let e=O();Rivers.setWidth(e.i,Math.max(0,+this.value||0),e.widthFactor),N(e),L()}function q(){let e=O();Rivers.setWidth(e.i,e.sourceWidth??0,Math.max(0,+this.value||0)),N(e),L()}function J(){let t=s(`#controlPoints`).selectAll(`*`).data().map(([e,t])=>Pack.findCell(e,t)),n=O(),r=e(n.length*options.map.units.distance.scale);g.ElevationProfile.open(t,r,!0)}function Y(){g.NotesEditor.open({type:`river`,id:O().i})}function X(){b({title:n(`Remove`),message:n(`Are you sure you want to remove the river? All tributaries will be auto-removed`),confirm:n(`Remove`),width:`22em`,onConfirm:()=>{let e=+S.attr(`id`).slice(5);Rivers.remove(e),$(`#riverEditor`).dialog(`close`),f.draw(`rivers`,`labels`)}})}function Z(){s(`#controlPoints`).remove(),s(`#controlCells`).remove(),S.on(`click`,null),u(null),h(),C&&f.hide(`cells`),C=!1,_(`riverEditor`),S=null}var Q={open:w};export{Q as RiverEditor};