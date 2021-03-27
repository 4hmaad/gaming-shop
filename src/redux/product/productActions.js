import { firestore } from '../../firebase/firebase.utils';

export const fetchProducts = () => async dispatch => {
  dispatch({ type: 'FETCHING_PRODUCTS' });

  const productRef = firestore.collection('products');

  const snapShot = await productRef.get();

  const productsData = snapShot.docs.map(doc => {
    const id = doc.id;
    return {
      id,
      ...doc.data()
    };
  });

  dispatch({ type: 'FETCHED_PRODUCTS', payload: productsData });
};

export const addFilter = category => ({
  type: 'ADD_FILTER',
  payload: category
});

export const removeFilter = category => ({
  type: 'REMOVE_FILTER',
  payload: category
});

export const updateSearchQuery = query => ({
  type: 'UPDATE_SEARCH_QUERY',
  payload: query
});
