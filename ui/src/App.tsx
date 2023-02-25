import './App.css';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Home';
import Day00 from './Experiments/Day00';

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

const toolbarStyles: React.CSSProperties = {
  gridArea: 'toolbar',
  backgroundColor: 'rgb(51, 51, 51)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
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

const Layout = () => {
  return (
    <div style={windowStyles}>
      <div style={topBarStyles} aria-label="Top bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={brand}>100 Days of OpenAI</div>
        </Link>
      </div>
      <div style={mainStyles}>
        <main><Outlet/></main>
      </div>
      <div style={bottomBarStyles} aria-label="Bottom bar">
        All your base are belong to us.
      </div>
    </div>
  );
};

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
  );
}

export default App;
