import Home from './pages/Home';
import GlobalStyles from './styles/global';
import AppProvider from './hooks/context';
function App() {
  return (
    <>
      <AppProvider>
        <Home/>
      </AppProvider>
      <GlobalStyles/>
    </>
  );
}

export default App;
