const TRANSLATIONS = {
  "en": {
    "defaultTitle": "District heating",
    "general": "General",
    "districtHeating": "District heating",
    "hotWaterTank": "Hot water tank",
    "heating": "Heating",
    "pumpEnvironment": "Pump and surroundings",
    "title": "Card title",
    "outdoor": "Outdoor",
    "hotWater": "Hot water",
    "heatExchanger": "Heat exchanger",
    "on": "On",
    "off": "Off",
    "unknown": "unknown",
    "invalidEntities": "entities must be an object mapping fields to entity IDs.",
    "invalidEntityId": "Entity IDs must be strings.",
    "diagramDescription": "District heating connection with a parallel tank heating coil and heating heat exchanger",
    "editorHelp": "Assign an entity to each display. Empty fields show “–”. Branch flows and heat powers are optional and are not calculated by the card.",
    "titleHelp": "Leave empty to use the default title for the selected language.",
    "field_primary_supply_temperature": "Supply temperature",
    "field_primary_return_temperature": "Combined return temperature",
    "field_primary_flow": "Total flow rate",
    "field_primary_power": "Total thermal power",
    "field_storage_temperature": "Storage temperature",
    "field_dhw_primary_return_temperature": "Heating coil return temperature",
    "field_dhw_primary_flow": "Heating coil flow rate",
    "field_dhw_power": "Heating coil thermal power",
    "field_heating_primary_return_temperature": "Primary return temperature",
    "field_heating_secondary_supply_temperature": "Secondary supply temperature",
    "field_heating_secondary_return_temperature": "Secondary return temperature",
    "field_heating_primary_flow": "Primary flow rate",
    "field_heating_power": "Primary thermal power",
    "field_heating_pump": "Heating pump",
    "field_heating_pump_power": "Electrical pump power",
    "field_outdoor_temperature": "Outdoor temperature",
    "label_primary_power": "Total thermal power",
    "label_primary_flow": "Total district heating flow rate",
    "label_outdoor_temperature": "Outdoor temperature",
    "label_heating_pump": "Heating pump",
    "label_heating_pump_power": "Electrical pump power",
    "label_primary_supply_temperature": "District heating supply temperature",
    "label_primary_return_temperature": "Combined district heating return temperature",
    "label_storage_temperature": "Storage temperature",
    "label_storage_supply": "Heating coil supply – common district heating supply",
    "label_heating_supply": "Primary heating supply – common district heating supply",
    "label_heating_secondary_supply_temperature": "Secondary heating supply temperature",
    "label_dhw_primary_return_temperature": "Heating coil return temperature",
    "label_heating_primary_return_temperature": "Primary heating return temperature",
    "label_heating_secondary_return_temperature": "Secondary heating return temperature",
    "label_dhw_primary_flow": "Heating coil flow rate",
    "label_heating_primary_flow": "Primary heating flow rate",
    "label_dhw_power": "Heating coil thermal power",
    "label_heating_power": "Primary heating thermal power"
  },
  "de": {
    "defaultTitle": "Fernwärme",
    "general": "Allgemein",
    "districtHeating": "Fernwärme",
    "hotWaterTank": "Warmwasserspeicher",
    "heating": "Heizung",
    "pumpEnvironment": "Pumpe und Umgebung",
    "title": "Kartentitel",
    "outdoor": "Außen",
    "hotWater": "Warmwasser",
    "heatExchanger": "Wärmetauscher",
    "on": "Ein",
    "off": "Aus",
    "unknown": "unbekannt",
    "invalidEntities": "entities muss eine Zuordnung von Sensoren sein.",
    "invalidEntityId": "Entity-IDs müssen Zeichenketten sein.",
    "diagramDescription": "Fernwärmeanschluss mit parallel angeschlossenem Speicherregister und Heizungswärmetauscher",
    "editorHelp": "Ordne jedem Display eine Entität zu. Leere Felder zeigen „–“. Zweigvolumenströme und Wärmeleistungen sind optional und werden nicht von der Karte berechnet.",
    "titleHelp": "Leer lassen, um den Standardtitel der gewählten Sprache zu verwenden.",
    "field_primary_supply_temperature": "Vorlauf",
    "field_primary_return_temperature": "Gemeinsamer Rücklauf",
    "field_primary_flow": "Gesamtvolumenstrom",
    "field_primary_power": "Gesamtwärmeleistung",
    "field_storage_temperature": "Speichertemperatur",
    "field_dhw_primary_return_temperature": "Rücklauf Speicherregister",
    "field_dhw_primary_flow": "Volumenstrom Speicherregister",
    "field_dhw_power": "Wärmeleistung Speicherregister",
    "field_heating_primary_return_temperature": "Rücklauf primär",
    "field_heating_secondary_supply_temperature": "Vorlauf sekundär",
    "field_heating_secondary_return_temperature": "Rücklauf sekundär",
    "field_heating_primary_flow": "Volumenstrom primär",
    "field_heating_power": "Wärmeleistung primär",
    "field_heating_pump": "Heizungspumpe",
    "field_heating_pump_power": "Elektrische Pumpenleistung",
    "field_outdoor_temperature": "Außentemperatur",
    "label_primary_power": "Gesamte Wärmeleistung",
    "label_primary_flow": "Gesamter Fernwärmevolumenstrom",
    "label_outdoor_temperature": "Außentemperatur",
    "label_heating_pump": "Heizungspumpe",
    "label_heating_pump_power": "Elektrische Pumpenleistung",
    "label_primary_supply_temperature": "Fernwärme-Vorlauf",
    "label_primary_return_temperature": "Gemischter Fernwärme-Rücklauf",
    "label_storage_temperature": "Speichertemperatur",
    "label_storage_supply": "Vorlauf Speicherregister – gemeinsamer Fernwärme-Vorlauf",
    "label_heating_supply": "Vorlauf Heizung primär – gemeinsamer Fernwärme-Vorlauf",
    "label_heating_secondary_supply_temperature": "Vorlauf Heizung sekundär",
    "label_dhw_primary_return_temperature": "Rücklauf Speicherregister",
    "label_heating_primary_return_temperature": "Rücklauf Heizung primär",
    "label_heating_secondary_return_temperature": "Rücklauf Heizung sekundär",
    "label_dhw_primary_flow": "Volumenstrom Speicherregister",
    "label_heating_primary_flow": "Volumenstrom Heizung primär",
    "label_dhw_power": "Wärmeleistung Speicherregister",
    "label_heating_power": "Wärmeleistung Heizung primär"
  }
};

