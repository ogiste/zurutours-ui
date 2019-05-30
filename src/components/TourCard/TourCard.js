import React from 'react';
import {Button, Card, Icon, Label,} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {connect} from 'react-redux';
import {deleteTour} from '../../actions/toursActions';
import ConfirmModal from '../ConfirmationModal/ConfirmModal';


class TourCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleDeleteModalOpen = this.handleDeleteModalOpen.bind(this);
    this.handleDeleteModalClose = this.handleDeleteModalClose.bind(this);
    this.handleDeleteTour = this.handleDeleteTour.bind(this);
  }

  handleDeleteModalOpen() {
    this.setState({
      open: true
    });
  };

  handleDeleteModalClose() {
    this.setState({
      open: false
    });
    console.log('deleteModalClose', this.state.open);
  };

  handleDeleteTour() {
    this.props.deleteTour(this.props.tour.id);
  };

  render() {
    const {tour, authenticated} = this.props;
    const cardActions = (
        <div>
          <Label as='a' ribbon style={{backgroundColor: '#ffbd59'}}>
            <Icon name='money'/>
            {tour.cost} KSH
          </Label>
          <br/> <br/>
          {authenticated ? (
              <Button.Group size="mini">
                <Button as={Link} to={`/edit-tour/${tour.id}`} basic color="teal"> Edit Details</Button>
                <Button basic color="orange" onClick={() => this.handleDeleteModalOpen()}> Delete Tour</Button>
                <ConfirmModal
                    title={`Delete ${tour.title}`}
                    content="Are you sure you want to remove this Tour?"
                    handleClose={this.handleDeleteModalClose}
                    handleConfirmation={this.handleDeleteTour}
                    open={this.state.open}/>
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
  }
}

export default connect(
    null,
    {deleteTour}
)(TourCard);
