export type buildPaths = {
  entry: string;
  html: string;
  output: string;
  src: string;
  public: string;
};

export type buildMode = 'production' | 'development';

export type buildOptions = {
  port: number;
  paths: buildPaths;
  mode: buildMode;
};
