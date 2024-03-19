import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from "./loadingAnimation.module.scss";

export default function LoadingAnimation() {
  return (
    <div className={styles.loadingAnimation}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </div>
  );
}