function languageFromHass(hass) {
  const language = hass?.locale?.language || hass?.language || 'en';
  return String(language).toLowerCase().split(/[-_]/)[0] === 'de' ? 'de' : 'en';
}

function translate(hass, key) {
  return TRANSLATIONS[languageFromHass(hass)][key] ?? TRANSLATIONS.en[key] ?? key;
}

const EDITOR_GROUPS = [["districtHeating", ["primary_supply_temperature", "primary_return_temperature", "primary_flow", "primary_power"]], ["hotWaterTank", ["storage_temperature", "dhw_primary_return_temperature", "dhw_primary_flow", "dhw_power"]], ["heating", ["heating_primary_return_temperature", "heating_secondary_supply_temperature", "heating_secondary_return_temperature", "heating_primary_flow", "heating_power"]], ["pumpEnvironment", ["heating_pump", "heating_pump_power", "outdoor_temperature"]]];
/* District Heat Flow Card 0.5.1 — no dependencies, no service calls. */
class DistrictHeatFlowCard extends HTMLElement {
  constructor() { super(); this.attachShadow({mode: 'open'}); }
  setConfig(config) {
    if (!config || !config.entities || Array.isArray(config.entities) || typeof config.entities !== 'object') throw new Error(this._t('invalidEntities'));
    for (const value of Object.values(config.entities)) if (typeof value !== 'string') throw new Error(this._t('invalidEntityId'));
    this._config = {pump_power_threshold: 0.5, ...config};
    this._signature = null; this._render();
  }
  set hass(value) {
    this._hass = value;
    if (!this._config) return;
    const signature = JSON.stringify([value?.locale?.language || value?.language, Object.values(this._config.entities).map(id => [value?.states?.[id]?.state, value?.states?.[id]?.attributes?.unit_of_measurement])]);
    if (signature !== this._signature) { this._signature = signature; this._render(); }
  }
  getCardSize() { return 8; }
  getGridOptions() { return {columns: 'full'}; }
  static getStubConfig() {
    return {entities: Object.fromEntries(EDITOR_GROUPS.flatMap(([,fields])=>fields.map(key=>[key,''])))};
  }
  static async getConfigElement() {
    // Load HA's form components through a built-in editor when necessary.
    if (!customElements.get('ha-form') && window.loadCardHelpers) {
      const helpers = await window.loadCardHelpers();
      const card = await helpers.createCardElement({type:'entities',entities:[]});
      if (card.constructor.getConfigElement) await card.constructor.getConfigElement();
    }
    return document.createElement('ha-district-heat-flow-card-editor');
  }

