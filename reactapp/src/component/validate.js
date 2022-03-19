import react from 'react'


function validate(e){
    const initialValues = { email: "", password:"" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    

    const handleChange = (e) => { 
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    
        

    useEffect(() => {
        console.log('form errors*******',formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        // console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        
        if (!values.email) {
            errors.email = "Email is required!";
        } 
        else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    }

}

export default validate