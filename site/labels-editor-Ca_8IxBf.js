import{C as e,h as t,n,r}from"./index-CuUJKJN8.js";import{H as i,Ot as a,P as o,dn as s,z as c}from"./utils-394NS37_.js";import{d as ee,l as te,s as l,t as u}from"./layers-CpGI7aJd.js";import{t as d}from"./drag-C_reJWZK.js";import{t as f}from"./natural-rv4BlkMW.js";import{i as p,r as m}from"./tooltips-7PimaK30.js";import{i as h}from"./viewport-C0deAIKO.js";import{t as g}from"./controllers-lOfLnkBO.js";import{i as _,n as v,o as y,r as b}from"./dialog-helpers-kMHr89OS.js";import{n as x}from"./map-entities-NpzkL-1b.js";import{t as S}from"./viewbox-events-DpWtTLWO.js";import"./app-C3meBrse.js";import{t as C}from"./label-arc-8P6f8_MH.js";var w=``,T;function E(e,t){if(customization)return;v(`.stable`),u.show(`labels`);let n=document.querySelector(`#labels text[data-label-type='${e}'][data-id='${t}']`);if(!n)return;let i=l(e,t);i&&(T={...i},Z(n.id),s(`#viewbox`).on(`touchmove mousemove`,N),ne(),$(`#labelEditor`).dialog({title:r(`Edit Label`),resizable:!1,width:`fit-content`,position:{my:`center top+10`,at:`bottom`,of:n,collision:`fit`},close:Q}),P(),D(T.group),A(),O())}function ne(){_(`labelEditor`);let e=`<div id="labelEditor" class="dialog">
      <button id="labelGroupShow" data-tip="${r(`Show`)}" class="icon-tags"></button>
      <div id="labelGroupSection" style="display: none">
        <button id="labelGroupHide" data-tip="${r(`Hide`)}" class="icon-tags"></button>
        <select id="labelGroupSelect" data-tip="${r(`Select a group for this label`)}" style="width: 10em"></select>
        <button
          id="labelGroupsConfigure"
          data-tip="${r(`Open the Label Groups Configurator to create, edit and reorder groups`)}"
          class="icon-cog"
        ></button>
      </div>
      <button id="labelTextShow" data-tip="${r(`Show`)}" class="icon-pencil"></button>
      <div id="labelTextSection" style="display: none">
        <button id="labelTextHide" data-tip="${r(`Hide`)}" class="icon-pencil"></button>
        <input
          id="labelText"
          data-tip="${r(`Type to change the label. Enter “|” to move to a new line`)}"
          style="width: 12em"
        />
        <span id="labelTextSpeak" data-tip="${n(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span id="labelTextRandom" data-tip="${r(`Generate random name`)}" class="icon-shuffle pointer"></span>
      </div>
      <button id="labelEditStyle" data-tip="${r(`Edit style in Style Editor`)}" class="icon-brush"></button>
      <button id="labelPathToggle"></button>
      <button id="labelSizeShow" data-tip="${r(`Show`)}" class="icon-text-height"></button>
      <div id="labelSizeSection" style="display: none">
        <button id="labelSizeHide" data-tip="${r(`Hide`)}" class="icon-text-height"></button>
        <span data-tip="${r(`Set relative size for the particular label (% of group default)`)}">${r(`Size`)}:</span>
        <input
          id="labelRelativeSize"
          data-tip="${r(`Set relative size for the particular label (% of group default)`)}"
          type="number"
          min="30"
          max="300"
          step="1"
          style="width: 4.5em"
        />
      </div>
      <button id="labelOffsetShow" data-tip="${r(`Show`)}" class="icon-sliders"></button>
      <div id="labelOffsetSection" style="display: none">
        <button id="labelOffsetHide" data-tip="${r(`Hide`)}" class="icon-sliders"></button>
        <span data-tip="${r(`Set starting offset for the particular label (% along the path)`)}">${r(`Offset`)}:</span>
        <input
          id="labelStartOffset"
          data-tip="${r(`Set starting offset for the particular label (% along the path)`)}"
          type="range"
          min="20"
          max="80"
          style="width: 8em"
        />
        <input
          id="labelStartOffsetValue"
          type="number"
          min="20"
          max="80"
          step="1"
          style="width: 3.5em"
          data-tip="${r(`Set starting offset numerically`)}"
        />
      </div>
      <button id="labelLetterSpacingShow" data-tip="${r(`Show`)}" class="icon-text-width"></button>
      <div id="labelLetterSpacingSection" style="display: none">
        <button
          id="labelLetterSpacingHide"
          data-tip="${r(`Hide`)}"
          class="icon-text-width"
        ></button>
        <slider-input
          id="labelLetterSpacingSize"
          style="display: inline-block"
          data-tip="${r(`Set the letter spacing size for this label`)}"
          min="0"
          max="20"
          step=".01"
          value="0"
        ></slider-input>
      </div>
      <button id="labelVisibility"></button>
      ${y(`labelLegend`,r(`Edit free text notes (legend)`))}
      <button id="labelReset" data-tip="${r(`Reset to default`)}" class="icon-arrows-cw"></button>
      <button
        id="labelRemoveSingle"
        data-tip="${r(`Remove`)}"
        data-shortcut="Delete"
        class="icon-trash fastDelete"
      ></button>
    </div>`;c(`dialogs`).insertAdjacentHTML(`beforeend`,e),c(`labelGroupShow`).addEventListener(`click`,V),c(`labelGroupHide`).addEventListener(`click`,H),c(`labelGroupSelect`).addEventListener(`change`,U),c(`labelGroupsConfigure`).addEventListener(`click`,()=>void g.LabelGroupsConfigurator.open()),c(`labelTextShow`).addEventListener(`click`,W),c(`labelTextHide`).addEventListener(`click`,G),c(`labelText`).addEventListener(`input`,K),c(`labelTextSpeak`).addEventListener(`click`,()=>o(c(`labelText`).value)),c(`labelTextRandom`).addEventListener(`click`,J),c(`labelEditStyle`).addEventListener(`click`,re),c(`labelSizeShow`).addEventListener(`click`,Y),c(`labelSizeHide`).addEventListener(`click`,ie),c(`labelOffsetShow`).addEventListener(`click`,ae),c(`labelOffsetHide`).addEventListener(`click`,oe),c(`labelStartOffset`).addEventListener(`input`,le),c(`labelStartOffsetValue`).addEventListener(`input`,ue),c(`labelRelativeSize`).addEventListener(`input`,de),c(`labelLetterSpacingShow`).addEventListener(`click`,se),c(`labelLetterSpacingHide`).addEventListener(`click`,ce),c(`labelLetterSpacingSize`).addEventListener(`input`,fe),c(`labelPathToggle`).addEventListener(`click`,pe),c(`labelVisibility`).addEventListener(`click`,me),c(`labelLegend`).addEventListener(`click`,he),c(`labelReset`).addEventListener(`click`,_e),c(`labelRemoveSingle`).addEventListener(`click`,ge)}function D(e){w=e,H();let t=c(`labelGroupSelect`);t.options.length=0;for(let n of options.map.labels.groups)t.options.add(new Option(n.name,n.name,!1,n.name===e))}function O(){let e=k(),t=!c(`labelEditor`).classList.contains(`section-open`);c(`labelOffsetShow`).style.display=t&&e?`inline-block`:`none`,c(`labelRemoveSingle`).style.display=t&&T.type===`added`?`inline-block`:`none`,c(`labelReset`).style.display=t&&Labels.hasOverride(T.type,T.entityId)?`inline-block`:`none`;let i=c(`labelPathToggle`);i.className=e?`icon-resize-horizontal`:`icon-bezier-curve`,i.dataset.tip=r(e?`Remove the label path, render the label as a straight text`:`Curve the label along a path`);let a=c(`labelVisibility`);a.className=T.hidden?`icon-eye-off`:`icon-eye`,a.dataset.tip=T.hidden?r(`Show`):n(r(`Hide`),r(`You can toggle it on later in Labels Overview`))}function k(){return!!T.pathPoints?.length}function A(){let e=T.startOffset||50;c(`labelText`).value=T.text||``,c(`labelStartOffset`).value=String(e),c(`labelStartOffsetValue`).value=String(e),c(`labelRelativeSize`).value=String(T.fontSize??100),c(`labelLetterSpacingSize`).value=String(T.letterSpacing??0)}function j(){c(`labelEditor`).classList.add(`section-open`),document.querySelectorAll(`#labelEditor > button`).forEach(e=>{e.style.display=`none`})}function M(){c(`labelEditor`).classList.remove(`section-open`),document.querySelectorAll(`#labelEditor > button`).forEach(e=>{e.style.display=`inline-block`}),O()}function N(e){m();let t=e.target,n=t.parentNode;t.closest(`#${T.id}`)?p(r(`Drag to move the label`)):n?.id===`controlPoints`&&(t.tagName===`circle`&&p(r(`Drag to move, click to delete the control point`)),t.tagName===`path`&&p(r(`Click to add a control point`)))}function P(){if(s(`#debug`).select(`#controlPoints`).remove(),!k())return;let e=T.dx||T.dy?`translate(${T.dx||0}, ${T.dy||0})`:null;s(`#debug`).append(`g`).attr(`id`,`controlPoints`).attr(`transform`,e).append(`path`).attr(`d`,ee(T)).style(`stroke-width`,Math.max(2.2/h.scale,.2)).on(`click`,z),T.pathPoints?.forEach(F)}function F(e){s(`#debug`).select(`#controlPoints`).append(`circle`).attr(`cx`,e[0]).attr(`cy`,e[1]).attr(`r`,Math.max(3/h.scale,.35)).style(`stroke-width`,Math.max(1/h.scale,.15)).call(d().on(`drag`,I)).on(`click`,R)}function I(e){this.setAttribute(`cx`,e.x),this.setAttribute(`cy`,e.y),L()}function L(){let n=[];s(`#debug > #controlPoints`).selectAll(`circle`).each(function(){let t=e(+this.getAttribute(`cx`),2),r=e(+this.getAttribute(`cy`),2);n.push([t,r])});let r=a().curve(f),i=t(r(n)||``);s(`#debug`).select(`#controlPoints > path`).attr(`d`,i),T.pathPoints=n,X(),n.length||P()}function R(){this.remove(),L()}function z(e){let t=i(e,this),n=[];s(`#debug #controlPoints`).selectAll(`circle`).each(function(){let e=+this.getAttribute(`cx`),r=+this.getAttribute(`cy`);n.push((t[0]-e)**2+(t[1]-r)**2)});let r=n.length;if(n.length>1){let e=n.slice(0).sort((e,t)=>e-t),t=n.indexOf(e[0]),i=n.indexOf(e[1]);r=t<=i?t+1:i+1}let a=`:nth-child(${r+2})`;s(`#debug`).select(`#controlPoints`).insert(`circle`,a).attr(`cx`,t[0]).attr(`cy`,t[1]).attr(`r`,2.5).attr(`stroke-width`,.8).call(d().on(`drag`,I)).on(`click`,R),L()}function B(t){let n=(T.dx||0)-t.x,r=(T.dy||0)-t.y;t.on(`drag`,t=>{T.dx=e(n+t.x,2),T.dy=e(r+t.y,2);let i=`translate(${T.dx}, ${T.dy})`;this.setAttribute(`transform`,i),s(`#debug #controlPoints`).attr(`transform`,i)}),t.on(`end`,()=>X())}function V(){j(),c(`labelGroupSection`).style.display=`inline-block`}function H(){M(),c(`labelGroupSection`).style.display=`none`}function U(){let e=this.value,t=options.map.labels.groups.find(t=>t.name===e)?.type,i=()=>{w=e,T.group=e,X()};if(t===T.type)return void i();b({title:r(`Assign cross-type Label Group`),message:n(r(`Assign this {{type}} label to the {{targetType}} group “{{group}}”?`,{type:T.type,targetType:t,group:e}),r(`It's better to avoid such cross-type assignment`)),confirm:r(`Assign`),onConfirm:i,onCancel:()=>{this.value=T.group}})}function W(){j(),c(`labelTextSection`).style.display=`inline-block`}function G(){M(),c(`labelTextSection`).style.display=`none`}function K(){let e=c(`labelText`).value;T.text=e,X(),T.type===`state`&&p(r(`Use States Editor to change the actual state name, not just a label`),!1,`warn`),T.type===`province`&&p(r(`Use Provinces Editor to change the actual province name, not just a label`),!1,`warn`)}var q={burg:e=>Names.getCulture(pack.burgs[e.entityId].culture??0),state:e=>{let t=pack.states[e.entityId].culture;return Names.getState(Names.getCulture(t,4,7,``),t)},province:e=>{let t=pack.provinces[e.entityId];return Names.getState(t.name,pack.cells.culture[t.center])},added:e=>{let t=Pack.findCell(...e.anchor);return t?Names.getCulture(pack.cells.culture[t]):``},river:e=>{let t=Pack.findCell(...e.anchor);return t?Rivers.getName(t):``},route:e=>{let t=pack.routes.find(t=>t.i===e.entityId)?.points??[];return Routes.generateName({group:e.group,points:t})||`Unnamed route segment`}};function J(){c(`labelText`).value=q[T.type](T),K()}function re(){g.StyleEditor.open(`labels`,T.group)}function Y(){j(),c(`labelSizeSection`).style.display=`inline-block`}function ie(){M(),c(`labelSizeSection`).style.display=`none`}function ae(){j(),c(`labelOffsetSection`).style.display=`inline-block`}function oe(){M(),c(`labelOffsetSection`).style.display=`none`}function se(){j(),c(`labelLetterSpacingSection`).style.display=`inline-block`}function ce(){M(),c(`labelLetterSpacingSection`).style.display=`none`}function le(){if(!k())return;let e=this.value;c(`labelStartOffsetValue`).value=e,T.startOffset=+e,X(),p(r(`Label offset: {{value}}%`,{value:e}))}function ue(){if(!k())return;let e=Math.min(80,Math.max(20,+this.value));c(`labelStartOffset`).value=String(e),this.value=String(e),T.startOffset=e,X(),p(r(`Label offset: {{value}}%`,{value:e}))}function de(){T.fontSize=+this.value,X(),p(r(`Label relative size: {{value}}%`,{value:this.value}))}function fe(){T.letterSpacing=+this.value,X(),p(r(`Label letter-spacing size: {{value}}px`,{value:this.value}))}function pe(){T.pathPoints=k()?[]:C(T),X(),P()}function me(){T.hidden?delete T.hidden:T.hidden=!0,X()}function he(){let e=x.resolveElement(T.id);e&&g.NotesEditor.open(e)}function ge(){b({title:r(`Remove`),message:r(`Are you sure you want to remove the label?`),confirm:r(`Remove`),onConfirm:()=>{T.type===`added`&&(AddedLabels.remove(T.entityId),u.draw(`labels`),$(`#labelEditor`).dialog(`close`))}})}function X(){let e=Labels.getEntity(T.type,T.entityId);e&&(e.label=ve(),te(T),Z(T.id),O())}function Z(e){s(`#${e}`).call(d().on(`start`,B)).classed(`draggable`,!0)}function _e(){let{type:e,entityId:t}=T;Labels.reset(e,t),u.draw(`labels`),T={...l(e,t)??T},Z(T.id),D(T.group),A(),O(),P()}function Q(){s(`#debug`).select(`#controlPoints`).remove(),s(`#${T.id}`).on(`.drag`,null).classed(`draggable`,!1),S(),$(`#labelEditor`).dialog(`destroy`),c(`labelEditor`).remove()}function ve(){return{text:T.text,group:T.group,dx:T.dx,dy:T.dy,fontSize:T.fontSize,letterSpacing:T.letterSpacing,pathPoints:T.pathPoints??[],startOffset:T.startOffset,hidden:T.hidden}}var ye={open:E,getLastSelectedGroup:()=>w};export{ye as LabelsEditor};