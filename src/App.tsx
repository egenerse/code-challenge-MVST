import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import DashLayout from './components/DashLayout';
import Home from './pages/Home';
import GitHubInfo from './pages/GitHubInfo';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Client, cacheExchange, Provider as UrqlProvider, fetchExchange } from 'urql';
import ErrorPage from './pages/ErrorPage';

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

  // palette: {

  //   primary: { main: 'black' },
  // },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: 16,
    allVariants: { color: '#000' },
    // You can customize other typography settings here.
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderColor: 'black',
  //         color: 'black',
  //         '&:hover': {
  //           backgroundColor: '#fff', // Hover background color for primary buttons
  //         },
  //       },
  //     },
  //   },
  // },
});

export default function App() {
  return (
    <UrqlProvider value={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes >
            <Route ErrorBoundary={() => <ErrorPage />} path='/' element={<DashLayout />}>
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
