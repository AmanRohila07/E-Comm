import React from 'react'
import { InputBase, Box, styled } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)`
    background: #fff;
    width: 35%;
    border-radius: 5px;
    margin-left: 10px;
    display: flex;
`;

const SearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
    color: black;
    padding: 5px;
    display: flex;
`;

const Search = () => {
  return (
    <SearchContainer>
      <SearchBase placeholder='Search for Products, Brands and services'/>
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
    </SearchContainer>
  )
}

export default Search
