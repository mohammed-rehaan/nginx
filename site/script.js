console.log("Choo choo!");

if(window.location.href.split('/') > 1){
  window.location.href = window.location.href.split('/')[0]
}
