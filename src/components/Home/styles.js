export const container = {
  background: '#fff',
  title: {
    color: '#dfd7ed',
    fontSize: 32,
    margin: 0
  },
  link: {
    color: '#b8b1c5',
    marginTop: 6
  }
}

export const searchBox = {
  border: 'none',
  padding: 12,
  borderRadius: 6,
  width: 250,
  margin: 12
}

export const suggestions = {
  borderRadius: 6,
  width: 250 + 24,
  overflow: 'hidden'
}

export const suggestion = {
  display: 'flex',
  background: '#fff',
  padding: '8px 10px',
  fontSize: 14,
  cursor: 'pointer',
  transition: 'background 0.03s',
  color: '#333',
  name: {
    flex: 1,
    textDecoration: 'none'
  },
  count: {
    textDecoration: 'none'
  },
  hover: {
    background: '#eee'
  },
  loading: {
    background: '#efefef',
    color: '#999'
  }
}
