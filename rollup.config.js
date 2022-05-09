import { terser } from 'rollup-plugin-terser';

// const devMode = (process.env.NODE_ENV === 'development');
const devMode = (process.env.NODE_ENV === 'production');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

export default [
  {

    input: './src/Bilza.js',
    // input: './standalone/standalone.js',

    output: {
      file: './build/Bilza_0_0_14.js',
      // file: './standalone/standalone.min.js',
      format: 'es',
      sourcemap: devMode ? 'inline' : false,
      plugins: [
        terser({
          ecma: 2020,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !devMode,
            drop_debugger: !devMode
          },
          output: { quote_style: 1 }
        })
      ]
    }

  }
];