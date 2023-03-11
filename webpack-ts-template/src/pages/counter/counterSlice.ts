import { createSlice, createAsyncThunk, PayloadAction, ThunkDispatch, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "Src/state/store";

export interface CounterState {
  count: number;
}

interface IncrementCountAction extends PayloadAction {
  type: "counter/incrementCount";
}

interface DecrementCountAction extends PayloadAction {
  type: "counter/decrementCount";
}

interface SetCountAction extends PayloadAction<{ count: number }> {
  type: "counter/setCount";
}

export type CounterActions = IncrementCountAction | DecrementCountAction | SetCountAction;

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    incrementCount: (state) => {
      return { count: state.count + 1 };
    },
    decrementCount: (state) => {
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
        state.count += action.payload.count as number;
      });
  },
});

export const addExtraIfOdd = (extraCount: number): ThunkAction<void, RootState, unknown, CounterActions> => {
  return (dispatch: ThunkDispatch<RootState, unknown, CounterActions>, getState: () => RootState) => {
    const currentCount = getState().counterData.count;
    if (currentCount % 2 !== 0) {
      dispatch(setCount({ count: extraCount }));
    }
  };
};

export const asyncIncrement = createAsyncThunk("counter/asyncIncrement", async (extraCount: number) => {
  const response = await new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(extraCount);
    }, 3000);
  });

  return { count: response };
});

// const tempActions = counterSlice.actions;
// tempActions.addExtraIfOdd = addExtraIfOdd;
// tempActions.asyncIncrement = asyncIncrement;
// export const actions = counterSlice.actions;
// export const actions = tempActions;

export const { incrementCount, decrementCount, setCount } = counterSlice.actions;
export const reducer = counterSlice.reducer;
