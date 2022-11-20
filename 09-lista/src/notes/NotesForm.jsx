import { Formik, Form, Field, ErrorMessage} from 'formik';

function NotesForm(){
    return(
        <Formik
            initialValues={{ title: "", message : ""}}
            validate= { values => {
                const errors = {};
                if(!values.title){
                    errors.title = "The title is required"
                } else if(!values.message){
                    errors.message = "The message is required"
                }
                return errors;
            }}
        >
            {
                ({isSubmitting})=>(
                    <Form className="form">
                      <div>
                        <label htmlFor="title">Title</label>
                        <Field type="text" name="title" />
                        <ErrorMessage name="title" component="p" />
                      </div>
                      <div>
                        <label htmlFor="message">What do you want to keep?</label>
                        <Field as="textarea" name="message" />
                        <ErrorMessage name="message" component="p" />
                      </div>
                      <button type='submit' disabled={isSubmitting}>
                        {isSubmitting ?  "Saving your note..." : "Save note"}
                      </button>
                    </Form>
                )
            }
            
        </Formik>
    )
}
export default NotesForm;