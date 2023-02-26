import './App.css'
import { useState } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './Home'
import Day00 from './Experiments/Day00'
import { Label, Stack, TextField } from '@fluentui/react'

const windowStyles: React.CSSProperties = {
  margin: 0,
  padding: 0,
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateRows: '40px 1fr 22px',
  gridTemplateColumns: '48px 1fr',
  gridTemplateAreas: `
    'topBar topBar'
    'toolbar main'
    'bottomBar bottomBar'
  `,
}

const topBarStyles: React.CSSProperties = {
  gridArea: 'topBar',
  backgroundColor: '#04395e',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}

const brand: React.CSSProperties = {
  fontSize: 12,
  color: 'white',
  textDecoration: 'none',
  padding: '0 10px',
  width: 145,
}

const mainStyles: React.CSSProperties = {
  gridArea: 'main',
  padding: '20px',
  overflowY: 'auto',
}

const bottomBarStyles: React.CSSProperties = {
  gridArea: 'bottomBar',
  backgroundColor: 'rgb(0, 122, 204)',
  color: 'white',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 12,
  padding: '0 10px',
}

// const hiddenKey = (key: string) => {
//   if (key === '') return ''
//   return key.substring(0, 3) + '...' + key.substring(key.length - 3)
// }

const Layout = () => {
  const [openAIKey, setOpenAIKey] = useState<string>(
    sessionStorage.getItem('openAIKey') || ''
  )

  const handleKeyChange = (
    _: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (newValue === '' || newValue === undefined) {
      sessionStorage.removeItem('openAIKey')
    } else {
      sessionStorage.setItem('openAIKey', newValue)
    }
    setOpenAIKey(newValue || '')
  }

  return (
    <div style={windowStyles}>
      <div style={topBarStyles} aria-label="Top bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={brand}>100 Days of OpenAI</div>
        </Link>
        <Stack horizontal={true} style={{ marginRight: '5px' }}>
          <Label style={{ color: 'white', marginRight: '0.5em' }}>
            OpenAI Key
          </Label>
          <TextField
            id="OpenAIKey"
            onChange={handleKeyChange}
            value={openAIKey}
            style={{ width: '120px' }}
            placeholder="Paste key here"
          ></TextField>
        </Stack>
      </div>
      <div style={mainStyles}>
        <main>
          <Outlet />
        </main>
      </div>
      <div style={bottomBarStyles} aria-label="Bottom bar">
        All your base are belong to us.
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="day-00" element={<Day00 />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
