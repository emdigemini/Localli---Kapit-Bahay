import { createContext, useState } from "react";

export const CreatePost = createContext();

export function CreatePostProvider({children}){
  const [ createPost, setCreatePost ] = useState(false);

  const toggleCreatePost = (value) => {
    setCreatePost(value);
  };

  return (
    <CreatePost.Provider value={{ createPost, toggleCreatePost }}>
      {children}
    </CreatePost.Provider>
  )
}

export const PostRender = createContext();

export function PostProvider({children}){
  const [ postValue, setPostValue ] = useState([]);

  const addPostValue = (value) => {
    setPostValue(prev => [...prev, value]);
  }

  return (
    <PostRender.Provider value={{ postValue, addPostValue }}>
      {children}
    </PostRender.Provider>
  )
} 