import{n as e,r as t}from"./index-CuUJKJN8.js";import{M as n,z as r}from"./utils-394NS37_.js";import{i}from"./tooltips-7PimaK30.js";import{i as a}from"./dialog-helpers-kMHr89OS.js";var o={openai:{keyLink:`https://platform.openai.com/account/api-keys`,generate:d},anthropic:{keyLink:`https://console.anthropic.com/account/keys`,generate:f},ollama:{keyLink:`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Ollama-text-generation`,generate:p}},s=`gpt-5.6-luna`,c={"gpt-5.6-luna":`openai`,"gpt-5.6-terra":`openai`,"gpt-5.6-sol":`openai`,"gpt-5-mini":`openai`,"gpt-5-nano":`openai`,"claude-opus-4-8":`anthropic`,"claude-sonnet-5":`anthropic`,"claude-haiku-4-5":`anthropic`,"ollama (local models)":`ollama`},l=new Set([`gpt-5.6-luna`,`gpt-5.6-terra`,`gpt-5.6-sol`,`gpt-5-mini`,`gpt-5-nano`,`claude-opus-4-8`,`claude-sonnet-5`]),u=`I'm working on my fantasy map.`;async function d({key:e,model:t,prompt:n,temperature:r,onContent:i}){let a={"Content-Type":`application/json`,Authorization:`Bearer ${e}`},o={model:t,messages:[{role:`system`,content:u},{role:`user`,content:n}],stream:!0};l.has(t)||(o.temperature=r),await m(await fetch(`https://api.openai.com/v1/chat/completions`,{method:`POST`,headers:a,body:JSON.stringify(o)}),e=>{let t=e.choices?.[0]?.delta?.content;t&&i(t)})}async function f({key:e,model:t,prompt:n,temperature:r,onContent:i}){await m(await fetch(`https://api.anthropic.com/v1/messages`,{method:`POST`,headers:{"Content-Type":`application/json`,"x-api-key":e,"anthropic-version":`2023-06-01`,"anthropic-dangerous-direct-browser-access":`true`},body:JSON.stringify({model:t,system:u,messages:[{role:`user`,content:n}],max_tokens:4096,stream:!0,...l.has(t)?{}:{temperature:r}})}),e=>{let t=e.delta?.text;t&&i(t)})}async function p({key:e,model:t,prompt:n,temperature:r,onContent:i}){await m(await fetch(`http://localhost:11434/api/generate`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({model:e,prompt:n,system:u,options:{temperature:r},stream:!0})}),e=>{e.response&&i(e.response)})}async function m(e,n){if(!e.ok){let n=t(`Failed to generate ({{status}} {{statusText}})`,{status:e.status,statusText:e.statusText});try{let t=await e.json();n=t.error?.message||t.error||n}catch(e){ERROR&&console.error(`Failed to parse AI provider error response`,e)}throw Error(n)}if(!e.body)throw Error(`Response has no body to stream`);let r=e.body.getReader(),i=new TextDecoder(`utf-8`),a=``;for(;;){let{done:e,value:t}=await r.read();if(e)break;a+=i.decode(t,{stream:!0});let o=a.split(`
`);for(let e=0;e<o.length-1;e++){let t=o[e].trim();if(t){if(t===`data: [DONE]`)break;try{n(t.startsWith(`data: `)?JSON.parse(t.slice(6)):JSON.parse(t))}catch(e){ERROR&&console.error(`Failed to parse line:`,t,e)}}}a=o.at(-1)??``}}function h(e,n){g(),_(e),$(`#aiGenerator`).dialog({title:t(`AI Text Generator`),position:{my:`center`,at:`center`,of:`svg`},resizable:!1,close:()=>a(`aiGenerator`),buttons:{[t(`Generate`)]:e=>{v(e.target)},[t(`Apply`)]:function(){let e=r(`aiGeneratorResult`).value;if(!e)return i(t(`No result to apply`),!0,`error`,4e3);n(e),$(this).dialog(`close`)},[t(`Close`)]:function(){$(this).dialog(`close`)}}})}function g(){a(`aiGenerator`);let i=`<div id="aiGenerator" class="dialog stable">
    <div style="display: flex; flex-direction: column; gap: 0.3em; width: 100%">
      <textarea id="aiGeneratorResult" placeholder="${t(`Generated text will appear here`)}" cols="30" rows="10"></textarea>
      <textarea id="aiGeneratorPrompt" placeholder="${t(`Type a prompt here`)}" cols="30" rows="5"></textarea>
      <div style="display: flex; align-items: center; gap: 1em">
        <label for="aiGeneratorModel"
          >${t(`Model`)}:
          <select id="aiGeneratorModel"></select>
        </label>
        <label
          for="aiGeneratorTemperature"
          data-tip="${t(`Temperature controls response randomness; higher values mean more creativity, lower values mean more predictability`)}"
        >
          ${t(`Temperature`)}:
          <input id="aiGeneratorTemperature" type="number" min="-1" max="2" step=".1" class="icon-key" />
        </label>
        <label for="aiGeneratorKey"
          >${t(`Key`)}:
          <input
            id="aiGeneratorKey"
            placeholder="${t(`Enter API key`)}"
            class="icon-key"
            data-tip="${e(t(`Enter API key`),t(`Note: the Generator doesn't store the key or any generated data`))}"
          />
          <button
            id="aiGeneratorKeyHelp"
            class="icon-help-circled"
            data-tip="${t(`Click to see the usage instructions`)}"
          ></button>
        </label>
      </div>
    </div>
  </div>`;r(`dialogs`).insertAdjacentHTML(`beforeend`,i),r(`aiGeneratorKeyHelp`).addEventListener(`click`,()=>{let e=c[r(`aiGeneratorModel`).value];n(o[e].keyLink)})}function _(e){r(`aiGeneratorResult`).value=``,r(`aiGeneratorPrompt`).value=e,r(`aiGeneratorTemperature`).value=localStorage.getItem(`fmg-ai-temperature`)||`1`;let t=r(`aiGeneratorModel`);t.options.length=0,Object.keys(c).forEach(e=>{t.options.add(new Option(e,e))}),t.value=localStorage.getItem(`fmg-ai-model`)??``,(!t.value||!c[t.value])&&(t.value=s);let n=c[t.value];r(`aiGeneratorKey`).value=localStorage.getItem(`fmg-ai-kl-${n}`)||``}async function v(e){let n=r(`aiGeneratorKey`).value;if(!n)return i(t(`Enter API key`),!0,`error`,4e3);let a=r(`aiGeneratorModel`).value;if(!a)return i(t(`Please select a model`),!0,`error`,4e3);localStorage.setItem(`fmg-ai-model`,a);let s=c[a];localStorage.setItem(`fmg-ai-kl-${s}`,n);let l=r(`aiGeneratorPrompt`).value;if(!l)return i(t(`Please enter a prompt`),!0,`error`,4e3);let u=r(`aiGeneratorTemperature`).valueAsNumber;if(Number.isNaN(u))return i(t(`Temperature must be a number`),!0,`error`,4e3);localStorage.setItem(`fmg-ai-temperature`,String(u));try{e.disabled=!0;let t=r(`aiGeneratorResult`);t.disabled=!0,t.value=``,await o[s].generate({key:n,model:a,prompt:l,temperature:u,onContent:e=>{t.value+=e}})}catch(e){let n=e instanceof Error&&e.message||String(e)||t(`Failed to generate text`);return i(n,!0,`error`,4e3)}finally{e.disabled=!1,r(`aiGeneratorResult`).disabled=!1}}var y={open:h};export{y as AiGenerator};