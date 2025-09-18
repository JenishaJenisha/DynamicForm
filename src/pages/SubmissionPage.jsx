import React from 'react';
import formConfig from '../DynamicForm/FormConfig';

const SubmissionPage = () => {
  const submissions = JSON.parse(localStorage.getItem('submissions') || '[]');

  return (
    <div className="container">
      <h1>Submissions</h1>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                {formConfig.map((field) => (
                  <th key={field.id}>{field.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr key={submission.id}>
                  <td>{submission.id}</td>
                  {formConfig.map((field) => (
                    <td key={field.id}>
                      {Array.isArray(submission[field.id])
                        ? submission[field.id].join(', ')
                        : submission[field.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SubmissionPage;