import currencyFormatter from "../helpers/currencyFormatter";

const HouseRow = ({house} ) => {
    return (
        <tr>
            <td>{house.address}</td>
            <td>{house.country}</td>
            {/* conditional application  of text-primary css class  
            house.price && checks if house.price is defined  */}
            { house.price && (
            <td className={`${house.price >= 1000000 ? "text-primary" : "" }`}> 
            {currencyFormatter.format(house.price)}
            </td>
            )}
        </tr>
    );
};

export default HouseRow;