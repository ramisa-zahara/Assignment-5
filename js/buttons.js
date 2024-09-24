function colored(element) {

    // event.preventDefault();
    // const element=this;
  const activeElement=document.querySelector("[data-active=true]")
  if(element!== activeElement){
    activeElement.setAttribute("data-active","false");
    element.setAttribute("data-active","true");

  }
  }