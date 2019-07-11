// Action types
export const CLICK_UPDATE_VALUE = "CLICK_UPDATE_VALUE";

// Reducer
const initialState = {
  newValue: "Atualizado via Redux!"
};

export default function clickReducer(state = initialState, action) {
  switch (action.type) {
    case CLICK_UPDATE_VALUE:
      return {
        ...state, // recupera o estado anterior e passa para o novo objeto
        newValue: action.newValue
      };
    default:
      return state;
  }
};

// Action Creators

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

