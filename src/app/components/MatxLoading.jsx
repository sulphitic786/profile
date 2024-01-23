import { CircularProgress, Box, styled } from '@mui/material';

const StyledLoading = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    width: 'auto',
    height: '25px'
  },
  '& .circleProgress': {
    position: 'absolute',
    left: -7,
    right: 0,
    top: 'calc(50% - 25px)'
  }
});

const Loading = () => {
  return (
    <StyledLoading>
      <Box position="relative">
        <h2>Sulphitic</h2>
        <img src="/assets/favicon.png" alt="WQ" />
        {/* <img src="/assets/images/logo-circle.svg" alt="" /> */}
        <CircularProgress className="circleProgress" />
      </Box>
    </StyledLoading>
  );
};

export default Loading;
