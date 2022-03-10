import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postSlice'


export const AddPostForm = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const dispatch = useDispatch();
  function onSavePostChlicked() {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      );
      setTitle('');
      setContent('');
    }
  }
  return (
    <section>
      <h2>添加文章哦</h2>
      <from>
        <label>标题:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>内容:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="button" onClick={onSavePostChlicked}>保存帖子</button>
      </from>
    </section>
  )
}