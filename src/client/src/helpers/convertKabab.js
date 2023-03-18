export const convertKabab = (kabab) => {
  let converted = kabab.split('-')
  .map(word => {
    return word.slice(0, 1).toUpperCase() + word.slice(1)
  })
  .join(' ')
  return converted
}