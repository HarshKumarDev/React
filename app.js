const heading = React.createElement(
    "h1",
    {id:"heading", xyz:"abc"},
    "Hello World from Reactt!"
    );
    //console.log(heading);
   // const root = ReactDOM.createRoot(document.getElementById("root"));
   // root.render(heading);

    /*
    <div id="parent">
        <div id="child">
            <h1>Hello World</h1> 
        </div>
        </div>

        const title = React.createElement(("div"),{id:"parent"},
   React.createElement(("div"),{id:"child"},
    React.createElement("h1",{},"Hello World")
    )
    );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(title);


        2nd 

        <div id="parent">
        <div id="child">
            <h1>Hello World</h1> 
            <h2>Hello World</h2> 
        </div>
        </div>


    */
        const title = React.createElement(("div"),{id:"parent"},
        React.createElement(("div"),{id:"child"},
        [React.createElement("h1",{},"Hello World"), React.createElement("h2",{},"Hello World")]
        )
        );
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(title);