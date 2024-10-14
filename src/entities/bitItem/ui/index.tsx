import { useDispatch } from 'react-redux';

import { getBeatNameFromFolderString } from '@/widgets/bitList/helpers/getBeatNameFromFolderString';

import { changeCurrentPlayingBit } from '../model/bitSlice';

import {
  BeatWrapper,
  BitImg,
  BitInfo,
  BtnPlayOnImg,
  ImgWrapper,
} from './style';

interface IBitt {
  beatFolderSrc: string;
}

export const BitItem = (bit: IBitt) => {
  const dispatch = useDispatch();
  const beatName = getBeatNameFromFolderString(bit.beatFolderSrc);

  const onClickPlay = () => {
    dispatch(
      changeCurrentPlayingBit({
        beatAudioSrc:
          `https://storage.googleapis.com/23beats/${bit.beatFolderSrc}${beatName}` +
          '.mp3',
        beatImgSrc:
          `https://storage.googleapis.com/23beats/${bit.beatFolderSrc}${beatName}` +
          '.png',
        beatName: beatName,
      }),
    );
  };

  return (
    <BeatWrapper>
      <ImgWrapper>
        <BtnPlayOnImg onClick={onClickPlay} />
        <BitImg
          src={
            `https://storage.googleapis.com/23beats/${bit.beatFolderSrc}${beatName}` +
            '.png'
          }
        />
      </ImgWrapper>
      <BitInfo>
        <span>{beatName}</span>
      </BitInfo>
    </BeatWrapper>
  );
};
