import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import notesSlice, {addNote, updateNote} from "./slice/slice";
import NoteForm from "./component/component";
import {useEffect} from "react";
import axios from "axios";
const App = () => {
  const dispatch = useDispatch();
  const[posts,setPosts]=useState([])
  const {data,loading,error} = useSelector((state) => state.notesSlice);

  const handleAddNote = (note) => {
    dispatch(addNote(note));
  };
  const handleUpdateNote = (note) => {
    dispatch(updateNote({
      id: note.id,
      completed: !note.completed
    }))
  };

  useEffect(()=>{
     fetch('https://dummyjson.com/posts')
         .then(res => res.json())
         .then(res=>setPosts(res.posts));
  },[])

  return (
      <div>
        <h1>Notes</h1>
        <NoteForm addNote={handleAddNote} />
          {
              loading?<h1>загрузка...</h1>:error?<h1>ошибка!</h1>:data?<h1>успешно отправлено</h1>:''
          }
          {
              posts?.map(post=><p>{post.title}</p>)
          }
      </div>
  )
};

export default App;
