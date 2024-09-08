import { ChangeEvent } from 'react';

import { secondsToTime } from '../../helpers/convertSecondToTime';

import { Input, StatusBarWrapper, Time } from './style';

interface IStatusBarProps {
  currentTime: number;
  bitDuration: number;
  onChangeInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const StatusBar = ({
  currentTime,
  bitDuration,
  onChangeInputHandler,
  onInputHandler,
}: IStatusBarProps) => {
  return (
    <StatusBarWrapper>
      <Time $marginSide="right">
        {secondsToTime(String(currentTime ? currentTime : 0))}
      </Time>
      <Input
        type="range"
        value={currentTime}
        min={0}
        max={Math.floor(bitDuration)}
        step={0.1}
        onChange={onChangeInputHandler}
        onInput={onInputHandler}
      />
      <Time $marginSide="left">{secondsToTime(String(bitDuration))}</Time>
    </StatusBarWrapper>
  );
};
