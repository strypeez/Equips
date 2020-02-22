import { connect } from 'react-redux';
import { equip } from '../Redux/actions';

import Equipped from './Equipped';

const mapStateToProps = state => {
  return {
    equipped: state.equipped,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    equip: (index, item, equipType) => {
      dispatch(equip(index, item, equipType))
    }
  }
}

const EquippedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Equipped)

export default EquippedContainer;
