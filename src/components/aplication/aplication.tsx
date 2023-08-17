import React from 'react'

const Aplication = () => {
    return (
        <>
            <h1>Job application form</h1>
            <h2>Section 1</h2>
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                   <input type="text" id="name" name="name" required /> 
                </div>
                <div>
                    <label htmlFor="name">Bio</label>
                   <textarea  id="bio" name="bio" required ></textarea> 
                </div>
                <div>
                    <label htmlFor="job-location">Name</label>
                    <select id="job-location" name="job-location" required>
                        <option value="" disabled selected>Selecciona un país</option>
                        <option value="United States">Estados Unidos</option>
                        <option value="United Kingdom">Reino Unido</option>
                        <option value="Canada">Canadá</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                    <input type="checkbox" id="terms" name="terms" required />I agreed to the terms and conditions
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
}

export default Aplication
