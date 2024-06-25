chrome.runtime.sendMessage({ action: 'getCount' }, (response) => {
  if (response.count !== undefined) {
    alert(`Selected text has ${response.count} words.`);
  }
});
