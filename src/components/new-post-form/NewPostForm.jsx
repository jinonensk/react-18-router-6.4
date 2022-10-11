import { Form } from 'react-router-dom'
import classes from './NewPostForm.module.css'

function NewPostForm({ onCancel, submitting }) {
  return (
    <Form className={classes.form} method="post" action="/blog/new">
      <fieldset>
        <label htmlFor="title">Заголовок</label>
        <input id="title" type="text" name="title" required minLength={5} />
      </fieldset>
      <fieldset>
        <label htmlFor="text">Текст</label>
        <textarea
          id="text"
          name="post-text"
          required
          minLength={10}
          rows={5}
        ></textarea>
      </fieldset>
      <button type="button" onClick={onCancel} disabled={submitting}>
        Отмена
      </button>
      <button disabled={submitting}>
        {submitting ? 'Отправка...' : 'Создайте пост'}
      </button>
    </Form>
  )
}

export default NewPostForm
