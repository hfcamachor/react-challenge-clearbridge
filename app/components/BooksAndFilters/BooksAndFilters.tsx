import { useQuery } from "@tanstack/react-query";
import styles from "./booksAndFilters.module.scss";
import React, { useEffect, useState } from "react";
import { fetchBooksData } from "@/app/utils/fetchBooksData";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import BookList from "../BookList/BookList";
import { Books } from "@/app/types/types";
import { useGlobalState } from "@/app/utils/globalContext";
import RadioSelect from "../RadioSelect/RadioSelect";

// Define the BooksAndFilters component
export default function BooksAndFilters() {
  const { globalState, setGlobalState } = useGlobalState();
  const [categories, setCategories] = useState<Array<string>>([]);
  const [dataBooks, setDataBooks] = useState<Books[]>([]);

  const { data, isLoading } = useQuery(
    ["books", globalState.searchTerm, globalState.page],
    () =>
      fetchBooksData({
        page: globalState.page,
        searchTerm: globalState.searchTerm,
      })
  );

  useEffect(() => {
    // Generates a list of all existing categories based on the current data.
    // This list is utilized to populate selectable categories.
    let categoryTitlesSet = new Set<string>();

    if (data) {
      data.data.forEach((item: Books) => {
        item.category_titles &&
          item.category_titles.forEach((title) => {
            categoryTitlesSet.add(title);
          });
      });

      let categoryTitles = Array.from(categoryTitlesSet);
      setCategories(categoryTitles);
    }
  }, [data]);

  useEffect(() => {
    if (data && globalState.category === "All") {
      setDataBooks(data.data);
    } else if (data) {
      const booksFiltered = data.data.filter((book: Books) => {
        return book.category_titles.includes(globalState.category);
      });
      setDataBooks(booksFiltered);
    }
  }, [data, globalState.category]);

  const handlePageChange = (_: any, value: number) => {
    const globalStateCopy = { ...globalState };

    setGlobalState({
      ...globalStateCopy,
      page: value,
      searchTerm: globalState.searchTerm,
    });
  };

  let totalOfPages = 10;

  if (data && data.pagination && data.pagination.total_pages) {
    totalOfPages = !globalState.searchTerm
      ? data.pagination.total_pages
      : Math.min(data.pagination.total_pages, 100);
  }

  const BookAndFiltersContent = () => {
    return isLoading ? (
      <LoadingAnimation />
    ) : (
      <>
        <RadioSelect categories={categories} />
        <div className={styles.booksAndFiltersBooks}>
          <BookList books={dataBooks} />
          <div className={styles.booksAndFiltersPagination}>
            <Stack spacing={2}>
              <Pagination
                count={totalOfPages}
                page={globalState.page}
                onChange={handlePageChange}
              />
            </Stack>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.booksAndFilters}>{BookAndFiltersContent()}</div>
  );
}
