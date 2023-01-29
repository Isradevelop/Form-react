
export const useRadio = (name: string, selectedValue: string, allowedValues: any) => {

  let useRadioResult = `
    <h3>${name}</h3>
  `;

  allowedValues.map((value: string) => {

    if (value === selectedValue) {
      useRadioResult += `
        <input type="radio" id="${value}" name="${name}" value="${value}" checked>
        <label for="${value}">${value}</label>
      `
    } else {
      useRadioResult += `
        <input type="radio" id="${value}" name="${name}" value="${value}">
        <label for="${value}">${value}</label>
      `
    }

  })

  useRadioResult += '</br>';

  return {
    useRadioResult
  }
}
