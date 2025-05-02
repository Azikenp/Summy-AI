import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface GeminiState {
  input: string;
  loading: boolean;
  error: string | null;
  history: Message[];
}


const initialState: GeminiState = {
  input: "",
  loading: false,
  error: null,
  history: [],
};


export const sendPrompt = createAsyncThunk(
  "gemini/sendPrompt",
  async (prompt: string) => {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    return {
      userMessage: { role: "user" as const, content: prompt },
      aiMessage: { role: "assistant" as const, content: data.message },
    };
  }
);

const geminiSlice = createSlice({
  name: "gemini",
  initialState,
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
    clearHistory(state) {
      state.history = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendPrompt.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPrompt.fulfilled, (state, action) => {
        const { userMessage, aiMessage } = action.payload;
        state.loading = false;
        state.history.push(userMessage, aiMessage);
        state.input = "";
      })
      .addCase(sendPrompt.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export const { setInput, clearHistory } = geminiSlice.actions;
export default geminiSlice.reducer;