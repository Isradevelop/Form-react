

export const useString = (arrayToConvert: any[]) => {

    const [label, value] = arrayToConvert;
    const useStringResult = `
        <label>${label}</label>
        <input type='text' value='${value}'/></br>
    `;

    return {
        useStringResult
    }
}
