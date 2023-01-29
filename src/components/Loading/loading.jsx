import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingDiv } from './loading.styles';

const Loading = ({ type, color }) => (
  <LoadingDiv>
    <ReactLoading type={type} color={color} height={'15%'} width={'15%'} />
  </LoadingDiv>
);

export default Loading