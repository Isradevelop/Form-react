
export const useNumber = (arrayToConvert: any[]) => {

    const [label, value] = arrayToConvert;
    const useNumberResult = `
        <label>${label}</label>
        <input type='number' value='${value}'/></br>
    `;

    return {
        useNumberResult
    }
}
