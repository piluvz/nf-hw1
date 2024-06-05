const BlogItem = ({ blog }) => {
    return (
        <div className="p-5 border rounded shadow-sm hover:shadow-md">
            <a href={`/blog/${blog.id}`} className="text-xl font-semibold">{blog.title}</a>
            <p className="text-sm text-gray-500 py-1">{blog.date} by {blog.author}</p>
            <p className="mt-2">{blog.description}</p>
        </div>
    );
};

export default BlogItem;

