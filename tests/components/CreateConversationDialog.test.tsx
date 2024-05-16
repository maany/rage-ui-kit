import { expect, describe, it, assert } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CreateConversationDialog, buttonActionInputValues } from "@/components/dialog/CreateConversationDialog";
import { act } from 'react-dom/test-utils';


describe("<CreateConversationDialog/>", () => {

    it("should render the trigger of the dialog", () => {
        render(<CreateConversationDialog buttonAction={() => {}} />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render the dialog when the trigger is clicked", () => {
        render(<CreateConversationDialog buttonAction={() => {}} />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it('should pass the correct values to the buttonAction function when the create button is clicked', async () => {

        const testTitle = 'Test Title'

        let isCalled = false;
        let receivedInputValues;

        // Mock an alert function
        const mockButtonAction = (inputValues: buttonActionInputValues) => {
            isCalled = true;
            receivedInputValues = inputValues;
        };

        // Render the component with the mock alert function as the buttonAction prop
        render(<CreateConversationDialog buttonAction={mockButtonAction} />);
        const triggerButton = screen.getByRole("button");
        fireEvent.click(triggerButton);

        expect(screen.getByRole("dialog")).toBeInTheDocument();

        // Simulate user input
        const titleInput = screen.getByLabelText('Title');
        fireEvent.input(titleInput, { target: { value: `${testTitle}` } });

        // Simulate button click
        const button = screen.getByText('Create new conversation');
        act(() => {
            fireEvent.click(button);
        });

        // Check if mockButtonAction has been called
        expect(isCalled).toBe(true);

        // Check if the inputs passed to the button action are correct
        expect(receivedInputValues).toEqual({
            conversationTitle: testTitle,
        });

        // Check if the inputs passed to the button action are different than other values
        expect(receivedInputValues).not.toEqual({
            conversationTitle: `${testTitle} different`,
        });

    });


    it('should show "Required Field" in the screen if the input value is empty', async () => {
            
            let isCalled = false;
            let receivedInputValues;
    
            // Mock an alert function
            const mockButtonAction = (inputValues: buttonActionInputValues) => {
                isCalled = true;
                receivedInputValues = inputValues;
            };
    
            // Render the component with the mock alert function as the buttonAction prop
            render(<CreateConversationDialog buttonAction={mockButtonAction} />);
            const triggerButton = screen.getByRole("button");
            fireEvent.click(triggerButton);
    
            // Simulate user input
            const titleInput = screen.getByLabelText('Title');
            fireEvent.input(titleInput, { target: { value: `` } });
    
            // Simulate button click
            const button = screen.getByText('Create new conversation');
            act(() => {
                fireEvent.click(button);
            });
    
            // Check if mockButtonAction has been called
            expect(isCalled).toBe(false);
    
            // Check if the inputs passed to the button action are correct
            expect(receivedInputValues).toBeUndefined();
    
            // Check if the inputs passed to the button action are different than other values
            expect(receivedInputValues).not.toEqual({
                conversationTitle: `Test Title`,
            });

            const errorMessages = screen.queryAllByText('Required field');
            expect(errorMessages).toHaveLength(1);


    });

});

