function List(){
    let list = [ob1 , ob2, ob3 , ob4]
    let ob1 = {
        name: "Monika Khade",
        number: 5465465455
    }
    let ob2 = {
        name:"Tanisha Kushwah",
        number:5656565656 
    }
    let ob3 = {
        name:"Kartik Khade",
        number:6598912896 

    }
    let ob4 = {
        name:"Uday Dhatrak",
        number:8785416898 
    }
  
    return(
        <div>
       <ul>
        {
            list.map(value => <li>{value}</li>)
        }
       </ul>
        </div>
       
    )
}
export default List