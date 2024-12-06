export default function CheckBoxformInput({htmlFor, labelText, type, name, value}) 
{
    return (
        <>
            <div className="flex justify-between items-center p-4 bg-green-400 w-full">
                <label htmlFor={htmlFor} className="cursor-pointer">{labelText}</label>
                <input
                    type={type}
                    id={htmlFor}
                    name={name}
                    value={value}
                    className="peer hidden"
                />
                <span className="h-[30px] w-[30px] rounded-full bg-white peer-checked:bg-green-600"></span>
            </div>
            {/* <div className="flex justify-between items-center p-4 bg-green-400 w-[400px]">
                <label htmlFor="option_two" className="cursor-pointer">Option 2</label>
                <input
                    type="radio"
                    id="option_two"
                    name="options"
                    value="option_two"
                    className="peer hidden"
                />
                <span className="h-[50px] w-[50px] rounded-full bg-white peer-checked:bg-green-600"></span>
            </div>
            <div className="flex justify-between items-center p-4 bg-green-400 w-[400px]">
                <label htmlFor="option_three" className="cursor-pointer">Option 3</label>
                <input
                    type="radio"
                    id="option_three"
                    name="options"
                    value="option_three"
                    className="peer hidden"
                />
                <span className="h-[50px] w-[50px] rounded-full bg-white peer-checked:bg-green-600"></span>
            </div> */}
        </>



    )
}