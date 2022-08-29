function create_link() {
    for (let x = 0; x < document.getElementById("NOP").value; x++) {
        const characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        const numbers = ["0","1","2","3","4","5","6","7","8","9"]
        let list_of_characters = []
        let number = Math.floor(Math.random() * (numbers.length))
        list_of_characters.push(numbers[number])
        for (let i = 0; i < 5; i++) {
            let number2 = Math.floor(Math.random() * (characters.length))
            list_of_characters.push(characters[number2])
            
        }
        let link = list_of_characters.join('')
        let page = ('https://prnt.sc/' + link)
        window.open(page)
        console.log(link)
        
    } 
}

