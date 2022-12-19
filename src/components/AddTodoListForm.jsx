import { Form, Formik } from "formik"
import { setState, useCallback } from "react"
import Button from "./Button"
import FormField from "./FormField"

const AddTodoListForm = () => {
  const initialValues = {
    description: "",
  }
  const handleSubmit = useCallback((values, { resetForm }) => {
    setState((current) => [...current, values])
    resetForm()
  }, [])

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
        <FormField
          label="Add todo"
          name="description"
          placeholder="Enter todo"
          type="text"
        />

        <Button type="submit" variant="submit">
          SUBMIT
        </Button>
      </Form>
    </Formik>
  )
}

export default AddTodoListForm
