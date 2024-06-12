const HTMLElements = {
    hslSliderInputHslValueHue: document.getElementById("hsl-slider-input-hsl-value-hue"),
    hslSliderInputHslValueLight: document.getElementById("hsl-slider-input-hsl-value-light"),
    hslSliderInputHslValueSaturation: document.getElementById("hsl-slider-input-hsl-value-saturation"),
    colorCodeOutputTextSpan: document.getElementById("color-code-output-text-span"),
};
let HSLCurrentColorCode = [0, 100, 50];
renderHSLColorCode();

HTMLElements.hslSliderInputHslValueHue.addEventListener("input", function() {
    HSLCurrentColorCode[0] = HTMLElements.hslSliderInputHslValueHue.value;
    renderHSLColorCode();
});
HTMLElements.hslSliderInputHslValueLight.addEventListener("input", function() {
    HSLCurrentColorCode[1] = HTMLElements.hslSliderInputHslValueLight.value;
    renderHSLColorCode();
});
HTMLElements.hslSliderInputHslValueSaturation.addEventListener("input", function() {
    HSLCurrentColorCode[2] = HTMLElements.hslSliderInputHslValueSaturation.value;
    renderHSLColorCode();
});

function renderHSLColorCode() {
    let {hslSliderInputHslValueHue,
        hslSliderInputHslValueLight,
        hslSliderInputHslValueSaturation,
        colorCodeOutputTextSpan} = HTMLElements;
    hslSliderInputHslValueHue.value = HSLCurrentColorCode[0];
    hslSliderInputHslValueLight.value = HSLCurrentColorCode[1];
    hslSliderInputHslValueSaturation.value = HSLCurrentColorCode[2];

    colorCodeOutputTextSpan.innerHTML = `
        hsl(${HSLCurrentColorCode[0]}, ${HSLCurrentColorCode[1]}%, ${HSLCurrentColorCode[2]}%)
    `;
}