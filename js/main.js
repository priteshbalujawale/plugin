jQuery(document).ready(function ($) {
  colorBlindPicker($);
});

function colorBlindPicker($) {
  console.log("abcd");
  const button = $("<button>")
    .addClass("colorBlindPicker_btn btn")
    .attr("id", "colorBlindPicker_btn")
    .css({
      position: "fixed",
      bottom: "5px",
      right: "1px",
      "z-index": "999999",
    })
    .text("Color Blind Friendly");

  $("body").append(button);

  function addColorBlindPicker() {
    const colorBlindPickerBtn = $("#colorBlindPicker_btn");
    colorBlindPickerBtn.on("click", function () {
      const colorBlindPickerContainer = $("#colorBlindPicker");
      colorBlindPickerContainer.fadeToggle();
      if (!colorBlindPickerContainer.length) {
        colorBlindPicker();
      }
    });
  }

  function colorBlindPicker() {
    console.log("clicked");
    const colorBlindPicker = $("<div>")
      .addClass("colorBlindPicker")
      .attr("id", "colorBlindPicker")
      .css({
        width: "40vw",
        height: "50vh",
        position: "absolute",
        left: "0",
        bottom: "0",
        "z-index": "999999",
        "background-color": "#000",
        color: "#fff",
      })
      .text("Color Blind Picker Div");
    $("body").append(colorBlindPicker);

    function addColorBlindOption(colorBlindPicker, id, labelText) {
      const container = $("<div>").attr("id", id);
      const radioButton = $("<input>").attr({
        id: "radio-" + id,
        class: "radio-custom",
        name: "radio-group",
        type: "radio",
      });
      const label = $("<label>")
        .attr({
          for: "radio-" + id,
          class: "radio-custom-label",
        })
        .text(labelText);
      container.append(radioButton, label);

      colorBlindPicker.append(container);

      $(".radio-custom").on("change", function () {
        console.log("Radio button clicked");
      });
    }

    addColorBlindOption(
      colorBlindPicker,
      "deuteranopia",
      "Green-Red (Deuteranopia)"
    );
    addColorBlindOption(
      colorBlindPicker,
      "protanopia",
      "Red-Green (Protanopia)"
    );
    addColorBlindOption(
      colorBlindPicker,
      "tritanopia",
      "Blue-Yellow (Tritanopia)"
    );
  }
  addColorBlindPicker();
}
