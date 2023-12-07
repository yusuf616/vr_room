export const Footer=({
    children,
    className='',
    style='',
})=>{
    const componentClassName=' w-full absolute bottom-0 '+className;
    const componentStyle={...style};
    return <div className={componentClassName} style={componentStyle}>
       {children}
    </div>
}