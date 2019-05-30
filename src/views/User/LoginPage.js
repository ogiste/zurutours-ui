import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signIn} from '../../actions/authActions';
import {Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';
import {getAuthToken} from '../../utils/setAuthToken';
import {Redirect} from 'react-router';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      username: '',
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
      password: this.state.password,
      username: this.state.username,
    };

    this.props.signIn(formProps, this.props.history);
  }

  render() {
    const {password, username, errorMessage,} = this.state;
    const {loading, authenticated} = this.props;
    if (authenticated) {
      return (<Redirect to="/"/>);
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
                Sign In
              </Header>
              {getAuthToken() ? <Message
                  success
                  header='Signed In Successfully.'
                  content='Signed In Successfully.'
              /> : ''}

              <Form size="large" loading={loading} onSubmit={this.handleSubmit}>
                <Segment stacked>

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

                  <Button
                      fluid
                      size="large"
                      type="submit"
                      style={{
                        color: '#f0f5fa',
                        backgroundColor: 'rgb(95, 179, 219)'
                      }}
                  >
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message
                  style={{
                    color: '#8f7368',
                    fontFamily: '\'Josefin Sans Light\', sans-serif',
                    backgroundColor: '#f0f5fa'
                  }}
              >
                Don't have an account? <Link to="/register">Sign Up</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}

LoginPage.propTypes = {
  user: PropTypes.object,
  errorMessage: PropTypes.object,
  loading: PropTypes.bool,
  signIn: PropTypes.func.isRequired,
};

export const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated,
    loading: auth.loading,
    errorMessage: auth.errorMessage,
    user: auth.user,
  };
};

export default connect(
    mapStateToProps,
    {signIn}
)(LoginPage);
