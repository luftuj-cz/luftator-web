---
sidebar_position: 1
---

import HABadge from '@site/src/components/HABadge';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Instalace

Rychlý návod jak nainstalovat aplikaci LUFTaTOR

## Prerekvizity

Pro pokračování v tomto návodu musíte mít:
- nainstalovaný Home Assistant (ideálně s nastavenou statickou IP adresou)
- nainstalovanou integraci MQTT <HABadge
  redirect="config_flow_start?domain=mqtt"
  text="Nastavit MQTT na"
  title="Nastavit MQTT"
  />
- nainstalovanou aplikaci Mosquitto broker (nebo mít nakonfigurovaný jiný MQTT broker)

## Přidání repozitáře

<Tabs groupId="repo"queryString>
    <TabItem value="automatic" label="Automaticky" default>
        <ul>
            <li>Klikněte na tlačítko <HABadge
            redirect="supervisor_add_addon_repository?repository_url=https%3A%2F%2Fgithub.com%2Fluftuj-cz%2Fhome-assistant"
            text="Přidat repozitář do"
            title="Přidat repozitář luftuj-cz/home-assistant"
            /></li>
            <li>Potvrďte tlačítkem "Open link"</li>
            <li>Klikněte na tlačítko "Přidat"</li>
        </ul>
    </TabItem>
    <TabItem value="manual" label="Manuálně">
        <p>Ve webovém prostředí Home Assistantu:</p>
            <ul>
                <li>v menu klikněte na Nastavení | Aplikace | Nainstalovat aplikaci</li>
                <li>v pravém horním rohu klikněte na tlačítko se třemi tečkami</li>
                <li>v zobrazeném menu klikněte na Repozitáře</li>
                <li>zadejte https://github.com/luftuj-cz/home-assistant</li>
                <li>Klikněte na tlačítko "Přidat"</li>
            </ul>
      </TabItem>
</Tabs>

## Instalace aplikace

- Vyhledejte Luftuj Home Assistant Add-On v seznamu
- Klikněte na tlačítko "Nainstalovat"
- Zaškrtněte přepínače "Spustit při spuštění", "Hlídací pes" a "Zobrazit v postranním panelu"
- Klikněte na tlačítko "Spustit"

