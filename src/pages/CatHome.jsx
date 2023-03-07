import { useForm } from "../hooks/useForm";
import { useEffect } from "react";
import { postCat } from "../helpers/PostCat";
import { getCats } from "../helpers/getCats";
import { updateCatImg } from "../helpers/updateCatImg";

export const CatHome = () => {
    
    const { formState, onInputChange, onResetForm, nombre, edad, genero } = useForm({
        "nombre": "",
        "edad": "",
        "genero": "",
        "img": ""
    });


    const onSubmitForm = async (event) => {
        event.preventDefault();
        /* if (inputValue.trim().length <= 1) return; */
        await getCats();
        await postCat(formState);
        await updateCatImg(formState)
        
        onResetForm();
    }

    /* console.log(formState) */

    return (
        <>
            <form className="container">
                <label>
                    Nombre del gato:
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={nombre}
                        onChange={onInputChange}
                    />
                </label>

                <label>
                    Edad del gato:
                    <input
                        type="text"
                        className="form-control"
                        name="edad"
                        value={edad}
                        onChange={onInputChange}
                    />
                </label>

                <label>
                    Genero del gato:
                    <input
                        type="text"
                        className="form-control"
                        name="genero"
                        value={genero}
                        onChange={onInputChange}
                    />
                </label>

                <button
                    className="btn btn-primary"
                    onClick={onSubmitForm}
                >
                    Publicar gato
                </button>

                <label>
                    Ingrese la imagen del gato:
                    <input
                        type="file"
                        className="form-control"
                        name="img"
                        value={img}
                        onChange={onInputChange}

                    />
                </label>
            </form>
        </>
    )

}