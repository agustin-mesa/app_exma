import React from "react";

const ListElement = () => {
  return (
    <ListElement key={gasto.idGasto}>
      <IconCategorias nombre={gasto.categoria} />
      <p>{gasto.descripcion}</p>
      <span>{formatearValor(gasto.precio)}</span>
      <div className="listElement__buttons">
        <Link to={`/editar/${gasto.idGasto}`}>
          <button>
            <i className="fas fa-pen"></i>
          </button>
        </Link>
        <button
          onClick={() =>
            changeShowMsgDeleted(borrarGasto(gasto.idGasto, user.email))
          }
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </ListElement>
  );
};

export default ListElement;
