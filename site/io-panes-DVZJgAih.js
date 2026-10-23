import{C as e,n as t,r as n}from"./index-CuUJKJN8.js";import{d as r}from"./options-tab-DhjqEPSL.js";import{B as i,dn as a,f as o,j as s,z as c}from"./utils-394NS37_.js";import{t as l}from"./layers-CpGI7aJd.js";import{i as u}from"./tooltips-7PimaK30.js";import{n as d}from"./dialog-helpers-kMHr89OS.js";var f=`
  <div id="exportMapData" style="display: none" class="dialog">
    <div style="margin-bottom: 0.3em; font-weight: bold">${n(`Download image`)}</div>
    <div>
      <button data-action="svg" data-tip="${n(`Download the map as vector image (open directly in browser or Inkscape)`)}">.svg</button>
      <button data-action="png" data-tip="${n(`Download visible part of the map as .png (lossless compressed)`)}">.png</button>
      <button data-action="jpeg" data-tip="${n(`Download visible part of the map as .jpeg (lossy compressed) image`)}">.jpeg</button>
      <button data-action="tiles" data-tip="${n(`Split map into smaller png tiles and download as zip archive`)}">${n(`tiles`)}</button>
      <span data-tip="${n(`Check to not allow system to automatically hide labels`)}">
        <input id="showLabels" class="checkbox" type="checkbox" />
        <label for="showLabels" class="checkbox-label">${n(`Show all labels`)}</label>
      </span>
    </div>
    <div
      data-tip="${n(`Define scale of a saved png/jpeg image (e.g. 5x). Saving big images is slow and may cause a browser crash!`)}"
      style="margin-bottom: 0.3em"
    >
      ${n(`PNG / JPEG scale`)}:
      <input id="pngResolutionInput" data-stored="pngResolution" type="range" min="1" max="8" value="1" style="width: 10em" />
      <input id="pngResolutionOutput" data-stored="pngResolution" type="number" min="1" max="8" value="1" />
    </div>
    <p>${n(`Generator uses pop-up window to download files. Please ensure your browser does not block popups.`)}</p>
    <div style="margin: 1em 0 0.3em; font-weight: bold">${n(`Export to GeoJSON`)}</div>
    <div>
      <button data-action="geojsonCells" data-tip="${n(`Export to GeoJSON`)}">${n(`Cells`)}</button>
      <button data-action="geojsonRoutes" data-tip="${n(`Export to GeoJSON`)}">${n(`Routes`)}</button>
      <button data-action="geojsonRivers" data-tip="${n(`Export to GeoJSON`)}">${n(`Rivers`)}</button>
      <button data-action="geojsonMarkers" data-tip="${n(`Export to GeoJSON`)}">${n(`Markers`)}</button>
      <button data-action="geojsonZones" data-tip="${n(`Export to GeoJSON`)}">${n(`Zones`)}</button>
    </div>
    <p>
      ${t(n(`GeoJSON format is used in GIS tools such as QGIS.`),n(`Check out {{- wiki}} for guidance.`,{wiki:s(`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/GIS-data-export`,n(`wiki`))}))}
    </p>
    <div style="margin: 1em 0 0.3em; font-weight: bold">${n(`Export to JSON`)}</div>
    <div>
      <button data-action="jsonFull" data-tip="${n(`Download full data in JSON`)}">${n(`Full`)}</button>
      <button data-action="jsonMinimal" data-tip="${n(`Download minimal data in JSON`)}">${n(`Minimal`)}</button>
      <button data-action="jsonPackCells" data-tip="${n(`Download map metadata and pack cells data in JSON`)}">${n(`Pack cells`)}</button>
      <button data-action="jsonGridCells" data-tip="${n(`Download map metadata and grid cells data in JSON`)}">${n(`Grid cells`)}</button>
    </div>
    <p>${n(`Export in JSON format can be used as an API replacement.`)}</p>
  </div>

  <div id="saveMapData" style="display: none" class="dialog">
    <div style="margin-top: 0.3em">
      <strong>${n(`Save map to`)}</strong>
      <button
        data-action="saveToMachine"
        data-tip="${n(`Save to a new file; Shift-click to overwrite the last saved file`)}"
        data-shortcut="Ctrl + S"
        style="font-weight: 600"
      >
        ${n(`machine`)}
      </button>
      <button id="saveToDropboxButton" data-action="saveToDropbox" data-tip="${n(`Save Map to Dropbox`)}" data-shortcut="Ctrl + C">
        dropbox
      </button>
      <button id="saveToStorageButton" data-action="saveToStorage" data-tip="${n(`Save the project to browser storage only`)}" data-shortcut="F6">${n(`browser`)}</button>
    </div>
    <p>
      ${n(`Each save creates a new file, so earlier saves stay as backups. Where your browser supports it, Shift-click machine or press Ctrl + Shift + S to overwrite the last saved file.`)}
    </p>
    <p>
      ${n(`Maps are saved in .map format, that can be loaded back via the Load in menu. There is no way to restore the progress if file is lost. Please keep old save files on your machine or cloud storage as backups.`)}
    </p>
    <div data-tip="${n(`Saved map opens for browsing only, with editing disabled. Not a protection: the file itself can still be changed`)}">
      <input id="saveViewOnly" class="checkbox" type="checkbox" />
      <label for="saveViewOnly" class="checkbox-label">${n(`View-only mode`)}</label>
    </div>
  </div>

  <div id="loadMapData" style="display: none" class="dialog">
    <div>
      <strong>${n(`Load map from`)}</strong>
      <button id="loadMapFromMachine" data-tip="${n(`Load map file (.map or .gz) from your local disk`)}">${n(`machine`)}</button>
      <button data-action="loadFromURL" data-tip="${n(`Load map file (.map or .gz) file from URL. Note that the server should allow CORS`)}">
        URL
      </button>
      <button data-action="loadFromStorage" data-tip="${n(`Load map from browser storage (if saved before)`)}">${n(`storage`)}</button>
    </div>
    <p>${n(`Click on storage to open the last saved map.`)}</p>
    <div id="loadFromDropbox">
      <p style="margin-bottom: 0.3em">
        ${n(`Or load from your Dropbox account`)}
        <button id="dropboxConnectButton" data-action="connectDropbox" data-tip="${n(`Connect your Dropbox account to be able to load maps from it`)}">
          ${n(`Connect`)}
        </button>
      </p>
      <select id="loadFromDropboxSelect" style="width: 22em"></select>
      <div id="loadFromDropboxButtons" style="margin-bottom: 0.6em">
        <button data-action="loadFromDropbox" data-tip="${n(`Load map file (.map or .gz) from your Dropbox`)}">${n(`Load`)}</button>
        <button data-action="shareDropboxLink" data-tip="${n(`Select file and create a link to share with your friends`)}">${n(`Share`)}</button>
      </div>
      <div style="margin-top: 0.3em">
        <div id="sharableLinkContainer" style="display: none">
          <a id="sharableLink" target="_blank"></a>
          <i data-action="copyLink" data-tip="${n(`Copy link to the clipboard`)}" class="icon-clone pointer"></i>
        </div>
      </div>
    </div>
  </div>

  <div id="exportToPngTilesScreen" style="display: none" class="dialog">
    <p>${n(`Map will be split into tiles and downloaded as a single zip file. Avoid saving too large images`)}</p>
    <div data-tip="${n(`Number of columns`)}" style="margin-bottom: 0.3em">
      <div class="label">${n(`Columns`)}:</div>
      <input id="tileColsInput" data-stored="tileCols" type="range" min="2" max="26" value="8" style="width: 10em" />
      <input id="tileColsOutput" data-stored="tileCols" type="number" min="2" value="8" />
    </div>
    <div data-tip="${n(`Number of rows`)}" style="margin-bottom: 0.3em">
      <div class="label">${n(`Rows`)}:</div>
      <input id="tileRowsInput" data-stored="tileRows" type="range" min="2" max="26" value="8" style="width: 10em" />
      <input id="tileRowsOutput" data-stored="tileRows" type="number" min="2" value="8" />
    </div>
    <div data-tip="${n(`Image scale relative to image size (e.g. 5x)`)}" style="margin-bottom: 0.3em">
      <div class="label">${n(`Scale`)}:</div>
      <input id="tileScaleInput" data-stored="tileScale" type="range" min="1" max="4" value="1" style="width: 10em" />
      <input id="tileScaleOutput" data-stored="tileScale" type="number" min="1" value="1" />
    </div>
    <div data-tip="${n(`Calculated size of image if combined`)}" style="margin-bottom: 0.3em">
      <div class="label">${n(`Total size`)}:</div>
      <div id="tileSize" style="display: inline-block">1000 x 1000 px</div>
    </div>
    <div id="tileStatus" style="font-style: italic"></div>
  </div>
`,p={svg:()=>r.ExportMap.exportToSvg(),png:()=>r.ExportMap.exportToPng(),jpeg:()=>r.ExportMap.exportToJpeg(),tiles:()=>w(),geojsonCells:()=>r.ExportMap.saveGeoJsonCells(),geojsonRoutes:()=>r.ExportMap.saveGeoJsonRoutes(),geojsonRivers:()=>r.ExportMap.saveGeoJsonRivers(),geojsonMarkers:()=>r.ExportMap.saveGeoJsonMarkers(),geojsonZones:()=>r.ExportMap.saveGeoJsonZones(),jsonFull:()=>r.ExportJson.exportToJson(`Full`),jsonMinimal:()=>r.ExportJson.exportToJson(`Minimal`),jsonPackCells:()=>r.ExportJson.exportToJson(`PackCells`),jsonGridCells:()=>r.ExportJson.exportToJson(`GridCells`),saveToMachine:e=>r.Save.toMachine(e.shiftKey,m()),saveToDropbox:()=>r.Save.toDropbox(m()),saveToStorage:()=>r.Save.toStorage(),loadFromURL:()=>C(),loadFromStorage:()=>r.Load.quickLoad(),connectDropbox:()=>b(),loadFromDropbox:()=>r.Load.loadFromDropbox(),shareDropboxLink:()=>r.Load.createSharableDropboxLink(),copyLink:()=>x()},m=()=>c(`saveViewOnly`).checked;function h(){c(`saveToStorageButton`).disabled=m()}var g={[n(`Close`)]:function(){$(this).dialog(`close`)}};function _(){c(`saveViewOnly`).checked=!1,h(),$(`#saveMapData`).dialog({title:n(`Save map`),resizable:!1,width:`25em`,position:{my:`center`,at:`center`,of:`svg`},buttons:g})}function v(){c(`showLabels`).checked=options.app.labels.showAll,$(`#exportMapData`).dialog({title:n(`Export map data`),resizable:!1,width:`26em`,position:{my:`center`,at:`center`,of:`svg`},buttons:g})}async function y(){if($(`#loadMapData`).dialog({title:n(`Load Map`),resizable:!1,width:`auto`,position:{my:`center`,at:`center`,of:`svg`},buttons:g}),!i(`loadFromDropbox`))return;c(`sharableLinkContainer`).style.display=`none`;let t=c(`dropboxConnectButton`),a=c(`loadFromDropboxButtons`),o=c(`loadFromDropboxSelect`);if(!await r.Cloud.isConnected()){t.style.display=`inline-block`,a.style.display=`none`,o.style.display=`none`;return}t.style.display=`none`,o.style.display=`block`,o.innerHTML=`<option value="" disabled selected>${n(`Loading`)}…</option>`;let s=await r.Cloud.list();if(!s.length)a.style.display=`none`,o.innerHTML=`<option value="" disabled selected>${n(`Save files to Dropbox first`)}</option>`;else{a.style.display=`block`,o.innerHTML=``;for(let{name:t,updated:n,size:r,path:i}of s){let a=`${new Date(n).toLocaleDateString()}: ${t} [${e(r/1024/1024,2)} MB]`;o.options.add(new Option(a,i))}}}async function b(){await r.Cloud.connect(),await r.Cloud.isConnected()&&y()}function x(){let e=c(`sharableLink`).getAttribute(`href`)??``;navigator.clipboard.writeText(e).then(()=>u(n(`Link is copied to the clipboard`),!0,`success`,8e3))}var S=/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;function C(){c(`alertMessage`).innerHTML=`${n(`Provide URL to map file`)}:
    <input id="mapURL" type="url" style="width: 24em" placeholder="https://e-cloud.com/test.map" />
    <br /><i>${n(`Please note server should allow CORS for file to be loaded. If CORS is not allowed, save file to Dropbox and provide a direct link`)}</i>`,$(`#alert`).dialog({resizable:!1,title:n(`Load Map from URL`),width:`27em`,buttons:{[n(`Load`)]:function(){let e=c(`mapURL`).value;if(!S.test(e))return u(n(`Please provide a valid URL`),!1,`error`);r.Load.loadMapFromURL(e),$(this).dialog(`close`)},[n(`Cancel`)]:function(){$(this).dialog(`close`)}}})}function w(){c(`tileStatus`).innerHTML=``,d(),k();let e=Array.from(c(`exportToPngTilesScreen`).querySelectorAll(`input`));for(let t of e)t.addEventListener(`input`,T);$(`#exportToPngTilesScreen`).dialog({resizable:!1,title:n(`Download tiles`),width:`23em`,buttons:{[n(`Download`)]:()=>r.ExportMap.exportToPngTiles(),[n(`Cancel`)]:function(){$(this).dialog(`close`)}},close:()=>{for(let t of e)t.removeEventListener(`input`,T);a(`#debug`).selectAll(`*`).remove()}})}function T(){let{nextElementSibling:e,previousElementSibling:t}=this;e instanceof HTMLInputElement&&(e.value=this.value),t instanceof HTMLInputElement&&(t.value=this.value),E(this),k()}function E(e){let t=+e.value;t>0&&Options.set(n=>{let{tiles:r}=n.app.export;e.dataset.stored===`pngResolution`?n.app.export.pngResolution=t:e.dataset.stored===`tileCols`?r.cols=t:e.dataset.stored===`tileRows`?r.rows=t:e.dataset.stored===`tileScale`&&(r.scale=t)})}var D=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,O=e=>(e>=26?D[Math.floor(e/26)-1]:``)+D[e%26];function k(){let{cols:e,rows:t,scale:n}=options.app.export.tiles,r=options.map.graph.width*n*e,i=options.map.graph.height*n*t,o=r*i,s=c(`tileSize`);s.innerHTML=`${r} x ${i} px`,s.style.color=o>1e9?`#d00b0b`:o>1e8?`#9e6409`:`#1a941a`;let l=options.map.graph.width/e|0,u=options.map.graph.height/t|0,d=[],f=[];for(let e=0,t=0;e+u<=options.map.graph.height;e+=u,t++)for(let n=0,r=1;n+l<=options.map.graph.width;n+=l,r++){d.push(`<rect x=${n} y=${e} width=${l} height=${u} />`);let i=`${O(t)}${r}`;f.push(`<text x=${n+l/2} y=${e+u/2}>${i}</text>`)}a(`#debug`).html(`<g fill="none" stroke="#000">${d.join(``)}</g>
    <g fill="#000" stroke="none" text-anchor="middle" dominant-baseline="central" font-size="18px">${f.join(``)}</g>`)}var A=o(`.map,.gz`);A.id=`mapToLoad`,A.onchange=()=>{let e=A.files?.[0];A.value=``,d(),e&&r.Load.uploadMap(e)};function j(){A.click()}function M(){c(`dialogs`).insertAdjacentHTML(`afterbegin`,f);for(let e of[`exportMapData`,`saveMapData`,`loadMapData`])c(e).addEventListener(`click`,e=>{let t=e.target.closest(`[data-action]`)?.dataset.action;t&&p[t]?.(e)});for(let e of document.querySelectorAll(`[data-stored="pngResolution"]`))e.addEventListener(`input`,()=>{for(let t of document.querySelectorAll(`[data-stored="pngResolution"]`))t.value=e.value;E(e)});c(`showLabels`).addEventListener(`change`,function(){Options.set(e=>e.app.labels.showAll=this.checked),l.draw(`labels`)}),c(`saveViewOnly`).addEventListener(`change`,h),c(`loadMapFromMachine`).addEventListener(`click`,j)}M();export{y as a,v as i,w as n,_ as o,j as r,C as t};