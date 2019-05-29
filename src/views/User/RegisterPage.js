import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signUp} from '../../actions/authActions';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

export class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      username: '',
      phone: '',
      errorMessage: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage) {
      this.setState({errorMessage: nextProps.errorMessage});
    }
    return null;
  }

  handleChange(e, {name, value}) {
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const formProps = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      phone: this.state.phone,
    };

    this.props.signUp(formProps, this.props.history);
  }

  render() {
    const {email, name, password, first_name, last_name, phone, username, errorMessage} = this.state;

    const {user, loading} = this.props;

    return (
        <div className="login-form">
          {/*<style>*/}
          {/*  {`*/}
          {/*    body > div,*/}
          {/*    body > div > div,*/}
          {/*    body > div > div > div.login-form {*/}
          {/*      height: 90%;*/}
          {/*    }*/}
          {/*  `}*/}
          {/*</style>*/}
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
                Register for an account
              </Header>
              {user ? <Message
                  success
                  header='Your user registration was successful'
                  content='You may now log-in with the email you have chosen'
              /> : ''}

              <Form size="large" loading={loading} onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input
                      fluid
                      icon="user"
                      name="email"
                      iconPosition="left"
                      placeholder="E-mail address"
                      type="email"
                      value={email}
                      onChange={this.handleChange}
                  />
                  {errorMessage.email ? (
                      <Message
                          visible
                          error
                          content={errorMessage.email[0]}
                      />
                  ) : (
                      ''
                  )}

                  <Form.Input
                      fluid
                      icon="user"
                      name="first_name"
                      iconPosition="left"
                      placeholder="First Name"
                      type="text"
                      value={first_name}
                      onChange={this.handleChange}
                  />
                  {errorMessage.first_name ? (
                      <Message
                          visible
                          error
                          content={errorMessage.first_name[0]}
                      />
                  ) : (
                      ''
                  )}
                  <Form.Input
                      fluid
                      icon="user"
                      name="last_name"
                      iconPosition="left"
                      placeholder="Last Name"
                      type="text"
                      value={last_name}
                      onChange={this.handleChange}
                  />
                  {errorMessage.last_name ? (
                      <Message
                          visible
                          error
                          content={errorMessage.last_name[0]}
                      />
                  ) : (
                      ''
                  )}

                  <Form.Input
                      fluid
                      icon="user"
                      name="username"
                      iconPosition="left"
                      placeholder="Username"
                      type="text"
                      value={username}
                      onChange={this.handleChange}
                  />
                  {errorMessage.username ? (
                      <Message
                          visible
                          error
                          content={errorMessage.username[0]}
                      />
                  ) : (
                      ''
                  )}
                  <Form.Input
                      fluid
                      icon="lock"
                      name="password"
                      iconPosition="left"
                      placeholder="Password"
                      type="password"
                      value={password}
                      onChange={this.handleChange}
                  />
                  {errorMessage.password ? (
                      <Message
                          visible
                          error
                          content={errorMessage.password[0]}
                      />
                  ) : (
                      ''
                  )}
                  <Form.Input
                      fluid
                      icon="phone"
                      name="phone"
                      iconPosition="left"
                      placeholder="Phone number"
                      type="text"
                      value={phone}
                      onChange={this.handleChange}
                  />
                  {errorMessage.phone ? (
                      <Message
                          visible
                          error
                          content={errorMessage.phone[0]}
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
                    Register
                  </Button>
                </Segment>
              </Form>
              <Message
                  style={{
                    color: '#8f7368',
                    fontFamily: '\'Muli\', sans-serif',
                    backgroundColor: '#f0f5fa'
                  }}
              >
                Already have an account? <Link to="/login">Sign in</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

RegisterPage.propTypes = {
  user: PropTypes.object,
  errorMessage: PropTypes.object,
  loading: PropTypes.bool,
  signUp: PropTypes.func.isRequired,
};

export const mapStateToProps = ({auth}) => {
  return {
    loading: auth.loading,
    errorMessage: auth.errorMessage,
    user: auth.user,
  };
};

export default connect(
    mapStateToProps,
    {signUp}
)(RegisterPage);
