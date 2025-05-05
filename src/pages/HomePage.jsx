import React, { useState } from "react";
import BlogList from "../components/bloglist/BlogList";
import AddingForm from "../components/ui/AddingForm";
import AddButton from "../components/ui/AddButton";

const HomePage = () => {
  const [showAddingForm, setShowAddingForm] = useState(false);

  return (
    <>
      <BlogList />
      <AddButton onClick={() => setShowAddingForm(true)} />
      {showAddingForm && (
        <AddingForm onClose={() => setShowAddingForm(false)} />
      )}
    </>
  );
};

export default HomePage;
