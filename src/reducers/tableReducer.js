const initialState = {
  personDetails: [
    { name: "Raju", id: 1, age: 25, gender: "male" },
    { name: "John", id: 2, age: 27, gender: "male" },
    { name: "Kevin", id: 3, age: 29, gender: "male" },
    { name: "Karishma", id: 4, age: 25, gender: "female" },
    { name: "Raveena", id: 5, age: 24, gender: "female" }
  ]
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PERSON":
      return {
        ...state
      };
    case "ADD_PERSON":
      return {
        ...state,
        personDetails: [...state.personDetails, action.payload]
      };
    case "DELETE_PERSON":
      return {
        ...state,
        personDetails: state.personDetails.filter(
          (person) => person.id !== action.payload
        )
      };
    case "UPDATE_PERSON":
      let personIndex = state.personDetails.findIndex(
        (person) => person.id === action.payload.id
      );
      state.personDetails.splice(personIndex, 1, action.payload);
      console.log(personIndex, action.payload.id);
      return state;
    case "SORT_PERSON":
      return { ...state, state: action.payload };
    default:
      return state;
  }
};

export default tableReducer;
