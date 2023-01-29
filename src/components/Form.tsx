import { useEffect, useState } from 'react';

interface checkboxInterface {
    checkboxName: string,
    selecteds: string | string[],
    allowedValues: string[]
}

interface RadioInterface {
    radioName: string,
    selected: string,
    allowedValues: string[]
}

interface textAreaInterface {
    textareaName: string,
    textareaText: string
}

interface Props {
    objectToConvertToForm: any,
    textArea: textAreaInterface[],
    checkbox: checkboxInterface[]
    radio: RadioInterface[]
}

export const Form = ({ objectToConvertToForm, textArea, checkbox, radio }: Props) => {

    const [htmlFormState, setHtmlFormState] = useState('')
    let htmlForm: string = '<form>';
    let checkboxAsArray: any;
    let radioAsArray: any;

    const textareaAsArray = Object.entries(textArea);

    //convertimos el objeto qu e nos llega a array
    const objectToConvertToFormArray = Object.entries(objectToConvertToForm);
    console.log(objectToConvertToFormArray);

    if (typeof checkbox === 'object') {
        checkboxAsArray = Object.entries(checkbox);
    }

    if (typeof radio === 'object') {
        radioAsArray = Object.entries(radio);
    }


    useEffect(() => {

        objectToConvertToFormArray.map((objectToConvert) => {

            if (objectToConvert[0] === textArea[0].textareaName) {//textarea

                textArea.map((textAreaItem) => {

                    const textareaItemArray = Object.entries(textAreaItem);
                    htmlForm += `
                        <label>${textareaItemArray[0][1]}</label>
                        <textarea>${textareaItemArray[1][1]}</textarea></br>
                    `;
                })


            } else if (objectToConvert[0] === checkboxAsArray[0][1].checkboxName) {//checkbox

                checkboxAsArray.map((checkbox: any) => {
                    const checkboxItemAsArray: any = Object.entries(checkbox[1])

                    //label del checkbox
                    htmlForm += `
                        <p>${checkboxItemAsArray[0][1]}</br>
                    `
                    checkboxItemAsArray[2][1].map((checkbox: string | number) => {//creamos los checkbox que tendremos
                        if (checkboxItemAsArray[1][1].includes(checkbox)) {//evaluamos si el checkbox esta seleccionado
                            htmlForm += `
                            <label><input type="checkbox" checked>${checkbox}</label>
                        `
                        } else {
                            htmlForm += `
                            <label><input type="checkbox">${checkbox}</label>
                        `
                        }

                    })
                    htmlForm += `
                        </p></br>
                    `;
                })

            } else if (objectToConvert[0] === radioAsArray[0][1].radioName) {//radio

                radioAsArray.map((radio: any) => {
                    const radioItemAsArray: any = Object.entries(radio[1]);

                    //label del radio
                    htmlForm += `
                        <p>${radioItemAsArray[0][1]}</br>
                    `
                    radioItemAsArray[2][1].map((radioLabel: string | number) => {//creamos los radio que tendremos
                        if (radioItemAsArray[1][1].includes(radioLabel)) {//evaluamos si el radio esta seleccionado
                            htmlForm += `
                            <label><input type="radio" checked>${radioLabel}</label>
                        `
                        } else {
                            htmlForm += `
                            <label><input type="radio">${radioLabel}</label>
                        `
                        }

                    })
                    htmlForm += `
                        </p></br>
                    `
                });

            } else {

                if (Array.isArray(objectToConvert[1])) {

                    //array de objetos
                    objectToConvert[1].map((arrayElement) => {
                        const labels = Object.keys(arrayElement);
                        const values = Object.values(arrayElement);

                        if (typeof arrayElement != 'string') {
                            labels.map((label, index) => {
                                htmlForm += `
                                    <label>${label}</label>
                                    <input type='text' name='${label}-${index}' value='${values[index]}'/></br>
                                `
                            })
                        }

                    })

                } else if (typeof objectToConvert[1] === 'object') {

                    //objetos
                    if (objectToConvert[1] === null) return;

                    const objectAsArray = Object.entries(objectToConvert[1]);

                    objectAsArray.map((item: any, index: number) => {
                        htmlForm += `
                    <label>${item[0]}</label>
                    <input type='text' name='${item[0]}-${index}' value='${item[1]}' /></br>
                `
                    })
                } else if (objectToConvert[0] != textareaAsArray[1][1].textareaText) {
                    console.log(textareaAsArray[1])
                    //strings o numeros
                    htmlForm += `
                        <label>${objectToConvert[0]}</label>
                        <input type='text' name='${objectToConvert[0]}' value='${objectToConvert[1]}' /></br>
                    `

                }
            }


        })

        htmlForm += `<input type='submit' value='Modificar'/></form>`

        setHtmlFormState(htmlForm);
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlFormState }} />
    )
}