document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('countButton').addEventListener('click', () => {
    console.log('Button clicked'); // Check if the button click event is triggered
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: getCount
      }, (result) => {
        if (chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError.message);
          alert('Error occurred. Check console for details.');
          return;
        }
        if (result && result[0]?.result !== undefined) {
          document.getElementById('result').innerText = `${result[0].result} Words`;
        } else {
          document.getElementById('result').innerText = 'Unable to count words.';
        }
      });
    });
  });

  function getCount() {
    const selectedText = window.getSelection().toString();
    console.log('Selected text:', selectedText); // Check if selected text is captured
    const wordCount = selectedText.split(/\s+/).filter(word => word.length > 0).length;
    console.log('Word count:', wordCount);
    return wordCount;
  }
});
