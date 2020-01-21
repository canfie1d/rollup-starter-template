import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';

export default {
  input: './src/main.js',
  output: {
    file: './build/bundle.min.js',
    format: 'iife',
    name: 'bundle'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    scss(),
    uglify(),
    serve({
      contentBase:'build',
      open: true,
      host: 'localhost',
      port: 3001,
    }),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'build' }
      ]
    })
  ]
}
