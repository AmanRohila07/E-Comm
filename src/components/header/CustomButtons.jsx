import React, { useState} from 'react'
import { Box, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from '../login/Login';

const Wrapper = styled(Box)`
    display: flex;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`

const LoginButton = styled(Button)`
    background: #242424;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 5px;
    box-shadow: none;
    font-weight: 600;
    height: 35px;
    margin: 8px 0 0 auto;

`

const Contact = styled(Typography)`
    margin: 1% 0 0 auto;
`
const Container = styled(Box)`
    display:flex;
`

const CustomButtons = () => {

  const [open, setOpen] = useState(false);

  const openDialog =() => {
    setOpen(true);
  }
  return (
    <Wrapper>
      <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
      <Contact>Contact us</Contact>
        <Container>
          <ShoppingCartIcon/>
          <Typography>Cart</Typography>
        </Container>
      <Login open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons
