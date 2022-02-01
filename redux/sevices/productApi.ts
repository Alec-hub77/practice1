import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/type'

const baseUrl = 'https://fakestoreapi.com';


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], number>({
            query: (limit: number) => (`/products?limit=${limit}`)
        })
    })

})

export const { useGetProductsQuery } = productApi;