import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

import { buildOptions } from './types/types';

export function buildPlugins({
  paths,
  mode,
}: buildOptions): Configuration['plugins'] {
  const isDev = mode === 'development';

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.ico'),
    }),
  ];

  if (isDev) {
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
}
