import React from "react";

 function PageTitle(props:any) {
    console.log("PageTitle renderig");
    return (
      <h1> { props.title } </h1>
    )
  }

  export default PageTitle