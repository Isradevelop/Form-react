
export const useTextArea = (arrayToConvert: any[]) => {

    const [label, value] = arrayToConvert;
    const useStringResult = `
        <label>${label}</label>
        <textarea>${value}</textArea></br>
    `;

    return {
        useStringResult
    }
}
