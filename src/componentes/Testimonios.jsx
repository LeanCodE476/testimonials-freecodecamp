import React from "react";
import "../stylessheets/testimonios.css"

function Testimonio(props) {   
    return (
        <div className="contenedor-testimonio">
            <img src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt="shawn" />
            <div className="contenedor-textos">
                <p className="nombre">{props.nombre}<span> en {props.pais }</span></p>
                <p className="cargo">{props.cargo} en <span>{props.empresa}</span> </p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    )
}
export default Testimonio