import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Message,} from 'semantic-ui-react';
import TourCard from '../../components/TourCard/TourCard';
import ToursPlaceholder from './ToursPlaceholder';

class Tours extends Component {

  render() {
    const {tours, authenticated, loading} = this.props;
    if (loading) {
      return <ToursPlaceholder/>;
    }
    if (Array.isArray(tours) && tours.length > 0) {
      const TourItems = tours.reverse().map(tour => (
          <Grid.Column>
            <TourCard tour={tour} authenticated={authenticated}/>
          </Grid.Column>
      ));
      return (
          <Grid columns={3} stackable>
            {TourItems}
          </Grid>
      );
    }
    return (
        <Grid columns="equal" stackable>
          <Grid.Column>
            <Message fluid style={{textAlign: 'center'}} info content="Create new Tours to see them here!"/>
          </Grid.Column>
        </Grid>
    );

  }
}

export const mapStateToProps = ({auth, tour}) => {
  return {
    authenticated: auth.authenticated,
    tours: tour.tours,
    loading: tour.loading,
  };
};

export default connect(
    mapStateToProps
)(Tours);
