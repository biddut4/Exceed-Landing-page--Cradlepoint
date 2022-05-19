function opentab(evt, tabname) {
    var i, img_item, title;
    img_item = document.getElementsByClassName("img_item");
    for (i = 0; i < img_item.length; i++) {
       
      img_item[i].style.display = "none";
    }
    title = document.getElementsByClassName("title");
    for (i = 0; i < title.length; i++) {
      title[i].className = title[i].className.replace(" tab_active", "");
    }
    
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " tab_active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
