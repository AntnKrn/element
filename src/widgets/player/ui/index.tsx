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
  const currentBeat = useSelector((state: RootState) => state.currentBit);

  useEffect(() => {
    if (currentBeat.beatName !== '') {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
      setIsPaused(false);
    };
  }, [currentBeat.beatName]);

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
    if (currentBeat.beatName !== '') {
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
      {currentBeat.beatName === '' ? null : (
        <PlayerWrapper>
          <Description>
            <PlayerImg src={currentBeat.beatImgSrc} />
            <span>{currentBeat.beatName}</span>
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
            src={currentBeat.beatAudioSrc}
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