  _t(key) { return translate(this._hass, key); }
  _escape(value) { return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  _state(key) { return this._hass?.states?.[this._config.entities[key]]; }
  _number(key) { const s = this._state(key)?.state; return s != null && s.trim() !== '' && Number.isFinite(Number(s)) ? Number(s) : null; }
  _pumpState() {
    const state = this._state('heating_pump')?.state;
    // An explicit switch state takes precedence over a delayed power reading.
    if (state === 'on') return 'on';
    if (state === 'off') return 'off';
    let power = this._number('heating_pump_power');
    if (power === null) return 'unknown';
    if (this._state('heating_pump_power')?.attributes?.unit_of_measurement === 'kW') power *= 1000;
    return power > this._config.pump_power_threshold ? 'on' : 'off';
  }
  _reading(key, fallback, precision) {
    const value = this._number(key);
    const unit = this._state(key)?.attributes?.unit_of_measurement || fallback;
    const digits = precision ?? ({'°C':1, '°F':1, 'kW':2, 'W':0, 'l/h':0, 'L/h':0, 'm³/h':3, 'm3/h':3}[unit] ?? 1);
    let formatted = '–';
    if (value !== null) {
      try { formatted = new Intl.NumberFormat(this._hass?.locale?.language || this._hass?.language || 'en', {minimumFractionDigits:digits, maximumFractionDigits:digits}).format(value); }
      catch { formatted = value.toFixed(digits); }
    }
    return {value: this._escape(formatted), unit: this._escape(unit)};
  }
  _attrs(key, label) {
    const id = this._config.entities[key];
    return id ? `data-entity="${this._escape(id)}" role="button" tabindex="0" aria-label="${this._escape(label)}"` : '';
  }
  _display(x,y,key,unit,label,width=138) {
    const r = this._reading(key,unit);
    return `<g class="display" ${this._attrs(key,label)}><title>${this._escape(label)}</title>
      <rect class="bezel" x="${x-width/2}" y="${y-24}" width="${width}" height="48" rx="7"/>
      <rect class="screen" x="${x-width/2+5}" y="${y-19}" width="${width-10}" height="38" rx="4"/>
      <text x="${x}" y="${y+8}" text-anchor="middle" class="reading">${r.value}<tspan class="unit" dx="5">${r.unit}</tspan></text></g>`;
  }
  _value(x,y,key,unit,label,anchor='start') {
    const r=this._reading(key,unit);
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" class="value" ${this._attrs(key,label)}><title>${this._escape(label)}</title>${r.value} ${r.unit}</text>`;
  }
  _render() {
    if (!this._config) return;
    const pump = this._pumpState();
    const pipe = (d, cold=false, thin=false) => `<path d="${d}" class="pipe ${cold?'cold':'hot'} ${thin?'thin':''}"/>`;
    this.shadowRoot.innerHTML = `<style>
      :host{display:block} ha-card{display:block;overflow:hidden;background:var(--ha-card-background,var(--card-background-color,#fff));color:var(--primary-text-color,#293c49)}
      .viewport{overflow-x:auto} svg{display:block;width:100%;height:auto;min-width:780px;font-family:var(--paper-font-body1_-_font-family,Arial,sans-serif)}
      text{fill:var(--primary-text-color,#293c49)} .title{font-size:28px;font-weight:600}.value{font-size:24px;font-weight:600}.label{font-size:18px;fill:var(--secondary-text-color,#7a8b97)}
      .pipe{fill:none;stroke-width:4;stroke-linecap:round;stroke-linejoin:round}.hot{stroke:#d47760}.cold{stroke:#6799b7}.thin{stroke-width:3}
      .component{fill:var(--card-background-color,#fafcfd);stroke:var(--divider-color,#b9c7d1);stroke-width:2}.separator{stroke:var(--divider-color,#c3cfd7);stroke-width:2;fill:none}
      .bezel{fill:var(--card-background-color,#fff);stroke:var(--divider-color,#cbd5dc);stroke-width:1.5}.screen{fill:var(--secondary-background-color,#f0f5f6)}
      .reading{font-size:24px;font-weight:600;font-variant-numeric:tabular-nums}.unit{font-size:15px;font-weight:400;fill:var(--secondary-text-color,#6d808c)}
      [data-entity]{cursor:pointer}[data-entity]:hover{filter:brightness(.9)}[data-entity]:focus-visible{outline:2px solid var(--primary-color,#1686ba);outline-offset:4px}
      .rotor{fill:#9eb8c8;transform-box:fill-box;transform-origin:center}.on .rotor{animation:rotate 3s linear infinite}.pump-ring{fill:var(--card-background-color,#fff);stroke:#d47760;stroke-width:2.5}
      .branch-value{font-size:17px;font-weight:400;fill:var(--secondary-text-color,#738894)} .pump-power{font-size:18px;font-weight:400;fill:var(--secondary-text-color,#738894)} .unknown-mark{font-size:20px;font-weight:600;fill:var(--secondary-text-color,#738894)}
      @keyframes rotate{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.on .rotor{animation:none}}
    </style><ha-card><div class="viewport"><svg xmlns="http://www.w3.org/2000/svg" viewBox="24 24 1552 780" aria-label="${this._escape(this._t('diagramDescription'))}">
      <text x="80" y="83" class="title">${this._escape(this._config.title || this._t('defaultTitle'))}</text>
      ${this._value(80,121,'primary_power','kW',this._t('label_primary_power'))}
      ${this._value(250,121,'primary_flow','l/h',this._t('label_primary_flow'))}
      <text x="1495" y="78" class="label" text-anchor="end">${this._t('outdoor')}</text>
      ${this._value(1495,115,'outdoor_temperature','°C',this._t('label_outdoor_temperature'),'end')}
      <path d="M80 151 H1520" class="separator"/>
      ${pipe('M80 220 H790 V370')}${pipe('M420 220 V330')}
      ${pipe('M790 510 V660 H80',true)}${pipe('M420 550 V660',true)}
      <circle cx="420" cy="220" r="5" fill="#d47760"/><circle cx="420" cy="660" r="5" fill="#6799b7"/>
      <rect x="335" y="330" width="170" height="220" rx="29" class="component"/>
      <path d="M350 347 Q420 333 490 347" class="separator"/>
      ${pipe('M420 330 V348 H352 V418 H459 Q481 418 481 432 Q481 446 459 446 H381 Q359 446 359 460 Q359 474 381 474 H459 Q481 474 481 488 Q481 502 459 502 H420 V550',false,true)}
      <rect x="745" y="370" width="310" height="140" rx="12" class="component"/>
      ${pipe('M790 370 V386 L773 400 L795 416 L773 432 L795 448 L773 464 L790 480 V510',false,true)}
      ${pipe('M1010 370 V386 L1027 400 L1005 416 L1027 432 L1005 448 L1027 464 L1010 480 V510',true,true)}
      ${[841,861,881,901,921,941,961].map(x=>`<path d="M${x+12} 392 L${x-9} 488" class="separator"/>`).join('')}
      ${pipe('M1010 370 V220 H1400 V375')}${pipe('M1400 505 V660 H1010 V510',true)}
      <rect x="1340" y="375" width="120" height="130" rx="9" class="component"/>
      ${[1357,1375,1393,1411,1429,1447].map(x=>`<path d="M${x} 392 V488" stroke="#b3c4d0" stroke-width="5" stroke-linecap="round"/>`).join('')}
      <g class="pump ${pump}" ${this._attrs('heating_pump',this._t('label_heating_pump'))}><title>${this._t('label_heating_pump')}: ${this._t(pump)}</title>
        <circle cx="1220" cy="220" r="27" class="pump-ring"/>
        <g class="rotor">${[0,90,180,270].map(a=>`<path d="M1220 215 C1204 199 1200 212 1203 222 Q1210 228 1220 220 Z" transform="rotate(${a} 1220 220)"/>`).join('')}</g>
        <circle cx="1220" cy="220" r="5" fill="#536977"/>
        ${pump==='unknown'?'<text x="1260" y="227" class="unknown-mark">?</text>':''}
      </g>
      ${this._value(1220,180,'heating_pump_power','W',this._t('label_heating_pump_power'),'middle').replace('class="value"','class="pump-power"')}
      ${this._display(175,220,'primary_supply_temperature','°C',this._t('label_primary_supply_temperature'))}
      ${this._display(175,660,'primary_return_temperature','°C',this._t('label_primary_return_temperature'))}
      ${this._display(420,382,'storage_temperature','°C',this._t('label_storage_temperature'))}
      ${this._display(420,285,'primary_supply_temperature','°C',this._t('label_storage_supply'))}
      ${this._display(790,285,'primary_supply_temperature','°C',this._t('label_heating_supply'))}
      ${this._display(1010,285,'heating_secondary_supply_temperature','°C',this._t('label_heating_secondary_supply_temperature'))}
      ${this._display(420,595,'dhw_primary_return_temperature','°C',this._t('label_dhw_primary_return_temperature'))}
      ${this._display(790,595,'heating_primary_return_temperature','°C',this._t('label_heating_primary_return_temperature'))}
      ${this._display(1010,595,'heating_secondary_return_temperature','°C',this._t('label_heating_secondary_return_temperature'))}
      ${this._value(505,322,'dhw_primary_flow','l/h',this._t('label_dhw_primary_flow')).replace('class="value"','class="branch-value"')}
      ${this._value(875,322,'heating_primary_flow','l/h',this._t('label_heating_primary_flow')).replace('class="value"','class="branch-value"')}
      <text x="420" y="717" class="label" text-anchor="middle">${this._t('hotWater')}</text>
      ${this._value(420,753,'dhw_power','kW',this._t('label_dhw_power'),'middle')}
      <text x="900" y="717" class="label" text-anchor="middle">${this._t('heatExchanger')}</text>
      ${this._value(900,753,'heating_power','kW',this._t('label_heating_power'),'middle')}
      <text x="1400" y="717" class="label" text-anchor="middle">${this._t('heating')}</text>
    </svg></div></ha-card>`;
    this.shadowRoot.querySelectorAll('[data-entity]').forEach(element => {
      const open = () => this.dispatchEvent(new CustomEvent('hass-more-info',{detail:{entityId:element.dataset.entity},bubbles:true,composed:true}));
      element.addEventListener('click',open);
      element.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();open();}});
    });
  }
}
if (!customElements.get('ha-district-heat-flow-card')) customElements.define('ha-district-heat-flow-card',DistrictHeatFlowCard);
window.customCards=window.customCards||[];
if (!window.customCards.some(card=>card.type==='ha-district-heat-flow-card')) window.customCards.push({type:'ha-district-heat-flow-card',name:'District Heat Flow Card',description:'District heating, hot water storage and heating circuit visualization',preview:true});
console.info('DISTRICT-HEAT-FLOW-CARD v0.5.1');

