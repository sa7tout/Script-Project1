let coursescontent=document.querySelector("#Courses-Container");
let activecategory='allcateg';
let pricerange=document.getElementById("pricerange");
document.getElementById("pricevalue").innerHTML='value:  <'+pricerange.value+'$';

function clearContainer(container) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

function createcourse(imagepath,title,price) {
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('h5'),
        span = document.createElement('span');
    img.src = imagepath;
    let contenu = document.createTextNode(title);
    p.appendChild(contenu);
    span.appendChild(document.createTextNode(price));
    div.setAttribute('class', 'card');
    div.setAttribute('style','width: 22rem;border: 5px solid rgb(20, 14, 20);border-radius: 7px;margin-bottom: 20px;width: 260px;height: 280px;')
    p.setAttribute('class', 'card-text')
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    coursescontent.append(div);
}

if(activecategory=='allcateg'){
COURSES.forEach((v) => {
    createcourse(v.path,v.title,v.price+'$');
})}

document.getElementById("allcateg").addEventListener("click",function createallcourses(){
    activecategory='allcateg';
    clearContainer(coursescontent);
    COURSES.forEach((v) => {
    createcourse(v.path,v.title,v.price+'$');
    })
});

document.getElementById("HTMLcateg").addEventListener("click",function createhtmlcourses(){
    activecategory='HTML';
    var i=0;
    clearContainer(coursescontent);
    COURSES.forEach((v) => {
        if(COURSES[i].category==activecategory)
    createcourse(v.path,v.title,v.price+'$');
    i++;
    })
});

document.getElementById("CSScateg").addEventListener("click",function createcsscourses(){
    activecategory='CSS';
    var i=0;
    clearContainer(coursescontent);
    COURSES.forEach((v) => {
        if(COURSES[i].category==activecategory)
    createcourse(v.path,v.title,v.price+'$');
    i++;
    })
});

document.getElementById("JScateg").addEventListener("click",function createjscourses(){
    activecategory='JS';
    var i=0;
    clearContainer(coursescontent);
    COURSES.forEach((v) => {
        if(COURSES[i].category==activecategory)
    createcourse(v.path,v.title,v.price+'$');
    i++;
    })
});

document.getElementById("PHPcateg").addEventListener("click",function createphpcourses(){
    activecategory='PHP';
    var i=0;
    clearContainer(coursescontent);
    COURSES.forEach((v) => {
        if(COURSES[i].category==activecategory)
    createcourse(v.path,v.title,v.price+'$');
    i++;
    })
});

pricerange.addEventListener("input",function filtercoursesbyprice(){
    document.getElementById("pricevalue").innerHTML='value:  <'+pricerange.value+'$';

        var i=0;
        var found=0;
        let errormssg='No Result Found !!!';
        clearContainer(coursescontent);

         if(activecategory=='allcateg'){
        COURSES.forEach((v) => {
            if(COURSES[i].price < pricerange.value)
            {createcourse(v.path,v.title,v.price+'$');found=1;}
        i++;
    });
    }
    else {
        COURSES.forEach((v) => {
            if((COURSES[i].price < pricerange.value) && (COURSES[i].category==activecategory))
            {createcourse(v.path,v.title,v.price+'$');found=1;}
        i++;
    });
    }
    if (found==0){
        let p = document.createElement('h5');
        p.setAttribute('class','display-2');
        p.innerHTML=errormssg;
        coursescontent.append(p);
        return;
    }
});

document.getElementById("categorysearchbar").addEventListener("input",function filtercoursesbysearch(){

    let searchbarinput =document.getElementById("categorysearchbar").value;
    var i=0;
    var found=0;
    let errormssg='No Result Found !!!';
    clearContainer(coursescontent);
    if(activecategory=='allcateg'){
        COURSES.forEach((v) => {
            if((COURSES[i].title.includes(searchbarinput.toUpperCase()) || COURSES[i].category.includes(searchbarinput.toUpperCase())) && (COURSES[i].price < pricerange.value))
            {createcourse(v.path,v.title,v.price+'$');found=1;}
        i++;
    });
    }
    else {
        COURSES.forEach((v) => {
            if((COURSES[i].title.includes(searchbarinput.toUpperCase()) || COURSES[i].category.includes(searchbarinput.toUpperCase())) && COURSES[i].category==activecategory && (COURSES[i].price < pricerange.value))
            {createcourse(v.path,v.title,v.price+'$');found=1;}
        i++;
    })

    }
    if (found==0){
        let p = document.createElement('h5');
        p.setAttribute('class','display-2');
        p.innerHTML=errormssg;
        coursescontent.append(p);
        return;
    }
});

