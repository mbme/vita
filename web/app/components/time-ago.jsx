import { createReactComponent, PropTypes } from 'viter/viter';
import moment from 'moment';

function formatDate (timestamp) {
  return moment(timestamp * 1000).fromNow();
}

export default createReactComponent({
  displayName: 'TimeAgo',

  propTypes: {
    timestamp: PropTypes.number.isRequired,
  },

  getInitialState () {
    return {
      date: this.getFormattedDate(),
    };
  },

  componentWillMount () {
    this.updateInterval = setInterval(
      () => this.setState({ date: this.getFormattedDate() }),
      60 * 1000
    );
  },

  componentWillUnmount () {
    clearInterval(this.updateInterval);
  },

  getFormattedDate () {
    return formatDate(this.props.timestamp);
  },

  render () {
    return <time>{this.state.date}</time>;
  },
});
