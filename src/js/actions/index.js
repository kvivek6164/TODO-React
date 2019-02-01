export const gettingValue = item => ({
  type: 'GETTING_VALUE',
  payload: {
    index: item.index,
    email: item.email,
    comments: item.comments,
    date: item.newDate,
    isEmailUpdate: item.isEmailUpdate,
    commentsList: item.commentsList
  }
})

export const deleteValue = item => ({
  type: 'DELETE_VALUE',
  payload:{
    index: item
  }
})

export const editValue = item => ({
  type: 'EDIT_VALUE',
  payload: item
})