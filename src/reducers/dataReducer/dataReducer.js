const initValue = {
  isLogged: false,
  loginError: false,
  trackedCities: [],
};

const dataReducer = (state = initValue, action) => {
  switch (action.type) {
    case "LOGIN":
      const { login, password } = action.payload;
      if (login === "admin" && password === "admin")
        return { ...state, isLogged: true, loginError: false };

      return { ...state, isLogged: false, loginError: true };

    case "LOGOUT":
      return { ...state, isLogged: false };

    case "ADD_CITY":
      return {
        ...state,
        trackedCities: [...state.trackedCities, action.payload],
      };

    case "DELETE_CITY":
      return {
        ...state,
        trackedCities: state.trackedCities.filter(
          (e) => e.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default dataReducer;
