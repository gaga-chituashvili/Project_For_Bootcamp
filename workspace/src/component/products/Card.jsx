import React from 'react';

const Card = ({ employee }) => {
  return (
    <article className='w-[381px] h-[217px] border border-solid border-black'>
      <h6>{employee.name}</h6>
      <h6>{employee.surname}</h6>
    </article>
  );
};

export default Card;
