import React, { useState } from 'react';
import GlitchText from './GlitchText';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.25rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(18, 18, 18, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 2px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled(NavLink)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #faf8f5;
  text-decoration: none;
  letter-spacing: -0.02em;
  position: relative;
  transition: all 0.3s ease;
  
  /* Bold accent underline */
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 4px;
    background: #ff6b6b;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  
  &:hover {
    color: #ff6b6b;
    
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: #a0a0a0;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  letter-spacing: 0.02em;

  /* Playful hover with color change */
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: #00d4aa;
    transition: width 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  &:hover {
    color: #00d4aa;
    
    &::before {
      width: 100%;
    }
  }

  &.active {
    color: #ff6b6b;
    
    &::before {
      width: 100%;
      background: #ff6b6b;
    }
  }
`;

const ContactButton = styled.a`
  padding: 0.7rem 1.6rem;
  background: #ff6b6b;
  border: none;
  border-radius: 8px;
  color: #121212;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.4);
    background: #ffd93d;
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 101;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 28px;
    height: 3px;
    background: ${props => props.isOpen ? '#ff6b6b' : '#faf8f5'};
    border-radius: 0;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
      background: ${props => props.isOpen ? '#ff6b6b' : '#faf8f5'};
    }
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? 0 : 1};
      transform: ${props => props.isOpen ? 'translateX(10px)' : 'none'};
    }
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
      background: ${props => props.isOpen ? '#00d4aa' : '#faf8f5'};
    }
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 18, 18, 0.98);
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  z-index: 99;
`;

const MobileNavLink = styled(NavLink)`
  color: #faf8f5;
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;

  &:hover {
    color: #ff6b6b;
    transform: translateX(10px);
  }
  
  &.active {
    color: #00d4aa;
  }

  /* Colorful number prefix */
  &::before {
    content: attr(data-number);
    font-size: 0.8rem;
    color: #a0a0a0;
    position: absolute;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Nav>
        <Logo to="/">DEEPAK</Logo>

        <NavLinks>
          <StyledNavLink to="/" end><GlitchText>Home</GlitchText></StyledNavLink>
          <StyledNavLink to="/about"><GlitchText>About</GlitchText></StyledNavLink>
          <StyledNavLink to="/skills"><GlitchText>Skills</GlitchText></StyledNavLink>
          <StyledNavLink to="/work"><GlitchText>Projects</GlitchText></StyledNavLink>
          <ContactButton href="mailto:dk376907@gmail.com"><GlitchText>Let's Talk</GlitchText></ContactButton>
        </NavLinks>

        <HamburgerButton onClick={toggleMenu} isOpen={isOpen}>
          <span />
          <span />
          <span />
        </HamburgerButton>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] }}
          >
            <MobileNavLink to="/" onClick={closeMenu} data-number="01"><GlitchText>Home</GlitchText></MobileNavLink>
            <MobileNavLink to="/about" onClick={closeMenu} data-number="02"><GlitchText>About</GlitchText></MobileNavLink>
            <MobileNavLink to="/skills" onClick={closeMenu} data-number="03"><GlitchText>Skills</GlitchText></MobileNavLink>
            <MobileNavLink to="/work" onClick={closeMenu} data-number="04"><GlitchText>Projects</GlitchText></MobileNavLink>
            <ContactButton href="mailto:dk376907@gmail.com"><GlitchText>Let's Talk</GlitchText></ContactButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
