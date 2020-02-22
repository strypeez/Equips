import React from 'react';

import EquipArea from './EquipArea'

const Equipped = ({equip, equipped}) => {

  const equippedStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'lightGrey',
    gridRowStart: '2',
    gridColumnStart: '5',
    gridColumnEnd: 'span 3'
  }

  const equipGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridRowGap: '15px',
    marginBottom: '15px'
  }

  const titleStyle = {
    fontFamily: 'mono45-headline,monospace',
    fontWeight: '500',
    fontStyle: 'normal',
    marginTop: '10px',
    fontSize: '50px',
    color: "white",
    opacity: "0.5",
    marginBottom: '10px'
  }

  return(
    <div
      style={equippedStyle}>
      <div style={titleStyle}>EQUIPPED</div>
      <div style={equipGridStyle}>
        <EquipArea equipType = "helmet" equip = {equip} equipped = {equipped}/>
        <EquipArea equipType = "shoulder" equip = {equip} equipped = {equipped}/>
        <EquipArea equipType = "arms" equip = {equip} equipped = {equipped}/>
        <EquipArea equipType = "chest" equip = {equip} equipped = {equipped}/>
        <EquipArea equipType = "shoes" equip = {equip} equipped = {equipped}/>
        <EquipArea equipType = "weapon" equip = {equip} equipped = {equipped} />
      </div>
    </div>
  )
}

export default Equipped;
