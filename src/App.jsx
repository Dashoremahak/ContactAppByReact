import './App.css'
import AddContact from './My Components/AddContact'
import Header from './My Components/Header'
import List from './My Components/ListofContact'
import Search from './My Components/Search'
import Side from './My Components/Side'

function App() {

  return (
    <>
    <div className='m-48 mt-10 rounded	bg-slate-100 max-w-max align-bottom '>
    <Header/>
    <Search/>
   <div className='flex '>
   <Side />
   <AddContact/>
   
   </div>
   < List />
    </div>
    

    </>
  )
}

export default App
