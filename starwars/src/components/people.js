import React from 'react';
import styled from 'styled-components';

const PeopleDiv = styled.div`
  background-color: #000000;
  width: 300px;
  margin: 25px;
  font-size: 1.5rem;
  padding: 10px;
  border-radius: 8px;
  color: #ffe81f;
`;

const People = ({ propName, propHeight, propHairColor, propEyeColor }) => {
  return (
      <PeopleDiv>
        <div>{propName}</div>
        <div>Height: {propHeight} cm</div>
        <div>Hair color: {propHairColor}</div>
        <div>Eye color: {propEyeColor}</div>
      </PeopleDiv>
  );
};

export default People;
