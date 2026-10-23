import{C as e,n as t,r as n}from"./index-CuUJKJN8.js";import{C as r,S as i,T as a,n as o,s,t as c,x as l}from"./options-tab-DhjqEPSL.js";import{z as u}from"./utils-394NS37_.js";import{t as d}from"./layers-CpGI7aJd.js";import{i as f}from"./tooltips-7PimaK30.js";import{i as p}from"./dialog-helpers-kMHr89OS.js";import{u as m}from"./options-schema-B_ig2znS.js";import{r as h}from"./generation-pipeline-DKnB7nUC.js";import{t as g}from"./map-restoration-DNmGwu8D.js";import{c as _}from"./app-C3meBrse.js";var v=!1,y=0,b=0;function x(){S(),C(),T(),$(`#transformTool`).dialog({title:n(`Transform Map`),resizable:!1,position:{my:`center`,at:`center`,of:`svg`},close:w,buttons:{[n(`Transform`)]:function(){M(),$(this).dialog(`close`)},[n(`Cancel`)]:function(){$(this).dialog(`close`)}}})}function S(){p(`transformTool`);let e=String(options.generation.graph.density),t=m[+e],r=`<div id="transformTool" class="dialog">
    <div style="padding-top: 0.5em; width: 40em; font-weight: bold">
      ${n(`This operation is destructive and irreversible. It will create a completely new map based on the current one. Don't forget to save the .map file to your machine first!`)}
    </div>
    <div
      id="transformToolBody"
      style="
        padding: 0.5em 0;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(5, 1fr);
        align-items: center;
      "
    >
      <div>${n(`Points number`)}</div>
      <div>
        <input id="transformPointsInput" type="range" min="1" max="13" value="${e}" />
        <output id="transformPointsFormatted" style="color: ${c(t)}">${t/1e3}K</output>
      </div>
      <div>${n(`Shift`)}</div>
      <div>
        <label>X: <input id="transformShiftX" type="number" size="4" value="0" /></label>
        <label>Y: <input id="transformShiftY" type="number" size="4" value="0" /></label>
      </div>
      <div>${n(`Rotate`)}</div>
      <div>
        <input id="transformAngleInput" type="range" min="0" max="359" value="0" />
        <output id="transformAngleOutput">0</output>°
      </div>
      <div>${n(`Scale`)}</div>
      <div>
        <input id="transformScaleInput" type="range" min="-25" max="25" value="0" />
        <output id="transformScaleResult">1</output>x
      </div>
      <div>${n(`Mirror`)}</div>
      <div style="display: flex; gap: 0.5em">
        <input type="checkbox" class="checkbox" id="transformMirrorH" />
        <label for="transformMirrorH" class="checkbox-label">${n(`horizontally`)}</label>
        <input type="checkbox" class="checkbox" id="transformMirrorV" />
        <label for="transformMirrorV" class="checkbox-label">${n(`vertically`)}</label>
      </div>
    </div>
    <div id="transformPreview" style="position: relative; overflow: hidden; outline: 1px solid #666">
      <canvas id="transformPreviewCanvas" style="position: absolute; transform-origin: center"></canvas>
    </div>
  </div>`;u(`dialogs`).insertAdjacentHTML(`beforeend`,r)}function C(){u(`transformToolBody`).addEventListener(`input`,D),u(`transformPointsInput`).oninput=E;let e=u(`transformPreview`);e.addEventListener(`mousedown`,O),e.addEventListener(`mouseup`,k),e.addEventListener(`mousemove`,A),e.addEventListener(`wheel`,j)}function w(){v=!1,p(`transformTool`)}async function T(){let e=Math.min(400,window.innerWidth*.5),t=e/options.map.graph.width,n=options.map.graph.height*t;u(`transformPreview`).style.width=`${e}px`,u(`transformPreview`).style.height=`${n}px`;let r=await window.Services.ExportMap.getMapURL(`png`,{noWater:!0,fullMap:!0,noLabels:!0,noScaleBar:!0,noVignette:!0,noIce:!0}),i=new Image;i.src=r,i.onload=()=>{let t=u(`transformPreviewCanvas`);t.style.width=`${e}px`,t.style.height=`${n}px`,t.width=e*4,t.height=n*4,t.getContext(`2d`)?.drawImage(i,0,0,e*4,n*4)}}function E(e){let t=m[+e.target.value],n=u(`transformPointsFormatted`);n.value=`${t/1e3}K`,n.style.color=c(t)}function D(){let t=Math.min(400,window.innerWidth*.5)/options.map.graph.width,n=u(`transformAngleInput`).value;u(`transformAngleOutput`).value=n;let r=n/180*Math.PI,i=+u(`transformShiftX`).value,a=+u(`transformShiftY`).value,o=u(`transformMirrorH`).checked,s=u(`transformMirrorV`).checked,c=e(1.0965**u(`transformScaleInput`).value,2);u(`transformScaleResult`).value=String(c),u(`transformPreviewCanvas`).style.transform=`
    translate(${i*t}px, ${a*t}px)
    scale(${o?-c:c}, ${s?-c:c})
    rotate(${r}rad)
  `}function O(e){let t=Math.min(400,window.innerWidth*.5)/options.map.graph.width;v=!0;let n=+u(`transformShiftX`).value,r=+u(`transformShiftY`).value;y=n-e.clientX/t,b=r-e.clientY/t}function k(){v=!1}function A(e){if(!v)return;e.preventDefault();let t=Math.min(400,window.innerWidth*.5)/options.map.graph.width;u(`transformShiftX`).value=String(Math.round(y+e.clientX/t)),u(`transformShiftY`).value=String(Math.round(b+e.clientY/t)),D()}function j(e){let t=u(`transformScaleInput`);t.value=String(t.valueAsNumber-Math.sign(e.deltaY)),D()}function M(){INFO&&console.group(`transformMap`);try{g.transaction(()=>{let e=u(`transformPointsInput`).value;e!==String(options.generation.graph.density)&&o(+e);let[t,n]=N();l(),i(),resetZoom(0),h(),_.process({projection:t,inverse:n,scale:1})})}catch(e){ERROR&&console.error(e),r();let i=n(`Failed to transform the map: {{error}}`,{error:e.message});f(t(i,n(`The map is unchanged`)),!1,`error`,6e3),INFO&&console.groupEnd();return}d.drawAll(),s(),a(),INFO&&console.groupEnd()}function N(){let e=options.map.graph.width/2,t=options.map.graph.height/2,n=+u(`transformShiftX`).value,r=+u(`transformShiftY`).value,i=u(`transformAngleInput`).value/180*Math.PI,a=Math.cos(i),o=Math.sin(i),s=+u(`transformScaleResult`).value,c=u(`transformMirrorH`).checked,l=u(`transformMirrorV`).checked;function d(u,d){return u-=e,d-=t,s!==1&&(u*=s,d*=s),i&&([u,d]=[u*a-d*o,u*o+d*a]),c&&(u=-u),l&&(d=-d),[u+e+n,d+t+r]}function f(u,d){return u-=e+n,d-=t+r,l&&(d=-d),c&&(u=-u),i!==0&&([u,d]=[u*a+d*o,-u*o+d*a]),s!==1&&(u/=s,d/=s),[u+e,d+t]}return[d,f]}var P={open:x};export{P as TransformTool};