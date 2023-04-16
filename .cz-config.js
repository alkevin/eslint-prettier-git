"use strict";

module.exports = {
    allowBreakingChanges: [],
    allowCustomScopes: false,
    // TODO: Update this config with your own needs
    scopes: ["config", "other", "version", "*"],
    types: [
        { value: "feat", name: "feat:   ✨  A new feature." },
        { value: "fix", name: "fix:   🐛  A bug fix." },
        {
            value: "refactor",
            name: "refactor:     🔨  A code change that neither fixes a bug nor adds a feature like cleanup.",
        },
        { value: "docs", name: "docs:   📚  Documentaztion only changes." },
        {
            value: "test",
            name: "test:   ✅  Adding missing tests or correction existing tests.",
        },
        {
            value: "ci",
            name: "ci:   🔧  Changes to our CI configuration files and scripts.",
        },
        {
            value: "build",
            name: "build:     👷  Changes that affect the build system or external dependencies.",
        },
        { value: "revert", name: "revert:   ⏪   Revert to a commit." },
        { value: "style", name: "style:     🎨  A modification of style." },
        { value: "perf", name: "perf:   🐎  Improve performances." },
    ],
};
