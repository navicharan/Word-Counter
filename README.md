Word Counter Chrome Extension
This Chrome extension counts the number of words in the selected text on any webpage and displays the count in a popup near the selected text.

Features
Word Count on Selection: Simply select text on any webpage to see the word count.
Instant Popup: A small popup appears near the selected text showing the word count.
User-Friendly: Easy to use with no additional configuration needed.
Installation
Clone or Download the repository.
Open Chrome Extensions Page: Go to chrome://extensions/ in your Chrome browser.
Enable Developer Mode: Toggle the switch in the top right corner to enable Developer Mode.
Load Unpacked Extension: Click on "Load unpacked" and select the directory where you cloned/downloaded the repository.
Usage
Navigate to Any Webpage: Open any webpage in Chrome.
Select Text: Highlight the text you want to count the words of.
View Popup: A popup will appear near the selected text showing the word count.
Files in the Repository
manifest.json: Defines the permissions and files used by the extension.
content.js: The content script that handles text selection and popup creation.
content.css: The CSS file that styles the popup.
icon16.png, icon48.png, icon128.png: Icons used for the extension.
Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome!

License
This project is licensed under the MIT License.

Here's a brief overview of the contents of each file in the repository:

manifest.json
Defines the extension's metadata, permissions, and the content scripts to be used.

content.js
A content script that listens for text selection events and creates a popup near the selected text displaying the word count.

content.css
Styles the popup created by the content script.
