import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploader from 'react-firebase-file-uploader';
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
import { getFirestore, doc, getDoc, collection, updateDoc} from "firebase/firestore";


const INITIAL_STATE = {
  name:'',
  price: '',
  image: '',
  description: ''
}

const EditProducts = () => {

  const idPage = window.location.pathname.split('/')[3];
  const [ product, setProduct ] = useState({});

  const db = getFirestore();

  const getProducts = async () => {
    const querySnapshot = doc(collection(db, "products"), idPage);
    const product = await getDoc(querySnapshot);
    if(product.exists) {
      setProduct(product.data());
    } else {
      console.log('No existe');
    }
  
  }
  
  useEffect(() => {
    getProducts();
  } , [idPage]);
  

  // state imagenes
  const [ nameImage, setNameImage] = useState('');
  const [ uploading, setUploading ] = useState(false);
  const [ progress, setProgress ] = useState(0);
  const [ urlImage, setUrlImage ] = useState('');

  const { user, firebase } = useContext(FirebaseContext);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur
   } = useValidation(INITIAL_STATE, validateNewProducts, handleEditProducts);
   
   const { name, price, image, description } = values;
   
   const navigate = useNavigate();

  async function handleEditProducts() {
    const db = getFirestore();

     if(!user) {
     return navigate('/login');
     }
     const producto = {
      name,
      price,
      urlImage,
      description,
   }

    try {
      const docRef = await updateDoc(doc(db, "products", idPage), producto);
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
      navigate('/');
 }

   const handleUploadStart = () => {
    setProgress(0);
    setUploading(true);
  }

  const handleProgress = async (progreso, task) => {
    console.log(progreso);
    setProgress(progreso);
    if(progreso === 100){
        handleUploadSuccess(task.snapshot.ref.name);
    }
  }

  const handleUploadError = error => {
    setUploading(error);
    console.error(error);
  }

  const handleUploadSuccess = async name => {
    setProgress(100);
    setUploading(false);
    setNameImage(name)
    await firebase.
      storage
      .ref("products")
      .child(name)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        setUrlImage(url);
      });
  }

  return (
    <ContainerForm>
      <H2>Editar producto</H2>
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
          <FileUploader
            accept="image/*"
            id="imagen"
            name="image"
            randomizeFilename
            storageRef={firebase.storage.ref("products")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}


          />

          <Label htmlFor="descripcion">Descripci??n del producto</Label>
          <TextArea
            name="description"
            placeholder="Agrega una descripcion del producto..."
            value={description}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.description && <Error>*{errors.description}</Error>}

          <ButtonProduct type="submit">Guardar Cambios</ButtonProduct>

      </Form>

    </ContainerForm>
  );
}

export default EditProducts;