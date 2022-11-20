import { Formik, Form, Field, ErrorMessage} from 'formik';
function NotesForm(){
    return(
        <Formik
            initialValues={{ title: "", message : ""}}
            validate= { values => {
                const errors = {}
                if(!values.title){
                    errors.title = "El titulo es requerido"
                } else if(!values.message){
                    errors.message = "El mensaje es requerido"
                }
                return errors;
            }}
        >
            {
                ()=>{
                    <Form className="form">
                      <div>
                        <label htmlFor="title">Titulo</label>
                        <Field type="text" name="title" />
                        <ErrorMessage name="title" component="p" />
                      </div>
                      <div>
                        <label htmlFor="message">Que quieres guardar?</label>
                        <Field as="textarea" name="body" />
                        <ErrorMessage name="title" component="p" />
                      </div>
                    </Form>;
                }
            }
            
        </Formik>
    )
}
export default NotesForm;