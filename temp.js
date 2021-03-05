function convert(a, b) {

    const toKelvin = (m,t) => {
          if  (m === 'kelvin'){
              return t
          }

          if (m==="celcius") {
             //return C to K
          }

          if (m==="fahrenheit") {
             //return F to K
          }
    }

    const toFahrenheit = (m,t) => {
          if  (m === 'fahrenheit'){
              return t
          }

          if (m==="celcius") {
             //return C to F
          }

          if (m==="kelvin") {
             //return K to F
          }
    }

    const toCelcius = (m,t) => {
          if  (m === 'celcius'){
              return t
          }

          if (m==="fahrenheit") {
             //return F to C
          }

          if (m==="kelvin") {
             //return K to C
          }
    }

    m = a[0];
    t = b[1];

    if (b === "kelvin") {
      return toKelvin(m, t)
    } else if (b === "celcius") {
      return tocelcius(m,t)
    } else {
      return tofahrenheit(m,t)
    }
}
