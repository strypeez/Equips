import {
  EQUIP,
  UNEQUIP
} from './actions'

//create the inital state
const initialState = {
  inventory: [
    {
      name: "sword",
      backgroundColor: 'red',
      atk: 3,
      range: 2,
      armor: 0,
      weight: 10,
      type: 'weapon'
    },
    {
      name: 'spear',
      backgroundColor: 'pink',
      atk: 2,
      range: 3,
      armor: 0,
      weight: 5,
      type: 'weapon'
    },
    {
      name: 'dagger',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 0,
      weight: 3,
      type: 'weapon'
    },
    {
      name: 'axe',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 0,
      weight: 15,
      type: 'weapon'
    },
    {
      name: 'bow',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 0,
      weight: 5,
      type: 'weapon'
    },
    {
      name: 'metalHelmet',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 5,
      weight: 10,
      type: 'helmet'
    },
    {
      name: 'metalShoulder',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 3,
      weight: 10,
      type: 'shoulder'
    },
    {
      name: 'metalChest',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 7,
      weight: 15,
      type: 'chest'
    },
    {
      name: 'metalArms',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 3,
      weight: 7,
      type: 'arms'
    },
    {
      name: 'metalShoes',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      type: 'shoes',
      armor: 5,
      weight: 7,
    },
    {
      name: 'leatherHelmet',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 3,
      weight: 5,
      type: 'helmet'
    },
    {
      name: 'leatherShoulder',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 3,
      weight: 5,
      type: 'shoulder'
    },
    {
      name: 'leatherVest',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 5,
      weight: 5,
      type: 'chest'
    },
    {
      name: 'leatherArms',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 3,
      weight: 3,
      type: 'arms'
    },
    {
      name: 'leatherShoes',
      backgroundColor: 'darkRed',
      atk: 1,
      range: 1,
      armor: 3,
      weight: 3,
      type: 'shoes'
    }
  ],
  equipped: ['empty', 'empty', 'empty', 'empty', 'empty', 'empty']
}

//function to prevent duplication of items that are redropped in inventory
let checkDupeInventory = (state, action) => {
  let itemToCheck = action.item.name;
  let checkDupes = state.inventory.filter(item => item.name === itemToCheck);
  if (checkDupes.length !== 0) {
    return state.inventory
  } else {
    return [...state.inventory, action.item]
  }
}

//check dupe in equipped
let checkDupeEquipped = (state, action) => {
  let itemToCheck = action.item.name;
  let checkDupes = state.inventory.filter(item => item.name === itemToCheck);
  if (checkDupes.length !== 0) {
    return state.equipped
  } else {
    return state.equipped.map((item, index) => {
      if (index !== action.equipType) {
        return item;
      }
      return 'empty'
    })
  }
}

//function to unequip something if something of the same type is put over it
let checkIfSomethingEquipped = (state, action) => {
  if (state.equipped[action.equipType] !== 'empty') {
    return {
      ...state,
      inventory: [...state.inventory.slice(0, action.index), ...state.inventory.slice(action.index + 1), state.equipped[action.equipType]],
      equipped: [...state.equipped.slice(0, action.equipType), action.item, ...state.equipped.slice(action.equipType + 1)]
    }
  } else {
    return {
      ...state,
      inventory: [...state.inventory.slice(0, action.index), ...state.inventory.slice(action.index + 1)],
      equipped: [...state.equipped.slice(0, action.equipType), action.item, ...state.equipped.slice(action.equipType + 1)]
    }
  }
}

//reducer
function equips(state = initialState, action) {
  switch (action.type) {
    case EQUIP:
      return Object.assign({}, state, checkIfSomethingEquipped(state, action))
    case UNEQUIP:
      return Object.assign({}, state, {
        ...state,
        inventory: checkDupeInventory(state, action),
        equipped: checkDupeEquipped(state, action)
      })
    default:
      return state
  }
}

export default equips;
