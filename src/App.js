import React from 'react';

var array_problema = [];
var tabla_a = [];
var tabla_b = [];
var zeta = [];
var array_pos_artifi = [];
var array_borrar_pos_artifi = [];
var clic_generar = false;
var es_decimal = false;

function App() {
  const generarInputs = () => {
    numero_variables = parseInt(document.getElementById("num_variables").value);
    numero_restricciones = parseInt(
      document.getElementById("num_restricciones").value
    );

    var str_table_inputs = "";

    document.getElementById("maximizar").checked === true
      ? (tipo_operacion = 1)
      : (tipo_operacion = 0);

    str_table_inputs += `<div align="center"> <table style="text-align:center; width:70%"> <tr> <td></td>`;

    for (var i = 0; i < numero_variables; i++)
      str_table_inputs += `<td ><strong align="center">X` + (i + 1) + `</strong></td>`;
    str_table_inputs += `<td></td> <td></td></tr><tr>`;

    if (tipo_operacion === 1)
      str_table_inputs += `<td><strong> Maximizar Z </strong> </td>`;
    else str_table_inputs += `<td><strong> Minimizar Z </strong></td>`;

    for (var j = 0; j < numero_variables; j++)
      str_table_inputs +=
        `<td style="width:15%"><input class="form-control" style="text-align:center" type="number" placeholder="Número" name="valor_x` +
        j +
        `" id="valor_x` +
        j +
        `"/></td> `;
    str_table_inputs += `<td></td>  <td></td>   </tr>`;

    /*eslint-disable */
    for (var i = 0; i < numero_restricciones; i++) {
      str_table_inputs +=
        `<tr><td style="width:10%"><strong> Restricción ` + (i + 1) + ` </strong></td>`;
      for (var j = 0; j < numero_variables; j++)
        str_table_inputs +=
          `<td style="width:15%"><input class="form-control" style="text-align:center" type="number" placeholder="Número" name="valor_r` +
          i +
          `x` +
          j +
          `" id="valor_r` +
          i +
          `x` +
          j +
          `" /></td>`;
      str_table_inputs +=
        `<td style="width:10%"><select class="custom-select" name="operador_r` +
        i +
        `" id="operador_r` +
        i +
        `"><option>Símbolo...</option> <option value="<="> <= </option>`;
      str_table_inputs +=
        `<option value=">="> >= </option><option value="="> = </option></select></td>`;
      str_table_inputs +=
        `<td style="width:15%"><input class="form-control" style="text-align:center" type="number" placeholder="Número" name="resultado_r` +
        i +
        `" id="resultado_r` +
        i +
        `" /></td></tr>`;
    }
    /*eslint-enable */
    str_table_inputs += `</table> </div>`;
    document.getElementById("table_inputs").innerHTML = str_table_inputs;
    clic_generar = true;
  };

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
