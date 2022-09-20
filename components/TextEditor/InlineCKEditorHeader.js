import React, { useState } from "react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import { CKEditor } from "@ckeditor/ckeditor5-react";

function InlineCKEditorHeader(props) {
  const [data, setData] = useState();

  function handleOutput(event, editor) {
    debugger;
    const data = editor.getData();
    return setData(data);
  }
  function handleHeader() {
    debugger;
    return props.passData(data);
  }
  function handle() {
    debugger;
    InlineEditor.create(document.querySelector("#header")).catch((error) => {
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
        id="header"
      >
        <CKEditor
          data={data}
          editor={InlineEditor}
          onChange={handleOutput}
          onClick={handle}
        />
      </div>
      <button onClick={handleHeader}>Set Header</button>
    </div>
  );
}

export default InlineCKEditorHeader;
