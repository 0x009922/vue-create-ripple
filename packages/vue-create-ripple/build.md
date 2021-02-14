# About builds

Someday, vite will probably support both multi-builds and TypeScript builds. It doesn't seem to support it now. Therefore, you have to first compile ts-files (`tsc`) and at the same time their general declaration (`rollup -c`), and then compile js-files via vite (`vite build`).