import {useEffect} from 'react'
import {useState} from 'react'
import axios from 'axios'
import Navbar from './componentes/Navbar'  
import Header from './componentes/Header'
import Filtros from './componentes/Filtros'
import Indicadores from './componentes/Indicadores'
import DocenteQualis from'./componentes/DocenteQualis' 
import GraficoProducao from './componentes/Graficos'

export default function Docente(){
 
        const [progSel, setProgSel] = useState(1);
        const [anoIni, setAnoIni] = useState(2019);
        const [anoFim, setAnoFim] = useState(2023);
        
        const [indicadores, setIndicadores] = useState({});
    
    
        useEffect( () => {
            document.body.classList.add('hold-transition', 'layout-top-nav');
            onSearch();
            },[] 
        )
    
        
        function onSearch() {
            console.log('as')
            client.get(`indicadores?programa=${progSel}&anoIni=${anoIni}&anoFim=${anoFim}`)
                .then(                
                    (response) => {
                        console.log(response.data)
                        setIndicadores(response.data)
                    }
                ).catch(error => {
                    console.log(error.response);
                });
        }
        
        return (
            
            <div className="wrapper">
                <Navbar titulo="SPPG"/>
                <div class="content-wrapper">
                    <Header titulo="Programa"/>
    
                    <div class="content">      
                        <div class="container">
                            <div class="container-fluid">
                                <Filtros programas={programas}
                                        filtroProg={progSel} onProgChange={setProgSel} 
                                        filtroAnoIni={anoIni} onAnoIniChange={setAnoIni}
                                        filtroAnoFim={anoFim} onAnoFimChange={setAnoFim}
                                        onSearch={onSearch}
                                        />
                                <Indicadores dados={indicadores}/>
    
                                <GraficoProducao />
                                <DocenteQualis />
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
        );
}