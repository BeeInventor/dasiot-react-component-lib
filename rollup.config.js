import fs from 'fs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser  from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';

const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [
        ...fileNames,
        ...getFiles(path, extensions, excludeExtensions),
      ];

      return;
    }

    if (
      !excludeExtensions.some((exclude) => dir.endsWith(exclude)) &&
      extensions.some((ext) => dir.endsWith(ext))
    ) {
      fileNames.push(path);
    }
  });

  return fileNames;
};

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = ['.stories.tsx', '.types.ts'];

export default [
  {
    input: [
      './src/index.ts',
      // ...getFiles('./src/components', extensions, excludeExtensions),
    ],
    output: {
      dir: 'lib',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      url({
        limit: 10 * 1024,
        emitFiles: true,
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
    ],
    external: [
      'react',
      'react-dom',
      'prop-types',
      'classnames',
      'date-fns',
      '@emotion/react',
      '@emotion/styled',
      '@mui/icons-material',
      '@mui/material',
      '@mui/styles',
    ],
  },
  {
    input: 'lib/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'esm' }],
    external: [],
    plugins: [dts()],
  },
];
