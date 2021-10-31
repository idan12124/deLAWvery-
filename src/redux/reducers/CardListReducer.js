import {
  UPDATE_LIST,
  REMOVE_CARD,
  EDIT_CARD,
  EDIT_MODE,
} from "../actions/CardList";

const INIT_CARD_DATA = {
  orderCounter: 1,
  cardList: [],
  editMode: false,
  editCard: 0,
};

export default function cardListReducer(state = INIT_CARD_DATA, action) {
  switch (action.type) {
    case UPDATE_LIST:
      const nCardList = [...state.cardList];
      nCardList.push(action.Data);
      state.orderCounter++;
      return {
        orderCounter: state.orderCounter,
        cardList: nCardList,
        editMode: state.editMode,
      };
    case REMOVE_CARD:
      const newCardList = state.cardList.filter(function (obj) {
        return obj.orderNumber !== action.Data;
      });
      return {
        orderCounter: state.orderCounter,
        cardList: newCardList,
        editMode: state.editMode,
      };
    case EDIT_CARD:
      console.log(action.Data);
      const newEditCardList = state.cardList.map(function (obj) {
        console.log(`Edit2 ${obj.orderNumber} ${action.Data.orderNumber}`);

        if (obj.orderNumber == action.Data.orderNumber) {
          console.log("Edit2");

          console.log(action.Data);
          return action.Data;
        }
        return obj;
      });
      return {
        orderCounter: state.orderCounter,
        cardList: newEditCardList,
        editMode: false,
      };
    case EDIT_MODE: {
      return {
        orderCounter: state.orderCounter,
        cardList: [...state.cardList],
        editMode: true,
        editCard: action.Data,
      };
    }
    default:
      return state;
  }
}
