import ReactDOM from 'react-dom/client'
import { NewForm } from './components/NewForm';

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
  titles: ['DAW'],
  languages: ['ES', 'EN'],
  drivingLicense: 'yes',
  genre: 'male',
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

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

    // los checkBox se mostrarán en el formulario en el orden en el que estén en el objeto, no en las props
    checkbox={
      [
        { checkboxName: 'languages', selecteds: data2.languages, allowedValues: ['ES', 'EN', 'PT'] },
        { checkboxName: 'titles', selecteds: data2.titles, allowedValues: ['DAW', 'DAM'] },
      ]
    }
  />

)
