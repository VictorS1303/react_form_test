export default function Input({htmlFor, labelText, type, placeholder}) 
{
    return (
        <div>
            <label htmlFor={htmlFor} className="block text-blue-400">{labelText}</label>
            <input type={type} id={htmlFor} placeholder={placeholder} />
        </div>
    ) 
}