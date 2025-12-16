import React, { useState } from "react";

export default function PasswordValidator() {
    const [password, setPassword] = useState("");

    const rules = {
        minLength: password.length >= 8,
        hasUpper: /[A-Z]/.test(password),
        hasLower: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password),
        hasSpecial: /[@$!%*?&]/.test(password),
    };

    return (
        <div className="bg-black p-6 rounded-2xl shadow-lg border border-cyan-400">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Password Validator</h2>

            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-900 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <ul className="mt-4 space-y-2">
                <RuleItem label="At least 8 characters" active={rules.minLength} />
                <RuleItem label="Contains uppercase letter (A-Z)" active={rules.hasUpper} />
                <RuleItem label="Contains lowercase letter (a-z)" active={rules.hasLower} />
                <RuleItem label="Contains number (0-9)" active={rules.hasNumber} />
                <RuleItem label="Contains special character (@$!%*?&)" active={rules.hasSpecial} />
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
