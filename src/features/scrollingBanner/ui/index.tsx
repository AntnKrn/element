import Styled from './style';

const text =
  'ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ELEMENT  •  ';

export const ScrollingBanner = () => {
  return (
    <Styled.ScrollingBannerContainer>
      <Styled.ScrollingBannerWrapper>
        <Styled.ScrollingBannerText>{text}</Styled.ScrollingBannerText>
        <Styled.ScrollingBannerText>{text}</Styled.ScrollingBannerText>
      </Styled.ScrollingBannerWrapper>
    </Styled.ScrollingBannerContainer>
  );
};
