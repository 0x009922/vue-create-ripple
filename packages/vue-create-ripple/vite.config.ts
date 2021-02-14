import { defineConfig } from "vite";
import path from 'path'
// import ts from 'rollup-plugin-typescript2';
import dts from 'rollup-plugin-dts';
// import rimraf from 'rimraf';
import pkg from './package.json';

export default defineConfig({
    build: {
        brotliSize: false,
        lib: {
            entry: path.join(__dirname, './target/ts/src/index.js'),
            name: 'VueCreateRipple',
            formats: ['es']
        },
        outDir: "target/vite",
        // rollupOptions: {
        //     input: 'src/index.ts',
        //     output: {
        //       file: pkg.types,
        //       format: 'es'
        //     },
        //     plugins: [
        //       dts()
        //     ]
        // }
        // rollupOptions: {
        //     plugins: [
        //         ts({
        //             tsconfigOverride: {
        //               compilerOptions: {
        //                 removeComments: true
        //               }
        //             }
        //           })
        //     ]
        // }
    }
})