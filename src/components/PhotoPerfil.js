import React from "react";

import { Photo } from "./elements/StyledElements";

const PhotoPerfil = ({ src, alt, icono, className }) => {
  return (
    <Photo className={className}>
      {src !== "" ? <img src={src} alt={alt} /> : <i className={icono}></i>}
    </Photo>
  );
};

export default PhotoPerfil;
