import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav =styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.rem calc((100vw - 1000px)/2);
    z-index: 10;
`
export const NavLink =styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursore: pointer;

    &.action{
        color #1cdfc;
    }
`
export const Bars= styled(FaBars)`
    display:block;
    postion: absolut;
    top: 0;
    right: 0;
    transform: transled(-100 ,7)
`