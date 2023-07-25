import EditorContent from "./Editor/EditorContent";
import useEditor from "./Editor/useEditor";
import BlockActions from "./Editor/BlockActions";
import TextActions from "./Editor/TextActions";
import { Text } from "./Editor/Blocks/Text";
import { Image } from "./Editor/Blocks/Image";
function App() {
  const editor = useEditor({
    useBlocks: [Text, Image],
  });
  return (
    <div className="App">
      <TextActions editor={editor} />
      <EditorContent editor={editor} />
      <BlockActions editor={editor} />
      <pre>{JSON.stringify(editor?.json(), null, 2)}</pre>
    </div>
  );
}

export default App;
