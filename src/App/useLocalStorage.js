import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {

                let localStogrageItem = localStorage.getItem(itemName);
                let storageItem = localStogrageItem ? JSON.parse(localStogrageItem) : initialValue;
                setItem(storageItem);
                setLoading(false);

            } catch (error) {
                setError(true);
                setLoading(false);
            }
        }, 5000);
    });


    const saveItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem))
    }

    return {
        item,
        saveItem,
        loading,
        error
    };
};


export { useLocalStorage };