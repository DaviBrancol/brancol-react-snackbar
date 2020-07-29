import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "index.js",
    dir: "dist",
    name: "myWidget",
    format: "cjs",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript(),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
};
