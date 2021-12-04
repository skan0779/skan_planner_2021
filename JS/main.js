const plan=document.querySelector("#plan");
const planInput=plan.querySelector("input");
const planList=document.querySelector("#plan_list");
let plans=[];

function deleteList(event){
    const list=event.target.parentElement.parentElement;
    list.remove();
    plans=plans.filter((arguement)=>arguement.id !== parseInt(list.id));
    localStorage.setItem("plans",JSON.stringify(plans));
}

function paintPlan(savedPlanInput){
    const list=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");
    button.innerHTML=`<i class="fas fa-check fa-2x"></i>`;
    button.addEventListener("click",deleteList);
    list.id=savedPlanInput.id;
    list.appendChild(span);
    list.appendChild(button); 
    span.innerText=savedPlanInput.text;
    planList.appendChild(list);
}

function planSubmit(event){
    event.preventDefault();
    const savedPlanInput=planInput.value;
    planInput.value="";
    const planObject={
        text:savedPlanInput,
        id:Date.now(),
    }
    plans.push(planObject);
    paintPlan(planObject);
    localStorage.setItem("plans",JSON.stringify(plans));
}
plan.addEventListener("submit",planSubmit);

const savedPlans=localStorage.getItem("plans");

if(savedPlans!==null){
    const parsePlans=JSON.parse(savedPlans);
    plans=parsePlans;
    parsePlans.forEach(paintPlan);
}



