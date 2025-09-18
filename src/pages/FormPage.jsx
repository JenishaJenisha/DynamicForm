import React from 'react';
import DynamicForm from '../DynamicForm/DynamicForm';
import formConfig from '../DynamicForm/FormConfig';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');
    const submissionWithId = { ...data, id: Date.now() };
    localStorage.setItem('submissions', JSON.stringify([...submissions, submissionWithId]));
    navigate('/submissions');
  };

  return (
    <div className="container">
     <div className="card">
        <h1>Dynamic Form</h1>
        <DynamicForm config={formConfig} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default FormPage;