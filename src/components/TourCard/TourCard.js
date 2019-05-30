import React from 'react';
import {Button, Card, Icon, Label,} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import moment from 'moment';


const TourCard = props => {
  const {tour, authenticated} = props;
  const cardActions = (
      <div>
        <Label as='a' ribbon style={{backgroundColor: '#ffbd59'}}>
          <Icon name='money'/>
          {tour.cost} KSH
        </Label>
        <br/> <br/>
        {authenticated ? (
            <Button.Group size="mini">
              <Button as={Link} to={`/edit-tour/${tour.id}`} basic color="teal"> Update Tour Details</Button>
              <Button basic color="orange"> Delete Tour</Button>
            </Button.Group>) : ''}
      </div>

  );
  const metaDescription = (
      <div>
        <span>{moment(tour.start_datetime).format('Do-MMM-YYYY')} - {moment(tour.end_datetime).format('Do-MMM-YYYY')}</span>
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
