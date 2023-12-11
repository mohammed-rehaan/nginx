console.log("Choo choo!");

if(window.location.href.split('/') > 1){
  console.log("SPLIT",window.location.href)
  console.log("TEST", window.location.href.split('/') > 1)
  window.location.href = 'https://expenso-4y16.onrender.com/'
}
