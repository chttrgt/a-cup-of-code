import React, { useState } from "react";
import BlogDetail from "../components/bloglist/BlogDetail";
import { useCihatForm } from "../context/form-context/FormContext";
import EditForm from "../components/ui/ActionForm";

const BlogDetailPage = () => {
  const { showActionForm, setShowActionForm } = useCihatForm();
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleEditBlog = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <>
      <BlogDetail onEditBlog={handleEditBlog} />
      {showActionForm && (
        <EditForm
          onClose={() => {
            setShowActionForm(false);
            setSelectedBlog(null);
          }}
          editMode={!!selectedBlog}
          initialData={selectedBlog}
        />
      )}
    </>
  );
};

export default BlogDetailPage;
