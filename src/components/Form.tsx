import { createPost } from "@/actions/action";

export default function Form() {
  return (
    <div>
      <form action={createPost} className="flex flex-col items-center max-w-[500px] mx-auto gap-2 my-10">
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="border rounded-md px-3 py-2 w-full h-10"
        />
        <textarea
          name="body"
          placeholder="Body Content for New Post"
          className="border rounded-md px-3 py-2 h-full w-full mt-2 pt-2"
          rows={8}
          required
        />
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md h-10">
          Submit
        </button>
      </form>
    </div>
  )
}
