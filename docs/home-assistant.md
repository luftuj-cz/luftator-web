---
sidebar_position: 3
---

import HABadge from '@site/src/components/HABadge';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Home Assistant

Home Assistant je open-source domácí automatizace, kterou můžete ve své domácnosti použít za zlomek ceny konkurenčních komerčních produktů.

## Jaký hardware budete potřebovat?

Home Assitant je možné spustit na široké škále zařízení (Raspberry Pi 4 nebo novější, x86 mini počítače a další). Nejsnadnější je však použití Home Assistant Green.

:::warning[Pozor]

Přestože Home Asisstant je možné provozovat i na Raspberry Pi 3, aplikace LUFTaTOR na této platformě nefunguje z důvodu zastarelé instrukční sady.

:::

Pokud budete pro svou automatizaci vzduchotechniky využívat tlačítka, která lze využít jako boost tlačítka nebo čidel kvality ovzduší (CO₂, PM2.5, VOC, teploty, vlhkosti...)
, která můžete využít k automatickému řízení, bude se Vám zřejmě hodit i rozhraní Zigbee nebo Matter. K tomu doporučujeme zakoupit Home Assistant Connect ZBT-2.

:::note[Upozornění]

Pomocí jednoho modulu Home Assistant Connect ZBT-2 můžete připojit libovolné množství komponent připojených po Zigbee nebo Matter. Nelze však kombinovat protokol Zigbee a Matter.
Při výběru komponent tak dbejte na to, aby všechny komponenty komunikovali stejným protokolem.

:::

## Instalace

Pokud jste zkoupili Home Assistant Green je Home Assistant již předinstalován,v případě instalace na Raspberry Pi využite [oficiální návod](https://www.home-assistant.io/installation/raspberrypi)

Pro použití LUFTaTOR budete potřebovat nainstalovat integraci MQTT, pro externí tlačítka či čidla kvality ovzduší pak rozšíření zigbee2mqtt.

### Instalace MQTT

Nainstalujte aplikaci `Mosquitto broker`, která slouží jako MQTT broker. <HABadge
redirect="config_flow_start?domain=mqtt"
text="Nastavit MQTT na"
title="Nastavit MQTT"
/>

### Instalace Zigbee2mqtt

:::note[Upozornění]

Tento krok provádějte pouze pokud využíváte zařízení (tlačítka, čidla CO₂...) podporující protokol Zigbee.

:::

<Tabs groupId="repo"queryString>
<TabItem value="automatic" label="Automaticky" default>
<ul>
<li>Klikněte na tlačítko <HABadge
redirect="supervisor_add_addon_repository?repository_url=https%3A%2F%2Fgithub.com%zigbee2mqtt%2Fhassio-zigbee2mqtt"
text="Přidat repozitář do"
title="Přidat repozitář zigbee2mqtt/hassio-zigbee2mqtt"
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
<li>zadejte https://github.com/zigbee2mqtt/hassio-zigbee2mqtt</li>
<li>Klikněte na tlačítko "Přidat"</li>
</ul>
</TabItem>
</Tabs>

- Po jeho instalaci klikněte na tlačítko `Spustit`.
- Klikněte na `Otevřít webové rozhraní` (pokud se zobrazí chyba 503, prověďte obnovení stránky)
- V nastavení vyberte adaptér (obvykle `/dev/ttyUSB0`)

### Instalace Matter / Thread

:::note[Upozornění]

Tento krok provádějte pouze pokud využíváte zařízení (tlačítka, čidla CO₂...) podporující protokol Matter.

:::

- Nainstalujte integraci Thread <HABadge
redirect="config_flow_start?domain=thread"
text="Přidat Thread do"
title="Přidat Thread do Vašeho Home Assistantu"
/>

- Na mobilní telefon nainstalujte aplikaci Home Assistant Companion


<div class="download-badge">
<a href="https://play.google.com/store/apps/details?id=io.homeassistant.companion.android"><img class="download-badge" width="200" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" /></a>
<a href="https://apps.apple.com/app/home-assistant/id1099568401?itsct=apps_box_badge&amp;itscg=30200"><img class="download-badge" width="175" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1492214400&amp;h=3ef4307fa479838e52fe9bd8bd17913b" alt="Download on the App Store" /></a>
</div>

- V aplikaci se přihlašte ke svému Home Assistantu
- V menu klikněte Nastavení | Doprovodná aplikace | Řešení problémů | Synchronizovat přihlašovací údaje Threadu

:::warning[Upozornění]

Krok se synchronizací přihlašovacích údajů je nezbytný. Pokud tento krok neprovedete, přidání zařízení selže s chybou: Zařízení vyžaduje hraniční router.

:::

V případě potíží si nastudujte oficiální návod [Matter na Home Assistantu](https://www.home-assistant.io/integrations/thread#turning-home-assistant-into-a-thread-border-router).


### Přístup z internetu

Home Assistant nabízí přístup z internetu pomocí brány [NabuCasa](https://www.nabucasa.com/), tato služba je však placena částkou 7,50 EUR za měsíc. Pokud chcete vývoj Home Assistantu podpořit, zvažte zakoupení této služby.

Přístup si však můžete elegantně vyřešit také zdarma pomocí služby [Tailscale](https://tailscale.com/), která Vám umožňuje bezplatně propojit až 100 zařízení.

- Vytvořte si bezplatný účet na [Tailscale.com](https://tailscale.com/)
- Nahrajte si aplikaci Tailscale do svého mobilního telefonu a přihlašte se vytvořeným účtem
- Do svého Home Assistantu přidejte plugin Tailscale <HABadge
redirect="supervisor_addon/?addon=a0d7b954_tailscale&repository_url=https%3A%2F%2Fgithub.com%2Fhassio-addons%2Frepository"
text="Nastavit Tailscale na"
title="Nastavit Tailscale na Vašem Home Assistantovi"
/>
- Aplikaci spusťte, zapněte volbu Hlídací pes a klikněte na "Otevřít webové rozhraní"
- Budete vyzvání k přihlášení se k Vašemu Tailscale účtu
- Po přidání Home Assistantu do sítě Tailscale si okopírujte jeho Tailscale IP adresu nebo Tailscale magic DNS name.
- Tuto adresu poté použijte v aplikaci Home Assistant pro přístup k Vaší domací automatizaci.

![Aplikace Tailscale](/img/tailscale-app.png)
