import{n as e,r as t}from"./index-CuUJKJN8.js";import{z as n}from"./utils-394NS37_.js";import{h as r,p as i,t as a}from"./layers-CpGI7aJd.js";import{i as o}from"./tooltips-7PimaK30.js";import{t as s}from"./controllers-lOfLnkBO.js";import{n as c,t as l}from"./layer-labels-B60lVHW8.js";import"./layers-tab-Brzrj8zh.js";import{i as u,n as d,r as f}from"./dialog-helpers-kMHr89OS.js";import{t as p}from"./labels-generator-ft6xLK0P.js";import{c as m,s as h}from"./id-labels-Bh86rU1j.js";function g(){customization||(d(`.stable`),_(),v(),$(`#labelGroupsConfigurator`).dialog({title:t(`Configure Label Groups`),resizable:!1,maxHeight:Math.max(window.innerHeight-40,300),position:{my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},close:A,buttons:{[t(`Apply`)]:()=>{n(`labelGroupsForm`).requestSubmit()},[t(`Add`)]:()=>{n(`labelGroupsBody`).insertAdjacentHTML(`beforeend`,x({name:``,type:`state`,zoom:{min:null,max:null}},!0,0))},[t(`Restore`)]:()=>{let e=Labels.getDefaultOptions();n(`labelsShowAll`).checked=e.showAll,v(e.groups)},[t(`Cancel`)]:function(){$(this).dialog(`close`)}}}))}function _(){u(`labelGroupsConfigurator`);let r=`<div id="labelGroupsConfigurator" class="dialog stable">
    <form id="labelGroupsForm">
      <table class="table" style="white-space:nowrap; overflow-x:auto; max-width:100%">
        <colgroup>
          <col style="width:2.5em">
          <col style="width:8em">
          <col style="width:5.5em">
          <col style="width:4em">
          <col style="width:3.5em">
          <col style="width:3.5em">
          <col style="width:8.5em">
          <col style="width:3.5em">
          <col style="width:3.2em">
          <col style="width:3.2em">
        </colgroup>
        <thead>
          <tr>
            <th data-tip="${e(t(`Activate/deactivate group`),t(`Deactivated group labels are not visible`))}">${t(`Active`)}</th>
            <th data-tip="${e(t(`Group name`),t(`Must start with a letter or underscore, followed by letters, digits, underscores, or dashes`))}">${t(`Group`)}</th>
            <th data-tip="${t(`Label type, fixed after creation`)}">${t(`Type`)}</th>
            <th data-tip="${t(`Name display mode. Only applicable to States and Provinces`)}">${t(`Mode`)}</th>
            <th data-tip="${t(`Minimum zoom level to show the group`)}">${t(`Zoom min`)}</th>
            <th data-tip="${t(`Maximum zoom level to show the group`)}">${t(`Zoom max`)}</th>
            <th data-tip="${t(`Layer that must be toggled on for this group to be shown`)}">${t(`Layer dependency`)}</th>
            <th data-tip="${e(t(`Number of labels currently assigned to this group`),t(`Click the list icon to see them`))}">${t(`Labels`)}</th>
            <th data-tip="${t(`Rendering order: lower groups are rendered on top`)}">${t(`Order`)}</th>
            <th data-tip="${t(`Edit style or remove group`)}">${t(`Actions`)}</th>
          </tr>
        </thead>
        <tbody id="labelGroupsBody"></tbody>
      </table>
      <div id="labelGroupsMissingWrapper" style="display:none; gap:.4em; align-items:center; margin:.6em 0 0">
        <label data-tip="${t(`Groups referenced by labels but not defined here. Such labels are not rendered until they are reassigned to an existing group`)}"><strong>${t(`Missing groups`)}:</strong> <span id="labelGroupsMissing"></span></label>
      </div>
      <div style="display:flex; gap:1.2em; align-items:center; margin:.6em 0 0">
        <label data-tip="${t(`Ignore zoom bounds and show all labels regardless of the current zoom level`)}"><input id="labelsShowAll" class="checkbox" type="checkbox" ${options.app.labels.showAll?`checked`:``}><span class="checkbox-label">${t(`Show all labels`)} <small>[${t(`slow`)}]</small></span></label>
        <div style="padding: 0.5em 0; font-style: italic;">${t(`To change Burg Groups open {{- configurator}}.`,{configurator:`<a id="labelGroupsBurgGroupsLink" style="text-decoration: underline;">${t(`Burg Group Configurator`)}</a>`})}</div>
      </div>
    </form>
  </div>`;n(`dialogs`).insertAdjacentHTML(`beforeend`,r);let i=n(`labelGroupsForm`);i.addEventListener(`change`,D),i.addEventListener(`submit`,O),n(`labelGroupsBody`).addEventListener(`click`,w),n(`labelGroupsBody`).addEventListener(`change`,S),n(`labelGroupsBurgGroupsLink`).addEventListener(`click`,()=>s.BurgGroupEditor.open()),n(`labelGroupsMissing`).addEventListener(`click`,C)}function v(e=options.map.labels.groups){let t=b();n(`labelGroupsBody`).innerHTML=e.map(e=>x(e,!1,t.get(e.name)??0)).join(``),y(t,e)}function y(e,r){let i=new Set(r.map(({name:e})=>e)),a=[...e.entries()].filter(([e])=>!i.has(e)).sort();n(`labelGroupsMissingWrapper`).style.display=a.length?`flex`:`none`,n(`labelGroupsMissing`).innerHTML=a.map(([e,n])=>`${e} (${n})
        <button type="button" name="missing" data-group="${e}" class="icon-list-bullet"
          data-tip="${t(`Show labels of the {{group}} group in Labels Overview to reassign them`,{group:e})}"></button>`).join(`, `)}function b(){let e=new Map,t=t=>e.set(t,(e.get(t)??0)+1);return i().forEach(e=>void t(e.group)),e}function x(n,r=!1,i=0){let a=[`auto`,`short`,`full`],o=!!n.isDefault,s=o?t(`Default group for this type, can't be renamed`):e(t(`Group name`),t(`Must start with a letter or underscore, followed by letters, digits, underscores, or dashes`)),u=E(n.type),d=t(u?`Name display mode: auto picks the best fit, short/full force a specific name form`:`Name display mode. Only applicable to States and Provinces`),f=[...l.keys()].sort();return`<tr data-group="${r?``:n.name}" data-is-default="${o?`1`:``}">
      <td data-tip="${t(`Activate/deactivate group`)}"><input type="checkbox" name="active" class="native" ${n.active===!1?``:`checked`}></td>
      <td data-tip="${s}"><input type="text" name="name" value="${n.name}" ${o?`disabled`:`required`}></td>
      <td data-tip="${t(`Label type, fixed after creation`)}"><select name="type" ${r?``:`disabled`}>
        ${p.map(e=>`<option value="${e}" ${n.type===e?`selected`:``}>${m[e]}</option>`).join(``)}
      </select></td>
      <td data-tip="${d}"><select name="mode" ${u?``:`disabled`}>
        ${a.map(e=>`<option value="${e}" ${(n.mode||`auto`)===e?`selected`:``}>${h[e]??e}</option>`).join(``)}
      </select></td>
      <td data-tip="${t(`Minimum zoom to show the group, leave empty for no limit`)}"><input type="number" name="zoom-min" min="0.01" max="200" step=".01" value="${n.zoom.min??``}"></td>
      <td data-tip="${t(`Maximum zoom to show the group, leave empty for no limit`)}"><input type="number" name="zoom-max" min="0.01" max="200" step=".01" value="${n.zoom.max??``}"></td>
      <td data-tip="${t(`Layer that must be toggled on for this group to be shown`)}"><select name="dependency">
        <option value="">${t(`None`)}</option>
        ${f.map(e=>`<option value="${e}" ${n.layerDependency===e?`selected`:``}>${c(e)}</option>`).join(``)}
      </select></td>
      <td data-tip="${t(`Number of labels currently assigned to this group`)}" style="text-align:center">
        <div style="min-width:2em; display:inline-block">${i}</div>
        <button type="button" name="list" class="icon-list-bullet" data-tip="${t(`Show labels of this group in Labels Overview`)}"></button>
      </td>
      <td data-tip="${t(`Assignment order: move group up or down`)}"><button type="button" name="up" class="icon-up-open" data-tip="${t(`Move up`)}"></button><button type="button" name="down" class="icon-down-open" data-tip="${t(`Move down`)}"></button></td>
      <td><button type="button" name="style" class="icon-brush" data-tip="${t(`Edit style`)}"></button><span data-tip="${t(o?`Default groups can't be removed`:`Remove`)}"><button type="button" name="remove" class="icon-trash-empty" ${o?`disabled`:``}></button></span></td>
    </tr>`}function S(e){let t=e.target;if(!(t instanceof HTMLSelectElement)||t.name!==`type`)return;let n=t.closest(`tr`)?.querySelector(`[name="mode"]`);if(!n)return;let r=E(t.value);n.disabled=!r,r||(n.value=`auto`)}function C(e){let t=e.target.closest(`button[name='missing']`);t?.dataset.group&&s.LabelsOverview.open(t.dataset.group)}function w(e){let t=e.target.closest(`button[name]`);if(!t||t.disabled)return;let n=t.closest(`tr`);if(n){if(t.name===`up`){let e=n.previousElementSibling;e&&n.parentNode.insertBefore(n,e)}else if(t.name===`down`){let e=n.nextElementSibling;e&&n.parentNode.insertBefore(e,n)}else if(t.name===`style`){let e=n.querySelector(`[name="name"]`).value.trim();e&&s.StyleEditor.open(`labels`,e)}else if(t.name===`list`){let e=n.dataset.group;e&&s.LabelsOverview.open(e)}else t.name===`remove`&&T(n)}}function T(e){n(`labelGroupsBody`).children.length<2?o(t(`At least one group should be defined`),!1,`error`):f({title:t(`Remove`),message:t(`Remove the group? This won't affect labels unless the changes are applied.`),confirm:t(`Remove`),onConfirm:()=>{e.remove(),D()}})}function E(e){return[`state`,`province`].includes(e)}function D(){let e=n(`labelGroupsForm`),r=Array.from(e.querySelectorAll(`input[name="name"]`)),i=r.map(e=>e.value.trim());r.forEach(e=>{if(e.disabled){e.setCustomValidity(``);return}let n=``,r=e.value.trim(),a=/^[\p{L}_][\p{L}\p{N}_-]*$/u.test(r),o=i.filter(e=>e===r).length===1;a||(n=t(`Group name must start with a letter or underscore and not contain special characters`)),o||(n=t(`Group name should be unique`)),e.setCustomValidity(n)});let a=e.checkValidity();return a||e.reportValidity(),a}function O(e){if(e.preventDefault(),!D())return;let i=Array.from(n(`labelGroupsBody`).children);if(!i.length)return void o(t(`At least one group should be defined`),!1,`error`);let s=new Set;i.forEach(e=>{let t=e.dataset.group,n=k(e);s.add(n.name),n.name!==t&&(t?(Labels.regroup(t,n.name),styles.labels.groups[n.name]=styles.labels.groups[t],delete styles.labels.groups[t]):styles.labels.groups[n.name]=r(n))}),options.map.labels.groups.forEach(e=>{if(s.has(e.name))return;let t=Labels.getFallbackGroup(e.type);Labels.regroup(e.name,t.name),delete styles.labels.groups[e.name]}),options.map.labels.groups=i.map(k),Options.set(e=>e.app.labels.showAll=n(`labelsShowAll`).checked);for(let e of options.map.labels.groups)styles.labels.groups[e.name]??=r(e);a.draw(`labels`),$(`#labelGroupsConfigurator`).dialog(`close`)}function k(e){let t=e.querySelector(`[name="name"]`).value.trim(),n=e.querySelector(`[name="type"]`).value,r=e.querySelector(`[name="active"]`).checked,i=e.querySelector(`[name="mode"]`).value,o=e.querySelector(`[name="zoom-min"]`),s=e.querySelector(`[name="zoom-max"]`),c=e.querySelector(`[name="dependency"]`).value.trim(),l={name:t,type:n,zoom:{min:o.value===``?null:o.valueAsNumber,max:s.value===``?null:s.valueAsNumber}};return r||(l.active=!1),i!==`auto`&&(l.mode=i),a.has(c)&&(l.layerDependency=c),e.dataset.isDefault===`1`&&(l.isDefault=!0),l}function A(){u(`labelGroupsConfigurator`)}var j={open:g};export{j as LabelGroupsConfigurator};