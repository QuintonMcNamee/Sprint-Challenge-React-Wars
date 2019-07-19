import React from 'react';
import styled from 'styled-components';

const PeopleDiv = styled.div`
  background-color: pink;

`;

const People = ({ propName, propHeight, propHairColor, propEyeColor }) => {
  return (
    <PeopleDiv>
      <div>{propName}</div>
      <div>{propHeight} cm</div>
      <div>{propHairColor}</div>
      <div>{propEyeColor}</div>
      <p></p>
    </PeopleDiv>
  );
};

export default People;
