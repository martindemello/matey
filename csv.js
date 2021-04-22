({
  requires: [{ "import-type": "builtin", name: "json" }],
  nativeRequires: ["csv-parse/lib/sync"],
  provides: {
    values: {
      "parse": ["arrow", ["String"], ["RawArray", ["RawArray", "String"]]]
    }
  },

  theModule: function(runtime, _, _, json, parse) {
    var gf = runtime.getField;
    var read_json = gf(gf(json, "values"), "read-json");

    function csvparse(s) {
      runtime.checkString(s);
      return read_json.app(parse(s));
    }

    var values = {
      parse: runtime.makeFunction(csvparse, "parse")
    }

    return runtime.makeModuleReturn(values, {});
  }
})
