import{r as e}from"./index-CuUJKJN8.js";import{z as t}from"./utils-394NS37_.js";import{$ as n,o as r,t as i}from"./layers-CpGI7aJd.js";import{i as a}from"./tooltips-7PimaK30.js";import{c as o,i as s}from"./dialog-helpers-kMHr89OS.js";var c=`provincesRegeneration`;function l(){customization||(s(c),t(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${c}" class="dialog"></div>`),u(),$(`#${c}`).dialog({resizable:!1,title:e(`Regenerate Provinces`),width:`32em`,maxHeight:600,position:{my:`center`,at:`center`,of:`svg`},buttons:{[e(`Regenerate`)]:d,[e(`Close`)]:function(){$(this).dialog(`close`)}},close:()=>s(c)}))}function u(){let r=pack.states.filter(e=>e.i&&!e.removed).sort((e,t)=>e.name.localeCompare(t.name)),i=e=>pack.provinces.filter(t=>t.i&&!t.removed&&t.state===e).length;for(let{i:e,coa:t}of r)t&&n.trigger(`stateCOA${e}`,t);let a=r.map(({i:e,name:t,fullName:n,color:r})=>`<div data-tip="${n||t}">
      <input id="${c}State${e}" class="checkbox" type="checkbox" value="${e}" checked />
      <label for="${c}State${e}" class="checkbox-label">
        <fill-box fill="${r}" disabled></fill-box>
        <svg class="coaIcon" viewBox="0 0 200 200"><use href="#stateCOA${e}"></use></svg>${t} (${i(e)})
      </label>
    </div>`),o=t(c);o.innerHTML=`
    <p style="margin-top: 0">${e(`Select states to regenerate provinces for. Locked provinces will remain as they are`)}</p>
    <div style="margin-bottom: 0.4em">
      <input id="${c}All" class="checkbox" type="checkbox" />
      <label for="${c}All" class="checkbox-label"><b>${e(`All states`)}</b></label>
    </div>
    <div class="stateList" style="width: auto; display: grid; grid-template-columns: 1fr 1fr; gap: 0.3em">
      ${a.join(``)||e(`No states to regenerate provinces for`)}
    </div>`;let s=t(`${c}All`),l=Array.from(o.querySelectorAll(`.stateList input`)),u=()=>{let e=l.filter(e=>e.checked).length;s.checked=e===l.length,s.indeterminate=e>0&&e<l.length};u(),s.addEventListener(`change`,()=>{for(let e of l)e.checked=s.checked});for(let e of l)e.addEventListener(`change`,u)}function d(){let n=t(c).querySelectorAll(`.stateList input:checked`),s=Array.from(n,e=>Number(e.value));if(!s.length)return void a(e(`Please select at least one state`),!1,`error`);Provinces.regenerate(!0,s),r(),i.draw(`borders`,`provinces`,`labels`,`emblems`),o(),$(`#${c}`).dialog(`close`)}var f={open:l};export{f as ProvincesRegeneration};