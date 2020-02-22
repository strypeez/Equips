import React from 'react';
import Types from '../../Types';

import { useDrag } from 'react-dnd';

import MetalHelmetIcon from '../../SVGIcons/MetalHelmetIcon.svg'
import MetalArmsIcon from '../../SVGIcons/MetalArmsIcon.svg'
import MetalChestIcon from '../../SVGIcons/MetalChestIcon.svg'
import MetalShoulderIcon from '../../SVGIcons/MetalShoulderIcon.svg'
import MetalShoesIcon from '../../SVGIcons/MetalShoesIcon.svg'
import AxeIcon from '../../SVGIcons/AxeIcon.svg'
import DaggerIcon from '../../SVGIcons/DaggerIcon.svg'
import SwordIcon from '../../SVGIcons/SwordIcon.svg'
import BowIcon from '../../SVGIcons/BowIcon.svg'
import SpearIcon from '../../SVGIcons/SpearIcon.svg'
import LeatherArmIcon from '../../SVGIcons/LeatherArm.svg'
import LeatherHelmetIcon from '../../SVGIcons/LeatherHelmet.svg'
import LeatherShoesIcon from '../../SVGIcons/LeatherShoes.svg'
import LeatherShoulderIcon from '../../SVGIcons/LeatherShoulder.svg'
import LeatherVestIcon from '../../SVGIcons/LeatherVest.svg'



const Weapon = ({backgroundColor, name, index, atk, range, armor, weight, equipTypes}) => {

  //styles for component
  const weaponStyle = {
    width: '100px',
    height: '100px',
    justifySelf: 'center'
  }

  //declaration of variables
  let iconToUse;
  let equipType;

  //switch for each item
  switch(name) {
    case "axe":
      iconToUse = AxeIcon;
      equipType = Types.WEAPON;
      break;
    case "sword":
      iconToUse = SwordIcon;
      equipType = Types.WEAPON;
      break;
    case "spear":
      iconToUse = SpearIcon;
      equipType = Types.WEAPON;
      break;
    case "bow" :
      iconToUse = BowIcon;
      equipType = Types.WEAPON;
      break;
    case "dagger":
      iconToUse = DaggerIcon;
      equipType = Types.WEAPON;
      break;
    case "metalHelmet":
      iconToUse = MetalHelmetIcon;
      equipType = Types.HELMET;
      break;
    case "metalShoulder":
      iconToUse = MetalShoulderIcon;
      equipType = Types.SHOULDER;
      break;
    case "metalChest":
      iconToUse = MetalChestIcon
      equipType = Types.CHEST;
      break;
    case "metalArms":
      iconToUse = MetalArmsIcon
      equipType = Types.ARMS;
      break;
    case "metalShoes":
      iconToUse = MetalShoesIcon
      equipType = Types.SHOES;
      break;
    case "leatherHelmet":
      iconToUse = LeatherHelmetIcon;
      equipType = Types.HELMET;
      break;
    case "leatherShoulder":
      iconToUse = LeatherShoulderIcon
      equipType = Types.SHOULDER;
      break;
    case "leatherVest":
      iconToUse = LeatherVestIcon
      equipType = Types.CHEST;
      break;
    case "leatherArms":
      iconToUse = LeatherArmIcon
      equipType = Types.ARMS;
      break;
    case "leatherShoes":
      iconToUse = LeatherShoesIcon
      equipType = Types.SHOES;
      break;
    default:
      break;
  }

  //reactDND hook for dragging
  const [, drag] = useDrag({
    item: {type: equipType},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      itemType: monitor.getItemType(),
      dragItem: monitor.getItem()
    }),
    begin: () => {
      console.log(equipType)
      const weaponObject = {
        name: name,
        index: index,
        atk: atk,
        range: range,
        armor: armor,
        weight: weight,
        backgroundColor: backgroundColor,
        equipType: equipType
      }
      return weaponObject;
    }
  })

  return (
    <div
      ref={drag}
      style={weaponStyle}>
      <img alt="Icon for weapon" src={iconToUse}></img>
    </div>
  )
}

export default Weapon;
