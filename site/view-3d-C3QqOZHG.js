const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["view-3d-renderer-DlG0ycT2.js","index-CuUJKJN8.js","options-tab-DhjqEPSL.js","utils-394NS37_.js","layers-CpGI7aJd.js","rolldown-runtime-XKyaHtl9.js","extent-V-JVJWfI.js","sin-DYm9hqTl.js","emblems-generator-B3pPl-l-.js","tooltips-7PimaK30.js","platform-BYwF3i_d.js","icons-list-BiXau1Li.js","emblems-6bhvewnB.js","natural-rv4BlkMW.js","unitUtils-B91DAWIJ.js","draw-landmass-DV6ieuK9.js","viewport-C0deAIKO.js","state-B2hBYDzv.js","controllers-lOfLnkBO.js","sum-BpJJqxFM.js","relief-generator-LqnpKd9V.js","style-choices-BWMuX7s6.js","quadtree-DDGKeVV-.js","layer-labels-B60lVHW8.js","layers-tab-Brzrj8zh.js","zoom-B1u9LW1L.js","dialog-helpers-kMHr89OS.js","schemaUtils-BT1J-24V.js","options-schema-B_ig2znS.js","cultures-generator-D2mn7qkG.js","validationUtils-uGrkd4tj.js","population-generator-C23gWLdN.js","median-v2puX28K.js","mean-4Awewi9R.js","heightUtils-BfaaFPbS.js","pins-BgZ3A9ES.js","generation-pipeline-DKnB7nUC.js","graph-override-D38xNizN.js","view-3d-options-DIuwGcyW.js","features-generator-CEtu9LJ4.js","labels-generator-ft6xLK0P.js","names-generator-CquhchJC.js","transports-generator-Dv1kk2bu.js","styles-2PRH8Ggz.js","view-mode-C_KDkpw9.js","id-labels-Bh86rU1j.js","notes-BeusfcIz.js","map-entities-NpzkL-1b.js","fonts-CgEouFVh.js","versioning-BZd9Nc6V.js","viewbox-events-DpWtTLWO.js","drag-C_reJWZK.js","highlight-DOx2q_4P.js","styles-legacy--bqN3hoN.js"])))=>i.map(i=>d[i]);
import{i as e,n as t,r as n}from"./index-CuUJKJN8.js";import{B as r,z as i}from"./utils-394NS37_.js";import{i as a}from"./tooltips-7PimaK30.js";import{i as o}from"./viewport-C0deAIKO.js";import{i as ee,r as s}from"./view-3d-options-DIuwGcyW.js";import{n as c}from"./view-mode-C_KDkpw9.js";var l=null,u=()=>l?Promise.resolve(l):e(()=>import(`./view-3d-renderer-DlG0ycT2.js`).then(e=>l=e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53])),te=(e,t=`viewMesh`)=>u().then(n=>n.create(e,t)),d=()=>u().then(e=>e.redraw()),f=()=>u().then(e=>e.update()),p=()=>u().then(e=>e.stop()),m=e=>u().then(t=>t.setSunColor(e)),h=e=>u().then(t=>t.setScale(e)),ne=e=>u().then(t=>t.setResolutionScale(e)),re=e=>u().then(t=>t.setLightness(e)),ie=(e,t,n)=>u().then(r=>r.setSun(e,t,n)),ae=e=>u().then(t=>t.setRotation(e)),oe=()=>u().then(e=>e.toggleLabels()),g=()=>u().then(e=>e.toggle3dSubdivision()),_=()=>u().then(e=>e.toggleErosion()),v=e=>u().then(t=>t.setErosionStrength(e)),y=e=>u().then(t=>t.setErosionRiverDepth(e)),b=e=>u().then(t=>t.setErosionDetail(e)),x=e=>u().then(t=>t.setErosionOctaves(e)),S=()=>u().then(e=>e.toggleSatellite()),C=()=>u().then(e=>e.toggleWireframe()),w=()=>u().then(e=>e.toggleSky()),T=e=>u().then(t=>t.setResolution(e)),E=(e,t)=>u().then(n=>n.setColors(e,t)),D=e=>u().then(t=>t.setTimeOfDay(e)),O=()=>u().then(e=>e.saveScreenshot()),k=()=>u().then(e=>e.saveOBJ()),A=()=>c(),j=e=>u().then(t=>t.isCached(e)),M=(e,t,n)=>u().then(r=>r.heightAt(e,t,n));function N(){r(`canvas3d`)&&(p(),r(`canvas3d`)?.remove(),r(`options3d`)&&$(`#options3d`).dialog(`close`),r(`preview3d`)&&$(`#preview3d`).dialog(`close`))}function P(){i(`viewMode`).querySelectorAll(`.pressed`).forEach(e=>{e.classList.remove(`pressed`)}),i(`heightmap3DView`).classList.remove(`pressed`),i(`viewStandard`).classList.add(`pressed`),N()}async function F(e){P(),i(`viewStandard`).classList.remove(`pressed`),i(e).classList.add(`pressed`);let t=document.createElement(`canvas`);if(t.id=`canvas3d`,t.dataset.type=e,e===`heightmap3DView`){let e=i(`preview3d`);t.width=parseFloat(e.style.width)||options.map.graph.width/3,t.height=t.width/(options.map.graph.width/options.map.graph.height),t.style.display=`block`}else t.width=o.width,t.height=o.height,t.style.position=`absolute`,t.style.display=`none`;await te(t,e)&&(t.style.display=`block`,t.onmouseenter=()=>{let e=[n(`Drag to pan`),n(`Scroll to zoom`),n(`Right-click drag to rotate`),n(`O to toggle options`)].join(` • `);+t.dataset.hovered>2?a(``):a(e),t.dataset.hovered=String((t.dataset.hovered|0)+1)},e===`heightmap3DView`?(I(),i(`preview3d`).appendChild(t),$(`#preview3d`).dialog({title:n(`3D Preview`),resizable:!0,position:{my:`left bottom`,at:`left+10 bottom-20`,of:`svg`},resizeStop:L,close:se})):document.body.insertBefore(t,i(`optionsContainer`)),R())}function I(){r(`preview3d`)?.remove(),i(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="preview3d" class="dialog stable" style="padding: 0px"></div>`)}function se(){$(`#preview3d`).dialog(`destroy`),i(`preview3d`).remove(),P()}function L(){let e=r(`canvas3d`);if(!e)return;let t=i(`preview3d`);e.width=parseFloat(t.style.width),e.height=parseFloat(t.style.height)-2,d()}function R(){r(`options3d`)?$(`#options3d`).dialog(`close`):(z(),$(`#options3d`).dialog({title:n(`3D mode settings`),resizable:!1,width:`fit-content`,position:{my:`right top`,at:`right-30 top+10`,of:`svg`,collision:`fit`},close:B}),H())}function z(){r(`options3d`)?.remove();let e=`<div id="options3d" class="dialog stable">
      <div id="options3dMesh" style="display: none">
        <div data-tip="${t(n(`Set map rotation speed`),n(`Set to 0 is you want to toggle off the rotation`))}">
          <div>${n(`Rotation`)}:</div>
          <input id="options3dMeshRotationRange" type="range" min="0" max="10" step=".1" />
          <input id="options3dMeshRotationNumber" type="number" min="0" max="10" step=".1" style="width: 4em" />
        </div>
        <div data-tip="${n(`Set height scale`)}">
          <div>${n(`Height scale`)}:</div>
          <input id="options3dScaleRange" type="range" min="0" max="100" />
          <input id="options3dScaleNumber" type="number" min="0" max="1000" style="width: 4em" />
        </div>
        <div data-tip="${n(`Set scene lightness`)}">
          <div>${n(`Lightness`)}:</div>
          <input id="options3dLightnessRange" type="range" min="0" max="100" />
          <input id="options3dLightnessNumber" type="number" min="0" max="500" style="width: 4em" />
        </div>
        <div data-tip="${n(`Set mesh texture resolution`)}">
          <div>${n(`Texture resolution`)}:</div>
          <select id="options3dMeshSkinResolution" style="width: 10em">
            <option value="512">512x512px</option>
            <option value="1024">1024x1024px</option>
            <option value="2048">2048x2048px</option>
            <option value="4096" selected>4096x4096px</option>
            <option value="8192">8192x8192px</option>
          </select>
        </div>
        <div data-tip="${n(`Quick preset lighting for different times of day`)}" style="margin-top: 0.4em">
          <label>${n(`Time of day`)}:</label>
          <select id="options3dTimeOfDay" style="width: 10em; margin-bottom: 0.3em">
            <option value="custom">${n(`Custom`)}</option>
            <option value="dawn">${n(`Dawn`)}</option>
            <option value="noon" selected>${n(`Noon`)}</option>
            <option value="evening">${n(`Evening`)}</option>
            <option value="night">${n(`Night`)}</option>
          </select>
        </div>
        <div data-tip="${n(`Set sun position (x, y) and color`)}" style="margin-top: 0.4em">
          <label>${n(`Sun position and color`)}:</label>
          <div style="display: flex; gap: 0.2em">
            <input id="options3dSunX" type="number" min="-2500" max="2500" step="100" style="width: 4.7em" />
            <input id="options3dSunY" type="number" min="0" max="5000" step="100" style="width: 4.7em" />
            <input id="options3dSunColor" type="color" style="padding: 0; height: 1.5em; border: none" />
          </div>
        </div>
        <div data-tip="${n(`Toggle 3d labels`)}" style="margin: 0.6em 0 0.3em -0.2em">
          <input id="options3dMeshLabels3d" class="checkbox" type="checkbox" />
          <label for="options3dMeshLabels3d" class="checkbox-label"><i>${n(`Show labels as sprites`)}</i></label>
        </div>
        <div data-tip="${n(`Toggle sky mode`)}" style="margin: 0.6em 0 0.3em -0.2em">
          <input id="options3dMeshSkyMode" class="checkbox" type="checkbox" />
          <label for="options3dMeshSkyMode" class="checkbox-label"><i>${n(`Show sky and extend water`)}</i></label>
        </div>
        <div
          data-tip="${n(`Increases the polygon count to smooth the sharp points. Please note that it can take some time to calculate`)}"
          style="margin: 0.6em 0 0.3em -0.2em"
        >
          <input id="options3dSubdivide" class="checkbox" type="checkbox" />
          <label for="options3dSubdivide" class="checkbox-label"
            ><i>${n(`Smooth geometry`)} <small style="color: darkred">[${n(`slow`)}]</small></i></label
          >
        </div>

        <div
          data-tip="${n(`Texture the terrain as a satellite image. Replaces the standard map texture`)}"
          style="margin: 0.6em 0 0.3em -0.2em"
        >
          <input id="options3dSatellite" class="checkbox" type="checkbox" />
          <label for="options3dSatellite" class="checkbox-label"><i>${n(`Satellite texture`)}</i></label>
        </div>

        <div
          data-tip="${n(`Bake procedural erosion detail into the 3D terrain. Visual only, the map data is not changed`)}"
          style="margin: 0.6em 0 0.3em -0.2em"
        >
          <input id="options3dErosion" class="checkbox" type="checkbox" />
          <label for="options3dErosion" class="checkbox-label"><i>${n(`Erode terrain`)}</i></label>
        </div>

        <div id="options3dErosionSection" style="display: none">
          <div data-tip="${n(`Set eroded mesh detail level (vertices on the long side)`)}">
            <div>${n(`Mesh detail`)}:</div>
            <select id="options3dErosionDetail" style="width: 10em">
              <option value="256">256</option>
              <option value="512">512</option>
              <option value="1024" selected>1024</option>
              <option value="2048">2048 [${n(`slow`)}]</option>
            </select>
          </div>

          <div data-tip="${n(`Set the strength of erosion gullies and ridges`)}">
            <div>${n(`Gully strength`)}:</div>
            <input id="options3dErosionStrengthRange" type="range" min="0" max="100" />
            <input id="options3dErosionStrengthNumber" type="number" min="0" max="100" style="width: 4em" />
          </div>

          <div data-tip="${n(`Set how deep the valleys are carved along the rivers`)}">
            <div>${n(`River valleys`)}:</div>
            <input id="options3dErosionRiverDepthRange" type="range" min="0" max="100" />
            <input id="options3dErosionRiverDepthNumber" type="number" min="0" max="100" style="width: 4em" />
          </div>

          <div data-tip="${n(`Set the number of erosion detail layers. More octaves add finer gullies`)}">
            <div>${n(`Detail octaves`)}:</div>
            <select id="options3dErosionOctaves" style="width: 6em">
              <option value="1">1</option>
              <option value="2" selected>2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </div>

        <div data-tip="${n(`Toggle wireframe mode`)}" style="margin: 0.6em 0 0.3em -0.2em">
          <input id="options3dMeshWireframeMode" class="checkbox" type="checkbox" />
          <label for="options3dMeshWireframeMode" class="checkbox-label"><i>${n(`Show wireframe`)}</i></label>
        </div>
        <div data-tip="${n(`Set sky and water color`)}" id="options3dColorSection" style="display: none">
          <span>${n(`Sky`)}:</span
          ><input
            id="options3dMeshSky"
            type="color"
            style="width: 4.4em; height: 1em; border: 0; padding: 0; margin: 0 0.2em"
          />
          <span>${n(`Water`)}:</span
          ><input
            id="options3dMeshWater"
            type="color"
            style="width: 4.4em; height: 1em; border: 0; padding: 0; margin: 0 0.2em"
          />
        </div>
      </div>
      <div id="options3dGlobe" style="display: none">
        <div data-tip="${t(n(`Set globe rotation speed`),n(`Set to 0 is you want to toggle off the rotation`))}">
          <div>${n(`Rotation`)}:</div>
          <input id="options3dGlobeRotationRange" type="range" min="0" max="10" step=".1" />
          <input id="options3dGlobeRotationNumber" type="number" min="0" max="10" step=".1" style="width: 4em" />
        </div>
        <div data-tip="${n(`Set globe texture resolution`)}">
          <div>${n(`Texture resolution`)}:</div>
          <select id="options3dGlobeResolution" style="width: 5em">
            <option value="0.5">0.5x</option>
            <option value="1">1x</option>
            <option value="2">2x</option>
            <option value="4">4x</option>
            <option value="8">8x</option>
          </select>
        </div>
        <div
          data-tip="${n(`Equirectangular projection is used: distortion is maximum on poles. Use map with aspect ratio 2:1 for best result`)}"
          style="font-style: italic; margin: 0.2em 0"
        >
          ${n(`Equirectangular projection is used`)}
        </div>
      </div>
      <div id="options3dBottom" style="margin-top: 0.2em">
        <button id="options3dUpdate" data-tip="${n(`Update the scene`)}" class="icon-cw"></button>
        <button
          data-tip="${n(`Configure world and map size and climate settings`)}"
          onclick="window.Controllers.WorldConfigurator.open()"
          class="icon-globe"
        ></button>
        <button id="options3dSave" data-tip="${n(`Save screenshot of the 3d scene`)}" class="icon-button-screenshot"></button>
        <button id="options3dOBJSave" data-tip="${n(`Save OBJ file of the 3d scene`)}" class="icon-download"></button>
      </div>
    </div>`;i(`dialogs`).insertAdjacentHTML(`beforeend`,e),i(`options3dUpdate`).addEventListener(`click`,()=>void f()),i(`options3dSave`).addEventListener(`click`,()=>void O()),i(`options3dOBJSave`).addEventListener(`click`,()=>void k()),i(`options3dScaleRange`).addEventListener(`input`,K),i(`options3dScaleNumber`).addEventListener(`change`,K),i(`options3dLightnessRange`).addEventListener(`input`,q),i(`options3dLightnessNumber`).addEventListener(`change`,q),i(`options3dSunX`).addEventListener(`change`,J),i(`options3dSunY`).addEventListener(`change`,J),i(`options3dMeshSkinResolution`).addEventListener(`change`,ce),i(`options3dMeshRotationRange`).addEventListener(`input`,Y),i(`options3dMeshRotationNumber`).addEventListener(`change`,Y),i(`options3dGlobeRotationRange`).addEventListener(`input`,Y),i(`options3dGlobeRotationNumber`).addEventListener(`change`,Y),i(`options3dMeshLabels3d`).addEventListener(`change`,()=>void oe()),i(`options3dMeshSkyMode`).addEventListener(`change`,me),i(`options3dMeshSky`).addEventListener(`input`,Q),i(`options3dMeshWater`).addEventListener(`input`,Q),i(`options3dGlobeResolution`).addEventListener(`change`,he),i(`options3dMeshWireframeMode`).addEventListener(`change`,()=>void C()),i(`options3dSunColor`).addEventListener(`input`,le),i(`options3dSubdivide`).addEventListener(`change`,()=>void g()),i(`options3dTimeOfDay`).addEventListener(`change`,G),i(`options3dErosion`).addEventListener(`change`,ue),i(`options3dErosionDetail`).addEventListener(`change`,de),i(`options3dErosionStrengthRange`).addEventListener(`change`,X),i(`options3dErosionStrengthNumber`).addEventListener(`change`,X),i(`options3dErosionRiverDepthRange`).addEventListener(`change`,Z),i(`options3dErosionRiverDepthNumber`).addEventListener(`change`,Z),i(`options3dErosionOctaves`).addEventListener(`change`,pe),i(`options3dSatellite`).addEventListener(`change`,fe)}function B(){$(`#options3d`).dialog(`destroy`),i(`options3d`).remove()}function V(e,t){i(e).value=String(t)}function H(){let e=options.app.threeD,t=r(`canvas3d`)?.dataset.type===`viewGlobe`;i(`options3dMesh`).style.display=t?`none`:`block`,i(`options3dGlobe`).style.display=t?`block`:`none`,i(`options3dOBJSave`).style.display=t?`none`:`inline-block`,V(`options3dScaleRange`,e.scale),V(`options3dScaleNumber`,e.scale),V(`options3dLightnessRange`,e.lightness*100),V(`options3dLightnessNumber`,e.lightness*100),V(`options3dSunX`,e.sun.x),V(`options3dSunY`,e.sun.y),V(`options3dMeshRotationRange`,e.rotateMesh),V(`options3dMeshRotationNumber`,e.rotateMesh),V(`options3dMeshSkinResolution`,e.resolutionScale),V(`options3dGlobeRotationRange`,e.rotateGlobe),V(`options3dGlobeRotationNumber`,e.rotateGlobe),V(`options3dMeshLabels3d`,String(e.labels3d)),V(`options3dMeshSkyMode`,String(e.extendedWater)),i(`options3dColorSection`).style.display=e.extendedWater?`block`:`none`,V(`options3dMeshSky`,e.skyColor),V(`options3dMeshWater`,e.waterColor),V(`options3dGlobeResolution`,s(e.resolutionScale)),V(`options3dSunColor`,e.sunColor),V(`options3dSubdivide`,String(e.subdivide)),i(`options3dSubdivide`).disabled=!!e.erosion,i(`options3dErosion`).checked=!!e.erosion,i(`options3dErosionSection`).style.display=e.erosion?`block`:`none`,V(`options3dErosionDetail`,e.erosionDetail),V(`options3dErosionStrengthRange`,e.erosionStrength),V(`options3dErosionStrengthNumber`,e.erosionStrength),V(`options3dErosionRiverDepthRange`,e.erosionRiverDepth),V(`options3dErosionRiverDepthNumber`,e.erosionRiverDepth),V(`options3dErosionOctaves`,e.erosionOctaves),i(`options3dSatellite`).checked=!!e.satellite,U()}function U(){let e=i(`options3dTimeOfDay`),t=options.app.threeD,n=`custom`;for(let[e,r]of Object.entries(ee))if(r.sun.x===t.sun.x&&r.sun.y===t.sun.y&&r.sun.z===t.sun.z&&r.sunColor===t.sunColor&&Math.abs(r.lightness-t.lightness)<.05){n=e;break}e.value=n}function W(){let e=i(`options3dTimeOfDay`);e.value!==`custom`&&(e.value=`custom`)}function G(){this.value!==`custom`&&(D(this.value),H())}function K(){V(`options3dScaleRange`,this.value),V(`options3dScaleNumber`,this.value),h(+this.value)}function ce(){V(`options3dMeshSkinResolution`,this.value),ne(+this.value)}function q(){V(`options3dLightnessRange`,this.value),V(`options3dLightnessNumber`,this.value),re(this.value/100),W()}function le(){m(i(`options3dSunColor`).value),W()}function J(){ie(+i(`options3dSunX`).value,+i(`options3dSunY`).value),W()}function Y(){let e=this.nextElementSibling||this.previousElementSibling;e&&(e.value=this.value),ae(+this.value)}function ue(){let e=!options.app.threeD.erosion;i(`options3dErosionSection`).style.display=e?`block`:`none`,i(`options3dSubdivide`).disabled=e,e&&a(n(`Baking eroded terrain...`),!1,`warn`,4e3),_()}function de(){b(+this.value)}function X(){V(`options3dErosionStrengthRange`,this.value),V(`options3dErosionStrengthNumber`,this.value),v(+this.value)}function Z(){V(`options3dErosionRiverDepthRange`,this.value),V(`options3dErosionRiverDepthNumber`,this.value),y(+this.value)}function fe(){options.app.threeD.satellite||a(n(`Baking satellite texture...`),!1,`warn`,4e3),S()}function pe(){x(+this.value)}function me(){let e=options.app.threeD.extendedWater;i(`options3dColorSection`).style.display=e?`none`:`block`,w()}function Q(){E(i(`options3dMeshSky`).value,i(`options3dMeshWater`).value)}function he(){T(+this.value)}var ge={open:F,enterStandard:P,toggleOptions:R,redraw:d,update:f,isOn:A,isCached:j,heightAt:M};export{ge as View3d};