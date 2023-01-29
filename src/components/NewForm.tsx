import { useState, useEffect } from 'react';
import { useString } from "../hooks/useString";
import { useNumber } from '../hooks/useNumber';
import { useObject } from '../hooks/useObject';
import { useArrayObjects } from '../hooks/useArrayObjects';
import { useTextArea } from '../hooks/useTextArea';
import { useRadio } from '../hooks/useRadio';
import { useCheckbox } from '../hooks/useCheckbox';

interface Props {
    objectToConvertToForm: object,
    textArea?: string[],
    radio?: object[]
    checkbox?: object[]
}

export const NewForm = ({ objectToConvertToForm, textArea, radio, checkbox }: Props) => {

    const [formState, setFormState] = useState<string>('');

    const objectAsArray = Object.entries(objectToConvertToForm);

    let finalHtml: string;
    let radioNamesArray: string[] = [];
    let checkboxNamesArray: string[] = [];

    useEffect(() => {

        finalHtml = '<form>';

        // cogemos los radioName y los almacenamos en un array
        radio?.map((element) => {
            const radioNameAsArray = Object.entries(element);

            const [, radioName] = radioNameAsArray[0];

            radioNamesArray.push(radioName);
        });

        // cogemos los checkboxName y los almacenamos en un array
        checkbox?.map((element) => {
            const checkboxNameAsArray = Object.entries(element);

            const [, checkboxName] = checkboxNameAsArray[0];

            checkboxNamesArray.push(checkboxName);
        });

        objectAsArray.map((arrayElement) => {
            const [label, value] = arrayElement;

            // String, textarea y radioButton
            if (typeof value === 'string') {

                if (textArea?.includes(label)) {// textarea
                    const { useStringResult } = useTextArea(arrayElement);

                    finalHtml += useStringResult;
                    setFormState(finalHtml);

                } else if (radioNamesArray.includes(label)) {// radio

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
                    });

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

            // Array
            if (typeof value === 'object' && value.length) {

                if (typeof value[0] === 'string') { // array de string

                    checkbox?.map((checkboxItem) => {

                        const checkboxAsArray = Object.entries(checkboxItem);
                        const [, name] = checkboxAsArray[0];

                        if (label === name) {

                            const [, selectedsValue] = checkboxAsArray[1];
                            const [, allowedValues] = checkboxAsArray[2];

                            const { useCheckboxResult } = useCheckbox(name, selectedsValue, allowedValues);

                            finalHtml += useCheckboxResult;
                            setFormState(finalHtml);
                        }
                    });
                } else { // array de objetos

                    const { useArrayObjectsResult } = useArrayObjects(arrayElement);

                    finalHtml += useArrayObjectsResult;
                    setFormState(finalHtml);
                }
            }
        });

        finalHtml += "<input type='submit' value='Modificar'/></form>";
        setFormState(finalHtml);
    }, [])

    return (
        // convertimos un string con formato HTML a HTML
        <div dangerouslySetInnerHTML={{ __html: formState }} />
    )
}
