scripts.connect("scripts/classes/looper.js").onload = function() {
  scripts.connect("scripts/ui/color.js").onload = function() {
    scripts.connect("scripts/functions/percentage.js").onload = function() {
      scripts.connect("scripts/ui/common_ui.js").onload = function() {
        scripts.connect("scripts/loading.js");
      };
    };
  };
};