import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDR:CardMedia',
  blockClassName: 'mdl-card__media'
})
class CardMedia extends React.Component {

  render() {
    return <div {...this.props}/>;
  }
}

export default CardMedia;
