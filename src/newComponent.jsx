
const newComponent=()=>{
   return(<>
<div className="first">
        <h2 className="sec">Section A</h2>
        </div>
    <div className="container">
        <h1>1. Which device is used for Connection</h1>
        <hr/>
       
        <ul>
            <li>Modem</li>
            <li>Router</li>
            <li>LAN Cable</li>
            <li>PenDrive</li>

        </ul>
        <button onClick={checkAns}> Next</button>
        <div className="index">1 of 5 Questions</div>
        </div>
        
    </>);
}
export default newComponent;