import{n as e,r as t}from"./index-CuUJKJN8.js";import{z as n}from"./utils-394NS37_.js";import{t as r}from"./layers-CpGI7aJd.js";import{i}from"./tooltips-7PimaK30.js";import{t as a}from"./controllers-lOfLnkBO.js";import{c as o,i as s,n as c,r as l}from"./dialog-helpers-kMHr89OS.js";import{n as u}from"./limitation-picker-DxKnNDnC.js";var d=/^[\p{L}_][\p{L}\p{N}_-]*$/u;function f(){customization||(c(`.stable`),p(),h(),$(`#burgGroupsEditor`).dialog({title:t(`Configure burg groups`),resizable:!1,position:{my:`center`,at:`center`,of:`svg`},close:m,buttons:{[t(`Apply`)]:()=>{n(`burgGroupsForm`).requestSubmit()},[t(`Add`)]:()=>{let e={name:``,order:Math.max(0,...options.map.burgs.groups.map(({order:e})=>e))+1,active:!0};n(`burgGroupsBody`).insertAdjacentHTML(`beforeend`,g(e))},[t(`Restore`)]:()=>{h(Burgs.getDefaultGroups())},[t(`Cancel`)]:function(){$(this).dialog(`close`)}}}))}function p(){s(`burgGroupsEditor`);let e=`<div id="burgGroupsEditor" class="dialog stable">
    <form id="burgGroupsForm">
      <table class="table">
        <thead>
          <tr>
            <th data-tip="${t(`Rendering order: higher values are rendered on top`)}">${t(`Order`)}</th>
            <th data-tip="${t(`Group name`)}">${t(`Name`)}</th>
            <th data-tip="${t(`Burg preview generator`)}">${t(`Preview generator`)}</th>
            <th data-tip="${t(`Set min and max population constraint in population points (see the multiplier in Units Editor)`)}" colspan="3">${t(`Population`)}</th>
            <th data-tip="${t(`Select allowed biomes`)}">${t(`Biomes`)}</th>
            <th data-tip="${t(`Select allowed states`)}">${t(`States`)}</th>
            <th data-tip="${t(`Select allowed cultures`)}">${t(`Cultures`)}</th>
            <th data-tip="${t(`Select allowed religions`)}">${t(`Religions`)}</th>
            <th data-tip="${t(`Select allowed features`)}">${t(`Features`,{context:`burg`})}</th>
            <th data-tip="${t(`Number of burgs in group`)}">${t(`Count`)}</th>
            <th data-tip="${t(`Activate/deactivate group`)}">${t(`Active`)}</th>
            <th data-tip="${t(`Select group to be assigned if burg doesn't pass the criteria for other groups`)}">
              ${t(`Default`)}
            </th>
          </tr>
        </thead>
        <tbody id="burgGroupsBody"></tbody>
      </table>
    </form>
    <div style="padding: 0.5em 0; font-style: italic;">
      ${t(`Burg population is calculated as {{formula}}, see the {{- editor}}.`,{formula:`value * population_point * urbanization_rate`,editor:`<a style="text-decoration: underline;" id="burgGroupsUnitsEditorLink">${t(`Units Editor`)}</a>`})}
      <br>${t(`Applying changes reclassifies Burgs, but label groups are not affected. Reconcile label groups in {{- configurator}}.`,{configurator:`<a id="burgGroupsLabelGroupsLink" style="text-decoration: underline;">${t(`Label Group Configurator`)}</a>`})}
    </div>
  </div>`;n(`dialogs`).insertAdjacentHTML(`beforeend`,e);let r=n(`burgGroupsForm`);r.addEventListener(`change`,b),r.addEventListener(`submit`,C),n(`burgGroupsBody`).addEventListener(`click`,e=>{let t=e.target,n=t.closest(`tr`);if(n){if(t.getAttribute(`name`)===`biomes`)return _(t,pack.biomes.filter(e=>!e.removed).map(({i:e,name:t,color:n})=>({i:e,name:t,color:n})));if(t.getAttribute(`name`)===`states`)return _(t,pack.states);if(t.getAttribute(`name`)===`cultures`)return _(t,pack.cultures);if(t.getAttribute(`name`)===`religions`)return _(t,pack.religions);if(t.getAttribute(`name`)===`features`)return v(t);if(t.getAttribute(`name`)===`up`){let e=n.previousElementSibling;e&&n.parentNode.insertBefore(n,e)}else if(t.getAttribute(`name`)===`down`){let e=n.nextElementSibling;e&&n.parentNode.insertBefore(e,n)}else if(t.getAttribute(`name`)===`remove`)return y(n)}}),n(`burgGroupsUnitsEditorLink`).addEventListener(`click`,()=>a.UnitsEditor.open()),n(`burgGroupsLabelGroupsLink`).addEventListener(`click`,()=>a.LabelGroupsConfigurator.open())}function m(){$(`#burgGroupsEditor`).dialog(`destroy`),n(`burgGroupsEditor`).remove()}function h(e=options.map.burgs.groups){let t=e.map(g);n(`burgGroupsBody`).innerHTML=t.join(``)}function g(n){let r=pack.burgs.filter(e=>!e.removed&&e.group===n.name).length;return`<tr name="${n.name}">
      <td data-tip="${t(`Rendering order: higher values are rendered on top`)}"><input type="number" name="order" min="1" max="999" step="1" required value="${n.order||``}" /></td>
      <td data-tip="${e(t(`Group name`),t(`Must start with a letter or underscore, followed by letters, digits, underscores, or dashes`),t(`Spaces are not allowed`))}"><input type="text" name="name" value="${n.name}" required /></td>
      <td data-tip="${t(`Burg preview generator`)}">
        <select name="preview">
          <option value="" ${n.preview?``:`selected`}>${t(`No`)}</option>
          <option value="watabou-city" ${n.preview===`watabou-city`?`selected`:``}>Watabou City</option>
          <option value="watabou-village" ${n.preview===`watabou-village`?`selected`:``}>Watabou Village</option>
          <option value="watabou-dwelling" ${n.preview===`watabou-dwelling`?`selected`:``}>Watabou Dwelling</option>
        </select>
      </td>
      <td data-tip="${t(`Set min and max population constraint in population points (see the multiplier in Units Editor)`)}"><input type="number" name="min" min="0" step="any" value="${n.min||``}" /></td>
      <td data-tip="${t(`Set min and max population constraint in population points (see the multiplier in Units Editor)`)}"><input type="number" name="max" min="0" step="any" value="${n.max||``}" /></td>
      <td data-tip="${t(`Set population percentile: 0-100, where 90 means the burg must have a population higher than 90% of all burgs`)}"><input type="number" name="percentile" min="0" max="100" step="any" value="${n.percentile||``}" /></td>
      <td data-tip="${t(`Select allowed biomes`)}">
        <input type="hidden" name="biomes" value="${n.biomes||``}">
        <button type="button" name="biomes">${n.biomes?t(`Some`):t(`All`)}</button>
      </td>
      <td data-tip="${t(`Select allowed states`)}">
        <input type="hidden" name="states" value="${n.states||``}">
        <button type="button" name="states">${n.states?t(`Some`):t(`All`)}</button>
      </td>
      <td data-tip="${t(`Select allowed cultures`)}">
        <input type="hidden" name="cultures" value="${n.cultures||``}">
        <button type="button" name="cultures">${n.cultures?t(`Some`):t(`All`)}</button>
      </td>
      <td data-tip="${t(`Select allowed religions`)}">
        <input type="hidden" name="religions" value="${n.religions||``}">
        <button type="button" name="religions">${n.religions?t(`Some`):t(`All`)}</button>
      </td>
      <td data-tip="${t(`Select allowed features`)}" >
        <input type="hidden" name="features" value='${JSON.stringify(n.features||{})}'>
        <button type="button" name="features">${Object.keys(n.features||{}).length?t(`Some`):t(`Any`)}</button>
      </td>
      <td data-tip="${t(`Number of burgs in group`)}">${r}</td>
      <td data-tip="${t(`Activate/deactivate group`)}"><input type="checkbox" name="active" class="native" ${n.active&&`checked`} /></td>
      <td data-tip="${t(`Select group to be assigned if other groups are not passed`)}"><input type="radio" name="isDefault" ${n.isDefault&&`checked`}></td>
      <td data-tip="${t(`Assignment order: move group up or down`)}"><button type="button" name="up" class="icon-up-big"></button></td>
      <td data-tip="${t(`Assignment order: move group up or down`)}"><button type="button" name="down" class="icon-down-big"></button></td>
      <td data-tip="${t(`Remove`)}"><button type="button" name="remove" class="icon-trash"></button></td>
    </tr>`}function _(e,n){let r=e.previousElementSibling;u({title:t(`Limit group`),heading:t(`Limit group by {{feature}}`,{feature:e.getAttribute(`name`)}),items:n,allowed:r.value?r.value.split(`,`).map(Number):[],onApply:n=>{r.value=n.join(`,`),e.innerHTML=n.length?t(`Some`):t(`All`)}})}function v(e){let r=e.previousElementSibling.value,i=r?JSON.parse(r):{},a=[{name:`capital`,icon:`icon-star`},{name:`port`,icon:`icon-anchor`},{name:`citadel`,icon:`icon-chess-rook`},{name:`walls`,icon:`icon-fort-awesome`},{name:`plaza`,icon:`icon-store`},{name:`temple`,icon:`icon-chess-bishop`},{name:`shanty`,icon:`icon-campground`}],o=a.map(({name:e,icon:n})=>`
        <tr data-tip="${t(`Select limitation for burg feature: {{feature}}`,{feature:e})}">
          <td>
            <span class="${n}"></span>
            <span style="margin-left:.2em">${e}</span>
          </td>
          <td>
            <input type="radio" name="${e}" value="true" ${i[e]===!0?`checked`:``} style="margin:0" >
          </td>
          <td>
            <input type="radio" name="${e}" value="false" ${i[e]===!1?`checked`:``} style="margin:0">
          </td>
          <td>
            <input type="radio" name="${e}" value="undefined" ${i[e]===void 0?`checked`:``} style="margin:0">
          </td>
        </tr>`);alertMessage.innerHTML=`
      <form id="featuresLimitationForm">
        <table>
          <thead style="font-weight:bold">
            <td style="width:6em">${t(`Features`,{context:`burg`})}</td>
            <td style="width:3em">${t(`True`)}</td>
            <td style="width:3em">${t(`False`)}</td>
            <td style="width:3em">${t(`Any`)}</td>
          </thead>
          <tbody>
            ${o.join(``)}
          </tbody>
        </table>
      </form>`,$(`#alert`).dialog({width:`fit-content`,title:t(`Limit group by features`),buttons:{[t(`Apply`)]:function(){let r=n(`featuresLimitationForm`),i=a.reduce((e,{name:t})=>{let n=r[t].value;return n!==`undefined`&&(e[t]=n===`true`),e},{});e.previousElementSibling.value=JSON.stringify(i),e.innerHTML=Object.keys(i).length?t(`Some`):t(`Any`),$(this).dialog(`close`)},[t(`Cancel`)]:function(){$(this).dialog(`close`)}}})}function y(e){n(`burgGroupsBody`).children.length<2?i(t(`At least one group should be defined`),!1,`error`):l({title:t(`Remove`),message:`${t(`Are you sure you want to remove the group?`)}<br>${t(`This WON'T change the burgs unless the changes are applied`)}`,confirm:t(`Remove`),onConfirm:()=>{e.remove(),b()}})}function b(){let e=n(`burgGroupsForm`),r=e.name;if(r.length){let e=Array.from(r).map(e=>e.value);r.forEach(n=>{let r=n.value,i=d.test(r),a=e.filter(e=>e===r).length===1,o=i?a?``:t(`Group name should be unique`):t(`Group name must start with a letter or underscore and then contain only letters, digits, underscores, or dashes`);n.setCustomValidity(o)})}else{let e=r.value,n=d.test(e)?``:t(`Group name must start with a letter or underscore and then contain only letters, digits, underscores, or dashes`);r.setCustomValidity(n)}let i=e.active;if(i.length){let e=Array.from(i).map(e=>e.checked);i[0].setCustomValidity(e.includes(!0)?``:t(`At least one group should be active`))}else i.setCustomValidity(i.checked?``:t(`At least one group should be active`));let a=e.isDefault;if(a.length){let e=Array.from(a).map(e=>e.checked);a[0].setCustomValidity(e.includes(!0)?``:t(`At least one group should be default`))}else a.setCustomValidity(a.checked?``:t(`At least one group should be default`));let o=e.checkValidity();return o||e.reportValidity(),o}function x(e){let t=t=>e.querySelector(`input[name="${t}"]`),n=e=>{let n=t(e).valueAsNumber;return Number.isNaN(n)||n===0?void 0:n},r=e=>{let n=t(e).value;return n?n.split(`,`).map(Number):void 0};return{name:t(`name`).value,order:t(`order`).valueAsNumber,active:t(`active`).checked,isDefault:t(`isDefault`).checked,preview:e.querySelector(`select[name="preview"]`).value||void 0,min:n(`min`),max:n(`max`),percentile:n(`percentile`),features:S(t(`features`).value),biomes:r(`biomes`),states:r(`states`),cultures:r(`cultures`),religions:r(`religions`)}}function S(e){if(!JSON.isValid(e))return;let t=JSON.parse(e);return Object.keys(t).length?t:void 0}function C(e){if(e.preventDefault(),!b())return;let a=Array.from(n(`burgGroupsBody`).children);if(!a.length){i(t(`At least one group should be defined`),!1,`error`);return}options.map.burgs.groups=a.map(x),Options.save();let s=pack.burgs.filter(e=>e.i&&!e.removed),c=s.map(e=>e.population).sort((e,t)=>e-t);s.forEach(e=>void Burgs.defineGroup(e,c)),window.Labels.ensureBurgLabelGroups(),window.Burgs.ensureBurgGroupStyles(),r.draw(`burgIcons`),r.draw(`labels`),o(),$(`#burgGroupsEditor`).dialog(`close`)}var w={open:f};export{w as BurgGroupEditor};