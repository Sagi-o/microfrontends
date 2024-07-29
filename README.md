# Microfrontends

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

<img width="796" alt="Screenshot 2024-07-30 at 0 44 21" src="https://github.com/user-attachments/assets/08c863fd-a039-4488-9622-cdf722c84d3e">

## Project Explanation

In this setup, `shell`, `mfe1`, and `mfe2` are independent React applications, while the `server` is a simple Express server that serves their bundles. The `shell` application uses a component called `MfeLoader` to dynamically load `mfe1` and `mfe2` via `the` server, which provides their bundles as `application/javascript`.

Each microfrontend exports an object to the global `window` in its `main.tsx`. For instance, `window.mfe1` might be an object with a mount function: `window.mfe1 = { mount: (container) => { ... } }`.

In the shell application’s `index.html`, there is an `import map` that maps each microfrontend’s application name to its corresponding remote bundle URL. This allows `MfeLoader` to import the microfrontend using its app name, which is then resolved to the correct remote URL based on the import map.

The import map also facilitates version management. If a microfrontend is updated, the import map can be updated to point to the new version’s URL. This ensures that the updated version is loaded when the `shell` application requests it.

Additionally, import maps can be used to share libraries at runtime across microfrontends. For example, you can map the React library to a CDN URL (e.g., `cdn.react-bundle.js`). This means that each microfrontend will use the same React bundle, which is downloaded once in the browser. To achieve this, make sure to exclude the shared library from each microfrontend’s package.json dependencies.

## Start the app

1. To build the micro-frontends run `npm run build-mfes`
2. To run the shell app and the server run `npm run app`

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
