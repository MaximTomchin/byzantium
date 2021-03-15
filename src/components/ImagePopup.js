import React, {useEffect, useCallback} from 'react';

const ImagePopup = React.memo ((props) => {
    const escFunction = useCallback((evt) => {
        if(evt.keyCode === 27) {
            props.onClose();
        }
    }, [props]);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, [escFunction]);

    return (
        <div className={`popup popup_type_image ${(props.card ? ' popup_opened' : '')}`} >
            <div className="popup__overlay" onClick={props.onClose} />
            <figure className="popup__image-block">
                <button
                    className="popup__close-button popup__close-button_type_image"
                    type="reset"
                    aria-label="Close"
                    onClick={props.onClose}
                />
                <img
                    src={props.card ? props.card.image : ''}
                    className="popup__image"
                    alt={props.card ? props.card.name : ''}
                />
                <p className="popup__caption">{props.card ? props.card.name : ''}</p>
            </figure>
        </div>
    );
})

export default ImagePopup;