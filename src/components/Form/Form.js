
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
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form =new FormData(e?.target);
        const data={}
        for(let [name, value] of form) {
            data[name]=value;
        }
        onSubmit(data);
       
    }

    const formContent =inputs.map((input_, index) =><div key={index}> 
        <input  type={input_?.type} name={input_?.name} placeholder={input_?.placeholder} />
    </div>)
    
    
    return (<div className={componentClassName} style={componentStyle}>
        <form onSubmit={handleSubmit}>
            {children || formContent}
            <div style={{display:'flex',justifyContent:'end'}}>
                <ClickBox style={{width:'100px',margin:'10px'}} type="submit">{submitTitle}</ClickBox>
            </div>
        </form>
    </div>)
}