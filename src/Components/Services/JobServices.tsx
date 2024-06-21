


function JobServices() {
  const languages = [
    {
      img:"/images/languages/html.png",
      label:"Html"
    },
    {
      img:"/images/languages/css.png",
      label:"CSS"
    },
    {
      img:"/images/languages/bootstrap.png",
      label:"BOOTSTRAP"
    },
    {
      img:"/images/languages/material ui.png",
      label:"MATERIAL UI"
    },
    {
      img:"/images/languages/reactjs.png",
      label:"REACT JS"
    },
    {
      img:"/images/languages/vite.png",
      label:"VITE"
    },
    {
      img:"/images/languages/javascript.png",
      label:"JAVASCRIPT"
    },
    {
      img:"/images/languages/typescript.png",
      label:"TYPESCRIPT"
    },
    {
      img:"/images/languages/node.js.png",
      label:"NODE JS"
    },
    {
      img:"/images/languages/expressjs.png",
      label:"EXPRESS JS"
    },
    {
      img:"/images/languages/mongo-db.png",
      label:"MONGO DB"
    },
  ]
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center w-100">
      {languages.map((lang)=>(
        <>
         <span
              className="d-block text-center text-light m-4"
              style={{ width: "150px" , height:"150px" }}
            >
              <img
              className=""
                src={lang.img}
                alt="...h"
                width="100%"
                height="100%"
                style={{
                  objectFit: "fill",
                  zIndex: "10",
                }}
              />
              <h5 className="">{lang.label}</h5>
            </span>
        </>
      ))} 
    </div>
  )
}

export default JobServices