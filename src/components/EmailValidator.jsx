import React, { useState } from "react";

export default function EmailValidator() {
    const [email, setEmail] = useState("");

    const rules = {
        hasAt: email.includes("@"),
        hasDot: email.includes("."),
        validFormat: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    };

    return (
        <div className="bg-black p-6 rounded-2xl shadow-lg border border-cyan-400">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Email Validator</h2>

            <input
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <ul className="mt-4 space-y-2">
                <RuleItem label="Contains @" active={rules.hasAt} />
                <RuleItem label="Contains a dot (.)" active={rules.hasDot} />
                <RuleItem label="Valid format (abc@xyz.com)" active={rules.validFormat} />
            </ul>
        </div>
    );
}

function RuleItem({ label, active }) {
    return (
        <li className="flex items-center space-x-2">
            <span className={active ? "text-green-400 text-xl" : "text-red-500 text-xl"}>
                {active ? "✔" : "✖"}
            </span>
            <span className="text-sm">{label}</span>
        </li>
    );
}
