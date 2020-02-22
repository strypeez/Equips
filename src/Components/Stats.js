import React from 'react';

const Stats = ({equipped}) => {

  const StatsStyle = {
    width: '100%',
    height: '60%',
    backgroundColor: 'orange',
    gridColumnStart: '2',
    gridColumnEnd: 'span 3',
    gridRowStart: '2',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center'
  }

  const flexStatsStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    fontFamily: 'mono45-headline,monospace',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '25px',
    opacity: '0.7',
    marginBottom: '10px'
  }

  const titleStyle = {
    fontFamily: 'mono45-headline,monospace',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: '50px',
    marginTop: '10px',
    marginBottom: '10px',
    color: "white",
    opacity: "0.5"
  }

  let atk = 0
  let range = 0
  let armor = 0
  let weight = 0

  //calculate ATK total
  atk = equipped.reduce((total, weapon) => {
    if (weapon !== 'empty') {
      return total + Number(weapon.atk)
    } else {
      return total + 0
    }
  }, 0)

  //calculate RANGE total
  range = equipped.reduce((total, weapon) => {
    if (weapon !== 'empty') {
      return total + Number(weapon.range)
    } else {
      return total + 0
    }
  }, 0)

  //calculate ARMOR total
  armor = equipped.reduce((total, weapon) => {
    if (weapon !== 'empty') {
      return total + Number(weapon.armor)
    } else {
      return total + 0
    }
  }, 0)

  //calculate WEIGHT total
  weight = equipped.reduce((total, weapon) => {
    if (weapon !== 'empty') {
      return total + Number(weapon.weight)
    } else {
      return total + 0
    }
  }, 0)

  return(
    <div style={StatsStyle}>
      <div style={titleStyle}>STATS</div>
      <div style={flexStatsStyle}>
        <div>ATK: {atk}</div>
        <div>RANGE: {range}</div>
        <div>ARMOR: {armor}</div>
        <div>WEIGHT: {weight}</div>
      </div>
    </div>
  )
}

export default Stats
