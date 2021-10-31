export const UPDATE_LIST = "UPDATE_LIST";
export const REMOVE_CARD = "REMOVE_CARD";
export const EDIT_CARD = "EDIT_CARD";
export const EDIT_MODE = "EDIT_MODE";

export default function updateList(card) {
  return { type: UPDATE_LIST, Data: card };
}
export function removeCard(cardIndex) {
  return { type: REMOVE_CARD, Data: cardIndex };
}
export function editCard(cardData) {
  return { type: EDIT_CARD, Data: cardData };
}

export function editMode(index) {
  return { type: EDIT_MODE, Data: index };
}
