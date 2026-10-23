import{C as e,h as t,m as n,r}from"./index-CuUJKJN8.js";import{B as i,Mt as a,Pt as o,dn as s,gn as c,z as l}from"./utils-394NS37_.js";import{Ct as u,Et as d,St as f,Tt as p,bt as m,t as h,vt as g,wt as _,xt as v,yt as y}from"./layers-CpGI7aJd.js";import{h as b,n as x}from"./unitUtils-B91DAWIJ.js";import{i as S}from"./tooltips-7PimaK30.js";import{i as C}from"./dialog-helpers-kMHr89OS.js";import{t as w}from"./pins-BgZ3A9ES.js";function T(e){return function(t,n){var r=d(t*t+n*n),i=e(r),a=p(i),o=u(i);return[f(t*a,r*o),v(r&&n*a/r)]}}function E(e,t){return[u(t)*p(e),p(t)]}E.invert=T(v);function D(){return g(E).scale(249.5).clipAngle(90+_)}var O=D().translate([100,100]).scale(100),k=y(O);function A(){customization||(j(),R(),V(),B(),H(),$(`#worldConfigurator`).dialog({title:r(`Configure World`),resizable:!1,width:`minmax(40em, 85vw)`,buttons:{[r(`Update world`)]:z},open:function(){let e=`<div class="dontAsk" data-tip="${r(`Automatically update world on input changes and button clicks`)}">
        <input id="wcAutoChange" class="checkbox" type="checkbox" checked />
        <label for="wcAutoChange" class="checkbox-label"><i>${r(`auto-apply changes`)}</i></label>
      </div>`;(this.parentElement?.querySelector(`.ui-dialog-buttonpane`))?.insertAdjacentHTML(`afterbegin`,e),(this.parentElement?.querySelector(`.ui-dialog-buttonset > button`))?.addEventListener(`mousemove`,()=>S(r(`Apply current settings to the map`)))},close:()=>C(`worldConfigurator`)}))}function j(){C(`worldConfigurator`),l(`dialogs`).insertAdjacentHTML(`beforeend`,M()),N()}function M(){let e=(e,t,n)=>`<div>
    <i data-locked="0" id="lock_${e}" class="icon-lock-open"></i>
    <label data-tip="${n}">
      <i>${t}:</i>
      <input id="${e}Input" type="number" min="-50" max="50" />
      <span>°C<span id="${e}Converted"></span></span>
      <input id="${e}Output" type="range" min="-50" max="50" />
    </label>
  </div>`;return`<div id="worldConfigurator" class="dialog stable">
    <div style="display: flex">
      <div id="worldControls">
        ${e(`temperatureEquator`,r(`Equator`),r(`Set temperature at equator`))}
        ${e(`temperatureNorthPole`,r(`North Pole`),r(`Set the North Pole average yearly temperature`))}
        ${e(`temperatureSouthPole`,r(`South Pole`),r(`Set the South Pole average yearly temperature`))}
        <div>
          <i data-locked="0" id="lock_mapSize" class="icon-lock-open"></i>
          <label data-tip="${r(`Set map size relative to the world size`)}">
            <i>${r(`Map size`)}:</i>
            <input id="mapSizeInput" type="number" min="1" max="100" step="0.1" />%
            <input id="mapSizeOutput" type="range" min="1" max="100" step="0.1" />
          </label>
        </div>
        <div>
          <i data-locked="0" id="lock_latitude" class="icon-lock-open"></i>
          <label data-tip="${r(`Set a North-South map shift, set to 50 to make map center lie on Equator`)}">
            <i>${r(`Latitudes`)}:</i>
            <input id="latitudeInput" type="number" min="0" max="100" step="0.1" />
            <br /><i>N</i
            ><input
              id="latitudeOutput"
              type="range"
              min="0"
              max="100"
              step="0.1"
              style="width: 10.3em"
            /><i>S</i>
          </label>
        </div>
        <div>
          <i data-locked="0" id="lock_longitude" class="icon-lock-open"></i>
          <label data-tip="${r(`Set a West-East map shift, set to 50 to make map center lie on Prime meridian`)}">
            <i>${r(`Longitudes`)}:</i>
            <input id="longitudeInput" type="number" min="0" max="100" step="0.1" />
            <br /><i>W</i
            ><input
              id="longitudeOutput"
              type="range"
              min="0"
              max="100"
              step="0.1"
              style="width: 10.3em"
            /><i>E</i>
          </label>
        </div>
        <div>
          <label
            data-tip="${r(`Set precipitation - water amount clouds can bring. Defines rivers and biomes generation. Keep around 100% for default generation`)}"
          >
            <i data-locked="0" id="lock_prec" class="icon-lock-open"></i>
            <i>${r(`Precipitation`)}:</i>
            <input id="precInput" type="number" />%
            <input id="precOutput" type="range" min="0" max="500" />
          </label>
        </div>
        <div data-tip="${r(`The coordinate extent this map was generated on. The next map's is set in Options`)}">
          <i>${r(`Map size`)}:</i><br />
          <span id="mapSize"></span> px = <span id="mapSizeFriendly"></span>
        </div>
        <div>
          <i data-tip="${r(`Length of Meridian. Almost half of the equator length`)}">${r(`Meridian length`)}:</i><br />
          <span id="meridianLength" data-tip="${r(`Length of Meridian in pixels`)}"></span> px =
          <span
            id="meridianLengthFriendly"
            data-tip="${r(`Length of Meridian is friendly units (depends on user configuration)`)}"
          ></span>
          <span
            id="meridianLengthEarth"
            data-tip="${r(`Fantasy world Meridian length relative to real-world Earth (20k km)`)}"
          ></span>
        </div>
        <div data-tip="${r(`Map coordinates on globe`)}"><i>${r(`Coords`)}:</i> <span id="mapCoordinates"></span></div>
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-end">
        <svg id="globe" width="22em" viewBox="-20 -25 240 240">
          <defs>
            <linearGradient id="temperatureGradient" x1="0" x2="0" y1="0" y2="1">
              <stop id="grad90" offset="0%" stop-color="blue" />
              <stop id="grad60" offset="16.6%" stop-color="green" />
              <stop id="grad30" offset="33.3%" stop-color="yellow" />
              <stop id="grad0" offset="50%" stop-color="red" />
              <stop id="grad-30" offset="66.6%" stop-color="yellow" />
              <stop id="grad-60" offset="83.3%" stop-color="green" />
              <stop id="grad-90" offset="100%" stop-color="blue" />
            </linearGradient>
          </defs>
          <g id="globeNoteLines">
            <line x1="5" x2="220" y1="0" y2="0" />
            <line x1="5" x2="220" y1="13" y2="13" />
            <line x1="5" x2="220" y1="49.5" y2="49.5" />
            <line x1="-5" x2="220" y1="100" y2="100" />
            <line x1="5" x2="220" y1="150.5" y2="150.5" />
            <line x1="5" x2="220" y1="187" y2="187" />
            <line x1="5" x2="220" y1="200" y2="200" />
          </g>
          <g id="globeWindArrows" data-tip="${r(`Click to change wind direction`)}" stroke-linejoin="round">
            <circle cx="210" cy="6" r="12" />
            <path data-tier="0" d="M210,11 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(225 210 6)" />
            <circle cx="210" cy="30" r="12" />
            <path data-tier="1" d="M210,35 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(45 210 30)" />
            <circle cx="210" cy="75" r="12" />
            <path data-tier="2" d="M210,80 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(225 210 75)" />
            <circle cx="210" cy="130" r="12" />
            <path data-tier="3" d="M210,135 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(315 210 130)" />
            <circle cx="210" cy="173" r="12" />
            <path data-tier="4" d="M210,178 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(135 210 173)" />
            <circle cx="210" cy="194" r="12" />
            <path data-tier="5" d="M210,199 v-10 l-3,3 m6,0 l-3,-3" transform="rotate(315 210 194)" />
          </g>
          <g id="globaAxisLabels">
            <text x="82%" y="-4%">${r(`wind`)}</text>
            <text x="-8%" y="-4%">${r(`Latitude`)}</text>
          </g>
          <g id="globeLatLabels">
            <text x="-15" y="5">90°</text>
            <text x="-15" y="18">60°</text>
            <text x="-15" y="53">30°</text>
            <text x="-15" y="103">0°</text>
            <text x="-15" y="153">30°</text>
            <text x="-15" y="190">60°</text>
            <text x="-15" y="204">90°</text>
          </g>
          <circle id="globeGradient" cx="100" cy="100" r="100" fill="url(#temperatureGradient)" stroke="none" />
          <line id="globePrimeMeridian" x1="100" x2="100" y1="0" y2="200" />
          <line id="globeEquator" x1="1" x2="200" y1="100" y2="100" />
          <circle id="globeOutline" cx="100" cy="100" r="100" fill="none" />
          <path id="globeGraticule" />
          <path id="globeArea" />
        </svg>
        <button id="restoreWinds" data-tip="${r(`Click to restore default (Earth-based) wind directions`)}">
          ${r(`Restore winds`)}
        </button>
      </div>
    </div>
    <div style="margin-top: 0.3em">
      <i>${r(`Presets`)}:</i>
      <button id="wcWholeWorld" data-tip="${r(`Click to set map size to cover the whole world`)}">${r(`Whole world`)}</button>
      <button id="wcNorthern" data-tip="${r(`Click to set map size to cover the Northern latitudes`)}">${r(`Northern`)}</button>
      <button id="wcTropical" data-tip="${r(`Click to set map size to cover the Tropical latitudes`)}">${r(`Tropical`)}</button>
      <button id="wcSouthern" data-tip="${r(`Click to set map size to cover the Southern latitudes`)}">${r(`Southern`)}</button>
    </div>
  </div>`}function N(){s(`#globe`).select(`#globeWindArrows`).on(`click`,U),s(`#globe`).select(`#globeGraticule`).attr(`d`,t(k(m()())??``)),l(`worldConfigurator`).addEventListener(`input`,F),l(`restoreWinds`).addEventListener(`click`,W),l(`wcWholeWorld`).addEventListener(`click`,()=>G(100,50)),l(`wcNorthern`).addEventListener(`click`,()=>G(33,25)),l(`wcTropical`).addEventListener(`click`,()=>G(33,50)),l(`wcSouthern`).addEventListener(`click`,()=>G(33,75)),w.bindIcons(l(`worldConfigurator`),P)}function P(e){let{temperature:t}=options.map.climate;if(e===`temperatureEquator`)return t.equator;if(e===`temperatureNorthPole`)return t.northPole;if(e===`temperatureSouthPole`)return t.southPole;if(e===`prec`)return options.map.climate.precipitation;if(e===`mapSize`)return options.map.geography.mapSize;if(e===`latitude`)return options.map.geography.latitude;if(e===`longitude`)return options.map.geography.longitude}function F(e){let t=e.target,n=t.id.match(/^(\w+?)(Input|Output)$/);if(!n||!t.value)return;let[,r,a]=n,o=Number(t.value);if(Number.isNaN(o))return;let s=i(`${r}${a===`Input`?`Output`:`Input`}`);s&&(s.value=t.value);let{geography:c,climate:l}=options.map;if(r===`temperatureEquator`)l.temperature.equator=o;else if(r===`temperatureNorthPole`)l.temperature.northPole=o;else if(r===`temperatureSouthPole`)l.temperature.southPole=o;else if(r===`prec`)l.precipitation=o;else if(r===`mapSize`||r===`latitude`||r===`longitude`)c[r]=o,Coordinates.calculate();else return;w.set(r,o),Options.save(),L(),i(`wcAutoChange`)?.checked&&z()}function I(e){return options.map.units.temperature.unit===`°C`?``:` = ${x(e)}`}function L(){let{equator:e,northPole:t,southPole:n}=options.map.climate.temperature;l(`temperatureEquatorConverted`).textContent=I(e),l(`temperatureNorthPoleConverted`).textContent=I(t),l(`temperatureSouthPoleConverted`).textContent=I(n)}function R(){let{temperature:e,precipitation:t}=options.map.climate,{mapSize:n,latitude:r,longitude:a}=options.map.geography;for(let[o,s]of Object.entries({temperatureEquator:e.equator,temperatureNorthPole:e.northPole,temperatureSouthPole:e.southPole,prec:t,mapSize:n,latitude:r,longitude:a}))for(let e of[`Input`,`Output`]){let t=i(`${o}${e}`);t&&(t.value=String(s))}L()}function z(){V(),B(),Temperature.generate(),Precipitation.generate();let e=new Uint8Array(pack.cells.h);Rivers.generate(!0,Rivers.getLocked()),Rivers.specify(),Routes.sync(),pack.cells.h=new Float32Array(e),Biomes.define(),Features.defineGroups(),Features.defineNames(),h.draw(`temperature`,`precipitation`),h.draw(`biomes`,`coordinates`,`rivers`),i(`canvas3d`)&&setTimeout(()=>window.Controllers.View3d.update(),500)}function B(){let n=options.map.graph.height/2*100/options.map.geography.mapSize;Coordinates.calculate();let r=options.map.geography.coordinates,i=options.map.units.distance.unit,a=n*2*options.map.units.distance.scale*b();l(`mapSize`).innerHTML=`${options.map.graph.width}x${options.map.graph.height}`,l(`mapSizeFriendly`).innerHTML=`${e(options.map.graph.width*options.map.units.distance.scale)}x${e(options.map.graph.height*options.map.units.distance.scale)} ${i}`,l(`meridianLength`).innerHTML=String(e(n*2)),l(`meridianLengthFriendly`).innerHTML=`${e(n*2*options.map.units.distance.scale)} ${i}`,l(`meridianLengthEarth`).innerHTML=a?` = ${e(a/200)}%🌏`:``,l(`mapCoordinates`).innerHTML=`${o(r.latN)} ${Math.abs(e(r.lonW))}°W; ${o(r.latS)} ${e(r.lonE)}°E`;function o(t){return t>0?`${Math.abs(e(t))}°N`:`${Math.abs(e(t))}°S`}let c=m().extent([[r.lonW??0,r.latN??0],[r.lonE??0,r.latS??0]]);s(`#globe`).select(`#globeArea`).attr(`d`,t(k(c.outline())??``))}function V(){let e=options.map.climate.temperature.equator,t=options.map.climate.temperature.northPole,n=options.map.climate.temperature.southPole,r=o(a),i=e=>r(1-e),[c,l]=[-25,30],u=l-c;s(`#globe`).select(`#grad90`).attr(`stop-color`,i((t-c)/u)),s(`#globe`).select(`#grad60`).attr(`stop-color`,i((e-(e-t)*2/3-c)/u)),s(`#globe`).select(`#grad30`).attr(`stop-color`,i((e-(e-t)*1/4-c)/u)),s(`#globe`).select(`#grad0`).attr(`stop-color`,i((e-c)/u)),s(`#globe`).select(`#grad-30`).attr(`stop-color`,i((e-(e-n)*1/4-c)/u)),s(`#globe`).select(`#grad-60`).attr(`stop-color`,i((e-(e-n)*2/3-c)/u)),s(`#globe`).select(`#grad-90`).attr(`stop-color`,i((n-c)/u))}function H(){s(`#globe`).select(`#globeWindArrows`).selectAll(`path`).each(function(e,t){let r=n(this.getAttribute(`transform`)??``);this.setAttribute(`transform`,`rotate(${options.map.climate.winds[t]} ${r[1]} ${r[2]})`)})}function U(e){let t=e.target,r=t.tagName===`path`?t:t.nextElementSibling;if(!r?.dataset.tier)return;let i=+r.dataset.tier;options.map.climate.winds[i]=(options.map.climate.winds[i]+45)%360,Options.save();let a=n(r.getAttribute(`transform`)??``);r.setAttribute(`transform`,`rotate(${options.map.climate.winds[i]} ${a[1]} ${a[2]})`);let o=c(options.map.geography.coordinates.latN,options.map.geography.coordinates.latS,-30).map(e=>(90-e)/30|0);l(`wcAutoChange`).checked&&o.includes(i)&&z()}function W(){let e=[225,45,225,315,135,315],t=c(options.map.geography.coordinates.latN,options.map.geography.coordinates.latS,-30).map(e=>(90-e)/30|0),n=l(`wcAutoChange`).checked&&t.some(t=>options.map.climate.winds[t]!==e[t]);options.map.climate.winds=e,Options.save(),H(),n&&z()}function G(e,t){options.map.geography.mapSize=e,options.map.geography.latitude=t,Coordinates.calculate(),Options.save(),w.set(`mapSize`,e),w.set(`latitude`,t),R(),i(`wcAutoChange`)?.checked&&z()}var K={open:A};export{K as WorldConfigurator};