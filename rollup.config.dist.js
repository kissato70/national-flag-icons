import cleaner from "rollup-plugin-cleaner";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import node_resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import image from '@rollup/plugin-image';
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/Library/flag.tsx",
  output: [
    {
      file: "lib/flag.js",
      format: "es",
      plugins: [terser({ output: {comments: "false"} })],
      sourcemap: true
    }
  ],
  plugins: [
    cleaner({
      targets: ["./lib/"]
    }),
    peerDepsExternal(),
    node_resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    typescript({ tsconfig: "tsconfig.dist.json" }),
    postcss({ plugins: [] } ),
    json(),
    image(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment:true
    }),
    terser()
  ],
};