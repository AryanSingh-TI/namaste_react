/** CREATING A SIMILAR HTML STRUCTURE USING REACT
 * 
 * <div id ="parent">
 * 
 *     <div id="child_1">   
 *          <h1></h1>
 *          <h2></h2>
 *     </div>
 * 
 *     <div id="child_2">
 *          <h3></h3>
 *          <h4></h4>
 *     </div>
 * 
 * </div>
 */

const parent = React.createElement("div", {id:"parent"},
    //the third argument is used to pass the children of the tag while creating it
    //when there are more than one children(siblings) we can pass an array instead
    [
        React.createElement("div", {id:"child_1"},
            [
                //similary we can add siblings here through a list
                React.createElement("h1",{},"This is the H1 tag"),
                React.createElement("h2",{},"This is the H2 tag")
            ]
        ),
        React.createElement("div", {id:"child_2"},
            [
                React.createElement("h3",{},"This is the H3 tag"),
                React.createElement("h4",{},"This is the H4 tag")
            ]
        )

    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(parent)
root.render(parent)