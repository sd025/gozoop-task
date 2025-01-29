import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export interface Submission {
  _id: string
  name: string
  email: string
  phone?: string
  createdAt: string
}

interface SubmissionsState {
  submissions: Submission[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: SubmissionsState = {
  submissions: [],
  status: "idle",
  error: null,
}

export const fetchSubmissions = createAsyncThunk("submissions/fetchSubmissions", async () => {
  const response = await axios.get<Submission[]>("/api/submissions")
  return response.data
})

export const submitForm = createAsyncThunk(
  "submissions/submitForm",
  async (formData: { name: string; email: string; phone?: string }) => {
    const response = await axios.post<{ message: string }>("/api/submit", formData)
    return response.data
  },
)

const submissionsSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchSubmissions.pending, (state: any) => {
        state.status = "loading"
      })
      .addCase(fetchSubmissions.fulfilled, (state: any, action: any) => {
        state.status = "succeeded"
        state.submissions = action.payload
      })
      .addCase(fetchSubmissions.rejected, (state: any, action: any) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to fetch submissions"
      })
      .addCase(submitForm.fulfilled, (state: any) => {
        state.status = "succeeded"
      })
      .addCase(submitForm.rejected, (state: any, action: any) => {
        state.status = "failed"
        state.error = action.error.message || "Failed to submit form"
      })
  },
})

export default submissionsSlice.reducer

