import cleaner from "rollup-plugin-cleaner";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import node_resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";
import image from '@rollup/plugin-image';
import replace from "@rollup/plugin-replace";
import copy from "rollup-plugin-copy";
import serve from "rollup-plugin-serve";
import livereload from 'rollup-plugin-livereload';

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "build/flag.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    cleaner({
      targets: ["./build/"]
    }),
    peerDepsExternal(),
    node_resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    typescript({
      tsconfig: "tsconfig.dev.json"
    }),
    postcss({ plugins: [] }),
    json(),
    image(),
    copy({
      targets: [
        {
          src: "./public/index.html",
          dest: "./build",
          transform: (contents, filename) =>
            contents
              .toString()
              .replace(
                "<!-- SCRIPT -->",
                '<script type="module" src="flag.js"></script>'
              ),
        },
        {
          src: "./public/favicon.ico",
          dest: "./build",
        },
      ],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment:true
    }),
    serve({
      host: "localhost",
      port: 3337,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      open: false,
      contentBase: 'build'
    }),
    livereload({
      watch: 'build',
      verbose: true,
      delay: 2500
    })
  ],
};
