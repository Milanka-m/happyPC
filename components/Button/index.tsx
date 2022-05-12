import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import MuiButton, { ButtonProps } from '@mui/material/Button'

const ButtonRoot = styled(MuiButton)(() => ({
  maxWidth: 200,
  borderRadius: 30,
  borderBottomRightRadius: 0,
  backgroundColor: '#7e2323',
  color: '#fff',
  fontWeight: 800,
  fontFamily: 'Raleway',
  padding: 15,
  fontSize: 12,
  boxShadow: 'none',
  '&:active, &:focus': {
    backgroundColor: '#1e1e1f',
  },
  '&:hover': {
    backgroundColor: '#f7bd17',
  },
}));

function Button<C extends React.ElementType>(
  props: ButtonProps<C, { component?: C }>,
) {
  return <ButtonRoot {...props} />;
}

export default Button