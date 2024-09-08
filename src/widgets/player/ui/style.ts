import styled from 'styled-components';

import FavoriteSVG from '@/shared/assets/icons/favorite.svg';
import PauseSVG from '@/shared/assets/icons/pause.svg';
import PlaySVG from '@/shared/assets/icons/play.svg';
import RewindMinusSVG from '@/shared/assets/icons/rewindMinus.svg';
import RewindPlusSVG from '@/shared/assets/icons/rewindPlus.svg';
import { MAX_WIDTH_LG } from '@/shared/consts/resolutionBreakpoints';

export const PlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90px;
  padding: 0 40px;
  background-color: #adadad;

  @media ${MAX_WIDTH_LG} {
    height: 45px;
    padding: 0 10px;
  }
`;

export const PlayersButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media ${MAX_WIDTH_LG} {
    margin-left: auto;
  }
`;

export const RewindPlus = styled(RewindPlusSVG)`
  width: 24px;
  height: 24px;

  @media ${MAX_WIDTH_LG} {
    display: none;
  }
`;

export const RewindMinus = styled(RewindMinusSVG)`
  width: 24px;
  height: 24px;

  @media ${MAX_WIDTH_LG} {
    display: none;
  }
`;

export const Play = styled(PlaySVG)`
  width: 24px;
  height: 24px;
`;

export const Pause = styled(PauseSVG)`
  width: 24px;
  height: 24px;
`;

export const Favorite = styled(FavoriteSVG)`
  float: right;
  width: 24px;
  height: 24px;
`;

export const FavoriteWrapper = styled.div`
  width: 200px;

  @media ${MAX_WIDTH_LG} {
    width: auto;
    padding: 0 0 4px 10px;
  }
`;

export const PlayerImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const Bar = styled.div`
  position: absolute;
  right: 0;
  bottom: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 650px;
  height: 4px;
  margin: 0 auto;

  @media ${MAX_WIDTH_LG} {
    top: -3px;
    width: 100vw;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;

  @media ${MAX_WIDTH_LG} {
    width: auto;
  }
`;
