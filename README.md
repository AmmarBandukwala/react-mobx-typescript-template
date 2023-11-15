# React TypeScript MobX App Template

![React](https://img.shields.io/badge/react-v18.2.0-blue.svg) ![TypeScript](https://img.shields.io/badge/typescript-v4.9.5-blue.svg) ![MobX](https://img.shields.io/badge/mobx-v6.11.0-blue.svg) ![Material-UI](https://img.shields.io/badge/material--ui-v5.14.17-blue.svg)

This is a template for building React applications with TypeScript and MobX for state management. It utilizes Material-UI (@mui) components for a clean and responsive user interface.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16.16.0 or higher)
- [npm](https://www.npmjs.com/) (v8.15.0 or higher)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AmmarBandukwala/react-mobx-typescript-template.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-mobx-typescript-template
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

### Running the App

Start the development server on `localhost:3000`:

```bash
npm start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

### Project Structure

- `src/`: Contains the source code of the application.
  - `components/`: Reusable React components.
  - `config/`: Route, context, and theme configuration.
  - `stores/`: MobX state management stores.
  - `features/`: Main views of the application and there dependecies.
  - `App.tsx`: Root component.
- `public/`: Static assets and HTML template.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Project dependencies and scripts.

### Features

- **React**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript to improve development experience and code quality.
- **MobX**: Simple, scalable state management.
- **Material-UI (@mui)**: A popular React UI framework for building responsive and consistent web applications.

### Contributing

Feel free to contribute to this project. Fork the repository, make your changes, and submit a pull request. Any contributions are welcome!

### License

This project is licensed under the [MIT License](LICENSE).