import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/graphql/type.graphql",
  generates: {
    "./src/type/resolvers.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;