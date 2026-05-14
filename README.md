# liquidfun_es

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A JavaScript ES module wrapper for the LiquidFun particle-based fluid simulation library, with rendering handled by D3.js.

## Demos

-   **[IchigoJam logo](https://code4fukui.github.io/liquidfun_es/)**
    *Particles are poured over the static "IchigoJam" text logo.*

-   **[Sample](https://code4fukui.github.io/liquidfun_es/sample.html)**
    *Two groups of colored particles interact with dynamic, floating shapes in a container.*

The demo structure is forked from an article by Quramy: [https://qiita.com/Quramy/items/578efec667267acf6871](https://qiita.com/Quramy/items/578efec667267acf6871)

## Features

-   Wraps LiquidFun as a JavaScript ES module for modern web development.
-   Provides a `D3Renderer` class for easy SVG-based visualization.
-   Demonstrates creating static and dynamic bodies.
-   Allows customization of physics parameters like gravity, particle radius, and damping.

## Usage

Because this project uses ES modules, the HTML files must be served by a web server. They cannot be opened directly from the local filesystem (`file://`).

1.  Clone this repository.
2.  Start a local web server in the project's root directory. For example, if you have Python installed:
    ```sh
    python -m http.server
    ```
3.  Open your browser and navigate to `http://localhost:8000` to view the demos.

## Project Structure

-   `liquidfun_fixed.js`: The core LiquidFun library compiled to JavaScript.
-   `D3Renderer.js`: A reusable class for rendering the simulation state with D3.js.
-   `index.html` & `sample.html`: Example implementations showing how to set up and run a simulation.
-   `d3_v3.min.js`: The D3.js library (v3.5.17).

## Requirements

A modern web browser with support for ES modules.

## License

-   liquidfun_es: MIT License
-   LiquidFun: Apache License 2.0