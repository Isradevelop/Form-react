import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Form } from './components/Form'
import { NewForm } from './components/NewForm';
//import './index.css'
import { ClientInterface } from './interfaces/clientInterface';


const data: ClientInterface = {
  name: 'Israel',
  surname: 'Duran',
  age: 18,
  parents: {
    mother: 'Lola',
    father: 'Paco'
  },
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
  titles: ['DAW'],
  genre: 'male',
  languages: ['ES', 'EN'],
  comment: 'Hola que hase',
  comment2: 'Hola que hase otra vez',
  drivingLicense: 'yes',
}

const data2 = {
  name: 'Israel',
  age: 18,
  parents: {
    mother: 'Lola',
    father: 'Paco'
  },
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
  comment: 'Hola que hase',
  comment2: 'Hola que hase otra vez',
  drivingLicense: 'yes',
  genre: 'male',
}


// PROBLEMA: tanto los checkbox como los radio, deben estar en el mismo orden en el objeto como en las Props.
// Si en el objeto los radio van en el orden (genre, drivingLicense), en las props no se podran pasar en orden inverso (drivingLicense, genre) 



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  // <Form
  //   objectToConvertToForm={data}
  //   textArea={
  //     [
  //       {
  //         textareaName: 'comment',
  //         textareaText: data.comment
  //       },
  //       {
  //         textareaName: 'comment2',
  //         textareaText: data.comment2
  //       }
  //     ]
  //   }
  //   checkbox={
  //     [
  //       { checkboxName: 'languages', selecteds: data.languages, allowedValues: ['ES', 'EN', 'PT'] },
  //       { checkboxName: 'titles', selecteds: data.titles, allowedValues: ['DAW', 'DAM'] },
  //     ]
  //   }
  //   radio={
  //     [
  //       { radioName: 'genre', selected: data.genre, allowedValues: ['male', 'female'] },
  //       { radioName: 'drivingLicense', selected: data.drivingLicense, allowedValues: ['yes', 'no'] },
  //     ]
  //   }
  // />



  <NewForm
    objectToConvertToForm={data2}
    textArea={['comment', 'comment2']}

    // los radio se mostrarán en el formulario en el orden en el que estén en el objeto, no en las props
    radio={
      [
        { radioName: 'genre', selected: data2.genre, allowedValues: ['male', 'female'] },
        { radioName: 'drivingLicense', selected: data2.drivingLicense, allowedValues: ['yes', 'no'] },
      ]
    }
    checkbox={
      [
        { checkboxName: 'languages', selecteds: data.languages, allowedValues: ['ES', 'EN', 'PT'] },
        { checkboxName: 'titles', selecteds: data.titles, allowedValues: ['DAW', 'DAM'] },
      ]
    }
  />

)
