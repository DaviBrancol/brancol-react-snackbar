import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";

export default {
  input: "src/index.ts",
  output: {
    file: "index.esm.js",
    dir: "dist",
    name: "myWidget",
    format: "esm",
  },
  external: ["react", "react-dom"],
  plugins: [
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs({
      include: "node_modules/**",
    }),
  ],
};
