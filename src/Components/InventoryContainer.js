import { connect } from 'react-redux';
import { unequip } from '../Redux/actions';

import Inventory from './Inventory';

const mapStateToProps = (state) => {
  return {
    inventory: state.inventory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    unequip: (index, item, equipType) => {
      dispatch(unequip(index, item, equipType))
    }
  }
}

const InventoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);

export default InventoryContainer
