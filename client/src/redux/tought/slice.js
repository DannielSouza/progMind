import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentTought: {
    authorEmail:null,
    mainFeeling: null,
    subFeeling: null,
    bodyFeeling: null,
    situation: null,
    action: null,
  },
  currentPart: "1",
  differentValues: {
    subFeelingDifferent: false,
    bodyFeelingDifferent: false,
    actionDifferent: false
  }
};

const toughtSlice = createSlice({
  name: "tought",
  initialState,
  reducers: {
    changeTought: (state, action) => {
      state.currentTought = {...state.currentTought, ...action.payload};
    },
    changeToughtPart: (state, action) => {
      state.currentPart = action.payload
    },
    resetToughtCreation: (state, action)=>{
      state.currentTought = initialState
    },
    updateSubFeelingDifferent: (state, action)=>{
      state.differentValues.subFeelingDifferent = action.payload
    },
    updateBodyFeelingDifferent: (state, action)=>{
      state.differentValues.bodyFeelingDifferent = action.payload
    },
    updateactionDifferent: (state, action)=>{
      state.differentValues.actionDifferent = action.payload
    }
  },
});

export const { changeTought, changeToughtPart, resetToughtCreation, updateSubFeelingDifferent, updateBodyFeelingDifferent, updateactionDifferent } = toughtSlice.actions;

export default toughtSlice.reducer;
