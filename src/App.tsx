import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home/Home';
import GitHubInfo from './pages/GitHubInfo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer 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`,
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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route ErrorBoundary={() => <ErrorPage />} path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="/repos/:username" element={<GitHubInfo />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}
