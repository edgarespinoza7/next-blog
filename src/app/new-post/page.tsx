import { createPost } from "@/actions/action";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";


export default async function Page() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create a New Post</h1>
      <form action={createPost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          required
          className="border rounded-md px-3 py-2 w-[500px] h-full"
        />
        <button className="block mx-auto mt-6 bg-blue-600 text-white px-6 py-2 rounded-md">
          Submit
        </button>
      </form>
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
