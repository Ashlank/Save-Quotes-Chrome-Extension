chrome.commands.onCommand.addListener((command, tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id},
    files: ["save-script.js"]
  })
})