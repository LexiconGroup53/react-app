import {useForm} from "react-hook-form";

export const AddRef = ({collection, setCollection}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => setCollection([...collection, data]);
    return (
        <div>
            <p>Add new reference</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title")} />
                <input type="text" {...register("creator")}/>
                <input type="submit" value="Add new ref"/>
            </form>
        </div>
    )
}