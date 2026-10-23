import{n as e,r as t}from"./index-CuUJKJN8.js";import{A as n,B as r,z as i}from"./utils-394NS37_.js";import{ct as a,t as o}from"./layers-CpGI7aJd.js";import{r as s,t as c}from"./layer-labels-B60lVHW8.js";var l={political:t(`Political map`),cultural:t(`Cultural map`),religions:t(`Religions map`),provinces:t(`Provinces map`),biomes:t(`Biomes map`),heightmap:t(`Heightmap`),physical:t(`Physical map`),poi:t(`Places of interest`),goods:t(`Goods map`),trade:t(`Trade animation`),military:t(`Military map`),emblems:t(`Emblems`),landmass:t(`Pure landmass`)},u=e=>[...c].find(([,t])=>t.shortcut===e)?.[0],d=`
  <p data-tip="${t(`Select a map layers preset`)}" style="display: inline-block">${t(`Layers preset`)}:</p>
  <select data-tip="${t(`Select a map layers preset`)}" id="layersPreset" style="width: 45%">
    ${Object.entries(l).map(([e,t])=>`<option value="${e}">${t}</option>`).join(``)}
    <option hidden value="custom">${t(`Custom (not saved)`)}</option>
  </select>
  <button
    id="savePresetButton"
    data-tip="${t(`Click to save displayed layers as a new preset`)}"
    class="icon-plus sideButton"
    style="display: none"
  ></button>
  <button
    id="removePresetButton"
    data-tip="${t(`Remove`)}"
    class="icon-minus sideButton"
    style="display: none"
  ></button>
  <p>${t(`Displayed layers and layer order`)}:</p>
  <ul
    data-tip="${e(t(`Click to toggle, drag to raise or lower the layer`),t(`Ctrl + click to edit layer style`))}"
    id="mapLayers"
  >
  </ul>
  <div class="tip">${t(`Click to toggle, drag to raise or lower the layer`)}</div>
  <div class="tip">${t(`Ctrl + click to edit layer style`)}</div>
  <div id="viewMode" data-tip="${t(`Set view mode`)}">
    <p>${t(`View mode`)}:</p>
    <button data-tip="${t(`Standard view mode for editing the map`)}" id="viewStandard" class="pressed">
      ${t(`Standard`)}
    </button>
    <button
      data-tip="${e(t(`Map presentation in 3D scene`),t(`Works best for heightmap`),t(`Cannot be used for editing`))}"
      id="viewMesh"
    >
      ${t(`3D scene`)}
    </button>
    <button data-tip="${e(t(`Project map on globe`),t(`Cannot be used for editing`))}" id="viewGlobe">${t(`Globe`)}</button>
  </div>
`;i(`layersContent`).innerHTML=d;function f(){i(`mapLayers`).replaceChildren(...o.all.flatMap(n=>{let r=c.get(n.id);if(!r)return[];let i=document.createElement(`li`);return i.dataset.layer=n.id,i.dataset.tip=e(t(`{{layer}}: click to toggle, drag to raise or lower the layer`,{layer:r.label}),t(`Ctrl + click to edit layer style`)),r.shortcut&&(i.dataset.shortcut=r.hint??r.shortcut.replace(`Key`,``)),i.innerHTML=s(r),i.classList.toggle(`buttonoff`,!o.isOn(n.id)),i.classList.toggle(`solid`,n.params.parent!==`viewbox`),[i]}))}i(`mapLayers`).addEventListener(`click`,e=>{let t=e.target.closest(`li`)?.dataset.layer;if(t&&o.has(t)){if(n(e)&&!options.map.viewOnly)return void Controllers.StyleEditor.open(t);o.toggle(t)}}),$(`#mapLayers`).sortable({items:`li:not(.solid)`,containment:`parent`,cancel:`.solid`,update:(e,t)=>{let n=t.item.data(`layer`),r=t.item.next().data(`layer`),i=o.has(n)?n:void 0,a=o.has(r)?r:void 0;i&&o.move(i,a)}}),o.subscribe(f),o.subscribe(()=>a.renderNow());var p;o.subscribe(()=>{r(`canvas3d`)&&(clearTimeout(p),p=window.setTimeout(()=>void Controllers.View3d.update(),400))}),f();export{u as n,l as t};