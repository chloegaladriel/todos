import { Form, Formik } from "formik"
import * as yup from "yup"
import Button from "./Button"
import FormField from "./FormField"

const AddTodoForm = (props) => {
  const { onSubmit } = props

  const initialValues = {
    description: "",
  }

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.description)

    resetForm()
  }

  const validationSchema = yup.object({
    description: yup.string().min(1).label("description"),
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-4">
        <FormField
          label="Add todo"
          name="description"
          placeholder="Todo's decription"
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

export default AddTodoForm
