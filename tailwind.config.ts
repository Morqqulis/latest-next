import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            sm: { max: '566.98px' },
            md: { max: '767.98px' },
            lg: { max: '991.98px' },
            xl: { max: '1280px' },
         },

         container: {
            center: true,
            padding: '0.9375rem',

            // screens: {
            //    sm: '640px',
            //    md: '768px',
            //    lg: '1024px',
            //    xl: '1280px'
            // }
         },
      },
   },
   plugins: [],
}
export default config
