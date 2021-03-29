import { firestore } from '../firebase/firebase.utils';
import { useQuery } from 'react-query';

export const fetchProducts = async () => {
  const productRef = firestore.collection('products');

  const snapShot = await productRef.get();

  const productsData = snapShot.docs.map(doc => {
    const id = doc.id;
    return {
      id,
      ...doc.data()
    };
  });

  return productsData;
};

export const useProducts = () => {
  return useQuery('products', () => fetchProducts(), {
    staleTime: Infinity
  });
};
