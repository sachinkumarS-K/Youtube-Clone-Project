import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './page/Home.jsx'
import Spinner from './components/Spinner/Spinner.jsx'
import ResultPage from './page/ResultPage.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const WatchPage = lazy(() => import('./page/WatchPage.jsx'))
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route
        path="/watch"
        element={
          <Suspense fallback = {<Spinner />} >
            <WatchPage />
          </Suspense>
        }
      />
      <Route path='/results' element = {<ResultPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(

     <Provider store={store}>
     <RouterProvider router={appRouter} />
  </Provider>

);
