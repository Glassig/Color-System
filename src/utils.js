export const convertHexToRGB = color => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  color = color.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)

  const r = parseInt(result[1], 16),
    g = parseInt(result[2], 16),
    b = parseInt(result[3], 16)

  return `rgb(${r},${g},${b})`
}
