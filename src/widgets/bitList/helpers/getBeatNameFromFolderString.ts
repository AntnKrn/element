export const getBeatNameFromFolderString = (url: string) => {
  const startIdx = url.indexOf('/') + 1;
  const endIdx = url.lastIndexOf('/');
  const result = url.substring(startIdx, endIdx);
  return result + '.mp3';
};
