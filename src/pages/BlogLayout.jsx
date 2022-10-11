import { Outlet } from 'react-router-dom'

import BlogActions from '../components/blog-actions/BlogActions'

function BlogLayout() {
  return (
    <>
      <BlogActions />
      <Outlet />
    </>
  )
}

export default BlogLayout
