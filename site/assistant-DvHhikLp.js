const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["style-presets-DshwVNWM.js","rolldown-runtime-XKyaHtl9.js","index-CuUJKJN8.js","styles-2PRH8Ggz.js","layers-CpGI7aJd.js","utils-394NS37_.js","extent-V-JVJWfI.js","sin-DYm9hqTl.js","emblems-generator-B3pPl-l-.js","tooltips-7PimaK30.js","platform-BYwF3i_d.js","icons-list-BiXau1Li.js","emblems-6bhvewnB.js","natural-rv4BlkMW.js","unitUtils-B91DAWIJ.js","draw-landmass-DV6ieuK9.js","viewport-C0deAIKO.js","state-B2hBYDzv.js","controllers-lOfLnkBO.js","schemaUtils-BT1J-24V.js","style-choices-BWMuX7s6.js","id-labels-Bh86rU1j.js","versioning-BZd9Nc6V.js","dialog-helpers-kMHr89OS.js","pins-BgZ3A9ES.js","options-schema-B_ig2znS.js","cultures-generator-D2mn7qkG.js","validationUtils-uGrkd4tj.js","population-generator-C23gWLdN.js","median-v2puX28K.js","mean-4Awewi9R.js","sum-BpJJqxFM.js","heightUtils-BfaaFPbS.js","styles-legacy--bqN3hoN.js","style-preset-BOcOHlR8.js","zoom-B1u9LW1L.js","icons-archive-BP8RzLBi.js","map-commands-CwSMNFYl.js","app-C3meBrse.js","options-tab-DhjqEPSL.js","relief-generator-LqnpKd9V.js","quadtree-DDGKeVV-.js","layer-labels-B60lVHW8.js","layers-tab-Brzrj8zh.js","generation-pipeline-DKnB7nUC.js","graph-override-D38xNizN.js","view-3d-options-DIuwGcyW.js","features-generator-CEtu9LJ4.js","labels-generator-ft6xLK0P.js","names-generator-CquhchJC.js","transports-generator-Dv1kk2bu.js","view-mode-C_KDkpw9.js","notes-BeusfcIz.js","map-entities-NpzkL-1b.js","fonts-CgEouFVh.js","viewbox-events-DpWtTLWO.js","drag-C_reJWZK.js","highlight-DOx2q_4P.js","io-panes-DVZJgAih.js","tags-4fjWFj3G.js","diplomacy-CV45FeJs.js","goods-generator-BJ5zKjkt.js","measurers-generator-C5MWPpMZ.js","map-restoration-DNmGwu8D.js","style-reference-CVPTwItr.js","schema-form-4Hu8vVgd.js","textures-DM0j3iRU.js","emblem-image-lwUYLSL0.js","export-CUr5GPeL.js"])))=>i.map(i=>d[i]);
import{C as e,d as t,f as n,i as r,r as i,u as a}from"./index-CuUJKJN8.js";import{b as o,c as s,l as c,u as l,v as u,w as d,y as f}from"./options-tab-DhjqEPSL.js";import{B as p,Nt as ee,b as m,r as h,z as g}from"./utils-394NS37_.js";import{K as te,t as ne}from"./layers-CpGI7aJd.js";import{i as _,t as v}from"./emblems-generator-B3pPl-l-.js";import{S as y,_ as re,a as b,c as ie,g as ae,i as oe,l as se,n as ce,o as le,p as ue,r as de}from"./unitUtils-B91DAWIJ.js";import{i as fe}from"./tooltips-7PimaK30.js";import{i as pe}from"./viewport-C0deAIKO.js";import{t as x}from"./controllers-lOfLnkBO.js";import{n as me}from"./layer-labels-B60lVHW8.js";import{i as he}from"./zoom-B1u9LW1L.js";import{c as ge}from"./dialog-helpers-kMHr89OS.js";import{t as _e}from"./validationUtils-uGrkd4tj.js";import{r as ve}from"./cultures-generator-D2mn7qkG.js";import{t as ye}from"./features-generator-CEtu9LJ4.js";import{n as be}from"./labels-generator-ft6xLK0P.js";import{c as xe,t as Se}from"./styles-2PRH8Ggz.js";import{i as Ce,n as S,r as we,t as Te}from"./map-entities-NpzkL-1b.js";import{t as Ee}from"./notes-BeusfcIz.js";import{n as De}from"./diplomacy-CV45FeJs.js";import{i as Oe}from"./goods-generator-BJ5zKjkt.js";import{C as ke,D as Ae,E as je,O as Me,b as Ne,k as Pe,l as Fe,m as Ie,p as Le,v as Re,w as ze,x as Be,y as Ve}from"./app-C3meBrse.js";import{a as He,c as Ue,d as We,f as Ge,i as Ke,l as qe,m as Je,n as Ye,o as Xe,p as Ze,r as Qe,s as $e,t as et,u as tt}from"./connection-pvGflJND.js";import{t as nt}from"./lore-CPF9F9es.js";import{t as rt}from"./effects-qoEqmbHA.js";import{t as C}from"./world-D8DpDNxH.js";import{i as it,n as at,r as ot,t as st}from"./reveal-Bif-TDKz.js";var ct=ee(`4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab`),w=class extends Error{code;retryAfter;constructor(e,t,n){super(t),this.name=`AzgaarServerError`,this.code=e,this.retryAfter=n}},lt=()=>``,ut=()=>lt().replace(/\/+$/,``)||`https://ask.azgaarsfmg.com`,dt=()=>!window.electron&&(location.origin===`https://azgaar.github.io`||!!lt());async function ft(e,t){let n=c(),r={...t.headers,...n?{Authorization:`Bearer ${n}`}:{}},a;try{a=await fetch(`${ut()}${e}`,{...t,headers:r})}catch(e){throw t.signal?.aborted?e:new w(`unreachable`,`The assistant is unreachable. Check your connection and try again.`)}if(a.ok){if(a.status===204)return;try{return await a.json()}catch{throw new w(`provider_error`,`The assistant returned an unreadable response.`)}}if(a.status===401)throw s(),new w(`unauthorized`,`Your sign-in has expired. Sign in with Discord again for more questions.`);let o=`provider_error`,l=i(`The assistant returned an error ({{status}}).`,{status:a.status}),u;try{let e=await a.json();e?.error&&(o=e.error.code??o,l=e.error.message??l,u=e.error.retryAfter)}catch{}throw new w(o,l,u)}var pt=async(e,t,n)=>{let r=await ft(`/v1/ask`,{method:`POST`,signal:n,headers:{"Content-Type":`application/json`},body:JSON.stringify(t?{question:e,conversationId:t}:{question:e})});if(!r)throw new w(`provider_error`,`The assistant returned an unreadable response.`);return r},mt=(e,t)=>ft(`/v1/feedback`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({requestId:e,rating:t})}),ht=()=>ft(`/v1/limits`,{method:`GET`}),gt=()=>l(`${ut()}/v1/auth/discord`);async function _t(){try{await ft(`/v1/auth/logout`,{method:`POST`})}catch{}s()}async function vt(e,t,n,r){n({kind:`question`,text:t});let i=e.serverChatId;try{let a=await pt(t,i,r);if(r.aborted)return;e.serverChatId=a.conversationId,i&&i!==a.conversationId&&n({kind:`divider`}),n({kind:`answer`,text:a.answer,ratingId:a.requestId})}catch(t){if(r.aborted)return;throw t instanceof w&&t.code===`invalid_request`&&(e.serverChatId=void 0),t}}var yt=`fmg-assistant-chats`,bt=`fmg-assistant-current-chat`,xt=60,T=[],St=``,Ct=!1,wt,Tt=!1,Et=!1;function Dt(){return wt??=ldb.get(yt).then(e=>{T=Array.isArray(e)?e.filter(e=>e?.id&&Array.isArray(e.items)):[],St=localStorage.getItem(bt)||T[0]?.id||``,Ct=!0},e=>{throw wt=void 0,e}),wt}var Ot=()=>[...T].sort((e,t)=>t.updated-e.updated),kt=()=>T.find(e=>e.id===St);function At(e){let t=T.find(t=>t.id===e);return t?(St=e,localStorage.setItem(bt,e),Pt(t),t):kt()}function jt(e,t,n){let r={id:globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(36).slice(2)}`,title:i(`New chat`),updated:Date.now(),tier:e,mapId:t,mapName:n,items:[],messages:[],usage:{input:0,output:0,cached:0}};return T.push(r),At(r.id),r}function Mt(e){T=T.filter(t=>t.id!==e),St===e&&(St=``,localStorage.removeItem(bt)),Lt()}function Nt(e,t){if(t.kind===`question`&&!e.items.some(e=>e.kind===`question`)){let n=t.text||`Image`;e.title=n.length>xt?`${n.slice(0,xt).trimEnd()}…`:n}e.items.push(t),Pt(e)}function Pt(e){e.updated=Date.now(),Lt()}function Ft(e,t,n){return!!t&&e.tier===`key`==(t===`key`)&&e.mapId===n}var It=e=>e.tier===`key`&&JSON.stringify(e.messages,(e,t)=>e===`data`&&typeof t==`string`?``:t).length>1e5;function Lt(){Ct&&typeof ldb<`u`&&(Et=!0,!Tt&&(Tt=!0,(async()=>{try{for(;Et;)Et=!1,await ldb.set(yt,T)}catch(e){ERROR&&console.error(`Assistant chats could not be saved`,e)}finally{Tt=!1}})()))}var Rt=`StylePresets.apply`,zt=new class{loaded=new Map;ensureGroupStyles;async preload(e){let t=new Set,n=e=>{if(Array.isArray(e))e.forEach(n);else if(e&&typeof e==`object`){let{op:r,args:i}=e;r===Rt&&Array.isArray(i)&&typeof i[0]==`string`?t.add(i[0]):Object.values(e).forEach(n)}};if(n(e),!t.size)return;let[{StylePresetsService:i},{ensureGroupStyles:a}]=await Promise.all([r(()=>import(`./style-presets-DshwVNWM.js`).then(e=>e.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33])),r(()=>import(`./style-preset-BOcOHlR8.js`),__vite__mapDeps([34,2,5,4,1,6,7,8,9,10,11,12,13,14,15,16,17,18,35,23,3,19,20,0,21,22,24,25,26,27,28,29,30,31,32,33,36]))]);this.ensureGroupStyles=a;for(let e of t){let t=!i.isSystem(e);if(t&&this.loaded.delete(e),this.loaded.has(e)||t&&!i.listCustom().includes(e))continue;let{styles:n,error:r}=await i.load(e),a=!r&&i.parse(n);a&&this.loaded.set(e,a)}}apply(e){let t=this.loaded.get(e);if(!t)throw Error(`No style preset "${e}"; read_docs(["Styles"]) lists them`);let n=styles.relief.options.density;Object.assign(styles,structuredClone(t)),styles.relief.options.density=n,this.ensureGroupStyles?.()}},Bt={AddedLabels:Ve,Biomes:je,Burgs:o,Cultures:ve,Emblems:v,Features:ye,Goods:Oe,Journeys:Fe,Labels:be,Lore:nt,Markers:Ie,Markets:Le,Military:f,Notes:Ee,Provinces:Re,Religions:Ne,Rivers:Ae,Routes:ze,States:ke,Styles:Se,StylePresets:zt,Zones:Be},Vt={Burgs:[`rename`,`setPopulation`,`setGroup`,`setType`,`setBuilding`,`setCulture`,`setPort`,`setCapital`,`move`,`add`,`remove`,`setTreasury`,`setLocked`,`setLink`],States:[`rename`,`recolor`,`setFullName`,`setForm`,`setCulture`,`setType`,`setExpansionism`,`setRelation`,`recalculate`,`merge`,`add`,`remove`,`setTaxes`,`setTreasury`,`setLocked`,`setChronicleEntry`,`setCells`,`setPopulation`],Provinces:[`rename`,`recolor`,`setFullName`,`setForm`,`setCapital`,`setState`,`add`,`declareIndependence`,`remove`,`merge`,`setPopulation`,`setLocked`,`setCells`],Cultures:[`rename`,`recolor`,`setType`,`setBase`,`setExpansionism`,`recalculate`,`add`,`remove`,`setEmblemShape`,`setLocked`,`setOrigins`,`setCode`,`moveCenter`,`setCells`,`setPopulation`],Religions:[`rename`,`recolor`,`setDeity`,`setType`,`setForm`,`setExpansion`,`setExpansionism`,`recalculate`,`add`,`remove`,`setLocked`,`setOrigins`,`setCode`,`moveCenter`,`setCells`,`setPopulation`],Biomes:[`rename`,`recolor`,`setHabitability`,`add`,`remove`,`setCells`,`restore`],Rivers:[`rename`,`setType`,`add`,`remove`,`setParent`,`setWidth`,`setLocked`,`create`],Routes:[`rename`,`setGroup`,`add`,`remove`,`setLocked`,`create`,`split`,`join`],Features:[`rename`,`setSubtype`,`setGroup`,`setCoastline`],Zones:[`rename`,`recolor`,`setType`,`setHidden`,`setCells`,`add`,`remove`,`setPopulation`],Markers:[`rename`,`setIcon`,`setType`,`setHidden`,`place`,`remove`,`move`,`setPinned`,`setLocked`,`setAppearance`],AddedLabels:[`rename`,`place`,`remove`],Labels:[`setGroup`,`setLayout`,`reset`],Military:[`rename`,`remove`,`add`,`setAlert`,`setUnits`,`setNaval`,`setIcon`,`move`,`rotate`,`setBase`,`split`,`attach`],Emblems:[`set`,`regenerateOne`,`place`],Journeys:[`add`,`remove`,`rename`,`setType`,`recolor`,`setHidden`,`setLocked`,`addSegment`,`removeSegment`,`moveSegment`,`setSegment`,`resetSegment`],Goods:[`rename`,`setIcon`,`recolor`,`setPrice`,`setUnit`,`setTags`,`setProduction`],Markets:[`rename`,`recolor`],Lore:[`rename`,`setYear`,`setEra`,`setDescription`],Notes:[`write`],Styles:[`setValue`],StylePresets:[`apply`]},Ht=new Set(Object.entries(Vt).flatMap(([e,t])=>t.map(t=>`${e}.${t}`)));function Ut(e,t){let[n,r]=e.split(`.`);return Bt[n][r](...t)}var Wt=`var grid: GridGraph;
  var pack: PackedGraph;
  var customization: number;
  interface Window {
    applyLayersPreset: typeof applyLayersPreset;
    applyURLLayers: typeof applyURLLayers;
  }
  var Layers: LayersRegistry<LayerId>;
  var mapHistory: MapHistoryEntry[];
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var regeneratePrompt: (config?: GenerationConfig) => void;
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var regenerateMap: (config?: GenerationConfig | string) => void;
  var Options: OptionsModel;
  /** what this browser wants, read bare across the app and replaced wholesale on restore */
  var options: OptionsData;
  // biome-ignore lint/suspicious/noRedeclare: legacy seam
  var toggleOptions: (event?: Event) => void;
  interface Window {
    showOptions: typeof showOptions;
    hideOptions: typeof hideOptions;
  }
  interface Window {
    showSupporters: typeof showSupporters;
  }
  // biome-ignore lint/suspicious/noRedeclare: legacy seam
  var changeCellsDensity: (density: number) => void;
  interface Window {
    restoreSeed: typeof restoreSeed;
    generateMapWithSeed: typeof generateMapWithSeed;
    showSeedHistoryDialog: typeof showSeedHistoryDialog;
  }
  // biome-ignore lint/suspicious/noRedeclare: the bridges registered just below
  var zoomTo: ZoomTo;
  // biome-ignore lint/suspicious/noRedeclare: the bridges registered just below
  var resetZoom: ResetZoom;
  // biome-ignore lint/suspicious/noRedeclare: the bridges registered just below
  var invokeActiveZooming: InvokeActiveZooming;
  var edits: Uint8Array[] & { n: number };
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var Controllers: ControllersRegistry;
  interface Window {
    updateMinimap: () => void;
  }
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var heightmapTemplates: Record<string, HeightmapTemplate>;
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var precreatedHeightmaps: Record<string, PrecreatedHeightmap>;
  var Supporters: typeof supporters;
  var AddedLabels: AddedLabelsModule;
  var Biomes: BiomesGenerator;
  var Burgs: BurgModule;
  // vendored lib, loaded as a classic script from public/libs/simplify.js
  var simplify: (points: Point[], tolerance: number, highestQuality?: boolean) => Point[];
  var Coordinates: CoordinatesModule;
  var Cultures: CulturesGenerator;
  interface Window {
    Emblems: EmblemsGenerator;
  }
  var Features: FeatureModule;
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var GenerationPipeline: import("@/generators/pipeline").Pipeline<GenerationPipelineStepId, GenerationContext>;
  var Goods: GoodsModule;
  var Grid: GridModule;
  var HeightmapGenerator: HeightmapModule;
  var Ice: IceModule;
  var Journeys: JourneysModule;
  var Labels: LabelsModule;
  var Lakes: LakesModule;
  var Markers: MarkersModule;
  var Markets: MarketsModule;
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var Measurers: MeasurersModule;
  var Military: MilitaryModule;
  var Names: NamesGenerator;
  var Pack: PackModule;
  var Precipitation: PrecipitationModule;
  var Production: ProductionModule;
  var Provinces: ProvinceModule;
  var Relief: ReliefModel;
  var Religions: ReligionsModule;
  var Rivers: RiverModule;
  var Routes: RoutesModule;
  var States: StatesModule;
  /** the live style record, read bare across every layer and replaced wholesale on load */
  var styles: StylesData;
  var Tags: TagsModule;
  var Temperature: TemperatureModule;
  var Transports: TransportsModule;
  var Zones: ZonesModule;
  interface Window {
    EmblemRenderer: EmblemRendererModule;
  }
  var TradeAnimation: TradeAnimationModule;
  interface Window {
    initiateAutosave: typeof initiateAutosave;
    toggleSaveReminder: typeof toggleSaveReminder;
  }
  var fonts: FontDefinition[];
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var Services: ServicesRegistry;
  interface Window {
    JSZip: any; // registered on demand by libs/jszip.min.js (see exportToPngTiles)
  }
  interface Window {
    showSaveFilePicker?: (options?: {
      suggestedName?: string;
      types?: { description?: string; accept: Record<string, string[]> }[];
    }) => Promise<FileSystemFileHandle>;
  }
  var TIME: boolean;
  var INFO: boolean;
  var WARN: boolean;
  var ERROR: boolean;
  var DEBUG: { stateLabels?: boolean; [key: string]: boolean | undefined };
  interface Window {
    electron?: ElectronBridge;
  }
  interface Navigator {
    userAgentData?: { mobile?: boolean };
    standalone?: boolean;
  }
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var focusOn: () => void;
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var generateMapOnLoad: () => void;
  interface Window {
    copyMapURL: typeof copyMapURL;
  }
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var VERSION: string;
  // biome-ignore lint/suspicious/noRedeclare: exposed on window for legacy JS
  var cleanupData: () => Promise<void>;
  interface Window {
    tip: typeof import("../components/tooltips").tip;
    clearMainTip: typeof import("../components/tooltips").clearMainTip;
    showElementLockTip: typeof import("../components/tooltips").showElementLockTip;
    fitLegendBox: typeof import("../renderers/draw-legend").fitLegendBox;
    applyOption: typeof import("../utils").applyOption;
    closeDialogs: typeof import("../components/dialog/dialog-helpers").closeDialogs;
    confirmationDialog: typeof import("../components/dialog/dialog-helpers").confirmationDialog;
    downloadFile: typeof import("../utils").downloadFile;
    uploadFile: typeof import("../utils").uploadFile;
    setMapZoom: typeof import("../components/zoom").setMapZoom;
    setZoomExtent: typeof import("../components/zoom").setZoomExtent;
    setTranslateExtent: typeof import("../components/zoom").setTranslateExtent;
    getLabelsData: typeof import("../renderers/labels/label-data").getLabelsData;
  }

  // Elements the browser exposes as globals by their id. New code should use \`ensureEl\` instead
  var alertMessage: HTMLElement;

  // Vendored libraries, each loaded by its own <script> tag in index.html
  var $: (selector: any) => any; // jQuery + jQuery UI
  var aleaPRNG: (seed: string | number) => () => number;
  var FlatQueue: any;
  var RgbQuant: any; // image quantization, used by the heightmap image converter
  var THREE: any; // lazy-loaded by the 3d view
  var Dropbox: any; // dropbox-sdk, loaded on demand from libs/dropbox-sdk.min.js
  var ldb: {
    get: <T = Blob>(key: string) => Promise<T | null | undefined>; // any value IndexedDB can clone
    set: (key: string, value: unknown) => Promise<void>;
  };
  interface Window {
    last: typeof last;
    unique: typeof unique;
    TYPED_ARRAY_MAX: typeof TYPED_ARRAY_MAX;
  }
  interface Window {
    toHEX: typeof toHEX;
  }
  interface Window {
    ERROR: boolean;

    debounce: typeof debounce;
    parseError: typeof parseError;
    openURL: typeof openURL;
    wiki: typeof wiki;
    link: typeof link;
    isCtrlClick: typeof isCtrlClick;
  }
  interface Window {
    drawCellsValue: typeof drawCellsValue;
    drawPolygons: typeof drawPolygons;
    drawRouteConnections: typeof drawRouteConnections;
    drawPoint: typeof drawPoint;
    drawPath: typeof drawPath;
  }
  interface Window {
    dist2: typeof distanceSquared;
  }
  interface JSON {
    isValid: (str: string) => boolean;
    safeParse: (str: string) => any;
  }
  interface Window {
    nth: typeof nth;
    list: typeof list;
  }
  interface Window {
    getNextId: typeof getNextId;
    ensureEl: typeof ensureEl;
    findEl: typeof findEl;
  }
  interface Window {
    rn: typeof rn;
    minmax: typeof minmax;
    normalize: typeof normalize;
  }
  interface Window {
    getIsolines: typeof getIsolines;
    getVertexPath: typeof getVertexPath;
  }
  interface String {
    replaceAll(
      searchValue: string | RegExp,
      replaceValue: string | ((substring: string, ...args: any[]) => string)
    ): string;
  }

  // Array.flat and Array.at are polyfilled above for old browsers, but not declared here:
  // lib ES2023 already types them, and a \`flat(): T[]\` declaration would shadow it and mistype nested arrays

  interface ReadableStream<R> {
    [Symbol.asyncIterator](): AsyncIterableIterator<R>;
  }
  interface Window {
    rand: typeof rand;
    P: typeof P;
    each: typeof each;
    gauss: typeof gauss;
    rw: typeof rw;
    generateSeed: typeof generateSeed;
  }
  interface Window {
    round: typeof round;
    capitalize: typeof capitalize;
    parseTransform: typeof parseTransform;
    setInlineStyleProperty: typeof setInlineStyleProperty;
  }`,Gt=`AddedLabels, Biomes, Burgs, Coordinates, Cultures, Features, GenerationPipeline, Goods, Grid, HeightmapGenerator, Ice, Labels, Lakes, Markers, Markets, Measurers, Military, Names, Pack, Precipitation, Production, Provinces, Relief, Religions, Rivers, Routes, States, Tags, Temperature, Transports, Zones`,Kt=`Controllers.AiGenerator
Controllers.BattleScreen
Controllers.BiomesEditor
Controllers.BurgCreator
Controllers.BurgEditor
Controllers.BurgGroupEditor
Controllers.BurgsOverview
Controllers.CellInfo
Controllers.ChartsOverview
Controllers.CoastlineEditor
Controllers.ColorPicker
Controllers.ComparePrices
Controllers.ContextMenu
Controllers.CsvUpload
Controllers.CulturesEditor
Controllers.DiplomacyEditor
Controllers.DiplomacyOverview
Controllers.DistributionEditor
Controllers.ElevationProfile
Controllers.EmblemsEditor
Controllers.GoodEditor
Controllers.GoodsEditor
Controllers.FeaturesOverview
Controllers.HeightmapEditor
Controllers.HeightmapSelection
Controllers.Assistant
Controllers.IconPicker
Controllers.HierarchyTree
Controllers.IceEditor
Controllers.JourneyEditor
Controllers.JourneysOverview
Controllers.LabelsEditor
Controllers.LabelGroupsConfigurator
Controllers.LabelCreator
Controllers.LabelsOverview
Controllers.LakesEditor
Controllers.LoreEditor
Controllers.MarkersEditor
Controllers.MarkersSettings
Controllers.MarkerCreator
Controllers.MarkersInRadius
Controllers.MarkersOverview
Controllers.MarketDealsOverview
Controllers.MarketOverview
Controllers.MarketsOverview
Controllers.MeasurersEditor
Controllers.MilitaryOverview
Controllers.Minimap
Controllers.NamesbaseEditor
Controllers.NotesEditor
Controllers.Omnibar
Controllers.PaintEditor
Controllers.ProductionChains
Controllers.ProductionOverview
Controllers.ProvincesEditor
Controllers.ProvincesRegeneration
Controllers.RegimentEditor
Controllers.RegimentsOverview
Controllers.ReliefEditor
Controllers.ReliefRulesEditor
Controllers.ReligionsEditor
Controllers.RiverCreator
Controllers.RiverAutoCreator
Controllers.RiverEditor
Controllers.RiversOverview
Controllers.RouteCreator
Controllers.RouteEditor
Controllers.RouteGroupsEditor
Controllers.RoutesOverview
Controllers.StatesEditor
Controllers.StyleEditor
Controllers.StylePresetsEditor
Controllers.SubmapTool
Controllers.TemperatureGraph
Controllers.TradeAnimationEditor
Controllers.TradeDetails
Controllers.WrapTool
Controllers.TransformTool
Controllers.TransportEditor
Controllers.UnitsEditor
Controllers.View3d
Controllers.WorldConfigurator
Controllers.ZonesEditor
Services.AppOffer
Services.Cloud
Services.ExportJson
Services.ExportMap
Services.Load
Services.Save
Services.UiTour`,qt=`Voronoi data (grid): grid.{sampling, spacing, cellsY, cellsX, points, boundary, cells, vertices}; grid.cells.{i, c, v, b}; grid.vertices.{p, c, v}
Voronoi data (pack): pack.{cells, vertices}; pack.cells.{i, p, c, v, b, g}; pack.vertices.{p, c, v}
Features data (grid): grid.{features}; i, land, border, type
Features data (pack): pack.{features}; i, land, border, type, subtype, group, cells, area, firstCell, vertices, name, note, coastline
Specific cells data (grid): grid.cells.{h, f, t, temp, prec}
Specific cells data (pack): pack.cells.{h, f, t, s, biome, burg, culture, state, province, religion, good, market, area, pop, r, fl, conf, harbor, haven, routes}
Cultures: i, base, name, ancestry, origins, shield, center, code, color, expansionism, type, area, cells, rural, urban, lock, removed, note
Burgs: i, name, cell, x, y, culture, state, feature, population, type, group, label, coa, MFCG, link, capital, port, market, production, product, treasury, citadel, plaza, shanty, temple, walls, lock, removed, note
States: i, name, form, formName, fullName, color, center, pole, culture, type, expansionism, area, burgs, cells, rural, urban, neighbors, provinces, diplomacy, campaigns, alert, military, label, coa, salesTax, pollTax, treasury, tariffs, lock, removed, note
States (regiment): i, x, y, bx, by, angle, icon, cell, state, name, n, u, note
Provinces: i, name, formName, fullName, color, center, pole, area, burg, burgs, cells, rural, urban, coa, label, lock, removed, note
Religions: i, name, type, form, deity, color, code, origins, center, culture, expansionism, expansion, area, cells, rural, urban, lock, removed, note
Rivers: i, name, type, source, mouth, parent, basin, cells, points, discharge, length, width, sourceWidth, note, lock
Markers: i, name, icon, x, y, cell, type, size, fill, stroke, pin, pinned, dx, dy, px, lock, note
Labels: text, group, dx, dy, pathPoints, startOffset, fontSize, letterSpacing, i, label, note, groups, name, type, active, layerDependency, mode
Routes: i, points, feature, group, length, name, lock, note
Zones: i, name, type, color, cells, lock, hidden, note
Ice: i, type, offset, points
Measurers: type, points
Goods: i, name, tags, value, unit, icon, color, chance, distribution, biomeOutput, recipes, multipliers, demandCoverage, note
Markets: i, centerBurgId, color, goods, name, note
Biomes: i, name, color, cost, habitability, icons, iconsDensity, removed, note
Deals: i, seller, sellerType, buyer, buyerType, good, units, price, tax, tariff
Journeys: i, name, type, color, segments, visible, lock, note, transport, speed, distance, points, avoidRoads, duration, custom
Transports: i, name, speed, domain, hoursPerDay
Name bases: i, name, b, min, max, d, m`,Jt=`Burgs.rename(burgId: number, name: string) // Rename a burg; its label text follows the name
Burgs.setPopulation(burgId: number, people: number) // Set a burg's population as shown in the Burg Editor, in people
Burgs.setGroup(burgId: number, group: string) // Move a burg to an existing burg group
Burgs.setType(burgId: number, type: string) // Set a burg's culture type, which is about geography, not rank
Burgs.setBuilding(burgId: number, building: string, present: boolean) // Turn one of a burg's buildings on or off: citadel, plaza, shanty, temple or walls
Burgs.setCulture(burgId: number, cultureId: number) // Set the culture of a burg's people
Burgs.setPort(burgId: number, port: boolean) // Make a burg a port on the water body it faces or drains to, or stop it being one
Burgs.setCapital(burgId: number) // Make a burg the capital of the state it is in; the old capital becomes an ordinary burg
Burgs.move(burgId: number, x: number, y: number) // Move a burg to a free land cell at a map point; a capital stays inside its state or province. A port trades by the water at its new place, if any
Burgs.add(x: number, y: number) // Found a burg on a free land cell at a map point; returns its id
Burgs.remove(burgId: number) // Remove a burg that is neither a capital nor a market center
Burgs.setTreasury(burgId: number, amount: number) // Set a burg's treasury, in the map's currency
Burgs.setLocked(burgId: number, locked: boolean) // Lock a burg so regeneration keeps it, or unlock it
Burgs.setLink(burgId: number, url: string) // Set the URL of a burg's map preview: a generator link or an image. Empty restores the default preview
States.rename(stateId: number, name: string) // Rename a state; a custom full name or label keeps its pattern when the old name stands in it as a whole word
States.recolor(stateId: number, color: string) // Set a state's color
States.setFullName(stateId: number, fullName: string) // Set a state's full name, such as "Grand Duchy of Orwin"
States.setForm(stateId: number, formName: string, form?: string) // Set a state's form name, such as Kingdom or Free City; empty clears it. Its government (Monarchy, Republic, Union, Theocracy or Anarchy) follows a listed name, or \`form\` for a custom one. The full name is rebuilt
States.setCulture(stateId: number, cultureId: number) // Set a state's dominant culture
States.setType(stateId: number, type: string) // Set a state's type, which steers its expansion: Generic, Hunting, Highland, River, Lake, Naval or Nomadic
States.setExpansionism(stateId: number, expansionism: number) // Set how strongly a state expands when states are recalculated, from 0 to 99
States.setRelation(stateId: number, otherId: number, relation: string) // Set a state's relation towards another; the other takes the inverse and the chronicle records the change
States.recalculate() // Redraw state borders from their capitals, types and expansionism; provinces are regenerated
States.merge(rulingStateId: number, stateIds: number[], asProvinces = false) // Merge states into a ruling one, which takes their lands, burgs, provinces and regiments. With \`asProvinces\`, each merged state becomes one province of the ruling state instead of keeping its own provinces
States.add(x: number, y: number) // Found a state at a map point with the burg there, or a new one, as its capital. It owns only that cell. Returns its id
States.remove(stateId: number) // Remove a state with its provinces; its lands and burgs become neutral
States.setTaxes(stateId: number, salesTax: number, pollTax: number) // Set a state's sales tax (0 to 1, on deals it sells) and poll tax (per person); they take effect when production is regenerated
States.setTreasury(stateId: number, amount: number) // Set a state's treasury, in the map's currency
States.setLocked(stateId: number, locked: boolean) // Lock a state so regeneration keeps it, or unlock it
States.setChronicleEntry(index: number, lines: string[]) // Replace a chronicle entry with text lines, the first being its title. Index -1 adds an entry after any the batch records before it (setRelation does); no lines removes it
States.setCells(stateId: number, cellIds: number[]) // Give land cells to a state, or to neutral lands with id 0, with their burgs. Provinces follow: a province wholly taken changes owner, a split one is divided
States.setPopulation(stateId: number, rural: number, urban: number) // Set a state's rural and urban population, in people: its cells and burgs scale to the totals
Provinces.rename(provinceId: number, name: string) // Rename a province; a custom full name or label keeps its pattern when the old name stands in it as a whole word
Provinces.recolor(provinceId: number, color: string) // Set a province's color
Provinces.setFullName(provinceId: number, fullName: string) // Set a province's full name, such as "County of Vel"
Provinces.setForm(provinceId: number, formName: string) // Set a province's form, such as County or Duchy; empty clears it. The full name is rebuilt from it
Provinces.setCapital(provinceId: number, burgId: number) // Make a burg inside a province its capital
Provinces.setState(provinceId: number, stateId: number) // Give a province, with its lands and burgs, to another state
Provinces.add(x: number, y: number) // Found a province at a map point inside a state, with the cell and its neighbors in that state. Returns its id
Provinces.declareIndependence(provinceId: number) // Turn a province with a burg into a new state that takes its lands and burgs. Returns the state id
Provinces.remove(provinceId: number) // Remove a province; its lands stay with the state
Provinces.merge(primaryId: number, provinceIds: number[]) // Merge provinces of one state into a primary one, which takes their lands and burgs
Provinces.setPopulation(provinceId: number, rural: number, urban: number) // Set a province's rural and urban population, in people: its cells and burgs scale to the totals
Provinces.setLocked(provinceId: number, locked: boolean) // Lock a province so regeneration keeps it, or unlock it
Provinces.setCells(provinceId: number, cellIds: number[]) // Give land cells of the province's state to a province; another province's center cannot move
Cultures.rename(cultureId: number, name: string) // Rename a culture; its code is recomputed
Cultures.recolor(cultureId: number, color: string) // Set a culture's color
Cultures.setType(cultureId: number, type: string) // Set a culture's type: Generic, Hunting, Highland, River, Lake, Naval or Nomadic
Cultures.setBase(cultureId: number, baseId: number) // Set the name base a culture takes its names from, by index in Names.nameBases
Cultures.setExpansionism(cultureId: number, expansionism: number) // Set how strongly a culture expands when cultures are recalculated, from 0 to 99
Cultures.recalculate() // Redraw culture borders from their centers, types and expansionism; burgs take their cell's culture
Cultures.add(x: number, y: number) // Found a culture centered at a map point; it takes land when cultures are recalculated. Returns its id
Cultures.remove(cultureId: number) // Remove a culture; its lands, burgs, states and religions fall to the wildlands
Cultures.setEmblemShape(cultureId: number, shape: string) // Set a culture's emblem shape; emblems of its states, provinces and burgs take it, except icon emblems
Cultures.setLocked(cultureId: number, locked: boolean) // Lock a culture so regeneration keeps it, or unlock it
Cultures.setOrigins(cultureId: number, originIds: number[]) // Set a culture's origins, as the Hierarchy tree does: the first is primary (0 = top level), the rest secondary
Cultures.setCode(cultureId: number, code: string) // Set a culture's short code, 1 to 3 characters
Cultures.moveCenter(cultureId: number, x: number, y: number) // Move a culture's center to a land cell at a map point; it takes effect when cultures are recalculated
Cultures.setCells(cultureId: number, cellIds: number[]) // Give land cells to a culture, or to the wildlands with id 0; burgs there take it too
Cultures.setPopulation(cultureId: number, rural: number, urban: number) // Set a culture's rural and urban population, in people: its cells and burgs scale to the totals
Religions.rename(religionId: number, name: string) // Rename a religion; its code is recomputed
Religions.recolor(religionId: number, color: string) // Set a religion's color
Religions.setDeity(religionId: number, deity: string) // Set the deity a religion worships; empty clears it
Religions.setType(religionId: number, type: string) // Set a religion's type: Folk, Organized, Cult or Heresy
Religions.setForm(religionId: number, form: string) // Set a religion's form, a free label such as Polytheism or Dualism
Religions.setExpansion(religionId: number, expansion: string) // Set how far a religion may expand: global, state or culture
Religions.setExpansionism(religionId: number, expansionism: number) // Set how strongly a religion expands when religions are recalculated, from 0 to 99
Religions.recalculate() // Redraw religion borders from their centers, expansion and expansionism
Religions.add(x: number, y: number) // Found a religion centered at a map point, its type and name drawn from the local culture and faith. Returns its id
Religions.remove(religionId: number) // Remove a religion; its believers lose their faith
Religions.setLocked(religionId: number, locked: boolean) // Lock a religion so regeneration keeps it, or unlock it
Religions.setOrigins(religionId: number, originIds: number[]) // Set a religion's origins, as the Hierarchy tree does: the first is primary (0 = top level), the rest secondary
Religions.setCode(religionId: number, code: string) // Set a religion's short code, 1 to 3 characters
Religions.moveCenter(religionId: number, x: number, y: number) // Move a religion's center to a land cell at a map point; it takes effect when religions are recalculated
Religions.setCells(religionId: number, cellIds: number[]) // Give land cells to a religion, or to no religion with id 0
Religions.setPopulation(religionId: number, rural: number, urban: number) // Set a religion's rural and urban population, in people: its cells and burgs scale to the totals
Biomes.rename(biomeId: number, name: string) // Rename a biome
Biomes.recolor(biomeId: number, color: string) // Set a biome's color
Biomes.setHabitability(biomeId: number, percent: number) // Set a biome's habitability, in percent
Biomes.add(name: string, color: string, habitability: number) // Add a custom biome for painting; returns its id. There can be at most 255 biomes
Biomes.remove(biomeId: number) // Remove a custom biome that no cell uses; the generated biomes stay
Biomes.setCells(biomeId: number, cellIds: number[]) // Paint land cells with a biome; a cell's rural population does not follow until population is regenerated
Biomes.restore() // Restore the generated biomes: their default names, colors and habitability, and the cells they cover. Custom biomes are removed
Rivers.rename(riverId: number, name: string) // Rename a river; a custom label keeps its pattern when the old name stands in it as a whole word
Rivers.setType(riverId: number, type: string) // Set a river's type, a free label such as River, Creek or Fork
Rivers.add(x: number, y: number) // Start a river at a land point; it flows downhill to the sea, a lake or another river. Returns the river holding it
Rivers.remove(riverId: number) // Remove a river with all its tributaries; lakes forget them
Rivers.setParent(riverId: number, parentId: number) // Make a river a tributary of another, or a mainstem when the parent is itself; the basin follows
Rivers.setWidth(riverId: number, sourceWidth: number, widthFactor: number) // Set a river's width at its source and how fast it widens downstream; its mouth width follows
Rivers.setLocked(riverId: number, locked: boolean) // Lock a river so regeneration keeps its course and data, or unlock it
Rivers.create(cellIds: number[]) // Draw a river through cells from source to mouth, each a neighbor of the one before (\`pack.cells.c\`); it joins the river at its last cell, if any. Returns its id
Routes.rename(routeId: number, name: string) // Rename a route
Routes.setGroup(routeId: number, group: string) // Move a route to another route group, such as roads, trails or searoutes
Routes.add(fromBurgId: number, toBurgId: number, group: string) // Build a route between two burgs along the cheapest path: roads and trails by land, searoutes by water. Returns its id
Routes.remove(routeId: number) // Remove a route and its cell connections
Routes.setLocked(routeId: number, locked: boolean) // Lock a route so regeneration keeps it, or unlock it
Routes.create(points: number[][], group: string) // Draw a route in a group through map points [x, y], each in the cell under it. Returns its id
Routes.split(routeId: number, pointIndex: number) // Split a route at one of its inner points: the route ends there and a new one of the same group goes on. Returns the new id
Routes.join(routeId: number, otherId: number) // Join a route of the same group that starts or ends where this one starts or ends; the other route is removed
Features.rename(featureId: number, name: string) // Rename a geographical feature: an island, lake or ocean
Features.setSubtype(featureId: number, subtype: string) // Set a feature's subtype within its type: a lake's freshwater, salt, dry…, an island's continent, island or isle, an ocean's ocean, sea or gulf. Generators read it on their next run
Features.setGroup(featureId: number, group: string) // Move a lake to another lake group, which sets how it is drawn
Features.setCoastline(featureId: number, settings: Partial<CoastlineSettings> | null) // Give a feature its own coastline settings, merged over the current ones; null makes it follow the map settings again
Zones.rename(zoneId: number, name: string) // Rename a zone; its name is its description
Zones.recolor(zoneId: number, color: string) // Set a zone's color
Zones.setType(zoneId: number, type: string) // Set a zone's type, a free label such as Invasion or Disease
Zones.setHidden(zoneId: number, hidden: boolean) // Hide or show a zone
Zones.setCells(zoneId: number, cells: number[]) // Set the cells a zone covers, as a list of cell ids
Zones.add(name: string, type: string, cells: number[]) // Add a zone over a list of cell ids; returns its id
Zones.remove(zoneId: number) // Remove a zone
Zones.setPopulation(zoneId: number, rural: number, urban: number) // Set the rural and urban population of a zone's land, in people: its cells and burgs scale to the totals
Markers.rename(markerId: number, name: string) // Rename a marker
Markers.setIcon(markerId: number, icon: string) // Set a marker's icon: an emoji or an icon id
Markers.setType(markerId: number, type: string) // Set a marker's type, a free label such as volcano or ruins
Markers.setHidden(markerId: number, hidden: boolean) // Hide or show a marker
Markers.place(x: number, y: number, type: string, details: MarkerDetails = {}) // Place a marker at a map point with details: its name, legend note (HTML, as Notes.write takes) and icon (an emoji or icon id). A type from the markers config, such as volcanoes or ruins, generates all three, each replaced by the one given; any other type needs a note. Returns its id
Markers.remove(markerId: number) // Remove a marker
Markers.move(markerId: number, x: number, y: number) // Move a marker to a map point
Markers.setPinned(markerId: number, pinned: boolean) // Pin a marker so it shows even when its type is filtered out, or unpin it
Markers.setLocked(markerId: number, locked: boolean) // Lock a marker so regeneration keeps it, or unlock it
Markers.setAppearance(markerId: number, appearance: MarkerAppearance) // Set how a marker looks: size (marker), px (icon size), dx and dy (icon shift, %), pin shape, fill and stroke (pin), iconFill and iconStroke. null restores a default
AddedLabels.rename(labelId: number, text: string) // Change the text of a label placed on the map
AddedLabels.place(x: number, y: number, text: string, group?: string) // Place a text label at a map point, in an "added" label group (default: the first one). Returns its id
AddedLabels.remove(labelId: number) // Remove a label placed on the map
Labels.setGroup(type: LabelType, id: number, group: string) // Move a label to a label group, which sets its style and when it shows
Labels.setLayout(type: LabelType, id: number, layout: LabelLayout) // Adjust a label: dx and dy shift it, fontSize (30–300%) and letterSpacing (0–20 px) size its text, startOffset (0–100%) slides a label along its path, hidden hides it. null restores the automatic value
Labels.reset(type: LabelType, id: number) // Return a label to its automatic placement and style; an added label keeps its text and group
Military.rename(stateId: number, regimentId: number, name: string) // Rename a regiment, addressed by its state and its own id
Military.remove(stateId: number, regimentId: number) // Disband a regiment, addressed by its state and its own id
Military.add(stateId: number, x: number, y: number) // Raise an empty regiment of a state at a map point, a fleet on water; returns its id
Military.setAlert(stateId: number, alert: number) // Set a state's war alert, the modifier of its forces (generated from 0.1 to 5): every regiment's troops scale with it
Military.setUnits(stateId: number, regimentId: number, units: Record<string, number>) // Set a regiment's troops by unit name, such as { infantry: 800, archers: 200 }; the total follows
Military.setNaval(stateId: number, regimentId: number, naval: boolean) // Make a regiment a fleet or a land regiment
Military.setIcon(stateId: number, regimentId: number, icon: string) // Set a regiment's icon: an emoji or an icon id
Military.move(stateId: number, regimentId: number, x: number, y: number) // Move a regiment to a map point; its base stays
Military.rotate(stateId: number, regimentId: number, angle: number) // Turn a regiment to an angle in degrees, from -180 to 180
Military.setBase(stateId: number, regimentId: number, x: number, y: number) // Move a regiment's base, where it is stationed, to a map point
Military.split(stateId: number, regimentId: number) // Split a regiment in two halves; the new one stands just below. Returns its id
Military.attach(stateId: number, regimentId: number, targetStateId: number, targetId: number) // Attach a regiment to another, of any state: its troops and note join the target and it is disbanded
Emblems.set(key: string, coa: Emblem) // Set the emblem of a state, province or burg, keyed like "state:3": a heraldic emblem in the generator's vocabulary, or { icon } for a picture. Its size and position stay
Emblems.regenerateOne(key: string) // Draw a new emblem for a state, province or burg, akin to its overlord's; its shield, size and position stay
Emblems.place(key: string, x: number | null, y: number | null, size: number | null) // Place an emblem on the map: x and y in map units, size from 0 to 5. null returns a value to automatic
Journeys.add(random = false) // Add a journey, empty or a random story between burgs; returns its id
Journeys.remove(journeyId: number) // Remove a journey
Journeys.rename(journeyId: number, name: string) // Rename a journey
Journeys.setType(journeyId: number, type: string) // Set a journey's type, a free label such as Quest, Raid or Pilgrimage
Journeys.recolor(journeyId: number, color: string) // Set a journey's color; segments without their own color take it
Journeys.setHidden(journeyId: number, hidden: boolean) // Hide or show a journey on the map
Journeys.setLocked(journeyId: number, locked: boolean) // Lock a journey so regeneration keeps it, or unlock it
Journeys.addSegment(journeyId: number) // Append an empty segment to a journey, starting where the previous one ended; returns its id
Journeys.removeSegment(journeyId: number, segmentId: number) // Remove a segment of a journey
Journeys.moveSegment(journeyId: number, segmentId: number, index: number) // Move a segment to a position in its journey, counted from 0
Journeys.setSegment(journeyId: number, segmentId: number, fields: SegmentFields) // Change a segment: name, color (null = the journey's), hidden, transport, speed (km/h), duration (hours, null = from distance and speed), from and to (cells), avoidRoads. A changed transport, endpoint or road choice reroutes it
Journeys.resetSegment(journeyId: number, segmentId: number) // Drop a segment's manual overrides, color, speed, duration and drawn path, and route it again
Goods.rename(goodId: number, name: string) // Rename a good
Goods.setIcon(goodId: number, icon: string) // Set a good's icon: an emoji or an icon id
Goods.recolor(goodId: number, color: string) // Set a good's color on the Goods layer
Goods.setPrice(goodId: number, value: number) // Set a good's base value per unit, in the map's currency; markets price it from this on the next economy run
Goods.setUnit(goodId: number, unit: string) // Set the unit a good is counted in, such as "barrel"; empty for none
Goods.setTags(goodId: number, tags: string[]) // Set a good's tags, such as "food, luxury"
Goods.setProduction(goodId: number, rules: ProductionRules) // Set how a good is produced: chance (0–100), recipes ([{ goodId: amount }]), biomeOutput ({ biomeId: amount }), multipliers ({ cultureType | culture | state | religion | biome | zone: { key: factor } }), demandCoverage ({ category: share }). A key set to null clears it. Takes effect on the next economy run
Markets.rename(marketId: number, name: string) // Rename a market; empty takes its center burg's name again
Markets.recolor(marketId: number, color: string) // Set a market's color on the Markets layer
Lore.rename(name: string) // Rename the map; files it is downloaded as take the name
Lore.setYear(year: number) // Set the current year, a whole number that may be negative; history and battle reports are dated by it
Lore.setEra(era: string, eraShort?: string) // Set the era the current year belongs to and its short form, such as "Winter Era" and "WE"; without one the short form is abbreviated from the era
Lore.setDescription(text: string) // Set the author's free-text description of the world; empty clears it
Notes.write(key: string, html: string) // Replace an entity's note with HTML from the notes editor's subset; empty html removes the note
Styles.setValue(path: string, value: unknown) // Set one value of \`styles\` by its path, such as "ocean.groups.base.attrs.fill"; null unsets an attr. Draws nothing
StylePresets.apply(name: string) // Replace the whole style with a preset's, such as "ancient", keeping the relief density; Styles.setValue after it adjusts the result`,Yt=`interface CoastlineSettings {
  enabled: boolean; // master toggle — false bypasses all fractalization
  maxDepth: number; // max recursion depth per edge
  baseAmplitude: number; // peak displacement (scales with √edgeLength)
  amplitudeDecay: number; // amplitude multiplier per recursion level
  minEdge: number; // edges shorter than this are never subdivided
  smoothThreshold: number; // roughness values below this → zero displacement
  roughnessContrast: number; // power applied to the roughness field
  roughnessScale: number; // size of a calm or rough stretch of coast, in map units
  lakeSmoothThreshMult: number; // smooth-threshold multiplier for lake shores (1 = same as ocean, higher = calmer)
  variant: number; // reshuffles the coastlines of the map, changing nothing else about them
}
type MarkerDetails = { name?: string; note?: string; icon?: string };
type MarkerAppearance = Partial<
  Record<"size" | "px" | "dx" | "dy", number | null> &
    Record<"pin" | "fill" | "stroke" | "iconFill" | "iconStroke", string | null>
