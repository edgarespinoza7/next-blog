import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const Page = async ({params} : {params : {id: string}}) => {

  const singlePost = await prisma.post.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if(!singlePost) {
    notFound();
  }

  return (
    <Suspense fallback="Loading...">
      <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{singlePost.title}</h1>
      <p className="max-w-[700px] mx-auto">{singlePost.body}</p>
    </main>
    </Suspense>
    
  )
}

export default Page
