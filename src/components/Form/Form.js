
import { useRef, useState } from 'react';
import 'styles/form.css'
import { ClickBox } from 'utils/ClickBox';



export const Form = ({
    style = {},
    className = "",
    children,
    inputs = [],
    onSubmit=()=>{},
    submitTitle='Submit'
}) => {

    const componentClassName = ' form ' + className;
    const componentStyle = { ...style };
    
   

    
    const formContent =inputs.map((input_, index) =><div key={index}> 
        <input type={input_?.type} name={input_?.name} placeholder={input_?.placeholder} />
    </div>)
    
    
    return (<SubForm onSubmit={onSubmit} className={componentClassName} style={componentStyle}  submitTitle={submitTitle}>
        {children ||formContent}
    </SubForm>)
}

const SubForm=({
    onSubmit=()=>{},
    className='',
    style={},
    submitTitle,
    children

})=>{

    const errorsRef=useRef({});
    const [error,setError]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form =new FormData(e?.target);
        const data={}
        errorsRef.current={length:0}
        for(let [name, value] of form) {
            // console.log(error);
            if(value){
                data[name]=value
            }else{
                errorsRef.current[name]=' error ';
                errorsRef.current.length+=1;
            }
        }
        if(!errorsRef.current?.length)
            onSubmit(data);
        else{
            setError(true);
        }
       
    }

    // console.log(children.filter(c=>c?.type==='input'));

    const formContent =children? 

        children?.length?children.filter(c=>c?.type==='input').map((input_, index) =><div key={index}> 
            <input onChange={()=>{setError(false)}} type={input_?.props?.type} name={input_?.props?.name} placeholder={input_?.props?.placeholder} />
            {error&& errorsRef.current[input_?.props?.name] ?<div style={{color:'red',height:'20px'}}> {errorsRef.current[input_?.props?.name]} </div>:<div style={{height:20}}></div> }
        </div>):
        
            children?.type==='input'?<div > 
                <input onChange={()=>{setError(false)}} type={children?.props?.type} name={children?.props?.name} placeholder={children?.props?.placeholder} />
                {error&& errorsRef.current[children?.props?.name] ?<div style={{color:'red',height:'20px'}}> {errorsRef.current[children?.props?.name]} </div>:<div style={{height:20}}></div> }
            </div>:<></>
            
            :<></>


            
    return (<div className={className} style={style}>
        <form onSubmit={handleSubmit}>
            {formContent}
            <div style={{display:'flex',justifyContent:'end'}}>
                <ClickBox style={{minWidth:'100px',margin:'10px 20px'}} type="submit">{submitTitle}</ClickBox>
            </div>
        </form>
    </div>)
}