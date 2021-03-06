import React from 'react';
import { connect } from 'react-redux';
import { getPlayerWardmap } from 'actions';
import { playerWardmap } from 'reducers';
import Heading from 'components/Heading';
import Heatmap from 'components/Heatmap';
import { Row, Col } from 'react-flexbox-grid';
import strings from 'lang';
import { TableFilterForm } from 'components/Form';

const getData = (props) => {
  props.getPlayerWardmap(props.playerId, props.location.query);
};

class RequestLayer extends React.Component {
  componentWillMount() {
    getData(this.props);
  }

  componentWillUpdate(nextProps) {
    if (this.props.playerId !== nextProps.playerId || this.props.location.key !== nextProps.location.key) {
      getData(nextProps);
    }
  }

  render() {
    return (<div>
      <TableFilterForm />
      <Heading title={strings.heading_wardmap} />
      <Row>
        <Col md>
          <Heading title={strings.th_ward_observer} />
          <Heatmap points={this.props.data.obs} />
        </Col>
        <Col md>
          <Heading title={strings.th_ward_sentry} />
          <Heatmap points={this.props.data.sen} />
        </Col>
      </Row>
    </div>);
  }
}

const mapStateToProps = (state, { playerId }) => ({
  data: playerWardmap.getPlayerWardmap(state, playerId),
  loading: playerWardmap.getLoading(state, playerId),
  error: playerWardmap.getError(state, playerId),
});

const mapDispatchToProps = dispatch => ({
  getPlayerWardmap: (playerId, options) => dispatch(getPlayerWardmap(playerId, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestLayer);
