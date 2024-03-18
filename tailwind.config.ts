import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import defaultColors from "tailwindcss/colors";

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...defaultColors.colors,
      }
    }
  }
}
