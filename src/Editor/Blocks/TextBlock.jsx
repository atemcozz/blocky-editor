import ContentEditable from "react-contenteditable";


const TextBlock = ({
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

      <ContentEditable
        style={{flex: 1, border: "1px solid black"}}
        html={content}
        placeholder={"Enter text..."}
        onChange={(e) => onChange(e.target.value)}
        onPaste={(e) => {
          e.stopPropagation();
          e.preventDefault();
          let clipboardData = e.clipboardData || window.clipboardData;
          let pastedData = clipboardData.getData("Text");
          //data can be sanitazed here with external tools if needed
          onChange(pastedData);
        }}
      />
    </div>
  );
};

export default TextBlock;
