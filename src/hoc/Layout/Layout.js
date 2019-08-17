import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Aux from "../Aux/Aux";

const layout = (props) => (
    <Aux>
        <Toolbar/>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default layout;