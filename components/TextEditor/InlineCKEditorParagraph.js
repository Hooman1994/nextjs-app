import React, { useState } from "react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import { CKEditor } from "@ckeditor/ckeditor5-react";

function InlineCKEditorParagraph(props) {
  const [data, setData] = useState();

  function handleOutput(event, editor) {
    debugger;
    const data = editor.getData();
    return setData(data);
  }
  function handleParagraph() {
    debugger;
    return props.passData(data);
  }
  function handle() {
    InlineEditor.create(document.querySelector("#paragraph")).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "1500px",
        }}
        id="paragraph"
      >
        <CKEditor
          data={data}
          editor={InlineEditor}
          onChange={handleOutput}
          onClick={handle}
        />
      </div>
      <button onClick={handleParagraph}>Set Paragraph</button>
    </div>
  );
}

export default InlineCKEditorParagraph;
