import styles from './styles.module.css';

export default function SensorParams({ dimensions, interf, power, measurements }) {

  return (
      <table className={styles.params}>
          <tbody>
          <tr><th>Rozhraní</th><td>{interf}</td></tr>
          <tr><th>Rozměry</th><td>{dimensions}</td></tr>
          <tr><th>Napájení</th><td>{power}</td></tr>
          <tr><th>Měřené hodnoty</th><td>{measurements}</td></tr>
          </tbody>
      </table>
  );
}
