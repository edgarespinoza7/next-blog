import { Suspense } from "react";

const Page = async ({params} : {params : {id: string}}) => {

  const response = await fetch(`https://dummyjson.com/posts/${params.id}`)
  const post = await response.json();

  return (
    <Suspense fallback="Loading...">
      <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
    </Suspense>
    
  )
}

export default Page
