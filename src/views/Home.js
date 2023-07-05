import Navbar from "./componentes/Navbar"
import Filtros from "./componentes/Filtros"
import Header from "./componentes/Header"
import Indicadores  from "./componentes/Indicadores"
import GraficoProducao from "./componentes/Graficos"
import DocenteQualis from "./componentes/DocenteQualis"
import { useEffect } from "react"
import {Helmet} from "react-helmet";


export default function Home () {
    useEffect( () =>
document.body.classList.add('hold-transition', 'layout-top-nav')    
);
<Helmet>
   <script src="https://use.typekit.net/foobar.js"></script>
</Helmet>
    return (
            <div className="wrapper">
                <Navbar />
                <div className="content-wrapper">
                    <Header titulo="Programa" />
                    {/*<!-- Main content -->*/}
                    <div className="content">      
                    <div className="container">
                        <div className="container-fluid">
                            <Filtros />
                            <Indicadores />
                            <GraficoProducao titulo="Produção vs Qualis" />
                            <DocenteQualis />
                        </div>
                    </div>
                    </div>
                </div>
            </div>        
    );
}