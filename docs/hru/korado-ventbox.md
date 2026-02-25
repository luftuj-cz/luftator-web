---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HRUIntegrationParams from '@site/src/components/HRUIntegrationParams';

# KORADO VENTBOX

Připojení rekuperačních jednotek VENTBOX od společnosti [Korado](https://korado.cz/) k Home Assistantu pomocí aplikace LUFTaTOR.

:::tip

Podpořte tento open-source projekt zakoupením rekuperační jednotky KORADO VENTBOX či příslušenství k ní na eshopu [Luftuj.cz](https://www.luftuj.cz/vyrobci/korado-a-s/)

:::


## Parametry integrace

<HRUIntegrationParams interf="ModbusTCP" power="0-100%"></HRUIntegrationParams>

## Připojení jednotky

Rekuperační jednotky KORADO VENTBOX disponují rozhraním ModbusRTU, pro připojení je tedy potřeba použít [převodník ModbusRTU na ModbusTCP](/docs/modbus).

Zapojení Modbus RTU na jednotkách KORADO VENTBOX je následující

![Připojení modbus rozhraní na jednotkách KORADO VENTBOX](./img/korado-modbus.png)

## Nastavení jednotky

- Jednotka musí být nastavena na: Režim – Týdenní
- V nastavení chodu v týdenním režimu (ikona kalendář) nastavit na všech 10 možných režimech v nastavení dnů jen samé čárky, aby jednotka poslouchala nadřazený systém
- V tabulce Modbus je nutné dodržet pokyny v zelené tabulce


## Nastavení v aplikaci LUFTaTOR

- Zvolte typ jednotky `KORADO VENTBOX`
- Zadejte IP adresu převodníku a port 502
