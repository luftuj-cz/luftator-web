---
sidebar_position: 4
---

import HRUIntegrationParams from '@site/src/components/HRUIntegrationParams';

# Komfovent Domekt C6

Připojení rekuperačních jednotek Domekt s řízením C6 od společnosti [Komfovent](https://www.komfovent.com/) k Home Assistantu pomocí aplikace LUFTaTOR.

:::tip

Podpořte prosím tento open-source projekt zakoupením rekuperační jednotky Komfovent Domekt či příslušenství k ní na eshopu [Luftuj.cz](https://www.luftuj.cz/vyrobci/komfovent/) či udělením hvězdičky na [Github stránce projektu](https://github.com/luftuj-cz/home-assistant)

:::

## Parametry integrace

<HRUIntegrationParams interf="ModbusTCP" power="m³/h" temperature="true"></HRUIntegrationParams>

Ovládat lze také úplně vypnutí jednotky, řídit předehřev a vyvážení ventilátorů.

Jednotka dále poskytuje informace o zanesení filtrů, přívodní teplotě a teplotě odtahu.

## Připojení jednotky

Řídicí jednotka C6 disponuje rozhraním Modbus TCP, stačí ji tedy zapojit pomocí síťového kabelu do Vašeho routeru.

## Nastavení v aplikaci LUFTaTOR

- Zvolte typ jednotky `Komfovent Domekt C6`
- Zadejte IP adresu jednotky a port 502
- Zvolte maximální průtok jednotky
