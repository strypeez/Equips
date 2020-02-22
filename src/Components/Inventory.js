import React from 'react';
import { useDrop } from 'react-dnd'

import Weapon from './EquipmentTypes/Weapon'
import Helmet from './EquipmentTypes/Helmet'
import Shoulders from './EquipmentTypes/Shoulders'
import Chest from './EquipmentTypes/Chest'
import Arms from './EquipmentTypes/Arms'
import Shoes from './EquipmentTypes/Shoes'

import Types from '../Types'

const Inventory = ({inventory, unequip}) => {


  const inventoryStyle = {
    width: '100%',
    height: '100%',
    backgroundColor: 'beige',
    fontFamily: 'triplex-cond-serif,serif',
    fontWeight: '400',
    fontStyle: 'normal',
    gridColumnStart: '2',
    gridRowStart: '3',
    gridColumnEnd: 'span 6',

  }

  const titleStyle = {
    fontFamily: 'mono45-headline,monospace',
    fontWeight: '500',
    fontStyle: 'normal',
    marginTop: '10px',
    marginBottom: '10px',
    color: "black",
    opacity: "0.2",
    fontSize: '50px'

  }

  const inventoryGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridColumnGap: '15px',
    gridRowGap: '15px'
  }


  //reactDND hook for dropping
  const [, drop] = useDrop({
    accept: [Types.WEAPON, Types.ARMS, Types.CHEST, Types.HELMET, Types.SHOES, Types.SHOULDER],
    drop: (item, monitor) => {
      console.log(monitor.getItem())
      let weapon = monitor.getItem()
      console.log("This is the equipType: " + weapon.equipType)
      let newWeapon = {
        name: weapon.name,
        backgroundColor: weapon.backgroundColor,
        atk: weapon.atk,
        range: weapon.range,
        armor: weapon.armor,
        weight: weapon.weight,
        type: weapon.equipType
      }

      let equippedIndex;
      switch(weapon.equipType) {
        case 'helmet':
          equippedIndex = 0;
          break;
        case 'shoulder':
          equippedIndex = 1;
          break;
        case 'arms':
          equippedIndex = 2;
          break;
        case 'chest':
          equippedIndex = 3;
          break;
        case 'shoes':
          equippedIndex = 4;
          break;
        default:
          equippedIndex = 5;
          break;
      }

      unequip(weapon.index, newWeapon, equippedIndex);
    }
  })

  let equipType;

  return(
    <div
      ref={drop}
      style={inventoryStyle}>
      <div style={titleStyle}>INVENTORY</div>
      <div style={inventoryGridStyle}>
        {
          inventory.map((item, index) => {
            //determine what type of equipment type
            switch(item.type){
              case 'helmet':
                equipType = <Helmet
                    key={index}
                    backgroundColor={item.backgroundColor}
                    name={item. name}
                    atk = {item.atk}
                    range = {item.range}
                    armor = {item.armor}
                    weight = {item.weight}
                    index={index}
                    equipTypes={item.type}/>
                    break;
              case 'shoulder':
                equipType = <Shoulders
                    key={index}
                    backgroundColor={item.backgroundColor}
                    name={item.name}
                    atk = {item.atk}
                    range = {item.range}
                    armor = {item.armor}
                    weight = {item.weight}
                    index={index}
                    equipTypes={item.type}/>
                    break;
              case 'arms':
                equipType = <Arms
                    key={index}
                    backgroundColor={item.backgroundColor}
                    name={item.name}
                    atk = {item.atk}
                    range = {item.range}
                    armor = {item.armor}
                    weight = {item.weight}
                    index={index}
                    equipTypes={item.type}/>
                    break;
              case 'chest':
                equipType = <Chest
                    key={index}
                    backgroundColor={item.backgroundColor}
                    name={item.name}
                    atk = {item.atk}
                    range = {item.range}
                    armor = {item.armor}
                    weight = {item.weight}
                    index={index}
                    equipTypes={item.type}/>
                    break;
              case 'shoes':
                equipType = <Shoes
                    key={index}
                    backgroundColor={item.backgroundColor}
                    name={item.name}
                    atk = {item.atk}
                    range = {item.range}
                    armor = {item.armor}
                    weight = {item.weight}
                    index={index}
                    equipTypes={item.type}/>
                    break;
              default:
                equipType = <Weapon
                  key={index}
                  backgroundColor={item.backgroundColor}
                  name={item.name}
                  atk = {item.atk}
                  range = {item.range}
                  armor = {item.armor}
                  weight = {item.weight}
                  index={index}
                  equipTypes={item.type}/>
            }

            return equipType
          })
        }
      </div>
    </div>
  )
}

export default Inventory;
