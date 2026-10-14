# District Heat Flow Card

A Home Assistant card that visualizes temperatures, flow rates, and thermal power
in a district heating system with a directly heated hot water tank and a secondary
heating circuit connected through a heat exchanger.

![District Heat Flow Card](assets/preview.png)

## Installation

1. In HACS, open **Custom repositories**.
2. Add `https://github.com/schoppfe/ha-district-heat-flow-card` as a **Dashboard** repository.
3. Download **District Heat Flow Card** and reload the browser.
4. Add the card to your dashboard.

If your dashboard resources are managed in YAML, add:

```yaml
- url: /hacsfiles/ha-district-heat-flow-card/ha-district-heat-flow-card.js
  type: module
```

## Configuration

Use the visual editor to select your temperature sensors, flow and power sensors,
and heating pump entity. Click a value or the pump to open its entity details.
The pump symbol rotates while the pump is running. Missing values appear as `–`.

<details>
<summary>YAML configuration</summary>

```yaml
type: custom:ha-district-heat-flow-card
title: Fernwärme
entities: {}
```

Assign your entity IDs under `entities`:

| Key | Value |
| --- | --- |
| `primary_supply_temperature` | District heating supply temperature |
| `primary_return_temperature` | Combined district heating return temperature |
| `primary_flow` | Total district heating flow |
| `primary_power` | Total heat power |
| `storage_temperature` | Hot water tank temperature |
| `dhw_primary_return_temperature` | Tank heating coil return temperature |
| `heating_primary_return_temperature` | Heat exchanger primary return temperature |
| `heating_secondary_supply_temperature` | Heating circuit supply temperature |
| `heating_secondary_return_temperature` | Heating circuit return temperature |
| `heating_pump` | Heating pump on/off state |
| `heating_pump_power` | Electrical pump power |
| `outdoor_temperature` | Outdoor temperature |
| `dhw_primary_flow` | Tank heating coil flow |
| `heating_primary_flow` | Heat exchanger primary flow |
| `dhw_power` | Heat power supplied to the tank |
| `heating_power` | Heat power supplied to the heating circuit |

The pump state takes precedence over electrical power. When no on/off state is
available, `pump_power_threshold` sets the running threshold in watts (default: 0.5).

</details>

## Notes

- The layout represents two parallel district heating branches: the tank heating
  coil and the primary side of the heating heat exchanger. They share one supply
  temperature sensor. A circulation pump drives flow through the secondary heating
  circuit.
- Branch flows and heat powers must be provided by entities; the card does not
  calculate them. Displayed units are taken from the sensors without conversion.
- The outdoor temperature field accepts a numeric sensor.
- The schematic has a minimum width of 780 px and scrolls horizontally in narrower cards.

## License

[MIT](LICENSE)
