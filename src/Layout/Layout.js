

export const Layout=({
    children,
    className='',
    style='',
    header=<></>,
    footer=<></>
})=>{
    const componentClassName=' w-full h-full flex justify-center items-center '+className;
    const componentStyle={...style};
    return <div className={componentClassName} style={componentStyle}>
       {header}
       {children}
       {footer}
    </div>
}