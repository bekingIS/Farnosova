function attributes(parentsize, childsize){
    childsize.style.width = parentsize.offsetWidth;
    childsize.style.height = parentsize.offsetHeight;
    childsize.style.borderRight =        parentsize.offsetWidth + 'px solid transparent';
    childsize.style.borderBottom = parentsize.offsetHeight + 'px solid white';
}
window.onload = function(){
    var content = document.querySelector('.content-triangle');
    var triangle = document.querySelector('.triangle'); 
    attributes(content,triangle);

    window.onresize = function(e){						
        attributes(content,triangle);
    }
}