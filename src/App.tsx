import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Home from './pages/Home';
import GitHubInfo from './pages/GitHubInfo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Client, cacheExchange, Provider as UrqlProvider, fetchExchange } from 'urql';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';

const client: Client = new Client({
  url: 'https://api.github.com/graphql',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: `Bearer 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`,
    },
  },
});

const theme = createTheme({

  typography: {

    fontSize: 16,
    allVariants: { color: '#000' },
  },

});

export default function App() {
  return (
    <UrqlProvider value={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes >
            <Route ErrorBoundary={() => <ErrorPage />} path='/' element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="/repos/:username" element={<GitHubInfo />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UrqlProvider>
  );
}
