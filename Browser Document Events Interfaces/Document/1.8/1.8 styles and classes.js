function showNotification(top, right, html, classname) {
 
    let element = document.createElement('div')
  
    element.classList.add(classname);
    element.style.top = top + 'px';
    element.style.right = right + 'px';
    element.innerHTML = html;
    
    return element
    
  }
  
  console.log(showNotification(10,10, '<h1>marlon</h1>'))
  
  
  document.body.append(showNotification(10,10, "<h1>marlon</h1>"))
  
  
  