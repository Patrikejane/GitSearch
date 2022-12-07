import { FC } from "react";

type Props = {
    login: string;
    description: string;
    full_name: string;
};

const Row: FC<Props> = ({ login, description, full_name }) => {
    return (
        <tr>
            <td>{full_name}</td>
            <td>{description}</td>
            <td>{login}</td>
        </tr>
    );
};

export default Row;
