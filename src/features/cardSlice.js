import { createSlice } from "@reduxjs/toolkit";

const getRandomNumber = function () {
  let getRandom = Math.floor(Math.random() * 1000);
  return getRandom;
};

const localStorageSet = (state) =>
  localStorage.setItem("card/get", JSON.stringify(state));

const initialState = JSON.parse(localStorage.getItem("card/get")) || {
  cards: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    add: (state) => {
      const body = {
        number: getRandomNumber(),
      };
      state.push(body);
      localStorageSet(state);
    },
    remove: (state, action) => {
      const updatedArr = state.filter((card) => card.number !== action.payload);
      localStorageSet(updatedArr);
      return updatedArr;
    },
    sortNumb(state) {
      const sortState = state.sort((a, b) => a.number - b.number);
      localStorageSet(sortState);
      return sortState;
    },
  },
});

export const { add, remove, sortNumb } = cardSlice.actions;

export default cardSlice.reducer;
