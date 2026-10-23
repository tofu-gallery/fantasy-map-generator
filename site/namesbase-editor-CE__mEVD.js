import{C as e,f as t,n,r}from"./index-CuUJKJN8.js";import{M as i,P as a,_n as o,f as s,m as c,p as l,vn as u,xt as d,y as f,z as p}from"./utils-394NS37_.js";import{t as m}from"./median-v2puX28K.js";import{t as h}from"./mean-4Awewi9R.js";import{i as g}from"./tooltips-7PimaK30.js";import{i as _,n as v,r as y}from"./dialog-helpers-kMHr89OS.js";var b=null;function x(){customization||(v(`#namesbaseEditor, .stable`),S(),w(),T(),$(`#namesbaseEditor`).dialog({title:r(`Namesbase Editor`),width:`60vw`,position:{my:`center`,at:`center`,of:`svg`},close:C}))}function S(){_(`namesbaseEditor`);let e=`<div id="namesbaseEditor" class="dialog stable textual">
      <div id="namesbaseBasesTop">
        <span>${r(`Select base`)}: </span>
        <select id="namesbaseSelect" data-tip="${r(`Select base to edit`)}" style="width: 12em" value="0"></select>
        <span style="margin-left: 2px">${r(`Names data`)}: </span>
      </div>
      <div id="namesbaseBody" style="margin-block: 2px; width: auto">
        <textarea
          id="namesbaseTextarea"
          data-base="0"
          rows="13"
          data-tip="${r(`Names data: a comma separated list of source names used for names generation`)}"
          placeholder="${r(`Provide a names data: a comma separated list of source names`)}"
          autocorrect="off"
          spellcheck="false"
          style="resize: none"
        ></textarea>
        <div>
          <span>${r(`Name`)}: </span>
          <input
            id="namesbaseName"
            data-tip="${r(`Type to change a base name`)}"
            placeholder="${r(`Base name`)}"
            autocorrect="off"
            spellcheck="false"
            style="width: 12em"
          />
          <span>${r(`Length`)}: </span>
          <input id="namesbaseMin" data-tip="${r(`Recommended minimum name length`)}" type="number" min="2" max="100" />
          <input id="namesbaseMax" data-tip="${r(`Recommended maximum name length`)}" type="number" min="2" value="10" />
          <span>${r(`Doubled`)}: </span>
          <input
            id="namesbaseDouble"
            data-tip="${r(`Populate with letters that can be used twice in a row (geminates)`)}"
            autocorrect="off"
            spellcheck="false"
            style="width: 10em"
          />
        </div>
        <fieldset>
          <legend>${r(`Generated examples`)}:</legend>
          <div id="namesbaseExamples" data-tip="${r(`Examples. Click to re-generate`)}"></div>
        </fieldset>
      </div>
      <div id="namesbaseBottom">
        <button
          id="namesbaseUpdateExamples"
          data-tip="${r(`Re-generate examples based on provided data`)}"
          class="icon-arrows-cw"
        ></button>
        <button id="namesbaseAdd" data-tip="${r(`Add`)}" class="icon-plus"></button>
        <button id="namesbaseDefault" data-tip="${r(`Restore default namesbase`)}" class="icon-cancel"></button>
        <button id="namesbaseDownload" data-tip="${r(`Download namesbase to PC`)}" class="icon-download"></button>
        <button
          id="namesbaseUpload"
          data-tip="${r(`Upload a namesbase from PC, replacing the current set`)}"
          class="icon-upload"
        ></button>
        <button
          id="namesbaseUploadExtend"
          data-tip="${r(`Upload a namesbase from PC, extending the current set`)}"
          class="icon-up-circled2"
        ></button>
        <button
          id="namesbaseCA"
          data-tip="${r(`Find or share custom namesbase on Cartography Assets portal`)}"
          class="icon-drafting-compass"
        ></button>
        <button
          id="namesbaseAnalyze"
          data-tip="${r(`Analyze namesbase to get a validity and quality overview`)}"
          class="icon-flask"
        ></button>
        <button
          id="namesbaseSpeak"
          data-tip="${n(r(`Speak the examples`),r(`You can change voice and language in options`))}"
          class="icon-voice"
        ></button>
      </div>
    </div>`;p(`dialogs`).insertAdjacentHTML(`beforeend`,e),p(`namesbaseSelect`).addEventListener(`change`,T),p(`namesbaseTextarea`).addEventListener(`change`,D),p(`namesbaseUpdateExamples`).addEventListener(`click`,E),p(`namesbaseExamples`).addEventListener(`click`,E),p(`namesbaseName`).addEventListener(`input`,e=>O(e.target.value)),p(`namesbaseMin`).addEventListener(`input`,e=>k(e.target.value)),p(`namesbaseMax`).addEventListener(`input`,e=>A(e.target.value)),p(`namesbaseDouble`).addEventListener(`input`,e=>j(e.target.value)),p(`namesbaseAdd`).addEventListener(`click`,N),p(`namesbaseAnalyze`).addEventListener(`click`,M),p(`namesbaseDefault`).addEventListener(`click`,P),p(`namesbaseDownload`).addEventListener(`click`,F),p(`namesbaseUpload`).addEventListener(`click`,()=>I(!0)),p(`namesbaseUploadExtend`).addEventListener(`click`,()=>I(!1)),p(`namesbaseCA`).addEventListener(`click`,()=>i(`https://cartographyassets.com/asset-category/specific-assets/azgaars-generator/namebases/`)),p(`namesbaseSpeak`).addEventListener(`click`,()=>a(p(`namesbaseExamples`).textContent??``))}function C(){$(`#namesbaseEditor`).dialog(`destroy`),p(`namesbaseEditor`).remove()}function w(){let e=p(`namesbaseSelect`);e.innerHTML=``,Names.nameBases.forEach((t,n)=>{e.options.add(new Option(t.name,String(n)))})}function T(){let e=+p(`namesbaseSelect`).value;Names.nameBases[e]?(p(`namesbaseTextarea`).value=Names.nameBases[e].b,p(`namesbaseName`).value=Names.nameBases[e].name,p(`namesbaseMin`).value=String(Names.nameBases[e].min),p(`namesbaseMax`).value=String(Names.nameBases[e].max),p(`namesbaseDouble`).value=Names.nameBases[e].d,E()):g(r(`Namesbase {{base}} is not defined`,{base:e}),!1,`error`)}function E(){let e=+p(`namesbaseSelect`).value,t=``;for(let n=0;n<7;n++){let i=Names.getBase(e);if(i===void 0){t=r(`Cannot generate examples. Please verify the data`);break}n&&(t+=`, `),t+=i}p(`namesbaseExamples`).innerHTML=t}function D(){let e=+p(`namesbaseSelect`).value,t=p(`namesbaseTextarea`);if(t.value.split(`,`).length<3){g(r(`The names data provided is too short or incorrect`),!1,`error`);return}let n=t.value.replace(/[/|]/g,``);Names.nameBases[e].b=n,t.value=n,Names.updateChain(e)}function O(e){let t=+p(`namesbaseSelect`).value,n=p(`namesbaseSelect`),r=e.replace(/[/|]/g,``);n.options[n.selectedIndex].innerHTML=r,Names.nameBases[t].name=r}function k(e){let t=+p(`namesbaseSelect`).value;+e>Names.nameBases[t].max?g(r(`Minimal length cannot be greater than maximal`),!1,`error`):Names.nameBases[t].min=+e}function A(e){let t=+p(`namesbaseSelect`).value;+e<Names.nameBases[t].min?g(r(`Maximal length should be greater than minimal`),!1,`error`):Names.nameBases[t].max=+e}function j(e){let t=+p(`namesbaseSelect`).value;Names.nameBases[t].d=e}function M(){let t=p(`namesbaseTextarea`).value,n=t.toLowerCase().split(`,`),i=n.length;if(!t||!i){g(r(`Names data should not be empty`),!1,`error`);return}let a=Names.calculateChain(t),s=Object.values(a),c=e(h(s.map(e=>e.length))??0),l=n.map(e=>e.length),f=t.match(/[\u0080-\uFFFF]/gu)?d(t.match(/[\u0080-\uFFFF]/gu).join(``).toLowerCase().split(``)).join(``):`none`,_=n.flatMap(e=>e.match(/[^\w\s]|(.)(?=\1)/g)??[]),v=d(_).filter(e=>_.filter(t=>t===e).length>3),y=v.length?v.join(``):`none`,b=d(n.filter((e,t,n)=>n.indexOf(e)!==t)).join(`, `)||`none`,x=h(n.map(e=>+e.includes(` `)))??0,S=()=>i<30?`<span data-tip="${r(`Namesbase contains < 30 names - not enough to generate reasonable data`)}" style="color:red">[${r(`not enough`)}]</span>`:i<100?`<span data-tip="${r(`Namesbase contains < 100 names - not enough to generate good names`)}" style="color:darkred">[${r(`low`)}]</span>`:i<=400?`<span data-tip="${r(`Namesbase contains a reasonable number of samples`)}" style="color:green">[${r(`good`)}]</span>`:`<span data-tip="${r(`Namesbase contains > 400 names. That is too much, try to reduce it to ~300 names`)}" style="color:darkred">[${r(`overmuch`)}]</span>`,C=()=>c<15?`<span data-tip="${r(`Namesbase average variety < 15 - generated names will be too repetitive`)}" style="color:red">[${r(`low`)}]</span>`:c<30?`<span data-tip="${r(`Namesbase average variety < 30 - names can be too repetitive`)}" style="color:orange">[${r(`mean`)}]</span>`:`<span data-tip="${r(`Namesbase variety is good`)}" style="color:green">[${r(`good`)}]</span>`;alertMessage.innerHTML=`<div style="line-height: 1.6em; max-width: 20em">
      <div data-tip="${r(`Number of names provided`)}">${r(`Namesbase length`)}: ${i} ${S()}</div>
      <div data-tip="${r(`Average number of generation variants for each key in the chain`)}">${r(`Namesbase variety`)}: ${c} ${C()}</div>
      <hr />
      <div data-tip="${r(`The shortest name length`)}">${r(`Min name length`)}: ${o(l)}</div>
      <div data-tip="${r(`The longest name length`)}">${r(`Max name length`)}: ${u(l)}</div>
      <div data-tip="${r(`Average name length`)}">${r(`Mean name length`)}: ${e(h(l)??0,1)}</div>
      <div data-tip="${r(`Common name length`)}">${r(`Median name length`)}: ${m(l)}</div>
      <hr />
      <div data-tip="${r(`Characters outside of Basic Latin have bad font support`)}">${r(`Non-basic chars`)}: ${f}</div>
      <div data-tip="${r(`Characters that are frequently (more than 3 times) doubled`)}">${r(`Doubled chars`)}: ${y}</div>
      <div data-tip="${r(`Names used more than one time`)}">${r(`Duplicates`)}: ${b}</div>
      <div data-tip="${r(`Percentage of names containing space character`)}">${r(`Multi-word names`)}: ${e(x*100,2)}%</div>
    </div>`,$(`#alert`).dialog({resizable:!1,title:r(`Data Analysis`),width:`auto`,position:{my:`left top-30`,at:`right+10 top`,of:`#namesbaseEditor`},buttons:{[r(`OK`)]:function(){$(this).dialog(`close`)}}})}function N(){let e=Names.nameBases.length,t=`This,is,an,example,of,name,base,showing,correct,format,It,should,have,at,least,one,hundred,names,separated,with,comma`;Names.nameBases.push({name:`Base${e}`,i:e,min:5,max:12,d:``,m:0,b:t}),p(`namesbaseSelect`).add(new Option(`Base${e}`,String(e))),p(`namesbaseSelect`).value=String(e),p(`namesbaseTextarea`).value=t,p(`namesbaseName`).value=`Base${e}`,p(`namesbaseMin`).value=`5`,p(`namesbaseMax`).value=`12`,p(`namesbaseDouble`).value=``,p(`namesbaseExamples`).innerHTML=r(`Please provide names data`)}function P(){y({title:r(`Restore default data`),message:r(`Are you sure you want to restore default namesbase?`),confirm:r(`Restore`),onConfirm:()=>{Names.clearChains(),Names.nameBases=Names.getNameBases(),w(),T()}})}function F(){let e=Names.nameBases.map(e=>`${e.name}|${e.min}|${e.max}|${e.d}|${e.m}|${e.b}`).join(`\r
`),t=`${c(`Namesbase`)}.txt`;l(e,t)}function I(e){b??=s(`.txt`),b.onchange=()=>f(b,t=>L(t,e)),b.click()}function L(e,i=!0){let a=e.replace(/\r\n|\r/g,`
`).split(`
`).filter(Boolean);if(!a.length){g(n(r(`Cannot load a namesbase`),r(`Please check the data format`)),!1,`error`);return}Names.clearChains(),i&&(Names.nameBases=[]);let o=[];if(a.forEach((e,t)=>{try{let[t,n,i,a,o,s]=e.split(`|`),c=t?.replace(R,``);if(!c)throw Error(r(`Name is missing`));let l=s?.replace(R,``);if(!l)throw Error(r(`Names are missing`));Names.nameBases.push({name:c,i:Names.nameBases.length,min:+n,max:+i,d:a,m:+o,b:l})}catch(n){o.push({id:t+1,line:e,error:n.message}),ERROR&&console.error(n)}}),o.length>0){ERROR&&console.error(`Namesbase upload errors`,o);let e=o.map(({id:e,line:n,error:i})=>`<li style="padding:0.6em 0;border-top:1px solid #ddd;">
            <div>
              ${r(`Line {{number}}`,{number:e})}:
              <span style="color:#8b0000">${t(i)}.</span> ${r(`Data`)}:
            </div>
            <div style="margin-top:0.35em;font-family:var(--font-monospace,monospace);line-height:1.4;word-break:break-word;color:#333;">
              ${t(n)||`<i>${r(`empty line`)}</i>`}
            </div>
          </li>`).join(``);alertMessage.innerHTML=`<div>
        <p style="margin:0.75em;">
          <strong>${r(`File parsing error. Only {{added}} out of {{total}} namebases added.`,{added:a.length-o.length,total:a.length})}</strong>
          ${r(`Each namebase should be on its own line and follow the format: name|min|max|duplication|m|names. Parameters should be separated with the | character, and this character should not be used within the parameters. Another prohibited character is /. The most common issue is names and other parameters being on two separate lines.`)}
          <ul style="margin:0.5em;">
            <li><code>name</code>: ${r(`name of the base.`)}</li>
            <li><code>min</code>: ${r(`minimal recommended length of generated names. It should be a number.`)}</li>
            <li><code>max</code>: ${r(`maximal recommended length of generated names. It should be a number greater than minimal length.`)}</li>
            <li><code>duplication</code>: ${r(`characters that can be duplicated in generated names. For example lkd means names like “Kalla”, “Mikkor”, “Dalddur” are possible. This parameter can be empty.`)}</li>
            <li><code>m</code>: ${r(`unused parameter, populate with 0.`)}</li>
            <li><code>names</code>: ${r(`names data, separated with commas. It should contain at least 3 names to be valid.`)}</li>
          </ul>
        </p>
        <div>
          <ul style="margin:0;padding-left:1.5em;">
            ${e}
          </ul>
        </div>
      </div>`,$(`#alert`).dialog({resizable:!1,title:r(`Parsing error`),width:`min(72vw, 68em)`,position:{my:`center center-4em`,at:`center`,of:`svg`},buttons:{[r(`Continue`)]:function(){$(this).dialog(`close`)}}})}w(),T()}var R=/[|/]/g,z={open:x};export{z as NamesbaseEditor};