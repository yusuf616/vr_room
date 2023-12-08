import 'styles/clickbox.css';


export const ClickBox = ({
    className = '',
    style = '',
    children,
    onClick = () => { },
    value = null,
    type='click'
}) => {
    const componentClassName = ' click-box ' + className;
    const componentStyle = { ...style };
    return <div onClick={() => onClick(value)} className={componentClassName} style={componentStyle}>
        <button type={type} className='bottom-box'>
            {children || 'Click'}
        </button>
    </div>
}