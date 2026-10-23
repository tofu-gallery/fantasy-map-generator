import{C as e,d as t,n,r}from"./index-CuUJKJN8.js";import{B as i,H as a,L as o,P as s,dn as c,gt as l,nt as u,vn as d,yt as f,z as p}from"./utils-394NS37_.js";import{$ as m,J as h,K as g,X as _,a as v,ft as y,mt as ee,o as b,t as x,ut as te}from"./layers-CpGI7aJd.js";import{i as S,n as ne}from"./highlight-DOx2q_4P.js";import{t as C}from"./csv-BZ59UuP0.js";import{t as re}from"./stratify-CGdiYggi.js";import{t as ie}from"./pack-CyBKcrr4.js";import{t as ae}from"./heightUtils-BfaaFPbS.js";import{S as w,a as T,o as E,r as D}from"./unitUtils-B91DAWIJ.js";import{i as O,t as oe}from"./tooltips-7PimaK30.js";import{t as se}from"./state-B2hBYDzv.js";import{t as k}from"./controllers-lOfLnkBO.js";import{i as A,l as j,n as ce,r as le,s as ue}from"./dialog-helpers-kMHr89OS.js";import{t as de}from"./id-labels-Bh86rU1j.js";import{t as fe}from"./viewbox-events-DpWtTLWO.js";import{t as M}from"./tags-4fjWFj3G.js";import{S as pe,i as me,r as he}from"./app-C3meBrse.js";import{t as N}from"./highlighting-CMuZl7i6.js";import{a as ge,i as _e,n as ve,r as ye}from"./table-CEa9eCSl.js";import{t as be}from"./annex-mode-DySIQai7.js";var P=`statesEditor`,F=`States`,I={my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},L,R=[{key:`color`,width:`1.2em`,permanent:!0},{key:`name`,label:r(`State`),width:`7em`,permanent:!0,sortBy:e=>e.name||``,sortType:`alpha`},{key:`emblem`,width:`1.4em`},{key:`form`,label:r(`Form`),width:`8em`,mobileHidden:!0,sortBy:e=>e.i&&e.formName||``,sortType:`alpha`},{key:`capital`,label:r(`Capital`),width:`7em`,sortBy:e=>e.i&&pack.burgs[e.capital]?.name||``,sortType:`alpha`},{key:`culture`,label:r(`Culture`),width:`6em`,mobileHidden:!0,sortBy:e=>e.i&&pack.cultures[e.culture]?.name||``,sortType:`alpha`},{key:`burgs`,label:r(`Burgs`),width:`5em`,mobileHidden:!0,sortBy:e=>e.burgs||0},{key:`cells`,label:r(`Cells`),width:`5em`,hidden:!0,mobileHidden:!0,sortBy:e=>e.cells||0},{key:`area`,label:r(`Area`),width:`7em`,mobileHidden:!0,defaultSort:`desc`,sortBy:e=>T(e.area||0)},{key:`population`,label:r(`Population`),width:`6em`,sortBy:t=>e((t.rural||0)*options.map.units.population.scale+(t.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate)},{key:`treasury`,label:r(`Treasury`),width:`6em`,mobileHidden:!0,tip:r(`Click to sort by state treasury. Click on a value to view and edit taxes`),sortBy:e=>e.treasury||0},{key:`type`,label:r(`Type`),width:`5em`,hidden:!0,sortBy:e=>e.i&&e.type||``,sortType:`alpha`},{key:`expansionism`,label:r(`Expansion`),width:`5em`,hidden:!0,sortBy:e=>e.i&&e.expansionism||0},{key:`tags`,label:r(`Tags`),width:`10em`,hidden:!0,sortBy:e=>M.format(e.tags),sortType:`alpha`},{key:`note`,width:`1.1em`},{key:`locate`,width:`1.1em`},{key:`focus`,width:`1.1em`},{key:`lock`,width:`1.1em`},{key:`remove`,width:`1.4em`,permanent:!0}],z=[`Id`,`State`,`Full Name`,`Form`,`Color`,`Capital`,`Culture`,`Type`,`Expansionism`,`Cells`,`Burgs`,`Area`,`Total Population`,`Rural Population`,`Urban Population`,`Provinces`,`Neighbors`,`Sales Tax`,`Poll Tax`,`Treasury`,`Tags`],xe=[`Full Name`,`Form`,`Color`,`Capital`,`Culture`,`Type`,`Expansionism`,`Sales Tax`,`Poll Tax`,`Treasury`,`Tags`];function Se(){let e=L?.search,t=pack.states.filter(e=>!e.removed);return e?t.filter(t=>t.i?M.matches(e,t.name,t.tags,[t.fullName]):M.matches(e,t.name)):t}var B=ye({getData:()=>me(P,Se(),R),onUpdate:De});function V(){customization||(L=se.get(P,`filters`,()=>({search:``})),ce(`#${P}, .stable`),x.show(`states`,`borders`),x.hide(`cultures`,`biomes`,`religions`),Ce(),States.collectStatistics(),B.reset(),$(`#${P}`).dialog({title:r(`States Editor`),resizable:!1,position:I,close:Ee}))}function Ce(){A(P);let e=`<div id="${P}" class="dialog stable editorDialog">
    <div id="statesBodySection" class="table" data-type="absolute">
      ${_e({dialogId:P,columns:R})}
    </div>

    <div id="statesFilters" class="editorFilters">
      <label for="statesSearch" data-tip="${r(`Filter by name or tag`)}">${r(`Search`)}: <input id="statesSearch" type="search" autocomplete="off" /></label>
    </div>

    <div id="statesFooter" class="totalLine">
      <div data-tip="${r(`States number`)}" style="margin-left: 5px">${r(`States`)}:&nbsp;<span id="statesFooterStates">0</span></div>
      <div data-tip="${r(`Number of burgs`)}" style="margin-left: 12px" data-col="burgs">${r(`Burgs`)}:&nbsp;<span id="statesFooterBurgs">0</span></div>
      <div data-tip="${r(`Total land area`)}" style="margin-left: 12px" data-col="area">${r(`Land area`)}:&nbsp;<span id="statesFooterArea">0</span></div>
      <div data-tip="${r(`Total population`)}" style="margin-left: 12px" data-col="population">${r(`Population`)}:&nbsp;<span id="statesFooterPopulation">0</span></div>
    </div>

    <div id="statesBottom" class="editorToolbar">
      <button id="statesEditorRefresh" data-tip="${r(`Refresh`)}" class="icon-cw"></button>
      <button id="statesEditStyle" data-tip="${r(`Edit style in Style Editor`)}" class="icon-adjust"></button>
      <button id="statesLegend" data-tip="${r(`Toggle Legend box`)}" class="icon-list-bullet"></button>
      <button id="statesPercentage" data-tip="${r(`Toggle percentage / absolute values views`)}" class="icon-percent"></button>
      <button id="statesChart" data-tip="${r(`States bubble chart`)}" class="icon-chart-area"></button>

      <button id="statesRegenerate" data-tip="${r(`Show`)}" class="icon-cog-alt"></button>
      <div id="statesRegenerateButtons" style="display: none">
        <button id="statesRegenerateBack" data-tip="${r(`Hide`)}" class="icon-cog-alt"></button>
        <button id="statesRandomize" data-tip="${r(`Randomize states Expansion value and re-calculate states and provinces`)}" class="icon-shuffle"></button>
        <button id="statesRecalculate" data-tip="${r(`Recalculate states based on current values of growth-related attributes`)}" class="icon-retweet"></button>
        <div data-tip="${r(`Allow states neutral distance, expansion and type changes to take an immediate effect`)}" style="display: inline-block">
          <input id="statesAutoChange" class="checkbox" type="checkbox" />
          <label for="statesAutoChange" class="checkbox-label"><i>${r(`auto-apply changes`)}</i></label>
        </div>
        <div data-tip="${r(`Allow system to change state labels when states data is change`)}" style="display: inline-block">
          <input id="adjustLabels" class="checkbox" type="checkbox" />
          <label for="adjustLabels" class="checkbox-label"><i>${r(`auto-change labels`)}</i></label>
        </div>
      </div>

      <button id="statesManually" data-tip="${r(`Manually re-assign states`)}" class="icon-brush"></button>

      <button id="statesAdd" data-tip="${n(r(`Add`),r(`Hold Shift to add multiple`))}" class="icon-plus"></button>
      <button id="statesMerge" data-tip="${r(`Merge several states into one`)}" class="icon-layer-group"></button>
      <button id="statesAnnex" data-tip="${n(r(`Annex states: click the annexing state, then the states it absorbs`),r(`Hold Shift to keep annexing`))}" class="icon-crown"></button>
      <button id="statesExport" data-tip="${r(`Save data as a CSV file`)}" class="icon-download"></button>
      <button id="statesImport" data-tip="${r(`Upload data from a CSV file`)}" class="icon-upload"></button>
    </div>
  </div>`;p(`dialogs`).insertAdjacentHTML(`beforeend`,e),p(`statesSearch`).value=L.search,he(P,B.reset),N(P,({cellId:e})=>pack.cells.h[e]<20?void 0:pack.cells.state[e]),ve({dialogId:P,columns:R,onUpdate:()=>j(P,{width:`fit-content`,position:I})}),p(`statesSearch`).addEventListener(`input`,we),p(`statesEditorRefresh`).addEventListener(`click`,H),p(`statesEditStyle`).addEventListener(`click`,()=>void k.StyleEditor.open(`states`)),p(`statesLegend`).addEventListener(`click`,Ue),p(`statesPercentage`).addEventListener(`click`,J),p(`statesChart`).addEventListener(`click`,We),p(`statesRegenerate`).addEventListener(`click`,Ge),p(`statesRegenerateBack`).addEventListener(`click`,qe),p(`statesRecalculate`).addEventListener(`click`,()=>Y(!0)),p(`statesRandomize`).addEventListener(`click`,Ke),p(`statesManually`).addEventListener(`click`,Je),p(`statesAdd`).addEventListener(`click`,Xe),p(`statesMerge`).addEventListener(`click`,Qe),p(`statesAnnex`).addEventListener(`click`,Q.toggle),p(`statesExport`).addEventListener(`click`,tt),p(`statesImport`).addEventListener(`click`,()=>C.pick(nt)),p(`statesBodySection`).addEventListener(`click`,e=>{let t=e.target,n=t.classList,r=t.closest(`.states`);if(!r)return;let i=Number(r.dataset.id);t.tagName===`FILL-BOX`?Oe(t):n.contains(`name`)?ke(i):n.contains(`coaIcon`)?k.EmblemsEditor.open(`state`,`stateCOA${i}`,pack.states[i]):n.contains(`icon-star-empty`)?Ie(i):n.contains(`icon-dot-circled`)?k.BurgsOverview.open({stateId:i}):n.contains(`statePopulation`)?Me(i):n.contains(`stateTreasury`)?Ne(i):n.contains(`icon-book`)?k.NotesEditor.open({type:`state`,id:i}):n.contains(`icon-pin`)?Be(i,n):n.contains(`icon-target`)?ne(c(`#regions`).select(`#state${i}`).node(),4):n.contains(`icon-trash-empty`)?Ve(i):(n.contains(`icon-lock`)||n.contains(`icon-lock-open`))&&rt(i,n)}),p(`statesBodySection`).addEventListener(`change`,e=>{let t=e.target,n=t.classList,r=t.closest(`.states`);if(!r)return;let i=+r.dataset.id;n.contains(`stateCulture`)?Le(i,r,t.value):n.contains(`cultureType`)?Re(i,r,t.value):n.contains(`statePower`)?ze(i,r,t.value):n.contains(`stateTags`)&&Te(i,r,t)})}function we(e){L.search=e.target.value,se.set(P,`filters`,L),B.reset()}function Te(e,t,n){let r=pack.states[e];r&&(M.set(r,n.value),n.value=M.format(r.tags),t.dataset.tags=M.format(r.tags),L.search&&B.refresh())}function Ee(){customization===3&&X(),Q.exit(),k.ColorPicker.close(),c(`#debug`).selectAll(`.highlight`).remove();let e=B.view();e.rows=[],e.all=[],A(P)}function H(){States.collectStatistics(),B.refresh()}function De(t){let i=E(),a=0,o=0,s=0;for(let n of t.all){a+=T(n.area||0);let t=(n.rural||0)*options.map.units.population.scale,r=(n.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate;o+=e(t+r),s+=n.burgs||0}let l=``;for(let a of t.rows){let t=T(a.area||0),o=(a.rural||0)*options.map.units.population.scale,s=(a.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate,u=e(o+s),d=n(`${r(`Total population`)}: ${w(u)}`,`${r(`Rural population`)}: ${w(o)}`,`${r(`Urban population`)}: ${w(s)}`,r(`Click to edit`)),f=c(`#deftemp`).select(`#fog #focusState${a.i}`).size(),p=r(`Current treasury: 🟡 {{treasury}}. Sales Tax: {{salesTax}}%. Poll Tax: {{pollTax}}%. Click to view and edit taxes`,{treasury:w(a.treasury),salesTax:e((a.salesTax||0)*100,1),pollTax:e((a.pollTax||0)*100,1)});if(!a.i){l+=`<div
        class="states"
        data-id=${a.i}
        data-name="${a.name}"
        data-cells=${a.cells}
        data-area=${t}
        data-population=${u}
        data-burgs=${a.burgs}
        data-treasury="0"
        data-color=""
        data-form=""
        data-capital=""
        data-culture=""
        data-type=""
        data-expansionism=""
        data-tags=""
      >
        <svg width="1em" height="1em" class="placeholder" data-col="color"></svg>
        <input data-tip="${n(r(`Neutral lands name`),r(`Click to change`))}" class="stateName name pointer italic" value="${a.name}" readonly data-col="name" />
        <svg class="coaIcon placeholder" viewBox="0 0 200 200" data-col="emblem"></svg>
        <input class="stateForm placeholder" value="none" data-col="form" />
        <div data-col="capital">
          <span class="icon-star-empty placeholder"></span>
          <div class="stateCapital placeholder"></div>
        </div>
        <select class="stateCulture placeholder" data-col="culture">${U(0)}</select>
        <div data-col="burgs">
          <span data-tip="${r(`Click to overview neutral burgs`)}" class="icon-dot-circled pointer" style="padding-right: 1px"></span>
          <div data-tip="${r(`Number of burgs`)}" class="stateBurgs">${a.burgs}</div>
        </div>
        <div data-col="cells">
          <span data-tip="${r(`Number of cells`)}" class="icon-check-empty"></span>
          <div data-tip="${r(`Number of cells`)}" class="stateCells">${a.cells}</div>
        </div>
        <div data-col="area">
          <span data-tip="${r(`Neutral lands area`)}" style="padding-right: 4px" class="icon-map-o"></span>
          <div data-tip="${r(`Neutral lands area`)}" class="stateArea">${w(t)} ${i}</div>
        </div>
        <div data-col="population">
          <span data-tip="${d}" class="icon-male"></span>
          <div data-tip="${d}" class="statePopulation pointer">${w(u)}</div>
        </div>
        <div data-tip="${r(`Neutrals collect no taxes`)}" class="stateTreasury placeholder" data-col="treasury"></div>
        <select class="cultureType placeholder" data-col="type">${W(0)}</select>
        <div data-col="expansionism">
          <span class="icon-resize-full placeholder"></span>
          <input class="statePower placeholder" type="number" value="0" />
        </div>
        <div data-col="tags" class="placeholder"></div>
        <div data-col="note"></div>
        <div data-col="locate"></div>
        <div data-col="focus"></div>
        <div data-col="lock"></div>
        <div data-col="remove"></div>
      </div>`;continue}let h=pack.burgs[a.capital].name;m.trigger(`stateCOA${a.i}`,a.coa),l+=`<div
      class="states"
      data-id=${a.i}
      data-name="${a.name}"
      data-form="${a.formName||``}"
      data-capital="${h}"
      data-color="${a.color}"
      data-cells=${a.cells}
      data-area=${t}
      data-population=${u}
      data-burgs=${a.burgs}
      data-treasury="${a.treasury}"
      data-culture=${pack.cultures[a.culture].name}
      data-type=${a.type}
      data-expansionism=${a.expansionism}
      data-tags="${M.format(a.tags)}"
    >
      <fill-box fill="${a.color}" data-col="color"></fill-box>
      <input data-tip="${n(r(`Name`),r(`Click to change`))}" class="stateName name pointer" value="${a.name}" readonly data-col="name" />
      <svg data-tip="${r(`Edit Emblem`)}" class="coaIcon pointer" viewBox="0 0 200 200" data-col="emblem"><use href="#stateCOA${a.i}"></use></svg>
      <input data-tip="${n(r(`Form name`),r(`Click to change`))}" class="stateForm name pointer" value="${a.formName||``}" readonly data-col="form" />
      <div data-col="capital">
        <span data-tip="${n(r(`State capital`),r(`Click to zoom`))}" class="icon-star-empty pointer"></span>
        <div data-tip="${r(`Capital name`)}" class="stateCapital">${h}</div>
      </div>
      <select data-tip="${n(r(`Dominant culture`),r(`Click to change`))}" class="stateCulture" data-col="culture">${U(a.culture)}</select>
      <div data-col="burgs">
        <span data-tip="${r(`Click to overview state burgs`)}" style="padding-right: 1px" class="icon-dot-circled pointer"></span>
        <div data-tip="${r(`Number of burgs`)}" class="stateBurgs">${a.burgs}</div>
      </div>
      <div data-col="cells">
        <span data-tip="${r(`Number of cells`)}" class="icon-check-empty"></span>
        <div data-tip="${r(`Number of cells`)}" class="stateCells">${a.cells}</div>
      </div>
      <div data-col="area">
        <span data-tip="${r(`State area`)}" style="padding-right: 4px" class="icon-map-o"></span>
        <div data-tip="${r(`State area`)}" class="stateArea">${w(t)} ${i}</div>
      </div>
      <div data-col="population">
        <span data-tip="${d}" class="icon-male"></span>
        <div data-tip="${d}" class="statePopulation pointer">${w(u)}</div>
      </div>
      <div data-tip="${p}" class="stateTreasury pointer" data-col="treasury">🟡 ${w(a.treasury)}</div>
      <select data-tip="${n(r(`State type`),r(`Defines growth model`),r(`Click to change`))}" class="cultureType" data-col="type">${W(a.type)}</select>
      <div data-col="expansionism">
        <span data-tip="${r(`State expansionism`)}" class="icon-resize-full"></span>
        <input data-tip="${r(`Expansionism (defines competitive size). Change to re-calculate states based on new value`)}"
          class="statePower" type="number" min="0" max="99" step=".1" value=${a.expansionism} />
      </div>
      <div data-col="tags">
        <input data-tip="${n(r(`State tags`),r(`Comma-separated list of tags`))}" class="stateTags" placeholder="${r(`none`)}" value="${M.format(a.tags)}" />
      </div>
      ${ue(r(`Edit free text notes (legend)`))}
      <span data-col="locate" data-tip="${r(`Locate on map`)}" class="icon-target"></span>
      <span data-col="focus" data-tip="${r(`Toggle state focus`)}" class="icon-pin ${f?``:` inactive`}"></span>
      <span data-col="lock" data-tip="${r(`Lock`)}" class="icon-lock${a.lock?``:`-open`}"></span>
      <span data-col="remove" data-tip="${r(`Remove`)}" class="icon-trash-empty"></span>
    </div>`}let u=p(`statesBodySection`);u.querySelectorAll(`:scope > .states`).forEach(e=>{e.remove()}),u.insertAdjacentHTML(`beforeend`,l);let d=pack.states.filter(e=>e.i&&!e.removed).length,f=t.all.filter(e=>e.i&&!e.removed).length;p(`statesFooterStates`).innerHTML=f===d?String(d):r(`{{shown}} of {{total}}`,{shown:f,total:d}),p(`statesFooterBurgs`).innerHTML=String(s),p(`statesFooterArea`).innerHTML=w(a)+i,p(`statesFooterArea`).dataset.area=String(a),p(`statesFooterPopulation`).innerHTML=w(o),p(`statesFooterPopulation`).dataset.population=String(o),ge(p(`statesFooter`),t,B.goto),p(`statesBodySection`).querySelectorAll(`:scope > .states`).forEach(e=>{e.addEventListener(`mouseenter`,G),e.addEventListener(`mouseleave`,K)}),p(`statesBodySection`).dataset.type===`percentage`&&(p(`statesBodySection`).dataset.type=`absolute`,J()),j(P,{width:`fit-content`,position:I})}function U(e){let t=``;return pack.cultures.forEach(n=>{n.removed||(t+=`<option ${n.i===e?`selected`:``} value="${n.i}">${n.name}</option>`)}),t}function W(e){let t=``;return[`Generic`,`River`,`Lake`,`Naval`,`Nomadic`,`Hunting`,`Highland`].forEach(n=>{t+=`<option ${e===n?`selected`:``} value="${n}">${de[n]??n}</option>`}),t}function G(e){if(!x.isOn(`states`)||c(`#deftemp`).select(`#fog path`).size())return;let t=+e.target.dataset.id;!customization&&t&&S(c(`#regions`).select(`#state${t}`).attr(`d`))}function K(){c(`#debug`).selectAll(`.highlight`).each(function(){c(this).transition().duration(1e3).attr(`opacity`,0).remove()})}function Oe(e){let t=e.getAttribute(`fill`)||`#ffffff`,n=+e.closest(`.states`).dataset.id;k.ColorPicker.open(t,t=>{e.fill=t,pack.states[n].color=t,x.draw(`states`),x.draw(`military`)})}function ke(e){Ae();let t=p(`stateNameEditorCustomForm`),n=p(`stateNameEditorSelectForm`);t.value=``,t.style.display===`inline-block`&&(t.style.display=`none`,n.style.display=`inline-block`);let i=pack.states[e];p(`stateNameEditor`).dataset.state=String(e),p(`stateNameEditorShort`).value=i.name||``,o(n,i.formName||``),p(`stateNameEditorFull`).value=i.fullName||``,$(`#stateNameEditor`).dialog({resizable:!1,title:r(`Change state name`),buttons:{[r(`Apply`)]:function(){m(i),$(this).dialog(`close`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`},close:je}),p(`stateNameEditorShortCulture`).addEventListener(`click`,a),p(`stateNameEditorShortRandom`).addEventListener(`click`,c),p(`stateNameEditorShortSpeak`).addEventListener(`click`,()=>s(p(`stateNameEditorShort`).value)),p(`stateNameEditorAddForm`).addEventListener(`click`,d),p(`stateNameEditorCustomForm`).addEventListener(`change`,d),p(`stateNameEditorFullRegenerate`).addEventListener(`click`,f),p(`stateNameEditorFullSpeak`).addEventListener(`click`,()=>s(p(`stateNameEditorFull`).value));function a(){let e=+p(`stateNameEditor`).dataset.state,t=pack.states[e].culture,n=Names.getState(Names.getCultureShort(t),t);p(`stateNameEditorShort`).value=n}function c(){let e=l(Names.nameBases.length-1),t=Names.getState(Names.getBase(e),void 0,e);p(`stateNameEditorShort`).value=t}function d(){let e=t.value,r=t.style.display===`inline-block`;t.style.display=r?`none`:`inline-block`,n.style.display=r?`inline-block`:`none`,e&&r&&o(n,e),t.value=``}function f(){let e=p(`stateNameEditorShort`).value,t=p(`stateNameEditorSelectForm`).value;p(`stateNameEditorFull`).value=n();function n(){if(!t)return e;if(!e&&t)return`The ${t}`;let n=p(`stateNameEditorFullRegenerate`),r=+n.dataset.tick;return n.dataset.tick=String(r+1),r%2?`${u(e)} ${t}`:`${t} of ${e}`}}function m(e){let t=p(`stateNameEditorShort`).value.trim(),n=p(`stateNameEditorSelectForm`).value,r=p(`stateNameEditorFull`).value.trim(),i=e.fullName,a=t!==e.name||n!==(e.formName??``)||r!==i;t&&t!==e.name&&States.rename(e.i,t),n!==(e.formName??``)&&States.setForm(e.i,n),r&&r!==i&&States.setFullName(e.i,r),a&&p(`stateNameEditorUpdateLabel`).checked&&(e.label?.text&&delete e.label.text,x.draw(`labels`)),H()}}function Ae(){A(`stateNameEditor`);let e=`<div id="stateNameEditor" class="dialog" data-state="0">
      <div>
        <div data-tip="${r(`Short name`)}" class="label">${r(`Short name`)}:</div>
        <input
          id="stateNameEditorShort"
          data-tip="${r(`Type to change the short name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em"
        />
        <span id="stateNameEditorShortSpeak" data-tip="${n(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span
          id="stateNameEditorShortCulture"
          data-tip="${r(`Generate culture-specific name`)}"
          class="icon-book pointer"
        ></span>
        <span id="stateNameEditorShortRandom" data-tip="${r(`Generate random name`)}" class="icon-globe pointer"></span>
      </div>
      <div data-tip="${r(`Select form name`)}">
        <div data-tip="${r(`Form name`)}" class="label">${r(`Form name`)}:</div>
        <select id="stateNameEditorSelectForm" style="width: 11em">
          <option value="">${r(`blank`)}</option>
          ${Object.entries(pe).map(([e,t])=>`<optgroup label="${e}">${t.map(e=>`<option value="${e}">${e}</option>`).join(``)}</optgroup>`).join(``)}
        </select>
        <input
          id="stateNameEditorCustomForm"
          placeholder="${r(`Enter custom form name`)}"
          data-tip="${r(`Enter custom form name`)}"
          style="display: none; width: 11em"
        />
        <span
          id="stateNameEditorAddForm"
          data-tip="${r(`Click to add custom state form name to the list`)}"
          class="icon-plus pointer"
        ></span>
      </div>
      <div>
        <div data-tip="${r(`Full name`)}" class="label">${r(`Full name`)}:</div>
        <input
          id="stateNameEditorFull"
          data-tip="${r(`Type to change the full name`)}"
          autocorrect="off"
          spellcheck="false"
          style="width: 11em"
        />
        <span id="stateNameEditorFullSpeak" data-tip="${n(r(`Speak the name`),r(`You can change voice and language in options`))}" class="speaker">🔊</span>
        <span
          id="stateNameEditorFullRegenerate"
          data-tip="${r(`Click to re-generate full name`)}"
          data-tick="0"
          class="icon-arrows-cw pointer"
        ></span>
      </div>
      <div data-tip="${r(`Uncheck to not update state label on name change`)}" style="padding-block: 0.2em">
        <input id="stateNameEditorUpdateLabel" class="checkbox" type="checkbox" checked />
        <label for="stateNameEditorUpdateLabel" class="checkbox-label"><i>${r(`Update label on Apply`)}</i></label>
      </div>
    </div>`;p(`dialogs`).insertAdjacentHTML(`beforeend`,e)}function je(){$(`#stateNameEditor`).dialog(`destroy`),p(`stateNameEditor`).remove()}function Me(n){let i=pack.states[n];if(!i.cells){O(r(`No cells, cannot change population`),!1,`error`);return}let a=e((i.rural||0)*options.map.units.population.scale),o=e((i.urban||0)*options.map.units.population.scale*options.map.units.population.urbanization.rate),s=a+o,c=e=>Number(e).toLocaleString();alertMessage.innerHTML=`<div>
    <i>${r(`Change population of all cells assigned to the state`)}</i>
    <div style="margin: 0.5em 0">
      ${r(`Rural`)}: <input type="number" min="0" step="1" id="ruralPop" value=${a} style="width:6em" />
      ${r(`Urban`)}: <input type="number" min="0" step="1" id="urbanPop" value=${o} style="width:6em" />
    </div>
    <div>${r(`Total population`)}: ${c(s)} ⇒ <span id="totalPop">${c(s)}</span>
      (<span id="totalPopPerc">100</span>%)
    </div>
  </div>`;let l=p(`ruralPop`),u=p(`urbanPop`),d=p(`totalPop`),f=p(`totalPopPerc`),m=()=>{let t=l.valueAsNumber+u.valueAsNumber;Number.isNaN(t)||(d.innerHTML=c(t),f.innerHTML=String(e(t/s*100)))};l.oninput=()=>m(),u.oninput=()=>m(),$(`#alert`).dialog({resizable:!1,title:r(`Change state population`),width:`24em`,buttons:{[r(`Apply`)]:function(){h(),$(this).dialog(`close`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`}});function h(){try{States.setPopulation(n,+l.value||0,+u.value||0)}catch(e){O(t(e),!1,`error`);return}x.draw(`population`),H()}}function Ne(t){let i=pack.states[t];if(!t||!i||i.removed)return;let a=e((i.pollTax||0)*((i.rural||0)+(i.urban||0)),2),o=0,s=0;for(let e of pack.deals??[]){if(e.tax){let n=0;if(e.sellerType===`burg`)n=pack.burgs[e.seller]?.state||0;else if(e.sellerType===`market`){let t=Markets.get(e.seller)?.centerBurgId;n=t&&pack.burgs[t]?.state||0}n===t&&(o+=e.tax)}if(e.tariff&&e.buyerType===`market`){let n=Markets.get(e.buyer)?.centerBurgId;(n&&pack.burgs[n]?.state||0)===t&&(s+=e.tariff)}}let c=(i.tariffs??[]).map(e=>({states:Array.isArray(e.states)?[...e.states]:`all`,goods:Array.isArray(e.goods)?[...e.goods]:`all`,rate:e.rate})),l=e=>{if(!Array.isArray(e))return{label:r(`All states`),tip:n(r(`All foreign states`),r(`Click to select`))};let t=e.map(e=>pack.states[e]?.name||String(e));return{label:(t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`)||r(`None`),tip:n(t.join(`, `)||r(`None`),r(`Click to select`))}},u=e=>{if(!Array.isArray(e))return{label:r(`All goods`),tip:n(r(`All goods`),r(`Click to select`))};let t=e.map(e=>Goods.get(e)?.name||String(e));return{label:(t.length<=2?t.join(`, `):`${t.slice(0,2).join(`, `)} +${t.length-2}`)||r(`None`),tip:n(t.join(`, `)||r(`None`),r(`Click to select`))}};alertMessage.innerHTML=`<div data-tip="${r(`Sales tax is applied to deals with a seller from the state. Poll tax is applied to all population of the state. Tariffs are applied to foreign goods imported into the state's markets. Tax changes take effect on Production regeneration`)}" style="margin: 0.6em 0; display: grid; grid-template-columns: 7em auto auto; row-gap: 0.4em; align-items: center">
      <label for="stateSalesTaxInput">${r(`Sales Tax`)}:</label>
      <input id="stateSalesTaxInput" type="number" min="0" max="1" step="0.01" value="${i.salesTax}" style="width: 6em"/> = ${D(o)}
      <label for="statePollTaxInput">${r(`Poll Tax`)}:</label>
      <input id="statePollTaxInput" type="number" min="0" max="10" step="0.01" value="${i.pollTax}" style="width: 6em"/> = ${D(a)}
      <label>${r(`Tariffs`)}:</label>
      <span></span> = ${D(s)}
      <label for="stateTreasuryInput">${r(`Treasury`)}:</label>
      <input id="stateTreasuryInput" type="number" step="1" value="${i.treasury}" style="width: 6em" />
    </div>
    <hr />
    <div style="display: flex; justify-content: space-between; align-items: center; margin: 0.4em 0;">
      <b data-tip="${r(`More specific rules override general rules. Embargoes block trade in both directions`)}">${r(`Tariffs and Embargoes`)}</b>
      <div style="display: flex; gap: 0.3em;">
        <button id="stateTariffReset" type="button" class="icon-arrows-cw" data-tip="${r(`Reset tariffs based on current diplomatic relations`)}"> ${r(`Reset`)}</button>
        <button id="stateTariffAdd" type="button" class="icon-plus" data-tip="${r(`Add tariff or embargo rule`)}"> ${r(`Add`)}</button>
      </div>
    </div>
    <div id="stateTariffsList" style="max-height: 15em; overflow-y: auto; display: flex; flex-direction: column; row-gap: 0.25em;"></div>`;let d=p(`stateTariffsList`),f=()=>{c.length?d.innerHTML=c.map((e,t)=>{let n=l(e.states),i=u(e.goods),a=e.rate===`embargo`,o=a?.1:e.rate;return`<div class="tariffRuleRow" data-index="${t}" style="display: grid; grid-template-columns: 1fr 1fr 5.8em 4.5em 1.2em; column-gap: 0.3em; align-items: center;">
          <button type="button" class="tariffStatesBtn" data-tip="${n.tip}" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${n.label}</button>
          <button type="button" class="tariffGoodsBtn" data-tip="${i.tip}" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${i.label}</button>
          <select class="tariffTypeSelect" data-tip="${r(`Rule policy: tariff rate or complete trade embargo`)}">
            <option value="tariff" ${a?``:`selected`}>${r(`Tariff`)}</option>
            <option value="embargo" ${a?`selected`:``}>${r(`Embargo`)}</option>
          </select>
          <input class="tariffRateInput" type="number" min="0" max="10" step="0.01" value="${o}" data-tip="${r(`Import tariff rate`)}" style="width: 4.2em; ${a?`visibility: hidden;`:``}" />
          <span class="icon-trash-empty pointer tariffRemoveBtn" data-tip="${r(`Remove rule`)}"></span>
        </div>`}).join(``):d.innerHTML=`<div style="color: #666; font-style: italic; padding: 0.3em 0;">${r(`No tariff or embargo rules`)}</div>`};f(),p(`stateTariffReset`).addEventListener(`click`,()=>{c=States.defineTariffs(i).map(e=>({states:Array.isArray(e.states)?[...e.states]:`all`,goods:Array.isArray(e.goods)?[...e.goods]:`all`,rate:e.rate})),f()}),p(`stateTariffAdd`).addEventListener(`click`,()=>{c.push({states:`all`,goods:`all`,rate:.1}),f()}),d.addEventListener(`click`,e=>{let n=e.target,r=n.closest(`.tariffRuleRow`);if(!r)return;let i=+r.dataset.index,a=c[i];a&&(n.classList.contains(`tariffRemoveBtn`)?(c.splice(i,1),f()):n.classList.contains(`tariffStatesBtn`)?Pe(t,a,f):n.classList.contains(`tariffGoodsBtn`)&&Fe(a,f))}),d.addEventListener(`change`,t=>{let n=t.target,r=n.closest(`.tariffRuleRow`);if(!r)return;let i=+r.dataset.index,a=c[i];if(a){if(n.classList.contains(`tariffTypeSelect`)){let t=r.querySelector(`.tariffRateInput`);if(n.value===`embargo`)a.rate=`embargo`,t&&(t.style.visibility=`hidden`);else{let n=t?Math.max(0,Math.min(10,+t.value)):.1;a.rate=Number.isFinite(n)?e(n,4):.1,t&&(t.style.visibility=``)}}else if(n.classList.contains(`tariffRateInput`)){let t=Math.max(0,Math.min(10,+n.value));a.rate!==`embargo`&&(a.rate=Number.isFinite(t)?e(t,4):0)}}}),d.addEventListener(`input`,t=>{let n=t.target;if(!n.classList.contains(`tariffRateInput`))return;let r=n.closest(`.tariffRuleRow`);if(!r)return;let i=+r.dataset.index,a=c[i];if(!a||a.rate===`embargo`)return;let o=Math.max(0,Math.min(10,+n.value));a.rate=Number.isFinite(o)?e(o,4):0}),$(`#alert`).dialog({resizable:!1,title:r(`Taxes and Treasury: {{- state}}`,{state:i.name}),width:`32em`,close:()=>A(`tariffSelectorDialog`),buttons:{[r(`Apply`)]:function(){let e=p(`stateSalesTaxInput`),n=p(`statePollTaxInput`),r=p(`stateTreasuryInput`),a=Math.max(0,Math.min(1,+e.value)),o=Math.max(0,+n.value),s=+r.value;States.setTaxes(t,Number.isFinite(a)?a:i.salesTax,Number.isFinite(o)?o:i.pollTax),States.setTariffs(t,c),Number.isFinite(s)&&States.setTreasury(t,s),H(),$(this).dialog(`close`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}},position:{my:`center`,at:`center`,of:`svg`}})}function Pe(e,t,n){let i=pack.states.filter(t=>t.i&&!t.removed&&t.i!==e),a=t.states===`all`,o=new Set(Array.isArray(t.states)?t.states:i.map(e=>e.i));q({title:r(`Select States`),allLabel:r(`All states`),isAll:a,items:i.map(e=>({id:e.i,name:e.name,badgeHtml:`<fill-box fill="${e.color||`#ccc`}" size=".8em" disabled></fill-box>`,checked:a||o.has(e.i)})),emptyWarning:r(`Select at least one state`),onSave:e=>{t.states=e,n()}})}function Fe(e,t){let n=pack.goods??[],i=e.goods===`all`,a=new Set(Array.isArray(e.goods)?e.goods:n.map(e=>e.i));q({title:r(`Select Goods`),allLabel:r(`All goods`),isAll:i,items:n.map(e=>({id:e.i,name:e.name,badgeHtml:e.icon?`<svg width="1.2em" height="1.2em" class="goodIcon" style="min-width: 1.2em; min-height: 1.2em; flex-shrink: 0;">${g(e)}</svg>`:`<fill-box fill="${e.color||`#ccc`}" size=".8em" disabled></fill-box>`,checked:i||a.has(e.i)})),emptyWarning:r(`Select at least one good`),onSave:n=>{e.goods=n,t()}})}function q({title:e,allLabel:t,isAll:n,items:i,emptyWarning:a,onSave:o}){A(`tariffSelectorDialog`);let s=document.createElement(`div`);s.id=`tariffSelectorDialog`,s.className=`dialog`,document.body.appendChild(s);let c=i.map(e=>`<label style="display: flex; align-items: center; column-gap: 0.35em; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"><input type="checkbox" class="native tariffItemCheck" value="${e.id}" ${e.checked?`checked`:``} />${e.badgeHtml??``}<span>${e.name}</span></label>`).join(``);s.innerHTML=`
    <div style="margin-bottom: 0.4em; padding-bottom: 0.3em; border-bottom: 1px solid #ccc;">
      <label style="display: flex; align-items: center; column-gap: 0.3em;">
        <input id="tariffAllCheck" type="checkbox" class="native" ${n?`checked`:``} />
        <b>${t}</b>
      </label>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.25em 0.5em; max-height: 16em; overflow-y: auto;">
      ${c}
    </div>
  `;let l=p(`tariffAllCheck`),u=Array.from(s.querySelectorAll(`.tariffItemCheck`));l.addEventListener(`change`,()=>{for(let e of u)e.checked=l.checked}),s.addEventListener(`change`,e=>{e.target.classList.contains(`tariffItemCheck`)&&(l.checked=u.length>0&&u.every(e=>e.checked))}),$(s).dialog({resizable:!1,title:e,width:`24em`,close:()=>A(`tariffSelectorDialog`),buttons:{[r(`Apply`)]:function(){if(l.checked){o(`all`),$(this).dialog(`close`);return}let e=u.filter(e=>e.checked).map(e=>+e.value);e.length?(o(e.length===u.length?`all`:e),$(this).dialog(`close`)):O(a,!1,`error`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}}})}function Ie(e){let t=pack.states[e].capital,{x:n,y:r}=pack.burgs[t];zoomTo(n,r,8,2e3)}function Le(e,t,n){States.setCulture(e,+n),t.dataset.base=String(+n)}function Re(e,t,n){States.setType(e,n),t.dataset.type=n,Y()}function ze(e,t,n){let r=Number(n);r>=0&&r<=99&&(States.setExpansionism(e,r),t.dataset.expansionism=n,Y())}function Be(e,t){if(customization)return;let n=c(`#statesBody`).select(`#state${e}`).attr(`d`),r=`focusState${e}`;t.contains(`inactive`)?v(r,n):b(r),t.toggle(`inactive`)}function Ve(e){customization||le({title:r(`Remove`),message:`${r(`Are you sure you want to remove the state?`)}<br>${r(`This action cannot be reverted`)}`,confirm:r(`Remove`),onConfirm:()=>He(e)})}function He(e){b(`focusState${e}`),_(`state`,e);for(let t of pack.states[e].provinces||[])_(`province`,t);States.remove(e),c(`#debug`).selectAll(`.highlight`).remove(),x.draw(`burgIcons`,`labels`,`military`,`borders`,`provinces`,`states`),H()}function Ue(){if(ee(F)){te(F);return}let e=pack.states.filter(e=>e.i&&!e.removed&&e.cells).sort((e,t)=>(t.area??0)-(e.area??0)).map(e=>[e.i,e.color,e.name]);if(!e.length)return void O(r(`No states to show`),!1,`error`);y(F,e)}function J(){if(p(`statesBodySection`).dataset.type===`absolute`){p(`statesBodySection`).dataset.type=`percentage`;let t=+p(`statesFooterBurgs`).textContent,n=+p(`statesFooterArea`).dataset.area,r=+p(`statesFooterPopulation`).dataset.population,i=pack.states.reduce((e,t)=>e+(t.treasury||0),0),a=pack.states.reduce((e,t)=>e+(t.i&&!t.removed&&t.cells||0),0);p(`statesBodySection`).querySelectorAll(`:scope > .states`).forEach(o=>{let{burgs:s,area:c,population:l,treasury:u,cells:d}=o.dataset;o.querySelector(`.stateBurgs`).textContent=`${e(+s/t*100)}%`,o.querySelector(`.stateCells`).textContent=`${e(+d/a*100)}%`,o.querySelector(`.stateArea`).textContent=`${e(+c/n*100)}%`,o.querySelector(`.statePopulation`).textContent=`${e(+l/r*100)}%`,o.querySelector(`.stateTreasury`).textContent=`${e(+u/i*100,2)}%`})}else p(`statesBodySection`).dataset.type=`absolute`,B.refresh()}function We(){let t=pack.states.filter(e=>!e.removed);if(t.length<2){O(r(`No states to show`),!1,`error`);return}let n=re().id(e=>String(e.i)).parentId(e=>e.i?`0`:null)(t).sum(e=>e.area).sort((e,t)=>t.value-e.value),a=150+200*p(`uiSize`).valueAsNumber,o={top:0,right:-50,bottom:0,left:-50},s=a-o.left-o.right,l=a-o.top-o.bottom,u=ie().size([s,l]).padding(3);alertMessage.innerHTML=`<select id="statesTreeType" style="display:block; margin-left:13px; font-size:11px">
    <option value="area" selected>${r(`Area`)}</option>
    <option value="population">${r(`Total population`)}</option>
    <option value="rural">${r(`Rural population`)}</option>
    <option value="urban">${r(`Urban population`)}</option>
    <option value="burgs">${r(`Number of burgs`)}</option>
  </select>`,alertMessage.innerHTML+=`<div id='statesInfo' class='chartInfo'>&#8205;</div>`;let f=c(`#alertMessage`).insert(`svg`,`#statesInfo`).attr(`id`,`statesTree`).attr(`width`,a).attr(`height`,a).style(`font-family`,`Almendra SC`).attr(`text-anchor`,`middle`).attr(`dominant-baseline`,`central`).append(`g`).attr(`transform`,`translate(-50, 0)`);p(`statesTreeType`).addEventListener(`change`,y),u(n);let m=f.selectAll(`g`).data(n.leaves()).enter().append(`g`).attr(`transform`,e=>`translate(${e.x},${e.y})`).attr(`data-id`,e=>e.data.i).on(`mouseenter`,(e,t)=>_(e,t)).on(`mouseleave`,e=>v(e));m.append(`circle`).attr(`fill`,e=>e.data.color).attr(`r`,e=>e.r);let h=/(?=[A-Z][^A-Z])/g,g=e=>(d(e.split(h).map(e=>e.length))??0)+1;m.append(`text`).attr(`text-rendering`,`optimizeSpeed`).style(`font-size`,t=>`${e(t.r**.97*4/g(t.data.name),2)}px`).selectAll(`tspan`).data(e=>e.data.name.split(h)).join(`tspan`).attr(`x`,0).text(e=>e).attr(`dy`,(e,t,n)=>`${t?1:(n.length-1)/-2}em`);function _(t,n){c(t.target).select(`circle`).classed(`selected`,!0);let i=n.data.fullName,a=`${T(n.data.area)} ${E()}`,o=e(n.data.rural*options.map.units.population.scale),s=e(n.data.urban*options.map.units.population.scale*options.map.units.population.urbanization.rate),l=p(`statesTreeType`).value,u=l===`area`?`${r(`Area`)}: ${a}`:l===`rural`?`${r(`Rural population`)}: ${w(o)}`:l===`urban`?`${r(`Urban population`)}: ${w(s)}`:l===`burgs`?r(`Burgs number: {{burgs}}`,{burgs:n.data.burgs}):`${r(`Population`)}: ${w(o+s)}`;p(`statesInfo`).innerHTML=`${i}. ${u}`,G(t)}function v(e){K(),i(`statesInfo`)&&(p(`statesInfo`).innerHTML=`&#8205;`,c(e.target).select(`circle`).classed(`selected`,!1))}function y(){let t=this.value===`area`?e=>e.area:this.value===`rural`?e=>e.rural:this.value===`urban`?e=>e.urban:this.value===`burgs`?e=>e.burgs:e=>e.rural+e.urban;n.sum(t),m.data(u(n).leaves()),m.transition().duration(1500).attr(`transform`,e=>`translate(${e.x},${e.y})`),m.select(`circle`).transition().duration(1500).attr(`r`,e=>e.r),m.select(`text`).transition().duration(1500).style(`font-size`,t=>`${e(t.r**.97*4/g(t.data.name),2)}px`)}$(`#alert`).dialog({title:r(`States bubble chart`),width:`fit-content`,position:{my:`left bottom`,at:`left+10 bottom-10`,of:`svg`},buttons:{},close:()=>{alertMessage.innerHTML=``}})}function Ge(){p(`statesBottom`).querySelectorAll(`:scope > button`).forEach(e=>{e.style.display=`none`}),p(`statesRegenerateButtons`).style.display=`block`}function Y(e){if(e||p(`statesAutoChange`).checked){if(States.recalculate(),x.draw(`states`,`borders`,`provinces`,`goods`,`emblems`),p(`adjustLabels`).checked){for(let e of pack.states)e.label&&(e.label.pathPoints=void 0);x.draw(`labels`)}H()}}function Ke(){pack.states.forEach(t=>{if(!t.i||t.removed)return;let n=e(Math.random()*4+1,1);t.expansionism=n,p(`statesBodySection`).querySelector(`div.states[data-id='${t.i}'] input.statePower`).value=String(n)}),Y(!0)}function qe(){p(`statesBottom`).querySelectorAll(`:scope > button`).forEach(e=>{e.style.display=`inline-block`}),p(`statesRegenerateButtons`).style.display=`none`}function Je(){x.show(`states`);let e=p(`adjustLabels`).checked;k.PaintEditor.open({title:r(`Paint States`),parentDialogId:P,onClose:V,items:pack.states.filter(e=>!e.removed).map(e=>({id:e.i,name:e.name,color:e.color||`#ffffff`,lock:!!e.lock})),dontOverrideControl:!0,getValue:e=>pack.cells.state[e],filterCell:(e,t)=>ae(e,pack)&&e!==pack.states[t].center,onApply:t=>Ye(t,e)})}function Ye(e,t){if(!e.size)return;let n=new Set;for(let[t,r]of f(e)){for(let e of r)n.add(pack.cells.state[e]).add(t);States.setCells(t,r)}if(x.draw(`states`,`borders`,`provinces`,`emblems`),t){for(let e of n)delete pack.states[e].label;x.draw(`labels`)}i(P)&&H()}function Xe(){this.classList.contains(`pressed`)?X():(customization=3,this.classList.add(`pressed`),O(r(`Click on the map to create a new capital or promote an existing burg`),!0),c(`#viewbox`).style(`cursor`,`crosshair`).on(`click`,Ze),p(`statesBodySection`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.pointerEvents=`none`}))}function Ze(e){let[n,r]=a(e,this),i=pack.cells.burg[Pack.findCell(n,r)],o;try{o=States.add(n,r)}catch(e){O(t(e),!1,`error`);return}e.shiftKey===!1&&X(),i||h(`burg`,pack.states[o].capital),h(`state`,o),x.hide(`provinces`),x.draw(`burgIcons`,`labels`,`routes`,`states`,`borders`),B.refresh()}function X(){customization=0,fe(),oe(),p(`statesBodySection`).querySelectorAll(`div > input, select, span, svg`).forEach(e=>{e.style.removeProperty(`pointer-events`)});let e=p(`statesAdd`);e.classList.contains(`pressed`)&&e.classList.remove(`pressed`)}var Z=e=>`<svg class="coaIcon" viewBox="0 0 200 200"><use href="#stateCOA${e}"></use></svg>`;function Qe(){let e=pack.states.filter(e=>e.i&&!e.removed).map(e=>`
      <div data-id="${e.i}" data-tip="${e.fullName}" style="cursor:default">
        <input type="radio" name="rulingState" value="${e.i}" />
        <input id="selectState${e.i}" class="checkbox" type="checkbox" name="statesToMerge" value="${e.i}" />
        <label for="selectState${e.i}" class="checkbox-label"><fill-box fill="${e.color}" disabled></fill-box>${Z(e.i)}${e.fullName}</label>
      </div>
    `).join(``);alertMessage.innerHTML=`
    <form id='mergeStatesForm' style="overflow: hidden; display: flex; flex-direction: column; gap: 1em;">
      <p style="margin:0">
        ${r(`Check the checkbox next to each state you want to merge. Use the radio button to pick the ruling state that will absorb all others (its name, color, and capital will be kept). Hover over a row to highlight the state on the map.`)}
      </p>
      <main style='display: grid; grid-template-columns: 1fr 1fr; gap: .3em;'>
        ${e}
      </main>
    </form>
  `,p(`mergeStatesForm`).querySelectorAll(`div[data-id]`).forEach(e=>{e.addEventListener(`mouseenter`,t),e.addEventListener(`mouseleave`,K)}),N(`alert`,({cellId:e})=>pack.cells.state[e]);function t(e){if(!x.isOn(`states`))return;let t=+e.currentTarget.dataset.id;if(!t)return;let n=c(`#regions`).select(`#state${t}`).attr(`d`);n&&(K(),S(n))}$(`#alert`).dialog({width:600,title:r(`Merge states`),close:K,buttons:{[r(`Merge`)]:function(){let e=new FormData(p(`mergeStatesForm`)),t=Number(e.get(`rulingState`));if(!t){O(r(`Please select a state to merge into`),!1,`error`);return}let n=e.getAll(`statesToMerge`).map(Number).filter(e=>e!==t);n.length?$e(n,t,()=>$(this).dialog(`close`)):O(r(`Please select several states to merge`),!1,`error`)},[r(`Cancel`)]:function(){$(this).dialog(`close`)}}})}function $e(e,t,i){let a=pack.states[t],o=`${Z(a.i)}${a.name}`;le({title:r(`Merge states`),message:`
      <p>${r(`The following states will be removed`)}: ${e.map(e=>`${Z(e)}${pack.states[e].name}`).join(`, `)}.</p>
      <p>${r(`Removed states data (burgs, provinces, regiments) will be assigned to {{- ruler}}.`,{ruler:o})}</p>
      <label style="display: flex; align-items: center"><input id="mergeStatesAsProvinces" class="checkbox native" type="checkbox"> ${r(`Keep each removed state as a province of {{- ruler}}, replacing its own provinces`,{ruler:o})}</label>
      <p>${n(r(`Are you sure you want to merge states?`),r(`This action cannot be reverted`))}</p>`,confirm:r(`Merge`),onConfirm:()=>{et(e,t,p(`mergeStatesAsProvinces`).checked),i?.()}})}var Q=be({buttonId:`statesAnnex`,bodySectionId:`statesBodySection`,tips:{start:n(r(`Click the state that annexes, then the states it absorbs`),r(`Hold Shift to keep annexing`)),pickLand:r(`Click on a land cell to pick a state`),nothingHere:r(`There is no state here`),annexing:e=>n(r(`Annexing into {{state}}`,{state:e}),r(`Click the states to annex`),r(`Hold Shift to keep annexing`)),isParent:e=>r(`{{state}} is the annexing state`,{state:e})},ownerOf:e=>pack.cells.state[e],colorOf:e=>pack.states[e].color??`#999999`,nameOf:e=>pack.states[e].name,commit:(e,t)=>$e(t,e)});function et(e,t,n=!1){for(let t of e)_(`state`,t);States.merge(t,e,n),b(),c(`#debug`).selectAll(`.highlight`).remove(),x.draw(`states`,`borders`,`burgIcons`,`labels`,`provinces`,`military`,`emblems`),n&&x.show(`provinces`),H()}function tt(){let{scale:e,urbanization:t}=options.map.units.population,n=z.map(e=>e===`Area`?`Area ${E(`2`)}`:e),r=B.view().all.map(n=>{let r=Math.round((n.rural||0)*e),i=Math.round((n.urban||0)*e*t.rate),a=(n.neighbors||[]).filter(e=>e&&!pack.states[e]?.removed);return[n.i,n.name,n.i&&n.fullName||``,n.i&&n.formName||``,n.i&&n.color||``,n.i&&pack.burgs[n.capital].name||``,n.i?pack.cultures[n.culture].name:``,n.i?n.type:``,n.i?n.expansionism:``,n.cells||0,n.burgs||0,T(n.area||0),r+i,r,i,n.i?(n.provinces||[]).filter(e=>!pack.provinces[e]?.removed).length:``,n.i?a.map(e=>pack.states[e].name).join(`;`):``,n.i?n.salesTax||0:``,n.i?n.pollTax||0:``,n.i?n.treasury||0:``,n.i?(n.tags||[]).join(`;`):``]});C.download(`States`,n,r)}async function nt(e){let{scale:t,urbanization:n}=options.map.units.population,i=e=>pack.states[e]?.removed?void 0:pack.states[e];await k.CsvUpload.update(e,z,{find:i,units:[`Area`],text:[`State`,`Full Name`,`Form`,`Tags`]},(e,a)=>{let o=i(e),s=o.fullName;if(a.apply(`State`,t=>States.rename(e,t),o.name),e)a.apply(`Form`,t=>States.setForm(e,t),o.formName),a.apply(`Full Name`,t=>States.setFullName(e,t),s),a.apply(`Color`,t=>States.recolor(e,t),o.color),a.apply(`Capital`,t=>Burgs.setCapital(C.byName(pack.burgs,t,t=>t.state===e).i),pack.burgs[o.capital]?.name),a.apply(`Culture`,t=>States.setCulture(e,C.byName(pack.cultures,t).i),pack.cultures[o.culture]?.name),a.apply(`Type`,t=>States.setType(e,t),o.type),a.apply(`Expansionism`,t=>States.setExpansionism(e,+t),o.expansionism),a.apply(`Sales Tax`,t=>States.setTaxes(e,+t,o.pollTax||0),o.salesTax||0),a.apply(`Poll Tax`,t=>States.setTaxes(e,o.salesTax||0,+t),o.pollTax||0),a.apply(`Treasury`,t=>States.setTreasury(e,+t),o.treasury||0),a.assign(`Tags`,t=>States.setTags(e,t),(o.tags??[]).join(`;`));else for(let e of xe)a.apply(e,()=>{throw Error(r(`Neutral lands have no government`))});a.population([Math.round((o.rural||0)*t),Math.round((o.urban||0)*t*n.rate)],(t,n)=>States.setPopulation(e,t,n))})&&(x.draw(`states`,`borders`,`burgIcons`,`labels`,`provinces`,`military`,`emblems`,`population`),H())}function rt(e,t){States.setLocked(e,!pack.states[e].lock),t.toggle(`icon-lock-open`),t.toggle(`icon-lock`)}var it={open:V,showChart:We};export{it as StatesEditor};