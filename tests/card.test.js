import test from 'node:test';
import assert from 'node:assert/strict';
import { DistrictHeatFlowCard } from '../src/card.js';

customElements.define(
  'ha-district-heat-flow-card',
  DistrictHeatFlowCard,
);

test('Card rejects configuration without entities', () => {
  const card = document.createElement('ha-district-heat-flow-card');

  assert.throws(() => {
    card.setConfig({});
  }, Error);
});

test('Card accepts configuration with an empty entities mapping', () => {
  const card = document.createElement('ha-district-heat-flow-card');

  assert.doesNotThrow(() => {
    card.setConfig({ entities: {} });
  });
});