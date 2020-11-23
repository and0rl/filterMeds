import React, { useState } from 'react';
import styles from './medicines.module.css';
const Medicines = ({ medicines, searchTerm }) => {
  console.log(medicines);


  const filteredArray = Medicines.filter((medicine) => {
      medicine.toLowerCase().includes(searchTerm);
    if (medicine.name.includes(searchTerm) || medicine.company.includes(searchTerm)) {
      return medicine;
    }
  });

  //   const (ternary) = <condition> ? <ifTrue> : <ifFalse>
  const arrayToRender = searchTerm ? filteredArray(medicines, searchTerm) : medicines;

  //   function

  arrayToRender.map((m, i) => {
    return (
      <div>
        <medicine key={i} name={m.name} company={m.company} />
        {''}
      </div>
    );
  });

  // const arrayToRender = ({ options,})

  const myMedStyle = {
    textAlign: 'center',
    margin: '15px',
    border: '1px solid',
    padding: '15px',
    backgroundColor: 'lightgrey',
  };

  if (!medicines) {
    return <div>no medicines</div>;
  }

  return (
    <div className={styles.root}>
      looks like you have {medicines.length} medicines!
      {medicines.map((m, i) => (
        <div style={myMedStyle} key={i}>
          {' '}
          name: {m.name}, <br /> company: {m.company}{' '}
        </div>
      ))}
    </div>
  );
};

export default Medicines;
