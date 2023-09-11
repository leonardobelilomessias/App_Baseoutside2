import { config, createConfig } from "@gluestack-ui/themed";

export const extendedConfig = createConfig({
    ...config.theme,
    components: {
      Button: {
        theme: {
          variants: {
            variant: {
              ghost: {
                
              },
            },
          },
        },
      },
    },
  })