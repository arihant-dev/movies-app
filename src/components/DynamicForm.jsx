import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DynamicForm = ({ fields, onSubmit }) => {
  const validationSchema = Yup.object().shape(
    fields.reduce((acc, field) => {
      if (field.type === 'email') {
        acc[field.name] = Yup.string().email('invalid email').required('Required');
      } else if (field.type === 'password') {
        acc[field.name] = Yup.string().min(8, 'minmum 8 characters').required('Required');
      } else if (field.type === 'text') {
        acc[field.name] = Yup.string().required('Required');
      } else if (field.type === 'number') {
        acc[field.name] = Yup.number().required('Required');
      }
      return acc;
    }, {})
  );

  const initialValues = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {});

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form>
          {fields.map((field) => (
            <div key={field.name} style={{ marginBottom: '15px' }}>
              <label>{field.label}</label>
              <Field as="input" type={field.type} name={field.name} />
              <ErrorMessage name={field.name} component="div" style={{ color: 'red', fontSize: '12px' }} />
            </div>
          ))}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default DynamicForm;

//   return (
//     <form onSubmit={handleSubmit}>
//         {fields.map((field, index) => (
//             <div key={index} style={{ marginBottom: "1rem" }}>
//                 <label>{field.label}</label>
//                 {field.type === "text" && (
//                     <input 
//                         type="text"
//                         value={field.value}
//                         onChange={(e) => handleChange(index, e)}
//                     />
//                 )}
//                 {field.type === "select" && (
//                     <select value={field.value} onChange={(e) => handleChange(index, e)}>
//                         {field.options.map((option, idx) => (
//                             <option key={idx} value={option}>{option}</option>
//                         ))}
//                     </select>
//                 )}
//                 {field.type === "checkbox" && (
//                     <div>
//                         <label>
//                             <input 
//                                 type="checkbox"
//                                 checked={field.value}
//                                 onChange={(e) => handleChange(index, e)}
//                             />
//                             {field.label}
//                         </label>
//                     </div>
//                 )}
//                 {field.type === "date" && (
//                     <DatePicker
//                         selected={field.value}
//                         onChange={(date) => handleChange(index, { target: { value: date } })}
//                         dateFormat="yyyy-MM-dd"
//                         slotProps={{
//                             input: {
//                                 style: { width: "100%", padding: "0.5rem", fontSize: "1rem" }
//                             }
//                         }}
//                     />
//                 )}
//                 {field.type === "radio" && (
//                     <div>
//                         {field.options.map((option, idx) => (
//                             <label key={idx}>
//                                 <input 
//                                     type="radio"
//                                     name={`radio-${index}`}
//                                     value={option}
//                                     checked={field.value === option}
//                                     onChange={(e) => handleChange(index, e)}
//                                 />
//                                 {option}
//                             </label>
//                         ))}
//                     </div>
//                 )}
//             {field.type === "message" && (
//                 <textarea 
//                     value={field.value}
//                     onChange={(e) => handleChange(index, e)}
//                     style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
//                 />
//             )}
//             {field.type === "file" && (
//                 <input 
//                     type="file"
//                     onChange={(e) => handleChange(index, { target: { value: e.target.files[0] } })}
//                 />
//             )}
//             {field.type === "submit" && (
//                 <button type="submit">Submit</button>
//             )}
//             {field.type === "button" && (
//                 <button type="button">Click Me</button>
//             )}
//             {field.type ==="number" && (
//                 <input 
//                     type="number"
//                     value={field.value}
//                     onChange={(e) => handleChange(index, e)}
//                 />
//             )}
//             {field.type === "email" && (
//                 <input 
//                     type="email"
//                     value={field.value}
//                     onChange={(e) => handleChange(index, e)}
//                 />
//             )}
//             {field.type === "password" && (
//                 <input 
//                     type="password"
//                     value={field.value}
//                     onChange={(e) => handleChange(index, e)}
//                 />
//             )}
//             </div>
//         ))}
//         <button type="submit">Submit</button>
//     </form>
//   )
// }