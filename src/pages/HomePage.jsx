import React from "react";
import BlogList from "../components/bloglist/BlogList";
import AddButton from "../components/ui/buttons/AddButton";
import ActionForm from "../components/ui/forms/ActionForm";
import { useCihatForm } from "../context/form-context/FormContext";

const HomePage = () => {
  const { showActionForm, setShowActionForm } = useCihatForm();

  return (
    <>
      <BlogList />
      <AddButton onClick={() => setShowActionForm(true)} />
      {showActionForm && (
        <ActionForm onClose={() => setShowActionForm(false)} />
      )}
    </>
  );
};

export default HomePage;
