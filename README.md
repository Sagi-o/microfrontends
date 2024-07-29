# Microfrontends

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

<img width="796" alt="Screenshot 2024-07-30 at 0 44 21" src="https://github.com/user-attachments/assets/08c863fd-a039-4488-9622-cdf722c84d3e">

## Project Explanation

In this setup, `shell`, `mfe1`, and `mfe2` are independent React applications, while the `server` is a simple Express server that serves their bundles. The `shell` application uses a component called `MfeLoader` to dynamically load `mfe1` and `mfe2` via the `server`, which provides their bundles as `application/javascript`.

Each microfrontend exports an object to the global `window` in its `main.tsx`. For instance, `window.mfe1` might be an object with a mount function: `window.mfe1 = { mount: (container) => { ... } }`, this `mount` function is used by `MfeLoader` to mount the microfrontend into the `shell`.

In the shell application’s `index.html`, there is an `import map` that maps each microfrontend’s application name to its corresponding remote bundle URL. This allows `MfeLoader` to import the microfrontend using its app name, which is then resolved to the correct remote URL based on the import map.

The import map also facilitates version management. If a microfrontend is updated, the import map can be updated to point to the new version’s URL. This ensures that the updated version is loaded when the `shell` application requests it.

Additionally, import maps can be used to share libraries at runtime across microfrontends. For example, you can map the React library to a CDN URL (e.g., `cdn.react-bundle.js`). This means that each microfrontend will use the same React bundle, which is downloaded once in the browser. To achieve this, make sure to exclude the shared library from each microfrontend’s package.json dependencies.

## Start the app

1. To build `mfe1` and `mfe2` run `npm run build-mfes`
2. To run the `shell` app and the `server` run `npm run app`
