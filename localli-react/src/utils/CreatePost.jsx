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
