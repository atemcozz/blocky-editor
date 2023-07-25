import { Block } from "./Block";
import ImageBlock from "./ImageBlock";
export class Image extends Block {
  type = "image";
  content = "";
  render(key) {
    return (
      <ImageBlock
        key={key}
        content={this.content}
        onChange={(data) => this.setContent(data)}
        onDelete={() => this.delete()}
        onMoveUp={() => this.moveUp()}
        onMoveDown={() => this.moveDown()}
        editMode={this.editor.editEnabled()}
      />
    );
  }
  parse() {
    return { type: this.type, content: this.content };
  }
}
