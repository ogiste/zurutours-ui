import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import {createTour, updateTour} from '../../actions/toursActions';
import moment from 'moment';

export class TourForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cost: '',
      capacity: '',
      description: '',
      start_datetime: '',
      end_datetime: '',
      errorMessage: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps,) {
    if (nextProps.errorMessage) {
      this.setState({errorMessage: nextProps.errorMessage});
    }
    if (nextProps.current_tour && nextProps.tourEdit) {
      this.setState({
        title: nextProps.current_tour.title,
        cost: nextProps.current_tour.cost,
        capacity: nextProps.current_tour.capacity,
        description: nextProps.current_tour.description,
        start_datetime: moment(nextProps.current_tour.start_datetime).format('YYYY-MM-DD'),
        end_datetime: moment(nextProps.current_tour.end_datetime).format('YYYY-MM-DD'),
      });
    }
    return null;
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value,});
  }

  handleSubmit(e) {
    e.preventDefault();

    const formProps = {
      title: this.state.title,
      cost: this.state.cost,
      capacity: this.state.capacity,
      description: this.state.description,
      start_datetime: moment(this.state.start_datetime).format('YYYY-MM-DDThh:mm'),
      end_datetime: moment(this.state.end_datetime).format('YYYY-MM-DDThh:mm'),
    };
    if (this.props.tourEdit) {
      return this.props.updateTour({tourId: this.props.current_tour.id, formProps});
    }
    this.props.createTour(formProps, this.props.history);
  }

  render() {
    const {title, cost, capacity, description, start_datetime, end_datetime,} = this.state;

    const {loading, errorMessage, message, authenticated, tourEdit} = this.props;
    if (!authenticated) {
      return (
          <Message
              visible
              negative
              content="You are not signed in. Please sign in to use all available features. "
          />
      );
    }

    return (
        <div className="login-form">
          <Grid
              textAlign="center"
              style={{height: '100%'}}
              verticalAlign="middle"
          >
            <Grid.Column style={{maxWidth: 450}}>
              <Header
                  as="h2"
                  textAlign="center"
                  style={{
                    color: 'rgb(254,253,255)',
                    fontFamily: 'Josefin Sans Bold'
                  }}
              >
                {!tourEdit ? 'Create a tour' : 'Edit Tour Details'}
              </Header>

              <Form size="large" loading={loading} onSubmit={this.handleSubmit}>
                <Segment stacked>
                  {message ? (
                      <Message
                          visible
                          positive
                          content={message}
                      />
                  ) : (
                      ''
                  )}
                  <Form.Input
                      fluid
                      icon="pencil"
                      name="title"
                      iconPosition="left"
                      placeholder="A Cruise Down Memory Lane"
                      type="text"
                      value={title}
                      onChange={this.handleChange}
                  />
                  {errorMessage.title ? (
                      <Message
                          visible
                          error
                          content={errorMessage.title[0]}
                      />
                  ) : (
                      ''
                  )}

                  <Form.Input
                      fluid
                      icon="money"
                      name="cost"
                      iconPosition="left"
                      placeholder="Cost Per Person"
                      type="number"
                      value={cost}
                      onChange={this.handleChange}
                  />
                  {errorMessage.cost ? (
                      <Message
                          visible
                          error
                          content={errorMessage.cost[0]}
                      />
                  ) : (
                      ''
                  )}
                  <Form.Input
                      fluid
                      icon="bed"
                      name="capacity"
                      iconPosition="left"
                      placeholder="Capacity"
                      type="number"
                      value={capacity}
                      onChange={this.handleChange}
                  />
                  {errorMessage.capacity ? (
                      <Message
                          visible
                          error
                          content={errorMessage.capacity[0]}
                      />
                  ) : (
                      ''
                  )}
                  <Form.Input
                      fluid
                      icon="pencil"
                      name="description"
                      iconPosition="left"
                      control="textarea"
                      placeholder="Description"
                      type="text"
                      value={description}
                      onChange={this.handleChange}
                  />
                  {errorMessage.description ? (
                      <Message
                          visible
                          error
                          content={errorMessage.description[0]}
                      />
                  ) : (
                      ''
                  )}

                  <Form.Input
                      fluid
                      icon="clock"
                      name="start_datetime"
                      iconPosition="left"
                      placeholder="Tour start date"
                      type="date"
                      value={start_datetime}
                      onChange={this.handleChange}
                  />
                  {errorMessage.start_date ? (
                      <Message
                          visible
                          error
                          content={errorMessage.start_date[0]}
                      />
                  ) : (
                      ''
                  )}
                  <Form.Input
                      fluid
                      icon="clock"
                      name="end_datetime"
                      iconPosition="left"
                      placeholder="Tour end date"
                      type="date"
                      value={end_datetime}
                      onChange={this.handleChange}
                  />
                  {errorMessage.end_date ? (
                      <Message
                          visible
                          error
                          content={errorMessage.end_date[0]}
                      />
                  ) : (
                      ''
                  )}

                  <Button
                      fluid
                      size="large"
                      type="submit"
                      style={{
                        color: '#f0f5fa',
                        backgroundColor: 'rgb(95, 179, 219)'
                      }}
                  >
                    {!tourEdit ? 'Create a tour' : 'Update Tour Details'}
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

TourForm.propTypes = {
  errorMessage: PropTypes.object,
  loading: PropTypes.bool,
  tourEdit: PropTypes.bool,
  authenticated: PropTypes.bool.required,
  createTour: PropTypes.func,
  updateTour: PropTypes.func,
};

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

export default connect(
    mapStateToProps,
    {createTour, updateTour}
)(TourForm);
