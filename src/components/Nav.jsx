import React from 'react';
import { A, UL, LI } from '../components/default';
import { blue, blueHighlight } from '../components/colors';
import styled from "styled-components";
import { IoIosHome, IoIosAppstore } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px 60px;
    border-bottom: 1px solid #ddd;

    @media all and (max-width: 600px) {
        padding: 20px;
    }
`;

const Title = styled.div`
    flex: 2;
    font-family: "Roboto", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 28px;
`;

const NavLinks = styled(UL)`
    flex: 10;
    display: flex;
    flex-direction: horizontal;
    flex-wrap: wrap;
    justify-content: flex-end;
    height: 100%;
    align-self: center;
`;

const NavLink = styled(LI)`
    display: flex;
    flex-direction: vertical;
    align-items: center;
    text-align: center;
    font-family: "Bariol", "Helvetica Neue", "Helvetica", sans-serif;
    font-size: 16px;
    padding: 0px 20px;
`;

const StyledA = styled(A)`
    height: auto;
    color: ${blue};
    display: flex;
    flex-direction: vertical;
    align-items: center;

    -webkit-transition: 0.2s ease-in-out;
    -moz-transition: 0.2s ease-in-out;
    -o-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;

    &:hover {
        color: ${blueHighlight};
    }
`;

const MediaOnlySmall = styled.div`
    display: none;
    @media all and (max-width: 600px) {
        display: inline-block;
    }
`;

const MediaOnlyLarge = styled.div`
    display: inline-block;
    @media all and (max-width: 600px) {
        display: none;
    }
`;

const Nav = (props) => {
    return (
        <StyledNav>
            <Title><StyledA href={props.blog ? '/blog' : '/'}>NOAH GILMORE</StyledA></Title>
            <NavLinks>
                <NavLink><StyledA href="/blog"><IoIosHome color={blue} size="24" /></StyledA></NavLink>
                <NavLink><StyledA href="https://twitter.com/noahsark769"><FaTwitter color={blue} size="24" /></StyledA></NavLink>
                <NavLink><StyledA href="https://appstore.com/trestle"><IoIosAppstore color={blue} size="24" /></StyledA></NavLink>
            </NavLinks>
        </StyledNav>
    );
};

export default Nav;