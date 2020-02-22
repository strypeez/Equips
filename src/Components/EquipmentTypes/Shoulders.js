import React from 'react';
import Types from '../../Types';

import { useDrag } from 'react-dnd';

import MetalShoulderIcon from '../../SVGIcons/MetalShoulderIcon.svg'
import LeatherShoulderIcon from '../../SVGIcons/LeatherShoulder.svg'



const Shoulders = ({backgroundColor, name, index, atk, range, armor, weight, equipTypes}) => {

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
    case "metalShoulder":
      iconToUse = MetalShoulderIcon;
      break;
    case "leatherShoulder":
      iconToUse = LeatherShoulderIcon
      break;
    default:
      break;
  }

  //reactDND hook for dragging
  const [, drag] = useDrag({
    item: {type: Types.SHOULDER},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      itemType: monitor.getItemType(),
      dragItem: monitor.getItem()
    }),
    begin: () => {

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
      <img alt="Icon for shoulder" src={iconToUse}></img>
    </div>
  )
}

export default Shoulders;
