import React, { useState } from "react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import { CKEditor } from "@ckeditor/ckeditor5-react";

function InlineCKEditorSide(props) {
  const [data, setData] = useState();

  function handleOutput(event, editor) {
    debugger;
    const data = editor.getData();
    return setData(data);
  }
  function handleSide() {
    debugger;
    return props.passData(data);
  }
  function handle() {
    InlineEditor.create(document.querySelector("#side")).catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          width: "300px",
        }}
        id="side"
      >
        <CKEditor
          data={data}
          editor={InlineEditor}
          onChange={handleOutput}
          onClick={handle}
        />
      </div>
      <button onClick={handleSide}>Set Side</button>
    </div>
  );
}

export default InlineCKEditorSide;
