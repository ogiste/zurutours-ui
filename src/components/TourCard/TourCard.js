import React from 'react';
import {Card, Label, Icon,} from 'semantic-ui-react';


const TourCard = props => {
  const {title} = props;
  const cost = (
      <Label as='a' ribbon color='red'>
        <Icon name='money'/>
        14,000.00
      </Label>
  );
  return (
      <Card fluid color='red' header='Hot Air Ballons - The Mara Horizon'
            meta="14th Sept 2019 - 19th Sept 2019. Tour Capacity: 20"
            description="See God's view of the savannah and fall in love as you watch the landscape come to life."
            image='https://media.gadventures.com/media-server/cache/7b/85/7b855d87173df740d5cbb539147285a6.jpg'
            extra={cost}
      />);
};

export default TourCard;
