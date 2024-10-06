import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/app/store/store';
import { BitItem } from '@/entities/bitItem';
import { IYear } from '@/widgets/header/model/interfaces';

import { getBeatNameFromFolderString } from '../helpers/getBeatNameFromFolderString';

import { BitListWrapper } from './style';

type IResponseGetBeatsByYear = string[];

export const BitList = () => {
  const currentYear = useSelector((state: RootState) => state.currentYear);
  const [beatsArray, setBeatsArray] = useState<IResponseGetBeatsByYear | []>(
    [],
  );

  useEffect(() => {
    const getBeats = async (year: IYear) => {
      fetch('http://localhost:8080/tracks/' + year.year)
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.links !== undefined) {
            setBeatsArray(res.links);
          }
        });
    };

    getBeats(currentYear);
  }, [currentYear]);
  return (
    <BitListWrapper>
      {beatsArray.length !== 0
        ? beatsArray.map((el: string) => {
            return (
              <BitItem
                key={String(el)}
                bitsrc={`https://storage.googleapis.com/23beats/${el}${getBeatNameFromFolderString(el)}`}
              />
            );
          })
        : null}
    </BitListWrapper>
  );
};
