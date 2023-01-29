import { useState, useEffect } from 'react';
import { useString } from "../hooks/useString";
import { useNumber } from '../hooks/useNumber';
import { useObject } from '../hooks/useObject';
import { useArrayObjects } from '../hooks/useArrayObjects';
import { useTextArea } from '../hooks/useTextArea';
import { useRadio } from '../hooks/useRadio';

interface Props {
    objectToConvertToForm: object,
    textArea?: string[],
    radio?: object[]
    checkbox?: object[]
}

export const NewForm = ({ objectToConvertToForm, textArea, radio }: Props) => {

    const [formState, setFormState] = useState<string>('');

    const objectAsArray = Object.entries(objectToConvertToForm);

    // console.log(objectAsArray)
    // console.log(radio)

    let finalHtml: string;
    let radioNamesArray: string[] = [];

    useEffect(() => {

        finalHtml = '<form>';

        // cogemos los radioName y los almacenamos en un array
        radio?.map((element) => {
            const radioNameAsArray = Object.entries(element);

            const [, radioName] = radioNameAsArray[0];

            radioNamesArray.push(radioName);
        });

        objectAsArray.map((arrayElement) => {
            //console.log(arrayElement)
            const [label, value] = arrayElement;
            // console.log(label);

            // console.log(radioNamesArray)
            // String and textarea
            if (typeof value === 'string') {

                if (textArea?.includes(label)) {// textarea
                    const { useStringResult } = useTextArea(arrayElement);

                    finalHtml += useStringResult;
                    setFormState(finalHtml);

                } else if (radioNamesArray.includes(label)) {// radio
                    console.log(label);
                    const radioAsArray = Object.entries(arrayElement);

                    radio?.map((radioItem) => {

                        const radioAsArray = Object.entries(radioItem);
                        const [, name] = radioAsArray[0];
                        if (label === name) {

                            const [, selectedValue] = radioAsArray[1];
                            const [, allowedValues] = radioAsArray[2];

                            const { useRadioResult } = useRadio(name, selectedValue, allowedValues);

                            finalHtml += useRadioResult;
                            setFormState(finalHtml);
                        }
                    })

                } else {//string

                    const { useStringResult } = useString(arrayElement);

                    finalHtml += useStringResult;
                    setFormState(finalHtml);
                }

            }

            // Numero
            if (typeof value === 'number') {
                const { useNumberResult } = useNumber(arrayElement);

                finalHtml += useNumberResult;
                setFormState(finalHtml);
            }

            // Objetos
            if (typeof value === 'object' && value.length === undefined) {

                const { useObjectResult } = useObject(arrayElement);

                finalHtml += useObjectResult;
                setFormState(finalHtml);
            }

            // Array de objetos
            if (typeof value === 'object' && value.length) {

                const { useArrayObjectsResult } = useArrayObjects(arrayElement);

                finalHtml += useArrayObjectsResult;
                setFormState(finalHtml);
            }
        });





        finalHtml += "<input type='submit' value='Modificar'/></form>";
        setFormState(finalHtml);
        //console.log(formState);
    }, [])




    return (

        <div dangerouslySetInnerHTML={{ __html: formState }} />

    )
}
