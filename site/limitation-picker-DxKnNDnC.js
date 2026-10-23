import{f as e,r as t}from"./index-CuUJKJN8.js";import{z as n}from"./utils-394NS37_.js";import{i as r}from"./tooltips-7PimaK30.js";var i=e=>e.filter(e=>e.i&&!e.removed);function a(e,t){return e?.length?e.map(e=>t.find(t=>t.i===e)?.name??``).join(`, `):`all`}function o({title:a,heading:o,items:s,allowed:c,onApply:l}){let u=i(s).map(({i:t,name:n,fullName:r,color:i})=>`<tr data-tip="${e(n)}">
      <td><span style="color:${e(i??``)}">⬤</span></td>
      <td>
        <input data-i="${t}" id="limitation${t}" type="checkbox" class="checkbox" ${!c?.length||c.includes(t)?`checked`:``}>
        <label for="limitation${t}" class="checkbox-label">${e(r||n)}</label>
      </td>
    </tr>`),d=n(`alertMessage`);d.innerHTML=`<b>${e(o)}:</b>
    <table style="margin-top:.3em"><tbody>${u.join(``)}</tbody></table>`;let f=()=>Array.from(d.querySelectorAll(`input`));$(`#alert`).dialog({width:`fit-content`,title:a,close:()=>$(`#alert`).dialog(`option`,`buttons`,{}),buttons:{[t(`Invert`)]:()=>{for(let e of f())e.checked=!e.checked},[t(`Apply`)]:()=>{let e=f().filter(e=>e.checked);if(!e.length)return r(t(`Select at least one element`),!1,`error`);l(e.length===f().length?[]:e.map(e=>Number(e.dataset.i))),$(`#alert`).dialog(`close`)},[t(`Cancel`)]:()=>$(`#alert`).dialog(`close`)}})}export{o as n,a as t};