import React, { useState } from 'react';
import styles from './styles.module.css';

const NUM_SCENES = 4;
const NUM_SERVOS = 4;

// Conversion formula: 800 us = 0°, 1700 us = 90°
// pulse = 800 + (angle * (1700-800)/90) = 800 + angle * 10
const angleToPulse = (angle) => 800 + (angle * 10);

export default function ConfigGenerator() {
  const [values, setValues] = useState(() => {
    const initial = {};
    for (let s = 0; s < NUM_SCENES; s++) {
      for (let v = 1; v <= NUM_SERVOS; v++) {
        initial[`scene${s}servo${v}`] = 0;
      }
    }
    return initial;
  });

  const handleChange = (id, value) => {
    setValues(prev => ({ ...prev, [id]: parseInt(value) || 0 }));
  };

  const generateUF2 = () => {
    // 1. Create Data Payload (32 bytes total)
    const dataPayload = new ArrayBuffer(32);
    const view = new DataView(dataPayload);

    let offset = 0;
    for (let s = 0; s < NUM_SCENES; s++) {
      for (let v = 1; v <= NUM_SERVOS; v++) {
        const angle = values[`scene${s}servo${v}`];
        const pulse = angleToPulse(angle);
        // Ensure pulse is within 0-65535, though practically 800-2200
        view.setUint16(offset, pulse, true);
        offset += 2;
      }
    }

    // --- UF2 Format Constants ---
    const UF2_MAGIC_START0 = 0x0A324655;
    const UF2_MAGIC_START1 = 0x9E5D5157;
    const UF2_MAGIC_END    = 0x0AB16F30;
    const RP2040_FAMILY_ID = 0xe48bff56;
    const FLASH_OFFSET     = 0x101FF000; // Relative to the start of Flash

    // 2. Create UF2 Block (standard size is 512 bytes)
    const uf2Block = new ArrayBuffer(512);
    const uf = new DataView(uf2Block);

    // Header
    uf.setUint32(0, UF2_MAGIC_START0, true);
    uf.setUint32(4, UF2_MAGIC_START1, true);
    uf.setUint32(8, 0x00002000, true);  // Flags: FamilyID is present
    uf.setUint32(12, FLASH_OFFSET, true);
    uf.setUint32(16, 256, true);        // Data size in this block (though we only use 32 bytes, original used 256)
    uf.setUint32(20, 0, true);          // Block number
    uf.setUint32(24, 1, true);          // Total number of blocks
    uf.setUint32(28, RP2040_FAMILY_ID, true);

    // Copy our 32-byte payload into the UF2 data area (starts at offset 32)
    const dest = new Uint8Array(uf2Block, 32, 32);
    dest.set(new Uint8Array(dataPayload));

    // Footer
    uf.setUint32(508, UF2_MAGIC_END, true);

    // 3. Trigger File Download
    const blob = new Blob([uf2Block], {type: 'application/octet-stream'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'config.uf2';
    link.click();

    // Cleanup
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  const sceneTitles = [
    'Oba vypínače vypnuté',
    'Vypínač 1 vypnutý, vypínač 2 zapnutý',
    'Vypínač 1 zapnutý, vypínač 2 vypnutý',
    'Oba vypínače zapnuté'
  ];

  return (
    <div className={styles.container}>
      <div className={styles.scenesGrid}>
        {sceneTitles.map((title, s) => (
          <div className={styles.scene} key={s}>
            <h2>{title}</h2>
            {[1, 2, 3, 4].map(v => {
              const id = `scene${s}servo${v}`;
              return (
                <div className={styles.field} key={id}>
                  <label htmlFor={id}>Klapka {v}</label>
                  <div className={styles.sliderWrapper}>
                    <input
                      type="range"
                      id={id}
                      min={0}
                      max={90}
                      value={values[id]}
                      onChange={(e) => handleChange(id, e.target.value)}
                      step="1"
                      className={styles.rangeInput}
                    />
                    <span className={styles.valueDisplay}>{values[id]}°</span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <button className={styles.button} onClick={generateUF2}>Vygeneruj konfigurační soubor</button>
    </div>
  );
}
