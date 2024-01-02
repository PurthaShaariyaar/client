// Import required modules
import React, { useState } from 'react';
import axios from 'axios';

/**
 * Course create component
 * Use useState to handle states
 * Create an onSubmit handler & use axios to POST data to specific endpoint
 * Use form to init a form for user input including a button
 */
const CourseCreate = () => {

  const [name, setName] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:4000/courses', {
      name
    });

    setName('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group py-2'>
          <label>New Course Name</label>
          <input
            className='form-control'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <button className='btn btn-primary'>Submit Course</button>
      </form>
    </div>
  );
}

export default CourseCreate;
