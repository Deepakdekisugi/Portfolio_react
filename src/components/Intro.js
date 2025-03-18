import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Me from '../assets/Images/profile-img.png';

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    )
    bottom,
    linear-gradient(
      to right,
      ${(props) => props.theme.body} 50%,
      ${(props) => props.theme.text} 50%
    )
    top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Button = styled.a`
  text-decoration: none;
  font-size: calc(0.6rem + 0.3vw);
  font-weight: 600;
  color: ${(props) => props.theme.body};
  background: rgba(255, 255, 255, 0.1);
  padding: 0.3rem 0.9rem;
  border-radius: 20px;
  text-align: center;
  margin: 0.4rem auto 0;
  width: fit-content;
  display: block;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease-in-out;
  border: 2px solid transparent;

  /* Inner Pulsating Glow */
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(45deg, #ff8a00, #e52e71);
    opacity: 0.3;
    filter: blur(15px);
    z-index: -1;
    animation: pulse 2.5s infinite ease-in-out;
  }

  /* Hover Effect */
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(255, 138, 0, 0.5);
  }

  @keyframes pulse {
    0% { opacity: 0.4; filter: blur(12px); }
    50% { opacity: 0.7; filter: blur(18px); }
    100% { opacity: 0.4; filter: blur(12px); }
  }
`;


const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Deepak.</h3>
          <h6>I design and Code simple yet beautiful websites.</h6>
          <Button href="/resume.pdf" download>
            Resume
          </Button>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
