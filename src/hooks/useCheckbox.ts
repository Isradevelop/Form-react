
export const useCheckbox = (name: string, selectedsValue: string[], allowedValues: string[]) => {

    let useCheckboxResult = `
        <h3>${name}</h3>
    `;
    allowedValues.map((allowedValue: string) => {

        if (selectedsValue.includes(allowedValue)) {

            useCheckboxResult += `
                <label>
                    <input type="checkbox" value="${allowedValue}" checked> 
                    ${allowedValue}
                </label>
            `

        } else {

            useCheckboxResult += `
                <label>
                    <input type="checkbox" value="${allowedValue}"> 
                    ${allowedValue}
                </label>
            `

        }

    })

    useCheckboxResult += '</br>';

    return {
        useCheckboxResult
    }
}
