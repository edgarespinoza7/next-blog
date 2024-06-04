import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Blog",
  description: "The home of my thoughts",
};

export default function Home() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Welcome to my blog</h1>
      <p className="max-w-[750px] mx-auto leading-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quos commodi cupiditate hic eligendi accusamus dignissimos laboriosam ipsum! Accusamus nemo sed qui animi excepturi aliquam minima. Ea corporis dolores illo.
      </p>
    </main>
  );
}
