'use client';
import styled from '@emotion/styled';

const HeaderComponent = styled.header`
    background: linear-gradient(180deg, #07B3FD 0%, #0081E8 100%);
    height: 190px;
    width: 100%;
    display: flex;
    @media (min-width: 768px){
        height: 172px;
    }
`;
const Header = function() {
  return (
    <HeaderComponent>Header</HeaderComponent>
  )
}

export default Header