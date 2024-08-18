
/*O código abaixo impelenta a funcionalidade de alternancia de tema da págia (tema escuro/claro).
Essa funcionalidade usa a váriavel salva na página HTML e baseado no seu valor, realizará a alternacia entre os modos ao ocorrer o clique no botão responsável*/

const main = document.querySelector("main")
const root = document.querySelector(":root")

document.getElementById("themeSwitcher").addEventListener("click", function() {
   if (main.dataset.theme === 'light') {
        root.style.setProperty('--background-color', '#1C1C1C')
        root.style.setProperty('--text-color', '#CCCCCC')
        root.style.setProperty('--main-color', '#FF4C4C')
        root.style.setProperty('--highlight-color', '#3A3A3A')
        root.style.setProperty('--buttons-color', '#FF1A1A')
        main.dataset.theme = 'dark'
   } else {
        root.style.setProperty('--background-color', '#ffffff')
        root.style.setProperty('--text-color', '#333333')
        root.style.setProperty('--main-color', '#FF4C4C')
        root.style.setProperty('--highlight-color', '#E5E5E5')
        root.style.setProperty('--buttons-color', '#b30000')
        main.dataset.theme = 'light'
   }  
})