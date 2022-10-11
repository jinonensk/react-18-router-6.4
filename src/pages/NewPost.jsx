// import { useState } from 'react';
import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from 'react-router-dom'

import NewPostForm from '../components/new-post-form/NewPostForm'
import { savePost } from '../util/api'

function NewPostPage() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [error, setError] = useState();
  const data = useActionData()
  const navigate = useNavigate()
  const navigation = useNavigation()

  // async function submitHandler(event) {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  //   try {
  //     const formData = new FormData(event.target);
  //     const post = {
  //       title: formData.get('title'),
  //       body: formData.get('post-text'),
  //     };
  //     await savePost(post);
  //     navigate('/');
  //   } catch (err) {
  //     setError(err);
  //   }
  //   setIsSubmitting(false);
  // }

  function cancelHandler() {
    navigate('/blog')
  }

  return (
    <>
      {/* {error && <p>{error.message}</p>} */}
      {data && data.status && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
      />
    </>
  )
}

export default NewPostPage

export async function action(args) {
  console.log('new post actions', args)
  const formData = await args.request.formData()
  const post = {
    title: formData.get('title'),
    body: formData.get('post-text'),
  }
  try {
    await savePost(post)
  } catch (err) {
    if (err.status === 422) {
      return err
    }
    throw err
  }
  return redirect('/blog')
}
