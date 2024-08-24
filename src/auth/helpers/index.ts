export const crearNombreUsuario = (identificacion: string) => {
  return identificacion.trim().toLowerCase().replace(/\s+/g, '');
};
