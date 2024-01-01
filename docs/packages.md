# Packages

## Configuration Guide

This repository aims to serve as an open-box solution for building React Single Page Applications (SPAs). If you're curious about its creation, please follow the steps outlined below.

- [configure tailwind](https://tailwindcss.com/docs/guides/create-react-app)
- [create react typescript template from react-create-react-app cli](https://create-react-app.dev/docs/adding-typescript)
- configure ESlint:

  - copy cut ESlint typescript configuration from [here](https://typescript-eslint.io/getting-started)
  - packages

    - [eslint-config-react-app)](https://www.npmjs.com/package/eslint-config-react-app).
      - This package includes the shareable ESLint configuration used by Create React App.
      - [It also enables some default accessibility checks](https://www.npmjs.com/package/eslint-config-react-app#accessibility-checks) from `eslint-plugin-jsx-a11y`

  - script

            yarn add eslint@latest \
            eslint-config-react-app@latest \
            eslint-config-standard-with-typescript@latest \
            eslint-plugin-import@latest \
            eslint-plugin-jsx-a11y@latest \
            eslint-plugin-n@latest \
            eslint-plugin-promise@latest \
            eslint-plugin-react@latest \
            eslint-plugin-react-hooks@latest \
            eslint-plugin-storybook@latest \
            eslint-plugin-typescript-sort-keys@latest

- [configure shadcn cli](https://ui.shadcn.com/docs/cli). After adhering to the default guidelines, we update `aliases` part of the `components.json` file as follows:

  ```json
  {
    "aliases": {
      "components": "shared/components",
      "utils": "shared/components/ui/tailwind"
    }
  }
  ```

  This modification marks the components library under shared/components and the utilities under shared/components/ui/tailwind.
