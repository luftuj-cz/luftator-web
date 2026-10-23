import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const SupportedUnits = [
  {name: 'Atrea Duplex AM (aMotion)', to: '/docs/hru/atrea-am'},
  {name: 'Atrea Duplex RD5', to: '/docs/hru/atrea-rd5'},
  {name: 'Brink Flare', to: '/docs/hru/brink'},
  {name: 'Komfovent Domekt C6', to: '/docs/hru/domekt-c6'},
  {name: 'KORADO VENTBOX', to: '/docs/hru/korado-ventbox'},
  {name: 'Meltem', to: '/docs/hru/meltem'},
  {name: 'Systemair SAVE', to: '/docs/hru/systemair-save'},
  {name: 'Xvent Xhouse a Xflat', to: '/docs/hru/xvent'},
  {name: 'Zehnder', to: '/docs/hru/zehnder'},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Návody
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageUnits() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2">Podporované rekuperační jednotky</Heading>
        <p>
          Aplikace LUFTaTOR umožňuje připojit do Home Assistantu rekuperační
          jednotky těchto výrobců. U každé jednotky najdete návod, jak ji
          zapojit a nastavit.
        </p>
        <ul className={styles.unitList}>
          {SupportedUnits.map(({name, to}) => (
            <li key={to}>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </ul>
        <p>
          Nenašli jste svoji jednotku? Pomozte nám ji{' '}
          <Link to="https://github.com/luftuj-cz/home-assistant/tree/main/addon/rootfs/usr/src/app/src/features/hru/definitions">
            přidat
          </Link>{' '}
          nebo{' '}
          <Link to="https://github.com/luftuj-cz/home-assistant/issues/new">
            založte issue
          </Link>{' '}
          s dokumentací ke komunikaci s jednotkou.
        </p>
      </div>
    </section>
  );
}

function HomepageAbout() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">Jak připojit rekuperaci do Home Assistantu</Heading>
            <p>
              Rekuperace, tedy řízené větrání se zpětným ziskem tepla, většinou
              nabízí jen vlastní ovladač nebo aplikaci výrobce. LUFTaTOR je
              open-source doplněk (addon) pro{' '}
              <Link to="https://www.home-assistant.io/">Home Assistant</Link>,
              který rekuperační jednotku připojí přes Modbus TCP. Jednotky
              s rozhraním Modbus RTU (RS485) stačí připojit přes{' '}
              <Link to="/docs/modbus">převodník Modbus RTU na Modbus TCP</Link>.
            </p>
            <p>
              V Home Assistantu pak můžete nastavit výkon větrání, režim
              jednotky nebo požadovanou teplotu a sledovat teploty a stav
              filtrů. Větrání můžete řídit automatizacemi, například podle
              koncentrace CO₂ a vlhkosti z{' '}
              <Link to="/docs/cidla">čidel kvality vzduchu</Link> nebo
              podle{' '}
              <Link to="/docs/tlacitka">bezdrátových tlačítek</Link>.
            </p>
          </div>
          <div className="col col--6">
            <Heading as="h2">Zónové větrání: větrejte jen tam, kde je potřeba</Heading>
            <p>
              Běžná rekuperace větrá celý dům stejně, i v prázdných místnostech.
              Zónové (multizónové) větrání pomocí{' '}
              <Link to="/docs/luftator-control">LUFTaTOR control</Link> ovládá
              až 12 klapek se servopohony na rozvodech vzduchotechniky
              o průměru 75, 90 a 100 mm. Čerstvý vzduch tak proudí jen do
              místností, kde je ho potřeba: do ložnice v noci, do pracovny přes
              den, do koupelny při zvýšené vlhkosti.
            </p>
            <p>
              Řízené větrání podle potřeby snižuje tepelné ztráty, šetří
              energii a omezuje hluk. LUFTaTOR control lze kromě Home Assistantu
              připojit přes MQTT nebo Modbus TCP i do OpenHAB, Domoticz či
              Loxone.
            </p>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/luftator-app">
            Instalace aplikace LUFTaTOR
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Jak připojit rekuperaci (řízené větrání se zpětným ziskem tepla) do Home Assistantu a řídit zónové větrání jen tam, kde je potřeba. Podpora jednotek Atrea, Brink, Komfovent, Korado, Meltem, Systemair, Xvent a Zehnder.">
      <Head>
        <meta
          name="keywords"
          content="rekuperace Home Assistant, rekuperační jednotka Home Assistant, řízené větrání, zpětný zisk tepla, zónové větrání, multizónové větrání, klapky vzduchotechnika, Modbus, Atrea, Brink, Komfovent, Korado Ventbox, Meltem, Systemair, Xvent, Zehnder"
        />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageUnits />
        <HomepageAbout />
      </main>
    </Layout>
  );
}
