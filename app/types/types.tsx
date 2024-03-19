import { Dispatch, SetStateAction } from "react";

export interface Books {
  thumbnail: {
    alt_text: string;
    lqip: string;
  };
  image_id: string;
  title: string;
  description: string;
  id: string;
  artist_display: string;
  date_display: string;
  dimensions: string;
  main_reference_number: string;
  category_titles: Array<string>;
}

export interface GlobalState {
  page: number;
  searchTerm: string;
  currentSearchTerm: string;
  category: string;
}

export interface GlobalStateContextType {
  globalState: GlobalState;
  setGlobalState: Dispatch<SetStateAction<GlobalState>>;
}

export interface BookListProps {
  books: Books[];
}

export interface BookDetailProps {
  params: {
    productId: string;
  };
}

export interface BooksAndFiltersProps {
  inputValue: string;
}

export interface BookDetailProps {
  params: {
    productId: string;
  };
}

export interface InputFormProps {
  value: string;
  error?: string;
  onInputSet: (value: string) => void;
  label: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  comment?: string;
}

export interface RadioSelectProps {
  categories: Array<string>
}

export interface fetchBooksDataProps {
  searchTerm?: string;
  page?: number;
}

export interface fetchBooksDetailsProps {
  bookId?: string;
}