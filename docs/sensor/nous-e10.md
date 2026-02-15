---
sidebar_position: 2
---

import SensorParams from '@site/src/components/SensorParams';


# Nous E10

<SensorParams dimensions="100×100×30,5 mmmm" interf="Zigbee" power="integrovaná baterie / USB-C" measurements="CO₂, teplota, relativní vlhkost"></SensorParams>

Nous E10 je levné čidlo kvality vzduchu komunikující přes Zigbee. Výdrž integrované nabíjecí baterie je velmi krátká (v řádu nižších desítek hodin). Měřené hodnoty CO₂ vykazují velké odchylky oproti průměru jiných čidel.
Nevýhodou je nemožnost vypnout zvukové upozornění na nízký stav baterie.

![Nous E10 - čidlo CO2](./img/nous-e10.png)

## Připojení do Home Assistantu

- Pokud jste ta doposud neučinili, nainstalujte podporu pro [mqtt](/docs/home-assistant#instalace-mqtt) a doplněk [zibee2mqtt](/docs/home-assistant#instalace-zigbee2mqtt) podle návodů pod těmito odkazy.
- Pro spárování zařízení klikněte na stránce doplňku zigbee2mqtt na Otevřít webové rozhraní.
- V hlavním menu klikněte na tlačítko Povolit připojení
- Stiskněte na senzoru tlačítko s ikonou reproduktoru a držte ho dokud neuslyšíte pípnutí a na displeji nezačně blikat ikona síly signálu

