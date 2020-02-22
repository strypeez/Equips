import React from "react";

import EmptyHelmetIcon from "../SVGIcons/EmptyMetalHelmetIcon.svg";
import EmptyShoulderIcon from "../SVGIcons/EmptyShoulderIcon.svg";
import EmptyArmsIcon from "../SVGIcons/EmptyArmsIcon.svg";
import EmptyChestIcon from "../SVGIcons/EmptyChestIcon.svg";
import EmptyShoesIcon from "../SVGIcons/EmptyShoesIcon.svg";
import EmptyWeaponsIcon from "../SVGIcons/EmptySwordIcon.svg";

import { useDrop } from "react-dnd";
import Types from "../Types";
import Weapon from "./EquipmentTypes/Weapon";
//import Overlay from './Overlay';

const EquipArea = ({ equipType, equip, equipped }) => {
  let iconToUse;
  let row;
  let col;
  let equippedIndex;
  let equipAreaType;

  //determines properties of each equiparea
  switch (equipType) {
    case "helmet":
      iconToUse = EmptyHelmetIcon;
      row = 1;
      col = 2;
      equippedIndex = 0;
      equipAreaType = Types.HELMET;
      break;
    case "shoulder":
      iconToUse = EmptyShoulderIcon;
      row = 1;
      col = 1;
      equippedIndex = 1;
      equipAreaType = Types.SHOULDER;
      break;
    case "arms":
      iconToUse = EmptyArmsIcon;
      row = 2;
      col = 1;
      equippedIndex = 2;
      equipAreaType = Types.ARMS;
      break;
    case "chest":
      iconToUse = EmptyChestIcon;
      row = 2;
      col = 2;
      equippedIndex = 3;
      equipAreaType = Types.CHEST;
      break;
    case "shoes":
      iconToUse = EmptyShoesIcon;
      row = 3;
      col = 2;
      equippedIndex = 4;
      equipAreaType = Types.SHOES;
      break;
    case "weapon":
      iconToUse = EmptyWeaponsIcon;
      row = 3;
      col = 1;
      equippedIndex = 5;
      equipAreaType = Types.WEAPON;
      break;
    default:
      break;
  }

  const equipAreaStyle = {
    gridRowStart: row,
    gridColumnStart: col,
    justifySelf: "center",
    position: "relative",
    width: "100px",
    height: "100px"
  };

  const equipAreaOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 200,
    opacity: 0.5,
    backgroundColor: "yellow"
  };

  //reactDND hook for dropping
  const [{ isOver }, drop] = useDrop({
    accept: equipAreaType,
    drop: (item, monitor) => {
      let weapon = monitor.getItem();
      console.log(weapon);
      console.log(weapon.equipType);
      let newWeapon = {
        name: weapon.name,
        backgroundColor: weapon.backgroundColor,
        atk: weapon.atk,
        range: weapon.range,
        armor: weapon.armor,
        weight: weapon.weight,
        equippedIndex: equippedIndex,
        type: weapon.equipType
      };
      console.log(monitor.getItem());
      equip(weapon.index, newWeapon, equippedIndex);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  let equipAtIndex = equipped[equippedIndex];

  return (
      <div style={equipAreaStyle} ref={drop}>
        {equipAtIndex === "empty" ? (
          <div>
            <img alt="equip area to drop equips" src={iconToUse} />
          </div>
        ) : (
          <Weapon
            backgroundColor={equipAtIndex.backgroundColor}
            name={equipAtIndex.name}
            atk={equipAtIndex.atk}
            range={equipAtIndex.range}
            armor={equipAtIndex.armor}
            weight={equipAtIndex.weight}
            equipTypes={equippedIndex}
            index={equipAtIndex.index}
          />
        )}
        {isOver && <div style={equipAreaOverlay} />}
      </div>
  );
};

export default EquipArea;