>;
type LabelType = (typeof LABEL_TYPES)[number];
type LabelLayout = Partial<
  Record<"dx" | "dy" | "fontSize" | "letterSpacing" | "startOffset", number | null> & { hidden: boolean | null }
>;
type Emblem = HeraldicEmblem | PictureEmblem;
type SegmentFields = Partial<{
  name: string;
  color: string | null;
  hidden: boolean;
  transport: string;
  speed: number;
  duration: number | null;
  from: number;
  to: number;
  avoidRoads: boolean;
}>;
type ProductionRules = Partial<{
  chance: number | null;
  recipes: Record<number, number>[] | null;
  biomeOutput: Partial<Record<number, number>> | null;
  multipliers: Good["multipliers"] | null;
  demandCoverage: Good["demandCoverage"] | null;
}>;
const LABEL_TYPES = ["state", "province", "burg", "river", "route", "added"] as const;
interface HeraldicEmblem extends EmblemBase {
  t1: string;
  division?: EmblemDivision;
  ordinaries?: EmblemOrdinary[];
  charges?: EmblemCharge[];
  inscriptions?: EmblemInscription[];
  diaper?: string;
  zoom?: number;
}
interface PictureEmblem extends EmblemBase {
  icon: string;
}
interface EmblemBase {
  size?: number;
  x?: number;
  y?: number;
  shield?: string;
}
interface EmblemDivision {
  division: string;
  t: string;
  line?: string;
}
interface EmblemOrdinary extends EmblemPlacement {
  ordinary: string;
  t: string;
  t2?: string;
  line?: string;
  above?: boolean;
  strokeWidth?: number;
  compony?: number; // bordure and orle tile length
  gyronny?: number; // bordure and orle sector count
}
interface EmblemCharge extends EmblemPlacement {
  charge: string;
  t: string;
  p: string;
  t2?: string;
  t3?: string;
  sinister?: number | boolean;
  reversed?: number | boolean;
  layered?: number | boolean; // redraws the charge's foreground over what it overlaps
  outside?: "above" | "below" | "around"; // drawn over or under the shield outline
}
interface EmblemInscription {
  text: string; // \`|\` breaks lines
  font: string;
  size: number;
  color: string;
  path: string; // around the shield center
  bold?: boolean;
  italic?: boolean;
  spacing?: number;
  shadow?: { x: number; y: number; blur: number; color: string };
}
interface EmblemPlacement {
  size?: number;
  stretch?: number; // negative widens, positive heightens
  x?: number;
  y?: number;
  angle?: number;
  stroke?: string;
  divided?: Divided;
}
type Divided = "field" | "division" | "counter";`,Xt=[...Te,...we].join(`, `),Zt=Object.entries(Vt).map(([e,t])=>`${e}: ${t.join(`, `)}`).join(`
`),Qt=[{type:`text`,text:["You are Azgaar Assistant in Fantasy Map Generator. Tools: `read_help` searches the Knowledge Base for\nhow-to questions; `read_map` runs scripts for facts about the open map (never guess them); `read_docs` returns\nreference docs; `propose_change` edits the map; `show_*` place widgets; `view_emblem` and `view_map` show you\nan emblem or the map.\n\nScope: the generator, the open map, cartography and world-building. Real-world knowledge is fine when it serves\nthe user's world. Reply in one sentence that other requests are out of scope. Never be polite.",`# Scripts (read_map)

