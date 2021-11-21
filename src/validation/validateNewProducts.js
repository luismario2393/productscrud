export default function validateNewProducts(values) {
  let errors = {};

  
  if (!values.name) {
    errors.name = 'El nombre es requerido';
  }
  if(!values.price) {
    errors.price = 'El precio es requerido'
  }

  if(!values.description) {
    errors.description = 'Debes añadir una descripción del producto'
  }

  return errors;
}