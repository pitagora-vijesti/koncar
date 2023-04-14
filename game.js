const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".lal");
hiddenElements.forEach((el) => observer.observe(el));

const observerDva = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add("showDva");
    }
  });
});

const hiddenElementsDva = document.querySelectorAll(".lol");
hiddenElementsDva.forEach((el) => observerDva.observe(el));

