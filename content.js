const checkButton = () => {
  const skipButton = document.querySelector('.skip__button');
  const nextButton = document.querySelector('.button--play[data-testid="up-next-play-button"]');
  const fullScreenButton = document.querySelector('.fullscreen-icon');

  chrome.storage.sync.get(['skipButtonChecked', 'autoplayChecked', 'fullscreenChecked'], function(result) {
    if (result.skipButtonChecked && skipButton) {
      skipButton.click();
    }
    if (result.autoplayChecked && nextButton) {
      nextButton.click();
    }
    if (result.fullscreenChecked && fullScreenButton) {
      fullScreenButton.click();
    }
  });
};

setInterval(checkButton, 1000);