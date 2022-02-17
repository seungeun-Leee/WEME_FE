
  function clickCheck(target) {
    document.querySelectorAll(`input[type=checkbox] + label`)
        .forEach(el => el.checked = false);

    target.checked = true;
}