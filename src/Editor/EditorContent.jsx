import React from "react";

const EditorContent = ({editor}) => {
  if(!editor) return null;
  return (
    <>
      {editor?.getBlocks()?.map((block, index) => block.render(index))}
    </>
  );
};

export default EditorContent;
