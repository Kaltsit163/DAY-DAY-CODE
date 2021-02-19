
const flatten = arr => {
	return arr.flat();
}

const flatten = arr => {
  return arr.reduce((flat, toFlat) => {
    return flat.concat(Array.isArray(toFlat) ? flatten(toFlat) : toFlat);
  }, [])
}
