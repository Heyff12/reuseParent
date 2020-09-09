module.exports = {
  "src/app/**/*.ts": (files) => {
    const rule = [
      `ng lint resueParent --fix ${files
        .map((file) => `--files=${file.substring(file.indexOf("src/app/"))}`)
        .join(" ")}`,
    ];
    return rule;
  },
  "src/app/**/*.{html,less}": ["npm run prettier"],
};
