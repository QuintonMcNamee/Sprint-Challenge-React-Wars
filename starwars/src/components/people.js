import React from 'react';
import styled from 'styled-components';

const PeopleDiv = styled.div`
  background-color: pink;

`;

const People = ({ propPeople }) => {
  return (
    <PeopleDiv>
      <div>{propPeople}</div>
    </PeopleDiv>
  );
};

export default People;
