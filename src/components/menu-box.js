function MenuBox(props){

    //Instead of changeAppContent, react router should be used for client routing.
    // changeAppContent method is used here only for demo purpose as it's lighter than react routing

    return (
        <div className="w-50 menu">
            <div className="menu-item" onClick={() => props.changeAppContent(1)}>Todo App</div>
            <div className="menu-item" onClick={() => props.changeAppContent(2)}>Tracking App</div>
            <div className="menu-item" onClick={() => props.changeAppContent(3)}>Reporting App</div>
        </div>
    );
};

export default MenuBox;