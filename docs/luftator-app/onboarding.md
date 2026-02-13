---
sidebar_position: 2
---

# Prvotní nastavení

Pro prvotní nastavení aplikace LUFTaTOR je k dispozici přehledný průvodce.

## Vítejte

![Prvotní nastavení LUFTaTOR - obrazovka: Vítejte](./img/luftator-ha-onboarding-1.png)

- Na úvodní obravce klikněte na tlačítko Spustit nastavení

## Předvolby
 
![Prvotní nastavení LUFTaTOR - obrazovka: Předvolby](./img/luftator-ha-onboarding-2.png)

- Zvolte jazyk rozhraní ve kterém chcete aplikaci LUFTaTOR používat
- Vyberte si, zda chcete LUFTaTOR provozovat ve světlém či tmavém rozhraní
- Zvolte, zda jednotku pro teplotu budete využívat stupně Celsia nebo Fahrenheita
- Klikněte na tlačítko "Další"

## Jednotka

![Prvotní nastavení LUFTaTOR - obrazovka: Jednotka](./img/luftator-ha-onboarding-3.png)

- Zvolte Vámi používanou Rekuperační jednotku. Pokud Vaše jednotka není na [seznamu podporovaných rekuperačních jednotek](/docs/rekuperacni-jednotky), pomožte nám ji [přidat](https://github.com/luftuj-cz/home-assistant/tree/main/addon/rootfs/usr/src/app/src/features/hru/definitions) nebo [založte požadavek na přidání jednotky](https://github.com/luftuj-cz/home-assistant/issues/new), do kterého uveďte výrobce a model jednotky. 

## MQTT

![Prvotní nastavení LUFTaTOR - obrazovka: MQTT](./img/luftator-ha-onboarding-4.png)

- LUFTaTOR Control i LUFTaTOR app využívá MQTT je tedy třeba nastavit adresu na MQTT broker.
- Pokud využíváte aplikaci Mosquitto uvnitř Home Assistantu, hostitel bude obvykle adresa 
  Vašeho Home Assistantu (např. homeassistant.local), číslo portu 1883 a uživatelské jméno a heslo bude odpovídat Vašemu přihlášení do HomeAssistantu. Z bezpečnostních důvodů
  je však lepší používat jiné přihlašovací údaje, které si můžete nadefinovat přihlašovací údaje můžete nastavit v nastavení aplikace Mosquitto.
- Kliknutím na tlačítko "Testovat připojení" ověříte, zda je MQTT broker dostupný a lze se na něj přihlásit se zadanými přihlašovacími údaji.

## Modbus

![Prvotní nastavení LUFTaTOR - obrazovka: Modbus](./img/luftator-ha-onboarding-5.png)

- Pokud řízení jednotky využívá Modbus protokol, je třeba nastavit adresu na Modbus TCP serveru a port (výchozí port je 502).
- Pokud je na Modbus sběrnici více zařízení, vyplňte ID jednotky (tj. identifikátor Modbus zařízení na sběrnici).
- Kliknutím na tlačítko "Testovat připojení" ověříte, zda je Modbus TCP server dostupný.

## Status

![Prvotní nastavení LUFTaTOR - obrazovka: Status](./img/luftator-ha-onboarding-6.png)

- Pokud jste došli až sem a vidíte zelenou potvrzovací hlášku, pak je aplikace LUFTaTOR připravena k použití.
- V případě chyby je potřeba se vrátit zpět a opravit nastavení, které není funkční.
- Veškeré nastavení lze změnit i dodatečně na záložce "Nastavení"

![LUFTaTOR - záložka: Nastavení](./img/luftator-ha-settings.png)
