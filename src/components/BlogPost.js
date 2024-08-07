import React from 'react';
import ReactMarkdown from 'react-markdown';
const BlogPost = ({ content }) => {
return (
<div className="prose lg:prose-xl mx-auto">
<ReactMarkdown>{content}</ReactMarkdown>
</div>
);
}
export default BlogPost;

