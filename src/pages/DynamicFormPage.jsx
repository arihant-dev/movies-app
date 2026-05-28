import React from 'react'
import DynamicForm from '../components/DynamicForm'

const DynamicFormPage = () => {
    const formConfig = {
        fields: [
          {
            name: "firstName",
            label: "First Name",
            type: "text",
            validation: {
              required: true,
              minLength: 2,
              maxLength: 30
            }
          },
          {
            name: "lastName",
            label: "Last Name",
            type: "text",
            validation: {
              required: true,
              minLength: 2,
              maxLength: 30
            }
          },
          {
            name: "email",
            label: "Email",
            type: "email",
            validation: {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            }
          },
          {
            name: "age",
            label: "Age",
            type: "number",
            validation: {
              required: true,
              min: 18,
              max: 100
            }
          },
          {
            name: "password",
            label: "Password",
            type: "password",
            validation: {
              required: true,
              minLength: 8
            }
          }
        ]
      };
    
      const handleSubmit = (values) => {
        console.log("Form submitted with values:", values);
      };
  return (
    <DynamicForm fields={formConfig.fields} onSubmit={handleSubmit} />
  )
}

export default DynamicFormPage
