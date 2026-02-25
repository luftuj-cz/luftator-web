---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import HRUIntegrationParams from '@site/src/components/HRUIntegrationParams';

# Xvent

Připojení rekuperačních jednotek Xhouse a Xflat od společnosti [Xvent](https://xvent.cz/) k Home Assistantu pomocí aplikace LUFTaTOR.

:::tip

Podpořte tento open-source projekt zakoupením rekuperační jednotky Xhouse, Xflat či příslušenství k ní na eshopu [Luftuj.cz](https://www.luftuj.cz/vyrobci/xvent/)

:::


## Parametry integrace

<HRUIntegrationParams interf="ModbusTCP" power="stupně 0 - 7"></HRUIntegrationParams>

## Připojení jednotky

Rekuperační jednotky Xhouse a Xflat disponují rozhraním ModbusRTU, pro připojení je tedy potřeba použít [převodník ModbusRTU na ModbusTCP](/docs/modbus).

Zapojení Modbus RTU na RJ45 konektoru na Xvent jednotkách je následující:

![RJ45](/img/rj45.jpg)

Kontakty:
1) nezapojeno
2) nezapojeno
3) RS485-A
4) RS485-A
5) RS485-B
6) RS485-B
7) nezapojeno
8) nezapojeno

Připravte si tedy takovýto kabel

![RJ45-RS485 Xvent](./img/rj45-rs485-xvent.png)

Datové vodiče zapojte do svorkovnice označené 485A a 485B a druhý konec opatřený konektorem RJ45 zapojte do jednotky Xvent.

Podle použitého převodníku proveďte jeho konfiguraci dle [návodu](/docs/modbus).

## Nastavení v aplikaci LUFTaTOR

- Zvolte typ jednotky `Xvent`
- Zadejte IP adresu převodníku a port 502
