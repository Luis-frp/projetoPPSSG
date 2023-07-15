import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css'
import 'admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css'
import 'admin-lte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)