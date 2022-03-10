import {
  createSlice
} from '@reduxjs/toolkit'

const initialState = [{
  id: '1',
  title: '第一牛逼',
  content: 'hello,yf'
},
{
  id: '2',
  title: 'dfddfdf',
  content: 'hdhfdhfj'
}
]
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    }
  }
})
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer