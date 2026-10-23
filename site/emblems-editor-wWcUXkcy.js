import{C as e,f as t,r as n,u as r,x as i}from"./index-CuUJKJN8.js";import{B as a,M as o,dn as s,m as c,p as l,z as u}from"./utils-394NS37_.js";import{$ as d,J as f,Q as p,at as ee,et as m,it as h,nt as g,ot as te,rt as _,st as v,tt as ne}from"./layers-CpGI7aJd.js";import{t as re}from"./drag-C_reJWZK.js";import{r as ie}from"./highlight-DOx2q_4P.js";import{i as y,n as b,r as ae,t as x}from"./emblems-generator-B3pPl-l-.js";import{i as S,t as oe}from"./tooltips-7PimaK30.js";import{r as C}from"./emblems-6bhvewnB.js";import{i as se}from"./dialog-helpers-kMHr89OS.js";import{E as w,M as T,O as ce,S as E,T as le}from"./schemaUtils-BT1J-24V.js";import{cloneEmblem as ue,emblemURL as de,loadEmblemIcons as D}from"./emblem-image-lwUYLSL0.js";import{t as fe}from"./pictures-C6C6r3PL.js";import{IconPicker as pe}from"./icon-picker-CNUMuMyc.js";var O=`https://azgaar.github.io/Armoria/`,me=`https://armoria.herokuapp.com/`,k=n(`Paste an Armoria edit link, API link or COA string. Use the picture button for other images`);function A(e){let t=e.trim();if(!/^https?:\/\//i.test(t))return j(t);let r;try{r=new URL(t)}catch{throw Error(n(`The link is not a valid URL`))}if(!(r.origin===new URL(`https://azgaar.github.io/Armoria/`).origin&&r.pathname.startsWith(`/Armoria`)||r.origin===new URL(`https://armoria.herokuapp.com/`).origin)||!r.searchParams.has(`coa`))throw Error(k);return j(r.searchParams.get(`coa`)??``)}function j(e){if(!e)throw Error(k);try{let t=JSON.parse(/^%7b/i.test(e)?decodeURIComponent(e):e);if(M.safeParse(t).success)return t}catch{}throw Error(n(`The Armoria COA is not valid JSON with a field {{field}}`,{field:`tincture`}))}var M=w({t1:T(),shield:T().optional(),diaper:T().optional(),division:w({division:T(),t:T()}).optional(),charges:E(w({charge:T(),t:T(),p:T()})).optional(),ordinaries:E(w({ordinary:T(),t:T()})).optional(),inscriptions:E(w({text:T(),path:T()})).optional()});function he(e){let t=new URL(me);return t.searchParams.set(`size`,`1024`),t.searchParams.set(`format`,`svg`),t.searchParams.set(`coa`,JSON.stringify(e)),t.href}var ge=ce({type:le(`armoria:coa`),version:le(1),session:T(),coa:M,svg:T()}),_e=class{sessions=new Map;start(e,t,n,r=new URL(O).origin){for(let[e,n]of this.sessions)n.key===t&&this.sessions.delete(e);let i=crypto.randomUUID();return this.sessions.set(i,{target:e,key:t,map:n,origin:r}),i}receive(e,t){let n=ge.safeParse(e.data);if(!n.success)return null;let{session:r,coa:i,svg:a}=n.data,o=this.sessions.get(r);return!o||e.origin!==o.origin||o.map!==t?null:{target:o.target,coa:i,svg:a}}};function ve(e){let t=e=>{if(!e||typeof e!=`string`)return!1;if(e in v||/^#[\da-f]{3,8}$/i.test(e))return!0;let[n,r,i]=e.split(`-`);return!t(r)||!t(i)?!1:n.startsWith(`semy_of_`)?!!x.chargeIcon(n.slice(8)):n in h},n=e=>!e||e in ee,r=e=>{let t=g(e,`heater`);return t?t in _:!!x.chargeArt(e)};return t(e.t1)&&(!e.shield||e.shield in _)&&(!e.diaper||e.diaper===`no`||e.diaper in te)&&(!e.division||(e.division.division===`no`||e.division.division in m)&&t(e.division.t)&&n(e.division.line))&&(e.ordinaries??[]).every(e=>(e.ordinary===`bordure`||e.ordinary===`orle`||e.ordinary in ne)&&t(e.t)&&(!e.t2||t(e.t2))&&n(e.line))&&(e.charges??[]).every(e=>r(e.charge)&&t(e.t)&&(!e.t2||t(e.t2))&&(!e.t3||t(e.t3)))}var N=n(`Size of this emblem, 0 hides it. Change a whole category in Menu ⭢ Style ⭢ Emblems`),ye=`
  #emblemEditor { padding: .5em .7em .6em; }
  #emblemEditor > div { width: auto; }
  #emblemEditor .preview { width: 12em; height: 12em; margin: 0 auto .2em; }
  #emblemEditor .preview svg { width: 100%; height: 100%; overflow: visible; }
  #emblemArmiger { display: block; margin-bottom: .5em; text-align: center; }
  #emblemEditor .fields { display: grid; grid-template-columns: 6.4em minmax(0, 1fr); align-items: center; gap: .3em .4em; }
  #emblemEditor .fields .row { display: contents; }
  #emblemEditor .fields .row.hidden { display: none; }
  #emblemEditor .tincture { display: flex; align-items: center; gap: .35em; }
  #emblemEditor .tincture select { flex: 1; min-width: 0; }
  #emblemEditor .swatch { flex: none; width: 1.1em; height: 1.1em; border: 1px solid #0006; border-radius: 2px; }
  #emblemEditor .fields label { white-space: nowrap; padding: .15em .35em; border-radius: 3px; transition: background-color .3s ease-out; }
  #emblemEditor .fields label.active { background-color: #54ca7733; font-weight: bold; }
  #emblemEditor .fields select { width: 100%; min-width: 0; margin: 0; }
  #emblemEditor .fields hr { grid-column: 1 / -1; width: 100%; margin: .2em 0; border: 0; border-top: 1px solid #0000001f; }
  #emblemEditor .size { display: flex; align-items: center; gap: .4em; }
  #emblemEditor .size input[type="range"] { flex: 1; min-width: 0; margin: 0; }
  #emblemEditor .size input[type="number"] { width: 3.8em; margin: 0; }
  #emblemEditor .armoria { margin-top: .6em; }
  #emblemEditor .armoria button { width: 100%; margin: 0; padding: .4em; font-weight: bold; }
  #emblemEditor .armoria p { margin: .3em 0 0; font-size: .85em; opacity: .75; text-align: center; }
  #emblemEditor .toolbar { display: grid; grid-template-columns: repeat(7, 1fr); gap: .25em; margin-top: .7em; }
  #emblemEditor .control { display: flex; align-items: center; gap: .3em; margin-top: .4em; }
  #emblemEditor .control.hidden { display: none; }
  #emblemEditor .control input[type="text"] { flex: 1; min-width: 0; margin: 0; }
  #emblemEditor .control input[type="number"] { width: 4.6em; margin: 0; }
  #emblemEditor .control button { margin: 0; }
  #emblemEditor #emblemDownloadControl button { flex: 1; }
`,P,F,I,L,R=new _e,z=O;async function be(){let e=pack.states.find(e=>e.i&&!e.removed&&e.coa),t=pack.burgs.find(e=>e.i&&!e.removed&&e.coa),r=e?`state`:`burg`,i=e??t;if(!i?.coa){S(n(`No emblems to edit, please generate states and burgs first`),!1,`error`);return}let a=`${r}COA${i.i}`;await d.trigger(a,i.coa),B(r,a,i)}function B(e,t,r,i){if(!customization){if(!t&&i)Se(i);else{if(!e||!t||!r?.coa)return;P=e,F=t,I=r}xe(),Q(),L?.(),L=p(Q),V(),$(`#emblemEditor`).dialog({title:n(`Edit Emblem`),resizable:!0,width:`22em`,height:`auto`,position:{my:`left top`,at:`left+10 top+10`,of:`svg`,collision:`fit`},close:qe})}}function xe(){se(`emblemEditor`);let e=`<div id="emblemEditor" class="dialog stable">
      <style>${ye}</style>
      <div class="preview"><svg viewBox="0 0 200 200"><use id="emblemImage"></use></svg></div>
      <b id="emblemArmiger"></b>
      <div class="fields">
        <label for="emblemStates" data-tip="${n(`Select state`)}">${n(`State`)}</label>
        <select id="emblemStates" data-tip="${n(`Select state`)}"></select>
        <label for="emblemProvinces" data-tip="${n(`Select province in state`)}">${n(`Province`)}</label>
        <select id="emblemProvinces" data-tip="${n(`Select province in state`)}"></select>
        <label for="emblemBurgs" data-tip="${n(`Select burg in province or state`)}">${n(`Burg`)}</label>
        <select id="emblemBurgs" data-tip="${n(`Select burg in province or state`)}"></select>
        <hr />
        <div id="emblemShapeRow" class="row">
        <label for="emblemShapeSelector" data-tip="${n(`Select shape of the emblem`)}">${n(`Shape`)}</label>
          <select id="emblemShapeSelector" data-tip="${n(`Select shape of the emblem`)}">
            <option value="">${n(`None`)}</option>
            <optgroup label="${n(`Basic`)}">
              <option value="heater">${n(`Heater`)}</option>
              <option value="spanish">${n(`Spanish`)}</option>
              <option value="french">${n(`French`)}</option>
            </optgroup>
            <optgroup label="${n(`Regional`)}">
              <option value="horsehead">${n(`Horsehead`)}</option>
              <option value="horsehead2">${n(`Horsehead Edgy`)}</option>
              <option value="polish">${n(`Polish`)}</option>
              <option value="hessen">${n(`Hessen`)}</option>
              <option value="swiss">${n(`Swiss`)}</option>
            </optgroup>
            <optgroup label="${n(`Historical`)}">
              <option value="boeotian">${n(`Boeotian`)}</option>
              <option value="roman">${n(`Roman`)}</option>
              <option value="kite">${n(`Kite`)}</option>
              <option value="oldFrench">${n(`Old French`)}</option>
              <option value="renaissance">${n(`Renaissance`)}</option>
              <option value="baroque">${n(`Baroque`)}</option>
            </optgroup>
            <optgroup label="${n(`Specific`)}">
              <option value="targe">${n(`Targe`)}</option>
              <option value="targe2">${n(`Targe`)} 2</option>
              <option value="pavise">${n(`Pavise`)}</option>
              <option value="wedged">${n(`Wedged`)}</option>
              <option value="embowed">${n(`Embowed`)}</option>
            </optgroup>
            <optgroup label="${n(`Banner`)}">
              <option value="flag">${n(`Flag`)}</option>
              <option value="pennon">${n(`Pennon`)}</option>
              <option value="guidon">${n(`Guidon`)}</option>
              <option value="banner">${n(`Banner`)}</option>
              <option value="dovetail">${n(`Dovetail`)}</option>
              <option value="gonfalon">${n(`Gonfalon`)}</option>
              <option value="pennant">${n(`Pennant`)}</option>
            </optgroup>
            <optgroup label="${n(`Simple`)}">
              <option value="round">${n(`Round`)}</option>
              <option value="oval">${n(`Oval`)}</option>
              <option value="vesicaPiscis">${n(`Vesica Piscis`)}</option>
              <option value="square">${n(`Square`)}</option>
              <option value="diamond">${n(`Diamond`)}</option>
              <option value="hexagon">${n(`Hexagon`)}</option>
            </optgroup>
            <optgroup label="${n(`Fantasy`)}">
              <option value="fantasy1">${n(`Fantasy`)} 1</option>
              <option value="fantasy2">${n(`Fantasy`)} 2</option>
              <option value="fantasy3">${n(`Fantasy`)} 3</option>
              <option value="fantasy4">${n(`Fantasy`)} 4</option>
              <option value="fantasy5">${n(`Fantasy`)} 5</option>
            </optgroup>
            <optgroup label="${n(`Middle Earth`)}">
              <option value="noldor">${n(`Noldor`)}</option>
              <option value="gondor">${n(`Gondor`)}</option>
              <option value="easterling">${n(`Easterling`)}</option>
              <option value="erebor">${n(`Erebor`)}</option>
              <option value="ironHills">${n(`Iron Hills`)}</option>
              <option value="urukHai">${n(`UrukHai`)}</option>
              <option value="moriaOrc">${n(`Moria Orc`)}</option>
            </optgroup>
          </select>
        </div>
        <div id="emblemFieldRow" class="row">
          <label for="emblemField" data-tip="${n(`Tincture of the field`)}">${n(`Field`)}</label>
          <div class="tincture"><span class="swatch"></span><select id="emblemField"></select></div>
        </div>
        <div id="emblemChargeRows" class="row">
          <label for="emblemChargeTincture" data-tip="${n(`Tincture of the main charge. A raster picture keeps its own colours`)}">${n(`Charge`)}</label>
          <div class="tincture"><span class="swatch"></span><select id="emblemChargeTincture"></select></div>
          <label for="emblemChargeSizeNumber" data-tip="${n(`Size of the main charge`)}">${n(`Charge size`)}</label>
          <div class="size" data-tip="${n(`Size of the main charge`)}">
            <input id="emblemChargeSizeSlider" type="range" min=".2" max="3" step=".05" />
            <input id="emblemChargeSizeNumber" type="number" min=".2" max="3" step=".05" />
          </div>
        </div>
        <label for="emblemSizeNumber" data-tip="${N}">${n(`Map size`,{context:`emblem`})}</label>
        <div class="size" data-tip="${N}">
          <input id="emblemSizeSlider" type="range" min="0" max="5" step=".1" />
          <input id="emblemSizeNumber" type="number" min="0" max="5" step=".1" />
        </div>
      </div>
      <div class="armoria">
        <button id="emblemsArmoria" type="button" data-tip="${n(`Open the emblem in Armoria, the heraldry editor: your changes show on the map as you make them`)}"><span class="icon-font"></span> ${n(`Edit in Armoria`)}</button>
      </div>
      <div class="toolbar">
        <button id="emblemsPaste" data-tip="${n(`Edit the COA string by hand, or paste an Armoria edit link, API link or COA string`)}" class="icon-link"></button>
        <button id="emblemsCharge" data-tip="${n(`Set the charge: choose, link or upload a picture to place on the field`)}" class="icon-chess-knight"></button>
        <button id="emblemsUpload" data-tip="${n(`Replace the whole emblem with a picture: choose, link or upload an image, such as a ready coat of arms`)}" class="icon-shield-alt"></button>
        <button id="emblemsDownload" data-tip="${n(`Download the emblem as an image`)}" class="icon-download"></button>
        <button id="emblemsGallery" data-tip="${n(`Download all emblems as an HTML gallery (open it in a browser; preparing takes a while)`)}" class="icon-layer-group"></button>
        <button id="emblemsRegenerate" data-tip="${n(`Regenerate the emblem`)}" class="icon-shuffle"></button>
        <button id="emblemsFocus" data-tip="${n(`Show the area or place of the emblem`)}" class="icon-target"></button>
      </div>
      <div id="emblemPasteControl" class="control hidden">
        <input id="emblemPaste" type="text" placeholder="${n(`Armoria link or COA string`)}" data-tip="${n(`The emblem's COA string: edit it, or replace it with an Armoria link or COA string, then Apply`)}" />
        <button id="emblemPasteApply" type="button" data-tip="${n(`Apply the pasted emblem`)}">${n(`Apply`)}</button>
      </div>
      <div id="emblemDownloadControl" class="control hidden">
        <input id="emblemsDownloadSize" data-tip="${n(`Image size in pixels`)}" type="number" value="500" step="100" min="100" max="10000" />
        <span>px</span>
        <button id="emblemsDownloadSVG" data-tip="${n(`Scalable vector image: best quality, opens in a browser or Inkscape`)}">SVG</button>
        <button id="emblemsDownloadPNG" data-tip="${n(`Lossless raster image with a transparent background`)}">PNG</button>
        <button id="emblemsDownloadJPG" data-tip="${n(`Compressed raster image on a white background`)}">JPG</button>
      </div>
    </div>`;u(`dialogs`).insertAdjacentHTML(`beforeend`,e),u(`emblemStates`).oninput=Ce,u(`emblemProvinces`).oninput=we,u(`emblemBurgs`).oninput=Te,u(`emblemShapeSelector`).oninput=Ee,u(`emblemField`).oninput=De,u(`emblemChargeTincture`).oninput=Oe,u(`emblemChargeSizeSlider`).oninput=G,u(`emblemChargeSizeNumber`).oninput=G,u(`emblemSizeSlider`).oninput=Pe,u(`emblemSizeNumber`).oninput=Pe,u(`emblemsRegenerate`).onclick=Fe,u(`emblemsArmoria`).onclick=Le,u(`emblemsCharge`).onclick=()=>Be(`charge`),u(`emblemsUpload`).onclick=()=>Be(`whole`),u(`emblemsPaste`).onclick=()=>q(`emblemPasteControl`),u(`emblemPasteApply`).onclick=()=>void Re(),u(`emblemPaste`).onkeydown=e=>{e.key===`Enter`&&Re()},u(`emblemsDownload`).onclick=()=>q(`emblemDownloadControl`),u(`emblemsDownloadSVG`).onclick=()=>J(`svg`),u(`emblemsDownloadPNG`).onclick=()=>J(`png`),u(`emblemsDownloadJPG`).onclick=()=>J(`jpeg`),u(`emblemsGallery`).onclick=Ue,u(`emblemsFocus`).onclick=Ne}function Se(e){let t=e.parentNode,n=t.id===`burgEmblems`?`burg`:t.id===`provinceEmblems`?`province`:`state`,r=+e.dataset.i,i=X(n,r);if(!i)throw Error(`Cannot edit ${n} emblem ${r}`);P=n,F=`${P}COA${r}`,I=i}function V(){let e=P,t=I,n=u(`emblemStates`),r=u(`emblemProvinces`),i=u(`emblemBurgs`),a=0,o=0,s=0;for(let[t,a]of[[n,`state`],[r,`province`],[i,`burg`]])t.previousElementSibling?.classList.toggle(`active`,e===a);e===`state`?a=t.i:e===`province`?(o=t.i,a=pack.states[t.state].i):(s=t.i,o=pack.cells.province[t.cell]?pack.provinces[pack.cells.province[t.cell]].i:0,a=t.state??0);let c=pack.burgs.filter(e=>e.i&&!e.removed&&e.coa);n.options.length=0,c.filter(e=>!e.state).length&&n.options.add(new Option(pack.states[0].name,`0`,!1,!a)),pack.states.filter(e=>e.i&&!e.removed).forEach(e=>{n.options.add(new Option(e.name,String(e.i),!1,e.i===a))}),r.options.length=0,r.options.add(new Option(``,`0`,!1,!o)),pack.provinces.filter(e=>!e.removed&&e.state===a).forEach(e=>{r.options.add(new Option(e.name,String(e.i),!1,e.i===o))}),i.options.length=0,i.options.add(new Option(``,`0`,!1,!s)),c.filter(e=>o?pack.cells.province[e.cell]===o:e.state===a).forEach(e=>{i.options.add(new Option(e.capital?`👑 ${e.name}`:e.name,String(e.i),!1,e.i===s))}),i.options[0].disabled=!0,d.trigger(F,t.coa),H()}function H(){let e=I;if(!e.coa)return;u(`emblemImage`).setAttribute(`href`,`#${F}`);let t=e.fullName||e.name;P===`burg`&&(t=n(`Burg of {{- burg}}`,{burg:t})),u(`emblemArmiger`).textContent=t??``;let r=u(`emblemShapeSelector`);r.value=e.coa.shield??(`icon`in e.coa?``:`heater`);let i=e.coa,a=W(),o=!!a&&!x.chargeIcon(a.charge)&&!!y.kind(a.charge);u(`emblemShapeRow`).classList.toggle(`hidden`,!o&&!(`icon`in i)),u(`emblemFieldRow`).classList.toggle(`hidden`,!o),u(`emblemChargeRows`).classList.toggle(`hidden`,!o),o&&!(`icon`in i)&&Ae(`emblemField`,i.t1),o&&a&&(Ae(`emblemChargeTincture`,a.t),u(`emblemChargeSizeSlider`).value=String(a.size??1),u(`emblemChargeSizeNumber`).value=String(a.size??1));let s=u(`emblemPaste`);if(document.activeElement!==s){let e=Ie(i);s.value=e?JSON.stringify(e):``}let c=e.coa.size??1;u(`emblemSizeSlider`).value=String(c),u(`emblemSizeNumber`).value=String(c)}function Ce(){let e=+u(`emblemStates`).value;if(e){if(!Z(`state`,e))return}else{let e=pack.burgs.filter(e=>e.i&&!e.removed&&!e.state);if(!e.length||!Z(`burg`,e[0].i))return}V()}function we(){let e=+u(`emblemProvinces`).value;if(e){if(!Z(`province`,e))return}else if(!Z(`state`,+u(`emblemStates`).value))return;V()}function Te(){Z(`burg`,+u(`emblemBurgs`).value)&&V()}function Ee(){let e=u(`emblemShapeSelector`),t=e.value,r=I.coa;if(t)`icon`in r?I.coa=U(r.icon,t,r):r.shield=t;else if(!(`icon`in r)){let t=r.charges?.[0]&&x.chargeArt(r.charges[0].charge);if(!t){e.value=r.shield??`heater`,S(n(`Only an emblem with a charge can show it without a shield`),!1,`warn`);return}I.coa={icon:t,size:r.size,x:r.x,y:r.y}}a(F)?.remove(),d.trigger(F,I.coa),f(P,I.i),H()}function U(e,t,{size:n,x:r,y:i}){return{t1:`argent`,shield:t,charges:[{charge:x.chargeOf(e),t:`gules`,p:`e`,size:1.5}],size:n,x:r,y:i}}function W(){let e=I.coa;return`icon`in e?void 0:e.charges?.[0]}function De(){let e=I.coa;`icon`in e||(e.t1=u(`emblemField`).value,K())}function Oe(){let e=W();e&&(e.t=u(`emblemChargeTincture`).value,K())}function G(e){let t=W(),n=+e.currentTarget.value;t&&n>0&&(t.size=n,K())}function K(){d.trigger(F,I.coa),H()}var ke=[[n(`Metals`),C.metals],[n(`Colours`),C.colours],[n(`Stains`),C.stains]];function Ae(e,n){let i=u(e);i.innerHTML=(ke.some(([,e])=>n in e)?``:`<option value="${t(n)}">${t(je(n))}</option>`)+ke.map(([e,t])=>`<optgroup label="${e}">${Object.keys(t).map(e=>`<option value="${e}">${r(e)}</option>`).join(``)}</optgroup>`).join(``),i.value=n,i.previousElementSibling.style.background=Me(n)}function je(e){let[t,n,i]=e.split(`-`);return i?`${r(t.replace(`semy_of_`,`semy of `).replace(/([a-z])([A-Z])/g,`$1 $2`).toLowerCase())}: ${n} and ${i}`:e}function Me(e){let[,t,n]=e.split(`-`);return n?`repeating-linear-gradient(45deg, ${v[t]??t} 0 3px, ${v[n]??n} 3px 6px)`:v[e]??e}function Ne(){ie(P,I)}function Pe(e){let t=i(+e.currentTarget.value||0,0,5);u(`emblemSizeSlider`).value=String(t),u(`emblemSizeNumber`).value=String(t);let{x:n,y:r}=I.coa;x.place(`${P}:${I.i}`,n??null,r??null,t),f(P,I.i)}function Fe(){x.regenerateOne(`${P}:${I.i}`),d.trigger(F,I.coa),f(P,I.i),H()}function Ie(e){if(`icon`in e){let t=b.get(e.icon);if(t?.kind!==`image`||!t.content.startsWith(`https://armoria.herokuapp.com/`))return null;try{return A(t.content)}catch{return null}}let{size:t,x:n,y:r,...i}=e;return i}function Le(){let e=Ie(I.coa)??{t1:`sable`};e.charges?.some(({charge:e})=>!x.chargeIcon(e)&&y.kind(e))&&S(n(`Armoria cannot show pictures from the icon library: those charges are missing there`),!1,`warn`,6e3);let t=R.start({type:P,id:I.i,entity:I,queue:Promise.resolve()},`${P}:${I.i}`,options.map,new URL(z).origin),r=new URL(z);r.searchParams.set(`coa`,JSON.stringify(e)),r.searchParams.set(`from`,`FMG`),r.searchParams.set(`session`,t),r.searchParams.set(`returnOrigin`,location.origin),o(r.href)}async function Re(){try{await ze(P,I.i,A(u(`emblemPaste`).value)),q(`emblemPasteControl`)}catch(e){S(e.message,!1,`error`,6e3)}}async function ze(e,t,r,i,a){let o=X(e,t);if(!o)return a;let s=options.map,{size:c,x:l,y:u}=o.coa,p;if(ve(r))o.coa={...r,size:c,x:l,y:u},a&&b.get(a)&&!Object.keys(y.uses(a)).length&&b.remove(a);else{let t=a&&b.get(a)?a:void 0,d=t??b.newId(),f=i?await fe.fromFile(new File([i],`armoria.svg`,{type:`image/svg+xml`}),d,`emblem`):{kind:`image`,content:he(r),viewBox:ae};if(options.map!==s||X(e,o.i)!==o)return a;t?b.update(t,f):b.add({id:d,...f}),o.coa={icon:d,size:c,x:l,y:u},p=d,t||S(n(`This COA uses art FMG cannot draw; it shows as Armoria's picture`),!1,`warn`,5e3)}return P===e&&I.i===t&&(d.trigger(F,o.coa),H()),f(e,t),p}window.addEventListener(`message`,e=>{let t=R.receive(e,options.map);if(!t)return;let n=t.target;n.queue=n.queue.then(async()=>{X(n.type,n.id)===n.entity&&(n.picture=await ze(n.type,n.id,t.coa,t.svg,n.picture))}).catch(e=>S(e.message,!1,`error`,6e3))});function Be(e){let t=I,n=P,r=F,i=options.map,a=t.coa,o=`icon`in a?``:a.charges?.[0]?x.chargeArt(a.charges[0].charge)??``:``;pe.open({current:`icon`in a?a.icon:e===`charge`?o:``,preferCustom:!0,profile:`emblem`,onPick:a=>{if(!a||options.map!==i||X(n,t.i)!==t)return;let o=t.coa;if(e===`whole`)t.coa={icon:a,size:o.size,x:o.x,y:o.y};else if(`icon`in o){let e=o.shield??x.getShield(t.culture??0,t.state);t.coa=U(a,e,o)}else{let e=x.chargeOf(a);o.charges?.length?o.charges[0]={...o.charges[0],charge:e}:o.charges=[{charge:e,t:/^(argent|or)$/.test(o.t1)?`gules`:`or`,p:`e`,size:1.5}]}d.trigger(r,t.coa),f(n,t.i),I===t&&H()}})}function q(e){for(let[t,n]of Object.entries({emblemPasteControl:`emblemsPaste`,emblemDownloadControl:`emblemsDownload`})){let r=t===e&&u(t).classList.contains(`hidden`);u(t).classList.toggle(`hidden`,!r),u(n).classList.toggle(`pressed`,r),r&&u(t).querySelector(`input`)?.focus()}}async function J(e){await d.trigger(F,I.coa);let t=u(F);await D([t]);let n=+u(`emblemsDownloadSize`).value,r=await de(t,n,e!==`svg`),i=document.createElement(`a`);i.download=`${c(`Emblem ${I.fullName||I.name}`)}.${e}`,e===`svg`?Ve(r,i):He(e,r,i,n),q(`emblemDownloadControl`)}function Ve(e,t){t.href=e,t.click()}function He(e,t,n,r){let i=document.createElement(`canvas`),a=i.getContext(`2d`);i.width=r,i.height=r;let o=new Image;o.src=t,o.onload=()=>{e===`jpeg`&&(a.fillStyle=`#fff`,a.fillRect(0,0,i.width,i.height)),a.drawImage(o,0,0,i.width,i.height);let t=i.toDataURL(`image/${e}`,.92);n.href=t,n.click(),window.setTimeout(()=>window.URL.revokeObjectURL(t),6e3)}}function Y(e,t){return new XMLSerializer().serializeToString(ue(e,t))}async function Ue(){let e=c(`Emblems Gallery`),t=pack.states.filter(e=>e.i&&!e.removed&&e.coa),r=pack.provinces.filter(e=>e.i&&!e.removed&&e.coa),i=pack.burgs.filter(e=>e.i&&!e.removed&&e.coa);await We(t,r,i),await D([...document.querySelectorAll(`#coas > svg`)]);let o=`<a href="javascript:history.back()">${n(`Go Back`)}</a>`,s=`<div><h2>${n(`States`)}</h2>${t.map(e=>{let t=u(`stateCOA${e.i}`);return`<figure id="state_${e.i}"><a href="#provinces_${e.i}"><figcaption>${e.fullName}</figcaption>${Y(t,200)}</a></figure>`}).join(``)}</div>`,d=t.map(e=>{let t=r.filter(t=>t.state===e.i),n=t.map(e=>{let t=u(`provinceCOA${e.i}`);return`<figure id="province_${e.i}"><a href="#burgs_${e.i}"><figcaption>${e.fullName}</figcaption>${Y(t,200)}</a></figure>`}).join(``);return t.length?`<div id="provinces_${e.i}">${o}<h2>${e.fullName} provinces</h2>${n}</div>`:``}).join(``),f=t.map(e=>{let t=i.filter(t=>t.state===e.i),n=r.filter(t=>t.state===e.i).map(e=>{let n=t.filter(t=>pack.cells.province[t.cell]===e.i),r=n.map(e=>{let t=a(`burgCOA${e.i}`);return t?`<figure id="burg_${e.i}"><figcaption>${e.name}</figcaption>${Y(t,200)}</figure>`:``}).join(``);return n.length?`<div id="burgs_${e.i}">${o}<h2>${e.fullName} burgs</h2>${r}</div>`:``}).join(``),s=t.filter(e=>!pack.cells.province[e.cell]).map(e=>{let t=a(`burgCOA${e.i}`);return t?`<figure id="burg_${e.i}"><figcaption>${e.name}</figcaption>${Y(t,200)}</figure>`:``}).join(``);return s&&(n+=`<div><h2>${e.fullName} burgs under direct control</h2>${s}</div>`),n}).join(``),p=i.filter(e=>!e.state),ee=p.length?`<div><h2>${n(`Independent burgs`)}</h2>${p.map(e=>{let t=a(`burgCOA${e.i}`);return t?`<figure id="burg_${e.i}"><figcaption>${e.name}</figcaption>${Y(t,200)}</figure>`:``}).join(``)}</div>`:``,m=`<a href="https://azgaar.github.io/Fantasy-Map-Generator" target="_blank">${n(`Azgaar's Fantasy Map Generator`)}</a>`,h=`<a target="_blank" href="https://github.com/Azgaar/Armoria#license">${n(`the license`)}</a>`,g=`<!DOCTYPE html>
    <html>
      <head>
        <title>${n(`{{map}} Emblems Gallery`,{map:options.map.lore.name})}</title>
      </head>
      <style type="text/css">
        body { margin: 0; padding: 1em; font-family: serif; }
        h1, h2 { font-family: "Forum"; }
        div { width: 100%; max-width: 1018px; margin: 0 auto; border-bottom: 1px solid #ddd; }
        figure { margin: 0 0 2em; display: inline-block; transition: 0.2s; }
        figure:hover { background-color: #f6f6f6; }
        figcaption { text-align: center; margin: 0.4em 0; width: 200px; font-family: "Overlock SC"; }
        address { width: 100%; max-width: 1018px; margin: 0 auto; }
        a { color: black; }
        figure > a { text-decoration: none; }
        div > a { float: right; font-family: var(--monospace); margin-top: 0.8em; }
      </style>
      <link href="https://fonts.googleapis.com/css2?family=Forum&family=Overlock+SC" rel="stylesheet" />
      <body>
        <div><h1>${n(`{{map}} Emblems Gallery`,{map:options.map.lore.name})}</h1></div>
        ${s} ${d} ${f} ${ee}
        <address>${n(`Generated by {{- generator}}. The tool is free, but images may be copyrighted, see {{- license}}`,{generator:m,license:h})}</address>
      </body>
    </html>`;l(g,`${e}.html`,`text/plain`)}async function We(e,t,r){S(n(`Preparing for download...`),!0,`warn`);let i=e.map(e=>d.trigger(`stateCOA${e.i}`,e.coa)),a=t.map(e=>d.trigger(`provinceCOA${e.i}`,e.coa)),o=r.map(e=>d.trigger(`burgCOA${e.i}`,e.coa)),s=[...i,...a,...o];await Promise.allSettled(s),oe()}function Ge(t){let n=Number(this.getAttribute(`x`))-t.x,r=Number(this.getAttribute(`y`))-t.y;t.on(`drag`,function(e){this.setAttribute(`x`,String(n+e.x)),this.setAttribute(`y`,String(r+e.y))}),t.on(`end`,function(t){let a=Number(this.parentNode.getAttribute(`font-size`))*Number.parseFloat(this.getAttribute(`width`)||`1`)/2,o=Ke(this.parentElement?.id),s=Number(this.dataset.i),c=o&&Number.isInteger(s)?X(o,s):void 0;if(!o||!c)return;let{width:l,height:u}=options.map.graph,d=i(e(n+t.x+a,2),0,l),p=i(e(r+t.y+a,2),0,u);x.place(`${o}:${s}`,d,p,c.coa.size??null),f(o,s)})}function Ke(e){if(e===`burgEmblems`)return`burg`;if(e===`provinceEmblems`)return`province`;if(e===`stateEmblems`)return`state`}function X(e,t){let n=e===`burg`?pack.burgs[t]:e===`province`?pack.provinces[t]:pack.states[t];return n?.coa?n:void 0}function Z(e,t){let n=X(e,t);return n?(P=e,F=`${e}COA${t}`,I=n,!0):!1}function Q(){s(`#emblems`).selectAll(`use`).call(re().on(`drag`,Ge)).classed(`draggable`,!0)}function qe(){L?.(),L=void 0,s(`#emblems`).selectAll(`use`).on(`.drag`,null).attr(`class`,null),$(`#emblemEditor`).dialog(`destroy`),u(`emblemEditor`).remove()}var Je={open:B,openDefault:be};export{Je as EmblemsEditor};