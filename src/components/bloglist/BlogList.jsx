import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import BlogItem from "./BlogItem";
import { useCihatBlog } from "../../context/blog-context/BlogContext";
import "./BlogList.css";

const BlogList = () => {
  const { blogs } = useCihatBlog();
  const [currentItems, setCurrentItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsPerPage = 12;

  const currentPage = parseInt(searchParams.get("page")) || 0;

  useEffect(() => {
    const endOffset = (currentPage + 1) * itemsPerPage;
    const startOffset = currentPage * itemsPerPage;
    setCurrentItems(blogs.slice(startOffset, endOffset));
  }, [currentPage, blogs]);

  const handlePageClick = (event) => {
    setSearchParams({ page: event.selected.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (blogs.length === 0) {
    return (
      <div className="no-blogs-found">
        <h2>Blog not found!</h2>
      </div>
    );
  }

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
        pageCount={Math.ceil(blogs.length / itemsPerPage)}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
        forcePage={currentPage}
      />
    </>
  );
};

export default BlogList;
