/**
 * @type {import("lint-staged").Config}
 */
export default {
  "*": "prettier --ignore-unknown --write",
  "*.ts{x}": () => "tsc --project tsconfig.json",
  "*.{ts,tsx,mjs}": "eslint --cache --fix",
};
