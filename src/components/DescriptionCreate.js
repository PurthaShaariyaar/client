// Import required modules
import React, { useState } from 'react';
import axios from 'axios';

/**
 * Create a Description Create component
 */
const DescriptionCreate = ({ courseId }) => {

  const [description, setDescription] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/courses/${courseId}/descriptions`, {
      description
    });

    setDescription('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group py-2'>
          <label>New Description</label>
          <input
            className='form-control'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit Description</button>
      </form>
    </div>
  )
}

export default DescriptionCreate;
