export const Header=({
    children,
    className='',
    style='',
})=>{
    const componentClassName=' w-full absolute top-0 '+className;
    const componentStyle={...style};
    return <div className={componentClassName} style={componentStyle}>
        
       {children}
    </div>
}