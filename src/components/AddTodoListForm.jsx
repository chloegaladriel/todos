import { Form, Formik } from "formik"
import Button from "./Button"
import FormField from "./FormField"

const AddTodoListForm = (props) => {
  const { onSubmit } = props
  const initialValues = {
    name: "",
  }
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name)

    resetForm()
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="flex flex-col gap-4">
        <FormField
          label="Add todo"
          name="name"
          placeholder="Todo's decription"
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
