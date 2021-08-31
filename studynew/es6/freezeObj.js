function deepFrozen(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach((key) => {
        if( typeof obj[key] === "object" && obj[key] !== null) {
          deepFrozen(obj[key])
        }
    }) 
  }