import React from 'react';
import styled, { keyframes } from 'styled-components';
import rotateArrow from '../assets/rotate-arrow-100.png';

interface ILoadingParam {
  loadingText: string;
}

const LoadingContainer = styled.div``;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.img`
  animation: ${rotate} 2s infinite linear;
  top: calc(50vh - 50px);
  position: absolute;
  left: calc(50vw - 50px);
`;

const Loading = ({ loadingText }: ILoadingParam) => (
  <React.Fragment>
    <LoadingIcon src={rotateArrow} alt="loading" />
    {loadingText}
  </React.Fragment>
);

export default Loading;
