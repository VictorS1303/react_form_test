import CheckBoxFormInput from './CheckBoxFormInput.jsx'

export default function Form({ htmlFor, labelText, type, name, value })
{
    const checkBoxInputs = [
        {
            htmlFor: 'option_1',
            labelText: 'Option 1',
            type: 'radio',
            name: 'option_1',
            value: 'option_1',
            id: 'option_1', // Make sure to set a unique id
        },
        {
            htmlFor: 'option_2',
            labelText: 'Option 2',
            type: 'radio',
            name: 'option_2',
            value: 'option_2',
            id: 'option_2', // Make sure to set a unique id
        },
    ];

    return (
        <>
            <form className="bg-white shadow-md h-96 w-80 rounded-md border-2 border-blue-400">
                <h2 className="text-center text-blue-400 mt-6 uppercase text-xl">Subscribe</h2>

                <div className="container form-content-container flex flex-col justify-center">
                    {
                    checkBoxInputs.map((checkBoxInput) => (
                        <CheckBoxFormInput key={checkBoxInput.id}>
                            {
                            /* Render the label text inside the <label> tag */}
                            <label htmlFor={checkBoxInput.htmlFor} className="cursor-pointer">
                                {checkBoxInput.labelText}
                            </label>
                            <input
                                type={checkBoxInput.type}
                                id={checkBoxInput.htmlFor}
                                name={checkBoxInput.name}
                                value={checkBoxInput.value}
                            />
                        </CheckBoxFormInput>
                    ))}
                </div>
            </form>
        </>
    );
}
