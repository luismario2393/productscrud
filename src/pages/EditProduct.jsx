import React from 'react';
import {
  ContainerForm,
  Form,
  Label,
  Input,
  ButtonProduct,
  TextArea,
  H2
} from '../components/FormProductsStyles';



const EditProduct = () => {
  return ( 
    <ContainerForm>
      <H2>Editar producto</H2>
      <Form>
          <Label htmlFor="nombre">Nombre del producto</Label>
          <Input 
            type="text" 
            name="nombre" 
            id="" 
            placeholder="Nombre del producto"
          />
        
          <Label htmlFor="precio">Precio del producto</Label>
          <Input 
            type="number" 
            name="precio" 
            id="" 
            placeholder="12000 "
          />

          <Label htmlFor="precio">Imagen del producto</Label>
          <Input 
            type="file" 
            name="precio" 
            id="" 
            placeholder="12000 "
          />

          <Label htmlFor="descripcion">Descripción del producto</Label>
          <TextArea></TextArea>
        
          <ButtonProduct type="submit">Guardar Cambios</ButtonProduct>

      </Form>
      
    </ContainerForm>
  );
}
 
export default EditProduct;