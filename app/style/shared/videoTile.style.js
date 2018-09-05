import styled from "styled-components";
const titleHeaderFontSize = '20px';
  export const VideoTileStyle = styled.div`
    height: auto;
    max-width: 630px;
    max-height: 354px;
    float: left;
    width: auto;
`

export  const BackgroundImageStyle = styled.img`
      display: inline-block;
      width: 100%;
      height:auto;
  `;

export const Title = styled.div`
  font-size: ${titleHeaderFontSize};
  display: flex;
  align-items: center;
  height: 100%;
`
export const TitleContainer = styled.div`
color: white;
height: 100%;
max-height: 94px;
background-color: rgba(0,0,0,0.7);
float: left;
width:100%;
position: relative;
bottom: calc(0px + 94px) !important;
`;

export const SevenNewsLogo = styled.img`
  float:left;
  height: 100%;
`
