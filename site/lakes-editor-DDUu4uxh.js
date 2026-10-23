import{n as e,r as t}from"./index-CuUJKJN8.js";import{B as n,P as r,_n as i,dn as a,gt as o,z as s}from"./utils-394NS37_.js";import{V as c,t as l}from"./layers-CpGI7aJd.js";import{t as u}from"./mean-4Awewi9R.js";import{S as d,a as f,o as p,p as m}from"./unitUtils-B91DAWIJ.js";import{i as h}from"./tooltips-7PimaK30.js";import{t as g}from"./controllers-lOfLnkBO.js";import{i as _,n as v,o as y,r as b}from"./dialog-helpers-kMHr89OS.js";import{r as x}from"./features-generator-CEtu9LJ4.js";import{t as S}from"./styles-2PRH8Ggz.js";import{r as C}from"./id-labels-Bh86rU1j.js";import{t as w}from"./tags-4fjWFj3G.js";function T(e){for(var t=-1,n=e.length,r=e[n-1],i,a,o=r[0],s=r[1],c=0;++t<n;)i=o,a=s,r=e[t],o=r[0],s=r[1],i-=o,a-=s,c+=Math.hypot(i,a);return c}var E;function D(e){customization||(v(`.stable`),l.hide(`cells`),O(),E=a(e),A(),L(),$(`#lakeEditor`).dialog({title:t(`Edit Lake`),resizable:!1,position:{my:`center top+20`,at:`top`,of:`svg`,collision:`fit`},close:G}))}function O(){_(`lakeEditor`);let n=`<div id="lakeEditor" class="dialog">
    <div id="lakeBody" style="padding-bottom: 0.3em">
      <div>
        <div class="label" style="width: 4.8em">${t(`Name`)}:</div>
        <span id="lakeNameCulture" data-tip="${t(`Generate culture-specific name`)}" class="icon-book pointer"></span>
        <span id="lakeNameRandom" data-tip="${t(`Generate random name`)}" class="icon-globe pointer"></span>
        <input id="lakeName" data-tip="${t(`Type to rename`)}" autocorrect="off" spellcheck="false" />
        <span id="lakeNameSpeak" data-tip="${e(t(`Speak the name`),t(`You can change voice and language in options`))}" class="speaker">🔊</span>
      </div>
      <div data-tip="${t(`Lake subtype. Generators read it: burgs cannot port on dry, frozen or lava lakes`)}">
        <div class="label" style="width: 7em">${t(`Subtype`)}:</div>
        <select id="lakeSubtype" data-tip="${t(`Select lake subtype`)}">
          ${x.map(e=>`<option value="${e}">${C[e]??e}</option>`).join(``)}
        </select>
      </div>
      <div data-tip="${e(t(`Rendering group: the svg group the lake is drawn in`),t(`Does not affect generation`))}">
        <div class="label" style="width: 4.8em">${t(`Group`)}:</div>
        <span id="lakeGroupRemove" data-tip="${t(`Remove`)}" class="icon-trash-empty pointer"></span>
        <span id="lakeGroupAdd" data-tip="${t(`Create a new group for the lake`)}" class="icon-plus pointer"></span>
        <select id="lakeGroup" data-tip="${t(`Select lake rendering group`)}"></select>
        <input id="lakeGroupName" placeholder="${t(`Group name`)}" data-tip="${t(`Provide a name for the new group`)}" style="display: none" />
        <span id="lakeEditStyle" data-tip="${t(`Edit style in Style Editor`)}" class="icon-brush pointer"></span>
      </div>
      <div data-tip="${t(`Lake tags (comma-separated)`)}">
        <div class="label" style="width: 4.8em">${t(`Tags`)}:</div>
        <input
          id="lakeTags"
          placeholder="${t(`Tags`)}"
          autocorrect="off"
          spellcheck="false"
        />
      </div>
      <div data-tip="${t(`Lake area in selected units`)}">
        <div class="label">${t(`Area`)}:</div>
        <input id="lakeArea" disabled />
      </div>
      <div data-tip="${t(`Lake shore length in selected units`)}">
        <div class="label">${t(`Shore length`)}:</div>
        <input id="lakeShoreLength" disabled />
      </div>
      <div data-tip="${t(`Lake elevation in selected units`)}">
        <div class="label">${t(`Elevation`)}:</div>
        <input id="lakeElevation" disabled />
      </div>
      <div data-tip="${t(`Lake average depth in selected units`)}">
        <div class="label">${t(`Average depth`)}:</div>
        <input id="lakeAverageDepth" disabled />
      </div>
      <div data-tip="${t(`Lake maximum depth in selected units`)}">
        <div class="label">${t(`Max depth`)}:</div>
        <input id="lakeMaxDepth" disabled />
      </div>
      <div data-tip="${t(`Lake water supply. If supply > evaporation and there is an outlet, the lake water is fresh. If supply is very low, the lake becomes dry`)}">
        <div class="label">${t(`Supply`)}:</div>
        <input id="lakeFlux" disabled />
      </div>
      <div data-tip="${t(`Evaporation from lake surface. If evaporation > supply, the lake water is saline. If difference is high, the lake becomes dry`)}">
        <div class="label">${t(`Evaporation`)}:</div>
        <input id="lakeEvaporation" disabled />
      </div>
      <div data-tip="${t(`Number of lake inlet rivers`)}">
        <div class="label">${t(`Inlets`)}:</div>
        <input id="lakeInlets" disabled />
      </div>
      <div data-tip="${t(`Lake outlet river`)}">
        <div class="label">${t(`Outlet`)}:</div>
        <input id="lakeOutlet" disabled />
      </div>
    </div>
    <div id="lakeBottom">
      ${y(`lakeLegend`,t(`Edit free text notes (legend)`))}
    </div>
  </div>`;s(`dialogs`).insertAdjacentHTML(`beforeend`,n),s(`lakeName`).addEventListener(`input`,j),s(`lakeNameSpeak`).addEventListener(`click`,()=>r(s(`lakeName`).value)),s(`lakeNameCulture`).addEventListener(`click`,M),s(`lakeNameRandom`).addEventListener(`click`,N),s(`lakeSubtype`).addEventListener(`change`,P),s(`lakeGroup`).addEventListener(`change`,R),s(`lakeGroupAdd`).addEventListener(`click`,z),s(`lakeGroupName`).addEventListener(`change`,B),s(`lakeGroupRemove`).addEventListener(`click`,V),s(`lakeEditStyle`).addEventListener(`click`,H),s(`lakeTags`).addEventListener(`change`,U),s(`lakeLegend`).addEventListener(`click`,W)}function k(){let e=+E.attr(`data-f`);return pack.features.find(t=>t.i===e)}function A(){let{cells:e,vertices:t,rivers:n}=pack,r=k();s(`lakeName`).value=r.name,s(`lakeSubtype`).value=r.subtype||`freshwater`,s(`lakeTags`).value=w.format(r.tags),s(`lakeArea`).value=`${d(f(r.area))} ${p()}`;let a=T(r.vertices.map(e=>t.p[e]));s(`lakeShoreLength`).value=`${d(a*options.map.units.distance.scale)} ${options.map.units.distance.unit}`;let o=Array.from(e.i.filter(t=>e.f[t]===r.i)).map(t=>e.h[t]);s(`lakeElevation`).value=m(r.height),s(`lakeAverageDepth`).value=m(u(o)??0,!0),s(`lakeMaxDepth`).value=m(i(o)??0,!0),s(`lakeFlux`).value=String(r.flux),s(`lakeEvaporation`).value=String(r.evaporation);let c=r.inlets?.map(e=>n.find(t=>t.i===e)?.name),l=r.outlet?n.find(e=>e.i===r.outlet)?.name:`no`,h=s(`lakeInlets`);h.value=c?String(c.length):`no`,h.title=c?c.join(`, `):``,s(`lakeOutlet`).value=l??`no`}function j(){k().name=this.value}function M(){let e=k();e.name=s(`lakeName`).value=Features.getName(e)}function N(){let e=k();e.name=s(`lakeName`).value=Names.getBase(o(Names.nameBases.length-1))}function P(){Features.setSubtype(k().i,this.value)}var F=e=>e in S.defaults.lakes.groups;function I(e,t){for(let n of e){if(!n.hasAttribute(`data-f`))continue;let e=pack.features[+(n.getAttribute(`data-f`)||0)];e&&(e.group=t)}}function L(){let e=k().group,t=s(`lakeGroup`);t.options.length=0,a(`#lakes`).selectAll(`g`).each(function(){t.options.add(new Option(this.id,this.id,!1,this.id===e))})}function R(){s(this.value).appendChild(E.node()),I([E.node()],this.value),c(l.get(`lakes`))}function z(){let e=s(`lakeGroupName`),t=s(`lakeGroup`);e.style.display===`none`?(e.style.display=`inline-block`,e.focus(),t.style.display=`none`):(e.style.display=`none`,t.style.display=`inline-block`)}function B(){if(!this.value){h(t(`Invalid group name`));return}let e=this.value.toLowerCase().replace(/ /g,`_`).replace(/[^\w\s]/gi,``);if(n(e)){h(t(`Element with this name already exists. Provide a unique name`),!1,`error`);return}if(Number.isFinite(+e.charAt(0))){h(t(`Group name should start with a letter`),!1,`error`);return}let r=E.node().parentNode,i=styles.lakes.groups[r.id]||styles.lakes.groups.freshwater;if(styles.lakes.groups[e]??=structuredClone(i),!F(r.id)&&r.childElementCount===1){s(`lakeGroup`).selectedOptions[0].remove(),s(`lakeGroup`).options.add(new Option(e,e,!1,!0)),r.id!==e&&delete styles.lakes.groups[r.id],r.id=e,r.dataset.group=e,I(Array.from(r.children),e),c(l.get(`lakes`)),z(),s(`lakeGroupName`).value=``;return}let a=E.node().parentNode.cloneNode(!1);s(`lakes`).appendChild(a),a.id=e,a.dataset.group=e,s(`lakeGroup`).options.add(new Option(e,e,!1,!0)),s(e).appendChild(E.node()),I([E.node()],e),c(l.get(`lakes`)),z(),s(`lakeGroupName`).value=``}function V(){let n=E.node().parentNode.id;if(F(n)){h(t(`This is one of the default groups, it cannot be removed`),!1,`error`);return}let r=E.node().parentNode.querySelectorAll(`use[data-f]`).length;b({title:t(`Remove`),message:e(t(`Are you sure you want to remove the group?`),t(`All lakes of the group ({{lakes}}) will be turned into Freshwater`,{lakes:r})),confirm:t(`Remove`),onConfirm:()=>{let e=s(`freshwater`),t=s(n);for(I(Array.from(t.children),`freshwater`);t.childNodes.length;)e.appendChild(t.childNodes[0]);t.remove(),c(l.get(`lakes`)),delete styles.lakes.groups[n],s(`lakeGroup`).selectedOptions[0].remove(),s(`lakeGroup`).value=`freshwater`}})}function H(){let e=E.node().parentNode.id;g.StyleEditor.open(`lakes`,e)}function U(){let e=k();e&&(w.set(e,this.value),this.value=w.format(e.tags))}function W(){g.NotesEditor.open({type:`feature`,id:k().i})}function G(){_(`lakeEditor`),E=null}var K={open:D};export{K as LakesEditor};