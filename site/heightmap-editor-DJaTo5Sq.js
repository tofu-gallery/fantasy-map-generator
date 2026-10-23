import{C as e,b as t,n,r,x as i}from"./index-CuUJKJN8.js";import{$t as a,B as o,H as s,Jt as c,Mt as l,Pt as u,R as d,Ut as f,Xt as p,Yt as m,Zt as h,b as g,bt as ee,dn as _,f as v,gn as y,j as b,m as x,nn as S,p as te,pt as ne,rn as re,tn as ie,vn as ae,y as oe,z as C}from"./utils-394NS37_.js";import{t as w}from"./layers-CpGI7aJd.js";import{t as se}from"./mean-4Awewi9R.js";import{t as ce}from"./drag-C_reJWZK.js";import{n as le}from"./sin-DYm9hqTl.js";import{m as ue,y as de}from"./unitUtils-B91DAWIJ.js";import{i as T,r as fe,t as pe}from"./tooltips-7PimaK30.js";import{i as E}from"./viewport-C0deAIKO.js";import{t as D}from"./state-B2hBYDzv.js";import{t as me}from"./controllers-lOfLnkBO.js";import{c as he,i as O,n as k}from"./dialog-helpers-kMHr89OS.js";import{a as ge,r as _e,t as ve}from"./generation-pipeline-DKnB7nUC.js";import{t as ye}from"./view-mode-C_KDkpw9.js";import{t as be}from"./viewbox-events-DpWtTLWO.js";import{t as xe}from"./map-restoration-DNmGwu8D.js";import{a as Se,o as Ce}from"./app-C3meBrse.js";import{t as we}from"./brushUtils-B5xtY9tr.js";var A=18,Te=.96422,Ee=1,De=.82521,Oe=4/29,j=6/29,ke=3*j*j,Ae=j*j*j;function je(e){if(e instanceof M)return new M(e.l,e.a,e.b,e.opacity);if(e instanceof L)return Fe(e);e instanceof h||(e=ie(e));var t=I(e.r),n=I(e.g),r=I(e.b),i=N((.2225045*t+.7168786*n+.0606169*r)/Ee),a,o;return t===n&&n===r?a=o=i:(a=N((.4360747*t+.3850649*n+.1430804*r)/Te),o=N((.0139322*t+.0971045*n+.7141733*r)/De)),new M(116*i-16,500*(a-i),200*(i-o),e.opacity)}function Me(e,t,n,r){return arguments.length===1?je(e):new M(e,t,n,r??1)}function M(e,t,n,r){this.l=+e,this.a=+t,this.b=+n,this.opacity=+r}S(M,Me,re(p,{brighter(e){return new M(this.l+A*(e??1),this.a,this.b,this.opacity)},darker(e){return new M(this.l-A*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,n=isNaN(this.b)?e:e-this.b/200;return t=Te*P(t),e=Ee*P(e),n=De*P(n),new h(F(3.1338561*t-1.6168667*e-.4906146*n),F(-.9787684*t+1.9161415*e+.033454*n),F(.0719453*t-.2289914*e+1.4052427*n),this.opacity)}}));function N(e){return e>Ae?e**(1/3):e/ke+Oe}function P(e){return e>j?e*e*e:ke*(e-Oe)}function F(e){return 255*(e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055)}function I(e){return(e/=255)<=.04045?e/12.92:((e+.055)/1.055)**2.4}function Ne(e){if(e instanceof L)return new L(e.h,e.c,e.l,e.opacity);if(e instanceof M||(e=je(e)),e.a===0&&e.b===0)return new L(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*c;return new L(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function Pe(e,t,n,r){return arguments.length===1?Ne(e):new L(e,t,n,r??1)}function L(e,t,n,r){this.h=+e,this.c=+t,this.l=+n,this.opacity=+r}function Fe(e){if(isNaN(e.h))return new M(e.l,0,0,e.opacity);var t=e.h*m;return new M(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}S(L,Pe,re(p,{brighter(e){return new L(this.h,this.c,this.l+A*(e??1),this.opacity)},darker(e){return new L(this.h,this.c,this.l-A*(e??1),this.opacity)},rgb(){return Fe(this).rgb()}}));var Ie=[{stroke:`#888`,width:.4,opacity:.8},{stroke:`#444`,width:.5,opacity:.8},{stroke:`#3d9df0`,width:.8,opacity:1},{stroke:`#1a6fd6`,width:1,opacity:1},{stroke:`#0a49ad`,width:1.2,opacity:1}],Le=2,Re=14,ze=.5;function Be(t){let{cells:n,points:r,spacing:a}=grid,s=t?Grid.findDeepDepressionLakes(n,options.generation.lakeElevationLimit):[],c=Uint8Array.from(n.h);for(let e of s)for(let t of e)c[t]=19;let{target:l,flux:u,depth:f,river:p}=We({...n,h:c},Ve(c)),m=a/Re,h=a*.25,g=e(a*.35,2),ee=Ie.map(()=>[]),_=[],v=e=>{let t=Math.floor(Math.log2(u[e]/30)/2)+Le;return i(t,0,p[e]?Ie.length-1:1)},y=t=>e(Math.min(.5+t/30,1),2);for(let t of n.i){if(f[t]>=ze&&_.push(`<polygon points="${Grid.getPolygon(t)}" fill-opacity="${y(f[t])}"/>`),l[t]===-1)continue;let[n,i]=r[t],[a,o]=r[l[t]],s=a-n,c=o-i,u=Math.hypot(s,c)||1,d=s/u,p=c/u,[m,g]=[n+d*u*.15,i+p*u*.15],[b,x]=[n+d*u*.7,i+p*u*.7],[S,te]=[b-h*(d*.87-p*.5),x-h*(p*.87+d*.5)],[ne,re]=[b-h*(d*.87+p*.5),x-h*(p*.87-d*.5)];ee[v(t)].push(`M${e(m,1)},${e(g,1)}L${e(b,1)},${e(x,1)}M${e(S,1)},${e(te,1)}L${e(b,1)},${e(x,1)}L${e(ne,1)},${e(re,1)}`)}let b=ee.map((t,n)=>{if(!t.length)return``;let{stroke:r,width:i,opacity:a}=Ie[n],o=`stroke="${r}" stroke-width="${e(i*m,2)}" opacity="${a}"`;return`<path d="${t.join(``)}" ${o}/>`}),x=s.flat().map(e=>`<polygon points="${Grid.getPolygon(e)}"/>`),S=()=>{let e=o(`drainage`);if(e)return e;let t=d(`g`,`drainage`,{"pointer-events":`none`});return C(`debug`).append(t),t};S().innerHTML=`
    <pattern id="drainageHatch" width="${g}" height="${g}" patternUnits="userSpaceOnUse">
      <path d="M0,${g}L${g},0" stroke="#333" stroke-width="${e(.5*m,2)}"/>
    </pattern>
    <pattern id="drainageLakeHatch" width="${g}" height="${g}" patternUnits="userSpaceOnUse">
      <path d="M0,0L${g},${g}" stroke="#1a5fc8" stroke-width="${e(.8*m,2)}"/>
    </pattern>
    <g fill="url(#drainageHatch)" stroke="#000" stroke-width="${e(.3*m,2)}">${_.join(``)}</g>
    <g fill="url(#drainageLakeHatch)" stroke="#1a5fc8" stroke-width="${e(.5*m,2)}">${x.join(``)}</g>
    <g fill="none">${b.join(``)}</g>`}var Ve=e=>Precipitation.compute(e,Temperature.compute(e));function He(){o(`drainage`)?.remove()}var Ue=1e-4;function We(e,t){let{c:n,b:r,h:i}=e,a=e.i.length,o=new Float64Array(a),s=new Uint8Array(a),c=new FlatQueue;for(let e=0;e<a;e++)i[e]>=20&&!r[e]||(o[e]=i[e],s[e]=1,c.push(e,i[e]));for(;c.length;){let e=c.pop();for(let t of n[e])s[t]||(s[t]=1,o[t]=Math.max(i[t],o[e]+Ue),c.push(t,o[t]))}let l=new Int32Array(a).fill(-1),u=new Float32Array(a),d=new Float32Array(a),f=[];for(let e=0;e<a;e++)if(!(i[e]<20||r[e])){f.push(e),d[e]=o[e]-i[e];for(let t of n[e])o[t]<o[l[e]===-1?e:l[e]]&&(l[e]=t)}let p=(Grid.getCellsDesired()/1e4)**.25;f.sort((e,t)=>o[t]-o[e]);for(let e of f)u[e]=Math.floor(u[e]+t[e]/p),l[e]!==-1&&(u[l[e]]+=u[e]);let m=new Uint8Array(a);for(let e of f)u[e]<30||l[e]===-1||(i[l[e]]>=20&&(m[e]=1),m[l[e]]=1);return{target:l,flux:u,depth:d,river:m}}var Ge=u(l),R=`heightmapEditor`,Ke=[`renderOcean`,`showDrainage`,`allowErosion`],qe=100,z,B=null,Je=null,V=null;function Ye(e){z=D.get(R,`filters`,()=>({cellType:`all`})),[`all`,`land`,`water`].includes(z.cellType)||(z.cellType=`all`),D.set(R,`filters`,z);let{mode:t,tool:n}=e||{};HeightmapGenerator.clearData(),lt(),_(`#viewbox`).selectAll(`#heights`).remove(),_(`#viewbox`).insert(`g`,`#terrs`).attr(`id`,`heights`),t?U(t,n):tt(n)}$e();function Xe(){O(`templateEditor`);let e=`<div id="templateEditor" class="dialog stable">
      <div id="templateTop">
        <i>${r(`Select template`)}: </i>
        <select id="templateSelect" style="width: 16em" data-prev="templateCustom" data-tip="${r(`Select base template`)}">
          <option value="custom" selected>${r(`Custom`)}</option>
          <option value="volcano">${r(`Volcano`)}</option>
          <option value="highIsland">${r(`High Island`)}</option>
          <option value="lowIsland">${r(`Low Island`)}</option>
          <option value="continents">${r(`Continents`)}</option>
          <option value="archipelago">${r(`Archipelago`)}</option>
          <option value="atoll">${r(`Atoll`)}</option>
          <option value="mediterranean">${r(`Mediterranean`)}</option>
          <option value="peninsula">${r(`Peninsula`)}</option>
          <option value="pangea">${r(`Pangea`)}</option>
          <option value="isthmus">${r(`Isthmus`)}</option>
          <option value="shattered">${r(`Shattered`)}</option>
          <option value="taklamakan">${r(`Taklamakan`)}</option>
          <option value="oldWorld">${r(`Old World`)}</option>
          <option value="fractious">${r(`Fractious`)}</option>
        </select>
      </div>
      <div id="templateTools">
        <button data-type="Hill" data-tip="${r(`Hill: small blob`)}">H</button>
        <button data-type="Pit" data-tip="${r(`Pit: round depression`)}">P</button>
        <button data-type="Range" data-tip="${r(`Range: elongated elevation`)}">R</button>
        <button data-type="Trough" data-tip="${r(`Trough: elongated depression`)}">T</button>
        <button data-type="Strait" data-tip="${r(`Strait: centered vertical or horizontal depression`)}">S</button>
        <button data-type="Mask" data-tip="${r(`Mask: lower cells near edges or in map center`)}">M</button>
        <button data-type="Invert" data-tip="${r(`Invert heightmap along the axes`)}">I</button>
        <button data-type="Add" data-tip="${r(`Add or subtract value from all heights in range`)}">+</button>
        <button data-type="Multiply" data-tip="${r(`Multiply all heights in range by factor`)}">*</button>
        <button
          data-type="Smooth"
          data-tip="${r(`Smooth the map replacing cell heights by an average values of its neighbors`)}"
        >
          ~
        </button>
      </div>
      <div id="templateBody" data-changed="0" class="table" style="padding: 2px 0">
        <div data-type="Hill">
          <div class="icon-check" data-tip="${r(`Click to skip the step`)}"></div>
          <div style="width: 4em">${r(`Hill`)}</div>
          <i class="icon-trash-empty pointer" data-tip="${r(`Remove`)}"></i>
          <i class="icon-resize-vertical" data-tip="${r(`Drag to reorder`)}"></i>
          <span
            >y:<input class="templateY" data-tip="${r(`Y axis position in percentage (minY-maxY or Y)`)}" value="47-53"
          /></span>
          <span
            >x:<input class="templateX" data-tip="${r(`X axis position in percentage (minX-maxX or X)`)}" value="65-75"
          /></span>
          <span
            >h:<input
              class="templateHeight"
              data-tip="${r(`Blob maximum height, use hyphen to get a random number in range`)}"
              value="90-100"
          /></span>
          <span
            >n:<input
              class="templateCount"
              data-tip="${r(`Blobs to add, use hyphen to get a random number in range`)}"
              value="1"
          /></span>
        </div>
      </div>
      <div id="templateBottom">
        <button id="templateRun" data-tip="${r(`Execute the template`)}" class="icon-play-circled2"></button>
        <button id="templateUndo" data-tip="${r(`Undo the latest action`)}" class="icon-ccw" disabled></button>
        <button id="templateRedo" data-tip="${r(`Redo the action`)}" class="icon-cw" disabled></button>
        <button id="templateSave" data-tip="${r(`Download the template as a text file`)}" class="icon-download"></button>
        <button id="templateLoad" data-tip="${r(`Open previously downloaded template`)}" class="icon-upload"></button>
        <button
          id="templateCA"
          data-tip="${r(`Find or share custom template on Cartography Assets portal`)}"
          class="icon-drafting-compass"
          onclick="
            openURL('https://cartographyassets.com/asset-category/specific-assets/azgaars-generator/templates')
          "
        ></button>
        <button
          id="templateTutorial"
          data-tip="${r(`Open Template Editor Tutorial`)}"
          class="icon-info"
          onclick="wiki('Heightmap-template-editor')"
        ></button>
        <label
          data-tip="${r(`Enter seed for template to generate the same heightmap each time`)}"
        >
          ${r(`Seed`)}: <input id="templateSeed" value="" type="number" min="1" max="999999999" step="1" style="width: 8em" />
        </label>
      </div>
    </div>`;C(`dialogs`).insertAdjacentHTML(`beforeend`,e);let t=C(`templateBody`);$(`#templateBody`).sortable({items:`> div`,handle:`.icon-resize-vertical`,containment:`#templateBody`,axis:`y`}),t.addEventListener(`click`,e=>{let n=e.target;n.classList.contains(`icon-check`)?(n.classList.remove(`icon-check`),n.classList.add(`icon-check-empty`),n.parentElement.style.opacity=`0.5`,t.dataset.changed=`1`):n.classList.contains(`icon-check-empty`)?(n.classList.add(`icon-check`),n.classList.remove(`icon-check-empty`),n.parentElement.style.opacity=`1`):n.classList.contains(`icon-trash-empty`)&&n.parentElement.remove()}),C(`templateEditor`).addEventListener(`keypress`,e=>{e.key===`Enter`&&(e.preventDefault(),It())}),C(`templateTools`).addEventListener(`click`,At),C(`templateSelect`).addEventListener(`change`,Pt),C(`templateRun`).addEventListener(`click`,It),C(`templateUndo`).addEventListener(`click`,()=>Z(edits.n-1)),C(`templateRedo`).addEventListener(`click`,()=>Z(edits.n+1)),C(`templateSave`).addEventListener(`click`,Lt),C(`templateLoad`).addEventListener(`click`,Rt)}function Ze(){O(`imageConverter`);let e=`<div id="imageConverter" class="dialog stable">
      <div id="convertImageButtons">
        <button id="convertImageLoad" data-tip="${r(`Load image to convert`)}" class="icon-upload"></button>
        <button
          id="convertAutoLum"
          data-tip="${r(`Auto-assign colors based on liminosity (good for monochrome images)`)}"
          class="icon-adjust"
        ></button>
        <button
          id="convertAutoHue"
          data-tip="${r(`Auto-assign colors based on hue (good for colored images)`)}"
          class="icon-paint-roller"
        ></button>
        <button
          id="convertAutoFMG"
          data-tip="${r(`Auto-assign colors using generator scheme (for exported colored heightmaps)`)}"
          class="icon-layer-group"
        ></button>
        <button id="convertColorsButton" data-tip="${r(`Set maximum number of colors`)}" class="icon-signal"></button>
        <input id="convertColors" value="100" style="display: none" />
        <button
          id="convertCancel"
          data-tip="${r(`Cancel the conversion. Previous heightmap will be restored`)}"
          class="icon-cancel"
        ></button>
      </div>
      <div data-tip="${r(`Set opacity of the loaded image`)}" style="padding-top: 0.4em">
        <i>${r(`Overlay opacity`)}:</i><br />
        <input id="convertOverlay" type="range" min="0" max="1" step=".01" value="0" style="width: 12.6em" />
        <input id="convertOverlayNumber" type="number" min="0" max="1" step=".01" value="0" style="width: 4.2em" />
      </div>
      <div data-tip="${r(`Select a color to assign a height value`)}" id="colorsSelect" style="display: none">
        <i>${r(`Set height`)}: </i>
        <span id="colorsSelectValue"></span>
        <span>(<span id="colorsSelectFriendly">0</span>)</span><br />
        <div id="imageConverterPalette"></div>
      </div>
      <div data-tip="${r(`Select a color to re-assign the height value`)}" id="colorsAssigned" style="display: none">
        <i>${r(`Assigned colors`)} (<span id="colorsAssignedNumber"></span>):</i>
        <div id="colorsAssignedContainer" class="colorsContainer"></div>
      </div>
      <div data-tip="${r(`Select a color to assign a height value`)}" id="colorsUnassigned" style="display: none">
        <i>${r(`Unassigned colors`)} (<span id="colorsUnassignedNumber"></span>):</i>
        <div id="colorsUnassignedContainer" class="colorsContainer"></div>
      </div>
      <button
        id="convertComplete"
        data-tip="${n(r(`Complete the conversion`),r(`All unassigned colors will be considered as ocean`))}"
        style="margin: 0.4em 0"
        class="glow"
      >
        ${r(`Complete the conversion`)}
      </button>
    </div>`;C(`dialogs`).insertAdjacentHTML(`beforeend`,e),_(`#imageConverterPalette`).selectAll(`div`).data(y(101)).enter().append(`div`).attr(`data-color`,e=>e).style(`background-color`,e=>Ge(1-(e<20?e-5:e)/100)).style(`width`,e=>e<40||e>68?`.2em`:`.1em`).on(`touchmove mousemove`,Ht).on(`click`,qt),C(`convertImageLoad`).addEventListener(`click`,Bt),C(`convertAutoLum`).addEventListener(`click`,()=>Jt(`lum`)),C(`convertAutoHue`).addEventListener(`click`,()=>Jt(`hue`)),C(`convertAutoFMG`).addEventListener(`click`,()=>Jt(`scheme`)),C(`convertColorsButton`).addEventListener(`click`,Yt),C(`convertComplete`).addEventListener(`click`,Zt),C(`convertCancel`).addEventListener(`click`,Qt),C(`convertOverlay`).addEventListener(`input`,function(){Xt(+this.value)}),C(`convertOverlayNumber`).addEventListener(`input`,function(){Xt(+this.value)})}var Qe=[];function $e(){C(`paintBrushes`).addEventListener(`click`,ut),C(`applyTemplate`).addEventListener(`click`,Ot),C(`convertImage`).addEventListener(`click`,Vt),C(`heightmapPreview`).addEventListener(`click`,tn),C(`heightmap3DView`).addEventListener(`click`,ye),C(`finalizeHeightmap`).addEventListener(`click`,rt);for(let e of Ke)C(e).addEventListener(`change`,function(){Options.set(t=>t.app.heightmapEditor[e]=this.checked),e===`renderOcean`&&q(),e!==`renderOcean`&&et()})}function et(){options.app.heightmapEditor.showDrainage?H():He()}function H(){if(customization!==1||!options.app.heightmapEditor.showDrainage)return;let e=C(`heightmapEditMode`).innerHTML;Be(e!==`keep`&&options.app.heightmapEditor.allowErosion)}function tt(e){alertMessage.innerHTML=`${r(`Heightmap is a core element on which all other data (rivers, burgs, states etc) is based. So the best edit approach is to erase the secondary data and let the system automatically regenerate it on edit completion.`)}
    <p>${r(`Erase mode also allows you Convert an Image into a heightmap or use Template Editor.`)}</p>
    <p>${r(`You can keep the data, but you won't be able to change the coastline.`)}</p>
    <p>${r(`Try risk mode to change the coastline and keep the data. The data will be restored as much as possible, but it can cause unpredictable errors.`)}</p>
    <p>${r(`Please {{- save}} before editing the heightmap!`,{save:`<span class="pseudoLink" onclick="window.Services.Save.toMachine()">${r(`save the map`)}</span>`})}</p>
    <p style="margin-bottom: 0">${r(`Check out {{- wiki}} for guidance.`,{wiki:b(`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Heightmap-customization`,r(`wiki`))})}</p>`,$(`#alert`).dialog({resizable:!1,title:r(`Edit Heightmap`),width:`28em`,buttons:{[r(`Erase`)]:()=>U(`erase`,e),[r(`Keep`)]:()=>U(`keep`,e),[r(`Risk`)]:()=>U(`risk`,e),[r(`Cancel`)]:function(){$(this).dialog(`close`)}}})}function U(e,t){Qe=w.state.active,w.set([]),customization=1,k(),T(r(`Heightmap edit mode is active. Click on “Exit Customization” to finalize the heightmap`),!0),C(`options`).querySelectorAll(`.tabcontent`).forEach(e=>{e.style.display=`none`}),C(`options`).querySelector(`.tab > .active`).classList.remove(`active`),C(`customizationMenu`).style.display=`block`,C(`toolsTab`).classList.add(`active`),C(`heightmapEditMode`).innerHTML=e;for(let e of Ke)C(e).checked=options.app.heightmapEditor[e];e===`erase`?(_e(),z.cellType=`all`):e===`keep`?(w.get(`landmass`).getEl().replaceChildren(),z.cellType=`land`):e===`risk`&&(Je=grid.cells.h.slice(),_(`#deftemp`).selectAll(`#land, #water`).selectAll(`path`).remove(),_(`#deftemp`).select(`#featurePaths`).selectAll(`path`).remove(),_(`#viewbox`).selectAll(`#coastline use, #lakes path, #oceanLayers path`).remove(),z.cellType=`all`);let n=o(`cellTypeFilter`);n&&(n.value=z.cellType),D.set(R,`filters`,z),C(`applyTemplate`).style.display=e===`erase`?`inline-block`:`none`,C(`convertImage`).style.display=e===`erase`?`inline-block`:`none`,C(`allowErosionBox`).style.display=e===`keep`?`none`:`inline-block`;let i=C(`exitCustomization`);if(sessionStorage.getItem(`noExitButtonAnimation`))i.style.display=`block`;else{sessionStorage.setItem(`noExitButtonAnimation`,`true`),i.style.opacity=`0`;let e=12*C(`uiSize`).value*11;i.style.right=`${(E.width-e)/2}px`,i.style.bottom=`${E.height/2}px`,i.style.transform=`scale(2)`,i.style.display=`block`,_(`#exitCustomization`).transition().duration(1e3).style(`opacity`,1).transition().duration(2e3).ease(le).style(`right`,`10px`).style(`bottom`,`10px`).style(`transform`,`scale(1)`)}let a=C(`layersPreset`);a.value=`heightmap`,a.disabled=!0,q(),H(),_(`#viewbox`).on(`touchmove mousemove`,nt),_(`#map`).on(`dblclick.zoom`,null),t===`templateEditor`?Ot():t===`imageConverter`?Vt():ut()}function nt(t){let[n,r]=s(t,this),i=Grid.findCell(n,r);C(`heightmapInfoX`).innerHTML=String(e(n)),C(`heightmapInfoY`).innerHTML=String(e(r)),C(`heightmapInfoCell`).innerHTML=String(i),C(`heightmapInfoHeight`).innerHTML=`${grid.cells.h[i]} (${W(grid.cells.h[i])})`,C(`tooltip`).dataset.main&&fe();let a=o(`brushesButtons`)?.querySelector(`button.pressed`);a&&(a.id===`brushLine`?_(`#debug`).select(`line`).attr(`x2`,n).attr(`y2`,r):a.id===`brushFill`?Ce():Se(n,r,C(`heightmapBrushRadius`).valueAsNumber))}function W(t){return`${e(de(t)*ue())} ${options.map.units.height.unit}`}async function rt(){if(_(`#viewbox`).select(`#heights`).selectAll(`*`).size()<200){T(r(`Insufficient land area. There should be at least 200 land cells!`),!1,`error`);return}if(o(`imageConverter`)){T(r(`Please exit the Image Conversion mode first`),!1,`error`);return}Reflect.deleteProperty(window,`edits`),Y(!0,!0),HeightmapGenerator.clearData(),customization=0,C(`customizationMenu`).style.display=`none`,C(`options`).querySelector(`.tab > button.active`).id===`toolsTab`&&(C(`toolsContent`).style.display=`block`),C(`layersPreset`).disabled=!1,C(`exitCustomization`).style.display=`none`,k(),be(),pe(),resetZoom(),o(`preview`)?.remove(),o(`canvas3d`)&&me.View3d.enterStandard();let e=C(`heightmapEditMode`).innerHTML;try{e===`erase`?await it():e===`keep`?at():e===`risk`&&ot()}catch(t){ERROR&&console.error(t);let i=r(`Failed to apply the edited heightmap: {{error}}`,{error:t.message});T(e===`risk`?n(i,r(`The map is unchanged`)):i,!1,`error`,6e3)}_(`#viewbox`).selectAll(`#heights`).remove(),He(),w.draw(`ocean`,`landmass`,`lakes`,`coastline`),w.set(Qe)}async function it(){pack.cultures=[],pack.burgs=[],pack.states=[],pack.provinces=[],pack.religions=[],pack.relief=[];let e=options.app.heightmapEditor.allowErosion;await ve.run({erosion:e})}function at(){for(let e of pack.cells.i)pack.cells.h[e]=grid.cells.h[pack.cells.g[e]]}function ot(){let e=grid.cells.h;grid.cells.h=Je,xe.applyHeights(e,{erosion:options.app.heightmapEditor.allowErosion}),he(),_(`#ice`).selectAll(`*`).remove()}function G(){let e=ee(edits),t=grid.cells.h.reduce((t,n,r)=>n===e[r]?t:t+1,0);if(T(r(`Cells changed: {{cells}}`,{cells:t})),!t)return;let n=o(`cellTypeFilter`)?.value??z.cellType;if(n===`land`)for(let t of grid.cells.i)(e[t]<20||grid.cells.h[t]<20)&&(grid.cells.h[t]=e[t]);if(n===`water`)for(let t of grid.cells.i)(e[t]>=20||grid.cells.h[t]>=20)&&(grid.cells.h[t]=e[t]);q(),X()}var K=e=>g.getColor(e);function q(){let e=Array.from(grid.cells.i),t=options.app.heightmapEditor.renderOcean?e:e.filter(e=>grid.cells.h[e]>=20);_(`#viewbox`).select(`#heights`).selectAll(`polygon`).data(t).join(`polygon`).attr(`points`,e=>String(Grid.getPolygon(e))).attr(`id`,e=>`cell${e}`).attr(`fill`,e=>K(grid.cells.h[e]))}function J(e){let t=options.app.heightmapEditor.renderOcean;e.forEach(e=>{let n=_(`#viewbox`).select(`#heights`).select(`#cell${e}`);!t&&grid.cells.h[e]<20?n.remove():(n.size()||(n=_(`#viewbox`).select(`#heights`).append(`polygon`).attr(`points`,String(Grid.getPolygon(e))).attr(`id`,`cell${e}`)),n.attr(`fill`,K(grid.cells.h[e])))})}function st(){let t=grid.cells.h.reduce((e,t)=>t>=20?e+1:e,0);C(`landmassCounter`).textContent=`${t} (${e(t/grid.cells.i.length*100)}%)`,C(`landmassAverage`).textContent=String(e(se(grid.cells.h)??0))}function Y(e,t){let n=(n,r)=>{let i=o(n);i&&(i.disabled=e);let a=o(r);a&&(a.disabled=t)};n(`undo`,`redo`),n(`templateUndo`,`templateRedo`)}function X(e){let t=edits.n;if(edits=Object.assign(edits.slice(0,t),{n:t+1}),edits[t]=grid.cells.h.slice(),edits.length>qe){let e=edits.length-qe;edits.splice(0,e),edits.n-=e}Y(edits.n<=1,!0),e||(st(),ct())}function ct(){o(`preview`)&&nn(),o(`canvas3d`)&&me.View3d.redraw(),H()}function Z(e){edits.n=e,Y(edits.n<=1,edits.n>=edits.length),edits[edits.n-1]!==void 0&&(grid.cells.h=edits[edits.n-1].slice(),q(),st(),ct())}function lt(){window.edits=Object.assign([],{n:0}),Y(!0,!0),X()}function ut(){o(`brushesPanel`)||(dt(),$(`#brushesPanel`).dialog({title:r(`Paint Brushes`),resizable:!1,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},close:ft}))}function dt(){O(`brushesPanel`);let e=`<div id="brushesPanel" class="dialog stable">
    <div id="brushesButtons" style="display: inline-block">
      <button id="brushRaise" data-tip="${r(`Raise brush: increase height of cells in radius by Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,39 h60 M50,85 v-35 l-12,8 m12,-8 l12,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushElevate" data-tip="${r(`Elevate brush: drag to gradually increase height of cells in radius by Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,50 q30,-35 60,0 M50,85 v-35 l-12,8 m12,-8 l12,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushLower" data-tip="${r(`Lower brush: drag to decrease height of cells in radius by Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="M50,30 v35 l-12,-8 m12,8 l12,-8 M20,78 h60" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushDepress" data-tip="${r(`Depress brush: drag to gradually decrease height of cells in radius by Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="M50,30 v35 l-12,-8 m12,8 l12,-8 M20,63 q30,35 60,0" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushAlign" data-tip="${r(`Align brush: drag to set height of cells in radius to height of the cell at mousepoint`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m20,50 h56 m0,20 h-56" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushSmooth" data-tip="${r(`Smooth brush: drag to level height of cells in radius to height of adjacent cells`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m15,60 q15,-15 30,0 q15,15 35,0" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushDisrupt" data-tip="${r(`Disrupt brush: drag to randomize height of cells in radius based on Power value`)}">
        <svg viewBox="15 15 70 70" height="1em" width="1.6em">
          <path d="m15,63 l15,-13 15,20 15,-20 15,19 15,-14" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushFill" data-tip="${r(`Fill: click enclosed water or same-height land area to create a cone blob`)}">
        <svg viewBox="20 10 60 60" height="1em" width="1.6em">
          <path d="M30,70 h40 M30,70 q0,-20 20,-20 q20,0 20,20" fill="none" stroke="#000" stroke-width="5" />
          <path d="M50,20 v25 M50,20 l-10,8 M50,20 l10,8" fill="none" stroke="#000" stroke-width="5" />
        </svg>
      </button>
      <button id="brushLine" data-tip="${r(`Line: select two points to change heights along the line`)}">
        <svg viewBox="0 -5 100 100" height="1em" width="1.6em">
          <path d="M0 90 L100 10" fill="none" stroke="#000" stroke-width="7"></path>
        </svg>
      </button>
    </div>
    <div id="brushesSliders" style="display: none">
      <div data-tip="${n(r(`Change brush size`),r(`Shortcut: + to increase; – to decrease`))}">
        <slider-input id="heightmapBrushRadius" data-brush-size min="1" max="100" value="25">
          <div style="width: 3.5em">${r(`Radius`)}:</div>
        </slider-input>
      </div>
      <div data-tip="${r(`Change brush power`)}">
        <slider-input id="heightmapBrushPower" data-brush-size min="1" max="10" value="5">
          <div style="width: 3.5em">${r(`Power`)}:</div>
        </slider-input>
      </div>
    </div>
    <div id="lineSlider" style="display: none">
      <div data-tip="${n(r(`Change tool power`),r(`Shortcut: + to increase; – to decrease`))}">
        <slider-input id="heightmapLinePower" data-brush-size min="-100" max="100" value="30">
          <div style="width: 5.5em">${r(`Power`)}:</div>
        </slider-input>
      </div>
      <div data-tip="${r(`Change line randomness. Zero makes the line as straight as possible`)}">
        <slider-input id="heightmapLineRandomness" min="0" max="100" value="30">
          <div style="width: 5.5em">${r(`Randomness`)}:</div>
        </slider-input>
      </div>
    </div>
    <div data-tip="${r(`Restrict brush to specific cell types`)}" style="margin-bottom: 0.6em">
      <label for="cellTypeFilter"><i>${r(`Cells to change`)}:</i></label>
      <select id="cellTypeFilter">
        <option value="all" ${z.cellType===`all`?`selected`:``}>${r(`all cells`)}</option>
        <option value="land" ${z.cellType===`land`?`selected`:``}>${r(`only land cells`)}</option>
        <option value="water" ${z.cellType===`water`?`selected`:``}>${r(`only water cells`)}</option>
      </select>
    </div>
    <div id="modifyButtons">
      <button id="undo" data-tip="${r(`Undo the latest action (Ctrl + Z)`)}" class="icon-ccw" disabled></button>
      <button id="redo" data-tip="${r(`Redo the action (Ctrl + Y)`)}" class="icon-cw" disabled></button>
      <button id="rescaleShow" data-tip="${r(`Show`)}" class="icon-exchange"></button>
      <button id="rescaleCondShow" data-tip="${r(`Rescaler: change height if condition is fulfilled`)}" class="icon-if"></button>
      <button id="smoothHeights" data-tip="${r(`Smooth all heights a bit`)}" class="icon-smooth"></button>
      <button id="disruptHeights" data-tip="${r(`Disrupt (randomize) heights a bit`)}" class="icon-disrupt"></button>
      <button id="brushClear" data-tip="${r(`Set height for all cells to 0 (erase the map)`)}" class="icon-eraser"></button>
    </div>
    <div id="rescaleSection" style="display: none">
      <button id="rescaleHide" data-tip="${r(`Hide`)}" class="icon-exchange"></button>
      <input id="rescaler" data-tip="${r(`Change height for all cells`)}" type="range" min="-10" max="10" step="1" value="0" />
    </div>
    <div
      id="rescaleCondSection"
      data-tip="${r(`If height is greater or equal to X and less or equal to Y, then perform an operation Z with operand V`)}"
      style="display: none"
    >
      <button id="rescaleCondHide" data-tip="${r(`Hide`)}" class="icon-if"></button>
      <label>h ≥</label>
      <input id="rescaleLower" value="20" type="number" min="0" max="100" />
      <label>≤</label>
      <input id="rescaleHigher" value="100" type="number" min="1" max="100" />
      <label>⇒</label>
      <select id="conditionSign">
        <option value="multiply" selected>×</option>
        <option value="divide">÷</option>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="exponent">^</option>
      </select>
      <input id="rescaleModifier" type="number" value="0.9" min="0" max="1.5" step="0.01" />
      <button id="rescaleExecute" data-tip="${r(`Click to perform an operation`)}" class="icon-play-circled2"></button>
    </div>
  </div>`;C(`dialogs`).insertAdjacentHTML(`beforeend`,e),pt()}function ft(){mt(),O(`brushesPanel`)}function pt(){C(`brushesButtons`).addEventListener(`click`,ht),C(`cellTypeFilter`).addEventListener(`change`,St),C(`undo`).addEventListener(`click`,()=>Z(edits.n-1)),C(`redo`).addEventListener(`click`,()=>Z(edits.n+1)),C(`rescaleShow`).addEventListener(`click`,()=>{C(`modifyButtons`).style.display=`none`,C(`rescaleSection`).style.display=`block`}),C(`rescaleHide`).addEventListener(`click`,()=>{C(`modifyButtons`).style.display=`block`,C(`rescaleSection`).style.display=`none`}),C(`rescaler`).addEventListener(`change`,e=>Ct(e.target.valueAsNumber)),C(`rescaleCondShow`).addEventListener(`click`,()=>{C(`modifyButtons`).style.display=`none`,C(`rescaleCondSection`).style.display=`block`}),C(`rescaleCondHide`).addEventListener(`click`,()=>{C(`modifyButtons`).style.display=`block`,C(`rescaleCondSection`).style.display=`none`}),C(`rescaleExecute`).addEventListener(`click`,wt),C(`smoothHeights`).addEventListener(`click`,Tt),C(`disruptHeights`).addEventListener(`click`,Et),C(`brushClear`).addEventListener(`click`,Dt)}function mt(){let e=document.querySelector(`#brushesButtons > button.pressed`);e&&e.classList.remove(`pressed`),be(),_(`#map`).on(`dblclick.zoom`,null),_(`#viewbox`).on(`touchmove mousemove`,nt),_(`#debug`).selectAll(`#brushCircle, .lineCircle`).remove(),Ce(),C(`brushesSliders`).style.display=`none`,C(`lineSlider`).style.display=`none`}function ht(e){let t=e.target.closest(`#brushesButtons > button`);if(!t)return;if(t.classList.contains(`pressed`)){mt();return}mt(),t.classList.add(`pressed`);let n=C(`heightmapBrushRadius`).parentElement;n&&(n.style.display=t.id===`brushFill`?`none`:``),t.id===`brushLine`?(C(`lineSlider`).style.display=`block`,_(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,gt)):t.id===`brushFill`?(C(`brushesSliders`).style.display=`block`,_(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,_t)):(C(`brushesSliders`).style.display=`block`,_(`#viewbox`).style(`cursor`,`crosshair`).call(ce().on(`start`,bt)))}function gt(e){let[t,n]=s(e,this),i=Grid.findCell(t,n),a=_(`#debug`).selectAll(`.lineCircle`);if(!a.size()){_(`#debug`).append(`line`).attr(`id`,`brushCircle`).attr(`x1`,t).attr(`y1`,n).attr(`x2`,t).attr(`y2`,n),_(`#debug`).append(`circle`).attr(`data-cell`,i).attr(`class`,`lineCircle`).attr(`r`,6).attr(`cx`,t).attr(`cy`,n).attr(`fill`,`yellow`).attr(`stroke`,`#333`).attr(`stroke-width`,2);return}let o=+a.attr(`data-cell`);_(`#debug`).selectAll(`*`).remove();let c=C(`heightmapLinePower`).valueAsNumber;if(c===0){T(r(`Power should not be zero`),!1,`error`);return}let l=C(`heightmapLineRandomness`).valueAsNumber/200,u=grid.cells.h,d=c>0?HeightmapGenerator.addRange.bind(HeightmapGenerator):HeightmapGenerator.addTrough.bind(HeightmapGenerator);HeightmapGenerator.setGraph(grid),d(`1`,String(Math.abs(c)),``,``,o,i,l);let f=HeightmapGenerator.getHeights(),p=C(`cellTypeFilter`).value,m=[];for(let e=0;e<u.length;e++)f[e]!==u[e]&&(p===`land`&&u[e]<20||p===`water`&&u[e]>=20||(u[e]=f[e],m.push(e)));J(m),X()}function _t(e){let[t,n]=s(e,this),i=Grid.findCell(t,n),a=grid.cells.h[i],o=a<20,c=C(`cellTypeFilter`).value;if(c===`water`){T(r(`Fill brush is not available with 'only water cells' filter`),!1,`error`);return}if(c===`land`&&o){T(r(`Land filter is active, water areas cannot be filled`),!1,`error`);return}let{selection:l,reachedBorder:u}=vt(i,o,a);if(l.length<3){T(r(`No enclosed area found to fill`),!1,`error`);return}if(o&&u){T(r(`Selected water area is open to map border and is not enclosed`),!1,`error`);return}let d=yt(l,o,a);d.length&&(J(d),G())}function vt(e,t,n){let{h:r,c:i,i:a}=grid.cells,o=new Uint8Array(a.length),s=[e],c=[],l=!1;for(;s.length;){let e=s.pop();o[e]||(o[e]=1,(t?r[e]<20:r[e]===n)&&(c.push(e),grid.cells.b[e]&&(l=!0),i[e].forEach(e=>{o[e]||s.push(e)})))}return{selection:c,reachedBorder:l}}function yt(e,t,n){let r=C(`heightmapBrushPower`).valueAsNumber*10,{h:a,c:o,i:s}=grid.cells,c=new Uint8Array(s.length),l=new Uint16Array(s.length),u=[];e.forEach(e=>{c[e]=1});let d=[],f=0;for(e.forEach(e=>{o[e].some(e=>!c[e])&&(c[e]=2,d.push(e))});f<d.length;){let e=d[f++],t=l[e]+1;o[e].forEach(e=>{c[e]===1&&(c[e]=2,l[e]=t,d.push(e))})}let p=ae(e,e=>l[e])||0,m=t?20:n;return e.forEach(e=>{let t=p?l[e]/p:1,n=Math.max(1,Math.round(r*t)),o=i(m+n,0,100);o!==a[e]&&(a[e]=o,u.push(e))}),u}function bt(e){let t=C(`heightmapBrushRadius`).valueAsNumber,[n,r]=s(e,this),i=Grid.findCell(n,r),a=we(t/2,(e,n)=>{let r=Grid.findAll(e,n,t),a=r,o=C(`cellTypeFilter`).value;o===`land`?a=r.filter(e=>grid.cells.h[e]>=20):o===`water`&&(a=r.filter(e=>grid.cells.h[e]<20)),a?.length&&xt(a,i)});a.moveTo(n,r),e.on(`drag`,e=>{let[n,r]=s(e,this);Se(n,r,t),a.moveTo(n,r)}),e.on(`end`,G)}function xt(t,n){let r=C(`heightmapBrushPower`).valueAsNumber,a=f(r,1),o=C(`cellTypeFilter`).value===`land`,s=C(`cellTypeFilter`).value===`water`,c=e=>i(e,o?20:0,s?19:100),l=grid.cells.h,u=document.querySelector(`#brushesButtons > button.pressed`).id;u===`brushRaise`?t.forEach(e=>{l[e]=!s&&l[e]<20?20:c(l[e]+r)}):u===`brushElevate`?t.forEach((e,n)=>{l[e]=c(l[e]+a(n/Math.max(t.length-1,1)))}):u===`brushLower`?t.forEach(e=>{l[e]=c(l[e]-r)}):u===`brushDepress`?t.forEach((e,n)=>{l[e]=c(l[e]-a(n/Math.max(t.length-1,1)))}):u===`brushAlign`?t.forEach(e=>{l[e]=c(l[n])}):u===`brushSmooth`?t.forEach(t=>{l[t]=e(((se(grid.cells.c[t].filter(e=>o?l[e]>=20:!s||l[e]<20).map(e=>l[e]))??0)+l[t]*(10-r)+.6)/(11-r),1)}):u===`brushDisrupt`&&t.forEach(e=>{l[e]=l[e]<15?l[e]:c(l[e]+r/1.6-Math.random()*r)}),J(t)}function St(){let e=C(`cellTypeFilter`);e.value===`land`&&C(`heightmapEditMode`).innerHTML===`keep`&&(T(r(`You cannot change the coastline in 'Keep' edit mode`),!1,`error`),e.value=`all`),z.cellType=e.value,D.set(R,`filters`,z)}function Ct(e){let n=C(`cellTypeFilter`).value===`land`,r=C(`cellTypeFilter`).value===`water`;grid.cells.h=grid.cells.h.map(i=>{if(n&&(i<20||i+e<20)||r&&i>=20)return i;let a=t(i+e);return r?Math.min(a,19):a}),G(),C(`rescaler`).value=`0`}function wt(){let e=`${C(`rescaleLower`).value}-${C(`rescaleHigher`).value}`,t=C(`conditionSign`).value,n=C(`rescaleModifier`).valueAsNumber;Number.isNaN(n)?T(r(`Operand should be a number`),!1,`error`):(t===`add`||t===`subtract`)&&!Number.isInteger(n)?T(r(`Operand should be an integer`),!1,`error`):(HeightmapGenerator.setGraph(grid),t===`multiply`?HeightmapGenerator.modify(e,0,n,0):t===`divide`?HeightmapGenerator.modify(e,0,1/n,0):t===`add`?HeightmapGenerator.modify(e,n,1,0):t===`subtract`?HeightmapGenerator.modify(e,-1*n,1,0):t===`exponent`&&HeightmapGenerator.modify(e,0,1,n),grid.cells.h=HeightmapGenerator.getHeights(),G())}function Tt(){HeightmapGenerator.setGraph(grid),HeightmapGenerator.smooth(4,1.5),grid.cells.h=HeightmapGenerator.getHeights(),G()}function Et(){grid.cells.h=grid.cells.h.map(e=>e<15?e:t(e+2.5-Math.random()*4)),G()}function Dt(){let e=C(`cellTypeFilter`).value;e===`land`?T(r(`Not allowed when 'only land cells' filter is set`),!1,`error`):e===`water`?T(r(`Not allowed when 'only water cells' filter is set`),!1,`error`):grid.cells.h.some(e=>e)?(grid.cells.h=new Uint8Array(grid.cells.i.length),_(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),X()):T(r(`Heightmap is already cleared, please do not click twice if not required`),!1,`error`)}function Ot(){o(`templateEditor`)||(Xe(),$(`#templateEditor`).dialog({title:r(`Template Editor`),minHeight:`auto`,width:`fit-content`,resizable:!1,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},close:kt}))}function kt(){$(`#templateEditor`).dialog(`destroy`),C(`templateEditor`).remove()}function At(e){let t=e.target;if(t.tagName!==`BUTTON`)return;let n=t.dataset.type;C(`templateBody`).dataset.changed=`1`,Q(n)}function Q(e,t,n,r,i){let a=C(`templateBody`);a.insertAdjacentHTML(`beforeend`,Mt(e,t,n,r,i));let o=a.querySelector(`div:last-child > span > .templateDist`);if(o&&o.addEventListener(`change`,Nt),n&&o&&o.tagName===`SELECT`){for(let e of Array.from(o.options))e.value===n&&(o.value=n);if(o.value!==n){let e=document.createElement(`option`);e.value=e.innerHTML=n,o.add(e),o.value=n}}}var jt={Hill:r(`Hill`),Pit:r(`Pit`),Range:r(`Range`),Trough:r(`Trough`),Strait:r(`Strait`),Mask:r(`Mask`),Invert:r(`Invert`),Add:r(`Add`),Multiply:r(`Multiply`),Smooth:r(`Smooth`)};function Mt(e,t,n,i,a){let o=`<i class="icon-trash-empty pointer" data-tip="${r(`Remove`)}"></i>`,s=`<div class="icon-check" data-tip="${r(`Click to skip the step`)}"></div>`,c=`<i class="icon-resize-vertical" data-tip="${r(`Drag to reorder`)}"></i>`,l=`<div data-type="${e}">${s}<div style="width:4em">${jt[e]??e}</div>${o}${c}`,u=`<span>y:
      <input class="templateY" data-tip="${r(`Placement range percentage along Y axis (minY-maxY)`)}" value=${a||`20-80`} />
    </span>`,d=`<span>x:
      <input class="templateX" data-tip="${r(`Placement range percentage along X axis (minX-maxX)`)}" value=${i||`15-85`} />
    </span>`,f=`<span>h:
      <input class="templateHeight" data-tip="${r(`Blob maximum height, use hyphen to get a random number in range`)}" value=${n||`40-50`} />
    </span>`,p=`<span>n:
      <input class="templateCount" data-tip="${r(`Blobs to add, use hyphen to get a random number in range`)}" value=${t||`1-2`} />
    </span>`;return e===`Hill`||e===`Pit`||e===`Range`||e===`Trough`?`${l}${u}${d}${f}${p}</div>`:e===`Strait`?`${l}
      <span>d:
        <select class="templateDist" data-tip="${r(`Strait direction`)}">
          <option value="vertical" selected>${r(`vertical`)}</option>
          <option value="horizontal">${r(`horizontal`)}</option>
        </select>
      </span>
      <span>w:
        <input class="templateCount" data-tip="${r(`Strait width, use hyphen to get a random number in range`)}" value=${t||`2-7`} />
      </span>
    </div>`:e===`Invert`?`${l}
      <span>${r(`by`)}:
        <select class="templateDist" data-tip="${r(`Mirror heightmap along axis`)}" style="width: 7.8em">
          <option value="x" selected>x</option>
          <option value="y">y</option>
          <option value="xy">${r(`both`)}</option>
        </select>
      </span>
      <span>n:
        <input class="templateCount" data-tip="${r(`Probability of inversion, range 0-1`)}" value=${t||`0.5`} />
      </span>
    </div>`:e===`Mask`?`${l}
      <span>f:
        <input class="templateCount"
          data-tip="${r(`Set masking fraction. 1 - full insulation (prevent land on map edges), 2 - half-insulation, etc. Negative number to inverse the effect`)}"
          type="number" min=-10 max=10 value=${t||1} />
      </span>
    </div>`:e===`Add`?`${l}
      <span>${r(`to`)}:
        <select class="templateDist" data-tip="${r(`Change only land or all cells`)}">
          <option value="all" selected>${r(`all cells`)}</option>
          <option value="land">${r(`land only`)}</option>
          <option value="interval">${r(`Interval`)}</option>
        </select>
      </span>
      <span>v:
        <input class="templateCount" data-tip="${r(`Add value to height of all cells (negative values are allowed)`)}"
        type="number" value=${t||-10} min=-100 max=100 step=1 />
      </span>
    </div>`:e===`Multiply`?`${l}
      <span>${r(`to`)}:
        <select class="templateDist" data-tip="${r(`Change only land or all cells`)}">
          <option value="all" selected>${r(`all cells`)}</option>
          <option value="land">${r(`land only`)}</option>
          <option value="interval">${r(`Interval`)}</option>
        </select>
      </span>
      <span>v:
        <input class="templateCount" data-tip="${r(`Multiply all cells Height by the value`)}" type="number"
          value=${t||1.1} min=0 max=10 step=.1 />
      </span>
    </div>`:e===`Smooth`?`${l}
      <span>f:
        <input class="templateCount" data-tip="${r(`Set smooth fraction. 1 - full smooth, 2 - half-smooth, etc.`)}"
          type="number" min=1 max=10 step=1 value=${t||2} />
      </span>
    </div>`:``}function Nt(e){let t=e.target;t.value===`interval`&&prompt(r(`Set a height interval. Avoid space, use hyphen as a separator`),{default:`17-20`},e=>{let n=document.createElement(`option`);n.value=n.innerHTML=String(e),t.add(n),t.value=String(e)})}function Pt(e){let t=C(`templateBody`),n=t.querySelectorAll(`div`).length,i=+t.getAttribute(`data-changed`),a=e.target.value;!n||!i?Ft(a):(alertMessage.innerHTML=r(`Are you sure you want to select a different template? All changes will be lost.`),$(`#alert`).dialog({resizable:!1,title:r(`Change Template`),buttons:{[r(`Change`)]:function(){Ft(a),$(this).dialog(`close`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}}}))}function Ft(e){let t=C(`templateBody`);t.setAttribute(`data-changed`,`0`),t.innerHTML=``;let n=ge[e]?.template;if(!n)return;let i=n.split(`
`);if(!i.length)T(r(`Heightmap template: no steps defined`),!1,`error`);else for(let e of i){let t=e.trim().split(` `);Q(t[0],t[1],t[2],t[3],t[4])}}function It(){let e=C(`templateBody`).querySelectorAll(`#templateBody > div`);if(!e.length)return;let t=C(`templateSeed`).value;Math.random=aleaPRNG(t||ne()),grid.cells.h=new Uint8Array(grid.points.length),HeightmapGenerator.setGraph(grid),lt();for(let t of e){if(t.style.opacity===`0.5`)continue;let e=t.querySelector(`.templateCount`)?.value||``,n=t.querySelector(`.templateHeight`)?.value||``,r=t.querySelector(`.templateDist`)?.value||``,i=t.querySelector(`.templateX`)?.value||``,a=t.querySelector(`.templateY`)?.value||``,o=t.dataset.type;o===`Hill`?HeightmapGenerator.addHill(e,n,i,a):o===`Pit`?HeightmapGenerator.addPit(e,n,i,a):o===`Range`?HeightmapGenerator.addRange(e,n,i,a):o===`Trough`?HeightmapGenerator.addTrough(e,n,i,a):o===`Strait`?HeightmapGenerator.addStrait(e,r):o===`Mask`?HeightmapGenerator.mask(+e):o===`Invert`?HeightmapGenerator.invert(+e,r):o===`Add`?HeightmapGenerator.modify(r,+e,1):o===`Multiply`?HeightmapGenerator.modify(r,0,+e):o===`Smooth`&&HeightmapGenerator.smooth(+e),grid.cells.h=HeightmapGenerator.getHeights(),X(`noStat`)}grid.cells.h=HeightmapGenerator.getHeights(),st(),q(),ct()}function Lt(){let e=C(`templateBody`);e.dataset.changed=`0`;let t=e.querySelectorAll(`#templateBody > div`);if(!t.length)return;let n=``;for(let e of Array.from(t)){if(e.style.opacity===`0.5`)continue;let t=e.getAttribute(`data-type`),r=e.querySelector(`.templateCount`)?.value||`0`,i=e.querySelector(`.templateHeight`)?.value||e.querySelector(`.templateDist`)?.value||`0`,a=e.querySelector(`.templateX`)?.value||`0`,o=e.querySelector(`.templateY`)?.value||`0`;n+=`${t} ${r} ${i} ${a} ${o}\r\n`}let r=`template_${Date.now()}.txt`;te(n,r)}function Rt(){B??=v(`.txt`),B.onchange=()=>oe(B,zt),B.click()}function zt(e){let t=e.split(/\r?\n/).filter(Boolean);if(!t.length)T(r(`Cannot parse the template, please check the file`),!1,`error`);else{C(`templateBody`).innerHTML=``;for(let e of t){let t=e.split(` `);t.length===5?Q(t[0],t[1],t[2],t[3],t[4]):ERROR&&console.error(`Cannot parse step, wrong arguments count`,e)}}}function Bt(){V??=v(`image/*`),V.onchange=()=>Ut.call(V),V.click()}function Vt(){if(o(`imageConverter`))return;Bt(),k(`#imageConverter`),Ze(),$(`#imageConverter`).dialog({title:r(`Image Converter`),maxHeight:E.height*.8,minHeight:`auto`,width:`20em`,position:{my:`right top`,at:`right-10 top+10`,of:`svg`},beforeClose:en});let e=document.createElement(`canvas`);e.id=`canvas`,e.width=options.map.graph.width,e.height=options.map.graph.height,document.body.insertBefore(e,C(`optionsContainer`)),Xt(0),pe(),T(r(`Image Converter is opened. Upload image and assign height value for each color`),!1,`warn`),grid.cells.h=new Uint8Array(grid.cells.i.length),_(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),X()}function Ht(){let e=+this.getAttribute(`data-color`);C(`colorsSelectValue`).innerHTML=String(e),C(`colorsSelectFriendly`).innerHTML=W(e);let t=C(`imageConverterPalette`).querySelector(`.hoveredColor`);t&&(t.className=``),this.className=`hoveredColor`}function Ut(){let e=this.files[0];this.value=``;let t=new FileReader,n=new Image;n.id=`imageToConvert`,n.style.display=`none`,document.body.appendChild(n),n.onload=()=>{C(`canvas`).getContext(`2d`).drawImage(n,0,0,options.map.graph.width,options.map.graph.height),Wt(+C(`convertColors`).value),resetZoom()},t.onloadend=()=>{n.src=t.result},t.readAsDataURL(e)}function Wt(e){let t=C(`canvas`),n=document.createElement(`canvas`);n.width=grid.cellsX,n.height=grid.cellsY,n.getContext(`2d`).drawImage(t,0,0,grid.cellsX,grid.cellsY);let r=new RgbQuant({colors:e});r.sample(n);let i=r.reduce(n),a=r.palette(!0);_(`#viewbox`).select(`#heights`).selectAll(`*`).remove(),_(`#imageConverter`).selectAll(`div.color-div`).remove(),C(`colorsSelect`).style.display=`block`,C(`colorsUnassigned`).style.display=`block`,C(`colorsAssigned`).style.display=`none`,n.remove(),_(`#viewbox`).select(`#heights`).selectAll(`polygon`).data(Array.from(grid.cells.i)).join(`polygon`).attr(`points`,e=>String(Grid.getPolygon(e))).attr(`id`,e=>`cell${e}`).attr(`fill`,e=>`rgb(${i[e*4]}, ${i[e*4+1]}, ${i[e*4+2]})`).on(`click`,Gt);let o=a.map(e=>`rgb(${e[0]}, ${e[1]}, ${e[2]})`);_(`#colorsUnassignedContainer`).selectAll(`div`).data(o).enter().append(`div`).attr(`data-color`,e=>e).style(`background-color`,e=>e).attr(`class`,`color-div`).on(`click`,Kt),C(`colorsUnassignedNumber`).innerHTML=String(o.length)}function Gt(){let e=this.getAttribute(`fill`);C(`imageConverter`).querySelector(`div[data-color="${e}"]`)?.click()}function Kt(){_(`#viewbox`).select(`#heights`).selectAll(`.selectedCell`).attr(`class`,null);let e=this.classList.contains(`selectedColor`),t=C(`imageConverter`).querySelector(`div.selectedColor`);t&&t.classList.remove(`selectedColor`);let n=C(`imageConverterPalette`).querySelector(`div.hoveredColor`);if(n&&n.classList.remove(`hoveredColor`),C(`colorsSelectValue`).innerHTML=C(`colorsSelectFriendly`).innerHTML=`0`,e)return;if(this.classList.add(`selectedColor`),this.dataset.height){let e=+this.dataset.height;C(`imageConverterPalette`).querySelector(`div[data-color="${e}"]`)?.classList.add(`hoveredColor`),C(`colorsSelectValue`).innerHTML=String(e),C(`colorsSelectFriendly`).innerHTML=W(e)}let r=this.getAttribute(`data-color`);_(`#viewbox`).select(`#heights`).selectAll(`polygon.selectedCell`).classed(`selectedCell`,!1),_(`#viewbox`).select(`#heights`).selectAll(`polygon[fill='${r}']`).classed(`selectedCell`,!0)}function qt(){let e=+this.dataset.color,t=Ge(1-(e<20?e-5:e)/100),n=C(`imageConverter`).querySelector(`div.selectedColor`);n.style.backgroundColor=t,n.setAttribute(`data-color`,t),n.setAttribute(`data-height`,String(e)),_(`#viewbox`).select(`#heights`).selectAll(`.selectedCell`).each(function(){this.setAttribute(`fill`,t),this.setAttribute(`data-height`,String(e))}),n.parentNode.id===`colorsUnassignedContainer`&&(C(`colorsAssignedContainer`).appendChild(n),C(`colorsAssigned`).style.display=`block`,C(`colorsUnassignedNumber`).innerHTML=String(C(`colorsUnassignedContainer`).childElementCount-2),C(`colorsAssignedNumber`).innerHTML=String(C(`colorsAssignedContainer`).childElementCount-2))}function Jt(e){let t=C(`colorsUnassignedContainer`),n=t.querySelectorAll(`div`);if(!n.length&&(Wt(+C(`convertColors`).value),n=t.querySelectorAll(`div`),!n.length)){T(r(`No unassigned colors. Please load an image and click the button again`),!1,`error`);return}let i=e=>{let t=a(e).h;return t>300&&(t-=360),t>170?Math.abs(t-250)/3|0:Math.abs(t-250+20)/3|0},o=e=>{let t=Me(e).l;return t<13?t/13*20|0:t|0},s=y(101).map(e=>K(e)),c=s.map(e=>a(e).h|0),l=e=>{let t=s.indexOf(e);if(t!==-1)return t;let n=a(e).h,r=c.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e);return c.indexOf(r)},u=[],d=C(`colorsAssignedContainer`);n.forEach(t=>{let n=t.dataset.color,r=e===`hue`?i(n):e===`lum`?o(n):l(n),a=Ge(1-(r<20?(r-5)/100:r/100));_(`#viewbox`).select(`#heights`).selectAll(`polygon[fill='${n}']`).attr(`fill`,a).attr(`data-height`,r),u[r]?t.remove():(t.style.backgroundColor=t.dataset.color=a,t.dataset.height=String(r),d.appendChild(t),u[r]=!0)}),Array.from(d.children).sort((e,t)=>+e.dataset.height-t.dataset.height).forEach(e=>{d.appendChild(e)}),C(`colorsAssigned`).style.display=`block`,C(`colorsUnassigned`).style.display=`none`,C(`colorsAssignedNumber`).innerHTML=String(d.childElementCount-2)}function Yt(){prompt(`${r(`Set maximum number of colors`)}<br>${r(`An actual number is usually lower and depends on color scheme`)}`,{default:+C(`convertColors`).value,step:1,min:3,max:255},e=>{C(`convertColors`).value=String(e),Wt(+e)})}function Xt(e){C(`convertOverlay`).value=C(`convertOverlayNumber`).value=String(e),C(`canvas`).style.opacity=String(e)}function Zt(){C(`colorsAssignedContainer`).childElementCount<3?T(r(`Please assign colors to heights first`),!1,`error`):(_(`#viewbox`).select(`#heights`).selectAll(`polygon`).each(function(){let e=+(this.dataset.height??`0`)||0,t=+this.id.slice(4);grid.cells.h[t]=e}),_(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),G(),$t())}function Qt(){$t(),_(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),Z(edits.n-1)}function $t(){o(`canvas`)?.remove(),o(`imageToConvert`)?.remove(),_(`#imageConverter`).selectAll(`div.color-div`).remove(),C(`colorsAssigned`).style.display=`none`,C(`colorsUnassigned`).style.display=`none`,C(`colorsSelectValue`).innerHTML=C(`colorsSelectFriendly`).innerHTML=`0`,_(`#viewbox`).style(`cursor`,`default`).on(`.drag`,null),T(r(`Heightmap edit mode is active. Click on “Exit Customization” to finalize the heightmap`),!0),$(`#imageConverter`).dialog(`destroy`),C(`imageConverter`).remove(),ut()}function en(e){e.preventDefault(),e.stopPropagation(),alertMessage.innerHTML=r(`Are you sure you want to close the Image Converter? Click “Cancel” to keep editing. Click “Complete” to apply the conversion and close the tool. Click “Close” to discard the conversion and restore the previous heightmap.`),$(`#alert`).dialog({resizable:!1,title:r(`Close Image Converter`),buttons:{[r(`Cancel`)]:function(){$(this).dialog(`close`)},[r(`Complete`)]:function(){$(this).dialog(`close`),Zt()},[r(`Close`)]:function(){$(this).dialog(`close`),$t(),_(`#viewbox`).select(`#heights`).selectAll(`polygon`).remove(),Z(edits.n-1)}}})}function tn(){let e=o(`preview`);if(e){e.remove();return}let t=document.createElement(`canvas`);t.id=`preview`;let n=Grid.getRaster();t.width=n.width,t.height=n.height,document.body.insertBefore(t,C(`optionsContainer`)),t.addEventListener(`mouseover`,()=>T(r(`Heightmap preview. Click to download a screen-sized image`))),t.addEventListener(`click`,rn),nn()}function nn(){let e=C(`preview`).getContext(`2d`),t=Grid.getRaster(),n=e.createImageData(t.width,t.height);Grid.rasterize(grid.cells.h,t).forEach((e,t)=>{let r=(e<20?Math.max(e/1.5,0):e)/100*255,i=t*4;n.data[i]=r,n.data[i+1]=r,n.data[i+2]=r,n.data[i+3]=255}),e.putImageData(n,0,0)}function rn(){let e=C(`preview`).toDataURL(`image/png`),t=new Image;t.src=e,t.onload=()=>{let e=document.createElement(`canvas`),n=e.getContext(`2d`);e.width=options.map.graph.width,e.height=options.map.graph.height,document.body.insertBefore(e,C(`optionsContainer`)),n.drawImage(t,0,0,options.map.graph.width,options.map.graph.height);let r=e.toDataURL(`image/png`),i=document.createElement(`a`);i.download=`${x(`Heightmap`)}.png`,i.href=r,i.click(),e.remove()}}var an={open:Ye,redrawDrainage:H};export{an as HeightmapEditor};