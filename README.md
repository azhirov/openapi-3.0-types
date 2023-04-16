# OpenAPI Types

This package provides TypeScript types for OpenAPI 3.0, based on the official [OpenAPI Specification 3.0.3](https://spec.openapis.org/oas/v3.0.3). These types allow you to validate and type-check your OpenAPI documents in TypeScript, providing improved documentation and confidence in your API contracts.

## Installation

```
npm i --save-dev openapi-3.0-types
```

## Usage

To use the OpenAPI types in your TypeScript project, simply import them as needed:

```typescript

import type { OpenApiObject3 } from 'openapi-3.0-types';

const myApiSpec: OpenApiObject3 = {
  // ...
};
```
The OpenApiObject3 type represents the root object of an OpenAPI specification. Other types are provided for each component of the specification, such as PathItemObject3, ParameterObject3, and ResponseObject3.

For more information on the available types, please refer to the official [OpenAPI Specification 3.0.3](https://spec.openapis.org/oas/v3.0.3).

## Generate `*.d.ts`

1. Clone this repository
2. Install typescript
3. Run `tsc`

## Contributing

If you find a bug or would like to contribute to the package, please feel free to open an issue or submit a pull request on the GitHub repository.

## License
This package is licensed under the MIT License. See the LICENSE file for details.
