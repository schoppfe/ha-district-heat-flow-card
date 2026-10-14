import { translate } from './translations.js';

export const EDITOR_GROUPS = [["districtHeating", ["primary_supply_temperature", "primary_return_temperature", "primary_flow", "primary_power"]], ["hotWaterTank", ["storage_temperature", "dhw_primary_return_temperature", "dhw_primary_flow", "dhw_power"]], ["heating", ["heating_primary_return_temperature", "heating_secondary_supply_temperature", "heating_secondary_return_temperature", "heating_primary_flow", "heating_power"]], ["pumpEnvironment", ["heating_pump", "heating_pump_power", "outdoor_temperature"]]];

export class DistrictHeatFlowCardEditor extends HTMLElement {
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
