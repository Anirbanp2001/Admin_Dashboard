import React ,{useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';


const New = ({inputs}) => {
    const[file,setFile]=useState(null);
  return (
    <div className="new">
        <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
            Add New User
        </div>
        <div className="bottom">
            <div className="left"><img src={file?URL.createObjectURL(file):'https://i.pinimg.com/originals/7d/58/48/7d58481d067e336a6338b7bebfc0fe10.jpg'} alt=''/></div>
            <div className="right">
                <form>
                    <div className="userInput">
                        <label htmlFor='file'>Image: <DriveFolderUploadIcon className="icon"/></label>
                        <input type='file' placeholder='' style={{display:"none"}} id='file' onChange={e=>setFile(e.target.files[0])}/>
                    </div>

                    {inputs.map((input)=>(
                        <div className="userInput" ley={input.id}>
                        <label>{input.label}:</label>
                        <input type={input.type}/>
                    </div>
                    ))}
                    
                    
                    <button>Submit</button>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default New