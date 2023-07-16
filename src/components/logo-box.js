import logoExpleo from './expleo-logo.png';

function LogoBox(){
    return (
        <div className="w-25">
            <div className="image-box">
                <img src={logoExpleo} alt="Logo" className="image-logo" />
            </div>
        </div>
    );
};

export default LogoBox;