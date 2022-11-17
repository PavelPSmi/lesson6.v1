


const initialState={
    chats:[
        {id:1,
        name:'Andi'},
        {id:2,name:'Den'}
    ]
}
export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};