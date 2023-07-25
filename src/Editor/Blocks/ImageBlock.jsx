import React from "react";
const ImageBlock = ({
  children,
  content,
  onChange,
  onDelete,
  onMoveUp,
  onMoveDown,
  editMode = false,
}) => {
  return (
    <div style={{display: "flex"}}>
    {editMode && (
      <div style={{display: "flex", flexDirection: "column"}}>
        <button onClick={onDelete}>
          delete
        </button>
        <button onClick={onMoveUp}>
          move up
        </button>
        <button onClick={onMoveDown}>
          move down
        </button>
      </div>    
      )}
      {content && <img src={content} alt="img"/>}
    </div>
  );
};

export default ImageBlock;
