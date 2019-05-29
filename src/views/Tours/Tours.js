import React, {Component} from 'react';
import {
  Grid,
  Placeholder,
  Segment
} from 'semantic-ui-react';
import TourCard from '../../components/TourCard/TourCard';

class Tours extends Component {
  render() {
    return (
        <Grid columns={3} stackable>
          <Grid.Column>
            <TourCard/>
          </Grid.Column>

          <Grid.Column>
            <TourCard/>
          </Grid.Column>

          <Grid.Column>
            <TourCard/>
          </Grid.Column>

          <Grid.Column>
              <TourCard/>
          </Grid.Column>

          <Grid.Column>
              <TourCard/>
          </Grid.Column>

          <Grid.Column>
              <TourCard/>
          </Grid.Column>

          <Grid.Column>
              <TourCard/>
          </Grid.Column>

          <Grid.Column>
              <TourCard/>
          </Grid.Column>

          <Grid.Column>
              <TourCard/>
          </Grid.Column>

          <Grid.Column>
              <TourCard/>
          </Grid.Column>
        </Grid>
    );
  }
}

export default Tours;
