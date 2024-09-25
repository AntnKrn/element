import { useDispatch } from 'react-redux';

import { changeCurrentPlayingBit } from '../model/bitSlice';

import { BitImg, BitInfo, BtnPlayOnImg, ImgWrapper } from './style';

interface IBitt {
  bitsrc: string;
}

export const BitItem = (bit: IBitt) => {
  const dispatch = useDispatch();

  const onClickPlay = () => {
    dispatch(
      changeCurrentPlayingBit({
        bitName: bit.bitsrc,
        bitSrc: bit.bitsrc,
      }),
    );
  };

  return (
    <div>
      <ImgWrapper>
        <BtnPlayOnImg onClick={onClickPlay} />
        <BitImg src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_600,h_600/https://vinyl-record.ru/wp-content/uploads/2020/12/Disk-12-blc2-1-1.jpg" />
      </ImgWrapper>
      <BitInfo>
        <span>Bit name</span>
      </BitInfo>
    </div>
  );
};
