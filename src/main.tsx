import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Form } from './components/Form'
import { FormikForm } from './components/FormikForm'
//import './index.css'
import { ClientInterface } from './interfaces/clientInterface';


const data: ClientInterface = {
  name: 'Israel',
  surname: 'Duran',
  works: [
    {
      type: 'camarero',
      sector: 'hosteleria'
    },
    {
      type: 'programador',
      sector: 'it'
    }
  ],
  parents: {
    mother: 'Lola',
    father: 'Paco'
  },
  age: 18,
  languages: ['ES', 'EN'],
  comment: 'Hola que hase',
  genre: 'male',
  titles: ['DAW'],
  drivingLicense: 'yes'
}






ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <Form
    objectToConvertToForm={data}
    textArea={'comment'}
    checkbox={
      [
        { checkboxName: 'languages', selecteds: ['ES', 'EN'], values: ['ES', 'EN', 'PT'] },
        { checkboxName: 'titles', selecteds: ['DAW'], values: ['DAW', 'DAM'] },
      ]
    }
    radio={
      [
        { radioName: 'genre', selected: data.genre, values: ['male', 'female'] },
        { radioName: 'driving license', selected: data.drivingLicense, values: ['yes', 'no'] }
      ]
    }
  />
  // <FormikForm objectToConvertToForm={data} />

)
