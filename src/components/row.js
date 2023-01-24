import React from 'react'
import { useGetTopstoriesQuery, useGetItemQuery} from '../api/api'
const PostCard = ({ content }) => {
    const {
        data: post,
        isLoading,
        isSuccess,
        isError,
        error,
        } = useGetItemQuery(content)
        if (isLoading) {
            postContent = (
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )
          } else if (isSuccess) {
            console.log(post)
            postContent = (
                <div className="col-lg-12 mb-3 " key={post.id}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.by}</p>
                    </div>
                  </div>
                </div>
              )
          } else if (isError) {
            postContent = (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )
          }
          return <div>{postContent}</div>
  /*return */
}
function Row() {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTopstoriesQuery()
  let postContent
  if (isLoading) {
    postContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    console.log(posts)
    postContent = posts.map((item) => {
      return  <PostCard content={item}/>
      
    })
  } else if (isError) {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }
  return <div>{postContent}</div>
}
export default Row