- Read-only: never assign to map data or call mutating methods. Changes go only through \`propose_change\`.
- \`return\` the answer. Only it and console output come back, cut at 8000 characters: aggregate, count and slice;
  never return a whole entity array. Plan first: one script gathers all the answer needs, and independent calls
  share one turn. Stop reading once you can answer. On an error, fix and retry.
- Unsure of a shape? \`return describe("pack.burgs[1]")\`, an object (also works on singletons, e.g.
  \`describe("States")\`), or call \`read_docs\`. Declarations lag the code mid-migration, so check when it matters.
- Globals: \`pack\` (map data), \`grid\` (pre-repack grid), \`options\` (\`options.map\` holds the map's settings),
  \`styles\`, \`mapHistory\`, and generator singletons: ${Gt}. Guard anything else with \`typeof\`.
- \`downloadFile(content, "name.csv", "text/csv")\` saves a file for the user; name it in the answer.
- Do not call \`draw*\` functions: applying a proposal redraws the map.`,'# Units\n\nAnswer in the map\'s units only (e.g. "152K mi²"); never mention map units, coordinates, pixels or cells unless asked.\nName a place by its nearest burg or province. Scripts have `units`, the app\'s own formatters: `si(n)` → "1.4M";\n`rn(n, decimals = 0)`; `getArea(mapUnits²)` with `getAreaUnit()`; `getDistance(mapUnits)` → "92 mi" for every distance you state, e.g. of `Math.hypot(dx, dy)`;\n`getHeight(h)` → "1640ft"; `convertTemperature(°C)`; `getPrecipitation(prec)`; `formatSpeed(km/h)`; `formatPrice(n)` for money.\nExample: `units.si(units.getArea(state.area)) + " " + units.getAreaUnit()`.',`# Gotchas

- Index 0 is reserved in states (neutrals), cultures (wildlands), religions (none) and provinces; in burgs and
  features element 0 is the number \`0\`. Cell 0 is real. Deleted entities keep their slot with \`removed: true\`:
  filter with \`x => x.i && !x.removed\`.
- Ids are not always array indices: goods and markets start at 1 (\`pack.goods[0]\` is good 1); rivers, markers,
  routes, zones, journeys and often deals are unordered. Look up with \`.find(x => x.i === id)\` or \`Goods.get(id)\`,
  \`Markets.get(id)\`; never \`pack.goods[id]\`. Burg \`production\` records hold \`good\`/\`dealId\` ids: resolve each.
- A cell's owner is \`cells.state[i]\` (0 = neutral); \`cells.s\` is a burg-site score. \`burgs\` and \`cells\` of states,
  provinces, cultures and religions are counts: a state's cells are
  \`pack.cells.i.filter(i => pack.cells.state[i] === id)\`, its burgs those with \`burg.state === id\`. \`center\` is a
  cell id; capitals are \`state.capital\`, \`province.burg\`.
- Cell arrays are typed: \`filter\` and \`map\` on them stay typed and wrap negatives (-1 → 4294967295). Use
  \`Array.from(cells)\` before mapping to other values.
- \`state.diplomacy[j]\`: relation to state j (${Object.keys(De).join(`, `)}); \`Enemy\` is war,
  \`Vassal\` of j, \`Suzerain\` over j.
- States have no religion: read their cells' \`cells.religion\`. Bordering states are \`state.neighbors\`; diplomacy says
  nothing of borders.
- \`burg.type\` is the culture type (Generic, River, Naval…), never rank: capital is \`burg.capital\` (1/0),
  size class is \`burg.group\`.
- Land is \`pack.cells.h[i] >= 20\` (heights 0–100). Water body: \`pack.features[pack.cells.f[i]]\`, type ocean/lake/island.
  Shore: \`cells.t[i]\` is 1 on coastal land, -1 on coastal water; \`cells.haven[i]\` is a coastal cell's water neighbor.
  Climate is on the grid: \`grid.cells.temp[pack.cells.g[i]]\` (°C), \`grid.cells.prec[…]\`.
- Population fields are points, not people: \`burg.population\`, \`cells.pop\`, \`rural\`/\`urban\`. Never show, compare or
  chart points: convert with \`units.getPeople(rural, urban)\`, e.g. \`units.getPeople(0, burg.population)\`, then \`si\`.
  Only states keep \`rural\`/\`urban\`/\`area\` current. For provinces, cultures and religions sum their cells'
  points (\`cells.pop[i]\` rural, burg \`cells.burg[i]\` urban) and \`pack.cells.area[i]\`.
- Areas (\`state.area\`, \`pack.cells.area[i]\`) are map units². Coordinates (\`cells.p[i]\` is [x, y]) are map units within
  \`options.map.graph.width\` × \`height\`; \`Pack.findCell(x, y)\` gives the cell. \`cells.b\` is 0/1, not boolean.`,`# Answers

Images the user attached are not the map: describe them, never read the map to guess them.
State only facts a result or image in this question gave (numbers, ranks, comparisons, terrain); compute
every comparison or count you state ("twice as large", "four remain"). Name
only UI that read_help or read_docs returned, or say it is not covered. Never repeat a proposal's content: its card
shows it.

Answer with a widget whenever one fits, with prose around it. A widget replaces the text it shows: never repeat its
content, add only what it does not say. Pick by the question, and combine widgets when several fit:

- one state is the subject (tell me about, describe, who rules) → \`show_card\`;
- 3 or more entities in the answer (which, list, find) → \`show_entities\` instead of a list;
- one number compared or ranked across items → \`show_chart\` bar; parts of one whole → pie. A table only when several
  columns matter;
- where something is, what a place or region is like → \`show_inset\`;
- ideas for the user to pick (names, options) → \`show_choices\`, a rename operation per name idea; then stop;
- an emblem, coat of arms or heraldry → \`view_emblem\` before describing it;
- how the map or a place looks (style, shapes) → \`view_map\` first;
- a \`read_help\` answer → \`show_source\`.

Otherwise prose, rendered as Markdown: a list for several findings, \`code\` for fields, bold for a headline number.
A one-line answer needs no formatting. No raw JSON unless asked.

Link every map entity you name by its key, \`[Vel](burg:12)\`: the user clicks to see it on the map. Key types: ${Xt}
(\`i\` for most; the array index for cells, relief and measurers). Use only ids you
have read (return them from read_map), else leave the name unlinked. Link the editor
or dialog that answers a how-to, \`[Heightmap editor](command:editHeightmapButton)\`; ids come from
\`read_docs(["Commands"])\`, never guess one.`,`# Changing the map

\`propose_change({ summary, operations: [{ op, args }] })\` proposes ONE batch; the user previews before → after and
applies or discards it. \`args\` go in order, e.g. \`{ op: "Burgs.rename", args: [12, "Saltmere"] }\`. \`{ result: n }\`
stands for what operation n (from 0) of the batch returned, such as a new id: \`[{ op: "States.add", args: [410, 220] },
{ op: "States.rename", args: [{ result: 0 }, "Varn"] }]\`; \`{ result: n, type: "burg" }\` stands for its key, "burg:12",
for \`Notes\` and \`Emblems\`. Put everything asked into one proposal; \`summary\` is a short card title. On a validation
error nothing is proposed: fix and retry.
Success means the proposal is WAITING: say what you proposed, never that the map changed. Operations keep dependent
data (labels, full names, codes, cell ownership) in sync. "Proposals in this chat" in the map context shows what the
user did. If no operation can make a change, say so. Operations by model; ids are \`i\`, points are map units. Read
\`read_docs(["Operations: States, Markers"])\` (the models you need) for signatures and allowed values before using one
new to this chat, and \`read_docs(["Emblems"])\` for the heraldry \`Emblems.set\` accepts:

${Zt}

The map's look is \`styles\`, a record by layer (\`attrs\` SVG attributes, \`options\` renderer inputs, \`groups\` nested
nodes): \`Styles.setValue("ocean.groups.base.attrs.fill", "#0d2240")\`, one op per value; a whole new look starts with
\`StylePresets.apply(name)\` of the closest preset. Read \`read_docs(["Styles"])\` for presets and choices, then
\`["Styles: ocean, labels"]\` for paths and values; never fetch source files. Heightmap, relief icons and ice have no operations: link their editor and stop.

A marker's story is its note: place every marker with a name, a fitting note and an emoji icon,
\`Markers.place(x, y, type, { name, note, icon })\`; prefer a configured type, \`Markers.configuration.map(c => c.type)\`.
Notes are HTML in an entity's \`note\` field (\`pack.burgs[12].note\`); there is no notes array. Keys are \`type:id\`
(\`burg:12\`, \`marker:0\`, \`route:0\`; regiments \`regiment:stateId-regimentId\`) of an existing entity, whose name is
the note's title; cells, ice, relief, measurers, deals, transports and name bases have no notes. \`Notes.write\` replaces the WHOLE note. Allowed: p, br, strong, em, u, s, a, img, ul/ol/li,
blockquote, h1–h6, sub, sup, span, div, simple tables, inline code, hr and inline styles; no classes, handlers,
scripts, iframes, javascript: URLs or Markdown. Keep the user's text unless asked; say in one line what changed.`,'# Asking first\n\nBefore creating something or a sweeping change, know what the user wants. When an essential detail is missing or\nambiguous (where, which entity, how much land), ask one short question and stop, offering likely answers with\n`show_choices` (a choice without operations becomes the reply). Never ask about what can be generated (names, colors,\nemblems, forms): propose it, then offer tweaks. Resolve places ("north of Vel", "on the coast") to points with\n`read_map`, e.g. a free land cell\'s `pack.cells.p[i]`. New states, provinces, cultures and religions start small (a\nstate owns only its capital cell): to grow them, add `Provinces.setState` for chosen provinces, or `recalculate()`,\nwhich redraws every border of that kind; ask which when the user did not say.',`# Data fields

Field names by data-model section. For meanings and types, pass section names to \`read_docs\`, as well as
Configuration, Globals, Registries or PackedGraph.

${qt}`].join(`

`),cache_control:{type:`ephemeral`}}],$t=null;async function en(){let[e,t,n,i,{MAP_COMMANDS:a,isLinkable:o}]=await Promise.all([r(()=>import(`./data-model-CxLqlxM8.js`),[]),r(()=>import(`./configuration-CYMJ6F0-.js`),[]),r(()=>import(`./PackedGraph-Dcov4qiy.js`),[]),r(()=>import(`./emblems-6bhvewnB.js`).then(e=>e.t),__vite__mapDeps([12,1])),r(()=>import(`./map-commands-CwSMNFYl.js`),__vite__mapDeps([37,38,1,2,39,5,4,6,7,8,9,10,11,12,13,14,15,16,17,18,31,40,20,41,42,43,35,23,19,25,26,27,28,29,30,32,24,44,45,46,47,48,49,50,3,51,21,52,53,54,22,55,56,57,33,58,59,60,61,62,63]))]),s=new Map;for(let t of e.default.split(/(?=^#{1,2} )/m)){let e=t.match(/^## (.+)$/m)?.[1];e&&s.set(e,t.trim())}s.set(`Configuration`,t.default),s.set(`Globals`,`\`\`\`ts\n${Wt}\n\`\`\``),s.set(`Registries`,`Callable as \`await Controllers.X.open()\` / \`await Services.X.method()\`:\n${Kt}`),s.set(`PackedGraph`,`\`\`\`ts\n${n.default}\n\`\`\``),s.set(`Operations`,`Operations for \`propose_change\`, with argument types:\n\`\`\`ts\n${Jt}\n\`\`\`\n\nThe types they name:\n\`\`\`ts\n${Yt}\n\`\`\``),s.set(`Emblems`,on(i));let c=a.filter(o).map(({id:e,name:t})=>`${e}: ${t}`);return s.set(`Commands`,`Command ids for \`[label](command:id)\` links, as \`id: name\`:\n${c.join(`
`)}`),new Map([...s].map(([e,t])=>[e.toLowerCase(),{title:e,text:t}]))}var tn=[...Yt.matchAll(/^(?:type|interface|const) (\w+)/gm)].map(e=>e[1]);function nn(e){let t=e.match(/^operations\s*:(.+)$/i)?.[1].split(/[\s,]+/).filter(Boolean);if(!t?.length)return;let n=t.map(e=>`${e.toLowerCase()}.`),r=Jt.split(`
`).filter(e=>n.some(t=>e.toLowerCase().startsWith(t)));if(!r.length)return;let i=r.join(`
`);return{title:e,text:`Operations for \`propose_change\`:\n\`\`\`ts\n${i}\n\`\`\`${tn.some(e=>RegExp(`\\b${e}\\b`).test(i))?`\n\nThe types they name:\n\`\`\`ts\n${Yt}\n\`\`\``:``}`}}async function rn(e){let t=e.match(/^styles\s*(?::(.*))?$/i);if(!t)return;let{styleFields:n,styleOverview:i}=await r(async()=>{let{styleFields:e,styleOverview:t}=await import(`./style-reference-CVPTwItr.js`);return{styleFields:e,styleOverview:t}},__vite__mapDeps([64,5,2,42,3,4,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,65,66,0,21,22,23,24,25,26,27,28,29,30,31,32,33])),a=t[1]?.split(/[\s,]+/).filter(Boolean);return{title:e,text:a?.length?n(a):i()}}async function an(e){$t??=await en();let t=await Promise.all(e.map(e=>rn(e.trim()))),n=e.map((e,n)=>t[n]??nn(e.trim())??$t.get(e.replace(/\(.*\)/,``).trim().toLowerCase())),r=n.flatMap(e=>e?.text??[]),i=e.filter((e,t)=>!n[t]);return i.length&&r.push(`Unknown topics: ${i.join(`, `)}. Available: ${[...$t.values()].map(e=>e.title).join(`, `)}, "Operations: <Model>, <Model>", Styles, "Styles: <element>, <element>"`),r.join(`

`)}function on({charges:e,divisions:t,lineWeights:n,ordinaries:r,shields:i,tinctures:a}){let o=e=>Object.keys(e).join(`, `),s=e,c=Object.keys(e.types).filter(e=>s[e]);return["Heraldic emblems for `Emblems.set`, in the generator's vocabulary (the `Emblem` type is in the Operations topic).",`Tinctures. Metals: ${o(a.metals)}. Colours: ${o(a.colours)}. Stains: ${o(a.stains)}.`,`Patterns fill a tincture slot as "pattern-tincture-tincture", such as "vair-argent-azure": ${o(a.patterns)}; "semy_of_<charge>-or-gules" strews a charge.`,`Divisions (\`division.division\`): ${o(t.variants)}.`,`Ordinaries that take a \`line\`: ${o(r.lined)}. Straight ordinaries: ${o(r.straight)}.`,`Lines: ${o(n)}.`,`Shields (\`shield\`): ${Object.keys(i.types).flatMap(e=>Object.keys(i[e]??{})).join(`, `)}.`,"Charge positions (`p`, one letter per copy): a b c / d e f / g h i are the 3×3 grid from the top left; e is the center; j k l / m n o a tighter grid above and below it; p q left and right of the center; y the top left corner, z the base; A–L around the border.",`Charges by category:`,...c.map(e=>`- ${e}: ${o(s[e])}`)].join(`
`)}var sn=3,cn=2500,ln=new Set([`_Footer`,`Home`,`Changelog`,`Dependencies`]),un=new Set(`the and for how can what why does with from that this are not you your into there their have has get make map use way any all its was will where when which who also than then them they just only some more like want do my me is it to of in on an or be`.split(` `)),dn=null,fn=Object.assign({"../../../../docs/wiki/Advanced-options.md":()=>r(()=>import(`./Advanced-options-CUTInXyC.js`).then(e=>e.default),[]),"../../../../docs/wiki/Assistant.md":()=>r(()=>import(`./Assistant-j3pecW0_.js`).then(e=>e.default),[]),"../../../../docs/wiki/Battle-Simulator.md":()=>r(()=>import(`./Battle-Simulator-EvJFGvEI.js`).then(e=>e.default),[]),"../../../../docs/wiki/Changelog.md":()=>r(()=>import(`./Changelog-Ct3CxFq0.js`).then(e=>e.default),[]),"../../../../docs/wiki/Coastline-Editor.md":()=>r(()=>import(`./Coastline-Editor-Bm7KFlWw.js`).then(e=>e.default),[]),"../../../../docs/wiki/Culture-sets.md":()=>r(()=>import(`./Culture-sets-BkWbFNHf.js`).then(e=>e.default),[]),"../../../../docs/wiki/Culture-types.md":()=>r(()=>import(`./Culture-types-DX_IO-Hj.js`).then(e=>e.default),[]),"../../../../docs/wiki/Data-import.md":()=>r(()=>import(`./Data-import-Cgd_JOZG.js`).then(e=>e.default),[]),"../../../../docs/wiki/Dependencies.md":()=>r(()=>import(`./Dependencies-iXGjBrnx.js`).then(e=>e.default),[]),"../../../../docs/wiki/Emblems.md":()=>r(()=>import(`./Emblems-DAd_L6DZ.js`).then(e=>e.default),[]),"../../../../docs/wiki/GIS-data-export.md":()=>r(()=>import(`./GIS-data-export-Bm5b3jxy.js`).then(e=>e.default),[]),"../../../../docs/wiki/Geographical-Features-Overview.md":()=>r(()=>import(`./Geographical-Features-Overview-B-dotX0_.js`).then(e=>e.default),[]),"../../../../docs/wiki/Goods-spread-functions.md":()=>r(()=>import(`./Goods-spread-functions-lK-XNAWI.js`).then(e=>e.default),[]),"../../../../docs/wiki/Heightmap-customization.md":()=>r(()=>import(`./Heightmap-customization-Bwv0gqk7.js`).then(e=>e.default),[]),"../../../../docs/wiki/Heightmap-image-overlay.md":()=>r(()=>import(`./Heightmap-image-overlay-4K250rLl.js`).then(e=>e.default),[]),"../../../../docs/wiki/Heightmap-template-editor.md":()=>r(()=>import(`./Heightmap-template-editor-Dy3ZRcdZ.js`).then(e=>e.default),[]),"../../../../docs/wiki/Home.md":()=>r(()=>import(`./Home-CzTFJhK0.js`).then(e=>e.default),[]),"../../../../docs/wiki/Hotkeys.md":()=>r(()=>import(`./Hotkeys-FK852lXt.js`).then(e=>e.default),[]),"../../../../docs/wiki/Icons.md":()=>r(()=>import(`./Icons-BkM6eRZn.js`).then(e=>e.default),[]),"../../../../docs/wiki/Install-with-Nix.md":()=>r(()=>import(`./Install-with-Nix-DyyKMmMl.js`).then(e=>e.default),[]),"../../../../docs/wiki/Journeys.md":()=>r(()=>import(`./Journeys-CYRbQVdj.js`).then(e=>e.default),[]),"../../../../docs/wiki/Knowledge Base.md":()=>r(()=>import(`./Knowledge Base-U4YfuDRv.js`).then(e=>e.default),[]),"../../../../docs/wiki/Map-embellishments.md":()=>r(()=>import(`./Map-embellishments-Ds6n3Van.js`).then(e=>e.default),[]),"../../../../docs/wiki/Markers.md":()=>r(()=>import(`./Markers-BViFNwgf.js`).then(e=>e.default),[]),"../../../../docs/wiki/Military-Forces.md":()=>r(()=>import(`./Military-Forces-tf4bnRnO.js`).then(e=>e.default),[]),"../../../../docs/wiki/Ollama-text-generation.md":()=>r(()=>import(`./Ollama-text-generation-DP-WeU7w.js`).then(e=>e.default),[]),"../../../../docs/wiki/Omnibar.md":()=>r(()=>import(`./Omnibar-xZanHWOb.js`).then(e=>e.default),[]),"../../../../docs/wiki/Performance-settings.md":()=>r(()=>import(`./Performance-settings-DguNxvMG.js`).then(e=>e.default),[]),"../../../../docs/wiki/Policy.md":()=>r(()=>import(`./Policy-DkWTYuVJ.js`).then(e=>e.default),[]),"../../../../docs/wiki/Q&A.md":()=>r(()=>import(`./Q_A-mpTX1OBh.js`).then(e=>e.default),[]),"../../../../docs/wiki/Quick-Start-Tutorial.md":()=>r(()=>import(`./Quick-Start-Tutorial-D9GudLlH.js`).then(e=>e.default),[]),"../../../../docs/wiki/Reporting-bugs-and-ideas.md":()=>r(()=>import(`./Reporting-bugs-and-ideas-CJDEmQvV.js`).then(e=>e.default),[]),"../../../../docs/wiki/River-Editor.md":()=>r(()=>import(`./River-Editor-BvGwqtYw.js`).then(e=>e.default),[]),"../../../../docs/wiki/Run-FMG-locally.md":()=>r(()=>import(`./Run-FMG-locally-DCjn9mNi.js`).then(e=>e.default),[]),"../../../../docs/wiki/Scale-and-distance.md":()=>r(()=>import(`./Scale-and-distance-CMJ7Vnse.js`).then(e=>e.default),[]),"../../../../docs/wiki/URL-parameters.md":()=>r(()=>import(`./URL-parameters-Bbj7Po6E.js`).then(e=>e.default),[]),"../../../../docs/wiki/User-Interface.md":()=>r(()=>import(`./User-Interface-Dp-4Kn-E.js`).then(e=>e.default),[]),"../../../../docs/wiki/Working-offline.md":()=>r(()=>import(`./Working-offline-BjcPaP9y.js`).then(e=>e.default),[]),"../../../../docs/wiki/Wrap-Tool.md":()=>r(()=>import(`./Wrap-Tool-CvixOv1C.js`).then(e=>e.default),[]),"../../../../docs/wiki/_Footer.md":()=>r(()=>import(`./_Footer-CoCNk46l.js`).then(e=>e.default),[])}),pn=e=>e.match(/([^/]+)\.md$/)[1],mn=Object.keys(fn).map(pn).filter(e=>!ln.has(e)),hn=e=>(e.toLowerCase().match(/[a-z0-9]+/g)??[]).filter(e=>e.length>1&&!un.has(e)).map(e=>e.length>3?e.replace(/(?:es|s)$/,``):e);async function gn(){return(await Promise.all(Object.entries(fn).map(async([e,t])=>[pn(e),await t()]))).flatMap(([e,t])=>ln.has(e)?[]:_n(e,t))}function _n(e,t){let n=e.replace(/-/g,` `),r=e===`Knowledge Base`;return t.split(/(?=^#{2,3} )/m).flatMap(e=>{let t=e.match(/^#{2,3} (.+)$/m)?.[1];if(r&&!t)return[];let i=r?t:t?`${n} › ${t}`:n,a=t?e.replace(/^#{2,3} .+$/m,``).trim():e.trim();return a?[{heading:i,text:`### ${i}\n\n${a}`,headingTerms:new Set(hn(i)),bodyTerms:new Set(hn(a))}]:[]})}var vn=e=>e.length<=cn?e:`${e.slice(0,cn)}\n… (cut: pass the heading as the query to read it all)`;async function yn(e){dn??=await gn();let t=dn.find(t=>t.heading===e.trim());if(t)return t.text;let n=[...new Set(hn(e))],r=dn.map(e=>({section:e,score:n.reduce((t,n)=>t+(e.headingTerms.has(n)?3:0)+ +!!e.bodyTerms.has(n),0)})).filter(({score:e})=>e>0).sort((e,t)=>t.score-e.score);if(!r.length)return`No help sections match "${e}". Try other words.`;let i=r.slice(0,sn).map(({section:e})=>vn(e.text)),a=r.slice(sn,9).map(({section:e})=>`- ${e.heading}`);return a.length&&i.push(`Other matches (pass a heading as the query to read it):\n${a.join(`
`)}`),i.join(`

`)}var bn=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`):[],xn=[{status:`Reading help`,definition:{name:`read_help`,description:`Search the Knowledge Base for how to use the generator. Returns the best-matching sections and other matching headings; pass a heading to read that section.`,input_schema:{type:`object`,properties:{query:{type:`string`}},required:[`query`]}},handle:async e=>({content:await yn(String(e.query??``))})},{status:`Reading docs`,definition:{name:`read_docs`,description:`Read reference docs by topic: data-model sections, Configuration, Globals, Registries, PackedGraph, Operations, Commands, Styles (elements and choices), "Styles: ocean, labels" (their paths and values).`,input_schema:{type:`object`,properties:{topics:{type:`array`,items:{type:`string`}}},required:[`topics`]}},handle:async e=>({content:await an(bn(e.topics))})}],Sn=30,Cn=32e3,wn=`[Earlier tool result shortened]`,Tn=1e3,En=`[The image is not available: this model cannot see images]`,Dn=`[The user attached an image, but this model cannot see images. Tell the user; never guess it from the map]`,On=`The user attached these images to the question:`,kn=`This model cannot see images, so it answered without yours. Connect a model with vision to ask about images.`,An=/image|vision|multimodal/i,jn=/^(read|view)_/,Mn=`Your reply was cut off at the output limit. Think briefly and keep calls small: split a large batch into several propose_change calls.`,Nn=/\bI(?:'ve| have)? (?:proposed|prepared|submitted)\b|\b(?:proposal|batch|card)\b[^.\n]{0,40}\b(?:is waiting|waiting for|pending|above)\b/i,Pn=/\bproposed nothing\b|\bnothing (?:to propose|proposed)\b/i,Fn=`Your answer says something was proposed, but no propose_change call succeeded in this question, so the user sees no card. Call propose_change now, or say plainly that nothing was proposed.`;async function In(e,n,r,i,{tools:a,context:o,onStatus:s,images:c=[]}){let l=[...xn,...a],u=l.map(e=>e.definition),d=new Map(l.map(e=>[e.definition.name,e]));r(c.length?{kind:`question`,text:n,images:c}:{kind:`question`,text:n});let f=e.messages.length,p=f,ee=``,m=``,h=``,g=!1,te=!1;try{for(let t of Ln(e.messages.slice(0,f)))t.content=wn;for(let a=0;a<Sn;a++){i.throwIfAborted(),s?.(a?`Thinking · step ${a+1}`:`Thinking`);let l=await o();i.throwIfAborted(),a?l!==ee&&e.messages.at(-1).content.push({type:`text`,text:l}):e.messages.push({role:`user`,content:[{type:`text`,text:l},...c.length?[{type:`text`,text:On},...c.map(Ge)]:[],...n?[{type:`text`,text:n}]:[]]}),ee=l,zn(e.messages.slice(f));let ne={...Ye(),system:Qt,messages:e.messages,tools:u,signal:i},_=await tt(ne).catch(n=>{let a=!i.aborted&&An.test(t(n))&&Bn(e.messages);if(!a)throw n;return a===`attached`&&r({kind:`notice`,text:kn}),tt(ne)});if(i.aborted)throw i.reason;e.usage.input+=_.usage.input,e.usage.output+=_.usage.output,e.usage.cached+=_.usage.cached,_.content.length&&e.messages.push({role:`assistant`,content:_.content});let v=_.content.filter(e=>e.type===`text`).map(e=>e.text).join(`

`).trim(),y=_.content.filter(e=>e.type===`tool_use`);if(!y.length&&_.truncated){e.messages.push({role:`user`,content:[{type:`text`,text:Mn}]});continue}if(!y.length){if(h+=v,(v||m)&&r({kind:`answer`,text:v||m}),!te&&d.has(`propose_change`)&&!g&&Nn.test(h)&&!Pn.test(h)){te=!0,m=``,e.messages.push({role:`user`,content:[{type:`text`,text:Fn}]});continue}!v&&!m&&r({kind:`notice`,text:`The model ended without an answer. Ask again.`});return}let re=[],b=[];for(let e of y){let n=d.get(e.name);i.aborted||s?.(n?.status??`Working`);let r=i.aborted?{content:`Cancelled before this tool ran.`,isError:!0}:`invalidArguments`in e.input?{content:String(e.input[Xe]),isError:!0}:n?await n.handle(e.input).catch(e=>({content:t(e),isError:!0})):{content:`Unknown tool ${e.name}. Available: ${[...d.keys()].join(`, `)}`,isError:!0};r.item&&b.push(r.item),re.push({type:`tool_result`,tool_use_id:e.id,content:r.content,is_error:r.isError??!1})}v&&(y.every(e=>jn.test(e.name))||re.some(e=>e.is_error))?m=v:v&&(h+=v,r({kind:`answer`,text:v}),m=``),b.some(e=>e.kind===`proposal`)&&(g=!0);for(let e of b)r(e);e.messages.push({role:`user`,content:re}),p=e.messages.length,i.throwIfAborted()}r({kind:`notice`,text:`Stopped after ${Sn} steps. Ask again to continue.`})}catch(t){throw e.messages.splice(p),t}}var Ln=e=>e.flatMap(e=>e.content.filter(e=>e.type===`tool_result`)),Rn=({content:e})=>typeof e==`string`?e.length:e.reduce((e,t)=>e+(t.type===`text`?t.text.length:Tn),0);function zn(e){let t=Ln(e),n=Ln(e.slice(-1)).length,r=t.reduce((e,t)=>e+Rn(t),0);for(let e of t.slice(0,t.length-n)){if(r<=Cn)return;r-=Rn(e)-31,e.content=wn}}function Bn(e){let t=!1;for(let n of e)n.content=n.content.map(e=>e.type===`image`?(t=`attached`,{type:`text`,text:Dn}):e);for(let n of Ln(e))typeof n.content!=`string`&&(n.content=n.content.map(e=>e.type===`image`?(t||=`tool`,{type:`text`,text:En}):e));return t}var Vn=/^ {0,3}```(\S*)\s*$/,Hn=/^ {0,3}(#{1,6})\s+(.*)$/,Un=/^ {0,3}([-*_])(?:\s*\1){2,}\s*$/,Wn=/^ {0,3}>\s?(.*)$/,Gn=/^(\s*)([-*+]|\d{1,9}[.)])\s+(.*)$/,Kn=/^\s*\|?[\s:|-]*-[\s:|-]*\|?\s*$/,qn=`\0`,Jn=RegExp(`${qn}(\\d+)${qn}`,`g`);function Yn(e,t){let n=e.replace(/\r\n?/g,`
`).split(`
`),r=[],i=0;for(;i<n.length;){let e=n[i];if(!e.trim()){i++;continue}if(Vn.test(e)){let e=[];for(i++;i<n.length&&!Vn.test(n[i]);)e.push(n[i++]);i++,r.push(`<pre><code>${tr(e.join(`
`))}</code></pre>`);continue}let a=e.match(Hn);if(a){let e=Math.min(a[1].length+2,6);r.push(`<h${e}>${er(a[2],t)}</h${e}>`),i++;continue}if(Un.test(e)){r.push(`<hr />`),i++;continue}if(Wn.test(e)){let e=[];for(;i<n.length&&Wn.test(n[i]);)e.push(n[i++].match(Wn)?.[1]??``);r.push(`<blockquote>${Yn(e.join(`
`),t)}</blockquote>`);continue}if(Gn.test(e)){let e=[];for(;i<n.length;){let t=n[i].match(Gn);if(!t)break;e.push({indent:t[1].length,ordered:/\d/.test(t[2]),text:t[3]}),i++}r.push(Zn(e,0,t).html);continue}if(e.includes(`|`)&&i+1<n.length&&Kn.test(n[i+1])){i=Qn(n,i,r,t);continue}let o=[];for(;i<n.length&&n[i].trim()&&!Xn(n[i]);)o.push(n[i++]);r.push(`<p>${o.map(e=>er(e,t)).join(`<br />`)}</p>`)}return r.join(``)}function Xn(e){return Vn.test(e)||Hn.test(e)||Un.test(e)||Wn.test(e)||Gn.test(e)}function Zn(e,t,n){let{indent:r,ordered:i}=e[t],a=[],o=t;for(;o<e.length&&e[o].indent>=r;)if(e[o].indent>r&&a.length){let t=Zn(e,o,n);a[a.length-1]+=t.html,o=t.next}else a.push(er(e[o].text,n)),o++;let s=i?`ol`:`ul`;return{html:`<${s}>${a.map(e=>`<li>${e}</li>`).join(``)}</${s}>`,next:o}}function Qn(e,t,n,r){let i=$n(e[t]),a=$n(e[t+1]).map(e=>e.startsWith(`:`)&&e.endsWith(`:`)?` style="text-align: center"`:e.endsWith(`:`)?` style="text-align: right"`:``),o=(e,t,n)=>`<${n}${a[t]??``}>${er(e,r)}</${n}>`,s=[],c=t+2;for(;c<e.length&&e[c].includes(`|`);){let t=$n(e[c]);s.push(`<tr>${t.map((e,t)=>o(e,t,`td`)).join(``)}</tr>`),c++}let l=i.map((e,t)=>o(e,t,`th`)).join(``);return n.push(`<table><thead><tr>${l}</tr></thead><tbody>${s.join(``)}</tbody></table>`),c}var $n=e=>e.trim().replace(/^\|/,``).replace(/\|$/,``).split(`|`).map(e=>e.trim());function er(e,t){let n=[];return tr(e.replace(/`([^`]+)`/g,(e,t)=>(n.push(`<code>${tr(t)}</code>`),`${qn}${n.length-1}${qn}`))).replace(/\[([^\]\n]+)\]\(([^)\s]+)\)/g,(e,n,r)=>/^https?:\/\//i.test(r)?`<a href="${r}" target="_blank" rel="noopener noreferrer">${n}</a>`:t?.(n,r)??e).replace(/(\*\*|__)(?=\S)([\s\S]*?\S)\1/g,`<strong>$2</strong>`).replace(/\*(?=\S)([^*\n]*\S)\*/g,`<em>$1</em>`).replace(/~~(?=\S)([\s\S]*?\S)~~/g,`<del>$1</del>`).replace(Jn,(e,t)=>n[Number(t)])}var tr=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),nr=1568,rr=2e7;async function ir(e){if(e.size>rr)throw Error(i(`The image is over {{size}}`,{size:`20 MB`}));let t=await createImageBitmap(e).catch(()=>{throw Error(i(`The pasted file cannot be read as an image`))}),n=Math.min(1,nr/Math.max(t.width,t.height)),r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(t.width*n)),r.height=Math.max(1,Math.round(t.height*n));let a=r.getContext(`2d`);return a.fillStyle=`#fff`,a.fillRect(0,0,r.width,r.height),a.drawImage(t,0,0,r.width,r.height),t.close(),r.toDataURL(`image/jpeg`,.85)}var ar={read:ir},or={anthropic:{include:/^claude/},gemini:{include:/^gemini-/,exclude:/embed|image|audio|tts|live|robotics|computer-use/},openai:{include:/^(gpt|o\d)/,exclude:/audio|realtime|image|tts|embed|whisper|moderation|transcribe|dall|gpt-6-astra/},mistral:{exclude:/embed|moderation|ocr|voxtral|transcribe/},qwen:{include:/^qwen/,exclude:/embed|ocr|audio|tts|asr|image|video|omni|vl|mt/},deepseek:{include:/^deepseek/}};function sr(e,t){let n=or[e];return n?t.filter(e=>(!n.include||n.include.test(e))&&!n.exclude?.test(e)):t}async function cr(e,t,n=``,r){return sr(e,await lr(e,t,n,r))}async function lr(e,t,n,r){if(e===`qwen`)return ur(t,r);let i=await fetch(dr(e,n),{headers:fr(e,t),signal:r});if(!i.ok)throw Error(await Je(i));return((await i.json()).data??[]).map(e=>e.id)}async function ur(e,t){let n=[];for(let r=1;;r++){let i=`https://dashscope-intl.aliyuncs.com/api/v1/models?providers=qwen&features=function-calling&page_no=${r}&page_size=100`,a=await fetch(i,{headers:fr(`qwen`,e),signal:t});if(!a.ok)throw Error(await Je(a));let o=await a.json(),s=o.output?.models??[];if(n.push(...s.map(e=>e.model)),!s.length||n.length>=(o.output?.total??n.length))return n}}function dr(e,t){return e===`anthropic`?`https://api.anthropic.com/v1/models?limit=1000`:`${We(e,t)}/models`}var fr=(e,t)=>e===`anthropic`?Ue(t):qe(t),pr=new class{timer=null;discovery=null;wire(){g(`assistantProvider`).addEventListener(`change`,()=>this.fillProvider()),g(`assistantApiKey`).addEventListener(`input`,()=>this.scheduleDiscovery()),g(`assistantLocalUrl`).addEventListener(`input`,()=>this.scheduleDiscovery())}fill(){let e=Ye();g(`assistantProvider`).value=e.provider,this.input(`assistantLocalUrl`).value=e.localUrl,g(`assistantDisconnect`).hidden=!Qe(),this.fillProvider()}cancelDiscovery(){this.discovery?.abort(),this.discovery=null,this.timer&&clearTimeout(this.timer),this.timer=null}save(){let e=this.provider.id,t=e===`local`,n=this.input(`assistantModel`).value.trim(),r=this.input(`assistantApiKey`).value.trim();return!n||!t&&!r?(g(`assistantDiscoveryError`).textContent=i(t?`Enter a model name.`:`Enter a model and API key.`),!1):(Ke({provider:e,model:n,key:t?``:r,localUrl:this.input(`assistantLocalUrl`).value.trim()||Ye().localUrl}),!0)}get provider(){return Ze(g(`assistantProvider`).value)??He}input(e){return g(e)}setModels(e){g(`assistantModels`).replaceChildren(...e.map(e=>new Option(e)))}fillProvider(){let e=this.provider,t=e.id===`local`,n=Ye(e.id);this.input(`assistantModel`).value=n.model,this.input(`assistantApiKey`).value=n.key,g(`assistantModelLabel`).textContent=t?`Model name`:`Model`,g(`assistantKeyLink`).href=e.keyLink;for(let e of g(`assistantKey`).querySelectorAll(`[data-remote]`))e.hidden=t;for(let e of g(`assistantKey`).querySelectorAll(`[data-local]`))e.hidden=!t;this.setModels(e.fallbackModel?[e.fallbackModel]:[]),this.discover()}scheduleDiscovery(){this.cancelDiscovery(),g(`assistantDiscoveryError`).textContent=``,this.setModels([]),this.timer=setTimeout(()=>void this.discover(),350)}async discover(){let e=this.provider,n=this.input(`assistantApiKey`).value.trim(),r=this.input(`assistantLocalUrl`).value.trim();this.discovery?.abort(),this.discovery=new AbortController;let{signal:i}=this.discovery,a=g(`assistantDiscoveryError`);if(a.textContent=``,e.id!==`local`&&!n)return this.setModels([]);try{let t=await cr(e.id,n,r,i);i.aborted||this.setModels(t)}catch(e){i.aborted||(a.textContent=t(e))}}},mr=8e3,hr=200,gr=50,_r=500,vr=4,yr=Object.getPrototypeOf(async()=>{}).constructor;async function br(e,t={}){let n=[],r=kr(n),i=performance.now();try{return{ok:!0,value:Or(await new yr(`describe`,...Object.keys(t),e)(Cr,...Object.values(t))),logs:n,ms:xr(i)}}catch(e){let t=e instanceof Error?e:Error(String(e)),r=(t.stack??``).split(`
`).slice(0,vr).join(`
`);return{ok:!1,value:``,logs:n,error:{message:t.message,stack:r},ms:xr(i)}}finally{r()}}var xr=e=>Math.round(performance.now()-e),Sr=e=>ArrayBuffer.isView(e)?e:void 0;function Cr(e){if(typeof e==`string`)try{return{path:e,...Tr(Function(`return (${e})`)()),...wr(/^styles\b/.test(e))}}catch{}return{...Tr(e),...wr(e===globalThis.styles)}}var wr=e=>e?{hint:`read_docs(["Styles"]) lists the elements and choices, ["Styles: ocean"] every path and value`}:{};function Tr(e){if(e===null)return{type:`null`};if(e===void 0)return{type:`undefined`};let t=Sr(e);if(t)return{type:t.constructor.name,length:t.length,sample:Array.from(t.slice(0,5))};if(Array.isArray(e))return{type:`Array`,length:e.length,sample:e.slice(0,3).map(Dr)};if(typeof e==`function`)return{type:`function`,name:e.name||`anonymous`,arity:e.length};if(typeof e==`object`){let t=e,n={};for(let e of Object.keys(t))n[e]=Dr(t[e]);let r={type:t.constructor?.name??`object`,keys:n},i=Er(t);return i.length&&(r.methods=i),r}return{type:typeof e,value:e}}function Er(e){let t=Object.getPrototypeOf(e);return!t||t===Object.prototype?[]:Object.getOwnPropertyNames(t).filter(e=>e!==`constructor`)}function Dr(e){if(e===null)return`null`;let t=Sr(e);if(t)return`${t.constructor.name}(${t.length})`;if(Array.isArray(e))return`Array(${e.length})`;if(typeof e==`string`)return`string(${e.length})`;if(typeof e==`object`){let t=Object.keys(e);return`object{${t.slice(0,5).join(`, `)}${t.length>5?`, …`:``}}`}return typeof e}function Or(e,n=mr){if(e===void 0)return`undefined`;let r=new WeakSet,i=(e,t)=>{if(typeof t==`function`)return`[Function ${t.name||`anonymous`}]`;if(typeof t==`bigint`)return String(t);let n=Sr(t);if(n){let e=Array.from(n.slice(0,10)).join(`, `);return`[${n.constructor.name}(${n.length}) ${e}${n.length>10?`, …`:``}]`}if(t instanceof Set)return{Set:[...t].slice(0,hr)};if(t instanceof Map)return{Map:[...t.entries()].slice(0,hr)};if(t&&typeof t==`object`){if(typeof t.nodeType==`number`)return`[Node ${t.nodeName??`?`}]`;if(r.has(t))return`[Circular]`;if(r.add(t),Array.isArray(t)&&t.length>hr)return[...t.slice(0,hr),`… ${t.length-hr} more items`]}return t},a;try{a=JSON.stringify(e,i,1)??String(e)}catch(e){a=`[unserializable: ${t(e)}]`}return a.length<=n?a:`${a.slice(0,n)}\n… truncated, ${a.length-n} more characters. Return less data.`}function kr(e){let t=[`log`,`info`,`warn`,`error`],n=t.map(e=>console[e]);return t.forEach((t,r)=>{console[t]=(...i)=>{if(e.length<gr){let n=i.map(e=>typeof e==`object`?Or(e,_r):String(e)).join(` `);e.push(t===`log`?n:`[${t}] ${n}`)}n[r].apply(console,i)}}),()=>t.forEach((e,t)=>{console[e]=n[t]})}var Ar=[`states`,`borders`,`provinces`,`burgIcons`,`labels`,`military`,`emblems`],jr=[`provinces`,`borders`,`labels`,`emblems`],E={burg:{label:i(`Burg`),layers:[`burgIcons`,`labels`],references:`burg`},state:{label:i(`State`),layers:Ar,references:`state`},province:{label:i(`Province`),layers:jr,references:`province`},culture:{label:i(`Culture`),layers:[`cultures`],references:`culture`},religion:{label:i(`Religion`),layers:[`religions`],references:`religion`},biome:{label:i(`Biome`),layers:[`biomes`],references:`biome`},pop:{label:i(`Rural population`),layers:[`population`]},r:{label:i(`River`),layers:[`rivers`],references:`river`},fl:{label:i(`Water flux`),layers:[`rivers`]},conf:{label:i(`Confluence`),layers:[`rivers`]},routes:{label:i(`Route links`),layers:[`routes`]}},Mr=[`burgIcons`,`labels`,`emblems`,`population`],Nr={name:[`labels`],fullName:[`labels`],formName:[`labels`],form:[`labels`]},Pr={burg:{"":[...Mr,`goods`],...Nr,group:[`burgIcons`,`labels`],capital:[`burgIcons`,`labels`],port:[`burgIcons`],x:Mr,y:Mr,population:[`population`],production:[`goods`]},state:{"":Ar,...Nr,color:[`states`,`military`],military:[`military`]},province:{"":jr,...Nr,name:[`provinces`,`labels`],color:[`provinces`],center:[`emblems`]},culture:{"":[`cultures`],color:[`cultures`]},religion:{"":[`religions`],color:[`religions`]},biome:{"":[`biomes`],color:[`biomes`]},river:{"":[`rivers`,`labels`],name:[`labels`],type:[`labels`],sourceWidth:[`rivers`],widthFactor:[`rivers`]},route:{"*":[`routes`,`labels`]},feature:{group:[`lakes`],coastline:[`landmass`,`coastline`,`lakes`]},zone:{"*":[`zones`]},marker:{"*":[`markers`]},addedLabel:{"*":[`labels`]},journey:{"*":[`journeys`]},good:{icon:[`goods`],color:[`goods`]},market:{"*":[`markets`]}},Fr={label:[`labels`],coa:[`emblems`],note:[],lock:[]};function Ir({key:e,field:t}){let n=e.split(`:`)[0];if(n===`cells`)return E[t]?.layers??[];let r=Pr[n];if(!r)return[];let i=t.split(`.`)[0];return i===`removed`||!i?r[``]??r[`*`]??[]:r[i]??Fr[i]??r[`*`]??[]}function Lr(e){return[...new Set(e.flatMap(Ir))]}var Rr=e=>typeof e==`object`&&!!e&&!ArrayBuffer.isView(e),D=(e,t)=>e===t||JSON.stringify(e)===JSON.stringify(t);function zr(e,t){for(let n=e.length-t.length;n>=0;n--)if(t.every((t,r)=>D(e[n+r],t)))return n;return-1}var O=class e{rows;static CELLS=`cells`;static LORE=`lore`;static STYLE=`style`;addedOrRemoved;constructor(e){this.rows=e,this.addedOrRemoved=new Set(e.filter(e=>!e.field||e.field===`removed`).map(e=>e.key))}static record(t,n){return[...e.entityRows(t,n),...e.cellRows(t,n),...e.recordRows(e.LORE,t,n),...e.recordRows(e.STYLE,t,n)]}get keys(){return new Set(this.rows.map(e=>e.key))}get layers(){return Lr(this.rows)}get stylePaths(){return this.rows.filter(t=>t.key===e.STYLE).map(e=>e.field.split(`.`))}matches(e,t){let n=t===`before`?`after`:`before`,r=new Set(this.rows.filter(e=>!e.field&&e[n]===void 0).map(e=>e.key));return this.rows.every(n=>{if(!this.rowMatches(e,n,t))return!1;if(n.field||!r.has(n.key))return!0;let{list:i,indexed:a,i:o}=e.find(n.key),s=n.key.split(`:`)[0];return!a||i.every(e=>!C.isItem(e)||e.i<=o||r.has(`${s}:${e.i}`))})}keepsReferencesIntact(t,n){let r=this.addedOrRemoved.size?this.writtenDraft(t,n):t,i=[...this.keys].filter(t=>t!==e.CELLS&&!e.isRecord(t)).filter(e=>!r.exists(e));return!i.some(e=>!this.addedOrRemoved.has(e))&&this.pointsOnlyAtExisting(r,n)&&this.nothingPointsAt(r,new Set(i))}writeTo(e,t){let n=t===`after`?this.rows:[...this.rows].reverse();for(let r of n)this.writeRow(e,r,t)}static entityRows(t,n){let r=[],i=(e,t)=>new Map((e.items(t)??[]).filter(C.isItem).map(e=>[e.i,e]));for(let{type:a,field:o,indexed:s}of S.collections()){let[c,l]=[i(t,o),i(n,o)];for(let i of new Set([...c.keys(),...l.keys()])){let u=`${a}:${i}`,[d,f]=[c.get(i),l.get(i)];if(d&&f){for(let t of e.diff(d,f))r.push({key:u,...t});continue}let p={key:u,field:``,before:structuredClone(d),after:f};if(!s){let e=(d?t:n).items(o),r=e.slice(e.indexOf(d??f)+1).filter(C.isItem);p.nextId=(d?r[0]:r.find(e=>c.has(e.i)))?.i??null}r.push(p)}}return r}static cellRows(t,n){let r=[];for(let i of Object.keys(E)){let[a,o]=[t.cells(i),n.cells(i)??{}];if(!a)continue;let s={},c={},l=ArrayBuffer.isView(a)?Array.from(a,(e,t)=>t):[...new Set([...Object.keys(a),...Object.keys(o)])].map(Number);for(let e of l)D(a[e],o[e])||(s[e]=structuredClone(a[e]),c[e]=o[e]);Object.keys(c).length&&r.push({key:e.CELLS,field:i,before:s,after:c})}return r}static recordRows(t,n,r){let i=e.recordOf(n,t);return i?e.diff(i,e.recordOf(r,t)).map(e=>({key:t,...e})):[]}static isRecord(t){return t===e.LORE||t===e.STYLE}static recordOf(t,n){return n===e.LORE?t.lore:t.styles}static diff(t,n,r=[]){return Array.isArray(t)&&Array.isArray(n)&&n.length>t.length&&t.every((e,t)=>D(e,n[t]))?[{field:r.join(`.`),after:n.slice(t.length),append:!0}]:Rr(t)&&Rr(n)&&Array.isArray(t)===Array.isArray(n)&&(!Array.isArray(t)||t.length===n.length)?[...new Set([...Object.keys(t),...Object.keys(n)])].flatMap(i=>e.diff(t[i],n[i],[...r,i])):D(t,n)?[]:[{field:r.join(`.`),before:structuredClone(t),after:n}]}rowMatches(t,n,r){let i=n[r];if(n.key===e.CELLS){let e=t.cells(n.field);return!!e&&Object.entries(i).every(([t,n])=>D(e[+t],n))}let a=e.isRecord(n.key)?void 0:t.find(n.key),o=e.isRecord(n.key)?e.recordOf(t,n.key):a?.item;if(!n.field)return!!a&&D(o,i);if(!o)return!1;let s=n.field.split(`.`).reduce((e,t)=>Rr(e)?e[t]:void 0,o);return n.append?Array.isArray(s)&&(r===`before`||zr(s,i)>=0):D(s,i)}writtenDraft(e,t){let n=e.draft();return this.writeTo(n,t),n}pointsOnlyAtExisting(t,n){let r=e=>t.exists(e);return this.rows.every(i=>{let a=i[n];if(e.isRecord(i.key))return!0;if(i.key===e.CELLS)return Object.values(a).every(t=>e.everyId(E[i.field]?.references,t,r));if(!t.exists(i.key))return!0;let o=i.key.split(`:`)[0];return(i.field?[[i.field.split(`.`)[0],a]]:Object.entries(a)).every(([t,n])=>e.everyId(S.referenceType(o,t),n,r))})}nothingPointsAt(t,n){if(!n.size)return!0;let r=e=>!n.has(e);for(let{field:n,references:i={}}of S.collections()){let a=Object.entries(i);if(a.length){for(let i of t.items(n)??[])if(C.isItem(i)&&!i.removed&&!a.every(([t,n])=>e.everyId(n,i[t],r)))return!1}}return Object.entries(E).every(([n,{references:i}])=>!i||Object.values(t.cells(n)??{}).every(t=>e.everyId(i,t,r)))}static everyId(t,n,r){return t?Array.isArray(n)?n.every(n=>e.everyId(t,n,r)):!n||typeof n!=`number`||r(`${t}:${n}`):!0}writeRow(t,n,r){let i=n[r];if(n.key===e.CELLS){let e=t.cells(n.field);for(let[t,n]of Object.entries(i))n===void 0?delete e[+t]:e[+t]=structuredClone(n);return}let{list:a,i:o,item:s}=e.isRecord(n.key)?{list:[],i:0,item:e.recordOf(t,n.key)}:t.find(n.key);if(!n.field){if(s&&a.splice(a.indexOf(s),1),i===void 0)return;let e=a.findIndex(e=>C.isItem(e)&&(n.nextId===void 0?e.i>o:e.i===n.nextId));a.splice(e<0?a.length:e,0,structuredClone(i));return}let c=n.field.split(`.`),l=c.pop(),u=s;for(let e of c)Rr(u[e])||(u[e]={}),u=u[e];if(n.append){let[e,t]=[u[l],n.after];r===`after`?e.push(...structuredClone(t)):e.splice(zr(e,t),t.length)}else i===void 0?delete u[l]:u[l]=structuredClone(i)}},Br={apply:{from:`proposed`,expects:`before`,writes:`after`,to:`applied`},undo:{from:`applied`,expects:`after`,writes:`before`,to:`undone`},redo:{from:`undone`,expects:`before`,writes:`after`,to:`applied`}},k=new class{prepare(e){return zt.preload(e)}propose(e,n,r,i){let a=this.parse(n);if(typeof a==`string`)return a;let o=C.live(),s=o.draft(),c,l;try{[c,l]=s.asLive(()=>{let e=[];for(let{op:t,args:n}of a)e.push(Ut(t,this.resolve(n,e)));let t=O.record(o,s);return[t,new Map(t.map(({key:e})=>[e,this.name(e)]))]})}catch(e){return t(e)}if(!c.length)return`These operations change nothing`;let u=c.find(e=>e.key===O.STYLE&&rt(e.field.split(`.`))===`regenerateRelief`);return u?`${u.field} regenerates every relief icon, which Undo cannot restore: the user changes it in the Style tab`:{number:r,mapId:i,summary:e,operations:a,change:c.map(e=>({...e,entity:this.label(e.key,l.get(e.key))})),state:`proposed`}}ready(e,t,n){let{from:r,expects:i}=Br[e];return t.state!==r||t.mapId!==n?!1:new O(t.change).matches(C.live(),i)}can(e,t,n){return this.ready(e,t,n)?new O(t.change).keepsReferencesIntact(C.live(),Br[e].writes):!1}run(e,t,n){if(!this.can(e,t,n))return!1;let r=new O(t.change);return r.writeTo(C.live(),Br[e].writes),t.state=Br[e].to,this.refresh(r),!0}discard(e){e.state===`proposed`&&(e.state=`discarded`)}parse(e){if(!Array.isArray(e)||!e.length)return`Propose at least one operation`;let t=[];for(let n of e){let{op:e,args:r=[]}=n??{};if(typeof e!=`string`||!Ht.has(e))return`Unknown operation ${JSON.stringify(e)}. Registered operations: ${[...Ht].join(`, `)}`;if(!Array.isArray(r))return`The args of ${e} must be a list, in the order of its parameters`;t.push({op:e,args:r})}return t}resolve(e,t){if(Array.isArray(e))return e.map(e=>this.resolve(e,t));if(typeof e!=`object`||!e||!Number.isInteger(e.result))return e;let{result:n,type:r,...i}=e;if(Object.keys(i).length||r!==void 0&&typeof r!=`string`)return e;if(n<0||n>=t.length)throw Error(`{ result: ${n} } must name an earlier operation of the batch, counted from 0`);if(t[n]===void 0)throw Error(`Operation ${n} returns nothing to refer to`);return r===void 0?t[n]:`${r}:${t[n]}`}name(e){let t=S.parseKey(e);return t?S.getName(t):``}label(e,t){if(e===O.LORE)return`Map lore`;if(e===O.STYLE)return`Style`;let n=S.parseKey(e);if(!n)return`Cells`;let{kind:r}=S.getDisplay(n),i=this.name(e)||t;return i?`${r}: ${i}`:r}refresh(e){ne.draw(...e.layers),this.refreshStyle(e.stylePaths),ge();for(let t of e.keys)this.refreshNameInputs(t);p(`notesEditor`)&&x.NotesEditor.refresh(),e.keys.has(O.LORE)&&(u.save(),p(`loreEditor`)&&x.LoreEditor.refresh())}refreshStyle(e){if(!e.length)return;let t=new Set,n=!1;for(let r of e){let e=rt(r);r.includes(`attrs`)&&Se.writeAttr(r),r.at(-1)===`scheme`&&m.ensure(xe(styles,r)),e===`zoom`&&(n=!0),e===`draw`&&ne.has(r[0])&&t.add(r[0])}ne.draw(...t),n&&he(),p(`styleForm`)?.childElementCount&&x.StyleEditor.refresh()}refreshNameInputs(e){let t=S.parseKey(e),n=t&&S.get(t);if(!t||!n)return;let r=n.name??``;if(t.type===`state`||t.type===`province`){if(p(`${t.type}NameEditor`)?.dataset[t.type]!==String(t.id))return;let e=p(`${t.type}NameEditorShort`),i=p(`${t.type}NameEditorFull`);e&&(e.value=r),i&&(i.value=n.fullName??r)}else{let n=p(`${t.type}Editor`),i=p(`${t.type}Name`);n?.dataset.entity===e&&i&&(i.value=r)}}},Vr=8,Hr={proposed:`apply`,applied:`undo`,undone:`redo`},Ur={fullName:i(`Full name`),"label.text":i(`Label`)},Wr={apply:i(`Apply`),undo:i(`Undo`),redo:i(`Redo`)},Gr={proposed:i(`Proposed`),applied:i(`Applied`),undone:i(`Undone`),discarded:i(`Discarded`)},Kr=new Set([`treasury`,`pollTax`]),qr=new Set([`pole`,`center`,`cells`,`neighbors`]),Jr={burg:[`group`,`population`,`port`,`capital`],state:[`form`,`culture`],province:[`state`,`burg`],culture:[`type`],religion:[`type`,`culture`],marker:[`type`]},Yr=new Set([`groups`,`attrs`,`options`]),Xr=/^#[0-9a-f]{3,8}$/i,Zr=(e,t)=>`${y(e)} ${t}${e===1?``:`s`}`,Qr=new class{html(e,t,r){let{change:o,state:s}=e,c=this.displayRows(o),l=[];for(let e of c.slice(0,Vr)){let t=l.at(-1);t?.[0].key===e.key?t.push(e):l.push([e])}let u=c.length-Vr,d=`${l.map(e=>`<div class="assistantChangeEntity">
          <div class="assistantChangeName">${n(this.entityLabel(e[0]))}${this.entityIcon(e[0])}${this.wholeTag(e[0])}</div>
          ${e.map(e=>this.rowHtml(e)).join(``)}
        </div>`).join(``)}${u>0?`<div class="assistantChangeMore">… ${i(`{{more}} more`,{more:u})}</div>`:``}`,f=new Set(c.map(e=>e.key)).size,p=`${i(`Changes: {{changes}}`,{changes:c.length})}${f>1?` · ${i(`Entities: {{entities}}`,{entities:f})}`:``}`,ee=(e,n,r,i=!1)=>`<button type="button" class="assistantButton${i?` assistantPrimary`:``}" data-action="${e}" data-index="${t}" ${r?``:`disabled`}>${n}</button>`,m=Hr[s],h=!!(m&&k.ready(m,e,r)),g=m?ee(m,h?Wr[m]:i(`Changed since`),h,s===`proposed`):``,te=s===`proposed`;return`<div class="assistantItem assistantProposal ${s}">
      <div class="assistantProposalHeader">
        <span class="assistantProposalState">${Gr[s]??a(s)}</span>
        <span class="assistantProposalSummary">${n(e.summary)}</span>
        ${te?``:g}
      </div>
      ${te?`<div class="assistantProposalBody">${d}</div>
        <div class="assistantProposalFooter"><span>${p}</span><span class="assistantProposalActions">${ee(`discard`,i(`Discard`),!0)}${g}</span></div>`:`<details class="assistantProposalBody"><summary>${i(`Show changes ({{changes}})`,{changes:c.length})}</summary>${d}</details>`}
    </div>`}text(e,t=20){let n=this.displayRows(e),r=n.slice(0,t).map(e=>{if(!e.field&&e.before===void 0)return[`${e.entity}: added`,...this.addedFields(e).map(([e,t])=>`${e}: ${t}`)].join(` · `);if(!e.field)return`${e.entity}: ${i(`removed`)}`;if(e.field===`coa`)return`${e.entity} · ${i(`Emblem: redrawn`)}`;if(e.key===`cells`)return`Cells · ${E[e.field]?.label??e.field}: ${Zr(Object.keys(e.after).length,`cell`)}`;if(e.field===`note`)return`${e.entity} · ${i(`Note: rewritten`)}`;if(e.append)return`${this.entityLabel(e)} · ${this.fieldLabel(e)}: + ${this.addedText(e)}`;let[t,n]=[this.valueText(e,e.before),this.valueText(e,e.after)];return`${this.entityLabel(e)} · ${this.fieldLabel(e)}: ${t??`none`} → ${n??`none`}`}),a=n.length-t;return r.join(`
`)+(a>0?`\n… ${a} more`:``)}displayRows(e){let t=this.wholeRows(e),n=new Set,r=t.flatMap(e=>e.field!==`coa`&&!e.field.startsWith(`coa.`)?[e]:n.has(e.key)?[]:(n.add(e.key),[{...e,field:`coa`,before:void 0,after:void 0}])),i=r.filter(e=>!(e.key.includes(`:`)&&qr.has(e.field.split(`.`)[0])));return i.length?i:r}wholeRows(e){let t=new Map;for(let n of e)n.field?n.field===`removed`&&n.after===!0&&!n.before&&t.set(n.key,{...n,field:``,before:!0,after:void 0}):t.set(n.key,n);let n=new Set;return e.flatMap(e=>{let r=t.get(e.key);return r?n.has(e.key)?[]:(n.add(e.key),[r]):[e]})}rowHtml(e){let{key:t,field:r,before:o,after:s}=e,c=(e,t,n=``)=>`<div class="assistantChangeField">
      <span>${e}</span>
      <span>${t}</span>
      ${n}
    </div>`;if(!r){let t=this.notePreview(o===void 0?s?.note:void 0);return(o===void 0?this.addedFields(e):[]).map(([e,t])=>c(n(e),n(t))).join(``)+t}if(r===`coa`)return c(`Emblem`,`redrawn`);if(t===`cells`)return c(E[r]?.label??a(r),Zr(Object.keys(s).length,`cell`));let l=n(this.fieldLabel(e));if(e.append)return c(l,`<ins>+ ${n(this.addedText(e))}</ins>`);if(r===`note`){let e=e=>typeof e==`string`&&e?Zr(e.length,`character`):`empty`;return c(l,`<del>${e(o)}</del><i>→</i><ins>${e(s)}</ins>`,this.notePreview(s))}let u=t=>{let r=this.valueText(e,t);return r===null?`<em>${i(`None`)}</em>`:(Xr.test(r)?`<span class="assistantSwatch" style="background:${r}"></span>`:``)+n(r)};return c(l,`<del>${u(o)}</del><i>→</i><ins>${u(s)}</ins>`)}fieldLabel(e){if(this.isChronicle(e))return`Entries`;if(e.key===`style`){let[t,...n]=e.field.split(`.`);return[me(t),...n.filter(e=>!Yr.has(e)).map(e=>a(e.replace(/[-_]/g,` `).replace(/([a-z])([A-Z])/g,`$1 $2`).toLowerCase()))].join(` · `)}let t=e.key.startsWith(`state:`)&&e.field.match(/^diplomacy\.(\d+)$/);return t?`Relation to ${this.entityName(`state:${t[1]}`)||`state ${t[1]}`}`:Ur[e.field]??a(e.field.replace(/\./g,` `).replace(/([a-z])([A-Z])/g,`$1 $2`).toLowerCase())}valueText(t,n){let{key:r,field:i}=t;if(n==null||n===``)return null;let a=r.slice(0,r.indexOf(`:`));if(typeof n==`number`){if(i===`population`&&a===`burg`)return y(ae(0,n));if(i===`rural`)return y(ae(n,0));if(i===`urban`)return y(ae(0,n));if(Kr.has(i)||i===`value`&&a===`good`)return de(n);if(i===`salesTax`)return`${e(n*100,2)}%`;if((i===`capital`||i===`port`)&&a===`burg`)return n?`yes`:`no`;if(i===`area`)return`${y(b(n))} ${le()}`;let t=S.referenceType(a,i);if(t)return this.entityName(`${t}:${n}`)||String(n)}if(Array.isArray(n))return this.isChronicle(t)?String(n.length):Zr(n.length,`item`);let o=typeof n==`string`?n:JSON.stringify(n);return o.length>80?`${o.slice(0,80)}…`:o}entityLabel(e){return this.isChronicle(e)?`Chronicle`:e.entity}addedFields(e){let t=e.after;return(Jr[e.key.split(`:`)[0]]??[]).flatMap(n=>{let r=t?.[n],i=r?this.valueText({...e,field:n},r):null;return i===null?[]:[[this.fieldLabel({...e,field:n}),i]]})}addedText(e){let t=e.after;return this.isChronicle(e)?t.map(e=>e[0]).join(`, `):Zr(t.length,`item`)}entityIcon({key:e,field:t,before:n,after:r}){let i=t?void 0:r??n,a=this.refOf(e),o=typeof i==`object`?i?.icon:a&&S.get(a)?.icon;return typeof o==`string`&&o?` ${_.html(o)}`:``}wholeTag({field:e,before:t}){if(e)return``;let n=t===void 0;return`<span class="assistantChangeTag ${n?`add`:`remove`}">${n?`Add`:`Remove`}</span>`}notePreview(e){if(typeof e!=`string`||!e)return``;if(!_e(e))return`<div class="assistantNotePreview">${n(e)}</div>`;let t=document.createElement(`template`);t.innerHTML=e;for(let e of t.content.querySelectorAll(`img`))e.replaceWith(`[${e.alt||`image`}]`);return`<div class="assistantNotePreview">${t.innerHTML}</div>`}isChronicle({key:e,field:t}){return e===`state:0`&&t===`diplomacy`}refOf(e){return globalThis.pack?S.parseKey(e):void 0}entityName(e){let t=this.refOf(e);return t?S.getName(t):``}},$r=80;function ei(e,t,n=!1){if(!e.length)return;let[r,i,a,o]=h(e),s=n?1:1.3,c=[Math.max(a-r,n?1:$r)*s,Math.max(o-i,n?1:$r)*s],l=t.width/t.height;c=c[0]/c[1]<l?[c[1]*l,c[1]]:[c[0],c[0]/l];let u=(e,t,n)=>t>=n?n/2:Math.min(Math.max(e,t/2),n-t/2),d=u((r+a)/2,c[0],options.map.graph.width),f=u((i+o)/2,c[1],options.map.graph.height);return{x0:d-c[0]/2,y0:f-c[1]/2,x1:d+c[0]/2,y1:f+c[1]/2,...t}}var ti=4e3,ni=50,ri=30;function ii(){return typeof mapHistory>`u`?0:mapHistory.at(-1)?.created??0}function ai(){return typeof options>`u`?`Unnamed map`:options.map.lore.name||`Unnamed map`}async function oi(t){if(typeof pack>`u`||!pack.cells)return`# Current map

No map is loaded yet.`;let n=e=>e?.filter(e=>e.i&&!e.removed).length??0,{distance:r,height:i,temperature:a}=options.map.units,o=[`name: ${ai()} (the world itself, not an entity: never link it)`,`seed: ${options.map.seed}`,`size: ${e(options.map.graph.width*r.scale)} × ${e(options.map.graph.height*r.scale)} ${r.unit}`,`units: 1 map unit = ${r.scale} ${r.unit}; 1 map unit² = ${e(b(1),4)} ${le()}; elevation in ${i.unit}; temperature in ${a.unit}`,`cells: ${pack.cells.i.length}`,`states: ${n(pack.states)}`,`burgs: ${n(pack.burgs)}`,`provinces: ${n(pack.provinces)}`,`cultures: ${n(pack.cultures)}`,`religions: ${n(pack.religions)}`,`rivers: ${pack.rivers?.length??0}`,`markers: ${pack.markers?.length??0}`,`chronicle entries: ${pack.states[0]?.diplomacy?.length??0} (\`States.getChronicle()\`: entries as text lines, the first the title; HTML-escaped)`],s=pack.states.flatMap(e=>e.i&&!e.removed?(e.diplomacy??[]).flatMap((t,n)=>t===`Vassal`?[`${e.name} (state:${e.i}) of ${pack.states[n]?.name} (state:${n})`]:[]):[]);return s.length&&o.push(`vassals: ${s.join(`; `)}`),[`# Current map\n\n${o.map(e=>`- ${e}`).join(`
`)}`,await ci(),si(t)].filter(Boolean).join(`

`)}function si(e){let t=e.items.findLastIndex(e=>e.kind===`question`),n=e.items.slice(0,t<0?void 0:t).flatMap(e=>e.kind===`proposal`?[e.proposal]:[]).slice(-20);if(!n.length)return null;let r={proposed:`waiting for the user`,applied:`applied`,undone:`applied, then undone`,discarded:`discarded`};return`# Proposals in this chat\n\n${n.map(({number:e,summary:t,state:n})=>`- #${e} ${r[n]}: ${t}`).join(`
`)}`}async function ci(){let e=await x.NotesEditor.current();if(!e)return null;let t=await x.NotesEditor.getSelectionHtml(),n=[`# Notes editor`,``,`The notes editor is open on note \`${e.id}\` ("${e.name}"). To rewrite it, propose \`Notes.write\` with the key \`${e.id}\`.`,``,`Current note HTML:`,"```html",li(e),"```"];return t&&n.push(``,`The user has this part selected:`,"```html",t,"```"),n.join(`
`)}function li(e){if(!e.legend)return`(empty)`;if(e.legend.length<=ti)return e.legend;let t=e.legend.length-ti;return`${e.legend.slice(0,ti)}\n… ${t} more characters — read the entity's .note field with read_map for the rest (entity key: ${e.id})`}var ui={si:y,rn:e,getArea:b,getAreaUnit:le,getDistance:ie,getDistanceUnit:se,getHeight:ue,convertTemperature:ce,getPrecipitation:re,formatSpeed:oe,formatPrice:de,getPeople:ae},di=[`state`,`province`,`burg`,`culture`,`religion`,`river`,`marker`,`feature`,`zone`,`route`,`good`],fi=40,pi=/[\p{L}\p{N}]/u;function mi(e,t){for(let n=e.indexOf(t);n>=0;n=e.indexOf(t,n+1))if(!pi.test(e[n-1]??``)&&!pi.test(e[n+t.length]??``))return n;return-1}function hi(e){let t=new Map;for(let n of di)for(let{ref:r,entity:i}of S.collect(n)){let{name:n}=i;if(typeof n!=`string`||n.length<3)continue;let a=t.get(n)?.at??mi(e,n);if(a<0)continue;let o=t.get(n)??{at:a,keys:[]};o.keys.push(S.key(r)),t.set(n,o)}let n=[...t].sort(([,e],[,t])=>e.at-t.at).slice(0,fi).map(([e,{keys:t}])=>`${e}: ${t.join(`, `)}`);return n.length?`\n# Keys of the names above\n${n.join(`
`)}`:``}var gi={status:`Reading the map`,definition:{name:`read_map`,description:`Run read-only JavaScript in the page. Return the result; describe(value) inspects a value. Scripts may call downloadFile for CSV or JSON. The result ends with the keys of map entities it names.`,input_schema:{type:`object`,properties:{code:{type:`string`}},required:[`code`]}},async handle(e){let t=typeof e.code==`string`?e.code:``,n=await br(t,{units:ui});if(!n.ok)return{content:n.error?.message||`Script failed`,item:{kind:`step`,code:t,result:n},isError:!0};let r=`${n.value}\n${n.logs.join(`
`)}`;return{content:r+hi(r),item:{kind:`step`,code:t,result:n}}}},_i={type:`array`,items:{type:`object`,properties:{op:{type:`string`},args:{type:`array`,items:{description:`A number, string, boolean or array, or { result: n }: what operation n returned`}}},required:[`op`,`args`]}},vi=new Set([`population`,`rural`,`urban`]),yi=({field:e,before:t,after:n})=>vi.has(e)&&typeof t==`number`&&typeof n==`number`&&t>0&&n>0&&Math.max(n/t,t/n)>=100;function bi(e){let t=0,n=``;return{status:`Preparing a change`,definition:{name:`propose_change`,description:`Propose one batch of registered operations. It never changes the map: the user previews the batch and applies or discards it.`,input_schema:{type:`object`,properties:{summary:{type:`string`},operations:_i},required:[`summary`,`operations`]}},async handle(r){let i=Math.max(t,e.items.filter(e=>e.kind===`proposal`).length)+1,a=typeof r.summary==`string`&&r.summary.trim()?r.summary.trim():`Change`;await k.prepare(r.operations);let o=k.propose(a,r.operations,i,ii());if(typeof o==`string`)return{content:o,isError:!0};let s=o.change.filter(yi),c=JSON.stringify(o.operations);if(s.length&&c!==n)return n=c,{content:`Nothing proposed: these populations change 100-fold or more, as if given in points instead of people. Fix the amounts, or send the same batch again if this is meant:\n${Qr.text(s)}`,isError:!0};t=i;let l=o.change.length;return{content:`Proposal #${i} (${l} change${l===1?``:`s`}) is waiting for the user to apply or discard it. Nothing has changed yet. Check its change does what was asked, as the user sees it:\n${Qr.text(o.change)}`,item:{kind:`proposal`,proposal:o}}}}}var A=e=>typeof e==`string`?e.trim():``,xi=e=>A(e).replace(/\[([^\]]*)\]\([^)]*\)/g,`$1`),Si=([e,t,n,r])=>n-e<=options.map.graph.width/2&&r-t<=options.map.graph.height/2,j=e=>`No entity ${e} on this map. Keys are type:id, e.g. burg:12`,Ci=Object.entries({entities:{description:`Show several map entities as a list the user can locate and ring on the map. Use it instead of a Markdown list whenever an answer names 3 or more entities (which, list, find, where are…).`,input_schema:{type:`object`,properties:{title:{type:`string`},entities:{type:`array`,items:{type:`string`}}},required:[`title`,`entities`]},parse(e){let t=Array.isArray(e.entities)?e.entities.map(String):[];if(!t.length||t.length>ni)return`entities takes 1 to ${ni} keys`;let n=t.find(e=>!S.resolveKey(e));return n?j(n):{type:`entities`,title:xi(e.title)||`Entities`,entities:t}}},card:{description:`Show a state's profile card: emblem, full name and form, capital, population, area, burgs, culture, religion and the start of its note. Use it whenever one state is the subject (tell me about, describe, overview, who rules), then add only what the card does not say.`,input_schema:{type:`object`,properties:{entity:{type:`string`}},required:[`entity`]},parse(e){let t=A(e.entity);return S.resolveKey(t)?t.startsWith(`state:`)?{type:`card`,entity:t}:`Cards show states for now`:j(t)}},chart:{description:`Show numbers you computed with read_map as a chart. bar: one measure compared or ranked across items (largest states, burgs by population, top religions). pie: parts of one whole (population by culture, land by biome), given as amounts, not percentages: the chart computes shares. unit names the amounts (people, mi²); "money" for prices, treasuries and taxes. Prefer it to a table when each item has one number.`,input_schema:{type:`object`,properties:{chart:{type:`string`,enum:[`bar`,`pie`]},title:{type:`string`},unit:{type:`string`},rows:{type:`array`,items:{type:`object`,properties:{label:{type:`string`},value:{type:`number`},entity:{type:`string`}},required:[`label`,`value`]}}},required:[`chart`,`title`,`rows`]},parse(e){if(e.chart!==`bar`&&e.chart!==`pie`)return`chart is bar or pie`;let t=Array.isArray(e.rows)?e.rows:[];if(!t.length||t.length>ri)return`rows takes 1 to ${ri} items`;let n=[];for(let e of t){let{label:t,value:r,entity:i}=e??{};if(!A(t)||typeof r!=`number`||!Number.isFinite(r)||r<0)return`Each row needs a label and a non-negative number value, got ${JSON.stringify(e)}`;if(i!==void 0&&!S.resolveKey(i))return j(i);n.push(i===void 0?{label:A(t),value:r}:{label:A(t),value:r,entity:String(i)})}if(e.chart===`pie`&&!n.some(e=>e.value>0))return`A pie needs amounts that add up to more than 0`;let r=A(e.unit);return{type:`chart`,chart:e.chart,title:xi(e.title)||`Chart`,...r&&{unit:r},rows:n}}},choices:{description:`Offer 2-4 alternatives for the user to pick: name ideas, options, directions. Give a choice operations (as in propose_change) when picking it should change the map, such as one rename per name idea; otherwise its label becomes the user's next question. Use it instead of listing suggestions, then stop and wait.`,input_schema:{type:`object`,properties:{title:{type:`string`},choices:{type:`array`,items:{type:`object`,properties:{label:{type:`string`},operations:_i},required:[`label`]}}},required:[`title`,`choices`]},parse(e){let t=Array.isArray(e.choices)?e.choices:[];if(t.length<2||t.length>4)return`choices takes 2 to 4 options`;let n=[];for(let[e,r]of t.entries()){let{label:t,operations:i}=r??{};if(!A(t))return`Choice ${e+1} needs a label`;if(i===void 0||Array.isArray(i)&&!i.length){n.push({label:A(t)});continue}let a=k.propose(A(t),i,0,ii());if(typeof a==`string`)return`Choice ${e+1}: ${a}`;n.push({label:A(t),operations:a.operations})}return{type:`choices`,title:xi(e.title)||`Choose one`,choices:n}}},inset:{description:`Show a picture of a small part of the map (at most half its width and height) around an entity key, or a box [x0, y0, x1, y1] in map units; clicking it zooms the map there. Use it when an answer is about where something is or what a place is like.`,input_schema:{type:`object`,properties:{title:{type:`string`},entity:{type:`string`},box:{type:`array`,items:{type:`number`}}}},parse(e){let t=xi(e.title);if(e.entity!==void 0){let n=A(e.entity),r=S.resolveKey(n);if(!r)return j(n);let i=S.getPoints(r);return i.length?Si(h(i))?{type:`inset`,title:t||S.getName(r),entity:n}:`${n} covers too much of the map for an inset`:`${n} has no place on the map`}let n=Array.isArray(e.box)?e.box:[],{width:r,height:i}=options.map.graph,[a,o,s,c]=n;return n.length!==4||!n.every(Number.isFinite)||s<=a||c<=o||s<0||c<0||a>r||o>i?`An inset takes an entity key or a box [x0, y0, x1, y1] in map units within ${r} × ${i}`:Si([a,o,s,c])?{type:`inset`,title:t||`Map`,box:[a,o,s,c]}:`An inset shows a small part of the map, not most of it`}},source:{description:`Link the wiki page an answer from read_help came from, so the user can read more. page is the part of a section heading before " › ", or "Knowledge Base".`,input_schema:{type:`object`,properties:{page:{type:`string`}},required:[`page`]},parse(e){let t=A(e.page).replace(/[\s-]+/g,` `).toLowerCase(),n=mn.find(e=>e.replace(/-/g,` `).toLowerCase()===t);return n?{type:`source`,page:n}:`No wiki page "${A(e.page)}". Pages: ${mn.join(`, `)}`}}}).map(([e,{parse:t,...n}])=>({definition:{name:`show_${e}`,...n},status:`Preparing a widget`,async handle(e){await k.prepare(e);let n=t(e);return typeof n==`string`?{content:n,isError:!0}:{content:n.type===`choices`?`The choices are waiting for the user. Stop here: their pick arrives as a proposal or as their next question.`:`Shown the ${n.type} widget to the user`,item:{kind:`widget`,widget:n}}}})),wi=[`state`,`province`,`burg`],Ti=256,Ei={status:`Looking at the emblem`,definition:{name:`view_emblem`,description:`See the emblem (coat of arms) of a state, province or burg as an image, to describe it or match lore to it. The user sees it too.`,input_schema:{type:`object`,properties:{entity:{type:`string`}},required:[`entity`]}},async handle(e){let t=A(e.entity);if(!wi.some(e=>t.startsWith(`${e}:`)))return{content:`Emblems belong to states, provinces and burgs`,isError:!0};let n=S.resolveKey(t);if(!n)return{content:j(t),isError:!0};let i=S.get(n).coa;if(!i)return{content:`${t} has no emblem`,isError:!0};let{emblemPng:a}=await r(async()=>{let{emblemPng:e}=await import(`./emblem-image-lwUYLSL0.js`);return{emblemPng:e}},__vite__mapDeps([67,5,2,4,1,6,7,8,9,10,11,12,13,14,15,16,17,18,68,54])),o=await a(`${n.type}COA${n.id}`,i,Ti);return{content:[{type:`text`,text:`The emblem of ${S.getName(n)}`},Ge(o)],item:{kind:`widget`,widget:{type:`emblem`,entity:t}}}}},Di=1024,Oi=(e,t)=>{let n=Di/Math.max(e,t);return{width:Math.round(e*n),height:Math.round(t*n)}};function ki(e){let{width:t,height:n}=options.map.graph;if(e===`map`)return{x0:0,y0:0,x1:t,y1:n,...Oi(t,n)};if(e===`view`){let{scale:e,x:t,y:n}=pe,[r,i]=[-t/e,-n/e],[a,o]=[r+pe.width/e,i+pe.height/e];return{x0:r,y0:i,x1:a,y1:o,...Oi(a-r,o-i)}}let r=S.resolveKey(e);return r?ei(S.getPoints(r),Oi(16,10))??`${e} has no place on the map`:j(e)}var Ai={status:`Looking at the map`,definition:{name:`view_map`,description:`See the map as the user sees it, in its current style and visible layers: an entity framed, "view" for what the user has on screen, or "map" for the whole map. For looks, shapes and layout; read names and numbers with read_map.`,input_schema:{type:`object`,properties:{target:{type:`string`,description:`An entity key, "view" or "map"`}},required:[`target`]}},async handle(e){let t=A(e.target)||`view`,n=ki(t);if(typeof n==`string`)return{content:n,isError:!0};let{ExportMap:i}=await r(async()=>{let{ExportMap:e}=await import(`./export-CUr5GPeL.js`).then(e=>e.t);return{ExportMap:e}},__vite__mapDeps([68,1,2,5,4,6,7,8,9,10,11,12,13,14,15,16,17,18,54])),a=await i.getRegionImage(n,1,`image/jpeg`);return{content:[{type:`text`,text:`${t===`map`?`The whole map`:t===`view`?`The user's view`:`The map around ${t}`}.${typeof Layers>`u`?``:` Visible layers: ${Layers.state.active.join(`, `)}.`}`},Ge(a)]}}};function ji(e){return[gi,bi(e),...Ci,Ei,Ai]}var M={id:ii,name:ai,context:oi,tools:ji},Mi=240,Ni=`money`,Pi={width:480,height:300},Fi=new WeakMap,Ii=0,Li=null,Ri=()=>p(`assistant`)?.closest(`.ui-dialog`)?.getBoundingClientRect();function zi(e){let t=Me.find(t=>t.id===e);return t&&Pe(t)?t:void 0}function Bi(e){let t=e.type===`good`?S.get(e):void 0;return t?`<svg class="assistantGood" viewBox="0 0 100 100" aria-hidden="true">${te(t)}</svg>`:`<span class="${S.getDisplay(e).icon}" aria-hidden="true"></span>`}var Vi=(e,t)=>`<button type="button" class="assistantEntity" data-action="entity" data-id="${S.key(e)}" data-tip="${i(`Show on map`)}">${Bi(e)}${t}</button>`;function Hi(e,t,r=``){let i=t?S.resolveKey(e):void 0;return i?Vi(i,n(S.getName(i)||r)):n(r)}function Ui(e){return(t,n)=>{if(n.startsWith(`command:`)){let e=zi(n.slice(8));return e?Ji(e.id,t):t}if(!n.includes(`:`)||!Ce(n.split(`:`)[0]))return null;let r=e?S.resolveKey(n):void 0;return r&&qi(r,t)?Vi(r,t):t}}var Wi=`(?:${[...Te,...we].join(`|`)}):\\d+(?:-\\d+)?`,Gi=RegExp(`\`[^\`\\n]*\`|\\[(${Wi})\\]\\(\\1\\)|\\[[^\\]\\n]*\\]\\([^)\\s]*\\)|\\b(${Wi})\\b`,`g`);function Ki(e,t){let n=``,r=0;for(let i of e.matchAll(Gi)){let a=i[1]??i[2];if(!a)continue;let o=i.index,s=o+i[0].length,c=e[o-1]===`(`&&e[s]===`)`;c&&([o,s]=[o-1,s+1]);let l=e.slice(r,o),u=t?S.resolveKey(a):void 0,d=u?[S.get(u)?.name,S.getName(u)]:[],[f]=d.filter(e=>typeof e==`string`&&!!e);if(!c)n+=l+(f?`[${f}](${a})`:i[0]);else{let e=l.match(/[\s*_]*$/)[0],t=l.slice(0,l.length-e.length),r=d.find(e=>typeof e==`string`&&!!e&&t.toLowerCase().endsWith(e.toLowerCase()));n+=r?`${t.slice(0,-r.length)}[${t.slice(-r.length)}](${a})${e.trimEnd()}`:`${t}${e.trimEnd()}`}r=s}return Yn(n+e.slice(r),Ui(t))}function qi(e,t){if(we.includes(e.type))return!0;let r=n(S.getName(e)).toLowerCase(),i=t.replace(/[*_~]/g,``).toLowerCase();return!r||!i||r.includes(i)||i.includes(r)}var Ji=(e,t,r=`assistantCommand`)=>`<button type="button" class="${r}" data-action="command" data-id="${e}" data-tip="${n(zi(e)?.name??``)}">${t}</button>`,N=(e,t,n)=>`<div class="assistantItem assistantWidget">
    <div class="assistantWidgetHeader">${e}</div>
    ${n?``:`<div class="assistantWidgetNote">${i(`Its map is not open`)}</div>`}
    ${t}
  </div>`;function Yi(e,t){return e.type===`card`?Qi(e,t.live):e.type===`chart`?aa(e,t.live):e.type===`choices`?sa(e,t):e.type===`inset`?pa(e,t):e.type===`emblem`?ea(e,t.live):e.type===`source`?na(e):Xi(e,t)}function Xi(e,{index:t,live:r}){let a=e.entities.map(e=>{let t=r?S.resolveKey(e):void 0;if(!t)return`<li class="gone">${n(e)}</li>`;let i=S.getContext(t);return`<li>${Vi(t,n(S.getName(t)||S.getDisplay(t).kind))}${i?`<small>${n(i)}</small>`:``}</li>`}).join(``),o=Li===e,s=`<button type="button" class="assistantButton" data-action="mark" data-index="${t}" aria-pressed="${o}" ${r?``:`disabled`}>${i(o?`Hide on map`:`Show on map`)}</button>`;return N(`<span>${n(e.title)}</span>${s}`,`<ul>${a}</ul>`,r)}function Zi(e){let t=document.createElement(`template`);return t.innerHTML=e,(t.content.textContent??``).replace(/\s+/g,` `).trim()}function Qi(e,t){let r=t?S.resolveKey(e.entity):void 0,a=r&&S.get(r);if(!r||!a)return N(`<span>${n(e.entity)}</span>`,t?`<div class="assistantWidgetNote">${i(`No longer on this map`)}</div>`:``,t);let o=ae(a.rural,a.urban),s=pack.burgs[a.capital],c=s?pack.cells.religion?.[s.cell]:void 0,l=[[`Capital`,s?Hi(`burg:${s.i}`,t,s.name):`none`],[`Population`,y(o)],[`Area`,`${y(b(a.area||0))} ${le()}`],[`Burgs`,String(a.burgs??0)],[`Culture`,Hi(`culture:${a.culture}`,t)],[`Religion`,c?Hi(`religion:${c}`,t):``]],u=a.note?Zi(a.note):``,d=u.length>Mi?`${u.slice(0,Mi)}…`:u;return`<div class="assistantItem assistantWidget assistantCard">
    <div class="assistantCardHead">
      ${$i(`stateCOA${a.i}`,a.coa)}
      <div>
        <strong>${n(a.fullName||a.name)}</strong>
        <small>${n(a.formName||a.form||`State`)}</small>
      </div>
    </div>
    <dl>${l.filter(([,e])=>e).map(([e,t])=>`<dt>${e}</dt><dd>${t}</dd>`).join(``)}</dl>
    ${d?`<p class="assistantCardNote">${n(d)}</p>`:``}
    <div class="assistantActions">
      <button type="button" class="assistantButton" data-action="entity" data-id="${S.key(r)}">${i(`Locate`)}</button>
      ${Ji(`editStatesButton`,`Edit`,`assistantButton`)}
    </div>
  </div>`}function $i(e,t,n=``){return t&&window.EmblemRenderer?.trigger(e,t),`<svg${n&&` class="${n}"`} viewBox="0 0 200 200" aria-hidden="true"><use href="#${e}"></use></svg>`}function ea(e,t){let r=t?S.resolveKey(e.entity):void 0,i=r&&S.get(r)?.coa;return!r||!i?N(`<span>${n(e.entity)}</span>`,``,t):N(Hi(e.entity,t),$i(`${r.type}COA${r.id}`,i,`assistantEmblem`),!0)}var ta=`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/`;function na({page:e}){let t=`<a href="${ta+encodeURIComponent(e.replace(/ /g,`-`))}" target="_blank" rel="noopener noreferrer">${n(e.replace(/-/g,` `))}</a>`;return N(`<span>${i(`Source`)}</span>`,`<div class="assistantSource">📖 ${t}</div>`,!0)}function ra(t,r){if(r===Ni)return de(t);let i=t>=1e4?y(t):String(e(t,2));return r?`${i} ${n(r)}`:i}function ia(e,t){let r=t?S.resolveKey(e.entity):void 0;return r?Vi(r,n(e.label)):n(e.label)}function aa(t,r){let i=`<span>${n(t.title)}</span>`;if(t.chart===`pie`)return N(i,oa(t,r),!0);let a=Math.max(...t.rows.map(e=>e.value),0)||1;return N(i,`<div class="assistantChart">${t.rows.map(n=>`<div class="assistantBar">
        <span>${ia(n,r)}</span>
        <span class="assistantBarTrack"><i style="width: ${e(n.value/a*100,2)}%"></i></span>
        <span>${ra(n.value,t.unit)}</span>
      </div>`).join(``)}</div>`,!0)}function oa(t,n){let r=t.rows.reduce((e,t)=>e+t.value,0),a=e=>r?e/r:0,o=e=>ct[e%ct.length],s=-Math.PI/2,c=t.rows.map((t,n)=>{let r=a(t.value);if(r>=1)return`<circle r="1" fill="${o(n)}"></circle>`;let i=s;s+=r*Math.PI*2;let[c,l,u,d]=[Math.cos(i),Math.sin(i),Math.cos(s),Math.sin(s)].map(t=>e(t,4));return`<path d="M0 0L${c} ${l}A1 1 0 ${+(r>.5)} 1 ${u} ${d}Z" fill="${o(n)}"></path>`}).join(``),l=t.unit===`%`;return`<div class="assistantPie"><svg viewBox="-1 -1 2 2" aria-hidden="true">${c}</svg><ul>${t.rows.map((r,i)=>`<li${l?``:` data-tip="${ra(r.value,t.unit)}"`}>
        <i style="background: ${o(i)}"></i>${ia(r,n)}
        <small>${e(a(r.value)*100,1)}%</small>
      </li>`).join(``)}</ul></div><div class="assistantChartCaption">${l?i(`Share of the total`):`Share of ${ra(r,t.unit)}`}</div>`}function sa(e,{index:t,live:r,canAsk:a}){let o=e.choices.map((o,s)=>{let c=e.picked===s,l=e.picked===void 0&&(o.operations?r:a),u=o.operations?i(`Propose this change`):`Ask this`;return`<button type="button" class="assistantButton${c?` assistantPrimary`:``}" data-action="choose" data-index="${t}" data-choice="${s}" data-tip="${u}" aria-pressed="${c}" ${l?``:`disabled`}>${n(o.label)}</button>`}).join(``);return N(`<span>${n(e.title)}</span>`,`<div class="assistantActions assistantChoices">${o}</div>`,!0)}function ca(e){if(e.box)return[e.box.slice(0,2),e.box.slice(2)];let t=S.resolveKey(e.entity);return t?S.getPoints(t):[]}var la=e=>ei(ca(e),Pi,!!e.box);function ua(e,{x0:t,y0:n,x1:r,y1:i}){let a=S.resolveKey(e.entity),o=a&&S.getAnchor(a);if(!o)return``;let s=(r-t)/40;return`<svg viewBox="${t} ${n} ${r-t} ${i-n}" aria-hidden="true"><circle cx="${o[0]}" cy="${o[1]}" r="${s}" fill="none" stroke="#d0240f" stroke-width="${s/4}"></circle></svg>`}var da=(e,{region:t,image:n,failed:r})=>n&&t?`<img src="${n}" alt="" />${ua(e,t)}`:`<span>${i(r?`Could not draw this part of the map`:`Drawing the map…`)}</span>`;async function fa(e,t){try{if(!t.region)throw Error(`No region`);let{ExportMap:e}=await r(async()=>{let{ExportMap:e}=await import(`./export-CUr5GPeL.js`).then(e=>e.t);return{ExportMap:e}},__vite__mapDeps([68,1,2,5,4,6,7,8,9,10,11,12,13,14,15,16,17,18,54]));t.image=await e.getRegionImage(t.region)}catch{t.failed=!0}let n=p(t.id);n&&(n.innerHTML=da(e,t))}function pa(e,{index:t,live:r}){let a=`<span>${n(e.title)}</span>`;if(!r)return N(a,``,!1);let o=Fi.get(e);return o||(o={id:`assistantInset${++Ii}`,region:la(e)},Fi.set(e,o),fa(e,o)),N(a,`<button type="button" id="${o.id}" class="assistantInset" data-action="inset" data-index="${t}" data-tip="${i(`Show on map`)}">${da(e,o)}</button>`,!0)}function ma(e){let t=S.resolveKey(e.entity);t?it(t,Ri()):ot(ca(e),{layers:[],maxScale:20,element:()=>null,cover:Ri()})}function ha(e){let t=S.resolveKey(e);t&&(it(t,Ri())||S.open(t)||fe(i(`This element has no map location`),!1,`warn`,4e3))}function ga(e){zi(e)?.run()}function _a(e){if(Li===e){va();return}let t=e.entities.flatMap(e=>S.resolveKey(e)??[]);Li=at(t,Ri())?e:null,Li||fe(i(`These entities have no map location`),!1,`warn`,4e3)}function va(){Li=null,st()}var P={answer:Ki,html:Yi,openEntity:ha,runCommand:ga,revealInset:ma,toggleMarks:_a,clearMarks:va},F=`assistant`,ya=2e3,ba=4,xa=`https://github.com/Azgaar/Fantasy-Map-Generator/wiki/Policy`,Sa=`https://discordapp.com/invite/X7E84HU`,Ca=`https://www.patreon.com/azgaar`,I,L=`chat`,R=!1,wa=null,Ta=null,z=null,B=!1,Ea,Da=0,Oa=null,V=null,ka=`Thinking`,H=[],U=()=>Qe()?`key`:dt()?c()?`member`:`guest`:null,Aa=e=>e?e.usage.input+e.usage.output+e.usage.cached:0,W=e=>!!(e&&Ft(e,U(),M.id())),ja=()=>p(F)!==null,G=!1,Ma=!1,K=e=>g(e);function Na(){G?$(`#${F}`).dialog(`close`):Pa()}function Pa(){ja()?($(`#${F}`).dialog(G?`moveToTop`:`open`),G||(G=!0,Y(!Ma),Ma=!1),$a()):(G=!0,Fa()),d(!0)}function Fa(){L=`chat`,Ra(),$(`#${F}`).dialog({title:i(`Azgaar Assistant`),position:{my:`right bottom`,at:`right-16 bottom-44`,of:window},width:Math.min(340,window.innerWidth-24),height:Math.min(580,window.innerHeight-140),minWidth:300,minHeight:320,resizable:!0,close:Ia}),za(),Ea=Va()}function Ia(){G=!1,d(!1),P.clearMarks()}var La=`
  <style>
    #assistant.ui-dialog-content { display: flex; flex-direction: column; gap: .5em; overflow: hidden; padding: .6em .7em .5em; font-family: var(--sans-serif); }
    #assistant > * { width: auto; }
    #assistant [hidden] { display: none !important; }
    #assistant button { cursor: pointer; font: inherit; }
    #assistant button:disabled { cursor: default; opacity: .5; }
    #assistant pre, #assistant code { font-family: var(--monospace); }
    .ui-dialog .ui-dialog-titlebar #assistantOpenChats { font-size: .62em; }

    #assistantTranscript, #assistantChats, #assistantKey { flex: 1; min-height: 0; overflow: hidden auto; padding-right: .2em; line-height: 1.45; }

    #assistant .assistantItem { max-width: 92%; margin: 0 0 .7em; overflow-wrap: anywhere; }
    #assistant .assistantItem > :first-child { margin-top: 0; }
    #assistant .assistantItem > :last-child { margin-bottom: 0; }
    #assistant .assistantItem p { margin: .45em 0; }
    #assistant .assistantItem :is(h1, h2, h3, h4, h5, h6) { margin: .7em 0 .3em; font-size: 1em; }
    #assistant .assistantItem :is(ol, ul) { margin: .45em 0; padding-left: 1.3em; }
    #assistant .assistantItem pre { overflow: auto; max-height: 14em; margin: .45em 0; padding: .4em .55em; border-radius: .3em; background: rgb(0 0 0 / 6%); white-space: pre-wrap; }
    #assistant .assistantItem table { display: block; overflow-x: auto; margin: .45em 0; border-collapse: collapse; font-size: .92em; }
    #assistant .assistantItem :is(td, th) { padding: .2em .5em; border: 1px solid rgb(0 0 0 / 14%); }
    #assistant .assistantItem th { background: rgb(0 0 0 / 5%); }

    #assistant .assistantQuestion { width: fit-content; margin-left: auto; padding: .45em .7em; border-radius: .8em .8em .2em .8em; background: var(--header); color: #fff; white-space: pre-wrap; }
    #assistant .assistantQuestionImages { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: .3em; }
    #assistant .assistantQuestionImages:not(:last-child) { margin-bottom: .35em; }
    #assistant .assistantQuestionImages img { max-width: 100%; max-height: 8em; border-radius: .4em; }
    #assistant .assistantAnswer { padding: .1em .1em 0; }
    #assistant .assistantWelcome { padding: .6em .75em; border-radius: .5em; background: rgb(0 0 0 / 5%); }

    #assistant .assistantStep { width: fit-content; margin: 0 0 .5em; font-size: .9em; opacity: .75; }
    #assistant .assistantStep summary { cursor: pointer; }
    #assistant .assistantStep.failed summary { color: #a3262e; }
    #assistant .assistantProposal { width: 100%; overflow: hidden; border: 1px solid rgb(0 0 0 / 14%); border-radius: .55em; background: rgb(255 255 255 / 60%); }
    #assistant .assistantProposalHeader { display: flex; align-items: center; gap: .55em; padding: .5em .7em; border-bottom: 1px solid rgb(0 0 0 / 8%); background: rgb(0 0 0 / 3%); }
    #assistant .assistantProposalState { flex: none; padding: .1em .55em; border-radius: 1em; background: var(--header); color: #fff; font-size: .72em; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; }
    #assistant .assistantProposal.applied .assistantProposalState { background: #3d7a3a; }
    #assistant .assistantProposal:is(.undone, .discarded) .assistantProposalState { background: rgb(0 0 0 / 40%); }
    #assistant .assistantProposalSummary { flex: 1; font-weight: 600; }
    #assistant .assistantProposalHeader .assistantButton { flex: none; padding: .1em .6em; font-size: .9em; }
    #assistant .assistantProposalBody { display: grid; gap: .55em; padding: .55em .7em; }
    #assistant details.assistantProposalBody:not([open]) { padding-block: .35em; }
    #assistant .assistantProposalBody > summary { cursor: pointer; opacity: .7; font-size: .9em; }
    #assistant .assistantChangeName { display: flex; align-items: center; gap: .35em; margin-bottom: .1em; font-weight: 600; }
    #assistant .assistantChangeName > svg { flex: none; }
    #assistant .assistantChangeTag { margin-left: auto; padding: 0 .5em; border-radius: 1em; font-size: .75em; font-weight: 600; }
    #assistant .assistantChangeTag.add { background: rgb(61 122 58 / 15%); color: #2f6a2c; }
    #assistant .assistantChangeTag.remove { background: rgb(160 40 40 / 12%); color: #8a2a2a; }
    #assistant .assistantChangeField { display: grid; grid-template-columns: 5.5em minmax(0, 1fr); gap: 0 .6em; padding-left: .6em; font-size: .92em; }
    #assistant .assistantChangeField > span:first-child { opacity: .6; }
    #assistant .assistantChangeField del { opacity: .55; }
    #assistant .assistantChangeField i { margin: 0 .35em; font-style: normal; opacity: .45; }
    #assistant .assistantChangeField ins { font-weight: 600; text-decoration: none; }
    #assistant .assistantChangeField em { opacity: .6; }
    #assistant .assistantSwatch { display: inline-block; width: .8em; height: .8em; margin-right: .3em; border: 1px solid rgb(0 0 0 / 25%); border-radius: 2px; vertical-align: -.1em; }
    #assistant .assistantChangeMore { opacity: .6; font-size: .9em; }
    #assistant .assistantNotePreview { contain: paint; grid-column: 1 / -1; max-height: 10em; overflow: auto; margin-top: .35em; padding: .35em .6em; border-radius: .35em; background: rgb(0 0 0 / 4%); }
    #assistant .assistantNotePreview p { margin: .3em 0; }
    #assistant .assistantChangeEntity > .assistantNotePreview { margin: .15em 0 0 .6em; font-size: .92em; }
    #assistant .assistantProposalFooter { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .4em; padding: .4em .7em; border-top: 1px solid rgb(0 0 0 / 8%); }
    #assistant .assistantProposalFooter > span:first-child { opacity: .6; font-size: .88em; }
    #assistant .assistantProposalActions { display: flex; gap: .4em; }
    #assistant :is(.assistantEntity, .assistantCommand) { padding: 0; border: 0; background: none; color: inherit; }
    #assistant .assistantEntity { text-decoration-line: underline; text-decoration-style: dotted; text-underline-offset: 2px; }
    #assistant .assistantEntity:hover { color: var(--header-active); }
    #assistant .assistantEntity > span { display: inline-block; margin-right: .35em; opacity: .55; font-size: .9em; }
    #assistant .assistantEntity > .assistantGood { width: 1.2em; height: 1.2em; margin-right: .3em; vertical-align: -.25em; }
    #assistant .assistantCommand { padding: 0 .4em; border: 1px solid var(--header); border-radius: .35em; }
    #assistant .assistantCommand:hover { background: rgb(0 0 0 / 5%); }
    #assistant .assistantWidget { width: 100%; overflow: hidden; border: 1px solid rgb(0 0 0 / 14%); border-radius: .55em; background: rgb(255 255 255 / 60%); }
    #assistant .assistantWidgetHeader { display: flex; align-items: center; justify-content: space-between; gap: .55em; padding: .4em .7em; border-bottom: 1px solid rgb(0 0 0 / 8%); background: rgb(0 0 0 / 3%); font-weight: 600; }
    #assistant .assistantWidgetHeader .assistantButton { flex: none; padding: .1em .6em; font-size: .9em; font-weight: normal; }
    #assistant .assistantWidgetHeader .assistantButton[aria-pressed="true"] { background: var(--header); color: #fff; }
    #assistant .assistantWidgetNote { padding: .3em .7em 0; opacity: .6; font-size: .9em; }
    #assistant .assistantWidget ul { max-height: 16em; overflow-y: auto; margin: 0; padding: .35em .7em; list-style: none; }
    #assistant .assistantWidget li { display: flex; align-items: baseline; gap: .4em; padding: .1em 0; }
    #assistant .assistantWidget li small { margin-left: auto; opacity: .6; text-align: right; }
    #assistant .assistantWidget li.gone { opacity: .5; }
    #assistant .assistantCard { padding: .6em .7em; }
    #assistant .assistantCardHead { display: flex; align-items: center; gap: .6em; }
    #assistant .assistantCardHead svg { flex: none; width: 3.6em; height: 3.6em; }
    #assistant .assistantCardHead strong { display: block; font-size: 1.05em; }
    #assistant .assistantCardHead small { opacity: .6; }
    #assistant .assistantCard dl { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: .15em .8em; margin: .55em 0 0; }
    #assistant .assistantCard dt { opacity: .6; }
    #assistant .assistantCard dd { margin: 0; }
    #assistant .assistantCardNote { margin: .5em 0 0; opacity: .8; font-size: .92em; }
    #assistant .assistantChart { display: grid; grid-template-columns: minmax(0, max-content) minmax(3em, 1fr) auto; align-items: center; gap: .25em .6em; padding: .45em .7em; }
    #assistant .assistantBar { display: contents; }
    #assistant .assistantBar > span:first-child { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    #assistant .assistantBar > span:last-child { font-variant-numeric: tabular-nums; opacity: .75; text-align: right; }
    #assistant .assistantBarTrack { height: .75em; border-radius: .2em; background: rgb(0 0 0 / 6%); }
    #assistant .assistantBarTrack i { display: block; height: 100%; min-width: 1px; border-radius: .2em; background: var(--header); }
    #assistant .assistantPie { display: flex; align-items: center; gap: .8em; padding: .45em .7em; }
    #assistant .assistantPie svg { flex: none; width: 6.5em; height: 6.5em; }
    #assistant .assistantPie ul { flex: 1; padding: 0; }
    #assistant .assistantPie li i { flex: none; width: .75em; height: .75em; border-radius: .15em; }
    #assistant .assistantChoices { margin: 0; padding: .5em .7em; }
    #assistant .assistantChartCaption { padding: 0 .7em .45em; opacity: .6; font-size: .88em; }
    #assistant .assistantInset { position: relative; display: grid; place-items: center; width: 100%; aspect-ratio: 480 / 300; padding: 0; border: 0; background: rgb(0 0 0 / 4%); color: inherit; }
    #assistant .assistantInset :is(img, svg) { position: absolute; inset: 0; display: block; width: 100%; height: 100%; }
    #assistant .assistantInset span { opacity: .6; font-size: .9em; }
    #assistant .assistantSource { padding: .45em .7em; }
    #assistant .assistantSource a { color: inherit; }
    #assistant .assistantEmblem { display: block; width: 9em; height: 9em; margin: .5em auto; }
    #assistant .assistantNoticeItem { padding: .4em .6em; border-left: 3px solid var(--header); border-radius: .25em; background: rgb(0 0 0 / 4%); font-size: .9em; }
    #assistant .assistantDivider { display: flex; align-items: center; gap: .6em; margin: .8em 0; opacity: .5; font-size: .78em; text-transform: uppercase; letter-spacing: .06em; }
    #assistant .assistantDivider::before, #assistant .assistantDivider::after { content: ""; flex: 1; height: 1px; background: currentcolor; }

    #assistant .assistantActions { display: flex; flex-wrap: wrap; gap: .4em; margin-top: .5em; }
    #assistant .assistantButton { padding: .25em .7em; border: 1px solid var(--header); border-radius: .35em; background: none; color: inherit; }
    #assistant .assistantButton:hover:not(:disabled) { background: rgb(0 0 0 / 5%); }
    #assistant .assistantPrimary { background: var(--header); color: #fff; }
    #assistant .assistantPrimary:hover:not(:disabled) { background: var(--header-active); }
    #assistant .assistantLink { padding: 0; border: 0; background: none; color: inherit; text-decoration: underline; }
    #assistant .assistantLink:hover:not(:disabled) { color: var(--header-active); }

    #assistant .assistantFeedback { display: flex; gap: .15em; margin-top: .2em; }
    #assistant .assistantFeedback button { padding: 0 .2em; border: 0; background: none; opacity: .3; font-size: .9em; }
    #assistant .assistantFeedback button:hover { opacity: .7; }
    #assistant .assistantFeedback button[aria-pressed="true"] { opacity: 1; }

    #assistant .assistantTyping { display: flex; align-items: center; gap: .28em; padding: .2em .1em; opacity: .7; }
    #assistant .assistantTyping i { width: .4em; height: .4em; border-radius: 50%; background: currentcolor; animation: assistantTyping 1.2s infinite ease-in-out; }
    #assistant .assistantTyping i:nth-child(2) { animation-delay: .15s; }
    #assistant .assistantTyping i:nth-child(3) { animation-delay: .3s; margin-right: .35em; }
    @keyframes assistantTyping { 0%, 60%, 100% { opacity: .25; transform: none; } 30% { opacity: .9; transform: translateY(-.18em); } }
    @media (prefers-reduced-motion: reduce) { #assistant .assistantTyping i { animation: none; } }

    #assistantContext { flex: none; align-self: flex-start; padding: .1em .55em; border-radius: 1em; background: rgb(0 0 0 / 6%); font-size: .9em; }
    #assistantNotice { flex: none; max-height: 30%; overflow-y: auto; padding: .45em .6em; border-left: 3px solid var(--header); border-radius: .25em; background: rgb(0 0 0 / 5%); font-size: .9em; }
    #assistantNotice p { margin: 0 0 .3em; }

    #assistantComposer { flex: none; display: flex; flex-wrap: wrap; align-items: flex-end; gap: .4em; padding: .3em .3em .3em .6em; border: 1px solid rgb(0 0 0 / 20%); border-radius: .6em; background: rgb(255 255 255 / 70%); }
    #assistantComposer:focus-within { border-color: var(--header); }
    #assistantQuestion { flex: 1; min-width: 0; height: 1.7em; max-height: 108px; padding: .2em 0; border: 0; outline: none; background: none; resize: none; font: inherit; line-height: 1.4; }
    #assistantAsk { flex: none; display: flex; align-items: center; justify-content: center; width: 1.9em; height: 1.9em; padding: 0; border: 0; border-radius: .45em; background: var(--header); color: #fff; }
    #assistantAsk::before { margin: 0; }
    #assistantAsk:hover { background: var(--header-active); }
    #assistantQuestion:placeholder-shown + #assistantAsk:not(.busy) { opacity: .45; }
    #assistantAttachments { flex-basis: 100%; display: flex; flex-wrap: wrap; gap: .4em; padding-top: .3em; }
    #assistantAttachments:not([hidden]) ~ #assistantAsk:not(.busy) { opacity: 1; }
    #assistant .assistantAttachment { position: relative; }
    #assistant .assistantAttachment img { display: block; max-width: 6em; height: 3.2em; object-fit: cover; border-radius: .3em; }
    #assistant .assistantAttachment button { position: absolute; top: -.4em; right: -.4em; width: 1.4em; height: 1.4em; padding: 0; border: 0; border-radius: 50%; background: rgb(0 0 0 / 65%); color: #fff; font-size: .8em; line-height: 1; }

    #assistant .assistantFooter { flex: none; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: .2em .8em; padding-top: .4em; border-top: 1px solid rgb(0 0 0 / 10%); font-size: .9em; }
    #assistant .assistantFooter > span { display: flex; flex-wrap: wrap; align-items: center; gap: .2em .7em; }
    #assistant .assistantFooter a { color: inherit; }
    #assistantTier { padding: 0 .5em; border-radius: 1em; background: var(--header); color: #fff; }

    #assistant .assistantViewHeader { display: flex; justify-content: space-between; align-items: center; padding-bottom: .45em; border-bottom: 1px solid rgb(0 0 0 / 15%); }
    #assistant .assistantChatRow { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: .1em .6em; padding: .45em .3em; border-bottom: 1px solid rgb(0 0 0 / 8%); }
    #assistant .assistantChatRow:hover, #assistant .assistantChatRow.current { background: rgb(0 0 0 / 4%); }
    #assistant .assistantChatRow.current .assistantChatTitle { font-weight: bold; }
    #assistant .assistantChatTitle { overflow: hidden; padding: 0; border: 0; background: none; color: inherit; text-align: left; text-overflow: ellipsis; white-space: nowrap; }
    #assistant .assistantChatRow :is(time, small) { font-size: .9em; opacity: .65; }
    #assistant .assistantChatRow small { grid-column: 1 / -1; }
    #assistant .assistantDelete { padding: 0 .2em; border: 0; background: none; opacity: .4; }
    #assistant .assistantDelete:is(:hover, :focus-visible) { opacity: 1; }
    #assistant .assistantEmpty { padding: 1em 0; opacity: .65; }

    #assistantKey h3 { margin: 0 0 .4em; font-size: 1.1em; }
    #assistantKey p { margin: 0 0 .5em; }
    #assistantKey .assistantFields { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: .45em .6em; margin: .8em 0 .4em; }
    #assistantKey .assistantFields :is(input, select) { width: 100%; box-sizing: border-box; }
    #assistantKey .assistantFields a { grid-column: 2; justify-self: start; color: inherit; font-size: .9em; }
    #assistantLocalHint { font-size: .9em; opacity: .8; }
    #assistantDiscoveryError { min-height: 1.2em; color: #a3262e; font-size: .9em; overflow-wrap: anywhere; }
    #assistant .assistantSheetActions { display: flex; justify-content: flex-end; gap: .5em; margin-top: .4em; }
  </style>`;function Ra(){let e=$e.map(e=>`<option value="${e.id}">${e.label}</option>`).join(``),t=`<div id="${F}" class="dialog stable">
    ${La}
    <div id="assistantTranscript" role="log" aria-live="polite" aria-label="${i(`Assistant chat`)}"></div>

    <div id="assistantChats" hidden>
      <div class="assistantViewHeader">
        <strong>${i(`Chats`)}</strong>
        <button type="button" class="assistantLink" data-action="new-chat">+ ${i(`New chat`)}</button>
      </div>
      <div id="assistantChatList"></div>
    </div>

    <form id="assistantKey" hidden>
      <h3>${i(`Connect your AI key`)}</h3>
      <p>${i(`Unlimited questions, and I can read and edit this map. Your key stays in this browser and goes only to the provider. I run scripts in this page to read your map. Only use me on maps from sources you trust.`)}</p>
      <div class="assistantFields">
        <label for="assistantProvider">${i(`Provider`)}</label>
        <select id="assistantProvider">${e}</select>
        <label id="assistantModelLabel" for="assistantModel">${i(`Model`)}</label>
        <input id="assistantModel" list="assistantModels" autocomplete="off" spellcheck="false" />
        <label for="assistantApiKey" data-remote>${i(`API key`)}</label>
        <input id="assistantApiKey" type="password" autocomplete="off" data-remote />
        <a id="assistantKeyLink" target="_blank" rel="noopener noreferrer" data-remote>${i(`Where to get one`)}</a>
        <label for="assistantLocalUrl" data-local>${i(`Server`)}</label>
        <input id="assistantLocalUrl" autocomplete="off" spellcheck="false" data-local />
      </div>
      <datalist id="assistantModels"></datalist>
      <p id="assistantLocalHint" data-local>ⓘ ${i(`Local models need no key. Point to the server and enter the model name. Set the server's context window to at least 8k tokens (Ollama's num_ctx).`)}</p>
      <div id="assistantDiscoveryError" role="status"></div>
      <div class="assistantSheetActions">
        <button type="button" class="assistantButton" data-action="close-key">${i(`Cancel`)}</button>
        <button type="button" id="assistantDisconnect" class="assistantButton" data-action="disconnect">${i(`Disconnect`)}</button>
        <button type="submit" class="assistantButton assistantPrimary">${i(`Connect`)}</button>
      </div>
    </form>

    <div id="assistantContext" hidden></div>

    <div id="assistantNotice" role="status" hidden>
      <div id="assistantNoticeText"></div>
      <div id="assistantNoticeActions" class="assistantActions">
        <button type="button" id="assistantRetry" class="assistantButton" data-action="retry">${i(`Retry`)}</button>
        <button type="button" id="assistantNoticeSignIn" class="assistantButton" data-action="sign-in">${i(`Sign in`)}</button>
        <button type="button" id="assistantNoticeKey" class="assistantButton assistantPrimary" data-action="key"></button>
      </div>
      <div id="assistantLong">
        <p>${i(`This chat is getting long — each question re-sends all of it.`)}</p>
        <button type="button" class="assistantButton" data-action="new-chat">${i(`Start a new chat`)}</button>
      </div>
    </div>

    <div id="assistantComposer">
      <div id="assistantAttachments" hidden></div>
      <textarea id="assistantQuestion" rows="1" maxlength="${ya}" aria-label="${i(`Your question`)}" placeholder="${i(`Ask a question…`)}"></textarea>
      <button id="assistantAsk" type="button"></button>
    </div>

    <div class="assistantFooter">
      <span>
        <a href="${Sa}" target="_blank" rel="noopener noreferrer">Discord</a>
        <a href="${Ca}" target="_blank" rel="noopener noreferrer">Patreon</a>
        <a href="${xa}" target="_blank" rel="noopener noreferrer">${i(`Policy`)}</a>
      </span>
      <span id="assistantAccount">
        <span id="assistantTier"></span>
        <span id="assistantStatus"></span>
        <button type="button" id="assistantSignIn" class="assistantLink" data-action="sign-in">${i(`Sign in`)}</button>
        <button type="button" id="assistantSignOut" class="assistantLink" data-action="sign-out">${i(`Sign out`)}</button>
        <button type="button" id="assistantUseKey" class="assistantLink" data-action="key"></button>
      </span>
    </div>
  </div>`;g(`dialogs`).insertAdjacentHTML(`beforeend`,t),K(F).addEventListener(`click`,Ba),K(`assistantAsk`).addEventListener(`click`,()=>R?vo():void Q());let n=K(`assistantQuestion`);n.addEventListener(`keydown`,e=>{e.key!==`Enter`||e.shiftKey||e.isComposing||(e.preventDefault(),R||Q())}),n.addEventListener(`input`,()=>Qa(n)),n.addEventListener(`paste`,e=>{let t=Array.from(e.clipboardData?.files??[]).filter(e=>e.type.startsWith(`image/`));t.length&&(e.preventDefault(),ho(t))}),K(`assistantKey`).addEventListener(`submit`,e=>{e.preventDefault(),lo()}),pr.wire()}function za(){let e=K(F).closest(`.ui-dialog`)?.querySelector(`.ui-dialog-titlebar`);if(!e)return;let t=document.createElement(`button`);t.id=`assistantOpenChats`,t.type=`button`,t.className=`icon-list-bullet`,t.dataset.tip=i(`Chats`),t.setAttribute(`aria-label`,`Chats`),t.addEventListener(`click`,()=>{!R&&B&&J(L===`chats`?`chat`:`chats`)}),e.insertBefore(t,e.querySelector(`.ui-dialog-titlebar-reset, .ui-dialog-titlebar-collapse`)),e.querySelector(`.ui-dialog-titlebar-collapse`)?.setAttribute(`aria-label`,i(`Minimize or restore Assistant`)),e.querySelector(`.ui-dialog-titlebar-close`)?.setAttribute(`aria-label`,`Close Assistant`)}function Ba(e){let t=e.target.closest(`[data-action]`);if(!t||t.disabled)return;let{action:n,id:r,index:i,rating:a}=t.dataset;n===`new-chat`?q():n===`key`?co():n===`close-key`?J(`chat`):n===`disconnect`?uo():n===`sign-in`?gt():n===`sign-out`?no():n===`retry`?z?.retry?.():n===`open-chat`&&r?Ua(r):n===`delete-chat`&&r?Wa(r):n===`apply`||n===`undo`||n===`redo`||n===`discard`?ro(n,Number(i)):n===`rate`?so(Number(i),a):n===`entity`&&r?P.openEntity(r):n===`command`&&r?P.runCommand(r):n===`mark`?io(Number(i)):n===`choose`?oo(Number(i),Number(t.dataset.choice)):n===`inset`?ao(Number(i)):n===`detach`&&go(Number(i))}async function Va(){try{await Dt()}catch{z={text:i(`Chats could not be loaded.`),retry:()=>void Va()},Y();return}let e=U();Da=M.id(),I=kt(),(!W(I)||I?.tier!==e)&&(I=e?jt(e,M.id(),M.name()):void 0),Oa=e,B=!0,z=null,Y(),$a(),dt()&&e!==`key`&&to()}function Ha(){let e=U();I=e?jt(e,M.id(),M.name()):void 0,Oa=e,Za(),P.clearMarks();let t=K(`assistantQuestion`);t.value=``,Qa(t),J(`chat`)}function q(){!R&&B&&Ha()}function Ua(e){I=At(e),Za(),P.clearMarks(),J(`chat`)}function Wa(e){Mt(e),I?.id===e&&(I=void 0,P.clearMarks()),qa()}function J(e){L===`key`&&e!==`key`&&pr.cancelDiscovery(),L=e,Y()}function Y(e=!1){let t=!W(I);K(`assistantTranscript`).hidden=L!==`chat`,K(`assistantChats`).hidden=L!==`chats`,K(`assistantKey`).hidden=L!==`key`,K(`assistantComposer`).hidden=L!==`chat`||t,eo();let n=p(`assistantOpenChats`);n&&(n.disabled=R||!B);let r=K(`assistantAsk`);r.className=R?`busy icon-cancel`:`icon-right-big`,r.setAttribute(`aria-label`,R?`Stop`:`Send`),r.title=R?`Stop`:`Send (Enter)`,L===`chat`&&X(e),L===`chats`&&qa(),Xa(),Ya()}function X(e=!1){if(!G){Ma=!0;return}let t=K(`assistantTranscript`),r=t.scrollTop,a=I?.items??[],o=U(),s=I?.mapId===M.id(),c=W(I),l=!R&&c,u=a.length?``:Ga(o);a.forEach((e,t)=>{e!==z?.item&&(u+=Ka(e,{index:t,live:s,canAsk:l}))}),B&&!c&&(I||o)&&(u+=`<div class="assistantItem assistantNoticeItem">${i(`Start a new chat to continue`)}
      <div class="assistantActions"><button type="button" class="assistantButton" data-action="new-chat">${i(`New chat`)}</button></div>
    </div>`),R&&(u+=`<div class="assistantTyping"><i></i><i></i><i></i>${n(ka)}…</div>`),t.innerHTML=u,t.scrollTop=e?r:t.scrollHeight}function Ga(e){let t=V?n(V):``,r=e?e===`key`?[i(`Hi! Ask about the Fantasy Map Generator or this map. I can read and propose changes to your map.`),t?i(`I can work on the note “{{note}}”.`,{note:t}):``]:[i(`Hi! Ask anything about the Fantasy Map Generator.`),t?i(`Connect your own AI key and I can write the note “{{note}}”, and read, answer questions about and edit this map, with no daily limit.`,{note:t}):i(`Connect your own AI key and I can read this map, answer questions about it and edit it, with no daily limit.`)]:[i(`The free Assistant runs only on the official site. Connect your own AI key or a local model to ask questions here.`)],a=e===`key`?``:`<div class="assistantActions"><button type="button" class="assistantButton assistantPrimary" data-action="key">🔑 ${i(`Connect your AI key`)}</button></div>`;return`<div class="assistantItem assistantWelcome">${r.filter(Boolean).map(e=>`<p>${e}</p>`).join(``)}${a}</div>`}function Ka(e,t){let{index:r,live:a}=t;if(e.kind===`question`)return`<div class="assistantItem assistantQuestion">${e.images?.length?`<div class="assistantQuestionImages">${e.images.map(e=>`<img src="${n(e)}" alt="${i(`Attached image`)}" />`).join(``)}</div>`:``}${n(e.text)}</div>`;if(e.kind===`answer`){let t=e.ratingId==null?``:`<div class="assistantFeedback">${[`up`,`down`].map(t=>`<button type="button" data-action="rate" data-index="${r}" data-rating="${t}" aria-pressed="${e.rating===t}" aria-label="${t===`up`?`Good answer`:`Bad answer`}">${t===`up`?`👍`:`👎`}</button>`).join(``)}</div>`;return`<div class="assistantItem assistantAnswer">${P.answer(e.text,a)}${t}</div>`}if(e.kind===`step`){let{result:t}=e,r=t?t.ok?i(`Read the map`):i(`Map read failed`):i(`Reading the map`),a=t?t.ok?[t.value,...t.logs].join(`
`):t.error?.message:``;return`<details class="assistantItem assistantStep${t&&!t.ok?` failed`:``}">
      <summary>${r}${t?` · ${t.ms} ms`:``}</summary>
      <pre>${n(e.code)}</pre>${a?`<pre>${n(a)}</pre>`:``}
    </details>`}return e.kind===`proposal`?Qr.html(e.proposal,r,M.id()):e.kind===`divider`?`<div class="assistantDivider">${i(`New memory`)}</div>`:e.kind===`widget`?P.html(e.widget,t):`<div class="assistantItem assistantNoticeItem">${Yn(e.text)}</div>`}function qa(){let e=Ot();K(`assistantChatList`).innerHTML=e.length?e.map(Ja).join(``):`<div class="assistantEmpty">${i(`No chats yet.`)}</div>`}function Ja(e){let t=Aa(e),r=[n(e.mapName)+(e.mapId===M.id()?``:` (other map)`),e.tier===`key`?`🔑`:``,t?`${y(t)} tokens`:``].filter(Boolean).join(` · `),a=n(e.title),o=new Date(e.updated);return`<div class="assistantChatRow${e===I?` current`:``}">
    <button type="button" class="assistantChatTitle" data-action="open-chat" data-id="${e.id}" title="${a}">${a}</button>
    <time datetime="${o.toISOString()}" title="${o.toLocaleString()}">${yo(e.updated)}</time>
    <button type="button" class="assistantDelete icon-trash" data-action="delete-chat" data-id="${e.id}" aria-label="${i(`Delete chat {{- title}}`,{title:a})}"></button>
    <small>${r}</small>
  </div>`}function Ya(){let e=U(),t=Ye();K(`assistantTier`).hidden=e!==`guest`&&e!==`member`,K(`assistantTier`).textContent=e===`member`?`Member`:`Guest`,K(`assistantStatus`).textContent=e===`key`?`${t.provider===`local`?`Local`:`🔑`} ${t.model} · ${y(Aa(I))} tokens`:e&&Ta?bo(Ta):``,K(`assistantSignIn`).hidden=e!==`guest`,K(`assistantSignOut`).hidden=e!==`member`,K(`assistantUseKey`).textContent=e===`key`?`Key`:`Use key`;for(let e of K(`assistantAccount`).querySelectorAll(`button`))e.disabled=R||!B}function Xa(){let e=!!(I&&It(I)),t=!!z?.item,n=U();K(`assistantNotice`).hidden=L!==`chat`||!z&&!e,K(`assistantNoticeText`).hidden=!z,K(`assistantNoticeText`).innerHTML=z?Yn(z.text):``,K(`assistantRetry`).hidden=!z?.retry,K(`assistantNoticeSignIn`).hidden=!t||n!==`guest`,K(`assistantNoticeKey`).hidden=!t,K(`assistantNoticeKey`).textContent=n===`key`?`Key`:`🔑 ${i(`Connect your AI key`)}`,K(`assistantNoticeActions`).hidden=!z?.retry&&!t,K(`assistantLong`).hidden=!e;for(let e of K(`assistantNotice`).querySelectorAll(`button`))e.disabled=R}function Z(e){z=e,Xa()}function Za(){z=null}function Qa(e){e.style.height=``,e.value&&(e.style.height=`${e.scrollHeight}px`)}async function $a(){let e=await x.NotesEditor.current();V=e?e.name||e.id:null,eo(),L===`chat`&&!I?.items.length&&X()}function eo(){K(`assistantContext`).textContent=V?`Note: ${V}`:``,K(`assistantContext`).hidden=L!==`chat`||!V}async function to(){if(dt()&&U()!==`key`){try{Ta=await ht()}catch(e){Ta=e instanceof w&&e.code===`unauthorized`?await ht().catch(()=>null):null}B&&Oa!==U()&&q(),Ya()}}async function no(){await _t(),q(),to()}function ro(e,n){let r=I,a=r?.items[n];if(r&&a?.kind===`proposal`){try{e===`discard`?k.discard(a.proposal):k.run(e,a.proposal,M.id())||Z({text:i(e===`undo`?`The map changed since; Undo is unavailable.`:`The map changed since; Apply is unavailable.`)}),Pt(r)}catch(e){Z({text:t(e)})}I===r&&L===`chat`&&(X(),$a())}}function io(e){let t=I?.items[e];t?.kind===`widget`&&t.widget.type===`entities`&&(P.toggleMarks(t.widget),X(!0))}function ao(e){let t=I?.items[e];t?.kind===`widget`&&t.widget.type===`inset`&&P.revealInset(t.widget)}async function oo(e,t){let n=I,r=n?.items[e];if(!n||r?.kind!==`widget`||r.widget.type!==`choices`||r.widget.picked!==void 0)return;let{widget:i}=r,a=i.choices[t];if(!a)return;if(!a.operations){if(R||!W(n))return;i.picked=t,K(`assistantQuestion`).value=a.label,Q();return}if(await k.prepare(a.operations),i.picked!==void 0)return;let o=n.items.filter(e=>e.kind===`proposal`).length,s=k.propose(a.label,a.operations,o+1,M.id());typeof s==`string`?Z({text:s}):(i.picked=t,Nt(n,{kind:`proposal`,proposal:s}),X())}async function so(e,t){let n=I,r=n?.items[e];if(!n||r?.kind!==`answer`||r.ratingId==null||r.rating===t)return;let i=e=>{r.rating=e,Pt(n),I===n&&L===`chat`&&X()},a=r.rating;i(t);try{await mt(r.ratingId,t)}catch(e){i(a),e instanceof w&&e.code===`unauthorized`&&to()}}function co(){R||(J(`key`),pr.fill())}function lo(){let e=Qe();pr.save()&&(e?J(`chat`):q())}function uo(){et(),q(),to()}async function Q(){if(R||!W(I))return;let e=K(`assistantQuestion`),n=H,r=xo(e.value)??(n.length&&!e.value.trim()?``:null);if(r===null)return;if(n.length&&I.tier!==`key`)return Z({text:mo});e.value=``,Qa(e),H=[],_o(),Za(),R=!0,ka=`Thinking`;let i=new AbortController;wa=i;let a=I,o=a.items.length,s=()=>I===a,c=e=>{Nt(a,e),s()&&(e.kind===`notice`&&Z({text:e.text,item:e}),e.kind===`answer`&&z&&(Za(),Xa()),L===`chat`&&X())},l=e=>{ka=e,s()&&L===`chat`&&X()};Y();try{a.tier===`key`?await In(a,r,c,i.signal,{tools:M.tools(a),context:()=>M.context(a),onStatus:l,images:n}):await vt(a,r,c,i.signal)}catch(e){if(!i.signal.aborted){let i={kind:`notice`,text:t(e)};Nt(a,i),I===a&&Z({text:i.text,item:i,retry:()=>po(a,r,n,o)})}}finally{R=!1,wa=null,Pt(a),Y(),G&&K(`assistantQuestion`).focus(),to()}}async function fo(e){Pa(),await Ea,W(I)?L!==`chat`&&J(`chat`):Ha();let t=K(`assistantQuestion`),n=t.value;if(R)n.trim()||(t.value=e),Qa(t);else{t.value=e;let r=Q();t.value=n,Qa(t),await r}}function po(e,t,n,r){if(R||I!==e)return;let i=e.items.slice(r);i.every(e=>e.kind===`question`||e.kind===`notice`)?e.items.splice(r):i.at(-1)?.kind===`notice`&&e.items.pop(),K(`assistantQuestion`).value=t,H=n,Q()}var mo=i(`Images need your own AI key with a vision model: the free Assistant reads text only.`);async function ho(e){if(U()!==`key`)return Z({text:mo});let n=()=>Z({text:i(`Image limit per question: {{max}}`,{max:ba})});e.length>ba-H.length&&n();for(let r of e.slice(0,Math.max(ba-H.length,0)))try{let e=await ar.read(r);H.length<ba?H.push(e):n()}catch(e){Z({text:t(e)})}_o()}function go(e){H.splice(e,1),_o(),K(`assistantQuestion`).focus()}function _o(){let e=K(`assistantAttachments`);e.hidden=!H.length,e.innerHTML=H.map((e,t)=>`<span class="assistantAttachment"><img src="${n(e)}" alt="${i(`Attached image {{number}}`,{number:t+1})}" /><button type="button" data-action="detach" data-index="${t}" aria-label="${i(`Remove image {{number}}`,{number:t+1})}">✕</button></span>`).join(``)}function vo(){wa?.abort()}function yo(e){let t=Math.round((Date.now()-e)/6e4);if(t<1)return`just now`;if(t<60)return`${t} min ago`;let n=Math.round(t/60);if(n<24)return`${n} h ago`;let r=Math.round(n/24);return r===1?`yesterday`:r<30?`${r} days ago`:new Date(e).toLocaleDateString()}window.addEventListener(`map:generated`,()=>{B&&Da!==M.id()&&(Da=M.id(),vo(),Ha(),$a())}),window.addEventListener(`notes:context-changed`,()=>{ja()&&$a()});var bo=e=>e.remaining?`${e.remaining} question${e.remaining===1?``:`s`} left today`:i(`No questions left today`);function xo(e){let t=e.trim();return t&&t.length<=ya?t:null}var So={open:Pa,toggle:Na,ask:fo};export{So as Assistant};