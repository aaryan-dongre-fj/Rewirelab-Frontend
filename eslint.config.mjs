import nextConfig from "eslint-config-next/core-web-vitals"

const eslintConfig = [
  {
    ignores: ["src/generated/**", ".next/**"],
  },
  ...nextConfig,
]

export default eslintConfig
