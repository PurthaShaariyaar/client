import React from 'react';
import CourseCreate from './components/CourseCreate';
import CourseList from './components/CourseList';

const App = () => {
  return (
    <div className='container'>
      <h1>Create a Course</h1>
      <CourseCreate />
      <hr />
      <h1>Available Courses</h1>
      <CourseList />
    </div>
  );
}

export default App;
