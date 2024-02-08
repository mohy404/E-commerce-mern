// hooks/useBrandForm.ts
import { useState, ChangeEvent } from 'react';
import avatar from '../../assets/avatar.png'; // Adjust the path as needed

const useBrandForm = () => {
    const [img, setImg] = useState<string>(avatar);
    const [text, setText] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');

    const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]));
            setSelectedFile(e.target.files[0]);
            setError(''); // Clear error when a new file is selected
        }
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    return { img, text, selectedFile, isLoading, error, onImageChange, handleTextChange, setIsLoading, setError, setSelectedFile, setImg };
};

export default useBrandForm;
