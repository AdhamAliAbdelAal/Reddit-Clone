import {
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const PostContainer = styled(Box)(() => ({
  width: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  borderRadius: 3,
  border: '1px solid #ccc',
  '&:hover':
  {
    borderColor: '#999',
  },
}));

export const Popularity = styled(Box)(() => ({
  fontSize: '15px',
  color: '#1c1c1c',
  cursor: 'pointer',
}));

export const PostInfo = styled(Box)(() => ({
  display: 'flex',
  fontSize: '12px',
  gap: '4px',
}));

export const PostInfoLink = styled(Link)(({ color, fontWeight }) => ({
  fontWeight,
  color,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const PostTitle = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#000',
  '& .MuiTypography-root': {
    lineHeight: 1.2,
    fontWeight: 500,
  },
}));

export const PostMedia = styled(Box)(({ isVideo }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: isVideo ? '#000' : '#fff',
}));

export const CustomImage = styled('img')(() => ({
  maxWidth: '100%',
  maxHeight: '512px',
}));
