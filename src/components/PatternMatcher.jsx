import React, { useState } from "react";

export default function PatternMatcher() {
    const [text, setText] = useState("");
    const [results, setResults] = useState([]);

    const detectPattern = (value) => {
        // Regex for double letters, global flag to find all
        const regex = /(.)\1/g;
        const matches = value.match(regex);

        if (matches && matches.length > 0) {
            // Remove duplicates if needed
            const uniqueMatches = [...new Set(matches)];
            setResults(uniqueMatches);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="bg-black p-6 rounded-2xl shadow-lg border border-cyan-500">
            <h2 className="text-2xl font-semibold text-cyan-500 mb-4">
                Pattern Matcher (aa, bb, cc…)
            </h2>

            <input
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    detectPattern(e.target.value);
                }}
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <div className="mt-3 text-grey-400 font-medium">
                {results.length > 0 ? (
                    <p>✔ Found double letters: {results.join(", ")}</p>
                ) : (
                    <p>✖ No double letters found</p>
                )}
            </div>
        </div>
    );
}
