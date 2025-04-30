import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface GeminiState {
  input: string;
  response: string;
  loading: boolean;
  error: string | null;
}

const initialState: GeminiState = {
  input: "",
  response: "",
  loading: false,
  error: null,
};

// Async thunk to send prompt to Gemini API
export const sendPrompt = createAsyncThunk(
  "gemini/sendPrompt",
  async (prompt: string) => {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    return data.message;
  }
);

const geminiSlice = createSlice({
  name: "gemini",
  initialState,
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendPrompt.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.response = "";
      })
      .addCase(sendPrompt.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
        console.log("Gemini Response:", action.payload);
      })
      .addCase(sendPrompt.rejected, (state, action) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const { setInput } = geminiSlice.actions;
export default geminiSlice.reducer;
