import '../index.css'

const year = new Date().getFullYear();

export const Footer = ()=>{

    <>
        <div className='footer'>
            <p>copyrightsÂ© <span style={{textDecoration: "line-through"}}>Musharaf Aijaz</span> {year} </p>
        </div>
    </>
}