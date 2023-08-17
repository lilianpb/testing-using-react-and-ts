import { render, screen } from "@testing-library/react"
import Aplication from "./aplication"

describe('Aplication', () => {
    it('render correctly', () => {
        render(<Aplication />);

        const pageHeading = screen.getByRole('heading', {
            //  name:/Job application form/i el leven lleganhasta 6 segun los h1 hasta el h6
            level: 1,
        })
        expect(pageHeading).toBeInTheDocument();

        const pageSection = screen.getByRole('heading', {
            level: 2
        })
        expect(pageSection).toBeInTheDocument();

        //para encontrarlo por nombre de etiqueta 
        const nameElemento = screen.getByLabelText('Name',{
            selector:"input",  //esto se hace en el caso que hayan dos label con el mismo value
        })
        expect(nameElemento).toBeInTheDocument();

        const nameElemento2 = screen.getByLabelText('I agreed to the terms and conditions')
        expect(nameElemento2).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: /Name/i
        }) //aqui probamos si en el arcivo hay un input text
        expect(nameElement).toBeInTheDocument();
        const bioElement = screen.getByRole('textbox', {
            name: /Bio/i
        })
        expect(bioElement).toBeInTheDocument();

        const JobLocationElement = screen.getByRole('combobox')
        expect(JobLocationElement).toBeInTheDocument();

        const termsAndConditions = screen.getByRole('checkbox')
        expect(termsAndConditions).toBeInTheDocument();

        const buttomElement = screen.getByRole('button')
        expect(buttomElement).toBeInTheDocument();

    });



})