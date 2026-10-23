import{C as e,n as t,r as n,x as r}from"./index-CuUJKJN8.js";import{B as i,dn as a,z as o}from"./utils-394NS37_.js";import{R as s,z as c}from"./layers-CpGI7aJd.js";import{t as l}from"./drag-C_reJWZK.js";import{i as u}from"./emblems-generator-B3pPl-l-.js";import{i as d,t as f}from"./tooltips-7PimaK30.js";import{t as p}from"./controllers-lOfLnkBO.js";import{c as m,i as h,n as g,o as _,r as v}from"./dialog-helpers-kMHr89OS.js";import{t as y}from"./tags-4fjWFj3G.js";import{t as b}from"./map-placement-BsSgkT64.js";var x,S;function C(e,t){if(customization)return;g(`.stable`);let r=T(e,t);r&&([x,S]=r,a(x).raise().call(l().on(`start`,D)).classed(`draggable`,!0),i(`notesEditor`)&&p.NotesEditor.open({type:`marker`,id:S.i}),w(),o(`markerEditor`).dataset.entity=`marker:${S.i}`,O(),$(`#markerEditor`).dialog({title:n(`Edit Marker`),resizable:!1,position:{my:`left top`,at:`left+10 top+10`,of:`svg`,collision:`fit`},close:Z}))}function w(){h(`markerEditor`);let e=`<div id="markerEditor" class="dialog">
    <div id="markerBody" style="padding-bottom: 0.3em">
      <div data-tip="${n(`Marker name, shown in the notes editor and overviews`)}">
        <div class="label">${n(`Name`)}:</div>
        <input id="markerName" style="width: 10.3em" />
      </div>
      <div data-tip="${t(n(`Marker type`),n(`Style changes will apply to all markers of the same type`),n(`Leave blank if the marker is unique`))}">
        <div class="label">${n(`Type`)}:</div>
        <input id="markerType" style="width: 10.3em" />
      </div>
      <div data-tip="${n(`Marker tags (comma-separated)`)}">
        <div class="label">${n(`Tags`)}:</div>
        <input
          id="markerTags"
          placeholder="${n(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 10.3em"
        />
      </div>
      <div data-tip="${n(`Marker icon`)}" style="display: flex; align-items: center">
        <div class="label">${n(`Icon`)}:</div>
        <div id="markerIcon" style="font-size: 1.5em; width: 3.7em; display: flex"></div>
        <button id="markerIconSelect" style="width: 5em">${n(`Select`)}</button>
      </div>
      <div data-tip="${n(`Marker marker element and icon sizes in pixels`)}">
        <div class="label">${n(`Size`)}:</div>
        <input data-tip="${n(`Marker element size in pixels`)}" id="markerSize" type="number" min="1" max="500" style="width: 5em" />
        <input data-tip="${n(`Marker icon sizes in pixels`)}" id="markerIconSize" type="number" min="1" max="50" step="0.1" style="width: 5em" />
      </div>
      <div data-tip="${n(`Marker icon shift (by X and by Y axis), percent. Set to 50 to position icon in center`)}">
        <div class="label">${n(`Icon shift`)}:</div>
        <input id="markerIconShiftX" type="number" min="0" max="100" step="1" style="width: 5em" />
        <input id="markerIconShiftY" type="number" min="0" max="100" step="1" style="width: 5em" />
      </div>
      <div data-tip="${n(`Marker pin shape`)}">
        <div class="label">${n(`Pin shape`)}:</div>
        <select id="markerPin" style="width: 10.3em">
          <option value="bubble">${n(`Bubble`)}</option>
          <option value="pin">${n(`Pin`)}</option>
          <option value="square">${n(`Square`)}</option>
          <option value="squarish">${n(`Squarish`)}</option>
          <option value="diamond">${n(`Diamond`)}</option>
          <option value="hex">${n(`Hex`)}</option>
          <option value="hexy">${n(`Hexy`)}</option>
          <option value="shieldy">${n(`Shieldy`)}</option>
          <option value="shield">${n(`Shield`)}</option>
          <option value="pentagon">${n(`Pentagon`)}</option>
          <option value="heptagon">${n(`Heptagon`)}</option>
          <option value="circle">${n(`Circle`)}</option>
          <option value="no">${n(`No`)}</option>
        </select>
      </div>
      <div data-tip="${n(`Pin fill and stroke colors`)}">
        <div class="label">${n(`Pin colors`)}:</div>
        <input id="markerFill" type="color" style="width: 5em; height: 1.6em" />
        <input id="markerStroke" type="color" style="width: 5em; height: 1.6em" />
      </div>
      <div data-tip="${n(`Icon fill and stroke colors: they paint the parts the icon leaves uncolored. Emoji keep their own colors`)}">
        <div class="label">${n(`Icon colors`)}:</div>
        <input id="markerIconFill" type="color" style="width: 5em; height: 1.6em" />
        <input id="markerIconStroke" type="color" style="width: 5em; height: 1.6em" />
        <i id="markerIconPaintReset" data-tip="${n(`Reset to default`)}" class="icon-ccw pointer"></i>
      </div>
    </div>
    <div id="markerBottom">
      ${_(`markerNotes`,n(`Edit free text notes (legend)`))}
      <button id="markerRadius" data-tip="${n(`Show markers within a radius of this one`)}" class="icon-dot-circled"></button>
      <button id="markerLock" class="icon-lock-open" onmouseover="showElementLockTip(event)"></button>
      <button id="markerAdd" data-tip="${n(`Add additional marker of that type`)}" class="icon-plus"></button>
      <button id="markerRemove" data-tip="${n(`Remove`)}" data-shortcut="Delete" class="icon-trash fastDelete"></button>
    </div>
  </div>`;o(`dialogs`).insertAdjacentHTML(`beforeend`,e),o(`markerName`).addEventListener(`change`,A),o(`markerType`).addEventListener(`change`,j),o(`markerTags`).addEventListener(`change`,M),o(`markerIconSelect`).addEventListener(`click`,N),o(`markerIconSize`).addEventListener(`input`,P),o(`markerIconShiftX`).addEventListener(`input`,F),o(`markerIconShiftY`).addEventListener(`input`,I),o(`markerSize`).addEventListener(`input`,L),o(`markerPin`).addEventListener(`change`,R),o(`markerFill`).addEventListener(`input`,z),o(`markerStroke`).addEventListener(`input`,B),o(`markerIconFill`).addEventListener(`input`,V),o(`markerIconStroke`).addEventListener(`input`,H),o(`markerIconPaintReset`).addEventListener(`click`,U),o(`markerNotes`).addEventListener(`click`,G),o(`markerRadius`).addEventListener(`click`,K),o(`markerLock`).addEventListener(`click`,q),o(`markerAdd`).addEventListener(`click`,J),o(`markerRemove`).addEventListener(`click`,Y)}function T(e,t){let n=t?Number(t.closest(`svg`)?.id.slice(6)):e,r=pack.markers.find(({i:e})=>e===n);if(!r)return null;c(r);let a=i(`marker${n}`);return a||c(null),a?[a,r]:null}function E(){let e=S.type;return e?pack.markers.filter(({type:t})=>t===e):[S]}function D(t){let n=+this.getAttribute(`x`)-t.x,i=+this.getAttribute(`y`)-t.y;t.on(`drag`,function(e){this.setAttribute(`x`,String(n+e.x)),this.setAttribute(`y`,String(i+e.y))}),t.on(`end`,function(t){let{width:a,height:o}=options.map.graph,c=r(t.x+n,0,a),l=r(t.y+i,0,o);this.setAttribute(`x`,String(e(c,2))),this.setAttribute(`y`,String(e(l,2))),Markers.move(S.i,c,l),s()})}function O(){let e=S;k(),o(`markerName`).value=e.name||``,o(`markerType`).value=e.type||``,o(`markerTags`).value=y.format(e.tags),o(`markerIconSize`).value=String(e.px||12),o(`markerIconShiftX`).value=String(e.dx||50),o(`markerIconShiftY`).value=String(e.dy||50),o(`markerSize`).value=String(e.size||30),o(`markerPin`).value=e.pin||`bubble`,o(`markerFill`).value=e.fill||`#ffffff`,o(`markerStroke`).value=e.stroke||`#000000`,o(`markerLock`).className=e.lock?`icon-lock`:`icon-lock-open`}function k(){let{icon:e,iconFill:t,iconStroke:n}=S,r=u.paint(e),i=e=>e&&/^#[\da-f]{6}$/i.test(e)?e:`#000000`;o(`markerIcon`).innerHTML=u.html(e,{fill:t,stroke:n}),o(`markerIconFill`).value=i(t??r.fill),o(`markerIconStroke`).value=i(n??r.stroke),o(`markerIconPaintReset`).style.visibility=t||n?`visible`:`hidden`}function A(){this.value.trim()&&Markers.rename(S.i,this.value),i(`notesEditor`)&&p.NotesEditor.open({type:`marker`,id:S.i})}function j(){this.value.trim()&&Markers.setType(S.i,this.value)}function M(){y.set(S,this.value),this.value=y.format(S.tags)}function N(){p.IconPicker.open({current:S.icon,live:!0,onPick:e=>{for(let t of E())t.icon=e;k(),s()}})}function P(){W({px:+this.value})}function F(){W({dx:+this.value})}function I(){W({dy:+this.value})}function L(){W({size:+this.value})}function R(){W({pin:this.value})}function z(){W({fill:this.value})}function B(){W({stroke:this.value})}function V(){W({iconFill:this.value}),k()}function H(){W({iconStroke:this.value}),k()}function U(){W({iconFill:null,iconStroke:null}),k()}function W(e){try{for(let t of E())Markers.setAppearance(t.i,e)}catch(e){d(e.message,!1,`error`)}s()}function G(){p.NotesEditor.open({type:`marker`,id:S.i})}function K(){p.MarkersInRadius.open(S)}function q(){Markers.setLocked(S.i,!S.lock);let e=o(`markerLock`);e.classList.toggle(`icon-lock-open`),e.classList.toggle(`icon-lock`)}function J(){p.MarkerCreator.toggle(S)}function Y(){v({title:n(`Remove`),message:t(n(`Are you sure you want to remove this marker?`),n(`This action cannot be reverted`)),confirm:n(`Remove`),onConfirm:X})}function X(){Markers.remove(S.i),s(),$(`#markerEditor`).dialog(`close`),m()}function Z(){a(x).on(`.drag`,null).classed(`draggable`,!1),c(null),o(`addMarker`).classList.contains(`pressed`)&&b(),f(),h(`markerEditor`),x=null,S=null}var Q={open:C};export{Q as MarkersEditor};