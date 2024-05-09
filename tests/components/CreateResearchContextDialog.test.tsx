import { expect, describe, it, assert } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CreateResearchContextDialog } from "@/components/dialog/CreateResearchContextDialog";
import { act } from 'react-dom/test-utils';


describe("<CreateResearchContextDialog/>", () => {

    it("should render the trigger of the dialog", () => {
        render(<CreateResearchContextDialog buttonAction={() => {}} />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render the dialog when the trigger is clicked", () => {
        render(<CreateResearchContextDialog buttonAction={() => {}} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it('pass the correct values to the buttonAction function when the create button is clicked', async () => {

        const testName = 'Test Name'
        const testDescription = 'Test description for a test research context'

        let isCalled = false;
        let receivedInputValues;

        // Mock an alert function
        const mockButtonAction = (inputValues: { [key: string]: string }) => {
            isCalled = true;
            receivedInputValues = inputValues;
        };

        // Render the component with the mock alert function as the buttonAction prop
        render(<CreateResearchContextDialog buttonAction={mockButtonAction} />);
        const triggerButton = screen.getByRole("button");
        fireEvent.click(triggerButton);

        expect(screen.getByRole("dialog")).toBeInTheDocument();

        // Simulate user input
        const nameInput = screen.getByLabelText('Name');
        const descriptionInput = screen.getByLabelText('Description');
        fireEvent.input(nameInput, { target: { value: `${testName}` } });
        fireEvent.input(descriptionInput, { target: { value: `${testDescription}`} });

        // Simulate button click
        const button = screen.getByText('Create new research context');
        act(() => {
            fireEvent.click(button);
        });

        // Check if mockButtonAction has been called
        expect(isCalled).toBe(true);

        // Check if the inputs passed to the button action are correct
        expect(receivedInputValues).toEqual({
            researchContextName: testName,
            researchContextDescription: testDescription
        });



    });

});

