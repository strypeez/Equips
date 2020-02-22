import { connect } from 'react-redux'

import Stats from './Stats'

const mapStateToProps = (state) => {
  return {
    equipped: state.equipped
  }
}

const StatsContainer = connect(
  mapStateToProps
)(Stats)

export default StatsContainer
