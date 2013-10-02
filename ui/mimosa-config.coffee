exports.config =
  modules: ["server","require","minify","lint","live-reload","web-package"]
  lint:
    exclude:[/foundation_and_overrides/]