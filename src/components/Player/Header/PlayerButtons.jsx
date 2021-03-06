import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ActionUpdate from 'material-ui/svg-icons/action/update';
import ReactTooltip from 'react-tooltip';
import styles from './PlayerButtons.css';

// TODO localize strings
export default () => (
  <CardActions>
    <div className={styles.container}>
      <div data-tip data-for="update">
        <FlatButton
          disabled
          icon={<ActionUpdate />}
          style={{ minWidth: 50 }}
        />
      </div>
      <ReactTooltip id="update" place="left" type="light" effect="float">
        <div style={{ textAlign: 'left' }}>
          Refresh Match History:
          If this player has recently changed their match privacy setting,
          this will queue a scan to find the missing matches.
        </div>
      </ReactTooltip>
      <FlatButton
        disabled
        label="Ask a Coach"
        labelPosition="before"
        icon={<img src="/assets/images/dotacoach-32x24.png" alt="DotaCoach" />}
        style={{ marginLeft: 15 }}
      />
    </div>
  </CardActions>
);
