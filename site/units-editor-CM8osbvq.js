import{r as e}from"./index-CuUJKJN8.js";import{L as t,z as n}from"./utils-394NS37_.js";import{lt as r,t as i}from"./layers-CpGI7aJd.js";import{i as a,n as o}from"./dialog-helpers-kMHr89OS.js";import{t as s}from"./pins-BgZ3A9ES.js";import{r as c}from"./controls-DdyHmqKJ.js";var l=`unitsEditor`,u=`
    <div id="unitsBody" style="margin-left: 1.1em">
      <div class="unitsHeader" style="margin-top: 0.4em">
        <span class="icon-map-signs"></span>
        <label>${e(`Distance`)}:</label>
      </div>
      <div data-tip="${e(`Select a distance unit or provide a custom name`)}">
        <label>${e(`Distance unit`)}:</label>
        <select id="distanceUnitInput">
          <option value="mi" selected>${e(`Mile (mi)`)}</option>
          <option value="km">${e(`Kilometer (km)`)}</option>
          <option value="lg">${e(`League (lg)`)}</option>
          <option value="vr">${e(`Versta (vr)`)}</option>
          <option value="nmi">${e(`Nautical mile (nmi)`)}</option>
          <option value="nlg">${e(`Nautical league (nlg)`)}</option>
          <option value="custom_name">${e(`Custom name`)}</option>
        </select>
      </div>
      <div data-tip="${e(`Select how many distance units are in one pixel`)}">
        <i data-locked="0" id="lock_distanceScale" class="icon-lock-open"></i>
        <slider-input id="distanceScaleInput" min=".01" max="20" step=".1" value="3">
          <label>${e(`1 map pixel`)}:</label>
        </slider-input>
      </div>
      <div data-tip="${e(`Area unit name, type “square” to add ² to the distance unit`)}">
        <label>${e(`Area unit`)}:</label>
        <input id="areaUnit" type="text" value="square" />
      </div>
      <div class="unitsHeader">
        <span class="icon-signal"></span>
        <label>${e(`Altitude`)}:</label>
      </div>
      <div data-tip="${e(`Select an altitude unit or provide a custom name`)}">
        <label>${e(`Height unit`)}:</label>
        <select id="heightUnit">
          <option value="ft" selected>${e(`Feet (ft)`)}</option>
          <option value="m">${e(`Meters (m)`)}</option>
          <option value="f">${e(`Fathoms (f)`)}</option>
          <option value="custom_name">${e(`Custom name`)}</option>
        </select>
      </div>
      <div
        data-tip="${e(`Set height exponent, i.e. a value for altitude change sharpness. Altitude affects temperature and hence biomes`)}"
      >
        <slider-input
          id="heightExponentInput"
         
          min="1.5"
          max="2.2"
          step=".01"
          value="2"
        >
          <label>${e(`Exponent`)}:</label>
        </slider-input>
      </div>
      <div class="unitsHeader" data-tip="${e(`Select Temperature scale`)}">
        <span class="icon-temperature-high"></span>
        <label>${e(`Temperature`)}:</label>
      </div>
      <div>
        <label>${e(`Temperature scale`)}:</label>
        <select id="temperatureScale">
          <option value="°C" selected>${e(`degree Celsius (°C)`)}</option>
          <option value="°F">${e(`degree Fahrenheit (°F)`)}</option>
          <option value="K">${e(`Kelvin (K)`)}</option>
          <option value="°R">${e(`degree Rankine (°R)`)}</option>
          <option value="°De">${e(`degree Delisle (°De)`)}</option>
          <option value="°N">${e(`degree Newton (°N)`)}</option>
          <option value="°Ré">${e(`degree Réaumur (°Ré)`)}</option>
          <option value="°Rø">${e(`degree Rømer (°Rø)`)}</option>
        </select>
      </div>
      <div class="unitsHeader">
        <span class="icon-male"></span>
        <label>${e(`Population`)}:</label>
      </div>
      <div data-tip="${e(`Set how many people are in one population point`)}">
        <slider-input
          id="populationRateInput"
         
          min="10"
          max="10000"
          step="10"
          value="1000"
        >
          <label>${e(`1 population point`)}:</label>
        </slider-input>
      </div>
      <div data-tip="${e(`Set urban population modifier. Change to increase or decrease burgs population`)}">
        <slider-input id="urbanizationInput" min=".01" max="5" step=".01" value="1">
          <label>${e(`Urbanization rate`)}:</label>
        </slider-input>
      </div>
      <div data-tip="${e(`Set urban density: average population per building in Medieval Fantasy City Generator`)}">
        <slider-input id="urbanDensityInput" min="1" max="200" step="1" value="10">
          <label>${e(`Urban density`)}:</label>
        </slider-input>
      </div>
    </div>
    <div id="unitsBottom">
      <button id="unitsAltitudeLegend" data-tip="${e(`Toggle Legend box`)}" class="icon-list-bullet"></button>
      <button id="unitsRestore" data-tip="${e(`Reset to default`)}" class="icon-ccw"></button>
    </div>
`;function d(){o(`#unitsEditor, .stable`),f(),$(`#unitsEditor`).dialog({title:e(`Units Editor`),position:{my:`right top`,at:`right-10 top+10`,of:`svg`,collision:`fit`},close:()=>a(l)})}function f(){a(l),n(`dialogs`).insertAdjacentHTML(`beforeend`,`<div id="${l}" class="dialog stable">${u}</div>`),_(),v(),s.bindIcons(n(l),m)}var p=[`distanceUnit`,`distanceScale`,`areaUnit`,`heightUnit`,`heightExponent`,`temperatureScale`,`populationRate`,`urbanization`,`urbanDensity`];function m(e){let{distance:t,area:n,height:r,temperature:i,population:a}=options.map.units;if(e===`distanceUnit`)return t.unit;if(e===`distanceScale`)return t.scale;if(e===`areaUnit`)return n.unit;if(e===`heightUnit`)return r.unit;if(e===`heightExponent`)return r.exponent;if(e===`temperatureScale`)return i.unit;if(e===`populationRate`)return a.scale;if(e===`urbanization`)return a.urbanization.rate;if(e===`urbanDensity`)return a.urbanization.density}var h=[`areaUnit`,`heightUnit`,`temperatureScale`],g=e=>n(h.includes(e)?e:`${e}Input`);function _(){t(n(`distanceUnitInput`),options.map.units.distance.unit),t(n(`heightUnit`),options.map.units.height.unit);for(let e of p)g(e).value=String(m(e))}function v(){n(l).addEventListener(`change`,y),n(`unitsAltitudeLegend`).addEventListener(`click`,r.toggle),n(`unitsRestore`).addEventListener(`click`,S)}function y(e){let t=e.target,n=t.value,{units:a}=options.map;switch(t.id){case`distanceUnitInput`:if(n===`custom_name`){b(t,`distance`);return}a.distance.unit=n,s.set(`distanceUnit`,n),x();break;case`distanceScaleInput`:a.distance.scale=+n,s.set(`distanceScale`,+n),x();break;case`areaUnit`:a.area.unit=n,s.set(`areaUnit`,n);break;case`heightUnit`:if(n===`custom_name`){b(t,`height`);return}a.height.unit=n,s.set(`heightUnit`,n);break;case`heightExponentInput`:a.height.exponent=+n,s.set(`heightExponent`,+n),Temperature.generate(),i.draw(`temperature`);break;case`temperatureScale`:a.temperature.unit=n,s.set(`temperatureScale`,n),i.draw(`temperature`);break;case`populationRateInput`:a.population.scale=+n,s.set(`populationRate`,+n);break;case`urbanizationInput`:a.population.urbanization.rate=+n,s.set(`urbanization`,+n);break;case`urbanDensityInput`:a.population.urbanization.density=+n,s.set(`urbanDensity`,+n);break;default:return}r.refresh(),Options.save()}function b(t,n){_(),prompt(e(n===`distance`?`Provide a custom name for a distance unit`:`Provide a custom name for a height unit`),{default:``},e=>{let i=String(e);i&&(t.options.add(new Option(i,i,!1,!0)),n===`distance`?(options.map.units.distance.unit=i,s.set(`distanceUnit`,i),x()):(options.map.units.height.unit=i,s.set(`heightUnit`,i),r.refresh()),Options.save())})}function x(){i.draw(`scaleBar`),c()}function S(){options.map.units=Options.getDefaultOptions().map.units;for(let e of p)s.clear(e);Options.save(),_(),Temperature.generate(),x(),r.refresh()}var C={open:d};export{C as UnitsEditor};