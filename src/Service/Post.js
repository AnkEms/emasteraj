import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const postApi = createApi({
 reducerPath: 'postApi',
 baseQuery: fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api/v1/user/',
 }),
 
 endpoints: (builder) => ({
  createPost: builder.mutation({
    query: ( SignUp) => {
     console.log("Create Post:", SignUp)
     return {
      url: `signUp`,
      method: 'POST',
      body:SignUp,
      headers:{
        'Content-type': 'application/json; charset=UTF-8',
          
      }
     }
    }
   }),

  //  updatePost: builder.mutation({
  //   query: ( updatePostData) => {
  //       console.log("Update Post:",updatePostData)
  //       return {
  //        url: `posts/${id}`,
  //        method: 'PUT',
  //        body:updatePostData,
  //        headers:{
  //          'Content-type': 'application/json; charset=UTF-8',
             
  //        }
  //       }
  //      }
  //  })


  // createPost: builder.mutation({
  //  query: (newPost) => {
  //   console.log("Create Post: ", newPost)
  //   return {
  //    url: `posts`,
  //    method: 'POST',
  //    body: newPost,
  //    headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //    }
  //   }
  //  }
  // }),

  // updatePost: builder.mutation({
  //  query: (updatePostData) => {
  //   console.log("Update Post: ", updatePostData)
  //   const { id, ...data } = updatePostData
  //   console.log("Actual Update Post: ", data)
  //   return {
  //    url: `posts/${id}`,
  //    method: 'PUT',
  //    body: data,
  //    headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //    }
  //   }
  //  }
  // }),
 }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { 
    useGetAllPostQuery, 
    useGetPostByIdQuery,
     useGetPostByLimitQuery, 
    useDeletePostMutation, 
    useCreatePostMutation, 
    useUpdatePostMutation
 } = postApi