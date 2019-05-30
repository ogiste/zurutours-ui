import React from 'react';
import {TourForm} from '../../components/TourForm/TourForm';
import {connect} from 'react-redux';
import {createTour, fetchTour, updateTour} from '../../actions/toursActions';

class EditToursPage extends React.Component {

  componentDidMount() {
    this.props.fetchTour(this.props.match.params.tourId);
  }

  render() {
    const {loading, errorMessage, message, authenticated, current_tour} = this.props;
    return (<TourForm
        message={message}
        authenticated={authenticated}
        loading={loading}
        current_tour={current_tour}
        createTour={this.props.createTour}
        updateTour={this.props.updateTour}
        errorMessage={errorMessage} tourEdit/>);
  }

}

export const mapStateToProps = ({auth, tour}) => {
  return {
    authenticated: auth.authenticated,
    loading: tour.loading,
    errorMessage: tour.errorMessage,
    tours: tour.tours,
    current_tour: tour.current_tour,
    message: tour.message,
  };
};

export default connect(mapStateToProps, {
  fetchTour,
  createTour,
  updateTour,
})(EditToursPage);