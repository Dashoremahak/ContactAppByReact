import AddContact from './My Components/AddContact'
import Contact from './My Components/Contact'
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
   {/* whd */}
   <AddContact/>
   
   </div>
  
    </div>
    

    </>
  )
}

export default App
