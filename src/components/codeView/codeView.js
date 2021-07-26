import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import 'codemirror/mode/shell/shell'
import { Paper } from '@material-ui/core';

const CodeView = () => {
    const [code, setCode] = useState(`EXPORT REACT_APP_URL = "https://skdjsd.com"
EXPORT REACT_APP_ENV = "dev"
EXPORT REACT_APP_AUTH_ID = "kjhsde83jassdkjshd73"
EXPORT REACT_APP_URL = "https://skdjsd.com"

EXPORT REACT_APP_URL = "https://skdjsd.com"
EXPORT REACT_APP_URL = "https://skdjsd.com"
EXPORT REACT_APP_URL = "https://skdjsd.com"
EXPORT REACT_APP_URL = "https://skdjsd.com"    
    `);

    const options = {
        mode: 'shell',
        theme: 'idea',
        lineNumbers: true
    }

    return (
        <Paper className='round-border' variant='outlined' style={{ overflow: 'hidden' }} >
            <CodeMirror
                value={code}
                options={options}
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
                onChange={(editor, data, value) => {
                    setCode(value)
                }}
            />
        </Paper>
    )
}

export default CodeView
