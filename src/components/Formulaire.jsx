import React from 'react';
import{Formik,Form} from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const Formulaire = () => {
    const validate =Yup.object(
        {
          nom: Yup.string().max(16,'just 16 characters').required('Required'),
          prenom: Yup.string().max(14,'just 14 characters').required('Required'),
          email: Yup.string().email('email is invalide').required(' Email is Required'),
            mot_de_passe: Yup.string().min(8,'password must be at least 8 characters').required(' Password is Required'),
          Cmotdepasse: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
    
        }
    
      )
    return (
        <Formik
        initialValues={{
            nom:'',
            prenom:'',
            email:'',
            mot_de_passe:'',
            Cmotdepasse:'',
        }}
        validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
        >
            {formik=>{
                <div>
                    <h1 className='my-4 font-weight-bold-display-4'> Formulaire</h1>
                   
                    <Form>
<TextField label="nom" name="nom" type="text"/>
<TextField label="prenom" name="prenom" type="text"/>
<TextField label="email" name="email" type="email"/>
<TextField label="mot_de_passe" name="mot_de_passe" type="password"/>
<TextField label="Cmotdepasse" name="Cmotdepasse" type="password"/>
<button className='btn btn-dark mt-3' type ="submit" style={{marginRight:"15px"}}>Register</button>
<button className='btn btn-danger mt-3 ml-3' type ="reset">Reset</button>
                    </Form>
                </div>
            }}
        </Formik>
    );
};

export default Formulaire;