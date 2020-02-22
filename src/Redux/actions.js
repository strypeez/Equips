export const EQUIP = 'EQUIP'
export const UNEQUIP = 'UNEQUIP'

export function equip(index, item, equipType) {
  return { type: EQUIP, index, item, equipType}
}

export function unequip(index, item, equipType) {
  return { type: UNEQUIP, index, item, equipType}
}
