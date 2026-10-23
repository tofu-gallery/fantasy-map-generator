import{B as e,Qt as t,o as n}from"./utils-394NS37_.js";import{n as r}from"./diplomacy-CV45FeJs.js";var i=`diplomacyMark`,a=0;function o(n){for(let i of pack.states){if(!i.i||i.removed)continue;let a=i.diplomacy?.[n],o=a&&r[a]?.color||`#4682b4`;e(`state${i.i}`)?.setAttribute(`fill`,o),e(`state-gap${i.i}`)?.setAttribute(`stroke`,o),e(`state-border${i.i}`)?.setAttribute(`stroke`,t(o).darker().hex())}s(n)}function s(t){if(t===a&&e(i))return;c(),a=t;let{cells:r}=pack,o=[];for(let e of r.i)r.state[e]===t&&o.push(e);let s=n(o,pack);s&&e(`debug`)?.insertAdjacentHTML(`beforeend`,`<g id="${i}" pointer-events="none" fill="none">
      <path d="${s}" stroke="#fff" stroke-width="3" stroke-opacity=".8" />
      <path d="${s}" stroke="#000" stroke-width="2" stroke-dasharray="8 6">
        <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="0.7s" repeatCount="indefinite" />
      </path>
    </g>`)}function c(){a=0,e(i)?.remove()}export{o as n,c as t};