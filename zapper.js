var css = `
.bugzapper-alert {
  display: flex;
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: #404040;
  align-items: center;
  padding: 7px 8px 7px 5px;
  border-left: solid red;
  border-radius: 3px;
  opacity: 1;
  z-index: 99999999999;
  transition: opacity 200ms;
}
.bugzapper-alert span {
  text-align: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

function sendAlert(text) {
  var style = document.createElement('style');
  document.head.appendChild(style)
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  var alert = document.createElement('div')
  var span = document.createElement('span')
  alert.classList.add('bugzapper-alert')
  span.innerText = text
  alert.appendChild(span)

  document.body.appendChild(alert)
  
  setTimeout(function() {alert.style.opacity = 0}, 3000)
  setTimeout(function() {alert.remove()}, 3200)
}

sendAlert("🪰 Bugzapper loaded!\nV0.1 | Silas")


