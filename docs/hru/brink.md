---
sidebar_position: 3
---

import HRUIntegrationParams from '@site/src/components/HRUIntegrationParams';

# Brink Renovent

Připojení rekuperačních jednotek Renovent od společnosti [Brink](https://www.brinkclimatesystems.com/) k Home Assistantu pomocí aplikace LUFTaTOR.

:::warning[Experimentální podpora]

Podpora této jednotky je zatím experimentální, čeká se na otestování reálné jednotce

:::

## Parametry integrace

<HRUIntegrationParams interf="ModbusTCP" power="m³/h" temperature="teplota bypassu 15 - 35 °C"></HRUIntegrationParams>

Jednotka dále poskytuje vnitřní, venkovní a přívodní teplotu, vnitřní relativní vlhkost, průtok sání, nativní režim větrání a informaci o nutnosti výměny filtrů.

## Připojení jednotky

Jednotky Brink Renovent je možné připojit pomocí modulu **Brink Home eModule (UWA2)**, který poskytuje rozhraní Modbus TCP. Modul zapojte pomocí síťového kabelu do Vašeho routeru.

## Nastavení v aplikaci LUFTaTOR

- Zvolte typ jednotky `Brink Renovent (UWA2)`
- Zadejte IP adresu jednotky a port 502
