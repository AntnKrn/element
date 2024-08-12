import ReactRefreshTypeScript from 'react-refresh-typescript';
import { ModuleOptions } from 'webpack';

import { buildOptions } from './types/types';

export function buildLoaders(options: buildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
    exclude: /node_modules/,
  };

  const svgrLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const fontLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  };

  return [tsLoader, assetLoader, fontLoader, svgrLoader];
}
