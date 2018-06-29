// State argument is not application state, only the State
// this reducer is responsible for
export default function(state = null, action) {
<<<<<<< HEAD
  switch(action.type) {
=======
  switch (action.type) {
>>>>>>> 717cb36e5f4fb4e30a434532b8efdc68b61896bc
  case 'BOOK_SELECTED':
    return action.payload
  }
  return state;
}
