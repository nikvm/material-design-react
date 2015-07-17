import React from 'react';
import mdlHook from '../../decorator/mdl-hook';

@mdlHook({
  displayName: 'MDRCardMedia',
  blockClassName: 'mdl-card__media'
})
class CardMedia extends React.Component {

  render() {
    return <div {...this.props}/>;
  }
}

export default CardMedia;