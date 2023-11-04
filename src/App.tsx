import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home/Home';
import GitHubInfo from './pages/GitHubInfo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ErrorPage from './pages/ErrorPage';
import NavBar from './components/NavBar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const apiKey = import.meta.env.VITE_GITHUB_API_KEY;
const graphqlAPIURL = import.meta.env.VITE_GRAPHQL_API_URL;
const authorization = apiKey && `Bearer ${apiKey}`;

const client = new ApolloClient({
  uri: graphqlAPIURL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: authorization,
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
