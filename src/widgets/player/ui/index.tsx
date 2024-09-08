import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store/store';

import { StatusBar } from './statusBar';
import {
  Bar,
  Description,
  Favorite,
  FavoriteWrapper,
  Pause,
  Play,
  PlayerImg,
  PlayersButtons,
  PlayerWrapper,
  RewindMinus,
  RewindPlus,
} from './style';

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>();
  const [bitDuration, setBitDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const currentBit = useSelector((state: RootState) => state.currentBit);

  useEffect(() => {
    if (currentBit.bitName !== '') {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
      setIsPaused(false);
    };
  }, [currentBit.bitName]);

  const onLoadedMetadataHandler = () => {
    setBitDuration(audioRef.current.duration);
  };

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    audioRef.current.currentTime = +e.target.value;
    setCurrentTime(+e.target.value);
  };

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    audioRef.current.pause();
    setTimeout(() => {
      audioRef.current.play();
      setCurrentTime(+e.target.value);
      setIsPaused(false);
    }, 250);
  };

  const onClickPlayOrPause = () => {
    const setPauseOrPlay = (prevIsPaused: boolean) => {
      prevIsPaused ? audioRef.current.play() : audioRef.current.pause();
      return !prevIsPaused;
    };
    if (currentBit.bitName !== '') {
      setIsPaused(prev => setPauseOrPlay(prev));
    }
  };

  const onTimeUpdateHandler = () => {
    if (Math.trunc(currentTime) !== Math.trunc(audioRef.current?.currentTime)) {
      setCurrentTime(audioRef.current?.currentTime);
    }
  };

  const onEndedHandler = () => {
    setIsPaused(true);
  };

  const onClickRewindMinus = () => {
    audioRef.current.currentTime -= 15;
  };

  const onClickRewindPlus = () => {
    audioRef.current.currentTime += 15;
  };
  return (
    <>
      {currentBit.bitName === '' ? null : (
        <PlayerWrapper>
          <Description>
            <PlayerImg src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_600,h_600/https://vinyl-record.ru/wp-content/uploads/2020/12/Disk-12-blc2-1-1.jpg" />
            <span>Bit name</span>
          </Description>
          <PlayersButtons>
            <RewindMinus onClick={onClickRewindMinus} />
            <div onClick={onClickPlayOrPause}>
              {isPaused ? <Play /> : <Pause />}
            </div>
            <RewindPlus onClick={onClickRewindPlus} />
          </PlayersButtons>

          <audio
            ref={audioRef}
            preload="metadata"
            src={currentBit.bitSrc}
            onLoadedMetadata={onLoadedMetadataHandler}
            onAbortCapture={() => {}}
            onTimeUpdate={onTimeUpdateHandler}
            onEnded={onEndedHandler}
          />
          <FavoriteWrapper>
            <Favorite />
          </FavoriteWrapper>

          <Bar>
            <StatusBar
              currentTime={currentTime}
              bitDuration={bitDuration}
              onChangeInputHandler={onChangeInputHandler}
              onInputHandler={onInputHandler}
            />
          </Bar>
        </PlayerWrapper>
      )}
    </>
  );
};