class DistrictHeatFlowCardEditor extends HTMLElement {
  constructor() { super(); this.attachShadow({mode:'open'}); this._forms=[]; }
  setConfig(config) {
    this._config={...config,entities:{...(config.entities||{})}};
    this._render();
  }
  set hass(value) { this._hass=value; this._render(); }
  _t(key) { return translate(this._hass, key); }
  _render() {
    if (!this._config || !this._hass) return;
    if (!this._forms.length) {
      this.shadowRoot.innerHTML=`<style>
        :host{display:block}section{margin:16px 0 24px}h3{font-size:16px;font-weight:500;margin:0 0 12px}
        p{color:var(--secondary-text-color);line-height:1.5;font-size:14px}
      </style><p>${this._t('editorHelp')}</p>`;
      this._help = this.shadowRoot.querySelector('p');
      this._addForm('general',[{name:'title',selector:{text:{}}}],false,{title:'title'});
      for (const [title,fields] of EDITOR_GROUPS) {
        const schema=fields.map(name=>({name,selector:{entity:{domain:name==='heating_pump'?['switch','input_boolean','binary_sensor','fan','sensor']:['sensor','input_number']}}}));
        this._addForm(title,schema,true,Object.fromEntries(fields.map(key=>[key,'field_'+key])));
      }
    }
    this._help.textContent = this._t('editorHelp');
    for (const {form,heading,title,labels,entityGroup,schema} of this._forms) {
      heading.textContent = this._t(title);
      form.computeLabel = field => this._t(labels[field.name] || field.name);
      form.computeHelper = field => field.name === 'title' ? this._t('titleHelp') : undefined;
      form.hass=this._hass;
      const source=entityGroup?this._config.entities:this._config;
      form.data=Object.fromEntries(schema.map(({name})=>[name,source[name]||'']));
    }
  }
  _addForm(title,schema,entityGroup,labels) {
    const section=document.createElement('section');
    const heading=document.createElement('h3');heading.textContent=this._t(title);
    const form=document.createElement('ha-form');
    form.schema=schema;form.computeLabel=field=>this._t(labels[field.name]||field.name);
    form.addEventListener('value-changed',event=>{
      event.stopPropagation();
      const data=event.detail?.value;
      if (!data || !this._config) return;
      const updated={...this._config,entities:{...this._config.entities}};
      const target=entityGroup?updated.entities:updated;
      // Keep all fields in the template; clearing a selector stores an empty string.
      // Preserve YAML-only settings and other groups without mutating HA's object.
      for (const {name} of schema) if (Object.prototype.hasOwnProperty.call(data,name)) target[name]=data[name]??'';
      this._config=updated;
      this.dispatchEvent(new CustomEvent('config-changed',{detail:{config:updated},bubbles:true,composed:true}));
    });
    section.append(heading,form);this.shadowRoot.append(section);
    this._forms.push({form,heading,title,labels,entityGroup,schema});
  }
}
if (!customElements.get('ha-district-heat-flow-card-editor')) customElements.define('ha-district-heat-flow-card-editor',DistrictHeatFlowCardEditor);
