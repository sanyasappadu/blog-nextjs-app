import React from "react";
import blogs from "@/config/sampleBlogs";
interface Blog {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-slate-100 dark:bg-slate-900 dark:text-white shadow-md rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 ">
              {blog.title}
            </h2>
            <img src={blog.img} alt={blog.title} />
            <p className=" text-sm mb-4 line-clamp-3">
              {blog.description}
            </p>
            <a
              href={`/blogpost/${blog.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 font-medium hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

