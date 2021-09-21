let navValue = false;

const changeNav = (state = navValue, action) => {
    switch(action.type){
        case "NAVFLASE": return state = false;
        case "NAVTRUE": return state = true;
        default: return state;
    }
}

export default changeNav;