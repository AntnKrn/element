import { BitItem } from '@/entities/bitItem';

import { BitListWrapper } from './style';

export const BitList = () => {
  return (
    <BitListWrapper>
      {[1, 2, 3, 4, 5].map(el => {
        return <BitItem key={el} />;
      })}
    </BitListWrapper>
  );
};
