import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import BlogItem from "./BlogItem";
import { useCihatBlog } from "../../context/blog-context/BlogContext";
import "./BlogList.css";

const BlogList = () => {
  const { blogs } = useCihatBlog();
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / itemsPerPage));
  }, [itemOffset, blogs]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="blog-list">
        {currentItems.map((blog) => (
          <BlogItem
            key={blog.id}
            bid={blog.id}
            title={blog.title}
            description={
              blog?.description?.length > 30
                ? blog.description.substring(0, 30).concat("...")
                : blog.description
            }
            image={blog.image}
            author={blog.author}
            avatar={blog.avatar}
            date={blog.date}
            likeCount={blog.likeCount}
            commentCount={blog.commentCount}
          />
        ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default BlogList;
