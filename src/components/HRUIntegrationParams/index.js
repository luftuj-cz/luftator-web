import styles from './styles.module.css';

function formatParam(param) {
    if (param === true || param === "true") {
        return 'ANO';
    }
    if (param) {
        return `ANO (${param})`;
    }
    return 'NE';
}

export default function HRUIntegrationParams({ interf, power, temperature, mode }) {

  return (
      <table className={styles.params}>
          <tbody>
          <tr><th>Rozhraní</th><td>{interf}</td></tr>
          <tr><th>Regulace výkonu</th><td>{formatParam(power)}</td></tr>
          <tr><th>Regulace teploty</th><td>{formatParam(temperature)}</td></tr>
          <tr><th>Ovládání režimu</th><td>{formatParam(mode)}</td></tr>
          </tbody>
      </table>
  );
}
