import React from "react";
import BlogList from "../components/bloglist/BlogList";
import AddingForm from "../components/ui/ActionForm";
import AddButton from "../components/ui/AddButton";
import { useCihatForm } from "../context/form-context/FormContext";

const HomePage = () => {
  const { showActionForm, setShowActionForm } = useCihatForm();

  return (
    <>
      <BlogList />
      <AddButton onClick={() => setShowActionForm(true)} />
      {showActionForm && (
        <AddingForm onClose={() => setShowActionForm(false)} />
      )}
    </>
  );
};

export default HomePage;
