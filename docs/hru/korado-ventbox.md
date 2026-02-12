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

Rekuperační jednotky KORADO VENTBOX disponují rozhraním ModbusRTU, pro připojení je tedy třeba nejprve zakoupit převodník umožňující
převádět ModbusRTU na ModbusTCP.

Použít můžete například cenově dostupný převodník [Waveshare RS485 to RJ45 Ethernet](https://www.waveshare.com/rs485-to-eth-b.htm).

Zapojení Modbus RTU na jednotkách KORADO VENTBOX je následující

![Připojení modbus rozhraní na jednotkách KORADO VENTBOX](./img/korado-modbus.png)

## Nastavení jednotky

- Jednotka musí být nastavena na: Režim – Týdenní
- V nastavení chodu v týdenním režimu (ikona kalendář) nastavit na všech 10 možných režimech v nastavení dnů jen samé čárky, aby jednotka poslouchala nadřazený systém
- V tabulce Modbus je nutné dodržet pokyny v zelené tabulce


## Konfigurace převodníku

- Nastavte ve svém PC pevnou IP adresu 192.168.1.100 a masku sítě 255.255.255.0
- Připojte síťový kabel do svého PC či notebooku
- Otevřete webový prohlížeč a připojte se na IP adresu http://192.168.1.254
- Zadejte heslo pro přihlášení do rozhraní  (výchozí heslo: 123456 - napsáno z boku převodníku)
- Nastavte síťové připojení, tak aby zařízení bylo zařazeno ve LAN (buď pomocí statické IP nebo DHCP)

:::warning[Upozornění]

V případě použití DHCP je potřeba vytvořit ve vašem routeru rezervaci na MAC adresu, aby se přidělená IP adresa neměnila.
MAC adresu převodníku naleznete na boku převodníku.

:::


![Waveshare RS485](/img/waveshare-rs485-to-eth.png)

Nastavte parametry:
- Network Settings
  * Device Port: 502
  * Work Mode: TCP Server
- Serial Settings
  * Baudrate: 19200
  * Databits: 8
  * Parity: Even
  * Stopbits: 1
  * Flow control: None
- Mlity-Host Settings
  * Protocol: Modbus TCP to RTU

## Nastavení v aplikaci LUFTaTOR

- Zvolte typ jednotky `KORADO VENTBOX`
- Zadejte IP adresu převodníku a port 502
