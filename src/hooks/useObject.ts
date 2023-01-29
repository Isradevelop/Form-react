
export const useObject = (objectToConvert: any[]) => {

    const [label, value] = objectToConvert;

    const objectAsArray = Object.entries(value);

    let useObjectResult = `<div><h3>${label}</h3>`;

    objectAsArray.map((element) => {
        const [label, value] = element;
        useObjectResult += `
            <label>${label}</label>
            <input type='text' value='${value}' /></br>
        `
    })

    return {
        useObjectResult
    }
}
