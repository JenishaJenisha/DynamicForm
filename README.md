# Dynamic React Form Application

This project is a fully dynamic, responsive React application that generates forms based on a JSON configuration. It features real-time validation, persistent storage using localStorage, and a submission display page—all styled for a clean, professional look.

## Features

- **Dynamic Form Generation:**  
  The form is built from a JSON config, supporting text, email, number, select, radio, and checkbox fields.

- **Real-time Validation:**  
  Required fields, email format, and minimum values are validated as you type. Invalid fields are highlighted and error messages are shown.

- **Persistent Storage:**  
  Submissions are saved to localStorage and persist across page refreshes.

- **Submission Table:**  
  All submissions are displayed in a responsive table with dynamic headers and a unique ID for each entry.

- **Responsive Design:**  
  The form and table are fully responsive and look great on mobile, tablet, and desktop.

- **Professional Styling:**  
  Consistent spacing, clear error highlighting, and visual hierarchy for a polished user experience.

## Project Structure

```
src/
  ├── App.jsx
  ├── App.css
  ├── index.js
  ├── DynamicForm/
  │     ├── DynamicForm.jsx
  │     └── FormConfig.js
  └── pages/
        ├── FormPage.jsx
        └── SubmissionPage.jsx
```

## How It Works

- **FormPage:**  
  Renders the dynamic form. On submit, data is validated, saved to localStorage, and the user is redirected to the submissions page.

- **SubmissionPage:**  
  Displays all submissions in a table. If there are no submissions, a friendly message is shown.

- **Navigation:**  
  The navbar allows switching between the form and submissions page. The active page is highlighted.

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the app:**
   ```
   npm run dev
   ```

3. **Open in your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization

- To change the form fields, edit `src/DynamicForm/FormConfig.js`.
- To adjust styling, edit `src/App.css`.

## Assumptions

- No external UI libraries (like Bootstrap or Tailwind) are used.
- All form field types and validation rules are defined in the JSON config.
- Data is stored in localStorage for persistence.

---

**Author:**  
[Jenisha]