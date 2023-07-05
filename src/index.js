import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home';
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.min.css'
import 'admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css'
import 'admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css'
import 'admin-lte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css'
import Docente from './views/Docente';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Docente/>
  </React.StrictMode>
);
