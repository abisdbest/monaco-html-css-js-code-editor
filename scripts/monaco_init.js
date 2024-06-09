let isEditorReady = false;
let editor;

function initMonacoEditor() {
    require.config({
        paths: {
            'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@0.47.0/min/vs'
        }
    });
    require(['vs/editor/editor.main'], function () {
        // emmetMonaco.emmetHTML(monaco);
        editor = monaco.editor.create(document.getElementById('editor'), {
            value: "<html></html>",
            language: "html",
            theme: 'vs-dark',
            minimap: {
                enabled: false
            }
        });

        isEditorReady = true;
        window.editor = editor
        editor.getModel().onDidChangeContent((event) => {
            localStorage.setItem(`saved ${username}/${repo}/${file}`, editor.getValue())
        });
    });
}

initMonacoEditor()