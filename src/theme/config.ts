import { config, createConfig } from "@gluestack-ui/themed";

export const extendedConfig = createConfig({
    ...config.theme,
    defaulPaddingToCompanents:8
  })