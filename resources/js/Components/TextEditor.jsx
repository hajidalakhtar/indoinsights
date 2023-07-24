import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const API_URL = "http://localhost:8000";
const UPLOAD_ENDPOINT = "store/image";

export default function TextEditor({ csrfToken, handleChangeInput, toolbar, formKey, value }) {
    function uploadAdapter(loader) {
        return {
            upload: () => {
                return new Promise((resolve, reject) => {
                    const body = new FormData();
                    loader.file.then((file) => {
                        body.append("files", file);
                        let headers = new Headers();
                        headers.append("X-CSRF-TOKEN", csrfToken);
                        fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
                            method: "post",
                            body: body,
                            headers: headers,
                        })
                            .then((res) => res.json())
                            .then((res) => {
                                resolve({
                                    default: `${res.url}`
                                });
                            })
                            .catch((err) => {
                                reject(err);
                            });
                    });
                });
            }
        };
    }

    function uploadPlugin(editor) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
            return uploadAdapter(loader);
        };
    }

    const handleEditorReady = (editor) => {
        console.log('Editor is ready to use!', editor);
    };

    const handleEditorChange = (event, editor) => {
        const data = editor.getData();
        handleChangeInput(formKey, data);
    };

    const handleEditorBlur = (event, editor) => {
        console.log('Blur.', editor);
    };

    const handleEditorFocus = (event, editor) => {
        console.log('Focus.', editor);
    };

    return (
        <div className="App">
            <CKEditor
                rows="12"
                editor={ClassicEditor}
                data={value}
                config={{
                    extraPlugins: [uploadPlugin],
                    toolbar: toolbar
                }}
                onReady={handleEditorReady}
                onChange={handleEditorChange}
                onBlur={handleEditorBlur}
                onFocus={handleEditorFocus}
            />
        </div>
    );
}
