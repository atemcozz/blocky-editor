import { Block } from "./Block";
import TextBlock from "./TextBlock";
export class Text extends Block {
  type = "text";
  content = "";
  render(key) {
    return (
      <TextBlock
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
