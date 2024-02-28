"use client";

import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
};

export const ConfirmModal = ({
    children, onConfirm
}: ConfirmModalProps) => {
    const handleConfirm = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        onConfirm();
    }
    
    return (
    <AlertDialog>
        <AlertDialogTrigger onClick={(e) => e.stopPropagation()} asChild>
            {children}
        </AlertDialogTrigger>
        
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Are you sure ?
                </AlertDialogTitle>

                <AlertDialogDescription>
                    This acton is definitive and cannot be rolled back
                </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter onClick={e => e.stopPropagation()}>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction onClick={handleConfirm}>
                    Confirm
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
    )
}