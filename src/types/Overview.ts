import { Document } from "@contentful/rich-text-types";

export interface OverviewState {
  backgroundImage: string;
  title: string;
  description?: string;
  benefits: Benefit[];
  faqs: FAQ[];
  isLoading: boolean;
  error: string | null;
}

export interface Benefit {
  title: string;
  description: Document;
}

export interface FAQ {
  question: string;
  answer: Document;
}
