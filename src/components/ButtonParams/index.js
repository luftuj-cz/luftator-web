import styles from './styles.module.css';

export default function ButtonParams({ dimensions, interf, count, events }) {

  return (
      <table className={styles.params}>
          <tbody>
          <tr><th>Rozměry</th><td>{dimensions}</td></tr>
          <tr><th>Rozhraní</th><td>{interf}</td></tr>
          <tr><th>Počet fyzických tlačítek</th><td>{count}</td></tr>
          <tr><th>Události</th><td>{events}</td></tr>
          </tbody>
      </table>
  );
}
