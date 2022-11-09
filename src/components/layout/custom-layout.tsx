import React, { FC, useState } from "react";
import Layout from "@theme-original/Layout";
import { Settings, SettingsParameters } from "./settings";
import BrowserOnly from "@docusaurus/BrowserOnly";

const SETTINGS_STORAGE_KEY = "settings-parameters";

export const CustomLayout: FC = (props) => (
  <BrowserOnly>
    {() => {
      const savedSettings = JSON.parse(
        localStorage.getItem(SETTINGS_STORAGE_KEY) || "{}"
      );
      const [settings, setSettings] = useState<SettingsParameters>({
        showSpanishPageNumberReference: true,
        showEnglishPageNumberReference: true,
        ...savedSettings,
      });
      const changeParameters = (parameters: Partial<SettingsParameters>) => {
        const newSettings = { ...settings, ...parameters };
        setSettings(newSettings);
        localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(newSettings));
      };
      return (
        <Settings.Provider value={{ settings, changeParameters }}>
          <Layout {...props} />
        </Settings.Provider>
      );
    }}
  </BrowserOnly>
);
