import webpack from 'webpack';

import { buildOptions } from './types/types';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';

export function buildWebpack(options: buildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === 'development';
  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      path: paths.output,
      filename: '[name].[contenthash].js',
      publicPath: '/',
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
