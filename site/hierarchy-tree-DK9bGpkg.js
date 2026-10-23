import{f as e,n as t,r as n,x as r}from"./index-CuUJKJN8.js";import{St as i,dn as a,tt as o,z as s}from"./utils-394NS37_.js";import{t as c}from"./mean-4Awewi9R.js";import{t as l}from"./drag-C_reJWZK.js";import{i as u,t as d}from"./stratify-CGdiYggi.js";import{i as f}from"./tooltips-7PimaK30.js";import{n as p}from"./dialog-helpers-kMHr89OS.js";function m(e,t){return e.parent===t.parent?1:2}function h(e){var t=e.children;return t?t[0]:e.t}function g(e){var t=e.children;return t?t[t.length-1]:e.t}function _(e,t,n){var r=n/(t.i-e.i);t.c-=r,t.s+=n,e.c+=r,t.z+=n,t.m+=n}function v(e){for(var t=0,n=0,r=e.children,i=r.length,a;--i>=0;)a=r[i],a.z+=t,a.m+=t,t+=a.s+(n+=a.c)}function y(e,t,n){return e.a.parent===t.parent?e.a:n}function b(e,t){this._=e,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=t}b.prototype=Object.create(u.prototype);function x(e){for(var t=new b(e,0),n,r=[t],i,a,o,s;n=r.pop();)if(a=n._.children)for(n.children=Array(s=a.length),o=s-1;o>=0;--o)r.push(i=n.children[o]=new b(a[o],o)),i.parent=n;return(t.parent=new b(null,0)).children=[t],t}function S(){var e=m,t=1,n=1,r=null;function i(i){var s=x(i);if(s.eachAfter(a),s.parent.m=-s.z,s.eachBefore(o),r)i.eachBefore(c);else{var l=i,u=i,d=i;i.eachBefore(function(e){e.x<l.x&&(l=e),e.x>u.x&&(u=e),e.depth>d.depth&&(d=e)});var f=l===u?1:e(l,u)/2,p=f-l.x,m=t/(u.x+f+p),h=n/(d.depth||1);i.eachBefore(function(e){e.x=(e.x+p)*m,e.y=e.depth*h})}return i}function a(t){var n=t.children,r=t.parent.children,i=t.i?r[t.i-1]:null;if(n){v(t);var a=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+e(t._,i._),t.m=t.z-a):t.z=a}else i&&(t.z=i.z+e(t._,i._));t.parent.A=s(t,i,t.parent.A||r[0])}function o(e){e._.x=e.z+e.parent.m,e.m+=e.parent.m}function s(t,n,r){if(n){for(var i=t,a=t,o=n,s=i.parent.children[0],c=i.m,l=a.m,u=o.m,d=s.m,f;o=g(o),i=h(i),o&&i;)s=h(s),a=g(a),a.a=t,f=o.z+u-i.z-c+e(o._,i._),f>0&&(_(y(o,t,r),t,f),c+=f,l+=f),u+=o.m,c+=i.m,d+=s.m,l+=a.m;o&&!g(a)&&(a.t=o,a.m+=u-l),i&&!h(s)&&(s.t=i,s.m+=c-d,r=t)}return r}function c(e){e.x*=t,e.y=e.depth*n}return i.separation=function(t){return arguments.length?(e=t,i):e},i.size=function(e){return arguments.length?(r=!1,t=+e[0],n=+e[1],i):r?null:[t,n]},i.nodeSize=function(e){return arguments.length?(r=!0,t=+e[0],n=+e[1],i):r?[t,n]:null},i}B(),V();var C={top:10,right:10,bottom:-5,left:10},w=i().scaleExtent([.2,1.5]).on(`zoom`,e=>D.attr(`transform`,e.transform.toString())),T,E=a(`#hierarchyTree > svg`).call(w),D=E.select(`g#hierarchyTree_viewbox`),O=D.select(`g#hierarchyTree_linksPrimary`),k=D.select(`g#hierarchyTree_linksSecondary`),A=D.select(`g#hierarchyTree_nodes`),j=D.select(`path#hierarchyTree_dragLine`),M,N,P,F,I,L,R;function ee(e){if(p(`#hierarchyTree, .stable`),M=e.data,N=e.type===`cultures`?Cultures:Religions,P=H(M),P.filter(e=>!e.shadow).length<3){f(e.type===`cultures`?n(`Not enough cultures to show hierarchy`):n(`Not enough religions to show hierarchy`),!1,`error`),z();return}F=e.onNodeEnter,I=e.onNodeLeave,L=e.getDescription,R=e.getShape;let t=W();if(!t){z();return}let i=t.leaves().length*50,a=t.height*50,o=i-C.left-C.right,s=a+30-C.top-C.bottom,c=S().size([o,s]),l=r(i,300,innerWidth*.75),u=r(a,200,innerHeight*.75);w.extent([[0,0],[l,u]]),E.attr(`viewBox`,`0, 0, ${l}, ${u}`),$(`#hierarchyTree`).dialog({title:e.type===`cultures`?n(`Cultures tree`):n(`Religions tree`),position:{my:`left center`,at:`left+10 center`,of:`svg`},width:l,close:z}),te(t,c)}function z(){T=null,M=null,P=null,F=null,I=null,L=null,R=null}function B(){let e=document.createElement(`style`);e.textContent=`
    #hierarchyTree_selectedOrigins > button {
      margin: 0 2px;
    }

    #hierarchyTree {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    #hierarchyTree > svg {
      height: 100%;
    }

    .hierarchyTree_selectedOrigins {
      margin-right: 15px;
    }

    .hierarchyTree_selectedOrigin {
      border: 1px solid #aaa;
      background: none;
      padding: 1px 4px;
    }

    .hierarchyTree_selectedOrigin:hover {
      border: 1px solid #333;
    }

    .hierarchyTree_selectedOrigin::after {
      content: "✕";
      margin-left: 8px;
      color: #999;
    }

    .hierarchyTree_selectedOrigin:hover:after {
      color: #333;
    }

    #hierarchyTree_originSelector {
      display: none;
    }

    #hierarchyTree_originSelector > form > div {
      padding: 0.3em;
      margin: 1px 0;
      border-radius: 1em;
    }

    #hierarchyTree_originSelector > form > div:hover {
      background-color: #ddd;
    }

    #hierarchyTree_originSelector > form > div[checked] {
      background-color: #c6d6d6;
    }

    #hierarchyTree_nodes > g > text {
      pointer-events: none;
      stroke: none;
      font-size: 11px;
    }

    #hierarchyTree_nodes > g.selected {
      stroke: #c13119;
      stroke-width: 1;
      cursor: move;
    }

    #hierarchyTree_dragLine {
      marker-end: url(#end-arrow);
      stroke: #333333;
      stroke-dasharray: 5;
      stroke-dashoffset: 1000;
      animation: dash 80s linear backwards;
    }
  `,document.head.appendChild(e)}function V(){let e=`<div id="hierarchyTree" class="dialog" style="overflow: hidden;">
    <svg>
      <g id="hierarchyTree_viewbox" style="text-anchor: middle; dominant-baseline: central">
        <g transform="translate(10, -45)">
          <g id="hierarchyTree_links" fill="none" stroke="#aaa">
            <g id="hierarchyTree_linksPrimary"></g>
            <g id="hierarchyTree_linksSecondary" stroke-dasharray="1"></g>
          </g>
          <g id="hierarchyTree_nodes"></g>
          <path id="hierarchyTree_dragLine" path='' />
        </g>
      </g>
    </svg>

    <div id="hierarchyTree_details" class='chartInfo'>
      <div id='hierarchyTree_infoLine' style="display: block">&#8205;</div>
      <div id='hierarchyTree_selected' style="display: none">
        <span><span id='hierarchyTree_selectedName'></span>. </span>
        <span data-name="Type short name (abbreviation)">${n(`Abbreviation`)}: <input id='hierarchyTree_selectedCode' type='text' maxlength='3' size='3' /></span>
        <span>${n(`Origins`)}: <span id='hierarchyTree_selectedOrigins'></span></span>
        <button data-tip='Edit this node's origins' class="hierarchyTree_selectedButton" id='hierarchyTree_selectedSelectButton'>Edit</button>
        <button data-tip='Unselect this node' class="hierarchyTree_selectedButton" id='hierarchyTree_selectedCloseButton'>Unselect</button>
      </div>
    </div>
    <div id="hierarchyTree_originSelector"></div>
  </div>`;s(`dialogs`).insertAdjacentHTML(`beforeend`,e)}function H(e){let t=e.filter(e=>!e.removed).map(e=>({...e,origins:[...e.origins||[]]}));for(let e of t)e.i===0?e.origins=[null]:e.origins.length&&t.find(t=>e.origins[0]===t.i)||(e.origins=[0]),e.origins=e.origins.filter((e,n)=>!n||t.some(t=>t.i&&t.i===e));let n=new Map;for(let e of t){if(!e.i)continue;let t=typeof e.ancestry==`string`?e.ancestry.trim():``;t&&(n.has(t)||n.set(t,[]),n.get(t).push(e))}if(n.size>0){let e=-1,r=[];for(let[i,a]of n.entries()){let n=a.filter(e=>e.origins[0]===0);if(!n.length)continue;let s=e--,c=[...t.map(e=>e.code).filter(Boolean),...r.map(e=>e.code).filter(Boolean)],l={i:s,name:i,code:o(i,c),color:`#ffffff`,type:`Generic`,origins:[0],shadow:!0,ancestry:i};r.push(l);for(let e of n)e.origins[0]=s}t.push(...r)}return t}function U(e,t){try{let n=t.map(e=>Math.max(e,0)),r=[...new Set(n)],i=r.length>1?r.filter(Boolean):r;return N.setOrigins(e,i.length?i:[0]),!0}catch(e){return f(e instanceof Error?e.message:String(e),!1,`error`,4e3),!1}}function W(){try{let e=d().id(e=>String(e.i)).parentId(e=>e.origins[0]==null?null:String(e.origins[0]))(P);return T=e,e}catch(r){return f(t(n(`Hierarchy data issue`),e(String(r))),!1,`error`,6e3),T}}function G(e){return`${e.source.id}-${e.target.id}`}function K(e){return e.id}function q(e){let{source:{x:t,y:n},target:{x:r,y:i}}=e;return`M${t},${n} C${t},${(n*3+i)/4} ${r},${(n*2+i)/3} ${r},${i}`}function J(e){let t=e.descendants(),n=[];for(let e of t){let r=e.data.origins;for(let i=1;i<r.length;i++){let a=t.find(e=>e.data.i===r[i]);a&&n.push({source:a,target:e})}}return n}var Y={undefined:`M5,0A5,5,0,1,1,-5,0A5,5,0,1,1,5,0`,circle:`M11.3,0A11.3,11.3,0,1,1,-11.3,0A11.3,11.3,0,1,1,11.3,0`,square:`M-11,-11h22v22h-22Z`,hexagon:`M-6.5,-11.26l13,0l6.5,11.26l-6.5,11.26l-13,0l-6.5,-11.26Z`,diamond:`M0,-14L14,0L0,14L-14,0Z`,concave:`M-11,-11l11,2l11,-2l-2,11l2,11l-11,-2l-11,2l2,-11Z`,octagon:`M-4.97,-12.01 l9.95,0 l7.04,7.04 l0,9.95 l-7.04,7.04 l-9.95,0 l-7.04,-7.04 l0,-9.95Z`,pentagon:`M0,-14l14,11l-6,14h-16l-6,-14Z`},X=e=>{let t=e.descendants(),n=t.flatMap(({data:e})=>e.origins.slice(1));if(n.length>0)return c(n)??0;if(e.data.shadow){let e=t.filter(e=>!e.data.shadow&&e.data.i>0);if(e.length)return Math.min(...e.map(e=>e.data.i))}return e.data.i};function te(e,t){t(e.sort((e,t)=>X(e)-X(t))),O.selectAll(`path`).data(e.links(),G).join(`path`).attr(`d`,q),k.selectAll(`path`).data(J(e),G).join(`path`).attr(`d`,q);let n=A.selectAll(`g`).data(e.descendants(),K).join(`g`).attr(`data-id`,e=>e.data.i).attr(`stroke`,`#333`).attr(`transform`,e=>`translate(${e.x}, ${e.y})`).on(`mouseenter`,re).on(`mouseleave`,ie).on(`click`,(e,t)=>Q(t)).call(l().on(`start`,ae));n.selectAll(`path`).data(e=>[e]).join(`path`).attr(`d`,e=>Y[R(e.data)??`undefined`]).attr(`fill`,e=>e.data.color||`#ffffff`).attr(`stroke-dasharray`,e=>e.data.cells?`none`:`1`),n.selectAll(`text`).data(e=>[e]).join(`text`).text(e=>e.data.code||``)}function ne(e,t){e.x=t.x,e.y=t.y;for(let n of e.descendants()){let e=t.descendants().find(e=>e.data.i===n.data.i);e&&(n.x=e.x,n.y=e.y)}}function Z(){let e=T;P=H(M);let t=W();ne(t,e);let n=1e3,r=e=>e.append(`path`).attr(`d`,q).attr(`opacity`,0).call(e=>e.transition().duration(50).attr(`opacity`,1)),i=e=>e.call(e=>e.transition().duration(50).attr(`d`,q)),a=e=>e.call(e=>e.transition().duration(50).attr(`opacity`,0).remove());O.selectAll(`path`).data(t.links(),G).join(r,i,a),k.selectAll(`path`).data(J(t),G).join(r,i,a);let o=t.leaves().length*50,s=t.height*50,c=o-C.left-C.right,l=s+30-C.top-C.bottom;S().size([c,l])(t.sort((e,t)=>X(e)-X(t))),O.selectAll(`path`).data(t.links(),G).transition().duration(n).delay(50).attr(`d`,q),k.selectAll(`path`).data(J(t),G).transition().duration(n).delay(50).attr(`d`,q),A.selectAll(`g`).data(t.descendants(),K).transition().delay(50).duration(n).attr(`transform`,e=>`translate(${e.x},${e.y})`)}function Q(e){let r=e.data;if(!r.i||r.shadow){A.selectAll(`g`).style(`outline`,`none`),s(`hierarchyTree_selected`).style.display=`none`,s(`hierarchyTree_infoLine`).style.display=`block`;return}let i=A.select(`g[data-id="${e.id}"]`);A.selectAll(`g`).style(`outline`,`none`),i.style(`outline`,`1px solid #c13119`),s(`hierarchyTree_selected`).style.display=`block`,s(`hierarchyTree_infoLine`).style.display=`none`,s(`hierarchyTree_selectedName`).textContent=r.name,s(`hierarchyTree_selectedCode`).value=r.code||``,s(`hierarchyTree_selectedCode`).onchange=function(){let e=this;if(e.value.length>3)return f(n(`Abbreviation must be 3 characters or less`),!1,`error`,3e3);if(!e.value.length)return f(n(`Abbreviation cannot be empty`),!1,`error`,3e3);N.setCode(r.i,e.value),i.select(`text`).text(r.code||``)};let a=()=>{s(`hierarchyTree_selectedOrigins`).innerHTML=r.origins.filter(e=>e&&e>0).map((e,r)=>{let{name:i,code:a}=P.find(t=>t.i===e)||{};return`<button data-id="${e}" class="hierarchyTree_selectedButton hierarchyTree_selectedOrigin" data-tip="${t(n(r?`Secondary origin: {{name}}`:`Primary origin: {{name}}`,{name:i}),n(`Click to remove link to that origin`))}">${a??i??e}</button>`}).join(``),s(`hierarchyTree_selectedOrigins`).onclick=e=>{let t=e.target;if(t.tagName!==`BUTTON`)return;let n=Number(t.dataset.id),i=r.origins.filter(e=>e!==n);U(r.i,i.length?i:[0])&&(t.remove(),Z())}};a(),s(`hierarchyTree_selectedSelectButton`).onclick=()=>{let t=r.origins,i=e.descendants().map(e=>e.data.i),o=P.filter(({i:e,shadow:t})=>!i.includes(e)&&!t).map(({i:e,name:r,code:i,color:a})=>{let o=t[0]===e||e===0&&(t[0]==null||t[0]<=0)?`checked`:``,s=t.includes(e)?`checked`:``;return e===0?`
        <div ${s}>
          <input data-tip="${n(`Set as primary origin`)}" type="radio" name="primary" value="${e}" ${o} />
          ${n(`Top level`)}
        </div>
      `:`
        <div ${s}>
          <input data-tip="${n(`Set as primary origin`)}" type="radio" name="primary" value="${e}" ${o} />
          <input data-id="${e}" id="selectElementOrigin${e}" class="checkbox" type="checkbox" ${s} />
          <label data-tip="${n(`Check to set as a secondary origin`)}" for="selectElementOrigin${e}" class="checkbox-label">
            <fill-box fill="${a}" size=".8em" disabled></fill-box>
            ${i}: ${r}
          </label>
        </div>
      `});s(`hierarchyTree_originSelector`).innerHTML=`
      <form style="max-height: 35vh">
        ${o.join(``)}
      </form>
    `,$(`#hierarchyTree_originSelector`).dialog({title:n(`Select origins`),position:{my:`center`,at:`center`,of:`svg`},buttons:{[n(`Select`)]:()=>{$(`#hierarchyTree_originSelector`).dialog(`close`);let e=s(`hierarchyTree_originSelector`),t=e.querySelector(`input[type='radio']:checked`),n=e.querySelectorAll(`input[type='checkbox']:checked`),i=t?Number(t.value):0,o=Array.from(n).map(e=>Number(e.dataset.id)).filter(e=>e!==i);U(r.i,[i,...o])&&(Z(),a())},[n(`Cancel`)]:()=>{$(`#hierarchyTree_originSelector`).dialog(`close`)}}})},s(`hierarchyTree_selectedCloseButton`).onclick=()=>{i.style(`outline`,`none`),s(`hierarchyTree_selected`).style.display=`none`,s(`hierarchyTree_infoLine`).style.display=`block`}}function re(e,t){t.depth!==0&&(this.classList.add(`selected`),F(t),s(`hierarchyTree_infoLine`).textContent=L(t.data),t.data.shadow?f(n(`Ancestry`)):f(n(`Drag to other node to add parent, click to edit`)))}function ie(e,t){this.classList.remove(`selected`),I(t),s(`hierarchyTree_infoLine`).innerHTML=`&#8205;`,f(``)}function ae(e,t){t.data.i&&!t.data.shadow&&(j.attr(`d`,`M${t.x},${t.y}L${t.x},${t.y}`),e.on(`drag`,e=>{j.attr(`d`,`M${t.x},${t.y}L${e.x},${e.y}`)}),e.on(`end`,()=>{j.attr(`d`,``);let e=A.select(`g.selected`);if(!e.size())return;let n=t.data.i,r=e.datum()?.data;if(!r)return;let i=!!r.shadow,a=i?0:r.i;if(n===a||t.data.origins.includes(r.i)||t.descendants().some(e=>e.data.i===r.i))return;let o=M.find(({i:e})=>e===n);if(o){if(i||a===0){if(!U(n,[0]))return}else if(!U(n,[...o.origins[0]===0?[]:o.origins,a]))return;Q(t),Z()}}))}var oe={open:ee};export{oe as HierarchyTree};