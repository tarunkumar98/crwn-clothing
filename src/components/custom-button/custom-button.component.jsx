import './custom-button.style.scss';

const CustomButton=({children,isGoogleSignIN,...otherProps})=>{
    return (
        <button className={`${isGoogleSignIN?'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
export default CustomButton;