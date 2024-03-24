const ProfileReducer = (state, action) => {
    switch (action.type) {
      case "SET_LOADING":
        return {
          ...state,
          isLoading: true,
        };
  
      case "API_ERROR":
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
      case "SET_API_DATA":
        console.log(action.payload);
        let x = 1;
        const featureDate = action.payload.filter((curEle) => {
          return x++ <= 3;
        });
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featureProducts: featureDate,
        };
  
      case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
  
      case "SET_SINGLE_PRODUCT":
        const { products } = state;
  
        const findsingleproduct = products.filter((curEle) => {
          return curEle.pId === parseInt(action.payload);
        });
  
        return {
          ...state,
          isSingleLoading: false,
          singleProduct: findsingleproduct[0],
        };
  
      case "SET_SINGLE_ERROR":
        return {
          ...state,
          isSingleLoading: false,
          isError: true,
        };
  
      default:
        return state;
    }
  };
  
  export default ProfileReducer;
  