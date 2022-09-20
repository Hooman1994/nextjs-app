import React, { useState } from "react";
import styles from "../../styles/TextEditor.module.scss";
import InlineCKEditorHeader from "../../components/TextEditor/InlineCKEditorHeader";
import InlineCKEditorFooter from "../../components/TextEditor/InlineCKEditorFooter";
import InlineCKEditorParagraph from "../../components/TextEditor/InlineCKEditorParagraph";
import InlineCKEditorSide from "../../components/TextEditor/InlineCKEditorSide";

function TextEditor() {
  const [header, setHeader] = useState();
  const [paragraph, setParagraph] = useState();
  const [side, setSide] = useState();
  const [footer, setFooter] = useState();

  const passHeaderData = (data) => {
    setHeader(data);
  };
  const passParagraphData = (data) => {
    setParagraph(data);
  };
  const passSideData = (data) => {
    setSide(data);
  };
  const passFooterData = (data) => {
    setFooter(data);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Header</h2>
          </div>
          <div className={styles.header}>
            <InlineCKEditorHeader passData={passHeaderData} />
          </div>
          <div className={styles.title}>
            <h2>Paragraph</h2>
          </div>
          <div className={styles.paragraph}>
            <InlineCKEditorParagraph passData={passParagraphData} />
          </div>
          <div className={styles.title}>
            <h2>Footer</h2>
          </div>
          <div className={styles.footer}>
            <InlineCKEditorFooter passData={passFooterData} />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2>Side</h2>
          </div>
          <div className={styles.side}>
            <InlineCKEditorSide passData={passSideData} />
          </div>
        </div>
      </div>
      <div className={styles.outputContent}>
        <div className={styles.title}>
          <h2>Header</h2>
        </div>
        <div className={styles.header}>{header}</div>
        <div className={styles.title}>
          <h2>Paragraph</h2>
        </div>
        <div className={styles.paragraph}>{paragraph}</div>
        <div className={styles.title}>
          <h2>Footer</h2>
        </div>
        <div className={styles.footer}>{footer}</div>
        <div className={styles.title}>
          <h2>Side</h2>
        </div>
        <div className={styles.side}>{side}</div>
      </div>
    </>
  );
}

export default TextEditor;
