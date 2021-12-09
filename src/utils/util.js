export const valuesSql = (data) => {
  try {
    let cadena = ''
    Object.values(data).map((value) => {
      if (typeof value === 'string') {
        cadena = cadena + `'${value}'` + ','
      } else {
        cadena = cadena + `${value}` + ','
      }
    })
    cadena = cadena.substr(0, cadena.length - 1)
    return cadena
  } catch (error) {
    throw error
  }
}

export const keysSql = (data) => {
  try {
    return Object.keys(data).join()
  } catch (error) {
    throw error
  }
}
