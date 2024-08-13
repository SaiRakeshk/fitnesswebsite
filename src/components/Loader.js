import React from 'react';
import { Stack } from '@mui/material';
import { CircleLoader } from 'react-spinners';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <CircleLoader color="grey" />
  </Stack>
);

export default Loader;
