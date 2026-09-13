---
sidebar_position: 4
---

import HRUIntegrationParams from '@site/src/components/HRUIntegrationParams';

# Komfovent Domekt C6

Připojení rekuperačních jednotek Domekt s řízením C6 od společnosti [Komfovent](https://www.komfovent.com/) k Home Assistantu pomocí aplikace LUFTaTOR.

:::warning[Experimentální podpora]

Podpora této jednotky je zatím experimentální, čeká se na otestování reálné jednotce

:::

## Parametry integrace

<HRUIntegrationParams interf="ModbusTCP" power="stupně 1 - 4" temperature="5 - 40 °C"></HRUIntegrationParams>

Jednotka dále poskytuje vnitřní, venkovní a přívodní teplotu, intenzitu ventilátorů, zanesení filtrů, účinnost rekuperace, nativní režim a chybový stav.

## Připojení jednotky

Řídicí jednotka C6 disponuje rozhraním Modbus TCP, stačí ji tedy zapojit pomocí síťového kabelu do Vašeho routeru.

## Nastavení v aplikaci LUFTaTOR

- Zvolte typ jednotky `Komfovent Domekt C6`
- Zadejte IP adresu jednotky a port 502
