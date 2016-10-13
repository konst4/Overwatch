/**
 * Created by konstantin on 9/28/16.
 */
import React from "react";

export default class Region extends React.Component{
render(){
    return <select id="region">
        <option value="us">United States</option>
        <option value="korea">Korea</option>
        <option value="japan">Japan</option>
        <option value="russia">Russia</option>
    </select>;
};
}