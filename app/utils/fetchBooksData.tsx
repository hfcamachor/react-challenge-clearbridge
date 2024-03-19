import { fetchBooksDataProps, fetchBooksDetailsProps } from "../types/types";

export const fetchBooksData = async ({
  searchTerm,
  page = 0,
}: fetchBooksDataProps = {}) => {
  try {
    const setPageQuery = !!searchTerm
      ? `/search?q=${searchTerm}&page=${page}&limit=10`
      : `?page=${page}&limit=10`;

    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks${setPageQuery}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching books data:", error);
    throw error;
  }
};

export const fetchBooksDetails = async ({
  bookId,
}: fetchBooksDetailsProps = {}) => {
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/${bookId}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch book details");
    }

    const data = await response.json();
    return data || [];
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw error;
  }
};
