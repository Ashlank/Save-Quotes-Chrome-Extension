async function getAllQuotes() {
  const { quotes } = await chrome.storage.local.get("quotes");
  return quotes || [];
}

async function addQuote(quote) {
  const quotes = await getAllQuotes()
  const result = await chrome.storage.local.set({ quotes: [...quotes, quote] })
  showMessage("Guardado correctamente", "green")
  return result;
}

function showMessage(text, color) {
  const message = document.createElement('div');
  message.textContent = text;
  message.style.position = 'fixed';
  message.style.bottom = '10px';
  message.style.left = '10px';
  message.style.padding = '10px';
  message.style.backgroundColor = color;
  message.style.color = 'white';
  message.style.borderRadius = '5px';
  message.style.zIndex = '9999';
  document.body.appendChild(message);
  setTimeout(() => {
    message.remove();
  }, 2000);
}

function handleSave() {
  const textSelected = window.getSelection().toString()

  if(textSelected) {
    addQuote(textSelected)
  } else {
    showMessage("No hay texto seleccionado", "red")
  }
}

handleSave()