"use client";

import { useRef, useState } from "react";
import { useMutation } from "convex/react";

import { Doc } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TitleProps {
    initialData: Doc<"documents">;
};

export const Title = ({
    initialData
}: TitleProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const update = useMutation(api.documents.update);
    
    const [title, setTitle] = useState(initialData || "Untitled");
    const [isEditing, setIsEditing] = useState(false);
    
    const enableInput = () => {
        setTitle(initialData.title);
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(0, inputRef.current.value.length)
        }, 0)
    }

    return (
        <div className="flex items-center gap-x-1">
            {!!initialData.icon && <p>{initialData.icon}</p>}

            {isEditing ? (
                <Input className="h-7 px-2 focus-visible:ring-transparent" />
            ) : (
                <Button 
                    onClick={() => {}}
                    variant="ghost"
                    size="lg"
                    className="font-normal h-auto p-3 w-64 text-lg">

                    <span className="truncate">{initialData?.title}</span>
                </Button>
            )}
        </div>
    )
}