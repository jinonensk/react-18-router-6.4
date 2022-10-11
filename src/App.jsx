import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom'

import BlogLayout from './pages/BlogLayout'
import BlogPostsPage, { loader as blogPostLoader } from './pages/BlogPosts'
import DefferedUsersPage, {
  loader as defferedUsersLoader,
} from './pages/DefferedUsers'
import ErrorPage from './pages/Error'
import NewPostPage, { action as newPostAction } from './pages/NewPost'
import PostDetailPage, { loader as postDetailLoader } from './pages/PostDetail'
import RootLayout from './pages/RootLayout'
import WelcomePage from './pages/Welcome'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogPostLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={postDetailLoader}
        />
      </Route>
      <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={newPostAction}
      />
      <Route
        path="slow-users"
        element={<DefferedUsersPage />}
        loader={defferedUsersLoader}
      />
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
