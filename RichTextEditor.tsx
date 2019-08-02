import * as React from 'react';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

export function RichTextEditor(props: {defaultValue?: string}) {

  const [content, setContent] = React.useState(props.defaultValue);
  const joditRef = React.useRef();

  return (
       <JoditEditor 
                value={content}
                config={{readonly: false}}
                onChange={setContent}
            />
  );
}