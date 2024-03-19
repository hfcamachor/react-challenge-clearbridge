"use client";
import Link from "next/link";
import styles from "./bookDetail.module.scss";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookDetailInfo from "@/app/components/BookDetailInfo/BookDetailInfo";
import { BookDetailProps } from "@/app/types/types";

// Define the BookDetail component
// Utilizing dynamic paths to store and retrieve book 
// data by saving the book ID in the URL.
export default function BookDetail({ params }: BookDetailProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.bookDetail}>
        <div className={styles.bookDetailBackButton}>
          <Link href="/">
            <Button
              variant="contained"
              color="success"
              startIcon={<ArrowBackIosIcon />}
            >
              Go back
            </Button>
          </Link>
        </div>
        <BookDetailInfo params={params} />
      </div>
    </QueryClientProvider>
  );
}
