import React from 'react';
import Types from '../../Types';

import { useDrag } from 'react-dnd';


import MetalChestIcon from '../../SVGIcons/MetalChestIcon.svg'
import LeatherVestIcon from '../../SVGIcons/LeatherVest.svg'



const Chest = ({backgroundColor, name, index, atk, range, armor, weight, equipTypes}) => {

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
    case "metalChest":
      iconToUse = MetalChestIcon
      break;
    case "leatherVest":
      iconToUse = LeatherVestIcon
      break;
    default:
      break;
  }

  //ReactDND hook for dragging
  const [, drag] = useDrag({
    item: {type: Types.CHEST},
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
      <img alt="Icon for chest" src={iconToUse}></img>
    </div>
  )
}

export default Chest;
