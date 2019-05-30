import React from 'react';
import {Button, Card, Icon, Label,} from 'semantic-ui-react';


const TourCard = props => {
  const {tour, authenticated} = props;
  const cardActions = (
      <div>
        <Label as='a' ribbon style={{backgroundColor: '#ffbd59'}}>
          <Icon name='money'/>
          {tour.cost} KSH
        </Label>
        <br/>
        {authenticated ? (
            <Button.Group>
              <Button basic info> Update Tour Details</Button>
              <Button basic color="orange"> Delete Tour</Button>
            </Button.Group>) : ''}
      </div>

  );
  const metaDescription = (
      <div>
        <span>{tour.start_datetime} - {tour.end_datetime}</span>
        <br/>
        <span><b>Tour Capacity: {tour.capacity}</b></span>
      </div>
  );
  return (
      <Card fluid color='red' header={tour.title}
            meta={metaDescription}
            description={tour.description}
            image='https://media.gadventures.com/media-server/cache/7b/85/7b855d87173df740d5cbb539147285a6.jpg'
            extra={cardActions}
      />);
};

export default TourCard;
