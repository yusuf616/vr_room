import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { VRButton,XR,Hands,Controllers } from "@react-three/xr";
import { Scene } from "components/Scene/Scene";
import {useNavigate, useParams} from 'react-router-dom';
import { ClickBox } from "utils/ClickBox";


export const Page=({
    vrButton=true,
    className="",
    style={},
    children,
    id=null
})=>{
    const componentClassName = '  w-full h-full relative ' + className;
    const componentStyle = { ...style };
    const params=useParams();
    const navigate=useNavigate();
    return(<div className={componentClassName} style={componentStyle}>
        {params?.id ?<div className='absolute top-2 right-2 z-50'>
            <ClickBox onClick={()=>{navigate(-1)}} style={{ color:'#999'}} >Back</ClickBox>
        </div>:<></>}
        <Canvas style={{backgroundColor:'#339'}}>
          
            <OrbitControls/>
            <XR>
                <Hands></Hands>
                <Controllers></Controllers>
                <Scene>

                </Scene>             
            </XR>
        </Canvas>
        {vrButton && <ClickBox className='relative' ><VRButton /></ClickBox>}
    </div>);
}