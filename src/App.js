import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4 font-weight-bold">Método Simplex</h2>
                <hr/> <div className="row justify-content-center" id="content">
                  <table style={{width: "30%"}}>
                    <tbody>
                      <tr>
                        <td className="col-form-label font-weight-bold">Número de variables</td>
                        <input type="number" className="form-control" placeholder="Número"
                          id="num_variables" min={2} max={10}></input>
                      </tr>
                      <tr>
                        <td className="col-form-label font-weight-bold">Número de restricciones</td>
                        <input type="number" className="form-control" placeholder="Número"
                          id="num_restricciones" min={1} max={10}></input>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <hr/> <div className="row justify-content-center">
                  <label className="form-label font-weight-bold mr-5">Objetivo de la función</label>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" value={2} id="minimizar" name="tipo_operacion" className="custom-control-input"/>
                    <label className="custom-control-label" for="minimizar">Minimizar</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" value={1} id="maximizar" name="tipo_operacion" className="custom-control-input"/>
                    <label className="custom-control-label" for="maximizar">Maximizar</label>
                  </div>
                </div>

                <hr/> <div className="row justify-content-center">
                  <button type="button" className="btn font-weight-bold text-uppercase" 
                    style={{backgroundColor:"#000000", color:"#FFFFFF", height:"40px", width:"15%"}}>Continuar</button>
                </div>

                <div id="table_inputs"> </div>
                <div id="solucion_optima"></div>
                
                <hr/> <div className="row justify-content-center">
                  <button type="button" className="btn font-weight-bold text-uppercase" 
                    style={{backgroundColor:"#000000", color:"#FFFFFF", height:"40px", width:"15%"}}>Resolver</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
