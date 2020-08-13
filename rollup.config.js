import ts from 'rollup-plugin-typescript2';
import rimraf from 'rimraf';
import pkg from './package.json';

rimraf.sync('./dist');

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'es'
    // dir: 'dist',
    // format: ''
  },
  plugins: [ts()]
};
