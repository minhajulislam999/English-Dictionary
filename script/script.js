const loadApi  = () =>{
    fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then(response => response.json())
    .then(data => displayData(data.data));
}

const displayData = (lessons) =>{
    console.log(lessons)
    //1 get the container & empty
    
    const lessonContainer =document.getElementById("lesson-section")
    lessonContainer.innerHTML = "";

    //2 get into every lesson

    for(const lesson of lessons){
        console.log(lesson)
       
       
        //3 create element

        const createDiv = document.createElement("div")

        createDiv.innerHTML =`
        <button class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>
        Lesson -${lesson.level_no}
        </button>


        
        `


        //4 appent child

        lessonContainer.append(createDiv);





    }



}

loadApi()