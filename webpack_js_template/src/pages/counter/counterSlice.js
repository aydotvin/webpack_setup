import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    incrementCount: (state, action) => {
      console.log(action);
      return { count: state.count + 1 };
    },
    decrementCount: (state, action) => {
      state.count -= 1;
    },
    setCount: (state, action) => {
      console.log(action);
      state.count += action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(asyncIncrement.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(asyncIncrement.fulfilled, (state, action) => {
        console.log("fulfilled");
        state.count += action.payload.count;
      });
  },
});

const addExtraIfOdd = (extraCount) => {
  return (dispatch, getState) => {
    const currentCount = getState().counterData.count;
    if (currentCount % 2 !== 0) {
      dispatch(actions.setCount({ count: extraCount }));
    }
  };
};

const asyncIncrement = createAsyncThunk("counter/asyncIncrement", async (extraCount) => {
  const response = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(extraCount);
    }, 3000);
  });

  return { count: response };
});

const tempActions = counterSlice.actions;
tempActions.addExtraIfOdd = addExtraIfOdd;
tempActions.asyncIncrement = asyncIncrement;

// export const { incrementCount, decrementCount, setCount } = counterSlice.actions;
// export const actions = counterSlice.actions;
export const actions = tempActions;
export const reducer = counterSlice.reducer;
