import React from "react";
const BlockActions = ({ editor }) => {
  if(!editor) return null;
  function handleImage(event) {
    const url = prompt("Input image URL:")
    editor.insertBlock("image").setContent(url);
     
  }
  return (
    <div>
      <button
        onClick={() => editor.insertBlock("text")}
      >
        text
      </button>
      <button
        onMouseDown={handleImage}
      >
        image
      </button>
    </div>
  );
};

export default BlockActions;
