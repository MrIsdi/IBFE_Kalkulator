let input = document.getElementById("input")
let checkbox = document.querySelector(".form-switch-kalkulator")
const groupButton = document.getElementById("groupButton")

let result = ""
const data = [
    {text: "AC", color: "text-info"}, {text: "+/-", color: "text-info"}, {text: "%", color: "text-info"},  {text: "/", color: "text-danger"},
    {text: "7", color: "text-light"} , {text: "8", color: "text-light"}, {text: "9", color: "text-light"}, {text: "*", color: "text-danger"},
    {text: "4", color: "text-light"},  {text: "5", color: "text-light"}, {text: "6", color: "text-light"}, {text: "-", color: "text-danger"},
    {text: "1", color: "text-light"},  {text: "2", color: "text-light"}, {text: "3", color: "text-light"}, {text: "+", color: "text-danger"},
    {text: "C", color: "text-light"},  {text: "0", color: "text-light"}, {text: ".", color: "text-light"}, {text: "=", color: "text-danger"}
]

const CreateButton = (data) =>{
    const button = document.createElement("button")
    button.classList.add("btn", "button-kalkulator-dark", "fw-bold", "fs-5", "shadow", `${data.color}`)
    button.innerHTML = data.text
    return button
}

const handleButton = (data) => {
    result += data.text
    document.getElementById("input").value = result
}

const handleClear = () => {
    let clear = document.getElementById("input").value
    let newClear = clear.slice(0, -1)
    document.getElementById("input").value = newClear
}

const handleAllClear = () => {
    document.getElementById("input").value = ""
    result = ""
}

const handlePlusMinus = () => {
    let plusMinus = document.getElementById("input").value
    if(!plusMinus.includes("(-")){
        plusMinus = "(-" + plusMinus
        result = "(-" + result
        document.getElementById("input").value = plusMinus
    }else{
        let newData = plusMinus.slice(2)
        let newResult = result.slice(2)
        result = newResult
        document.getElementById("input").value = newData
    }
}

const handleResult = () =>{
    let data = document.getElementById("input").value
    let newData = data.replace("%", "/100")
    if(newData.includes("(-")){
        newData = newData + ")"
    }
    
    try {
        document.getElementById("input").value = eval(newData)
        result = eval(newData)
    } catch (error) {
        document.getElementById("input").value = "Error"
        result = ""
    }
}

data.forEach((val)=>{
    const button = CreateButton(val)

    switch(val.text){
        case "C":
            button.onclick = () => handleClear()
            break;
        case "+/-":
            button.onclick = () => handlePlusMinus()
            break;
        case "AC":
            button.onclick = () => handleAllClear()
            break;
        case "=":
            button.onclick = () => handleResult()
            break;
        default:
            button.onclick = () => handleButton(val)
            break;
    }

    groupButton.appendChild(button)
})

checkbox.onclick = () => {
    let button = groupButton.querySelectorAll("button"),
        bodyCalculator = document.getElementById("bodyCalculator")
    button.forEach((btn)=>{
        if(checkbox.checked){
            btn.classList.replace("text-light", "text-dark")
            btn.classList.replace("button-kalkulator-dark", "button-kalkulator-light")
        }else{
            btn.classList.replace("text-dark", "text-light")
            btn.classList.replace("button-kalkulator-light", "button-kalkulator-dark")
        }
    })

    if(checkbox.checked){
        document.body.classList.replace("bg-kalkulator-primary-dark", "bg-kalkulator-primary-light")
        bodyCalculator.classList.replace("bg-kalkulator-primary-dark", "bg-kalkulator-primary-light")
        bodyCalculator.classList.replace("border-dark", "border-light")
        groupButton.classList.replace("bg-kalkulator-secondary-dark", "bg-kalkulator-secondary-light")
        input.classList.replace("text-light", "text-dark")
    }else{
        document.body.classList.replace("bg-kalkulator-primary-light", "bg-kalkulator-primary-dark")
        bodyCalculator.classList.replace("bg-kalkulator-primary-light", "bg-kalkulator-primary-dark")
        bodyCalculator.classList.replace("border-light", "border-dark")
        groupButton.classList.replace("bg-kalkulator-secondary-light", "bg-kalkulator-secondary-dark")
        input.classList.replace("text-dark", "text-light")
    }
}