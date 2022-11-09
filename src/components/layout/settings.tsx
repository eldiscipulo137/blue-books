import { createContext } from "react";

export interface SettingsParameters {
  showSpanishPageNumberReference: boolean;
  showEnglishPageNumberReference: boolean;
}

export interface SettingsApi {
  settings: SettingsParameters;
  changeParameters: (parameters: Partial<SettingsParameters>) => void;
}

export const Settings = createContext<SettingsApi>({
  settings: {
    showSpanishPageNumberReference: false,
    showEnglishPageNumberReference: false,
  },
  changeParameters(parameters) {},
});
