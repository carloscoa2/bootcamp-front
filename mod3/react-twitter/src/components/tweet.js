import React from 'react';

export default function Tweet(props) {
  const { id, value } = props.tweet;

  const handleButtonDelete = (e) => {
    props.handleDelete(e.target.id);
  };

  return (
    <li key={id}>
      <span>{value}</span>
      <button
        id={id}
        onClick={handleButtonDelete}
        style={{ marginLeft: '7px' }}
      >
        Apagar
      </button>
    </li>
  );
}
