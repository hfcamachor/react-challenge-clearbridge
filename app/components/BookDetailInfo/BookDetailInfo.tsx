import { useQuery } from "@tanstack/react-query";
import { fetchBooksDetails } from "@/app/utils/fetchBooksData";
import styles from "./bookDetailInfo.module.scss";
import Image from "next/image";
import { BookDetailProps, Books } from "@/app/types/types";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

type detailBook = {
  data: Books;
};

export default function BookDetailInfo({ params }: BookDetailProps) {
  const { data, isLoading } = useQuery<detailBook>(["books"], () =>
    fetchBooksDetails({ bookId: params.productId })
  );

  const buildBookDetails = (book: Books) => {

    const thumbnailAlt = book.thumbnail ? book.thumbnail.alt_text : "";
    return (
      <div className={styles.bookDetailInfoContainer}>
        <div className={styles.bookDetailInfoImage}>
          <Image
            src={`https://www.artic.edu/iiif/2/${book.image_id}/full/843,/0/default.jpg`}
            alt={thumbnailAlt}
            width={50}
            height={50}
            layout={book.image_id && "responsive"}
          />
        </div>
        <div className={styles.bookDetailInfoText}>
          <div className={styles.bookDetailInfoTitle}>{book.title}</div>
          <div className={styles.bookDetailInfoSubtitle}>
            <div className={styles.bookDetailInfoArtist}>
              Artist: {book.artist_display}
            </div>
            <div>Date: {book.date_display}</div>
            <div>Reference number: {book.main_reference_number}</div>
            <div>Dimensions: {book.dimensions}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.bookDetailInfo}>
      {isLoading ? <LoadingAnimation /> : data && buildBookDetails(data.data)}
    </div>
  );
}
