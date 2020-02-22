import React from 'react';
import Types from '../../Types';

import { useDrag } from 'react-dnd';

import MetalArmsIcon from '../../SVGIcons/MetalArmsIcon.svg'
import LeatherArmIcon from '../../SVGIcons/LeatherArm.svg'



const Arms = ({backgroundColor, name, index, atk, range, armor, weight, equipTypes}) => {

  //styles for component
  const weaponStyle = {
    width: '100px',
    height: '100px',
    justifySelf: 'center'
  }

  //declaration of variables
  let iconToUse;

  //switch for each item
  switch(name) {
    case "metalArms":
      iconToUse = MetalArmsIcon
      break;
    case "leatherArms":
      iconToUse = LeatherArmIcon
      break;
    default:
      break;
  }

  //ReactDND hook for dragging
  const [, drag] = useDrag({
    item: {type: Types.ARMS},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      itemType: monitor.getItemType(),
      dragItem: monitor.getItem()
    }),
    begin: () => {
      //data that is passed to the drop area
      const weaponObject = {
        name: name,
        index: index,
        atk: atk,
        range: range,
        armor: armor,
        weight: weight,
        backgroundColor: backgroundColor,
        equipType: equipTypes
      }
      return weaponObject;
    }
  })

  return (
    <div
      ref={drag}
      style={weaponStyle}>
      <img alt="Icon for Arms" src={iconToUse}></img>
    </div>
  )
}

export default Arms;
