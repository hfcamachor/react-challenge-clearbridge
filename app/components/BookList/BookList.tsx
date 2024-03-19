import Image from "next/image";
import styles from "./bookList.module.scss";
import Link from "next/link";
import { BookListProps, Books } from "@/app/types/types";
import BrokenImageIcon from '@mui/icons-material/BrokenImage';

export default function BookList({ books }: BookListProps) {
  const bookslist = (books: Books[]) => {
    return books.map((book, index) => {
      

      const thumbnailLqip = book.thumbnail ? book.thumbnail.lqip : "";
      const thumbnailAlt = book.thumbnail ? book.thumbnail.alt_text : "";

      return (
        <Link href={`bookDetail/${book.id}`} className={styles.bookListLink} key={index}>
          <div className={styles.bookListItem}>
            <div className={styles.bookListImageContainer}>
              <div className={styles.bookListImage}>
                {/* If there is no image_id, the thumbnail image will be displayed instead. */}
                { book.image_id || thumbnailLqip ? 
                  <Image
                  src={
                    book.image_id
                      ? `https://www.artic.edu/iiif/2/${book.image_id}/full/843,/0/default.jpg`
                      : thumbnailLqip
                  }
                  alt={thumbnailAlt}
                  width={50}
                  height={50}
                /> : <div className={styles.bookListNoImage}>
                  <BrokenImageIcon />
                </div>
                }
              </div>
            </div>
            <div className={styles.bookListText}>
              <div className={styles.bookListTitle}>{book.title}</div>
            </div>
          </div>
        </Link>
      );
    });
  };

  return <div className={styles.bookList}>{bookslist(books)}</div>;
}
