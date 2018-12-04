import Button from '../components/Buttons';
import getRandomColor from '../lib/getRandomColor';
import * as actions from '../actions';
import {connect} from 'react-redux';

const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(Button);
