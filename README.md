# DiaryConnect - Singlr Author Blog API

DiaryConnect is an open-source blog API built with Express, TypeScript, and MongoDB. It provides a robust backend for managing blog posts, comments, user roles, and authentication using JWT and Single Sign-On (SSO) integration.

## Features

- Two user roles: "user" and "admin"
- Users can read, comment, find, and filter posts
- Admins can create, update, and delete posts
- Admins can create, update, and delete tags (categories)
- Admins can read and delete comments
- Users can filter posts by tag
- Users can sign up and log in to the API
- Authentication handled with JWT and SSO (Google, Facebook, Apple)
- Admins can create, update, and delete users

## Prerequisites

To run DiaryConnect locally, you need the following:

- Node.js (v12 or higher)
- MongoDB (local or remote connection)
- Environment variables (see .env.example)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/diaryconnect.git
cd diaryconnect
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

<!-- Rename `.env.sample` to `.env` and fill in the required values. -->

4. Start the development server:

```bash
npm run dev
```

5. Access the API:

The API will be available at `http://localhost:3000`.

## API Documentation

The API documentation is generated using Swagger UI and can be accessed at:

```
http://localhost:3000/api/docs
```

## Contributing

We welcome contributions from the community! If you find a bug, have an idea for improvement, or want to add new features, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

We would like to acknowledge the contributions of the developer community and the open-source projects used in this project.

- Express.js: https://expressjs.com/
- TypeScript: https://www.typescriptlang.org/
- MongoDB: https://www.mongodb.com/
- JWT: https://jwt.io/
- Swagger UI: https://swagger.io/tools/swagger-ui/
- And other open-source libraries.
