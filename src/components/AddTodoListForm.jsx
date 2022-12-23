import { Form, Formik } from "formik"
import * as yup from "yup"
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

  const validationSchema = yup.object({
    name: yup.string().min(1).label("name"),
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-4">
        <FormField
          label="Add todo list"
          name="name"
          placeholder="Todo list's name"
          type="text"
        />

        <Button
          type="submit"
          variant="submit"
          validationSchema={validationSchema}
        >
          SUBMIT
        </Button>
      </Form>
    </Formik>
  )
}

export default AddTodoListForm
