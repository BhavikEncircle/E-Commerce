import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const getProducts = createAsyncThunk('products/get', async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  return await res.json()
})
const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = ''
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false
        state.error = 'Something went wrong'
      })
  },
})
export default productSlice.reducer
