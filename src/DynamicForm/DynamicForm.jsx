import React, { useState, useEffect } from 'react';
import '../App.css';

const DynamicForm = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors({});
  }, [config]);

  const handleChange = (e, field) => {
    const {  value, checked } = e.target;
    if (field.type === 'checkbox') {
      const prev = formData[field.id] || [];
      const newChecked = checked
        ? [...prev, value]
        : prev.filter((val) => val !== value);
      setFormData({ ...formData, [field.id]: newChecked });
    } else if (field.type === 'radio') {
      setFormData({ ...formData, [field.id]: value });
    } else {
      setFormData({ ...formData, [field.id]: value });
    }
  };

  const validateForm = () => {
    let validationErrors = {};
    config.forEach(field => {
      if (field.required) {
        if (field.type === 'checkbox' && (!formData[field.id] || formData[field.id].length === 0)) {
          validationErrors[field.id] = `${field.label} is required`;
        } else if (!formData[field.id]) {
          validationErrors[field.id] = `${field.label} is required`;
        }
      }
      if (field.type === 'email' && formData[field.id] && !/\S+@\S+\.\S+/.test(formData[field.id])) {
        validationErrors[field.id] = 'Please enter a valid email address';
      }
      if (field.type === 'number' && formData[field.id] && Number(formData[field.id]) < (field.min || 0)) {
        validationErrors[field.id] = `${field.label} must be greater than or equal to ${field.min}`;
      }
    });
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
      setFormData({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="dynamic-form">
      {config.map((field) => (
        <div key={field.id} className="form-group">
          <label htmlFor={field.id}>{field.label}</label>
          {field.type === 'text' || field.type === 'email' || field.type === 'number' ? (
            <input
              type={field.type}
              id={field.id}
              value={formData[field.id] || ''}
              onChange={(e) => handleChange(e, field)}
              required={field.required}
              min={field.min}
              className={errors[field.id] ? 'invalid' : ''}
            />
          ) : field.type === 'select' ? (
            <select
              id={field.id}
              value={formData[field.id] || ''}
              onChange={(e) => handleChange(e, field)}
              required={field.required}
              className={errors[field.id] ? 'invalid' : ''}
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          ) : field.type === 'radio' ? (
            field.options.map((option) => (
              <label key={option} className="radio-label">
                <input
                  type="radio"
                  name={field.id}
                  value={option}
                  checked={formData[field.id] === option}
                  onChange={(e) => handleChange(e, field)}
                  required={field.required}
                />
                {option}
              </label>
            ))
          ) : field.type === 'checkbox' ? (
            field.options.map((option) => (
              <label key={option} className="checkbox-label">
                <input
                  type="checkbox"
                  name={field.id}
                  value={option}
                  checked={formData[field.id]?.includes(option) || false}
                  onChange={(e) => handleChange(e, field)}
                />
                {option}
              </label>
            ))
          ) : null}
          {errors[field.id] && <div className="error">{errors[field.id]}</div>}
        </div>
      ))}
      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;