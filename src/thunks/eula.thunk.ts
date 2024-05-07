import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContentfulClient } from "@/lib/cms";

export const getEulaThunk = createAsyncThunk(
  "eula/getEula",
  async (locale: string, { rejectWithValue }) => {
    try {
      const client = createContentfulClient();
      const entries = await client.getEntries({
        content_type: "eulaPage",
        locale,
      });

      return entries.items[0].fields;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
