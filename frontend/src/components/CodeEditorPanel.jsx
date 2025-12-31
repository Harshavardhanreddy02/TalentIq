import { useEffect, useRef } from "react";
import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

// Make sure you import PROBLEMS so the component can access the starter code
import { LANGUAGE_CONFIG, PROBLEMS } from "../data/problems"; 
import { createYjsProvider } from "../lib/yjsProvider";
import { MonacoBinding } from "y-monaco";

function CodeEditorPanel({
  sessionId,
  problemId, // 1. YOU MUST PASS THIS AS A PROP
  selectedLanguage,
  isRunning,
  onLanguageChange,
  onRunCode,
}) {
  const { user } = useUser();

  const editorRef = useRef(null);
  const providerRef = useRef(null);
  const bindingRef = useRef(null);

  const stringToColor = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${Math.abs(hash) % 360}, 70%, 50%)`;
  };

  const handleEditorMount = (editor, monaco) => {
    editorRef.current = editor;

    const { provider, yText } = createYjsProvider(sessionId);
    providerRef.current = provider;

    // --- FIX: INITIALIZE STARTER CODE ---
    // Check if the shared document is empty
    if (yText.toString().length === 0) {
      // Accessing the specific problem and language from your data
      const initialCode = PROBLEMS[problemId]?.starterCode[selectedLanguage];
      if (initialCode) {
        yText.insert(0, initialCode);
      }
    }

    provider.awareness.setLocalStateField("user", {
      name: user?.fullName || "Anonymous",
      color: stringToColor(user?.fullName || "Anonymous"),
    });

    bindingRef.current = new MonacoBinding(
      yText,
      editor.getModel(),
      new Set([editor]),
      provider.awareness
    );
  };

  useEffect(() => {
    return () => {
      bindingRef.current?.destroy();
      providerRef.current?.destroy();
    };
  }, []);

  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage]?.icon}
            alt={LANGUAGE_CONFIG[selectedLanguage]?.name}
            className="size-6"
          />
          <select
            className="select select-sm"
            value={selectedLanguage}
            onChange={onLanguageChange}
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-primary btn-sm gap-2"
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <><Loader2Icon className="size-4 animate-spin" /> Running...</>
          ) : (
            <><PlayIcon className="size-4" /> Run Code</>
          )}
        </button>
      </div>

      <div className="flex-1">
        <Editor
          height="100%"
          // Ensure language matches Monaco's expected IDs (e.g., "java", "javascript")
          language={LANGUAGE_CONFIG[selectedLanguage]?.monacoLang}
          theme="vs-dark"
          onMount={handleEditorMount}
          options={{
            fontSize: 16,
            lineNumbers: "on",
            minimap: { enabled: false },
            automaticLayout: true,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;