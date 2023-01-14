import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleResponse } from "../../utilities/responseHandler";

export const profileSlice = createSlice({
  name: "profile",
  initialState: { profile: null, error: "", status: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfileDetails.pending, (state, action) => {
        console.log("getting profile");
        state.profile = null;
        state.status = "pending";
      })
      .addCase(getProfileDetails.fulfilled, (state, action) => {
        console.log("got profile", action);
        state.profile = action.payload.profile;
        state.status = "success";
      })
      .addCase(getProfileDetails.rejected, (state, action) => {
        console.log("profile call failed", action.error.message);
        state.error = action.error.message;
        state.status = "error";
      });
  },
});

export const getProfileDetails = createAsyncThunk("profile/getProfileDetails", async (userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    console.log("fetch response", response);
    handleResponse(response);
    const resData = await response.json();
    return { profile: resData };
  } catch (err) {
    // throw new Error(404);
    return Promise.reject({ message: "wrong userid" });
    // return Promise.reject(new Error(404));
  }
});

const tempActions = profileSlice.actions;
tempActions.getProfileDetails = getProfileDetails;

// export const actions = profileSlice.actions;
export const actions = tempActions;
export const reducer = profileSlice.reducer;
