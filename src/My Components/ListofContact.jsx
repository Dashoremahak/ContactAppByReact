import Contact from "./Contact"

function List(){
    let list = [
        {
            id:123,
            name: "Monika Khade",
            number: 5465465455
        },
         {
            id:124,
            name:"Tanisha Kushwah",
            number:5656565656 
        },
       {
            id:125,
    
            name:"Kartik Khade",
            number:6598912896 
    
        },
         {
            id:126,
            name:"Uday Dhatrak",
            number:8785416898 
        }
    ]
    
  
    return(
        <div>    
            {
                list.map((c) => <Contact 
                key={c.id}
                name ={c.name}
                number = {c.number}
                />)
            }
        </div>
       
    )
}
export default List