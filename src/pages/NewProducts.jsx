import React, { useContext } from 'react'; 
import { useNavigate } from 'react-router-dom';
import {
  ContainerForm,
  Form,
  Label,
  Input,
  ButtonProduct,
  TextArea,
  H2,
  Error
} from '../components/FormProductsStyles';

import useValidation from '../hooks/useValidacion';
import validateNewProducts from '../validation/validateNewProducts';

import { FirebaseContext } from '../firebase';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const INITIAL_STATE = {
  name:'',
  price: '',
  image: '',
  description: ''
}

const NewProducts = () => {

  const { user } = useContext(FirebaseContext);

  const { 
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
   } = useValidation(INITIAL_STATE, validateNewProducts, handleNewProducts);

   const { name, price, image, description } = values;

   const navigate = useNavigate();

   async function handleNewProducts() {
    const db = getFirestore();

     if(!user) {
       return navigate('/login');
     }
     const producto = {
       name,
       price,
       image,
       description
     }

     try {
      const docRef = await addDoc(collection(db, "products"), producto);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }


   }
  return ( 
    <ContainerForm>
      <H2>Crea un nuevo producto</H2>
      <Form
        onSubmit={handleSubmit}
        noValidate
      >
          <Label htmlFor="name">Nombre del producto</Label>
          <Input 
            type="text" 
            name="name" 
            id="" 
            placeholder="Nombre del producto"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <Error>*{errors.name}</Error>}

          <Label htmlFor="price">Precio del producto</Label>
          <Input 
            type="text" 
            name="price" 
            id="price" 
            placeholder="12000 "
            value={price}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.price && <Error>*{errors.price}</Error>}

          <Label htmlFor="imagen">Imagen del producto</Label>
          <Input 
            type="file" 

          />

          <Label htmlFor="descripcion">Descripción del producto</Label>
          <TextArea
            name="description"
            placeholder="Agrega una descripcion del producto..."
            value={description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && <Error>*{errors.description}</Error>}

          <ButtonProduct type="submit">Crear Producto</ButtonProduct>

      </Form>
      
    </ContainerForm>
  );
}
 
export default NewProducts;