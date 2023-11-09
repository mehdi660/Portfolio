import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Data
import { githubUsername } from "../data";

const initialState = {
  isLoading: true,
  error: "",
  data: [],
};

export const url = `https://api.github.com/users/${githubUsername}`;

export const fetchGitHubInfo = createAsyncThunk(
  "home/fetchGitHubInfo",
  async (thunkApi, { rejectWithValue }) => {
    try {
      const response = await fetch(url).then(function (res) {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res;
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(
        `Error: ${err.message}, check username in data.js (currently ${githubUsername})`
      );
    }
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGitHubInfo.pending, (state) => {
        /*état d'attente de l'action*/
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchGitHubInfo.fulfilled, (state, action) => {
        /*action est accomplie avec succes*/
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchGitHubInfo.rejected, (state, action) => {
        /*l'action echoue*/
        state.isLoading = false;
        state.error = action.payload;
        console.log(state.error);
      });
  },
});

export const selectIsLoading = (state) => state.home.isLoading;
export const selectError = (state) => state.home.error;
export const selectData = (state) => state.home.data;

export default homeSlice.reducer;
