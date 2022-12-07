import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export const RemovalBox = styled(Box)(({ theme }) => ({
  color: theme.palette.secondary.light,
  marginLeft: 8,
  display: 'flex',

}));

export const ApprovedBox = styled(Box)(({ theme }) => ({
  color: theme.palette.success.light,
  marginLeft: 8,
  display: 'flex',

}));

export const HeaderPost = styled(Box)(() => ({
  display: 'flex',
  marginTop: 8,
  minHeight: 24,
  marginBottom: 8,
  flexWrap: 'wrap',
  alignItems: 'center',
}));

export const HeaderAvatar = styled(Box)(() => ({
  width: 20,
  height: 20,
  borderRadius: 20,
}));

export const HeaderAvatarImage = styled('img')(() => ({
  width: 20,
  height: 20,
}));

export const LinkTo = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#787c7e',
  display: 'flex',
  alignItems: 'center',
  marginLeft: '8px',
}));
