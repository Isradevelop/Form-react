
export const useArrayObjects = (objectToConvert: any[]) => {


    const [label, value] = objectToConvert;

    const arrayObjectAsArray = Object.entries(value);

    let useArrayObjectsResult = `<div><h3>${label}</h3>`;

    arrayObjectAsArray.map((element: any) => {
        const [index, object] = element;
        const objectAsArray = Object.entries(object);

        objectAsArray.map((arrayItem) => {

            const [label, value] = arrayItem;

            useArrayObjectsResult += `
                <label>${label}</label>
                <input type='text' value='${value}' /></br>
            `
        })

    })

    return {
        useArrayObjectsResult
    }
}
