/* eslint-disable import/no-cycle */
import * as React from 'react';
import { Divider, Box } from '@mui/material';
import { StyledDialog } from '../../../styles';
import { BanContext } from '../../BanUser';
import Header from '../../../Header/Header';
import Username from '../../../Username/Username';
import BanReason from '../BanReason/BanReason';
import BanNote from '../BanNote/BanNote';
import BanPeriod from '../BanPeriod/BanPeriod';
import BanMessage from '../BanMessage/BanMessage';
import BanFooter from '../BanFooter/BanFooter';

function BanPopUp() {
  const {
    openBan, handleClickCloseBan,
  } = React.useContext(BanContext);
  return (
    <StyledDialog
      fullScreen
      open={openBan}
      width="538px"
      height="620px"
    >
      <Box>
        <Header buttonFunction={handleClickCloseBan} headerText="Ban a user:" />
        <Divider />
        <Username placeholder="u/username" />
        <BanReason />
        <BanNote note="" />
        <BanPeriod />
      </Box>
      <Box sx={{ backgroundColor: '#edeff1 ', height: '100%' }}>
        <BanMessage />
        <BanFooter handleClickCloseBan={handleClickCloseBan} />
      </Box>
    </StyledDialog>
  );
}

export default BanPopUp;
