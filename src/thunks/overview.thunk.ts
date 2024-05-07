import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContentfulClient } from "@/lib/cms";

export const getOverviewThunk = createAsyncThunk(
  "overview/getOverview",
  async (locale: string, { rejectWithValue }) => {
    try {
      const client = createContentfulClient();
      const entries = await client.getEntries({
        content_type: "overviewPage",
        locale,
      });

      return entries.items[0].fields;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
