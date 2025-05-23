document.querySelectorAll('fieldset').forEach(fieldset => {
  const noneBox = fieldset.querySelector('input[value="none"]');
  if (noneBox) {
    noneBox.addEventListener('change', function() {
      const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]:not([value="none"])');
      checkboxes.forEach(cb => cb.disabled = this.checked);
    });
  }
});