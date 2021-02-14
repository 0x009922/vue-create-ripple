// import ts from 'rollup-plugin-typescript2';
// import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
// import rimraf from 'rimraf';
import pkg from './package.json';

// rimraf.sync('./dist');

export default [
  // {
  //   input: 'src/index.ts',
  //   output: {
  //     file: pkg.main,
  //     format: 'es'
  //   },
  //   plugins: [
  //     ts({
  //       tsconfigOverride: {
  //         compilerOptions: {
  //           removeComments: true
  //         }
  //       }
  //     }),
  //     babel({
  //       extensions: ['.ts']
  //     })
  //   ]
  // },
  {
    input: 'src/index.ts',
    output: {
      file: pkg.types,
      format: 'es'
    },
    plugins: [
      dts()
    ]
  }
];
