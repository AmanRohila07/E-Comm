import React from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import Logo from '../header/images/logo.png'
import Search from './Search'
import CustomButtons from './CustomButtons'


const StyledHeader = styled(AppBar)`
    background: #030303;
    height: 60px;
`

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`

const CustomButtonWrapper = styled(Box)`
  margin: 0 15% 0 auto;
`

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 60}}>
        <Component>
            <img src={Logo} alt="logo" style={{ width: 150 }}/>
        </Component>
        <Search/>
        <CustomButtonWrapper>
            <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header
