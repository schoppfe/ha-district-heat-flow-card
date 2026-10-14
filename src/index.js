import { DistrictHeatFlowCard } from './card.js';
import { DistrictHeatFlowCardEditor } from './editor.js';
import { version } from '../package.json';

if (!customElements.get('ha-district-heat-flow-card')) {
  customElements.define('ha-district-heat-flow-card', DistrictHeatFlowCard);
}
if (!customElements.get('ha-district-heat-flow-card-editor')) {
  customElements.define('ha-district-heat-flow-card-editor', DistrictHeatFlowCardEditor);
}

window.customCards = window.customCards || [];
if (!window.customCards.some(card => card.type === 'ha-district-heat-flow-card')) {
  window.customCards.push({
    type: 'ha-district-heat-flow-card',
    name: 'District Heat Flow Card',
    description: 'District heating, hot water storage and heating circuit visualization',
    preview: true,
  });
}
console.info(`DISTRICT-HEAT-FLOW-CARD v${version}`);
