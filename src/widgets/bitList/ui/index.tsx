import { BitItem } from '@/entities/bitItem';

import { BitListWrapper } from './style';

export const BitList = () => {
  return (
    <BitListWrapper>
      {[
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
        'https://cdn.freesound.org/previews/751/751871_11532701-lq.mp3',
        'https://cdn.freesound.org/previews/752/752456_3905081-lq.mp3',
      ].map((el, index) => {
        return <BitItem key={String(el + index)} bitsrc={el} />;
      })}
    </BitListWrapper>
  );
};
