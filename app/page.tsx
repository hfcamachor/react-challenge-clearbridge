"use client";
import styles from "./page.module.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksAndFilters from "./components/BooksAndFilters/BooksAndFilters";
import { useState } from "react";
import CommentsForm from "./components/Form/Form";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <SearchBar />
          <BooksAndFilters />
        </div>
        <CommentsForm />
        <ReactQueryDevtools initialIsOpen={false} />
      </main>
    </QueryClientProvider>
  );
}
