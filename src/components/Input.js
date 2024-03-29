export default function Input ({label, type, name, value, onInputChange}){
    return(
        <>
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={onInputChange}/>
        </>
    )
}