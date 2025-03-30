import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-is1vpq3ecbl6cfti.us.auth0.com"
    clientId="jkiCgRtvd2n9fvkLaSz1JcUp67kFGTk3"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
