import styles from './styles.module.css';

export default function HABadge({ redirect, text, title }) {
  const baseUrl = 'https://my.home-assistant.io';
  const redirectUrl = `${baseUrl}/redirect/${redirect}`;

  return (
    <a href={redirectUrl} title={title || text} className={styles.badge}>
      <span>{text}</span>
      <img src="/img/my-home-assistant.svg" alt={text} loading="lazy" />
    </a>
  );
}
