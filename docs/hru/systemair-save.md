---
sidebar_position: 7
---

import HRUIntegrationParams from '@site/src/components/HRUIntegrationParams';

# Systemair SAVE

Připojení rekuperačních jednotek řady SAVE od společnosti [Systemair](https://www.systemair.com/) k Home Assistantu pomocí aplikace LUFTaTOR.

:::warning[Experimentální podpora]

Podpora této jednotky je zatím experimentální, čeká se na otestování reálné jednotce

:::

## Parametry integrace

<HRUIntegrationParams interf="ModbusTCP" power="stupně 2 - 4" temperature="12 - 30 °C" mode="Auto, Manuální, Zvýšené obsazení, Provětrání, Krb, Nepřítomnost, Dovolená"></HRUIntegrationParams>

Jednotka dále poskytuje vnitřní, venkovní a přívodní teplotu, vnitřní relativní vlhkost, počet dní do výměny filtrů a chybový stav.

## Připojení jednotky

Jednotky Systemair SAVE je možné připojit pomocí příslušenství **Systemair Internet Access Module (IAM)**, které poskytuje rozhraní Modbus TCP. Modul zapojte pomocí síťového kabelu do Vašeho routeru.

Jednotky lze alternativně připojit i po rozhraní Modbus RTU pomocí [převodníku ModbusRTU na ModbusTCP](/docs/modbus).

## Nastavení v aplikaci LUFTaTOR

- Zvolte typ jednotky `Systemair SAVE`
- Zadejte IP adresu jednotky (případně převodníku) a port 502
