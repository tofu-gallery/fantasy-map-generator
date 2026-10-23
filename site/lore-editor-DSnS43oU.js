import{r as e}from"./index-CuUJKJN8.js";import{B as t,z as n}from"./utils-394NS37_.js";import{i as r,n as i}from"./dialog-helpers-kMHr89OS.js";import{t as a}from"./pins-BgZ3A9ES.js";import{t as o}from"./names-generator-CquhchJC.js";import{t as s}from"./lore-CPF9F9es.js";var c=`loreEditor`,l=`
  <style>
    #${c} .le { display: grid; grid-template-columns: 1em 5.6em minmax(0, 1fr) 1.2em; gap: .3em; align-items: center; width: 23em; }
    #${c} .le > label[for="loreDescription"] { align-self: start; padding-top: .35em; }
    #${c} .le-era { display: flex; align-items: center; gap: .4em; min-width: 0; }
    #${c} .le-era > input:first-child { flex: 1; min-width: 0; }
    #${c} .le-era > input:last-child { flex: 0 0 3.4em; }
    #${c} input, #${c} textarea { width: 100%; box-sizing: border-box; font: inherit; }
    #${c} textarea { resize: vertical; }
    #${c} .le > i { cursor: pointer; justify-self: center; }
    #${c} .le > i[data-locked] { font-size: .8em; color: #626573; }
  </style>

  <div class="le">
    <i data-locked="0" id="lock_mapName" class="icon-lock-open"></i>
    <label for="loreMapName">${e(`Map name`)}:</label>
    <input
      id="loreMapName"
      data-tip="${e(`Name of the map. Used to name the files it is downloaded as`)}"
      autocorrect="off"
      spellcheck="false"
      type="text"
    />
    <i data-tip="${e(`Generate a new map name`)}" id="loreMapNameRegenerate" class="icon-arrows-cw"></i>

    <i data-locked="0" id="lock_year" class="icon-lock-open"></i>
    <label for="loreYear">${e(`Year`)}:</label>
    <input
      id="loreYear"
      data-tip="${e(`Current year. Dates state history and battle reports`)}"
      type="number"
      step="1"
    />
    <span></span>

    <i data-locked="0" id="lock_era" data-ids="era,eraShort" class="icon-lock-open"></i>
    <label for="loreEra">${e(`Era`)}:</label>
    <span class="le-era" data-tip="${e(`Name of the era the current year belongs to, and its abbreviation`)}">
      <input id="loreEra" autocorrect="off" spellcheck="false" type="text" placeholder="${e(`Winter Era`)}" />
      <input id="loreEraShort" autocorrect="off" spellcheck="false" type="text" placeholder="${e(`WE`)}" />
    </span>
    <i data-tip="${e(`Generate a new era`)}" id="loreEraRegenerate" class="icon-arrows-cw"></i>

    <span></span>
    <label for="loreDescription">${e(`Description`)}:</label>
    <textarea
      id="loreDescription"
      rows="5"
      data-tip="${e(`Your own description of this world. Free text, carried in the map file`)}"
      placeholder="${e(`Describe the map, its age, its peoples – whatever the map should carry with it.`)}"
    ></textarea>
    <span></span>
  </div>
`;function u(){i(`#loreEditor, .stable`),d(),$(`#${c}`).dialog({title:e(`Setup Lore`),width:`auto`,minWidth:340,position:{my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},close:()=>r(c)})}function d(){r(c),n(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${c}" class="dialog stable">${l}</div>`),p(),m(),a.bindIcons(n(c),f)}function f(e){let{name:t,calendar:n}=options.map.lore;if(e===`mapName`)return t;if(e===`year`)return n.year;if(e===`era`)return n.era;if(e===`eraShort`)return n.eraShort}function p(){let{name:e,description:t,calendar:r}=options.map.lore;n(`loreMapName`).value=e,n(`loreYear`).value=String(r.year),n(`loreEra`).value=r.era,n(`loreEraShort`).value=r.eraShort,n(`loreDescription`).value=t}function m(){n(c).addEventListener(`change`,h),n(`loreMapNameRegenerate`).addEventListener(`click`,g),n(`loreEraRegenerate`).addEventListener(`click`,_)}function h(e){let t=e.target,r=t.value,{lore:i}=options.map;switch(t.id){case`loreMapName`:if(!r.trim())return;s.rename(r),a.set(`mapName`,i.name);break;case`loreYear`:if(!r||Number.isNaN(+r))return;s.setYear(+r),a.set(`year`,i.calendar.year);break;case`loreEra`:if(!r.trim())return;s.setEra(r),a.set(`era`,i.calendar.era),a.set(`eraShort`,i.calendar.eraShort),n(`loreEraShort`).value=i.calendar.eraShort;break;case`loreEraShort`:if(!r.trim())return;s.setEra(i.calendar.era,r),a.set(`eraShort`,i.calendar.eraShort);break;case`loreDescription`:s.setDescription(r);break;default:return}Options.save()}function g(){a.clear(`mapName`),s.rename(o.getMapName()),Options.save(),p()}function _(){a.clear(`era`),a.clear(`eraShort`),s.setEra(o.getEra()),Options.save(),p()}function v(){t(c)&&p()}var y={open:u,refresh:v};export{y as LoreEditor};