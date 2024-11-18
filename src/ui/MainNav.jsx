import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { SiTradingview } from "react-icons/si";
import { IoIosSettings } from "react-icons/io";

import { IoIosLogOut } from "react-icons/io";
import BitcoinChart from "../components/Chart";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: #ffffff;
    font-weight: 500;
    padding: 0.8rem 1.6rem;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    border-radius: 0.4rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #ffffff;
    background-color: #262c3d;
    box-shadow: 0px 4px 8px rgba(49, 60, 94, 0.5);
    transform: scale(1.02);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: #a1a1a1;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #ffffff;
    transform: scale(1.1);
  }
`;

const LogoutButton = styled.button`
  position: absolute; /* موقعیت‌دهی مطلق */
  bottom: 1rem; /* فاصله از پایین صفحه */
  left: 50px; /* دکمه در مرکز افقی */
  transform: translateX(-50%); /* تراز به مرکز */
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;

  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

function MainNav() {
  return (
    <nav className="pt-5">
      <NavList>
        <li>
          <StyledNavLink to="/">
            <MdHome />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/exchange">
            <MdCurrencyExchange />
            <span>Exchange</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/wallet">
            <FaWallet />
            <span>My Wallet</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/chart">
            <SiTradingview />

            <span>TradeView</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <IoIosSettings />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
      <LogoutButton>Log Out</LogoutButton>
    </nav>
  );
}

export default MainNav;
