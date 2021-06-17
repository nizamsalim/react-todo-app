import React,{useState} from 'react'

function AddTodo(props) {
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.addTodo(title,desc);
        setDesc("");
        setTitle("");

    }
    

    return (
        <div className="d-flex align-items-center  mt-4 mb-4" style={{flexDirection:'column'}}>
            <h3 style={{fontWeight:'700',textDecoration:'underline'}} >Add ToDo</h3>


            <form className="" style={{width:'40%'  }} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" >Title</label>
                    <div className="d-flex" >
                    <input required value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" type="text" className="form-control border border-solid border-2" id="title" aria-describedby="emailHelp" /> 
                    
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label" >Description</label>
                    <div className="d-flex" >
                    <input required value={desc} onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description" type="text" className="form-control border border-solid border-2" id="desc" aria-describedby="emailHelp" />
                    
                    </div>
                </div>

                 <div className="d-flex justify-content-center" >   
                    <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
                    
                </div>
            </form>
        </div>
                
                
    )
}

export default AddTodo
