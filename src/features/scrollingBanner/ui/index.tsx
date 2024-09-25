import Styled from './style';

const text =
  '23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  23BEATS  •  ';

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
