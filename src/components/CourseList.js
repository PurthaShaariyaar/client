// Import required modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DescriptionCreate from './DescriptionCreate';
import DescriptionList from './DescriptionList';

const CourseList = () => {

  const [courses, setCourses] = useState({});

  const fetchCourses = async () => {
    const res = await axios.get('http://localhost:4002/courses');
    console.log(res.data);
    setCourses(res.data);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const renderedCourses = Object.values(courses).map(course => {
    return (
      <div
        className='card'
        style={{ width: '30%', marginBottom: '20px' }}
        key={course.id}
      >
        <div className='card-body'>
          <h3>{course.name}</h3>
          <DescriptionList
            descriptions={course.descriptions}
          />
          <DescriptionCreate
            courseId={course.id}
          />
        </div>
      </div>
    );
  });

  return (
    <div className='d-flex flex-row flex-wrap justify-content-between'>
      {renderedCourses}
    </div>
  );
}

export default CourseList;
