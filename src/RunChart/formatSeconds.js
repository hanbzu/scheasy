const readable = (h, m, s) => {
  h = (h !== 0) ? h.toString() + 'h ' : ''
  m = (m !== 0) ? m.toString() + '\' ' : ''
  s = (s !== 0) ? s.toString() + '\' ' : ''
  return h + m + s
}

export default d => {
  const hours = Math.floor(d / 3600)
  d -= hours * 3600
  const minutes = Math.floor(d / 60)
  const secs = d - minutes * 60
  return readable(hours, minutes, secs)
}
