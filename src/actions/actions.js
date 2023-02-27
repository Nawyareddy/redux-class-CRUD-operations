export const getPerson = () => ({
  type: "GET_PERSON"
});

export const addPerson = (person) => ({
  type: "ADD_PERSON",
  payload: person
});

export const deletePerson = (id) => ({
  type: "DELETE_PERSON",
  payload: id
});

export const updatePerson = (updates) => ({
  type: "UPDATE_PERSON",
  payload: updates
});

export const sortPerson = (sortedData) => ({
  type: "SORT_PERSON",
  payload: sortedData
});
