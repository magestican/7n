import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BackgroundImageStyle ,TitleContainer, SevenNewsLogo,VideoTileStyle,Title} from '../../style/shared/videoTile.style';
import sevenNewsLogo from '../../assets/images/logo.png';

@connect()
export default class VideoTile extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {name,imageUrl}  = this.props.show;

    return <div className="video-tile">
      <VideoTileStyle>
          <BackgroundImageStyle  src={imageUrl}></BackgroundImageStyle>
          <TitleContainer><SevenNewsLogo src={sevenNewsLogo}></SevenNewsLogo>
          <Title> <div>{name}</div></Title>
      </TitleContainer>
      </VideoTileStyle>
    </div>
  }
}
