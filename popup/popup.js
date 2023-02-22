
const skipButtonCheckbox = document.querySelector('#skip-button-checkbox');
const autoplayCheckbox = document.querySelector('#autoplay-checkbox');
const fullscreenCheckbox = document.querySelector('#fullscreen-checkbox');

// 初回の保存
chrome.storage.sync.get(['skipButtonChecked', 'autoplayChecked', 'fullscreenChecked'], function(result) {
  skipButtonCheckbox.checked = result.skipButtonChecked || false;
  autoplayCheckbox.checked = result.autoplayChecked || false;
  fullscreenCheckbox.checked = result.fullscreenChecked || false;
});

skipButtonCheckbox.addEventListener('click', () => {
  chrome.storage.sync.set({ skipButtonChecked: skipButtonCheckbox.checked });
});

autoplayCheckbox.addEventListener('click', () => {
  chrome.storage.sync.set({ autoplayChecked: autoplayCheckbox.checked });
});

fullscreenCheckbox.addEventListener('click', () => {
  chrome.storage.sync.set({ fullscreenChecked: fullscreenCheckbox.checked });
});