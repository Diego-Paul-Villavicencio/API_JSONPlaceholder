import React from "react";

function Posts({title, description}) {
    return (
        <div>
            <h1>{title ?? "Titulo"}</h1>
            <p>{description ?? "Descripcion"}</p>
        </div>
    )
}

export default Posts
