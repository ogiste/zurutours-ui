import React from 'react';
import {Container, Header,} from 'semantic-ui-react';
import Tours from '../Tours/Tours';
import {fetchTours} from '../../actions/toursActions';
import {connect} from 'react-redux';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchTours();
  }

  render() {
    return (
        <div>
          <Header
              as="h1"
              className="homeHeader"
              style={{
                color: '#171717',
                fontFamily: 'Josefin Sans Bold'
              }}
          >
            Zuru Tours
            <Header.Subheader>
              Discover the beauty of nature. Your first step on a journey to see the world and it's beauty.
              Making memories and enjoying breath-taking moments.
            </Header.Subheader>
          </Header>
          <Header
              as="h1"
              style={{
                color: 'rgba(154,244,245,0.35)',
              }}
          >
          </Header>

          <Container>
            <Tours/>
          </Container>
        </div>

    );
  }

}

export default connect(null, {
  fetchTours
})(HomePage);
