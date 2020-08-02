import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import postcss from 'rollup-plugin-postcss-modules'
import autoprefixer from 'autoprefixer'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: ['react', 'react-dom'],
  plugins: [
    postcss({
      modules: true,
      minimize: true,
      plugins: [autoprefixer()],
      writeDefinitions: true,
    }),
    typescript(),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
}
