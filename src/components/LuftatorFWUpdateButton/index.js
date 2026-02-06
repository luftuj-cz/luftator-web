import { useEffect } from 'react';
import styles from './styles.module.css';

export default function LuftatorFWUpdateButton({ version }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/esp-web-tools@10/dist/web/install-button.js?module';
        script.type = 'module';
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const manifest = {
        "name": "Luftator",
        "version": version,
        "new_install_prompt_erase": true,
        "builds": [
            {
                "chipFamily": "ESP32",
                "improv": false,
                "parts": [
                    { "path": "https://cloud.luftuj.cz/luftator/luftator-"+version+".bin" , "offset": 0 }
                ]
            }
        ]
    }

    const json = JSON.stringify(manifest);
    const blob = new Blob([json], {type: "application/json"});
  return (
    <esp-web-install-button className={styles.updateBtn}>
        <button slot="activate" id="update-button" manifest={URL.createObjectURL(blob)}>Aktualizovat firmware na verzi {version}</button>
        <span slot="unsupported" class="warning">Váš prohlížeč nepodporuje WebUSB API. Prosím použijte prohlížeč založený na Chromiu (Chrome, Edge...)</span>
        <span slot="not-allowed" class="warning">Přístup k USB není povolen ve Vašem prohlížeči. Prosím povolte ho.</span>
    </esp-web-install-button>

  );
}
