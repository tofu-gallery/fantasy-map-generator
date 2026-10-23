import{C as e,r as t,x as n}from"./index-CuUJKJN8.js";import{B as r,z as i}from"./utils-394NS37_.js";import{i as a}from"./viewport-C0deAIKO.js";import{i as o,n as s}from"./dialog-helpers-kMHr89OS.js";function c(){s(`#minimap, .stable`),l(),f(),$(`#minimap`).dialog({title:t(`Minimap`),resizable:!1,width:`auto`,position:{my:`left bottom`,at:`left+10 bottom-25`,of:`svg`,collision:`fit`},open:function(){$(this).parent().addClass(`minimap-dialog`)},close:u})}function l(){o(`minimap`);let e=`<div id="minimap" class="dialog stable">
      <div id="minimapViewportWrap">
        <svg id="minimapSurface" preserveAspectRatio="xMidYMid meet" aria-label="${t(`Map minimap`)}">
          <use id="minimapMapUse" href="#viewbox"></use>
          <rect id="minimapViewport"></rect>
        </svg>
      </div>
    </div>`;i(`dialogs`).insertAdjacentHTML(`beforeend`,e),i(`minimapSurface`).addEventListener(`click`,d),r(`minimapStyles`)?.remove();let n=document.createElement(`style`);n.id=`minimapStyles`,n.textContent=`
    .minimap-dialog .ui-dialog-content {
      padding: 0 !important;
      overflow: hidden;
    }

    #minimap {
      padding: 0 !important;
      background: transparent;
    }

    #minimapViewportWrap {
      position: relative;
      width: 20em;
      border: 0;
    }

    #minimapSurface {
      display: block;
      width: 100%;
      height: auto;
      cursor: crosshair;
    }

    #minimapMapUse {
      pointer-events: none;
    }

    #minimapViewport {
      fill: rgba(190, 255, 137, 0.1);
      stroke: #624954;
      stroke-width: 1;
      stroke-dasharray: 4;
      vector-effect: non-scaling-stroke;
      pointer-events: none;
    }
  `,document.head.append(n)}function u(){$(`#minimap`).dialog(`destroy`),i(`minimap`).remove(),r(`minimapStyles`)?.remove()}function d(e){let t=r(`minimapSurface`);if(!t)return;let i=t.createSVGPoint();i.x=e.clientX,i.y=e.clientY;let o=t.getScreenCTM();if(!o)return;let s=i.matrixTransform(o.inverse()),c=n(s.x,0,options.map.graph.width),l=n(s.y,0,options.map.graph.height);zoomTo(c,l,a.scale,450)}function f(){let t=r(`minimapSurface`),n=r(`minimapViewport`),i=r(`minimapMapUse`);if(!t||!n||!i)return;t.setAttribute(`viewBox`,`0 0 ${options.map.graph.width} ${options.map.graph.height}`);let o=a.scale?1/a.scale:1;i.setAttribute(`transform`,`translate(${e(-a.x*o,3)} ${e(-a.y*o,3)}) scale(${e(o,6)})`);let s=Math.max(0,-a.x*o),c=Math.max(0,-a.y*o),l=Math.min(options.map.graph.width,s+a.width*o),u=Math.min(options.map.graph.height,c+a.height*o);n.setAttribute(`x`,String(e(s,3))),n.setAttribute(`y`,String(e(c,3))),n.setAttribute(`width`,String(e(Math.max(0,l-s),3))),n.setAttribute(`height`,String(e(Math.max(0,u-c),3)))}window.updateMinimap=f;var p={open:c};export{p as Minimap};