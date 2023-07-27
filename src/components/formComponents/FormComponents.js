import React from 'react'
import { Form } from 'react-bootstrap'

export const FormComponents = ({label, ...rest}) => {
  return (

         <Form.Group className="mb-3" >
        <Form.Label>{label}</Form.Label>
        <Form.Control{...rest} />
       
      </Form.Group>

  )
}