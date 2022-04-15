// console.dir(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// //document.title = 123435987
// console.log(document.head)
// console.log(document.images)
// console.log(document.getElementById('hi'))
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title')
// headerTitle.textContent = 'sahfshdk'
// headerTitle.innerText  = 'sachin'
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerText)
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom='solid 3px black'
// var header =  document.getElementById('main-header')
// header.style.borderBottom = 'solid 3px black'


// //getting elements by class name
// var items = document.getElementsByClassName('list-group-item')
// console.log(items[1])
// items[1].textContent = 'Hello2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// //coloring whole background of class
// for(var i = 0 ; i<items.length; i++){
//     items[i].style.backgroundColor='#f4f4f4'
// }
// for (var i=0; i<items.length;i++){
//   items[i].style.fontWeight='bold'
// }


// using the tagname
var li = document.getElementsByTagName('li')
console.log(li[1])
li[1].textContent = 'Hello2'
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'yellow'

//coloring whole background of tag
for(var i = 0 ; i<li.length; i++){
    li[i].style.backgroundColor='#f4f4f4'
}

// using querrySelector
var header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px blue'